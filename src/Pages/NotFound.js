import React from 'react';
import { Link } from 'react-router-dom';
import mySVG from './../assets/images/mySVG5.svg'


const NotFound = () => {
    return (
        <div>
            <div className="WordstatsContainer">
                <img width="44%" src={mySVG} style={{marginTop:'30vh'}}/>
            </div>
            <div className="MessageNotFound">
                <h1>Oups !</h1>
                <p>La page que vous recherchez semble introuvable.</p>
                <Link to="/" className="LinkBackHome">Retour à la page d'accueil</Link>
            </div>
        </div>
    )
}

export default NotFound;
