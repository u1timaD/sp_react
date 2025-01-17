import styles from './Header.module.css';
import { HeaderType } from './Header.types';

const Header = ({ children }: HeaderType) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
