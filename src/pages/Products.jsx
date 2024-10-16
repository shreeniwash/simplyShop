import React,{useContext} from 'react'

import { AppContext } from '../context/AppContextProvider';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const { items , addToFavorite, addToCart} = useContext(AppContext);

  const navigate=useNavigate()


  return (
   <>
     <div className='flex flex-col items-center gap-4 text-gray-900 my-10'>
        <div className='w-full grid grid-cols-auto px-4 sm:px-4 pt-4 gap-8'>
          {items.map((item, index) => (
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
              <button
                className="mt-8 text-[18px] w-full p-[5px 0] bg-green-200 border-none rounded-md font-bold cursor-pointer"
                onClick={() => addToCart(item.id)}
              >
                Add to Cart
              </button>
              <button
                className="mt-3 text-[18px] w-full p-[5px 0] bg-green-200 border-none rounded-md font-bold cursor-pointer"
                onClick={() => addToFavorite(item.id)}
              >
                Add to Favorite
              </button>
            </div>
          ))}
        </div>
        <button onClick={()=>navigate('/products')} className='my-5 font-bold bg-green-200 px-10 py-3 rounded-md '>More</button>
      </div>

      
   </>
  )
}

export default Products