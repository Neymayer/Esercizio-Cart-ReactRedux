import React from "react";
import { useSelector } from "react-redux";

const CartList = (props) => {
  const glasses = useSelector((state) => state.cart.glasses);

  return (
    <div id="cart">
      <ol>
        {glasses.map((item, index) => (
          <li key={index}>{item.name + " - " + item.quantity}</li>
        ))}
      </ol>
      <button onClick={() => props.setScreen(0)}>Compra</button>
    </div>
  );
};

export default CartList;