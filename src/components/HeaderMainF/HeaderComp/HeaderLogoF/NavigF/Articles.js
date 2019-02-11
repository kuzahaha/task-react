import React from 'react';
import Art2 from './ArticlesF/Art2';
import Art3 from './ArticlesF/Art3';
import Art4 from './ArticlesF/Art4';
import Art5 from './ArticlesF/Art5';
import Art6 from './ArticlesF/Art6';

function ListItems(props){
    const numbers=[<li><Art2/></li>,<li><Art2/></li>,<li><Art3/></li>,<li><Art4/></li>,<li><Art5/></li>,<li id="s1"><Art6 setValue={props.setValue}/></li>]
    return(
      numbers
    )
}
export default ListItems;

