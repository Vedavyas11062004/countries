import Cards from "./components/Cards";
import "./App.css";

function Api({ data, totalData, region, result, serchVal }) {
  return (
    <div className="grid__conatiner">
      {data.map((info, index) => {
        return (
          <Cards
            key={index}
            name={info.name.common}
            img={info.flags.svg}
            population={info.population}
            region={info.region}
            capital={info.capital}
          />
        );
      })}
    </div>
  );
}

export default Api;
