import React from "react";
import BannerImg from "../../assets/4547829.jpg"; 
import { MdVerified, MdLocalShipping, MdPayment, MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white dark:bg-slate-950 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[400px] h-[350px] w-full mx-auto object-contain drop-shadow-xl"
            />
          </div>

          {}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 text-left">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5 dark:text-gray-400">
              Don't let the best deals freeze away this winter. Grab your favorite style essentials at half price and enjoy a seamless shopping experience with secure payments.
            </p>

            {}
            <div className="flex flex-col gap-4">
              
              {/* Quality Products Icon */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <div className="text-2xl h-12 w-12 rounded-full flex items-center justify-center bg-violet-100 dark:bg-violet-400/20 shadow-sm">
                  <MdVerified className="text-violet-700 dark:text-violet-400" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">Quality Products</p>
              </div>

              {/* Fast Delivery Icon */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <div className="text-2xl h-12 w-12 rounded-full flex items-center justify-center bg-orange-100 dark:bg-orange-400/20 shadow-sm">
                  <MdLocalShipping className="text-orange-700 dark:text-orange-400" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">Fast Delivery</p>
              </div>

              {/* Easy Payment method Icon */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <div className="text-2xl h-12 w-12 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-400/20 shadow-sm">
                  <MdPayment className="text-green-700 dark:text-green-400" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">Easy Payment method</p>
              </div>

              {/* Get Offers Icon */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <div className="text-2xl h-12 w-12 rounded-full flex items-center justify-center bg-yellow-100 dark:bg-yellow-400/20 shadow-sm">
                  <MdLocalOffer className="text-yellow-700 dark:text-yellow-400" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">Get Offers</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;