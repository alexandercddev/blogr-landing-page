/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 11/Agosto/2021
**/
import React, { useState } from 'react';    
import mobile from '../assets/svgs/illustration-phones.svg' 
export function StateOf(props) {
    const {name, title, content} = props.options;
 
    return (
        <section className={"section_" + name} >
            <div className="state__content state__img">
                <img alt={title} src={mobile} />
            </div> 
            <div className="state__content state__text content__center__vertical">
                <h3 className="content__title">{title}</h3>
                <p className="content__text">{content}</p>
            </div>
        </section>
    );
}
  
export default StateOf;
  
 
  