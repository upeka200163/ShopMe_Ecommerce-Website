import React from "react";
import Img1 from "../../assets/Cloths/shirt.png"; //
import Img2 from "../../assets/Cloths/shirt2.png"; //[cite: 5]
import Img3 from "../../assets/Cloths/shirt3.png"; //[cite: 5]
import Img4 from "../../assets/Cloths/kids wear.png"; //[cite: 5]
import { FaStar } from "react-icons/fa"; //[cite: 5]

const ProductsData = [
  {
    id: 1,
    img: Img1, //[cite: 5]
    title: "Casual Wear", //[cite: 5]
    description:
      "Experience ultimate comfort with our premium casual shirts. Perfect for a relaxed day out or weekend getaways.", //[cite: 5]
  },
  {
    id: 2,
    img: Img2, //[cite: 5]
    title: "Printed Shirt", //[cite: 5]
    description:
      "Make a statement with our vibrant printed shirts. Crafted from breathable fabric for a stylish and bold look.", //[cite: 5]
  },
  {
    id: 3,
    img: Img3, //[cite: 5]
    title: "Women's Shirt", //[cite: 5]
    description:
      "Elegant and versatile women's shirts designed for every occasion. Upgrade your wardrobe with our latest trends.", //[cite: 5]
  },
  
  {
    id: 4,
    img: Img4, 
    title: "Kids Wear",
    description:
      "Discover our adorable and comfortable kids' collection. Designed for active days and everyday fun.",
  },
];

const TopProducts = ({ handleOrderPopup }) => { //[cite: 5]
  return (
    <div className="py-14"> {/*[cite: 5] */}
      <div className="container mx-auto"> {/*[cite: 5] */}
        
        {/* Header section - Centered */}
        <div className="text-center mb-24 max-w-[600px] mx-auto"> {/*[cite: 5] */}
          <p data-aos="fade-up" className="text-sm text-primary font-semibold tracking-widest uppercase"> {/*[cite: 5] */}
            Top Rated Products for you
          </p> {/*[cite: 5] */}
          <h1 data-aos="fade-up" className="text-4xl font-bold mt-2 mb-4"> {/*[cite: 5] */}
            Best Products
          </h1> {/*[cite: 5] */}
          <p data-aos="fade-up" className="text-sm text-gray-500"> {/*[cite: 5] */}
            Discover our handpicked selection of top-rated apparel. High-quality fabrics and trendy designs to elevate your everyday style.
          </p> {/*[cite: 5] */}
        </div>

        {/* Products grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-4 place-items-center">
          {ProductsData.map((data) => ( //[cite: 5]
            <div
              key={data.id} //[cite: 5]
              data-aos="zoom-in" //[cite: 5]
              className="rounded-3xl bg-white dark:bg-gray-800 hover:bg-black/90 dark:hover:bg-primary hover:text-white relative shadow-lg hover:shadow-2xl transition-all duration-300 group max-w-[280px] w-full"
            >
              {/* image section */}
              <div className="h-[120px]"> {/*[cite: 5] */}
                <img
                  src={data.img} //[cite: 5]
                  alt={data.title} //[cite: 5]
                  className="max-w-[130px] block mx-auto transform -translate-y-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
                />
              </div>
              
              {/* details section */}
              <div className="p-6 text-center"> {/*[cite: 5] */}
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-3"> {/*[cite: 5] */}
                  <FaStar className="text-yellow-400" /> {/*[cite: 5] */}
                  <FaStar className="text-yellow-400" /> {/*[cite: 5] */}
                  <FaStar className="text-yellow-400" /> {/*[cite: 5] */}
                  <FaStar className="text-yellow-400" /> {/*[cite: 5] */}
                </div>
                
                <h1 className="text-xl font-bold mb-2">{data.title}</h1> {/*[cite: 5] */}
                
                <p className="text-gray-500 group-hover:text-gray-200 duration-300 text-sm line-clamp-3 mb-5 leading-relaxed"> {/*[cite: 5] */}
                  {data.description} {/*[cite: 5] */}
                </p>
                
                <button
                  className="bg-primary hover:scale-105 transition-transform duration-300 text-white font-semibold py-2 px-6 rounded-full group-hover:bg-white group-hover:text-primary shadow-md"
                  onClick={handleOrderPopup} //[cite: 5]
                >
                  Order Now {/*[cite: 5] */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts; //[cite: 5]