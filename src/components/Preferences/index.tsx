import { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import Image from "../../assets/images/Group 13845.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Prefrences = () => {
  const [slide, setSlide] = useState("location");
  const [selectedSurface, setSelectedSurface] = useState<number>(0);
  const [selectedRooms, setSelectedRooms] = useState<number>(0);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div
      className={`relative ${
        slide === "requirements" ? "mb-[400px]" : "md:mb-[250px] mb-[430px]"
      }`}
    >
      <div className="grid justify-center bg-[#28214B] text-white pt-10 pb-[350px]">
        <div className="">
          <p className="md:text-5xl text-3xl text-center font-bold mb-7">
            Set Your Preferences
          </p>
          <p className="text-center text-sm md:text-[16px]">
            Create your search profile in less than 5 minutes
          </p>
        </div>
      </div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 rounded-md items-center justify-center bg-white shadow-lg p- md:p-10 md:px-20">
        <p className="flex justify-between items-center px-6 mt-10 mb-1 md:mt-0">
          <FaRegCircleDot className="md:w-6 md:h-6 text-[#3A76F0]" />
          <hr
            className={`md:w-[200px] w-[50px] h-1 text-white ${
              slide === "requirements" || slide === "search"
                ? "bg-[#3A76F0]"
                : "bg-gray-200"
            }`}
          />
          <FaRegCircleDot
            className={`md:w-6 md:h-6 ${
              slide === "requirements" || slide === "search"
                ? "text-[#3A76F0]"
                : ""
            }`}
          />
          <hr
            className={`md:w-[200px] w-[50px] h-1 text-white ${
              slide === "search" ? "bg-[#3A76F0]" : "bg-gray-200"
            }`}
          />
          <FaRegCircleDot
            className={`md:w-6 md:h-6 ${
              slide === "search" ? "text-[#3A76F0]" : ""
            }`}
          />
        </p>
        <div className="grid grid-cols-3 text-gray-500 text-xs md:text-sm px-3 md:px-2">
          <p className="text-[#3A76F0]">Location</p>
          <p
            className={`text-center ${
              slide === "requirements" || slide === "search"
                ? "text-[#3A76F0]"
                : ""
            }`}
          >
            Requirements
          </p>
          <p
            className={`text-end ${slide === "search" ? "text-[#3A76F0]" : ""}`}
          >
            Start Search
          </p>
        </div>
        {slide === "location" && (
          <div className="md:mt-10 mt-4 md:flex gap-5 p-3 md:p-0">
            <div className="mt-5">
              <div className="">
                <p className="font-bold">City</p>
                <select
                  defaultValue="ams"
                  className="border border-gray-300 rounded-md md:w-[330px] w-full py-2 px-2 mt-2"
                >
                  <option value="ams">Amsterdam</option>
                  <option value="was">Washington</option>
                </select>
              </div>
              <div className="mt-5">
                <p className="font-bold">Neighbourhoods</p>
                <select
                  defaultValue="ams"
                  className="border border-gray-300 rounded-md md:w-[330px] py-2 px-2 mt-2"
                >
                  <option value="ams">
                    Bos en lommer, de Baarsjes, Houthaven
                  </option>
                  <option value="was">
                    Bos en lommer, de Baarsjes, Houthaven
                  </option>
                </select>
              </div>
            </div>
            <div>
              <img src={Image} className="p-5 md:p-0 md:min-w-[400px]" alt="img" />
            </div>
          </div>
        )}

        {slide === "requirements" && (
          <div className="md:mt-10 mt-4 flex gap-5 p-2">
            <div>
              <div className="">
                <p className="font-bold text-lg mb-4">Price Range</p>
                <div className="flex gap-5">
                  <div>
                    <p>Minimum</p>
                    <div className="border rounded-md border-gray-300 md:w-[300px] flex justify-center items-center">
                      <span className="ml-2">$</span>{" "}
                      <input
                        className="w-full p-2 rounded-md focus-within:outline-0"
                        placeholder=""
                        value={9}
                      />
                    </div>
                  </div>
                  <div>
                    <p>Maximum</p>
                    <div className="border rounded-md border-gray-300 md:w-[300px] flex justify-center items-center">
                      <span className="ml-2">$</span>{" "}
                      <input
                        className="w-full p-2 rounded-md focus-within:outline-0"
                        placeholder=""
                        value={343}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="font-bold">Min Surface</p>
                <div className="md:flex gap-4 mt-2">
                  {["Any", "40m²", "60m²", "80m²", "100m²", "120m²"].map(
                    (btn, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSurface(idx)}
                        className={`px-4 py-1 rounded-full border border-gray-300 font-semibold m-1 md:m-0 ${
                          selectedSurface === idx
                            ? "bg-[#3A76F0] text-white"
                            : " hover:bg-gray-300"
                        }`}
                      >
                        {btn}
                      </button>
                    )
                  )}
                </div>
                <p className="mt-5 font-bold">Min # of Bedrooms</p>
                <div className="flex gap-5 mt-2">
                  {["1", "2", "3", "4"].map((btn, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRooms(idx)}
                      className={`px-7 py-1 rounded-full border border-gray-300 font-semibold ${
                        selectedRooms === idx
                          ? "bg-[#3A76F0] text-white"
                          : " hover:bg-gray-300"
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="font-bold">Furnished</p>
                <select
                  defaultValue="ams"
                  className="border border-gray-300 rounded-md w-[330px] py-2 mt-2 px-2"
                >
                  <option value="ams">It doesn't matter</option>
                  <option value="was">It doesn't matter</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {slide === "search" && (
          <div className="grid justify-center p-4 md:mt-10">
            <div className="md:flex gap-10 justify-center">
              <div>
                <p>Name</p>
                <input
                  placeholder="Enter Your Name"
                  className="border rounded-md border-gray-300 p-2 w-[300px] mt-2"
                />
              </div>
              <div className="mt-5 md:mt-0">
                <p>Email</p>
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  className="border rounded-md border-gray-300 p-2 w-[300px] mt-2"
                />
              </div>
            </div>
            <div className="md:flex gap-10 md:mt-7 mt-5 justify-center">
              <div>
                <p>Password</p>
                <div className="flex justify-center items-center border rounded-md border-gray-300 mt-2">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter Your Password"
                    className=" p-2 focus-within:outline-0 w-[270px]"
                  />
                  {!showPass ? (
                    <button onClick={() => setShowPass(true)}>
                      <EyeIcon className="text-gray-500 mr-2 cursor-pointer" />
                    </button>
                  ) : (
                    <button onClick={() => setShowPass(false)}>
                      <EyeOffIcon className="text-gray-500 mr-2 cursor-pointer" />
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-5 md:mt-0">
                <p>Confirm Password</p>
                <div className="flex justify-center items-center border rounded-md border-gray-300 mt-2">
                  <input
                    type={showConfirmPass ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    className=" p-2 focus-within:outline-0 w-[270px]"
                  />
                  {!showConfirmPass ? (
                    <button onClick={() => setShowConfirmPass(true)}>
                      <EyeIcon className="text-gray-500 mr-2 cursor-pointer" />
                    </button>
                  ) : (
                    <button onClick={() => setShowConfirmPass(false)}>
                      <EyeOffIcon className="text-gray-500 mr-2 cursor-pointer" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 text-gray-500">
              When you click “Create account,” we will create a free account for
              you. Clicking also means you agree to our privacy policy and
              general terms and conditions.
            </div>
          </div>
        )}

        <hr className="mt-10 text-gray-300" />
        <div className="flex justify-end gap-5 mt-5 mb-10 mr-4 md:mr-0 md:mb-0">
          {slide !== "location" && (
            <button
              className="text-black border border-gray-300 font-bold p-3 px-6 cursor-pointer rounded-md"
              onClick={() => {
                if (slide === "requirements") {
                  setSlide("location");
                } else {
                  setSlide("requirements");
                }
              }}
            >
              Back
            </button>
          )}
          <button
            className="text-white font-bold bg-[#3A76F0] p-3 px-6 cursor-pointer rounded-md"
            onClick={() => {
              if (slide === "requirements") {
                setSlide("search");
              } else if (slide === "location") {
                setSlide("requirements");
              } else {
                setSlide("account");
              }
            }}
          >
            {slide === "search" ? "Create Account" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prefrences;
