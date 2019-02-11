import React from 'react';
import BurgerLogo from '../../../assets/images/bars-solid.svg';

function Burger(props){
    return (
       <div id="burger">
           <img src={BurgerLogo} onClick = {() =>props.handleClickBurger()} alt="img"/>
       </div>
    )
}
export default Burger