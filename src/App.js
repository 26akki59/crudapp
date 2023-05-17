
import './App.css';
import Home from './component/pages/Home';
import ContactUs from './component/pages/ContactUs';
import Navbar from './component/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './component/pages/AboutUs';
import PageNotFound from './component/pages/PageNotFound';
import Addusers from './component/users/Addusers';
import Edit from './component/users/Edit';
import User from './component/users/User';

function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <AboutUs /> } />
        <Route path='/contact' element={ <ContactUs /> } />
        <Route path='/contact' element={<PageNotFound /> } />
        <Route path='/user/add' element={ <Addusers /> } />
        <Route path='/user/:id' element={ <User /> } />
        <Route path='/user/edit/:id' element={ <Edit /> } />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
