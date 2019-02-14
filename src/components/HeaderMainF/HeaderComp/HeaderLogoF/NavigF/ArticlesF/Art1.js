import React from 'react';

function Art1(props){
    return (
        <input id="search-input2" name="srch"  onChange= {(e)=>handleChange(e,props.setValue)}  placeholder="Search for documentation,guides and posts..." type="search"/>
    )
}
function handleChange(e,setValue){
    setValue(e.target.value)
}

export default Art1;