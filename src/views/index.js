/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 01/Agosto/2021
 */
import React, { useState } from 'react';  
import {options} from '../utils/information';
import {Designed} from './components/designed'
import {StateOf} from './components/stateof'
import {Free} from './components/free'
import {Author} from './components/author'

export function BlogrPage(props) {

    return (<div className="div__main">
        <header className="header__container" >
            <div className="header_div__content_head">
                <div className="header__div__options">
                    <div className="header__div__img">
                        <img className="header__img" src='logo.svg'></img>
                    </div>
                    <ul className="ul__option__desktop">
                        {options.header.main.options.map((item, index) => {
                            return (<li key={item.key} className={"li__option__desktop " + item.key} >
                                <a href={"#" +item.key} className="a__option__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
                <div className="header_div__button">
                    <ul className="ul__button__desktop">
                        {options.header.main.buttons.map((item, index) => {
                            return (<li key={item.key} className={"li__button__desktop " + item.key}>
                                <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className="header_div__content">
                <h1 className="header__title">{options.header.content.title}</h1>
                <h4 className="header__sub__title">{options.header.content.subTitle}</h4>
                <div className="header_div__button_action">
                    <ul className="ul__button__desktop">
                        {options.header.content.buttons.map((item, index) => {
                            return (<li key={item.key} className={"li__button__desktop " + item.key}>
                                <a href={"#" +item.key} className="a__button__desktop">{item.text}</a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </header>
        <Designed options={options.sections.designed}/>
        <StateOf options={options.sections.stateof}/>
        <Free options={options.sections.free}/>
        <Author options={options.author}/>
    </div>);
}

export default BlogrPage;

