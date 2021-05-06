import globalHelpers from "./globalHelpers";

const api = {};
const BASE_URL = "https://covidapi.info/api/v1";

api.getGlobal = () => {
  const options = {
    method: "GET",
  };
  const url = BASE_URL + "/global";

  return globalHelpers.fetchApi(url, options);
};

api.getCurrentCountForCountries = () => {
  const options = {
    method: "GET",
  };
  const url = BASE_URL + "/global/latest";

  return globalHelpers.fetchApi(url, options);
};

export default api;
