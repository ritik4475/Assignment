import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/images/Group.png";
import English from "../../assets/images/english.png";
import India from "../../assets/images/india.png";

// Define option type
interface LanguageOption {
  label: string;
  value: string;
  image?: string;
  children?: { label: string; value: string }[];
}

// Language Options with Parent-Child Relationship
const languageOptions: LanguageOption[] = [
  {
    label: "English",
    value: "en",
    image: English,
    children: [
      { label: "British English", value: "british-en" },
      { label: "American English", value: "american-en" },
    ],
  },
  {
    label: "Hindi",
    value: "hi",
    image: India,
    children: [
      { label: "Formal Hindi", value: "formal-hi" },
      { label: "Casual Hindi", value: "casual-hi" },
    ],
  },
];

// Get default selected values (English + its children)
const defaultSelectedValues = [
  languageOptions[0].value,
  ...languageOptions[0].children!.map((child) => child.value),
];

const Header = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultSelectedValues);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Determine language group of an option
  const getLanguageGroup = (value: string) => {
    return languageOptions.find((parent) =>
      parent.value === value || parent.children?.some((child) => child.value === value)
    );
  };

  // Handle checkbox selection
  const handleCheckboxChange = (value: string, isParent = false) => {
    let updatedValues = [...selectedValues];
    const selectedOption = getLanguageGroup(value);
    const otherLanguageGroup = languageOptions.find((lang) => lang.value !== selectedOption?.value);

    if (updatedValues.includes(value)) {
      // Remove item
      updatedValues = updatedValues.filter((item) => item !== value);

      if (isParent) {
        // Remove all child options if parent is unchecked
        const children = selectedOption?.children || [];
        updatedValues = updatedValues.filter((item) => !children.map((c) => c.value).includes(item));
      }
    } else {
      // Remove all other language options first
      if (otherLanguageGroup) {
        updatedValues = updatedValues.filter(
          (item) =>
            !otherLanguageGroup.children?.map((c) => c.value).includes(item) &&
            item !== otherLanguageGroup.value
        );
      }

      // Add new selection
      updatedValues.push(value);

      if (isParent) {
        // Add all children if parent is selected
        const children = selectedOption?.children || [];
        children.forEach((child) => {
          if (!updatedValues.includes(child.value)) {
            updatedValues.push(child.value);
          }
        });
      }
    }

    setSelectedValues(updatedValues);
  };

  // Handle deselect all
  const handleDeselectAll = () => {
    setSelectedValues([]);
  };

  // Get selected parent options to show in the box
  const selectedParents = languageOptions.filter((parent) =>
    parent.children?.some((child) => selectedValues.includes(child.value)) || selectedValues.includes(parent.value)
  );

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <img src={Logo} alt="logo" className="h-10" />
      </div>

      <div className="relative flex items-center gap-4">
        {/* Custom Select Box */}
        <div
          className="w-48 px-3 py-2 border border-gray-300 rounded-md bg-white cursor-pointer md:flex hidden items-center gap-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedParents.length > 0 ? (
            selectedParents.map((parent) => (
              <span key={parent.value} className="flex items-center gap-2">
                {parent.image && <img src={parent.image} alt={parent.label} className="h-5 w-5" />}
                {parent.label}
              </span>
            ))
          ) : (
            <span className="text-gray-400">Select Language</span>
          )}
        </div>

        {/* Custom Dropdown with Checkboxes */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-md rounded-md p-3 z-10">
            {/* Deselect All Button */}
            <button
              onClick={handleDeselectAll}
              className="w-full text-left px-2 text-[#3A76F0] font-semibold text-sm rounded-md mb-2"
            >
              Deselect all
            </button>

            {/* Render Checkboxes */}
            {languageOptions.map((option) => (
              <div key={option.value} className="mb-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value, true)}
                  />
                  {option.image && <img src={option.image} alt={option.label} className="h-5 w-5" />}
                  {option.label}
                </label>

                {/* Child Options */}
                <div className="pl-6 mt-1">
                  {option.children?.map((child) => (
                    <label key={child.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedValues.includes(child.value)}
                        onChange={() => handleCheckboxChange(child.value)}
                      />
                      {child.label}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hamburger Icon */}
        <button className="text-2xl border border-gray-300 p-2 rounded-md">
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
