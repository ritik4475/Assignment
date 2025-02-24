import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="md:w-[60%] mx-auto m-5 my-16">
      <div className="flex justify-center md:text-4xl text-2xl font-bold mb-5">
        Frequently Asked Questions
      </div>
      <div className="mx-5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className="border-none hover:outline-none"
          >
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              On average, how long does it take to find a home through Rentbird?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              How does WhatApartment work?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm  text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              Do you also rent out homes?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm  text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              How does WhatApartment work?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              Why should I pay for WhatApartment?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              I see a property I like. How can I view it?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
            <hr className="text-gray-300" />
          </AccordionItem>
          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="md:text-[20px] text-[16px]">
              What if I'm unhappy?
            </AccordionTrigger>
            <AccordionContent className="md:text-[16px] text-sm text-[#757B8A]">
              Sit back and relax as we scan +100 listing websites every minute.
              Less time searching, more time imagining where to put your couch.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex justify-center my-5 mb-10">
        <button className="text-[#3A76F0] mx-7 md:mx-0 font-bold border border-[#3A76F0] rounded-md cursor-pointer p-3">
          See how it works & other FAQs
        </button>
      </div>
    </div>
  );
};

export default Faq;
