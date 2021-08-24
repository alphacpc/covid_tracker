import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Header from "./../components/Single/Header";

const SingleCoutryStats = () => {
    
    let { name, code } = useParams();
    const [datasCountry, setDatasCountry] = useState([]);

    useEffect( async () => {

        try {
            
            const res = await axios.get(`https://api.covid19api.com/dayone/country/${name}`);
            const datas = await res.data;
            setDatasCountry(datas);

          } catch (e) {
            console.log(e);
          }
      }, []);


    const LoaderCountryDatas = () => {
        return (
            <div>
                <h1>Encours de chargement</h1>
            </div>
        )
    }

    const LoadedCountryDatas = () => {
        return (
            <div>
                <Header countryName={name} countryCode={code}/>
                <h1>Hello { name }</h1>
            </div>
        )
    }


    return ( datasCountry.length == 0) ? <LoaderCountryDatas /> : <LoadedCountryDatas />
    
}

export default SingleCoutryStats
