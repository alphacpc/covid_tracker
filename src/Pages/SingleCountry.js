import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
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

    const StatPie = () => {
        return(
            <Pie 
              data={{
                labels:["Test1","Test2"],
                datasets:[{
                    data: [200,232],
                    backgroundColor: ['#f05','#1abc'],
                    borderColor:'#fff',
                    borderWidth: 1
                }]
              }}

              options={{
                legend:{display:false},
                title: {display: false,text: 'Title'},
                label:{display:false}
              }}/>
        );
    }
        

    const LoadedCountryDatas = () => {
        console.log(datasCountry);
        return (
            <div>
                <Header countryName={name} countryCode={code}/>
                <div className="containerCountryStats">
                    <div className="gridItems">
                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>

                        <div className="gridItem">
                            <StatPie />
                        </div>
                    </div>                 
            
                </div>
            </div>
        )
    }


    return ( datasCountry.length == 0) ? <LoaderCountryDatas /> : <LoadedCountryDatas />
    
}

export default SingleCoutryStats
