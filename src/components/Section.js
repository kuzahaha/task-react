import React from 'react'; 
import SectionBlocks from './SectionF/SectionBlocks'

function Section (props){
    return(
        <section id="section">
            <SectionBlocks value={props.value}/>
        </section>
    )
}
export default Section
