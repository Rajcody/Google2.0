import { Button } from '@material-ui/core';
import { Mic, SearchOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';

import './Search.css';


function Search({hideButton= false}) {

    const [{}, dispatch]= useStateValue();
    const[input ,setInput]= useState('');
    const history = useHistory();
    const search=(e)=>{
        e.preventDefault();
        console.log('You hit search', input);


        dispatch({
            type: actionTypes.SET_SEARCH_TERM, 
            term: input
        })

        history.push('/search')
        

    };

    return (
        <form className='search'>
           <div className='search__input'>
               <SearchOutlined className='search__inputIcon'/>
               <input value={input} 
               
                    onChange={(e)=>
                    
                     setInput(e.target.value)
                    } 
                
                />
                
                
               <Mic/>
               
           </div>

            {!hideButton?(
                <div className='search__buttons'>
                    <Button type='submit'
                        onClick={search}
                        variant='outlined'>Google Search</Button>
                    <Button 
                    variant ='outlined'>I'm Feeling Lucky</ Button>
                </div>

            ):(
                <div className='search__buttons'>
                    <Button  className='hide'
                         type='submit'
                        onClick={search}
                        variant='outlined'>Google Search</Button>
                    <Button 
                     className='hide'   
                     variant ='outlined'>I'm Feeling Lucky</ Button>
                </div>
            )
            }        

           
        </form>
    )
}

export default Search;
