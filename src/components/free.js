/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 11/Agosto/2021
**/
import React, { useState } from 'react';    
import illustration from '../assets/svgs/illustration-laptop-desktop.svg';

export function Free(props) {
    const {name, content} = props.options;
 
    return (
        <section className={"section_" + name} >
            <div className="container"> 
                <div className="content content__l">
                    <img alt="Free" src={illustration}></img>
                </div>
                <div className="content content__center__vertical">
                    {content.map((item, index) => {
                        return (<div key={item.title.toLowerCase()} className="content__info">
                            <h3 className="content__title">
                                {item.title}
                            </h3>
                            <p className="content__text">
                                {item.text}
                            </p>
                        </div>)
                    })}
                </div> 
                
            </div>
        </section>
    );
}
  
export default Free;
  
 
  