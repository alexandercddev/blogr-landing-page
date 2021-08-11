/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 11/Agosto/2021
**/
import React, { useState } from 'react';    

export function Author(props) {
    const {name} = props.options;
 
    return (<div class="attribution">
        <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span> 
        <span>Coded by <a href="#">{name !== undefined ? name : 'Your Name Here'}</a>.</span>
    </div>);
}
  
export default Author;
  
 
  