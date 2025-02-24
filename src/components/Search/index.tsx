import { IoStar, IoStarHalf } from "react-icons/io5";
import Image from "../../assets/images/Group 13843.png";
import Image2 from "../../assets/images/Group 13842.png";
import Image3 from "../../assets/images/Group 13842 (1).png";
import Image4 from "../../assets/images/Group 13842 (2).png";

const Search = () => {
  return (
    <div className="md:flex md:p-20 md:px-32 px-3 gap-10">
      <div className="mt-10">
        <p className="text-4xl font-bold mb-5 leading-10">Automate the search for your next rental home</p>
        <p className="font-medium">
          Easily find your long-term rental apartment in Madrid and Barcelona
          with WhatApartment.{" "}
        </p>
        <div className="grid gap-5 mt-7">
          <div className="flex gap-2">
            <img src={Image2} className="w-7 h-7" alt="img" />
            <div>
              <p className="text-[16px] leading-5.5">
                <span className="font-bold">
                  Save time and never miss a listing.
                </span>{" "}
                Specify your preferences and we will start looking for relevant
                matches in more than 30 websites.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
          <img src={Image3} className="w-7 h-7" alt="img" />
            <div>
              <p className="text-[16px] leading-5.5">
                <span className="font-bold"> Be the first to know. </span>{" "}
                Receive WhatsApp notifications as soon as a property that meets
                your criteria is listed on the market.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
          <img src={Image4} className="w-7 h-7" alt="img" />
            <div>
              <p className="text-[16px] leading-5.5">
                <span className="font-bold">Share your subscription. </span>{" "}
                Add a buddy to the hunt and stay in sync as both of you receive
                instant notifications.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:gap-3 gap-2 md:mt-7 mt-5 items-center">
          <IoStar size={22} className="text-[#219653]" />
          <span className="md:text-lg font-medium">Trustpilot</span>
          <div className="flex gap-1">
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStarHalf className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            Based on <span className="underline text-black">1096 reviews</span>
          </p>
        </div>
        <div>
            <button className="bg-[#3A76F0] rounded-md text-white p-4 font-semibold mt-7">Start Your Search Now</button>
        </div>
      </div>
      <img src={Image} className="md:w-[450px] mt-10 md:mt-0" alt="img" />
    </div>
  );
};

export default Search;
