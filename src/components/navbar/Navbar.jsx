import Logo from "../generals/Logo"
import Navbar_ul_li from "./Navbar_ul_li";
import Navbar_Cart_and_Search from "./Navbar_cart_and_Search";

const Navbar = () => {
    return (
<div className="navbar">
<Logo />
<Navbar_ul_li   />
<Navbar_Cart_and_Search />
</div>

    )
}

export default Navbar;