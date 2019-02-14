import React from 'react';
import HeaderGlobal from './components/HeaderGlobal'
import Section from './components/Section'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''}
  }
  setValue = (value) => {
       this.setState({value})
  }
  render(){
    return(
      <div>
          <HeaderGlobal setValue={this.setValue}/>
          <Section value={this.state.value}/>
      </div>
    )
  }
}

export default App;
