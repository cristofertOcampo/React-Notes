import './App.css';
import { HomeUser } from './pages/Home';
import { HeaderHome } from './components/layout/header/HeaderHome';
import { AboutUS } from './pages/AboutUS';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <HeaderHome />
    <Router>
      <Routes>
        <Route path='/' element={<HomeUser />}></Route>
        <Route path='/AboutUs' element={<AboutUS />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
