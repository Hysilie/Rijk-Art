import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
