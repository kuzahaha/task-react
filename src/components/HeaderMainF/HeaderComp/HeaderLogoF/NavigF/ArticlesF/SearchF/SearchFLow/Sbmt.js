import React from 'react';
import SbmtLogo from '../../../../../../../../assets/images/search-solid.svg'


function Sbmt(props){
  
    return (
        <div id="sbmt">
            <img src={SbmtLogo} onClick = {() =>props.handler()} alt="png"/>
        </div>
    )
}
export default Sbmt