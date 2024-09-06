import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoContainer = ({ movie }) => {
  const trailerId = useSelector(store => store.movie?.trailerVideo);
  useMovieTrailer(movie.id)
  if(!trailerId) return;

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist="+ trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
