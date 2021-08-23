import CountUp from 'react-countup';

const ItemType = ({about,total, percent}) => {

    const labelType = () =>{
        if(about == 'TotalConfirmed'){
            return 'Nombre de cas confirmés';
        }
        else if(about == 'TotalRecovered'){
            return 'Nombre de guéris';
        }
        else if(about == 'TotalDeaths'){
            return 'Nombre de décès';
        }
        else if(about == 'TotalActiveCase'){
            return 'Cas sous-traitemet';
        }
    }

    return (

                <div className={`WordItem ${about}`}>
                    <h2>
                        <CountUp
                            start={0} end={percent}
                            duration={1} separator=","/>%
                    </h2>
                    <h3>
                        <CountUp
                            start={0} end={total}
                            duration={1} separator=","/>
                    </h3>
                    
                    <h4>{labelType()}</h4>
                </div>

  
    )
}

export default ItemType;
