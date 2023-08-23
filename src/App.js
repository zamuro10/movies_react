
import {MovieDetails} from "./pages/MovieDetails";
import styles from "./App.module.css";
import { BrowserRouter , Route, Routes,Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          {" "}
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  ); 
}

export default App;
