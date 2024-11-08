import Button from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import Label from '../../components/Label/Label';
import MOVIE_DATA from '/src/util/MovieData.js';
import styles from './Home.module.css';
import Input from '../../components/Input/Input';
import { TextDescription } from '../../components/TextDescription/TextDescription';
import { useRef } from 'react';

const Home = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.introTitle}>
          <Title value="Поиск" />
          <TextDescription />
        </div>
        <div className={styles.introInput}>
          <Label>
            <Input
              isSearch={true}
              name="search"
              placeholder="Введите название"
              ref={inputRef}
            />
          </Label>
          <Button value="Искать" onClick={handleFocus} />
        </div>
      </div>
      <MovieList>
        {MOVIE_DATA.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </MovieList>
    </>
  );
};

export default Home;
