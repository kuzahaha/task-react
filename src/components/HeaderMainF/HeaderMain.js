import React from 'react';
import Navig from './HeaderComp/Navig'
import HeaderLogo from './HeaderComp/HeaderLogo'
import Burger from './HeaderComp/Burger'

class HeaderMain extends React.Component{
  constructor(props){
    super(props);
    this.state={ isOpenBurger : false};
  }
  handleClickBurger=()=>{
      return(
           this.setState({isOpenBurger:!this.state.isOpenBurger})
      )
  }

  render(){  
    return(
        <div className="header-main">
          <HeaderLogo/>
          <Navig setValue={this.props.setValue} isOpenBurger={this.state.isOpenBurger}/>
          <Burger handleClickBurger={this.handleClickBurger}/>
        </div>
    )
  }
}
export default HeaderMain