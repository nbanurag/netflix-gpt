import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { GptSearchPage } from "./GptSearchPage";
import { useSelector } from "react-redux";
import { getGptSearchMode } from "../store/gptSlice";

export const Browse = () => {
  const showGptSearch = useSelector(getGptSearchMode);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};
