import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Header />
      </Routes>
    </Router>
  );
}

export default App;
