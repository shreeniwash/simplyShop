import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider'


const Favorites = () => {
  const {removeFav,favoriteItems}= useContext(AppContext)
  return (

    <div className='w-full'>
     {favoriteItems.length === 0 ? (
     <p  className='text-2xl font-semibold text-center mt-10'>Your Favorites list is empty.</p>

     ):(
       <div className='flex flex-col items-center gap-4 text-gray-900 my-10'>
        <div className='w-full grid grid-cols-auto px-4 sm:px-4 pt-4 gap-8'>
          {favoriteItems.map((item, index) => (
            <div key={index}>
              <img className='w-full' src={item.image} alt="" />
              <div className="text-sm font-bold">
                {item.rating.stars} ⭐ | {item.rating.count}
              </div>
              <div className="mt-[15px] text-[16px] font-bold mb-[6px] overflow-hidden text-ellipsis whitespace-nowrap text-col1">{item.company}</div>
              <div className="text-col2 text-[14px] leading-3 mb-0 overflow-hidden text-ellipsis whitespace-nowrap font-semibold block">{item.item_name}</div>
              <div className="text-sm leading-4 text-col1 whitespace-nowrap pt-2">
                <span className="text-sm font-bold text-col1">${item.current_price}</span>
                <span className="text-col3 font-light line-through text-sm ml-5">${item.original_price}</span>
                <span className="font-light text-sm ml-5 text-col4">({item.discount_percentage}% OFF)</span>
              </div>
              <button onClick={()=> removeFav(item.id)} className='bg-green-400 flex text-center items-center justify-center text-sm font-medium my-5 px-10 py-2 rounded-md'>remove</button>
            </div>
          ))}
        </div>
      </div>
     )}
    </div>
  )
}

export default Favorites