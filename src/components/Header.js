import styled from "styled-components";

function Header() {
    return (
        <>
        
        <BarItems>
            <LastProducts>
              <p>LAST PRODUCTS AVAILABLE</p>
            </LastProducts>
            <ProductsAvailable>
             <p>5 products available</p>
            </ProductsAvailable>
            
        </BarItems>
        <Line/>
        </>
    )
}

export default Header



const BarItems = styled.div `
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: -25px;
  
`;
const LastProducts = styled.div `
display: flex;
align-items: center;
font-size: 22px;
font-weight: bold;
color: #555555;
`;

const ProductsAvailable = styled.div `
display: flex;
align-items: center;
font-size: 12px;
color: #626262;
`;

const Line = styled.div `
  border: 1px solid #999999;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: -20px;
`;