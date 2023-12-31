import { useState } from "react";
import {useNavigate} from "react-router"
import styles from "./Search.module.css";
import { FaSearch} from 'react-icons/fa';

function Search() {
  const[searchText, setSearchText]=useState("");
  const navigate= useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/?search=" + searchText)
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar pelicula"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            navigate("/?search=" + value)
          }}
        />
        <button
          className={styles.searchButton}
          type="submit"
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}

export default Search
