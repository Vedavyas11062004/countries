import React from "react";
import Api from "./Api.js";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Searchbar from "./components/Searchbar.js";
import { intialState, reducer} from "./Reducer";
export const context = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [reduce, dispatch] = useReducer(reducer, intialState);
  // const [reduce2, dispatch2] = useReducer(reducer2, intialState2);
  // console.log(reduce);
  // console.log(reduce2);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);
  console.log(data);
  const result = data.filter((item) => {
    return item.name.common.toLowerCase().includes(reduce.searchVal);
  });
  var filter = result;
  if (reduce.region !== "intial") {
    filter = result.filter((a) => {
      return a.region === reduce.region;
    });
  }
  console.log(filter);

  return (
    <div className="App">
      <context.Provider
        value={{
          setState: dispatch,
        }}
      >
        <Navbar />
        <Searchbar />
        <Api
          data={filter}
          totalData={data}
          region={reduce.region}
          serchVal={reduce.searchVal}
        ></Api>
      </context.Provider>
    </div>
  );
}

export default App;
