import React from 'react';
import CartItem from './CartItem';
import store from './Store';
const MyCart = () => {


  
  return (
    <div>
     
      
      {
          store.getState().items.map((el, i) => 
            <CartItem key={i} data={el}/>
          )
      }

        

    </div>
  );
}

export default MyCart;
