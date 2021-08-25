/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 24/Agosto/2021
**/
import React, { useState } from 'react';    

export function Footer(props) {
    const {options, logo} = props;  
    return (
        <footer className="footer">
            <div className="footer__img">
                <img className="logo__img" alt="Blogr" src={logo}/>
            </div>
            <div className="footer_options">
                {options.map((item, index) => {
                    return (
                        <div key={'footer-' + item.key}>
                            <ul>
                                <li className="footer__section">
                                    <a href={"#" + item.key} className="footer__a">
                                        {item.text}
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                {item.dropDown.map((value, index) => {
                                    return (
                                        <li key={'option-' + index}>
                                            <a href="#" className="footer__a">
                                                {value}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul> 
                        </div>
                    )
                })}
            </div>
        </footer>
    );
}
  
export default Footer;
  