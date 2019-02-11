import React from 'react';


const Input = (props)=> {
    console.log(props.isOpen)
    if(props.isOpen === true ){
        return ( 
        <input id="search-input" name="srch"  style={{height:'50px'}}onChange= {(e)=>handleChange(e,props.setValue)}  placeholder="Search for documentation,guides and posts..." type="search"/>
        )
    }else return(
        <input id="search-input" name="srch" style={{height:'0',padding:'0'}}onChange= {(e)=>handleChange(e,props.setValue)}  placeholder="Search for documentation,guides and posts..." type="search"/>
    )
  }
  function handleChange(e,setValue){
      setValue(e.target.value)
  }

export default Input 