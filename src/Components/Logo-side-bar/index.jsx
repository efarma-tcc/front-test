
import  style from "./index.module.css"

export default function LogoSideBar({path, theme}){
    return (
        <div className={style.ligth}>
            <div className={style.logo} >
                <div className={style.logoIcon}>
                    <img src={path} alt="Logo" />
                </div>
            </div>

        </div>
    )
}