import { createSlice } from "@reduxjs/toolkit";
const shopContents = require("../shop.json");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    glasses: [],
    shop: shopContents,
  },
  reducers: {
    addToCart: (state, action) => {
      //add to cart - trova l'indice dei glasses nell'array glasses
      let cartIndex = state.glasses.findIndex((x) => x.ID == action.payload.ID);

      console.log(cartIndex, state.glasses);
      //aggiungo item nel carrello
      if (cartIndex < 0) {
        //se l'indice minore di zero non e' nel carrello ->
        let newGlasses = { ...action.payload }; //copia, modifica e ripassa
        newGlasses.quantity = 1; //aggiungiamo 1 paio al carrello
        state.glasses.push(newGlasses);
      } else {
        state.glasses[cartIndex].sizes[0].quantity += 1; // se c'è l'indice incrementa quantity di 1
      }

      //lower quantity - tolgo dal carrello
      let arrayIndex = state.shop.findIndex((x) => x.ID == action.payload.ID);
      console.log(arrayIndex, action.payload.selected);
      state.shop[arrayIndex].sizes[action.payload.selected].quantity -= 1;
    },

    removeFromCart: (state, action) => {
      //mi aspetto come payload l'ID e la size per identificare la quantity da sottrarre
      //remove from cart
      let cartIndex = state.glasses.findIndex((x) => x.ID == action.payload.ID);
      if (cartIndex < 0) {
        //non e' nel carrello
        console.log("come mai?");
      } else {
        state.glasses[cartIndex].sizes[0].quantity -= 1;
        //se non ci sono piu' occhiali, rimuove l'entry dal carrello
        if (state.glasses[cartIndex].sizes[0].quantity <= 0) {
          //rimuove dal carrello
          state.glasses = state.glasses.filter(
            (x) => x.ID != action.payload.ID // filtra tutti gli elementi per cui il loro nome non è uguale a ID
          );
        }
      }

      //add back to shop
      let arrayIndex = state.shop.findIndex((x) => x.ID == action.payload.ID);
      let glassesInShop = { ...state.shop[arrayIndex] }; // fa una copia degli occhiali che hanno l'ID dentro il payload
      // per trovare l'indice corrispondente al size all'interno del payload
      let sizeIndex = glassesInShop.sizes.findIndex(
        (x) => x.size == action.payload.size
      ); // trova l'indice

      state.shop[arrayIndex].sizes[sizeIndex].quantity += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
