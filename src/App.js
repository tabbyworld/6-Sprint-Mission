import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemPage from "./pages/Items";
import MainPage from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
