import { forwardRef } from 'react';
import styles from './Input.module.css';
import searchIcon from '/src/assets/search-icon.svg';

const Input = forwardRef(function Input({ isSearch, ...props }, ref) {
  return (
    <>
      {isSearch && (
        <img
          className={styles.searchIcon}
          src={searchIcon}
          width={24}
          height={24}
          alt="иконка поиска"
        />
      )}
      <input {...props} ref={ref} type="text" className={styles.input} />
    </>
  );
});

export default Input;
