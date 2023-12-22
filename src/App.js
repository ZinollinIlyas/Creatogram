import './App.css';
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
      <img src="https://www.behance.net/gallery/186596719/Cultura-em-Evidencia-C-de-Cultura?tracking_source=search_projects&l=4" alt=""/>
    </div>
  );
}

export default App;
