import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


import Header from "./../components/Single/Header";
import Loader from "./../components/Loader";

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
            <Loader />
        )
    }

    const StatPie = ({confirmed,recovered,active,death}) => {
        return(
            <Pie 
              data={{
                labels:["Confirmé(s)","Guéri(s)","Sous-traitememt(s)","Décèdé(s)"],
                datasets:[{
                    data: [confirmed,recovered,active,death],
                    backgroundColor: ['#FFC478','#16C79A','#FFF338','#FF2442'],
                    borderColor:'#fff',
                    borderWidth: 1
                }]
                
              }}

              options={{
                legend: false,
              }}/>
        );
    }
        

    const LoadedCountryDatas = () => {
        console.log(datasCountry);
        return (
            <div>
                <Header countryName={name} countryCode={code}/>
                <div className="containerCountryStats">

                    <div className="Informations">
                        <p> <span className="infoTitle">Date du premier cas enregistré(s):</span> <span className="infoValue">{new Date(datasCountry[0].Date).toLocaleDateString()}</span></p>
                        <p> <span className="infoTitle">Nombre de cas confirmé(s):</span> <span className="infoValue">{datasCountry[datasCountry.length - 1].Confirmed}</span></p>
                        <p> <span className="infoTitle">Nombre de morts depuis le début de la pandémie:</span> <span className="infoValue">{datasCountry[datasCountry.length - 1].Deaths}</span></p>
                        <p> <span className="infoTitle">Date de la dernière mise à jour:</span> <span className="infoValue">{new Date(datasCountry[datasCountry.length - 1].Date).toLocaleDateString()}</span></p>
                        <p> <span className="infoTitle">Nombre de jours:</span> <span className="infoValue">{datasCountry.length}e jour(s)</span></p>
                        <p> <span className="infoTitle">Source:</span> <span className="infoValue"><a href="https://api.covid19api.com/summary" target="_blank">Covid19api</a></span></p>
                    </div>

                    <div className="gridItems">

                         {datasCountry.map( (item) => 
                            <div className="gridItem">
                                
                                <StatPie    confirmed={item.Confirmed} 
                                            active={item.Active}
                                            death={item.Deaths}
                                            recovered={item.Recovered}/>
                                <h3 className="byDate">{new Date(item.Date).toLocaleDateString()}</h3>
                            </div>
                        )}
                    </div>                 
            
                </div>
            </div>
        )
    }


    return ( datasCountry.length == 0) ? <LoaderCountryDatas /> : <LoadedCountryDatas />
    
}

export default SingleCoutryStats
