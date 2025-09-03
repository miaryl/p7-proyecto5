import { useLocation, useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import instagram from "../../assets/instagram.svg";
import info from "../../assets/info.svg";
import logo from "../../assets/logo.svg";

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
          {/* Izquierda: logo (un pelín más grande) */}
          <div className={s.left}>
            <button
              className={s.iconBtn}
              onClick={() => navigate("/")}
              aria-label="Ir al inicio"
            >
              <img
                src={logo}
                alt="Las Venus del Tarot"
                className={`${s.icon} ${s.logo}`}   // 👈 cambio
              />
            </button>
          </div>

          {/* Derecha: iconos */}
          <div className={s.icons}>
            <img src={instagram} alt="Instagram" className={s.icon} />
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
