import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useSelector } from "react-redux";

function FooterCart() {
  const glasses = useSelector((state) => state.cart.glasses);
  let amount = 0;
  glasses.forEach((item) => (amount += item.sizes[0].quantity));

  return (
    <>
      <FooterContainer>
        <ButtonLeftContainer>
          <ArrowBackIosIcon />

          <ButtonBack>
            {" "}
            <Link to="/">
              <p>Back</p>
            </Link>
          </ButtonBack>
        </ButtonLeftContainer>

        <ButtonRightContainer>
          <Products>{amount} products added</Products>
          <Button>
            {" "}
            <Link to="/thanks">
              <p>Check out</p>
            </Link>
          </Button>
        </ButtonRightContainer>
      </FooterContainer>
    </>
  );
}

export default FooterCart;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid grey;
  padding: 20px;
`;

const ButtonRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -40px;
  width: 100px;
  height: 40px;
  font-size: 11px;
  cursor: pointer;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 15px;
    color: grey;
  }
`;
