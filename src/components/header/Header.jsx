import s from './Header.module.scss';
import instagram from '../../assets/instagram.svg';
import info from '../../assets/info.svg';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.row}>
        <span className={s.title}>Venus del Tarot</span>
        <div className={s.icons}>
          <img src={instagram} alt="" aria-hidden="true" className={s.icon} />
          <img src={info} alt="" aria-hidden="true" className={s.icon} />
        </div>
      </div>
    </header>
  );
}
