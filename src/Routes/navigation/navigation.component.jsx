import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../Contexts/user.context";
import { CartContext } from "../../Contexts/cart.context";

import { signOutUser } from "../../Utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
