const globalHelpers = {};

globalHelpers.fetchApi = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    return json;
  } catch (e) {
    throw e;
  }
};

export default globalHelpers;
