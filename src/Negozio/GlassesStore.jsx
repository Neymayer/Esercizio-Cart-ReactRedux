import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const GlassesStore = (props) => {
  const shop = useSelector((state) => state.cart.shop);
  const glasses = useSelector((state) => state.cart.glasses);
  const dispatch = useDispatch();

  return (
    <div>
      <div id="shop">
        <ul>
          {shop.map((item, index) => (
            <li key={index} onClick={() => dispatch(addToCart(item))}>
              {item.name + " - " + item.price + " - " + item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div id="cart">
        <ul>
          {glasses.map((item, index) => (
            <li key={index} onClick={() => dispatch(removeFromCart(item))}>
              {item.name + " - " + item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <FooterContainer>
            <CountItems>0 products added </CountItems>
            <Button onClick={() => props.setScreen(1)}>Go to cart</Button>
            </FooterContainer>
    </div>
  );
};

export default GlassesStore;

const FooterContainer = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
background-color: white;
position: absolute;
right: 0;
left: 0;
bottom: 0;
padding: 30px;
border-top: 1px solid grey;
`;

const Button = styled.button `
margin-left:5px;
width: 85px;
height: 30px;
background-color: #5f729d;
border: 2px solid #5f729d;
border-radius: 4px;
color: white;
font-size: 12px;
margin-right: 40px;
cursor: pointer`;

const CountItems = styled.div `
font-size: 12px;`;