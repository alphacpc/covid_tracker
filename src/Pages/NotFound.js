import React from 'react';
import mySVG from './../assets/images/mySVG5.svg'

const NotFound = () => {
    return (
        <div>
            <div className="WordstatsContainer">
                <img width="44%" src={mySVG} style={{marginTop:'40vh'}}/>
            </div>
            <h1>Oups !</h1>
            <p>Page introuvable</p>
        </div>
    )
}

export default NotFound;
