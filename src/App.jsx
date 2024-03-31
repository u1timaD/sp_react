import './App.css';
import { MainTitle } from './components/MainTitle/MainTitle';
import { SearchButton } from './components/SearchButton/SearchButton';
import { TextDescription } from './components/TextDescription/TextDescription';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '560px'
        }}
      >
        <MainTitle />
        <TextDescription />
      </div>
      <div>
        <SearchButton />
      </div>
    </div>
  );
}

export default App;
