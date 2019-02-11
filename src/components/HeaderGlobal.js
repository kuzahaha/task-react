import React from 'react';
import HeaderMain from './HeaderMainF/HeaderMain';

function HeaderGlobal (props){
    return(
        <header className="global-header">
		   <HeaderMain setValue={props.setValue}/>
	    </header>
    )
}
export default HeaderGlobal