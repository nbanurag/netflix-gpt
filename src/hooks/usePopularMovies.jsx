import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    fetch(url, TMDB_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addPopularMovies(json.results)))
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default usePopularMovies;
