import styles from './MovieList.module.css';
import { MovieListType } from './MovieList.types';

const MovieList = ({ children }: MovieListType) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default MovieList;
