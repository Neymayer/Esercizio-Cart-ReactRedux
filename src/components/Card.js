import styled from "styled-components";
import { useState } from "react";

//redux state manager
import { addToCart, removeFromCart } from "../Negozio/cartSlice";
import { useDispatch } from "react-redux";

//------------------------------

function Card({ img, title, code, qty, price, sizes }) {
  // memorizzo la size selezionata
  const [SelectedItem, setSelectedItem] = useState(0);
  const dispatch = useDispatch();

  return (
    <Container>
      <Photo src={img} />
      <Title>{title}</Title>
      <Code>{code}</Code>
      <Quantity>Qty:{qty}</Quantity>
      <Price>Price: {price}</Price>

      <ActionSection>
        {sizes.length > 1 && (
          <SelectSize>
            <select
              onChange={(e) => setSelectedItem(e.target.value)}
              name="size"
              id="size"
              value={SelectedItem}
            >
              <option value="" disabled selected hidden>
                Select size
              </option>
              {sizes.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.size + " (" + item.quantity + " pcs)"}
                  </option>
                );
              })}
            </select>
          </SelectSize>
        )}
        <AddItemButton
          disabled={sizes[SelectedItem].quantity <= 0}
          onClick={() => {
            let size = { ...sizes[SelectedItem] }; // inserisce l'oggetto all'indice SelectedItem di sizes
            size.quantity = 1;
            let newGlasses = {
              img: img,
              name: title,
              ID: code,
              sizes: [size], // ogni occhiale nel carrello ha una sola size, quella selezionata all'indice selected item
              price: price,
              selected: SelectedItem, // valore aggiunto per sapere quale size è stata selezionata
            };
            dispatch(addToCart(newGlasses)); //dispatch chiama la funzione nel reducer -> addToCart
          }}
        >
          Add
        </AddItemButton>
      </ActionSection>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  justify-content: flex-start;
  padding: 10px;
  padding-bottom: 15px;
  margin-left: 10px;
  margin-top: 20px;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: hidden;
  margin-bottom: 8px;
  width: 157px;
  height: 200px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Photo = styled.img`
  max-height: 200px;
  object-fit: contain;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectSize = styled.div``;

const AddItemButton = styled.button`
  display: flex;
  justify-content: center;
  width: 45px;
  height: 20px;
  background-color: #5f729d;
  border: 2px solid #5f729d;
  border-radius: 2px;
  color: white;
  font-size: 11px;
  cursor: pointer;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Code = styled.span`
  font-size: 12px;
`;

const Price = styled.span`
  font-size: 12px;
`;

const Quantity = styled.p`
  font-size: 12px;
`;
