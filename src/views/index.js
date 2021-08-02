/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 01/Agosto/2021
 */
import React, { useState } from 'react';  
import {options} from '../utils/information';

export function BlogrPage(props) {

    return (<div className="div__main">
        <header className="header__container">
            <div className="header_div__content">
                <div className="header_div__options">
                    <img src='logo.svg'></img>
                    <ul className="ul__option__desktop">
                        {options.header.main.options.map((item, index) => {
                            return (<li key={item.key} className="li__option__desktop">
                                <a href={"#" +item.key} className="a__option__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className="header_div__button">
                    <ul className="ul__button__desktop">
                        {options.header.main.buttons.map((item, index) => {
                            return (<li key={item.key} className="li__button__desktop">
                                <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className="header_div__content">
                <h1 className="header__title">{options.header.content.title}</h1>
                <h3 className="header__sub__title">{options.header.content.subTitle}</h3>
                {options.header.content.buttons.map((item, index) => {
                    return (<li key={item.key} className="li__button__desktop">
                        <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                    </li>)
                })}
            </div>
        </header>
    </div>);
}

export default BlogrPage;

