import React, { createContext, useContext, useState, useEffect } from "react";
import { getGenres } from "../services/api";

const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getGenres();
      setGenres(genreData);
    };

    fetchGenres();
  }, []);

  return (
    <GenreContext.Provider value={genres}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenres = () => useContext(GenreContext);