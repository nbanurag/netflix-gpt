import React from 'react'
import { VideoTitile } from './VideoTitile'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import { getNowPlayingMovies } from '../store/moviesSlice'

export const MainContainer = () => {
    const movies = useSelector(getNowPlayingMovies);

    if(!movies) return;
    const {original_title, overview, id} = movies[5];
    
  return (
    <div>
    <VideoTitile title={original_title} overview={overview}/>
    <VideoBackground movieId={id} />
    </div>
  )
}
