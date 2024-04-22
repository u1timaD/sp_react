import styles from './Navigation.module.css';
import entryIcon from '/src/assets/enrty-icon.svg';

const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <span>Поиск фильмов</span>
      </li>
      <li className={styles.navItem}>
        <span>Мои фильмы</span>
				<span className={styles.counter} >2</span>
      </li>
      <li className={styles.navItem}>
        <span>Войти</span>
        <img src={entryIcon} width={24} height={24} alt="иконка входа в личный кабинет"/>
      </li>
    </ul>
  );
};

export default Navigation;
