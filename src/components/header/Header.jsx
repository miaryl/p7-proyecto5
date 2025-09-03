import { useEffect, useState } from "react";
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
  const [userName, setUserName] = useState('');

  const openInfo = () => navigate("/info");
  const closeInfo = () => navigate(-1);


  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      fetch(`http://localhost:3000/users/${userId}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.name) {
            setUserName(data.name);
          } else {
            setUserName('Invitado');
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setUserName('Invitado');
        });
    } else {
      setUserName('Invitado');
    }
  }, []); 

  return (
    <>
      <header className={s.header}>
        <div className={s.row}>
          <div className={s.left}>
            <button
              className={s.iconBtn}
              onClick={() => navigate("/")}
              aria-label="Ir al inicio"
            >
              <img
                src={logo}
                alt="Las Venus del Tarot"
                className={`${s.icon} ${s.logo}`}
              />
            </button>
          </div>
          <span className={s.userName}>{userName}</span>
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