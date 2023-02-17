import './App.css';
import { HomeUser } from './pages/Home';
import { HeaderHome } from './components/layout/header/HeaderHome';
import { AboutUS } from './pages/AboutUS';
import { ChangeColor } from './pages/ChangeColor/ChangeColor';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <HeaderHome />
    <Router>
      <Routes>
        <Route path='/' element={<HomeUser />}></Route>
        <Route path='/AboutUs' element={<AboutUS />}></Route>
        <Route path='/ChangeColor' element={<ChangeColor></ChangeColor>} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
