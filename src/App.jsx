import './App.css';
import Button from './components/Button/Button';
import Header from './Layouts/Header/Header';
import Input from './components/Input/Input';
import Logo from './components/Logo/logo';
import { MainTitle } from './components/MainTitle/MainTitle';
import Navigation from './components/Navigation/Navigation';
import { SearchButton } from './components/SearchButton/SearchButton';
import SearchInput from './components/SearchInput/SearchInput';
import { TextDescription } from './components/TextDescription/TextDescription';

function App() {
  return (
    <div
      style={{
        paddingInline: '120px',
      }}
    >
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '560px',
          }}
        >
          <MainTitle />
          <TextDescription />
        </main>
        <label style={{ display: 'flex', gap: '6px', position: 'relative', alignItems: 'center' }}>
          <Input>
            <SearchInput />
          </Input>
          <Button>
            <SearchButton />
          </Button>
        </label>
      </div>
    </div>
  );
}

export default App;
