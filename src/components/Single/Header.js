import ReactFlag from 'react-country-flag';

const Header = ({countryName, countryCode}) => {
    return (
        <div className="WordstatsContainer">
            <h1 className="TitleApp">Statisques de la covid-19</h1>
            <h2 className="CountryNameFromSingle"> 
                <ReactFlag 
                    className="countryFlag" svg
                    countryCode={countryCode}
                    style={{ width: "40px", height: "40px", marginRight:'4px'}}/>
                {countryName}
            </h2>
        </div>
    )
}

export default Header;