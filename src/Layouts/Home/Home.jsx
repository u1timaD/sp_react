import Button from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import Label from '../../components/Label/Label';
import MOVIE_DATA from '/src/util/MovieData.js';
import styles from './Home.module.css';
import Input from '../../components/Input/Input';
import { useEffect, useRef, useState } from 'react';
import { TextDescription } from '../../components/TextDescription/TextDescription';

const Home = ({ setHeaderUserName }) => {
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const [isLogined, setIsLogined] = useState(false);
  const [userName, setUserName] = useState('');

  const onChangeInput = (text) => {
    const inputValue = text.target.value;
    setUserName(inputValue);
  };

  const handleClickBtn = (e) => {
    e.preventDefault();

    if (isLogined) {
      setHeaderUserName(userName);
      const userLogIn = {
        name: 'вася',
        isLogined: 'true'
      }

      const jsonUserLogIn = JSON.stringify(userLogIn);

      localStorage.setItem('user', jsonUserLogIn);
      console.log('вошли')
      // setIsLogined(false);

    } else {
      console.log('Вы не вошли');
    }
  };

  useEffect(() => {
    if (userName.trim().toLowerCase() === 'вася') {

      
      setIsLogined(true);
      console.log(isLogined);
    }
  }, [userName]);

  return (
    <main>
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
            />
          </Label>
          <Button value="Искать" />
        </div>

        <form className={styles.form}>
          <Title value="Вход" />
          <Label>
            <Input
              name="entry"
              ref={inputRef}
              onChange={onChangeInput}
              placeholder="Ваше имя"
            />
          </Label>
          <Button
            ref={btnRef}
            value="Войти в профиль"
            onClick={handleClickBtn}
          />
        </form>
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
