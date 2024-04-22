import logo from '/logo.svg';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} width="40" height="40" alt="Логотип" />
    </div>
  );
};

export default Logo;
