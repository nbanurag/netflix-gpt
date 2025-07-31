import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    fetch(url, TMDB_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addTopRatedMovies(json.results)))
      .catch((err) => console.error(err));
  }, [dispatch]);
};

export default useTopRatedMovies;
