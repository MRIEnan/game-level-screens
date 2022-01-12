import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeNavbar from './pages/Shared/HomeNavbar/HomeNavbar';
import LevelOneMain from './pages/LevelOne/LevelOneMain/LevelOneMain';
import LevelTwoMain from './pages/LevelTwo/LevelTwoMain/LevelTwoMain';

function App() {
  return (
    <div>
        <BrowserRouter>
            <HomeNavbar></HomeNavbar>
            <Routes>
                <Route path='/' element={<LevelOneMain/>} />
                <Route path='/levelone' element={<LevelOneMain/>} />
                <Route path='/leveltwo' element={<LevelTwoMain/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
