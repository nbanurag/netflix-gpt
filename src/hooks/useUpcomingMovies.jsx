import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

    fetch(url, TMDB_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addUpcomingMovies(json.results)))
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default useUpcomingMovies;
