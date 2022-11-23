import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [resultsSearch, setResultsSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const API_URL = "https://www.rijksmuseum.nl/api/en";
  const API_KEY = "puw2AEY6";

  const getResult = () => {
    fetch(`${API_URL}/collection?key=${API_KEY}&q=${searchValue}&ps=14&p=1`)
      .then((response) => response.json())
      .then((result) => {
        setResultsSearch(result.artObjects);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getResult();
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className={`h-screen bg-amber-500 flex flex-col `}>
        <NavigationBar
          resultsSearch={resultsSearch}
          getResult={getResult}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </Router>
  );
}

export default App;
