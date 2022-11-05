import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen bg-amber-500 flex flex-col">
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
