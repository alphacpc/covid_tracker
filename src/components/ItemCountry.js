import React from "react";
import ReactFlag from 'react-country-flag';
import CountUp from "react-countup";
import { Link } from "react-router-dom";



const ItemCountry = ({country}) => {

    const UpdateText = () =>{
        return 'Dernière mise à jour '
    }

    return (
        <div className="CountryItem">
            <div className="case-box box-flag">
                <Link to={`/country/${country.Slug}-${country.CountryCode}`}><ReactFlag 
                    className="countryFlag" svg
                    countryCode={country.CountryCode}
                    style={{ width: "80px", height: "80px"}}
                /></Link>
                <Link to={`/country/${country.Slug}-${country.CountryCode}`}>{country.Country}</Link>
                
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalConfirmed} duration={1} separator=","/></h3>
                <span>{UpdateText()}</span>
                <span>{new Date(country.Date).toLocaleDateString()}</span>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalRecovered} duration={1} separator=","/></h3>
                <span>{UpdateText()}</span>
                <span>{new Date(country.Date).toLocaleDateString()}</span>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalDeaths} duration={1} separator=","/></h3>
                <span>{UpdateText()}</span>
                <span>{new Date(country.Date).toLocaleDateString()}</span>

            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalDeaths} duration={1} separator=","/></h3>
                <span>{UpdateText()}</span>
                <span>{new Date(country.Date).toLocaleDateString()}</span>
            </div>
        </div>
    )
}

export default ItemCountry
