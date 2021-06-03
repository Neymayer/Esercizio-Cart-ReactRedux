import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Thanks() {
  return (
    <>
      <Line />
      <Container>
        <ThanksMessage>
          <p>Thank you!</p>
          <ProductMessage>
            <p>Your products will shipped soon</p>
          </ProductMessage>
        </ThanksMessage>
        <Button>
          {" "}
          <Link to="/">
            <p>Buy more</p>
          </Link>
        </Button>
      </Container>
    </>
  );
}

export default Thanks;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  padding: 10px;
  padding-bottom: 15px;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 20px;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Line = styled.div`
  border: 1px solid #999999;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: -20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #5f729d;
  border: 2px solid #5f729d;
  border-radius: 2px;
  font-size: 11px;
  cursor: pointer;

  p {
    font-size: 15px;
    color: white;
  }
`;

const ThanksMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
`;

const ProductMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
