/**
 * @author: AlexanderCDs
 * @description: Blogr landing page
 * @date: 01/Agosto/2021
 */

export const options = {
    header: {
        main: {
            options: [
                {
                    key: 'product',
                    text: 'Product',  
                },
                {
                    key: 'company',
                    text: 'Company',
                },
                {
                    key: 'connect',
                    text: 'Connect',
                    dropDown: [
                        {
                            key: 'contact',
                            text: 'Contact',  
                        },
                        {
                            key: 'newsletter',
                            text: 'Newsletter',  
                        },
                        {
                            key: 'linkedIn',
                            text: 'LinkedIn',  
                        }
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
    }
}; 

export default options;