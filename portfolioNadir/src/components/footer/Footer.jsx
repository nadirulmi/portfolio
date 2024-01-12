import {useTranslation} from "react-i18next"
import linkedin from "/public/images/link.png"
import github from "/public/images/gith.png"

export const Footer = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div className='p-4' style={{backgroundColor: "#350824"}}>
        <div className="flex justify-center items-center">
        <a href="https://www.linkedin.com/in/nadir-yamila-ulmi-38b017227/" target="_blank">
        <img src={linkedin} className="w-8 mr-4 cursor-pointer"/>
        </a>
        <a href="https://github.com/nadirulmi" target="_blank">
        <img src={github} className="w-8 mr-4 cursor-pointer"/>
        </a>
        </div>
        <p className='text-white mt-2 text-center'>{t("header.footer")}</p>
    </div>
  )
}
