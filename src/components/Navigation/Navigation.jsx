import { useEffect } from 'react';
import styles from './Navigation.module.css';
import entryIcon from '/src/assets/entry-icon.svg';
import userIcon from '/src/assets/user-rounded.svg';

const Navigation = ({ headerUserName }) => {
  const name = localStorage.getItem('user');

  useEffect(() => {
    // console.log(JSON.parse(name))
    // console.log(asd);
  }, [name]);

  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <span>Поиск фильмов</span>
      </li>
      <li className={styles.navItem}>
        <span>Мои фильмы</span>
        <span className={styles.counter}>2</span>
      </li>
      {headerUserName && (
        <li className={`${styles.navItem} ${styles.navEntry}`}>
          <span>{headerUserName}</span>
          <img src={userIcon} width={24} height={24} alt="иконка юзера" />
        </li>
      )}
      <li className={`${styles.navItem} ${styles.navEntry}`}>
        {headerUserName ? (
          <span>Выйти</span>
        ) : (
          <>
            <span>Войти</span>
            <img
              src={entryIcon}
              width={24}
              height={24}
              alt="иконка входа в личный кабинет"
            />
          </>
        )}
      </li>
    </ul>
  );
};

export default Navigation;
