import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';
import { Title } from '../Title/Title';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { SetMainContext } from '../providers/MainProvider';

const Login = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLogined, setIsLogined] = useState(false);
  const setUserLogin = useContext(SetMainContext);
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (text: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = text.target.value;
    setUserName(inputValue);
  };

  const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef) {
      inputRef.current!.focus();
    }
    if (isLogined) {
      const userLogIn = {
        name: 'вася',
        isLogined: 'true',
      };

      const jsonUserLogIn = JSON.stringify(userLogIn);
      localStorage.setItem('user', jsonUserLogIn);
      setUserLogin(userName);

      navigate('/');
    }
  };

  useEffect(() => {
    if (userName?.trim().toLowerCase() === 'вася') {
      setIsLogined(true);
    }
  }, [userName]);

  return (
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
      <Button value="Войти в профиль" onClick={handleClickBtn} />
    </form>
  );
};

export default Login;
