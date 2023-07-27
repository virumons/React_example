const ProductList = () => {
  let loadError = null;
  let loading = false;

  if (loading) {
    return <div className="loading">Fetching Products ... </div>;
  } else if (loadError) {
    return <div>Please try again ... </div>;
  } else {
    return <div className="products">{}</div>;
  }
};
export default ProductList;
