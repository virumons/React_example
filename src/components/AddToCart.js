function AddToCart() {
  const productInCart = false;

  const handleRemoveFromCart = () => {
    console.log("handle remove to cart in reducer");
  };
  const handleAddToCart = () => {};

  if (!productInCart) {
    return (
      <div className="add-to-cart" onClick={""}>
        Add To Cart{" "}
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div className="add" onClick={""}>
          -
        </div>
        <div className="quantity">{}</div>
        <div className="add" onClick={""}>
          +
        </div>
      </div>
    );
  }
}

export default AddToCart;
