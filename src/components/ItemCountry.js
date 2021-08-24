import React from "react";
import ReactFlag from 'react-country-flag';
import CountUp from "react-countup";




const ItemCountry = ({country}) => {

    const UpdateText = () =>{
        return 'Dernière mise à jour '
    }

    return (
        <div className="CountryItem">
            <div className="case-box box-flag">
                <a href={`https://api.covid19api.com/dayone/country/${country.Slug}`}><ReactFlag 
                    className="countryFlag" svg
                    countryCode={country.CountryCode}
                    style={{ width: "80px", height: "80px"}}
                /></a>
                <a href="https://www.google.com/">{country.Country}</a>
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
