import { useContext, useEffect } from 'react';
import styles from './Navigation.module.css';
import entryIcon from '/src/assets/entry-icon.svg';
import userIcon from '/src/assets/user-rounded.svg';
import { Link } from 'react-router-dom';
import { MainContext, SetMainContext } from '../providers/MainProvider';

const Navigation = () => {
  const name = localStorage.getItem('user');
  const userLogin = useContext(MainContext);
  const setUserLogin = useContext(SetMainContext);

  useEffect(() => {
    setUserLogin(JSON.parse(name)?.name);
  }, [name]);

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    setUserLogin(null);
  };

  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <span>Поиск фильмов</span>
      </li>
      <li className={styles.navItem}>
        <span>Мои фильмы</span>
        <span className={styles.counter}>2</span>
      </li>
      {userLogin && (
        <li className={`${styles.navItem} ${styles.navEntry}`}>
          <span>{userLogin}</span>
          <img src={userIcon} width={24} height={24} alt="иконка юзера" />
        </li>
      )}
      <li className={`${styles.navItem} ${styles.navEntry}`}>
        {userLogin ? (
          <span onClick={handleLogout}>Выйти</span>
        ) : (
          <Link to="/login" className={`${styles.navEntryLink}`}>
            <span>Войти</span>
            <img
              src={entryIcon}
              width={24}
              height={24}
              alt="иконка входа в личный кабинет"
            />
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
