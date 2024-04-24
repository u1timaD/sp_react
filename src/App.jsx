import './App.css';
import Header from './Layouts/Header/Header';
import Logo from './components/Logo/logo';
import Navigation from './components/Navigation/Navigation';
import Home from './Layouts/Home/Home';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Home />
    </>
  );
}

export default App;
