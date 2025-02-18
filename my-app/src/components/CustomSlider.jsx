import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const images = [
    { src: "/assets/food.jpg", alt: "Vibrant Scene" },
    { src: "/assets/hand.jpg", alt: "Helping Hand" },
    { src: "/assets/work.jpg", alt: "Work in Progress" },
    { src: "/assets/worker.jpg", alt: "Dedicated Worker" },
    { src: "/assets/bus.jpg", alt: "Transportation" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="text-white border-2 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
