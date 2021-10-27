import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ItemCountry from './ItemCountry';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);
    const [checkSearch, setCheckSearch] = useState(false);
    
    const searchCountry = (e) => {
        const value = e.target.value.toLowerCase();
        const countryDetails = countries;

        let FindByCountry = countryDetails.filter((country) => country.Country.toLowerCase().includes(value));

        if(FindByCountry.length > 0 || value.length > 0 ){
            setCheckSearch(true);
            setSearchedCountries(FindByCountry);
        }
        else if(value.length === 0){
            setCheckSearch(false)

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
    },[]);


    const myList = ( !checkSearch ) ? countries : searchedCountries;

    const countryList = myList.length > 0 ? 
    myList.map((country, index)=> <ItemCountry key={index} country={country} / >) :  null;

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
