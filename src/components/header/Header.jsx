import { useLocation, useNavigate } from "react-router-dom";
import s from './Header.module.scss';
import instagram from '../../assets/instagram.svg';
import info from '../../assets/info.svg';
import InfoModal from "../modals/InfoModal";


export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isInfo = pathname === "/info";

  const openInfo = () => navigate("/info"); 
  const closeInfo = () => navigate(-1);    
  
  return (
       <>
    <header className={s.header}>
      <div className={s.row}>
        <span className={s.title}>Venus del Tarot</span>
        <div className={s.icons}>
          <img src={instagram} alt="" aria-hidden="true" className={s.icon} />
         <button className={s.iconBtn} onClick={openInfo} aria-label="Información">
          <img src={info} alt="" aria-hidden="true" className={s.icon} />
         </button>
        </div>
      </div>
    </header>
    
     <InfoModal open={isInfo} onClose={closeInfo} />
    </>
  );
}
