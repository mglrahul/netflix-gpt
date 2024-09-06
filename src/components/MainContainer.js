import React from 'react'
import VideoDetail from './VideoDetail'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const nowPlayingMovies = useSelector(store => store.movie?.nowPlayingMovies);
    
    if(!nowPlayingMovies) return;
    const mainMovie = nowPlayingMovies[0];
    const {title, overview} = mainMovie;


  return (
    <div>
        <VideoDetail title={title} overview={overview}/>
        <VideoContainer movie={mainMovie}/>
    </div>
  )
}

export default MainContainer

