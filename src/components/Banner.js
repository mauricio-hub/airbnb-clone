import React, {useState} from 'react';
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'
import { useHistory } from 'react-router';
function Banner() {
      const history =useHistory()  
    const [showSearch,setShowSearch] = useState(false)


    return (
        <div className="banner">
            <div className="banner__search">

                {showSearch && <Search/>}

                <Button onClick={()=>
                setShowSearch(!showSearch)}
                variant='outline'
                className="banner__searchButton" >
                    {/*si showSearch es true ,muestra hide contrio search dates*/}
                {showSearch ? "Hide"  : "Search dates"}
                </Button>
            </div>
          <div className="banner__info">
              <h1>The Greatest Outdoors</h1>
                <h5>
                Wishlists curated by Airbnb.
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
          </div>
        </div>
    );
}

export default Banner;