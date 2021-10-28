import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

import ReactPaginate from "react-paginate";

import Header from "./../components/Single/Header";
import Loader from "./../components/Loader";

const SingleCoutryStats = () => {
    
    const POST_PER_PAGE = 20;
    let { name, code } = useParams();    
    const [datasCountry, setDatasCountry] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [totalPage, setTotalPage] =  useState(0);
    const [changed, setChanged] = useState(false);
    const [start, setStart] = useState(0)

    const handleClickPagination = async (data) => {
        let currentPage = data.selected;
    };

    useEffect( async () => {
        try{ 
            const res = await axios.get(`https://api.covid19api.com/dayone/country/${name}`);
            const datas = await res.data;
            await setDatasCountry(datas);
            setChanged(true)
        }catch (e) {
            console.log(e);
        }

        setCurrentItems(datasCountry.slice(start, start + POST_PER_PAGE))

        console.log(currentItems)

        setTotalPage(Math.ceil(datasCountry.length / POST_PER_PAGE));  

    },[ start,changed]);

    const LoaderCountryDatas = () => {
        return (
            <Loader />
        )        
    }

    const checkTotalPage = (datasCountry.length > 0 ) ? (<ReactPaginate
            breakLabel="..." nextLabel="Suivant"
            previousLabel="Precedent" onPageChange={handleClickPagination}
            pageRangeDisplayed={3} pageCount={ totalPage }
            nextLinkClassName="nextLink" previousLinkClassName="previousLink"
            activeLinkClassName="active"
        />) : "Chargement en cours!";

    const StatPie = ({confirmed,recovered,active,death}) => {
        return(
            <Pie 
              data={{
                labels:["Confirmé(s)","Guéri(s)","Sous-traitememt(s)","Décèdé(s)"],
                datasets:[{
                    data: [confirmed,recovered,active,death],
                    backgroundColor: ['#316B83','#49FF00','#FBFF00','#FF0000'],
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
        return (
            <div className="PageSingleCountry">
                <Header countryName={name} countryCode={code}/>
                <div className="containerCountryStats">

                    <div className="Informations">
                        <p> <span className="infoTitle">Date du premier cas enregistré(s):</span> <span className="infoValue">{new Date(datasCountry[0].Date).toLocaleDateString()}</span></p>
                        <p> <span className="infoTitle">Nombre de cas confirmé(s):</span> <span className="infoValue">{datasCountry[datasCountry.length - 1].Confirmed}</span></p>
                        <p> <span className="infoTitle">Nombre de morts depuis le début de la pandémie:</span> <span className="infoValue">{datasCountry[datasCountry.length - 1].Deaths}</span></p>
                        <p> <span className="infoTitle">Date de la dernière mise à jour:</span> <span className="infoValue">{new Date(datasCountry[datasCountry.length - 1].Date).toLocaleDateString()}</span></p>
                        {/* <p> <span className="infoTitle">Nombre de jours:</span> <span className="infoValue">{datasCountry.length}e jour(s)</span></p> */}
                        <p> <span className="infoTitle">Source:</span> <span className="infoValue"><a href="https://api.covid19api.com/summary" target="_blank">Covid19api</a></span></p>
                    </div>
                   
                    <div className="gridItems">

                         {currentItems.map((item) => 
                            <div className="gridItem" key={item.ID}>
                                
                                <StatPie  key={item.ID}   confirmed={item.Confirmed} 
                                            active={item.Active}
                                            death={item.Deaths}
                                            recovered={item.Recovered}/>
                                <h3 className="byDate">{new Date(item.Date).toLocaleDateString()}</h3>
                            </div>
                        )}
                    </div>

                    <div className="Pagination">
                        { checkTotalPage }
                    </div> 

                               
            
                </div>
            </div>
        )
    }


    return ( currentItems.length === 0 ) ? <LoaderCountryDatas /> : <LoadedCountryDatas />
    
}

export default SingleCoutryStats
