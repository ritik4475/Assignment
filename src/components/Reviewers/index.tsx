import { IoStar, IoStarHalf } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card";
import { SiComma } from "react-icons/si";
import Image1 from "../../assets/images/Image.png";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    description:
      "“We found an apartment within 3 weeks with WhatApartment!. We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!”",
  },
  {
    id: 2,
    description:
      "“We found an apartment within 3 weeks with WhatApartment!. We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!”",
  },
  {
    id: 3,
    description:
      "“We found an apartment within 3 weeks with WhatApartment!. We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!”",
  },
  {
    id: 4,
    description:
      "“We found an apartment within 3 weeks with WhatApartment!. We received emails from WhatApartment at an amazing speed. And we often were one of the first to respond!”",
  },
];

const Reviewers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid justify-center bg-[#28214B] py-16 text-white">
      <div>
        <div className="mb-5 md:text-4xl text-3xl item text-center font-semibold">
          What others say about WhatApartment
        </div>
        <div className="flex md:gap-3 gap-2 md:mt-7 mt-5 items-center justify-center">
          <IoStar size={22} className="text-[#219653]" />
          <span className="md:text-lg font-medium">Trustpilot</span>
          <div className="flex gap-1">
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStar className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
            <IoStarHalf className="bg-[#219653] text-gray-200 p-1 md:w-5 md:h-5" />
          </div>
          <p className="text-xs md:text-sm text-white">
            Based on <span className="underline">1096 reviews</span>
          </p>
        </div>
        {/* Desktop Grid */}
        <div
          ref={containerRef}
          className="flex flex-row p-10 overflow-scroll w-[350px] md:w-full md:overflow-hidden gap-4"
        >
          {cards.map((card) => (
            <Card key={card.id} className="shadow-lg rounded-xl bg-white">
              <CardContent>
                <div className="flex">
                  <SiComma size={30} className="rotate-180 text-gray-500" />
                  <SiComma
                    size={30}
                    className="rotate-180 text-gray-500 ml-[-10px]"
                  />
                </div>
                <p className="text-sm text-black my-4">
                  <span className="font-semibold">
                    {card.description?.slice(
                      0,
                      card?.description?.indexOf("!") + 1
                    )}
                  </span>
                  {card?.description?.slice(
                    card?.description?.indexOf("!") + 1
                  )}
                </p>
                <div className="grid gap-2">
                  <img src={Image1} alt="profile" />
                  <p className="text-black">Marina Brand</p>
                  <p className="text-gray-500 text-sm">Written on Truspilot</p>
                </div>
                <div className="flex md:gap-3 gap-2 md:mt-7 mt-5 items-center w-[240px]">
                  <div className="flex gap-1">
                    <IoStar className="bg-[#219653] text-gray-200 p-1 w-6 h-6 md:w-5 md:h-5 " />
                    <IoStar className="bg-[#219653] text-gray-200 p-1 w-6 h-6 md:w-5 md:h-5" />
                    <IoStar className="bg-[#219653] text-gray-200 p-1 w-6 h-6 md:w-5 md:h-5" />
                    <IoStar className="bg-[#219653] text-gray-200 p-1 w-6 h-6 md:w-5 md:h-5" />
                    <IoStarHalf className="bg-[#219653] text-gray-200 w-6 h-6 p-1 md:w-5 md:h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex items-center md:justify-center">
        <div className="flex justify-center w-[200px] md:mt-5">
          <button className="border rounded-md p-3 px-10 font-medium ml-3 md:ml-0">
            See all reviews
          </button>
        </div>
        <div className="text-end md:hidden mr-5">
          <button onClick={() => scroll("left")} className="border p-3 rounded-md">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="border p-3 ml-3 rounded-md">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviewers;
