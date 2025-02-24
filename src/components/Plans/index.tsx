import Image from "../../assets/images/Black (1).png";
import Image1 from "../../assets/images/Group 13842 (3).png";
import Image2 from "../../assets/images/Group 13842 (4).png";
import Image3 from "../../assets/images/Group 13842 (5).png";
import Image4 from "../../assets/images/Group 13842 (6).png";

const Plans = () => {
  return (
    <div className="md:mx-20 m-4">
      {" "}
      <div className="flex justify-center items-center">
        <div className="md:flex">
          <div className="flex justify-center items-center">
          <img src={Image} className="md:w-[550px] md:mt-10" alt="mobile-img" />
          </div>
          <div className="flex flex-col gap-8 md:mt-20">
            <div className="flex gap-3">
              <img src={Image1} className="w-9 h-9 mt-1" alt="img" />
              <div>
                <p className="font-semibold text-xl">
                  No more endless scrolling
                </p>
                <p className="text-gray-400 text-[14px] leading-5.5 mt-4 md:mt-1">
                  Stop spending countless hours to find a rental. We will do all
                  the work for you monitoring more than 30 websites. Less time
                  searching, more time imagining where to put your couch.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={Image2} className="w-9 h-9 mt-1" alt="img" />
              <div>
                <p className="font-semibold text-xl">Stay ahead of the rest</p>
                <p className="text-gray-400 text-[14px] leading-5.5 mt-4 md:mt-1">
                  Discover the latest available apartments before anyone else
                  with instant notifications.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={Image3} className="w-9 h-9 mt-1" alt="img" />
              <div>
                <p className="font-semibold text-xl">Searching with someone?</p>
                <p className="text-gray-400 text-[14px] leading-5.5 mt-4 md:mt-1">
                  Add your flatmate or partner to the hunt so they get instant
                  notifications too. Split the effort, the excitement, and the
                  bill.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={Image4} className="w-9 h-9 mt-1" alt="img" />
              <div>
                <p className="font-semibold text-xl">
                  5-day money back guarantee
                </p>
                <p className="text-gray-400 text-[14px] leading-5.5 mt-4 md:mt-1">
                  Unhappy with our service? Cancel during the first 5 days and
                  get a full refund. No hard feelings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-14 mt-14 md:mt-10">
        <button className="text-[#3A76F0] border rounded-md p-3 px-10 border-[#3A76F0] font-semibold">
          See pricing plans
        </button>
      </div>
    </div>
  );
};

export default Plans;
