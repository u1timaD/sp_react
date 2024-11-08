import './App.css';
import Home from './Layouts/Home/Home';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import MainProvider from './components/providers/MainProvider';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
