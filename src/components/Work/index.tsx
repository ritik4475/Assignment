import Image1 from "../../assets/images/Settings-amico 1.png";
import Image2 from "../../assets/images/My answer-rafiki 1.png";
import Image3 from "../../assets/images/Apartment rent-pana 1.png";

const Work = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 md:px-24 px-7 py-10">
      <div className="grid text-center">
        <p className="font-bold md:text-3xl text-2xl md:mb-14 mb-10">
          How does WhatApartment work?
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:mx-10">
          <div className="grid gap-2">
            <div className="flex justify-center">
              <img src={Image1} className="w-[300px] h-[250px]" alt="img" />
            </div>
            <p className="font-semibold text-[#3A76F0] text-3xl">1</p>
            <p className="text-xl font-medium">Set your preferences</p>
            <p className="text-[14px] text-gray-500 leading-6">
              Customize your search filtering by location, price, and size. Now,
              sit back while we scan more than 30 websites.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-center">
              <img src={Image2} className="w-[300px] h-[280px]" alt="img" />
            </div>
            <p className="font-semibold text-[#3A76F0] text-3xl">2</p>
            <p className="text-xl font-medium">
              Receive matches in real-time on WhatsApp and email
            </p>
            <p className="text-[14px] text-gray-500 leading-6">
              As soon as a property fitting your requirements is listed, we will
              send it to you (and your buddy) on WhatsApp and email.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-center">
              <img src={Image3} className="w-[300px] h-[250px]" alt="img" />
            </div>
            <p className="font-semibold text-[#3A76F0] text-3xl">3</p>
            <p className="text-xl font-medium">
              Be the first to respond and secure your dream rental
            </p>
            <p className="text-[14px] text-gray-500 leading-6">
              Quickly respond in a few clicks and guarantee your viewing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
