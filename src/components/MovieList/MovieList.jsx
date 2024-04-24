import styles from './MovieList.module.css';

const MovieList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default MovieList;
