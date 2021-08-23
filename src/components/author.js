/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 11/Agosto/2021
**/
import React, { useState } from 'react';    

export function Author(props) {
    const {name, webFrontend, webSite} = props.options; 
    const handleClick = (url) => window.open(url);

    return (<div className="attribution">
        <span>
            Challenge by <a  href="#" onClick={()=> {
                handleClick(webFrontend)
            }}>Frontend Mentor</a>.
        </span> 
        <span>
            Coded by <a href="#" onClick={() => {
                handleClick(webSite)
            }}>{name !== undefined ? name : 'Your Name Here'}</a>.
        </span>
    </div>);
}
  
export default Author;
  
 
  