import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios(
        // "www.themealdb.com/api/json/v1/1/search.php?f=c"
        // "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setData(response.data.categories);
      console.log(response.data.categories);
    };
    getData();
    //www.themealdb.com/api/json/v1/1/search.php?f=a
  }, []);
  // idCategory strCategoryThumb strCategory strCategoryDescription
  return (
    <div className="App">
      <h1 style={{ borderBottom: "1px solid black", padding: "10px" }}>
        Meal Suggestions
      </h1>
      {data
        ? data.map((item) => (
            <div className="card" key={item.idCategory}>
              <h2>{item.strCategory}</h2>
              <img
                src={item.strCategoryThumb}
                alt={item.strCategoryDescription.slice(0, 5)}
                width="150px"
              />
              <p>
                {item.strCategoryDescription.length > 50
                  ? `${item.strCategoryDescription.slice(0, 75)}...`
                  : item.strCategoryDescription}
                {""}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}
