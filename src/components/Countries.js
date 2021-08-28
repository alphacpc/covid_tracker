import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ItemCountry from './ItemCountry';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);

    const searchCountry = (e) => {
        const value = e.target.value;

        console.log(value + " "+ value.length);

        const countryDetails = countries;

        let FindByCountry = []

        if(value){
            countryDetails.map((cur,index) => {
                const finder = cur.Country.toLowerCase().search(value.toLowerCase());

                if(finder != -1){
                    FindByCountry.push(countryDetails[index])
                }
            })

            setSearchedCountries(FindByCountry);
        }else{
            setCountries(countries);
        }

        if(value.length === 0){
            console.log(countries)
            setCountries(countries);
        }
        else{
            setCountries(searchedCountries);
        }
    }


    useEffect( async () => {
     try {
         const res = await axios.get("https://api.covid19api.com/summary");
         const _countries = await res.data.Countries;
         setCountries(_countries);

       } catch (e) {
         console.log(e);
       }
    }, []);


    const countryList = countries.length > 0 ? 
    countries.map((country, index)=> <ItemCountry key={index} country={country} / >) :  null

    return (
        <div className="CountriesContainer">
            
            <h1 className="TextHeadCountry">La liste des pays</h1>

            <div className="PanelSearch">
                    <input  id="TextInput" 
                            type="text" 
                            placeholder="Entrer le nom d'un pays" 
                            onChange={ searchCountry }/>
            </div>

            <div className="PanelHeading">
            <div className="TitleItems">
                <span>Pays</span>
                <span>Cas confirmés</span>
                <span>Guéris</span>
                <span>Sous-traitement</span>
                <span>Nombre de décès</span>
            </div></div>

            <div className="CountryList">
                {countryList}
            </div>

        </div>
    )
};

export default Countries;
