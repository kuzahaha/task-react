import React from 'react';
import SearchFull1 from './SearchF/SearchFull1';

class Art6 extends React.Component{
constructor(props) {
    super(props);    
    this.state={
        isOpen: false
    }
}

handleClick=()=> {
    return(
         this.setState({isOpen:!this.state.isOpen})
    )
}

render(){
    return(
        <div>
            <SearchFull1 setValue={this.props.setValue} handler={this.handleClick} isOpen={this.state.isOpen} />
        </div>
    )}

    }

export default Art6;