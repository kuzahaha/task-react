import React from 'react';
import Art1 from './ArticlesF/Art1';
import Art6 from './ArticlesF/Art6';


function Articles(props){
  const numbers2=[
  <li><Art1 setValue={props.setValue} /></li>,
  <li><p>projects</p></li>,
  <li><p>guides</p></li>,
  <li><p>blog</p></li>,
  <li><p>training&certification</p></li>,
  <li id="s1"><Art6 setValue={props.setValue} isOpenBurger={props.isOpenBurger}/></li>
]
  const numbers=[
    <li><p>projects</p></li>,
    <li><p>guides</p></li>,
    <li><p>blog</p></li>,
    <li><p>training&certification</p></li>,
    <li id="s1"><Art6 setValue={props.setValue} isOpenBurger={props.isOpenBurger}/></li>
  ]
  if(props.isOpenBurger===false)  {
  return(
      numbers
    )}else {
      return(
      numbers2
      )
    }
}
export default Articles;

