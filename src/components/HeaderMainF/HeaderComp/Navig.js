import React from 'react';
import Articles from './HeaderLogoF/NavigF/Articles'

function Navig(props){
   console.log(props)
   if(props.isOpenBurger === false){
    return(
      <nav id="navig" style={{marginLeft :' -175px'}}>  
        <ul className="header-nav">
           <Articles setValue={props.setValue} isOpenBurger={props.isOpenBurger}/>
        </ul>
      </nav> 
    )
   }else {
   return(
      <nav id="navig" style={{marginLeft :' 0px'}}>  
      <ul className="header-nav">
         <Articles setValue={props.setValue} isOpenBurger={props.isOpenBurger} />
      </ul>
    </nav> 
   ) 
   }
}

export default  Navig  
