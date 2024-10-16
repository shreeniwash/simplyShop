



import React, { useContext } from 'react';
import logo from '../assets/img/simplyshop.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from '../context/AppContextProvider';

const Navbar = () => {
    const { cartItems, favoriteItems } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <>
            <div className='fixed top-0 left-0 w-full bg-white shadow-lg z-50'>
                <div className='flex items-center justify-between py-4 px-6  font-semibold '>
                
                    <img 
                        onClick={() => navigate('/')} 
                        className='w-24 cursor-pointer' 
                        src={logo} 
                        alt="Logo" 
                    />

                    <div>
                        <ul className='hidden md:flex gap-5 font-medium items-center'>
                            <NavLink to='/'>
                                <li className='py-1 '>HOME</li>
                                <hr  className='border-none outline-none  h-0.5 w-3/3 bg-green-400 hidden'/>
                            </NavLink>
                            <NavLink to='/products'>
                                <li className='py-1 '>PRODUCTS</li>
                                <hr  className='border-none outline-none  h-0.5 w-3/3 bg-green-400 hidden'/>
                            </NavLink>
                            <NavLink to='/carts'>
                                <li className='py-1 '>CARTS</li>
                                <hr  className='border-none outline-none  h-0.5 w-3/3 bg-green-400 hidden'/>
                            </NavLink>
                            <NavLink to='/favorites'>
                                <li className='py-1 '>FAVORITES</li>
                                <hr  className='border-none outline-none  h-0.5 w-3/3 bg-green-400 hidden'/>
                            </NavLink>
                            <NavLink to='/contact'>
                                <li className='py-1 '>CONTACT US</li>
                                <hr  className='border-none outline-none  h-0.5 w-3/3 bg-green-400 hidden'/>
                            </NavLink>
                        </ul>
                    </div>

                    <div className='flex items-center gap-5 justify-center mr-[30px]'>
                        <div className='flex flex-col justify-center items-center relative'>
                            <MdOutlineFavoriteBorder 
                                onClick={() => navigate('/favorites')} 
                                className='w-6 h-6 cursor-pointer' 
                            />
                            {favoriteItems.length > 0 && (
                                <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
                                    {favoriteItems.length}
                                </span>
                            )}
                            <p className='text-sm'>Favorite</p>
                        </div>

                        <div className='flex flex-col justify-center items-center relative'>
                            <FiShoppingCart 
                                onClick={() => navigate('/carts')} 
                                className='w-6 h-6 cursor-pointer' 
                            />
                            {cartItems.length > 0 && (
                                <span className="absolute top-0  left-[25px] w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
                                    {cartItems.length}
                                </span>
                            )}
                            <p className='text-sm'>Cart</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-20'></div>
        </>
    );
};

export default Navbar;
