import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ value, ...props }, ref) {
  return (
    <button {...props} className={styles.button} ref={ref}>
      {value}
    </button>
  );
});

export default Button;
