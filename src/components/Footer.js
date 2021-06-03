import styled from "styled-components";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const glasses = useSelector((state) => state.cart.glasses);
  let amount = 0;
  glasses.forEach((item) => {
    console.log(item);
    amount += item.sizes[0].quantity;
  });

  return (
    <FooterContainer>
      <Products>{amount} products added</Products>
      <Button>
        {" "}
        <Link to="/cart">
          <p>Go to Cart</p>
        </Link>
      </Button>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid grey;
  padding: 20px;
`;

const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  width: 100px;
  height: 40px;
  background-color: #5f729d;
  border: 2px solid #5f729d;
  border-radius: 2px;
  font-size: 11px;
  cursor: pointer;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: white;
  }
`;
