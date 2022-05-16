// General
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../assets/icons/cart.svg";
import styled from "styled-components";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // Get Screen Size
  useEffect(() => {
    const changeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  // Extract cartItems state from CartContext
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <Nav>
      <NavContainer>
        <Left>
          <Link to={"/"}>FASHION.</Link>
        </Left>

        <Right>
          <NavRightContainer
            style={{
              transform:
                innerWidth <= 500
                  ? toggle && "translateY(100vh)"
                  : "translateY(0%)",
            }}
          >
            <NavList>
              <NavItem>
                <NavLink to={"/"}>Store</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={"/about"}>About</NavLink>
              </NavItem>
              <NavItem>
                <a href="https://twitter.com/israelmitolu" target="_blank">
                  Contact
                </a>
              </NavItem>
              <NavItem>
                <span>
                  <p>Cart</p>
                  <NavCartItem onClick={showHideCart}>
                    <img src={CartIcon} alt="Shopping cart" />
                    {/* If the number of cartItems is greater than 0, display the
                    number of items in the cart */}
                    {cartItems.length > 0 && (
                      <CartCircle>{cartItems.length}</CartCircle>
                    )}
                  </NavCartItem>
                </span>
              </NavItem>
            </NavList>
          </NavRightContainer>

          <MenuBtn onClick={() => setToggle(!toggle)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuBtn>
        </Right>
      </NavContainer>
    </Nav>
  );
};

//Styled Components
const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4.5rem;
  font-size: 1em;
  z-index: 50;
  background-color: #eee;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    border: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
    border-bottom: 1.5px solid #cfcfd0;
  }

  @media (max-width: 500px) {
    background-color: #eee;
  }
`;

const NavRightContainer = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    position: fixed;
    top: calc(4.5rem - 100vh);
    left: 0;
    background-color: #fff;
    z-index: -1;
    transition: transform 600ms cubic-bezier(1, 0, 0, 1) 0ms;
  }
`;

const Left = styled.div`
  a {
    color: #13122e;
    font-weight: 700;
    font-size: 1.25rem;
    font-family: "Cormorant Garamond", serif;
  }
`;

const Right = styled.div`
  font-family: "Work Sans", sans-serif;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const NavItem = styled.li`
  margin: 0 1.25em;

  a,
  span {
    color: #13122e;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-bottom: 1px solid #cfcfd0;
      max-height: 45px;

      &:hover {
        background-color: #cfcfd0;
      }
    }

    img {
      width: 1.6rem;
    }
  }
  p {
    display: none;
  }

  @media (max-width: 500px) {
    width: 100%;

    &:nth-of-type(4) a {
      display: flex;
      justify-content: space-between !important;
      align-items: center;
      border: none;
    }

    p {
      display: initial;
    }
  }
`;

const NavCartItem = styled.div`
  position: relative;

  img {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const CartCircle = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #13122e;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85em;

  @media (max-width: 500px) {
    position: initial;
  }
`;

const MenuBtn = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column nowrap;
    width: 18px;
    height: 14px;

    span {
      width: 100%;
      height: 2px;
      background-color: #13122e;
    }
  }
`;

export default Navbar;
