import { useEffect, useReducer } from "react";

import api from "../../utils/api";
import constants from "../../config/constants";
import StatsOverview from "../../components/StatsOverview";
import Background from "../../components/Background";
import LineGraph from "../../components/LineGraph";
import CountryItem from "../../components/CountryItem";
import "./style.css";
import Loading from "../../components/Loading";

const initialState = {
  global: {
    data: {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    loading: false,
  },
  countries: {
    loading: false,
    data: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GLOBAL_DATA_LOADING":
      return {
        ...state,
        global: { ...state.global, loading: action.payload },
      };
    case "SET_GLOBAL_DATA":
      return {
        ...state,
        global: { ...state.global, ...action.payload },
      };

    case "SET_COUNTRIES_LOADING":
      return {
        ...state,
        countries: { ...state.countries, loading: action.payload },
      };

    case "SET_COUNTRIES_DATA":
      return {
        ...state,
        countries: { ...state.countries, ...action.payload },
      };
    default:
      throw new Error();
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchGlobal();
    fetchAllCountriesCount();
  }, []);

  const fetchGlobal = async () => {
    try {
      dispatch({ type: "SET_GLOBAL_DATA_LOADING", payload: true });
      const response = await api.getGlobal();

      dispatch({ type: "SET_GLOBAL_DATA", payload: { data: response.result } });
    } catch (e) {
      alert(e.message);
    }

    dispatch({ type: "SET_GLOBAL_DATA_LOADING", payload: false });
  };

  const fetchAllCountriesCount = async () => {
    try {
      dispatch({ type: "SET_COUNTRIES_LOADING", payload: true });

      const response = await api.getCurrentCountForCountries();
      let data = response.result.reduce((acc, item) => {
        const name = Object.keys(item)[0];
        const foundCountry = constants.SUPPORTED_COUNTRIES.find(
          (item) => item.code == name
        );

        if (foundCountry) {
          const newData = {
            countryName: foundCountry.name,
            code: foundCountry.code,
            flag: foundCountry.flag,
            ...item[name],
          };

          acc = [...acc, newData];
        }

        return acc;
      }, []);

      data = data.sort((a, b) => b.confirmed - a.confirmed);

      dispatch({ type: "SET_COUNTRIES_DATA", payload: { data } });
    } catch (e) {
      alert(e.message);
    }

    dispatch({ type: "SET_COUNTRIES_LOADING", payload: false });
  };

  const getCountryItemClasses = (i, max) => {
    if (i === 0) return "mt-0";
    if (i === max - 1) return "mb-0";
    return "";
  };

  return (
    <Background>
      <div id="main-container" className="mx-auto container h-full">
        <div className="mx-auto max-w-5xl">
          <StatsOverview
            loading={state.global.loading}
            data={state.global.data}
          />
          <div className="mt-2 flex flex-col mx-4 sm:mx-0 md:flex-row">
            <div className="line-graph-main-container mr-2">
              <LineGraph />
            </div>
            <div className="select-location-main-container mt-2 md:mt-0">
              {state.countries.data.map((item, i) => (
                <CountryItem
                  key={item.code}
                  data={item}
                  className={getCountryItemClasses(
                    i,
                    state.countries.data.length
                  )}
                />
              ))}
              {state.countries.loading && (
                <div className="h-full flex justify-center">
                  <Loading />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Home;
