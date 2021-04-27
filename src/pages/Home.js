import React from 'react';
import './Home.css';
import {Link, BrowserRouter} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';



function Home() {
    return (
        <div className= 'home'>
          
            <div className='home__header'>
                <div className='home__headerLeft'>
                <BrowserRouter>
                    <Link to ='/about '>About</Link>
                 </BrowserRouter>  
                 <BrowserRouter>
                 <Link to ='/store '>Store</Link>
                 
                 </BrowserRouter>  

                </div> 
                <div className='home__headerRight'>
                    <BrowserRouter>
                        <Link to ='/gmail '>Gmail</Link>
                    </BrowserRouter>  
                    <BrowserRouter>
                    <Link to ='/images '>Images</Link>                    
                    </BrowserRouter>
                    <AppsIcon/>
                    <Avatar/>



                </div> 

            </div>
            <div className='home__body'>
                <img src="https://www.google.com/logos/doodles/2021/thank-you-public-health-workers-and-researchers-in-the-scientific-community-6753651837109269-law.gif" 
                 alt='Google' />
                <div className='home__inputContainer' >
                    <Search/>

                </div>


            </div>
        </div>
    )
}

export default Home
