import React from 'react';
import './SearchPage.css';
import {useStateValue} from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import { Description, Image, LocalOffer, MoreVert, YouTube } from '@material-ui/icons';


function SearchPage() {
    const [{term}, dispatch]= useStateValue();
    const {data}= useGoogleSearch(term);
    //live api call
    

    //console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
               <Link to ='/'>
                   <img
                    className='searchPage__logo'
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                    alt='' />
               </Link>
               <div className='searchPage__headerBody'>
                   <Search hideButton/>
                   <div className='searchPage__options'>
                       <div className='options__left'>
                         <div className='optionsl' >
                             <SearchIcon/>
                             <Link to ='/all'>ALL</Link>
                         </div> 
                         
                         <div className='optionsl' >
                             <Image/>
                             <Link to ='/images'>Images</Link>
                         </div> 
                         <div className='optionsl' >
                             <Description/>
                             <Link to ='/news'>News</Link>
                         </div> 
                         <div className='optionsl' >
                            <YouTube/>
                             <Link to ='/videos'>Videos</Link>
                         </div> 
                         <div className='optionsl' >
                             <LocalOffer/>
                             <Link to ='/shopping'>shopping</Link>
                         </div> 
                         <div className='optionsl' >
                             <MoreVert/>
                             <Link to ='/maps'>maps</Link>
                         </div>  
                       </div>
                       <div className='options__right'>
                           <div className='optionsl' >
                                
                                <Link to ='/settings'>Settings</Link>
                            </div> 
                            <div className='optionsl' >
                                
                                <Link to ='/tools'>Tools</Link>
                            </div> 

                       </div>

                   </div>
               </div>
                

            </div>
            {term && (
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds ) for {term}

                    </p>

                     {data?.items.map(item=>(
                        
                        <div 
                            className='searchPage_result'>
                              <a href= {item.link}>
                                {item.pagemap?.cse_image?.length> 0 && 
                                item.pagemap?.cse_image[0]?.src && (

                                    <img className='searchPage__resultImage' 
                                        src= {item.pagemap?.cse_image?.length> 0 && item.pagemap?.cse_image[0]?.src} 

                                        alt=''
                                        />

                                )}

                                  {item.displayLink}

                              </a> 
                              <a 
                                className='searchPage__resultTitle' href={item.link}>
                                    <h2>{item.title}</h2>

                              </a>
                              <p className='searchPage__resultSnippet'>
                                  {item.snippet}
                              </p>
                        </div>        
                        ))}
                    
                </div>

            )}


                


            
        </div>
    )
}

export default SearchPage;
