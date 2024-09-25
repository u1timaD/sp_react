import './App.css';
import Header from './Layouts/Header/Header';
import Logo from './components/Logo/logo';
import Navigation from './components/Navigation/Navigation';
import Home from './Layouts/Home/Home';
import { useState } from 'react';

function App() {
  const [headerUserName, setHeaderUserName] = useState(null);
  return (
    <>
      <Header>
        <Logo />
        <Navigation headerUserName={headerUserName}/>
      </Header>
      <Home setHeaderUserName={setHeaderUserName}/>
    </>
  );
}

export default App;
