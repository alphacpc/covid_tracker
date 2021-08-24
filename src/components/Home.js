import { useState, useEffect } from "react";
import WorldStats from "./components/WordStats";
import Countries from "./components/Countries";
import Loader from "./components/Loader";
import ChatBot from "./components/ChatBot";
import axios from "axios";
import "./assets/css/App.css";

function App() {
  const [result, setResult] = useState({
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
    TotalActiveCase: 0,
  });

  const getData = async () => {
    try {
      const globalData = await axios.get("https://api.covid19api.com/summary");
      let corona = await globalData.data.Global;

      setResult({
        TotalConfirmed: corona.TotalConfirmed,
        TotalDeaths: corona.TotalDeaths,
        TotalRecovered: corona.TotalRecovered,
        TotalActiveCase:
          corona.TotalConfirmed - (corona.TotalRecovered + corona.TotalDeaths),
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Stats = Object.keys(result).map((key, index) => {
    return (
      <WorldStats
        key={index}
        about={key}
        percent={Math.round(result[key] * 100) / result["TotalConfirmed"]}
        total={result[key]}
      />
    );
  });

  const GlobalApp = () => <div className="App">
                            <ChatBot />

                            <div className="WordstatsContainer">
                              <h1 className="TitleApp">Statisques de la covid-19</h1>
                              <div className="WordItems">{Stats}</div>
                            </div>

                            <Countries />

                          </div>;
  

  if (result.TotalConfirmed == 0) {
    return <Loader />;
  } else {
    return <GlobalApp />;
  }
}

export default App;
