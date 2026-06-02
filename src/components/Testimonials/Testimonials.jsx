import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "ShopMe has the best collection of clothes! The quality is amazing, and the delivery was super fast. Highly recommended for everyone.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "I ordered a few gadgets, and they arrived perfectly packed. Great customer service and a really seamless checkout process.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Absolutely love the new winter collection! The fabric is premium, and the fit is just perfect. Will definitely buy again from ShopMe.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "A fantastic shopping experience from start to finish. The website is very easy to navigate, and the products are top-notch.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-semibold tracking-wide">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold mt-2 mb-3">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Discover why our customers love shopping with ShopMe. Read their genuine experiences, feedback, and stories.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6 px-2" key={data.id}>
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-800 bg-primary/10 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 border-4 border-white shadow-sm object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="space-y-3 z-10">
                      <p className="text-sm dark:text-slate-300 text-gray-600 leading-relaxed">
                        "{data.text}"
                      </p>
                      <h1 className="text-lg font-bold dark:text-light text-black/80">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  {/* Decorative Quote Mark */}
                  <p className="text-black/5 dark:text-white/5 text-9xl font-serif absolute top-0 right-4 cursor-default">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;