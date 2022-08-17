import global from './assests/global.scss';
import './assests/icons/style.css';
import Footer from './Components/Footer';
import Nav from './Components/Header';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About/index';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Zayshop from './Components/ZayShop';
import { Provider } from 'react-redux';
import store from './Store';
import { useEffect } from 'react';


function App() {

 
  // if(JSON.parse(localStorage.getItem('list'))){ 
  //   localStorage.setItem('list', JSON.stringify([]));
  // }
 
 

  return (
    <div>
      <Provider store={store}>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/zay-shop' element={<Zayshop />} />
          </Routes>
        <Footer />
      </Provider>

    </div>
  );
}

export default App;
