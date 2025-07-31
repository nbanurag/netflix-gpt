import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
      <h1 className="!text-3xl py-4 text-white">{title}</h1>
      <div 
        className="flex overflow-x-scroll gap-4 pb-4 max-w-screen scrollbar-hide" 
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;