import { useTranslation } from "react-i18next";
import projectsData from "./../../projects.json"
import "./projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="h-screen"
      id="experience"
    >
      <h2 className=" text-pink-500 text-5xl mt-20 font-semibold">&lt; {t("header.projects.title")} /&gt;</h2>
      <div className="flex flex-col m-9 mt-40 lg:m-20">
      <Slider {...settings}>
      {projectsData?.projects.map(({name, description,image,link,tec}) =>(
        <a href={link} target="_blank">
          <div key={name}>
          <figure>
            <img className="lg:h-64 lg:w-full rounded-t-lg" src={image}></img>
          </figure>
          <div style={{backgroundColor: "rgb(58 42 48)"}} className="lg:p-4 text-center rounded-b-lg h-40">
            <h4 className="text-white text-xl tracking-wider">{name}</h4>
            <div class="border-t border-gray-400 my-4"></div>
            <p>
              {description}
            </p>
            <div className="flex flex-wrap justify-center m-4">
            {tec?.map((t) =>(
              
              <span className="text-sm italic m-1 lg:m-2 px-2 rounded" style={{backgroundColor: "rgb(149 140 143)"}}>{t}</span>
              
            ))}
            </div>
          </div>
          </div>
        </a>
      ))}
       </Slider>
      </div>
    </div>
  );
};
