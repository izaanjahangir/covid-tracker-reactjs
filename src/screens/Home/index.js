import { useState, useEffect } from "react";

import api from "../../utils/api";
import Loading from "../../components/Loading";
import StatsOverview from "../../components/StatsOverview";
import Background from "../../components/Background";
import LineGraph from "../../components/LineGraph";
import CountryItem from "../../components/CountryItem";
import "./style.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [globalData, setGlobalData] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
  });

  useEffect(() => {
    fetchGlobal();
  }, []);

  const fetchGlobal = async () => {
    try {
      setLoading(true);
      const response = await api.getGlobal();

      setGlobalData(response.result);
    } catch (e) {
      alert(e.message);
    }

    setLoading(false);
  };

  return (
    <Background>
      <div id="main-container" className="mx-auto container h-full">
        <div className="mx-auto max-w-5xl">
          <StatsOverview data={globalData} />
          <div className="mt-2 flex flex-col mx-4 sm:mx-0 md:flex-row">
            <div className="line-graph-main-container mr-2">
              <LineGraph />
            </div>
            <div className="select-location-main-container mt-2 md:mt-0">
              <CountryItem className="mt-0" />
              <CountryItem active={true} />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem />
              <CountryItem className="mb-0" />
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </Background>
  );
}

export default Home;
