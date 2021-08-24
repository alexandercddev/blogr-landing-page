/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 22/Agosto/2021
**/
import React, { useState } from 'react';    
import logo from '../assets/svgs/logo.svg';

export function Header(props) {
    const { options } = props;
    
    return (
        <header className="header__container" >
            <div className="header_div__content_head">
                <div className="header__div__options">
                    <div className="header__div__img">
                        <img alt="Blogr" className="header__img" src={logo}></img>
                    </div>
                    <ul className="ul__option__desktop">
                        {options.main.options.map((item, index) => {
                            return (<li key={item.key} className={"li__option__desktop " + item.key} >
                                <a href={"#" +item.key} className="a__option__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className="header_div__button">
                    <ul className="ul__button__desktop">
                        {options.main.buttons.map((item, index) => {
                            return (<li key={item.key} className={"li__button__desktop " + item.key}>
                                <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className="header_div__content">
                <div className="header_div__titles">
                    <h2 className="header__title">{options.content.title}</h2>
                    <p className="header__sub__title">{options.content.subTitle}</p>
                </div>
                <div className="header_div__button_action">
                    <ul className="ul__button__desktop">
                        {options.content.buttons.map((item, index) => {
                            return (<li key={item.key} className={"li__button__desktop " + item.key}>
                                <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}
  
export default Header;