import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
