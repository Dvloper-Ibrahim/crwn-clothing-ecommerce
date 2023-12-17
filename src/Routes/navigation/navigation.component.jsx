import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../Contexts/user.context";
import { CartContext } from "../../Contexts/cart.context";

import { signOutUser } from "../../Utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // Close the cartDropdown when click is away
  const onClickAway = (event) => {
    const target = event.target;
    const fullIcon = document.querySelector(".cart-icon-container");

    if (!fullIcon.contains(target)) setIsCartOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", onClickAway);

    return () => {
      document.removeEventListener("click", onClickAway);
    };
  }, []);

  const navigateTo = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    navigateTo("/");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
