import React, { useRef } from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    name: "Jean Dupont",
    comment:
      "C'est vraiment très intéressant ! J'ai appris beaucoup de choses nouvelles en lisant cela. Merci pour le partage !",
    img: "/peoples/1.png",
  },
  {
    id: 2,
    name: "Marie Leclerc",
    comment:
      "J'adore ça ! C'est tellement fascinant de voir à quel point tout est bien expliqué ici. Je vais recommander cet article à tous mes amis !",
    img: "peoples/2.png",
  },
  {
    id: 3,
    name: "Jean Dupont",
    comment:
      "C'est vraiment très intéressant ! J'ai appris beaucoup de choses nouvelles en lisant cela. Merci pour le partage !",
    img: "peoples/3.png",
  },
  {
    id: 4,
    name: "Marie Leclerc",
    comment:
      "J'adore ça ! C'est tellement fascinant de voir à quel point tout est bien expliqué ici. Je vais recommander cet article à tous mes amis !",
    img: "peoples/4.png",
  },
  {
    id: 5,
    name: "Pierre Lefebvre",
    comment:
      "C'est magnifique ! Je suis vraiment impressionné par la qualité de l'écriture et des informations présentées ici. Je vais certainement y revenir pour en savoir plus.",
    img: "peoples/5.png",
  },
];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className + ""}
//       style={{
//         ...style,
//         display: "block",
//         backgroundImage: "url('/icone/icone.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

function Slides() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className=" relative slider-container py-20 px-10">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map((item) => (
            <div key={item.i}>
              <div className="my-2 lg:my-8 sm:break-inside-avoid px-2 lg:px-2 lg:py-6">
                <blockquote className="relative rounded-lg p-6 sm:p-6">
                  <div className="flex items-center gap-4">
                    <img
                      width={500}
                      height={500}
                      loading="lazy"
                      alt="Man"
                      src={`${item.img}`}
                      className="h-16 w-16 rounded-full object-cover absolute top-0 left-0 border-2 border-customVert"
                    />
                  </div>
                  <div className="bg-white pl-14 p-6 rounded-lg shadow-md">
                    <p className="mt-0.5 text-lg font-semibold text-customBlue">
                      {item.name}
                    </p>
                    <p className="mt-4 text-gray-700 text-justify">
                      {item.comment}
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
        <button className="button hidden md:block absolute top-[50%] left-0 h-6 w-6" onClick={previous} style={{
        display: "block",
        backgroundImage: "url('/icone/icone1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        </button>
        <button className="button hidden md:block absolute top-[50%] right-0 h-6 w-6" onClick={next} style={{
        display: "block",
        backgroundImage: "url('/icone/icone.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        </button>
      </div>
      <div className="bottom-0 left-0 -mt-3 h-3  max-w-lg bg-customBlue" />
    </>
  );
}

export default Slides;
