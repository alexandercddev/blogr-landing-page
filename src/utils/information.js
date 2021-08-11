/**
 * @author: AlexanderCDs
 * @description: Blogr landing page information
 * @date: 01/Agosto/2021
 */

export const options = {
    header: {
        main: {
            options: [
                {
                    key: 'product',
                    text: 'Product', 
                    dropDown: [
                        'Overview',
                        'Pricing',
                        'Marketplace',
                        'Features',
                        'Integrations'
                    ] 
                },
                {
                    key: 'company',
                    text: 'Company',
                    dropDown: [
                        'About',
                        'Team',
                        'Blog',
                        'Careers'
                    ] 
                },
                {
                    key: 'connect',
                    text: 'Connect',
                    dropDown: [
                        'contact',
                        'newsletter',
                        'linkedIn',
                    ],  
                }
            ],
            buttons: [
                {
                    key: 'login',
                    text: 'Login',
                    type: 'primary'
                },
                {
                    key: 'signup',
                    text: 'Sign Up',
                    type: 'default'
                }
            ],
        }, 
        content:{
            title: 'A modern publishing platform',
            subTitle: 'Grow your audience and build your online brand',
            buttons: [
                {
                    key: 'startfree',
                    text: 'Strat for Free',
                    type: 'default'
                },
                {
                    key: 'learnmore',
                    text: 'Learn More',
                    type: 'secondary'
                }
            ] 
        } 
    },
    sections:{
        designed: {
            name: 'designed',
            title: 'Designed for the future',
            content:[
                {
                    title: 'Introducing an extensible editor',
                    text: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.'+ 
                        'The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,' +
                        'videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or ' +
                        'change the looks of a blog.'
                },
                {
                    title: 'Robust content management',
                    text: 'Flexible content management enables users to easily move through posts. Increase the usability of your blog ' +
                        'by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'
                }
            ]
        },
        stateof: {
            name: 'state',
            title: 'State of the Art Infrastructure',
            content: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. ' +
                'This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
        },
        free: {
            name: 'free',
            title: '',
            content: [
                {
                    title: 'Free, open, simple',
                    text: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports ' +
                        'features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,' +
                        'and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.' 
                },
                {
                    title: 'Powerful tooling',
                    text: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but ' +
                        'capable of producing even the most complicated sites.'
                },       
            ]
        },
    },
    author:{
        name: 'alexandercds',
        social: [
            
        ]
    }
}; 

export default options;