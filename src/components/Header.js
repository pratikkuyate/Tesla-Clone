import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import TemporaryDrawer from './TemporaryDrawer';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        
          <p><a href="#">Model 3</a></p>
          <p><a href="#">Model X</a></p>
          <p><a href="#">Model S</a></p>
          <p><a href="#">Model Y</a></p>
        
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* {<CustomeMenu onClick={()=>setBurgerStatus(true)}/>} */}
        <TemporaryDrawer/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>

        {/* {<CloseWrapper>
          <CustomeClose onClick={()=> setBurgerStatus(false)}/>
        </CloseWrapper>} */}
        <li><a href="#">Exsiting Inventory</a></li>
        <li><a href="#">User Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadstar</a></li>
      </BurgerNav>
    </Container>

  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    align-items: center;
  }
  p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px)
  {
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-item: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  margin-right: 10px;
  flex-wrap: nowrap;
  padding: 0 10px;
}

`

const CustomeMenu = styled(MenuIcon)`

  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  transform: ${props=> props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ease-in;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight: 600;
    }
  }
`

const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

