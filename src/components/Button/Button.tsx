import styles from './Button.module.css';
import { ButtonType } from './Button.types';

const Button = ({ value, ...props }: ButtonType) => {
  return (
    <button {...props} className={styles.button}>
      {value}
    </button>
  );
};

export default Button;
