const intialStat = {
  region: "initial",
  searchVal: "",
};
const reducers = (prevState = intialStat, action) => {
  switch (action.type) {
    case "setRegion":
      return {
        ...prevState,
        region: action.value,
      };
    case "setSearch":
      return {
        ...prevState,
        searchVal: action.value,
      };
    default:
      return { ...prevState };
  }
};

export const intialState = intialStat;
export const reducer = reducers;
