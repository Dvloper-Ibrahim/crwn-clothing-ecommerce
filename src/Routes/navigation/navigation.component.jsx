import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../Contexts/user.context";
import { CartContext } from "../../Contexts/cart.context";

import { signOutUser } from "../../Utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  MenuIcon,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);

  // Close the cartDropdown when click is away
  const onClickAway = (event) => {
    const target = event.target;
    const fullIcon = document.querySelector(".cart-icon-container");

    if (!fullIcon.contains(target)) setIsCartOpen(false);
  };

  // Toggle Navigation Links in Small Screens
  const toggleMenu = (e) => {
    const target = e.target;
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close");

    if (menu.contains(target)) {
      navLinks.classList.add("active");
      overlay.classList.add("active");
    }
    if (overlay.contains(target) || closeButton.contains(target)) {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickAway);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    });

    return () => {
      document.removeEventListener("click", onClickAway);
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50) setScrolled(true);
        else setScrolled(false);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
    navigateTo("/");
  };

  return (
    <Fragment>
      <NavigationContainer scrolled={scrolled}>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <MenuIcon className="menu" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </MenuIcon>
          <NavLinks className="nav-links">
            <span className="close" onClick={toggleMenu}>
              ×
            </span>
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
        </NavLinksContainer>
        <div className="overlay" onClick={toggleMenu}></div>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
