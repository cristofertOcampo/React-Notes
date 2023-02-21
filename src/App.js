import {Route, Routes } from "react-router-dom";
import { HeaderHome } from './components/layout/header/HeaderHome';
import { Footer } from "./components/layout/footer/Footer";
import { HomeUser } from './pages/home/Home';
import { Counter } from './pages/Counter/Counter';
import { ChangeColor } from './pages/ChangeColor/ChangeColor';
import './App.css';


function App() {
  return (
    <>
    <HeaderHome />
      <Routes>
        <Route path='/' element={<HomeUser />}></Route>
        <Route path='/Counter' element={<Counter />}></Route>
        <Route path='/ChangeColor' element={<ChangeColor></ChangeColor>} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
