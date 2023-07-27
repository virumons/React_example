import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let isLoading = false;
  let loadError = null;

  if (isLoading) {
    return <div>Data is Loading ...</div>;
  } else if (loadError) {
    return (
      <div>Oops there seems to be an error. Please try again later ...</div>
    );
  } else {
    return (
      <div className="header-items">
        {}
        <div className="shopping-items">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ marginLeft: 5 }} className="cart-length">
            {}
          </span>
        </div>
      </div>
    );
  }
};
export default Header;
