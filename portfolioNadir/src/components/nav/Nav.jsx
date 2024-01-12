import style from "./Nav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import {useTranslation} from "react-i18next"
import en from "../images/reino-unido.png"
import es from "../images/espana.png"

export const Nav = () => {
  const [t, i18n] = useTranslation("global")
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.navContainer}>
      <nav className="flex justify-end md:justify-around">
        <div className={style.menu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? `${style.open}` : ""}>
          <li className="text-black md:font-bold md:text-white bg-pink-100 md:bg-transparent p-2 border-2 border-t-pink-700/50 md:border-none lg:rounded ">
            <Link
              className={`cursor-pointer ${style.links}`}
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {t("header.navbar.home")} 
            </Link>
          </li>
          <li className="text-black md:font-bold md:text-white bg-pink-100 md:bg-transparent p-2 border-2 border-y-pink-700 md:border-none lg:rounded">
            <Link
              className={`cursor-pointer ${style.links}`}
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {t("header.navbar.aboutme")}
            </Link>
          </li>
          <li className="text-black md:font-bold md:text-white bg-pink-100 md:bg-transparent p-2 border-2 border-b-pink-700 md:border-none lg:rounded">
            <Link
              className={`cursor-pointer ${style.links}`}
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {t("header.navbar.project")}
            </Link>
          </li>
          <li className="text-black md:font-bold md:text-white bg-pink-100 md:bg-transparent p-2 border-2 border-b-pink-700/50 md:border-none lg:rounded">
            <Link
              className={`cursor-pointer ${style.links}`}
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {t("header.navbar.contact")}
            </Link>
          </li>

        <div className="flex justify-center items-center m-3 lg:m-auto">
        <button onClick={() => i18n.changeLanguage("es")} className="lg:ml-20"><img className="w-11 md:w-6 lg:w-9" src={es}/></button>
      <button onClick={() => i18n.changeLanguage("en")} className="ml-4"><img className="w-11 md:w-6 lg:w-9" src={en}/></button>
        </div>
        </ul>
      </nav>
    </div>
  );
};
