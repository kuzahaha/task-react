import React from 'react';
import Img from '../../assets/images/icon-spring-framework.svg';

function SectionBlocks(props){
    const products = [
        {path: Img, name: 'spring boot', description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".'},
        {path: Img, name: 'spring cloud', description: 'The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications.'},
        {path: Img, name: 'spring data', description: 'Spring Cloud Data Flow is a toolkit for building data integration and real-time data processing pipelines.'}
    ]
    const filteredProducts = products.filter(item => item.name.includes(props.value));
    const renderedProducts = filteredProducts.map((item,index) => {
    return(
      <div className="section-block" key={index}>
         <img src={item.path} alt ="img"/>
         <h1>{item.name}</h1>
         <p>{item.description}</p>
      </div>
    )
  })
  return(renderedProducts.length===0 ? <h1>No results</h1> : renderedProducts)
}
export default SectionBlocks

