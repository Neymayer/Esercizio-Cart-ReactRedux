import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Thanks from "./components/Thanks";
import styled from "styled-components";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//redux state manager
import { useSelector, useDispatch } from "react-redux";
//------------------------------

function App() {
  const [screen, setScreen] = useState(0);

  const setView = (scr) => {
    setScreen(scr);
  };

  //redux state manager
  const shop = useSelector((state) => state.cart.shop);
  const glasses = useSelector((state) => state.cart.glasses);
  const dispatch = useDispatch();
  //------------------------------

  return (
    <>
    <Router>
    <div className="App">
    <Title>
            <p>STORE LOGO</p>
        </Title>
      
      <Switch>
        <Route exact path="/">
        <Header />
      <Items>
        {shop.map((item, index) => {
          //calcolo quanti occhiali ci sono, in base alla somma delle quantita' delle varie taglie
          let total = 0;
          item.sizes.forEach((size) => {
            total += size.quantity;
          });

          return (
            <Card
              key={index} //richiesto da React
              img={item.img}
              title={item.name}
              code={item.ID}
              qty={total}
              price={"€ " + item.price}
              sizes={item.sizes}
            />
          );
        })}
      </Items><Footer/>
      </Route>
      
      <Route path="/cart">
      <Cart/>
      </Route>
      <Route path="/thanks">
      <Thanks/>
      </Route>
      </Switch>
      
    </div>
    </Router>
    </>

  );
}

export default App;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 115px;
  margin-right: 115px;
`;

const Title = styled.div `
 font-weight: 700;
 font-size: 35px;
 margin-top: 20px;
`;