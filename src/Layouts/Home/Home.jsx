import Button from '../../components/Button/Button';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import { SearchButton } from '../../components/SearchButton/SearchButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import { TextDescription } from '../../components/TextDescription/TextDescription';
import MOVIE_DATA from '/src/util/MovieData.js';

const Home = () => {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '560px',
          }}
        >
          <MainTitle />
          <TextDescription />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '6px',
            position: 'relative',
            alignItems: 'center',
          }}
        >
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
