function CartContextProvider({ children }) {
  const addToCart = (product) => {};

  const removeFromCart = (product) => {
    // setCart((prevCart) => {
    //   const newCart = { ...prevCart }; // UPDATING IMMUTABILY
    //   if (!prevCart[product.id]) return prevCart;
    //   else if (prevCart[product.id].quantity === 1) {
    //     delete newCart[product.id];
    //   } else {
    //     const newProduct = { ...prevCart[product.id] };
    //     newProduct.quantity -= 1;
    //     newCart[product.id] = newProduct;
    //   }
    //   return newCart;
    // });
  };

  return <div></div>;
}

export default CartContextProvider;
