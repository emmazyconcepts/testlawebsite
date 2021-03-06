import React from 'react'
import styled from "styled-components"
function Header() {
    return (
        <Container>
           <a>
             <img src="/images/logo.svg" alt=""/>
           </a>
           <Menu>
         <p><a href="#">Model S</a></p>
         <p><a href="#">Model 3</a></p>
         <p><a href="#">Model X</a></p>
         <p><a href="#">Model Y</a></p>
           </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`

min-height:  60px;
position: fixed;   //to keep in fixed position 
margin: 10px;
 display: flex;
align-item : center;
`
const Menu = styled.div`
 display:flex;
 align-item : center;
 p{
       font-weight: 600;
       text-transform: uppercase;
 }
`
