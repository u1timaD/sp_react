import styles from './SearchInput.module.css';
import searchIcon from '/src/assets/search-icon.svg';

const SearchInput = () => {
  return (
    <>
      <img
        className={styles.searchIcon}
        src={searchIcon}
        width={24}
        height={24}
        alt="иконка поиска"
      />
      <input
        type="text"
        name="search"
        className={styles.input}
        placeholder="Введите название"
      />
    </>
  );
};

export default SearchInput;
