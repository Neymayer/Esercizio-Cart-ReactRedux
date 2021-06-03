import styled from "styled-components";
import FooterCart from "./FooterCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Negozio/cartSlice";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

function Cart() {
  const glasses = useSelector((state) => state.cart.glasses);
  const dispatch = useDispatch();

  return (
    <>
      <BarItems>
        <LastProducts>
          <p>CART</p>
        </LastProducts>
        <ProductsAvailable>
          <p>5 products available</p>
        </ProductsAvailable>
      </BarItems>
      <Line />
      <Container>
        <p>Your cart contains:</p>
        <GridContainer>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>SKU</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {glasses.map((item, index) => (
                <tr key={index}>
                  <td>
                    <ModelTd>
                      <Name>{item.name} </Name>
                      <RemoveButton
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              ID: item.ID,
                              size: item.sizes[0].size,
                            })
                          )
                        }
                      >
                        Remove <RemoveCircleOutlineIcon />
                      </RemoveButton>
                    </ModelTd>
                  </td>

                  <td>{item.ID}</td>
                  <td>{item.sizes[0].size}</td>
                  <td>{item.sizes[0].quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </GridContainer>
      </Container>
      <FooterCart />
    </>
  );
}

export default Cart;

const BarItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: -25px;
`;
const LastProducts = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #555555;
`;

const ProductsAvailable = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #626262;
`;

const Line = styled.div`
  border: 1px solid #999999;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: -20px;
`;

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
  text-align: left;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ModelTd = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

const Name = styled.div`
  display: flex;
`;

const LineCart = styled.div`
  border: 1px solid #999999;
  max-width: 100%;
`;

const TitlesCart = styled.div`
  display: flex;
  p {
    margin-left: 50px;
  }
`;

const Item = styled.div`
  display: flex;
  p {
    margin-left: 50px;
  }
`;

const GridDiv = styled.div`
  display: flex;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 25% 100px auto;
  border: 3px solid #999999;
  max-height: 100%;
`;

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  border-radius: 2px;
  background: transparent;
  border: none;
  color: red;
  font-size: 11px;
  cursor: pointer;
`;
