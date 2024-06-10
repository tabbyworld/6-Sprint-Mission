import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemPage from "./pages/Items";
import MainPage from "./pages/Main";
import BoardPage from "./pages/Boards";
import AddItemPage from "./pages/AddItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/boards" element={<BoardPage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
