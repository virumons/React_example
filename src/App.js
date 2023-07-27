import "./styles.css";

export default function App() {
  const iphone = {
    id: 1,
    title: "Apple iPhone 13",
    price: "79,999",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
  };
  const samsung = {
    id: 2,
    title: "Samsung Galaxy Note 8",
    price: "69,999",
    image:
      "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas2/Black/Gallery-01-C2-Lockup-MysticBlack-1600x1200.jpg?$product-details-jpg"
  };
  const nokia = {
    id: 3,
    title: "Nokia 1100",
    price: "2,999",
    image: "https://m.media-amazon.com/images/I/41wGEmM0S4L.jpg"
  };
  const products = [iphone, samsung, nokia];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to MasterClass</h1>
    </div>
  );
}
