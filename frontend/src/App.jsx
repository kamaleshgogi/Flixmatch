import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import { GenreProvider } from "./contexts/GenreContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <GenreProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </GenreProvider>
    </MovieProvider>
  );
}

export default App;
