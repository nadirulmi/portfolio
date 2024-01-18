import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1703256146705.json";
import {useTranslation} from "react-i18next"

export const Hero = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div
      className="flex flex-col lg:flex-row bg-black justify-center items-center h-screen"
      id="home"
    >
      <div className="sm:w-1/2 lg:w-3/4 m-12">
        <h1 className="text-white text-3xl lg:text-5xl">
        {t("header.hello")}{" "}
          <span className="font-bold text-pink-600">fullstack developer</span>.
        </h1>
        <a
          href="https://drive.google.com/file/d/1_vMkV8d88ZsyYrJFg3dM1PG2mjEOpuT8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="text-white border-2 border-pink-400/50 p-2 m-7 shadow-lg shadow-purple-500/40 hover:bg-gradient-to-b from-purple-900 to-pink-800 via-purple-900 font-semibold rounded">
          {t("header.cv")}
          </button>
        </a>
      </div>
      <div className="w-2-5 lg:w-1/2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};
