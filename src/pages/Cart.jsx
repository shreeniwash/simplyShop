import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContextProvider'


const CONVENIENCE_FEE = 99;

const Cart = () => {

  const {cartItems, removeCart}=useContext(AppContext);

  const [cartItemsObjects, setCartItemsObjects] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [finalPayment, setFinalPayment] = useState(0);

  useEffect(()=>{
    loadCartItemsObject();
    calculateSummary();
  },[cartItems])

  const loadCartItemsObject=()=>{
    const itemsIncart =cartItems.map((item)=> {
      return item;
    });
    setCartItemsObjects(itemsIncart);
  };

  const calculateSummary=()=>{
    let totalItems= cartItems.length;
    let totalMRP=0;
    let totalDiscount=0;


    cartItems.forEach((item)=>{
      totalMRP +=item.original_price;
      totalDiscount += item.original_price - item.current_price;
    });

    let finalPayment= totalMRP- totalDiscount + CONVENIENCE_FEE;

    setTotalItems(totalItems);
    setTotalMRP(totalMRP);
    setTotalDiscount(totalDiscount);
    setFinalPayment(finalPayment);
  }
  return (
    <>
    
    <div className='w-full flex items-center '>

      
      {cartItems.length ===0 ? (
        <p  className='text-2xl font-semibold text-center mt-10'>Your cart is empty.</p>
      ): (
        <div className='w-full   gap-10 justify-center '>
        <div className='w-[100%] sm:w-[100%] md:w-[100%] lg:w-[64%]  inline-block p-3 pr-5 pt-8 border border-[rgba(234,234,234,0.93)]  text-col1 text-sm leading-[1.42857143]'>
          {cartItems.map((item, index) => (



               <div key={index} className="mb-2 p-2 bg-white text-sm p-[12px 12px 0] border border-[#eaeaec] relative rounded-md ">
                <div className="h-[148px] w-[111px] absolute bg-[rgb(255, 242, 223)]">
                    <img className="w-full" src={item.image} alt=""/>
                </div>
                <div className="pl-3 relative ml-[111px] mb-3 min-h-[148px]">
                    <div className="mt-[15px] text-[16px] font-[700] leading-[1] text-col1 mb-[6px] overflow-hidden text-ellipsis whitespace-nowrap">{item.company}</div>
                    <div className="text-col3 text-[14px] leading-[1] mb-0 mt-0 overflow-hidden text-ellipsis whitespace-nowrap font-[400] block">{item.item_name}</div>
                    <div className="text-[14px] leading-[15px] text-col1 whitespace-nowrap">
                        <span className="text-[14px] font-[700] text-col1">Rs {item.current_price}</span>
                        <span className=" line-through text-col3 font-[400] text-[12px] ml-[5px]">Rs {item.original_price}</span>
                        <span className=" text-[#ff905a] font-[400] text-[12px] ml-[5px]">({item.discount_percentage}% OFF)</span>
                    </div>
                    <div className="inline-flex pt-2 text-sm font-[600]">
                        <span className="mr-1 pr-[10px] font-[700]">{item.return_period} Days</span> 
                        return available
                    </div>
                    <div className="text-[16px] font-[700] mt-1 mb-2 tracking-normal leading-3 text-col1">
                        Delivery by 
                        <span className="text-green-500">{item.delivery_date}</span>
                    </div>
                </div>
                <div className=" absolute h-[15px] w-[14px] text-[25px]  right-[18px] top-[10px] cursor-pointer  " onClick={()=> removeCart(item.id)}>X</div>
            </div>
            
          ))}
        </div>



        <div className=" align-top w-[100%] sm:w-[100%] md:w-[100%] lg:w-[35%] p-5 inline-block p-[24px 0 0 16px] text-col1 text-[13px] leading-[1.42857143]  rounded-md ">
             <div className=" mb-[16px]">
                <div className=" text-col1 font-[700] text-[14px] m-[24px 0 16px]">PRICE DETAILS  ({totalItems})</div>
                <div className="text-[14px] font-[600] mb-[10px]">
                 <span className="price-item-tag">Total MRP</span>
                 <span className=" float-right">{totalMRP}</span>
                </div>
                <div className="text-[14px] font-[600] mb-[10px]">
                 <span className="text-[14px] font-bold">Discount on MRP</span>
                 <span className=" float-right  text-[#03a685]">{totalDiscount}</span>
                </div>
                <div className="text-[14px] font-[600] mb-[10px]">
                 <span className="text-[14px] font-bold">Conviences Fee</span>
                 <span className="float-right">Rs 99</span>
                </div>
                <hr className='h-0.5 w-full bg-gray-600'/>
                <div className="text-[15px] font-[700] pt-[16px] border-t-[#eaeaec] leading-4">
                 <span className="price-item-tag">Total Amount</span>
                 <span className="price-item-value float-right">{finalPayment}</span>
                </div>
            </div>
             <button className="w-full border-w-0 p-[10px 16px] text-[14px] font-[600] bg-[rgb(255, 63, 108)] text-[rgb(255, 255, 255)] cursor-pointer mb-[30px]">
                <div className=" bg-red-600 text-white  flex items-center justify-center py-3 rounded-md">PLACE ORDER</div>
             </button> 
        </div>
      </div>
      )}
    </div>
    
    
    </>
  )
}

export default Cart