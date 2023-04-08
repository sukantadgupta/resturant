
import CartContext from './cart-context';
import { useState } from 'react';



const CartProvider = (props) => {
    const[items,updateItems]=useState([]);

//   const addItemToCartHandler = (item) => {
//     updateItems([...items,item]);
//   };

const addItemToCartHandler = (item) => {
    console.log(item)
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: Number(existingItem.quantity) + Number(item.quantity),
      };
      updatedItems[existingItemIndex] = updatedItem;
      updateItems(updatedItems);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
 
  };

  const cartContext = {
    items: items,
  
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;