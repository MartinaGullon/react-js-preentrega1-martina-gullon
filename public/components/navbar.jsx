import React, { useState } from "react"
import styled from "styled-components"
import BurgerButton from "./brandicon"

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <h2>
                    Snikky <span>Vintage</span>
                </h2>
                <div className={`links ${clicked ? "active" : ""}`}>
                    <a href="/">Home</a>
                    <a href="/">Productos</a>
                    <a href="/">About</a>
                    <a href="/">Contacto</a>

                </div><div className="burger">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />

                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>

    )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
font-weight: bold;

    }
}
padding: .4rem;
background-color: black;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links{
position:absolute;
top: -700px;
left: -200px;
margin-left: auto;
margin-right: auto;
text-align: center;
a{
    color: black;
    font-size: 2rem;
    display: block;
}
@media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
        font-size: 2rem;
        color: white;
        display: inline;
    }
}
}
.links.active{
width: %100;
display: block;
position: absolute;
margin-left: auto;
margin-right: auto;
top: 30%;
left: 0;
right: 0;
text-align: center;
color: black;
a{
    color: black;

}

}
.burger{
    @media(min-width: 768px){
display:none;

    }
}
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`