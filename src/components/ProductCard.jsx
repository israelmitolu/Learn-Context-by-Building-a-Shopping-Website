import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <CardWrapper>
      <ProductImage
        src={product.image + "?v=" + product.id}
        alt={product.name}
      />
      <ProductName>{product.name}</ProductName>
      <ProductCardPrice>{formatCurrency(product.price)}</ProductCardPrice>
      <ProductCardButtons>
        {isInCart(product) && (
          <ButtonAddMore
            onClick={() => {
              increase(product);
            }}
            className="btn"
          >
            Add More
          </ButtonAddMore>
        )}

        {!isInCart(product) && (
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        )}
      </ProductCardButtons>
    </CardWrapper>
  );
};

//Styled Components
const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  flex: 1 1 auto;
  padding: 1.25rem;
  text-align: center;
`;

const ProductImage = styled.img`
  margin: 0 auto 10px;
  max-height: 200px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  align-self: center;
`;

const ProductName = styled.p`
  font-size: 0.9rem;
  text-align: left;
  margin: 1rem;
`;

const ProductCardPrice = styled.h3`
  font-size: 1.5rem;
  font-family: "Work Sans", sans-serif;
  text-align: left;
  font-weight: 500;
  margin-bottom: 0.7rem;
`;

const ProductCardButtons = styled.div`
  text-align: right;
`;

const Button = styled.button`
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 10px;
  border-radius: 0;
  text-transform: uppercase;
  cursor: pointer;
`;

const ButtonAddMore = styled(Button)`
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
  }
`;

export default ProductCard;
