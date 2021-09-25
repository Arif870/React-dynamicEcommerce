import "./Header.css";
import Logo from "../../Images/logo.png";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";

let Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src={Logo} alt="" />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
