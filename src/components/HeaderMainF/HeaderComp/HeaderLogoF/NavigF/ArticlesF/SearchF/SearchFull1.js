import React, {Component} from 'react';
import Input from './SearchFLow/Input'
import Sbmt from './SearchFLow/Sbmt'


class SearchFull1 extends Component {  
    render(){
        console.log(this.props.isOpen)
        return (
            <form id = "s1">
               <Input   setValue={this.props.setValue} isOpen={this.props.isOpen} />
               <Sbmt handler={this.props.handler}/>
            </form>
         );
    }  
}

export default SearchFull1