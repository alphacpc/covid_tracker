import React from "react";
import ReactFlag from 'react-country-flag';
import CountUp from "react-countup";



const ItemCountry = ({country}) => {

    return (
        <div className="CountryItem">
            <div className="case-box">
                <a href="https://www.google.com"><ReactFlag 
                    className="countryFlag" svg
                    countryCode={country.CountryCode}
                    style={{ width: "80px", height: "80px"}}
                /></a>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalConfirmed} duration={1} separator=","/></h3>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalRecovered} duration={1} separator=","/></h3>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalDeaths} duration={1} separator=","/></h3>
            </div>
            <div className="case-box">
                <h3> <CountUp start={0} end={country.TotalDeaths} duration={1} separator=","/></h3>
            </div>
        </div>
    )
}

export default ItemCountry
