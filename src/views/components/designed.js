/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 11/Agosto/2021
 */
import React, { useState } from 'react';    

export function Designed(props) {
    const {name, title, content} = props.options;

    return (<section className={"section_" + name} >
        <h2 className="container___title">{title}</h2>
        <div className="container"> 
            <div className="content">
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
            <div className="content content__r"></div>
        </div>
    </section>);
}
 
export default Designed;
 

 