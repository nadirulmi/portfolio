import "./about.css";
import imagesData from "../../images.json";
import {useTranslation} from "react-i18next"
import nadi from "../../images/nadirulmi.png"

export const About = () => {
  const [t, i18n] = useTranslation("global")
  const allImages = imagesData?.images || [];
  const duplicatedImages = [...allImages, ...allImages];

  return (
    <div
      className={`flex flex-col lg:flex-row h-full lg:h-screen justify-center items-center bg`}
      id="aboutme"
    >
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-3/5 flex flex-col justify-center lg:ml-20 items-center  p-4">
            <h2 className="text-pink-500 text-5xl mb-6 font-bold">
              &lt; {t("header.me")} /&gt;
            </h2>
            <p className="text-white text-xl">
            {t("header.about")} {" "}
              <span className="font-bold text-pink-300">
                {" "}
                Nadir Yamila Ulmi
              </span>
              {t("header.description")}
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="flex justify-center items-center relative mt-9 lg:m-0">
              <img
                className="w-80 overflow-hidden rounded-full"
                // style={{
                //   animation: "pulseBorder 2s infinite",
                // }}
                src={nadi}
                alt="Nadirulmi Imagen"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-2/5">
        <h3 className="text-pink-400 text-4xl mt-14 font-bold">
        {t("header.skills")}
            </h3>
        </div>
        <div className={`flex m-4 slider w-full lg:w-3/5`}>
          <div className="slide-track m-5">
          {duplicatedImages?.map(({ name, path, alt }) => (
          <div key={name} className="slide m-2">
            <img src={path} alt={alt} className="rounded-lg max-h-16" />
          </div>
        ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
