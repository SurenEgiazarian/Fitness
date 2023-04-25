const dbDataHandler = ({ response, ref }) => {
  const rawData = response.val();
  // const keys = Object.keys(rawData);
  // const data = keys.length > 1 ? rawData : rawData[keys[0]];
  return { data: rawData, ref };
};

const errorDataHandler = (data) => {
  const error = data.code;
  return {
    error,
    // data
  };
};

export { errorDataHandler, dbDataHandler };
