import { Fragment, useEffect, useState, FC, MouseEventHandler } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";

import { setCurrentUser, signOutStart } from "../../Store/user/user.action";
import { selectCurrentUser } from "../../Store/user/user.selector";
import { selectIsCartOpen } from "../../Store/cart/cart.selector";
import { setIsCartOpen } from "../../Store/cart/cart.action";

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
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const [scrolled, setScrolled] = useState(false);

  // Close the cartDropdown when click is away
  const onClickAway = (event: Event) => {
    const target = event.target as HTMLElement;
    const fullIcon = document.querySelector(
      ".cart-icon-container"
    ) as HTMLElement;

    if (!fullIcon.contains(target)) dispatch(setIsCartOpen(false));
  };

  // Toggle Navigation Links in Small Screens
  const toggleMenu: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    const menu = document.querySelector(".menu") as HTMLElement;
    const navLinks = document.querySelector(".nav-links") as HTMLElement;
    const overlay = document.querySelector(".overlay") as HTMLElement;
    const closeButton = document.querySelector(".close") as HTMLElement;

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
    dispatch(signOutStart());
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
              <NavLink as="span" to="" onClick={signOutHandler}>
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
