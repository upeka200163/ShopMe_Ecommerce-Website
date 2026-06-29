import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Banner from "../../assets/website/footer-pattern.jpg";

const Footer = () => {
  return (
    <div className="relative text-white bg-[#212529] overflow-hidden">
      
      { 
          }
      <div 
        style={{ backgroundImage: `url(${Banner})` }}
        className="absolute inset-0 bg-bottom bg-no-repeat bg-cover pointer-events-none filter hue-rotate-[175deg] saturate-[1.4] brightness-[1.1] z-0"
      />

      {}
      <div className="container mx-auto relative z-10">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-10">
          
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-4 flex items-center gap-2 tracking-wide">
              <FiShoppingBag size="30" className="text-blue-400" />
              ShopMe
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed pr-4">
              Your ultimate destination for trendy fashion and premium electronics. Shop with confidence and experience fast, reliable delivery to your doorstep.
            </p>
          </div>

          {/* Footer Links Area */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            
            {/* Important Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-4 text-gray-100">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "Home", link: "/#" },
                    { title: "About", link: "/#about" },
                    { title: "Contact", link: "/#contact" },
                    { title: "Blog", link: "/#blog" },
                  ].map((link) => (
                    <li
                      className="cursor-pointer text-sm text-gray-300 hover:text-blue-400 hover:translate-x-1 duration-300 font-medium"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* General Links */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-4 text-gray-100">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "Home", link: "/#" },
                    { title: "About", link: "/#about" },
                    { title: "Contact", link: "/#contact" },
                    { title: "Blog", link: "/#blog" },
                  ].map((link) => (
                    <li
                      className="cursor-pointer text-sm text-gray-300 hover:text-blue-400 hover:translate-x-1 duration-300 font-medium"
                      key={link.title}
                    >
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links & Contacts */}
            <div className="py-8 px-4">
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="hover:text-pink-500 duration-300 hover:scale-110">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-500 duration-300 hover:scale-110">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="hover:text-blue-400 duration-300 hover:scale-110">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white duration-300 cursor-pointer">
                  <FaMapLocationDot className="text-xl" />
                  <p className="text-sm">Indore, Madhya Pradesh</p>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white duration-300 cursor-pointer">
                  <IoCall className="text-xl" />
                  <p className="text-sm">+91 123456789</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
