/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 01/Agosto/2021
 */
import React, { useState } from 'react';  
import { options } from '../utils/information';
import { Designed } from './designed';
import { StateOf } from './stateof';
import { Free } from './free';
import { Author } from './author';
import { Header } from './header';
import { Footer } from './footer';
import logo from '../assets/svgs/logo.svg';

export function BlogrPage(props) {

    return (<div className="div__main">
        <Header options={options.header} logo={logo}/>
        <Designed options={options.sections.designed}/>
        <StateOf options={options.sections.stateof}/>
        <Free options={options.sections.free}/>
        <Footer options={options.header.main.options} logo={logo}/>
        <Author options={options.author}/>
    </div>);
}

export default BlogrPage;

