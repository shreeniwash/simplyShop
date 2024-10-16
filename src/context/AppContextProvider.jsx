// import React, {useState, useEffect, createContext } from 'react'
// import {items } from '../assets/data/items'



// export const AppContext=createContext()

// const AppContextProvider = (props) => {

//   const [cartItems, setCartItems]=useState(()=>{
//     const saveCart=localStorage.getItem('cartItems');
//     return saveCart ? JSON.parse(saveCart): [];
//   });

//   useEffect(()=>{
//     localStorage.setItem('cartItems',JSON.stringify(cartItems));
//   },[cartItems])

//   const addToCart = (id) => {
//     const itemToadd = items.find(item => item.id === id);

//     if(cartItems.some(item=>item.id===id)){
//       alert('item is already in the cart')
//     }else{
//       setCartItems([...cartItems, itemToadd])
//       console.log(`Adding item with ID ${id} to bag`);
//     }  
    
//   };


//   const removeCart=(id)=>{
//     setCartItems(cartItems.filter(item=> item.id !==id))
//   }
   

//     const value= {
//         items,cartItems, addToCart, removeCart
        
//     };

//   return (
//     <AppContext.Provider value={value}>
//     {props.children}
//     </AppContext.Provider>
//   )
// }

// export default AppContextProvider;


import React, { useState, useEffect, createContext } from 'react';
import { items } from '../assets/data/items';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [favoriteItems, setFavoriteItems]= useState(()=>{
    const favsaved=localStorage.getItem('favoriteItems');
    return favsaved ? JSON.parse(favsaved) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

  }, [cartItems, favoriteItems]);

  const addToCart = (id) => {
    const itemToAdd = items.find(item => item.id === id);
    if (cartItems.some(item => item.id === id)) {
      alert('Item is already in the cart');
    } else {
      setCartItems([...cartItems, itemToAdd]);
    }
  };

  const addToFavorite = (id) => {
    const itemToAdd = items.find(item => item.id === id);
    if (favoriteItems.some(item => item.id === id)) {
      alert('Item is already in the cart');
    } else {
      setFavoriteItems([...favoriteItems, itemToAdd]);
    }
  };

  const removeCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFav = (id) => {
    setFavoriteItems(favoriteItems.filter(item => item.id !== id));
  };

  const value = {
    items,
    cartItems,
    addToCart,
    removeCart,
    addToFavorite,
    favoriteItems,
    removeFav,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
