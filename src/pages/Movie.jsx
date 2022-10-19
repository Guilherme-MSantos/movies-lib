import React, { useEffect, useState } from "react";
import {
  BsFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2,
} from "react-icons/bs";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import MovieCard from "../components/MovieCard";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  });
  return (
    <div>
      <Navbar />
      <div className="movie-page">
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>

            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              {/* {movie.budget === 0 && "Não divulgado"} */}
              <p>{formatCurrency(movie.budget)}</p>
            </div>

            <div className="info">
              <h3>
                <BsGraphUp /> Retorno
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime}</p>
            </div>

            <div className="info description">
              <h3>
                <BsFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movie;
