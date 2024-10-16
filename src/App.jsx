
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact Us';
import Favorites from './pages/Favorites';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Navbar />
    <div className='mt-10 mx-4 sm:mx-[5%]'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/carts' element={<Cart/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/contact' element={<Contact/>} />   
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;
