import Logo from "../../assets/images/Group.png";

const Footer = () => {
  return (
    <div className="bg-[#28214B] text-white grid md:grid-cols-3 px-10 py-10">
      <div className="">
        <img src={Logo} alt="img" />
      </div>
      <ul className="grid gap-3 md:mt-0 mt-10">
        <li className="font-bold">Pages</li>
        <li>Home</li>
        <li>Reviews</li>
        <li>Prices</li>
        <li>Privacy & Terms of Use</li>
        <li>Blogs</li>
        <li>How it works and FAQs</li>
      </ul>
      <ul className="flex flex-col gap-3 md:mt-0 mt-10">
        <li className="font-bold">Contact Us</li>
        <li>support@whatapartment.com</li>
        <li>+61 7 3384 1822</li>
      </ul>
    </div>
  );
};

export default Footer;
