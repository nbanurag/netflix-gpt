import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () =>{
 const dispatch = useDispatch();

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

    fetch(url, TMDB_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addNowPlayingMovies(json.results)))
      .catch((err) => console.error(err));
  }, [dispatch]);

}

export default useNowPlayingMovies;
