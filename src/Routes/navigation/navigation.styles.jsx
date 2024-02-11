import styled from "styled-components";
import { Link } from "react-router-dom";

import { CartIconContainer } from "../../Components/cart-icon/cart-icon.styles";

export const NavigationContainer = styled.div`
  // height: 70px;
  // width: 100%;
  // display: flex;
  // justify-content: space-between;
  // margin-bottom: 25px;

  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  background-color: white;
  box-shadow: ${({ scrolled }) => (scrolled ? "0 0 15px 0 #aaa" : "")};
  position: fixed;
  z-index: 2;
  padding: 0 40px;
  top: 0;
  left: 0;

  .overlay {
    position: fixed;
    background-color: black;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
    pointer-events: none;
  }

  .overlay.active {
    opacity: 0.7;
    pointer-events: all;
  }

  @media (max-width: 767px) {
    height: 70px;
    padding: 0 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  font-size: 30px;
  place-content: center;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }

  @media (max-width: 767px) {
    display: grid;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding-left: 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
`;

export const NavLinks = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  transition: 0.3s;

  .close {
    display: none;
    position: absolute;
    top: 5px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
  }

  &.active {
    transform: translateX(0);
  }

  @media (max-width: 767px) {
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 10px 10px;
    justify-content: flex-start;
    transform: translateX(100%);
    z-index: 3;

    .close {
      display: inline;
    }

    .cart-icon-container {
      padding: 10px 15px 10px 0;
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 390px;

  @media (max-width: 767px) {
    min-width: auto;
  }
`;
