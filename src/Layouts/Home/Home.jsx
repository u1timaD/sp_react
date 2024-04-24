import Button from '../../components/Button/Button';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import { TextDescription } from '../../components/TextDescription/TextDescription';
import MOVIE_DATA from '/src/util/MovieData.js';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main>
      <div className={styles.intro}>
        <div className={styles.introTitle}>
          <MainTitle />
          <TextDescription />
        </div>
        <div className={styles.introInput}>
          {/* // todo: сделать единый компонент input для входа и поиска */}
          {/* <Input>
				<SearchInput />
			</Input> */}
          <SearchInput />
          <Button>
            <SearchButton />
          </Button>
        </div>
      </div>
      <MovieList>
        {MOVIE_DATA.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </MovieList>
    </main>
  );
};

export default Home;
