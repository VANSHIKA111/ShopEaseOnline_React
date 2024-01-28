import React, { useEffect } from 'react'
import AddressCard from './AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch =useDispatch();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const {order}=useSelector(store=>store)

  const orderId=searchParams.get("order_id")
  useEffect(()=>
  {
  dispatch(getOrderById(orderId))
  },[orderId])

  const handleCheckout=()=>
  {
    dispatch(createPayment(orderId));
  }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-5-md border">
<AddressCard address={order.order?.shippingAddress}/>
      </div>
          <div>
<div className='lg:grid grid-cols-3 relative'>
<div className='col-span-2'>
   {order.order?.orderItems.map((item)=> <CartItem item={item}/>)}
</div>
<div className='px-5 sticky top-0-h-[100vh] mt-5 lg:mt-0'>
    <div className='border'>
<p className="uppercase font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />
          <div className="space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 text-black ">
             <span>Price </span>
              <span>₹{order.order?.totalPrice}</span>
           </div>
                       <div className="flex justify-between pt-3">
             <span>Discount</span>
              <span className=' text-green-600 '>₹{order.order?.discounte}</span>
           </div>
                       <div className="flex justify-between pt-3 ">
             <span>Delivery charge </span>
              <span className=' text-green-600 '>FREE</span>
           </div>
                       <div className="flex justify-between pt-3 font-bold ">
             <span>Total Amount </span>
              <span className=' text-green-600 '>₹{order.order?.totalDiscountedPrice}</span>
           </div>

          </div>
           <Button variant="contained"
            className='w-full mt-5'
            sx={{ px:"2.5rem",py:"0.7rem",bgcolor:"#9155fd" }}
            onClick={handleCheckout}
          >
            Check Out
          </Button>  

    </div>
</div>

</div>


    </div>
    </div>
  )
}

export default OrderSummary
