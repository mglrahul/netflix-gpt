import React from "react";

const VideoDetail = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-72 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/2 text-lg py-6">{overview}</p>
      <div className="">
        <button className="bg-white text-black rounded-lg p-3 px-10 hover:opacity-50">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-600 text-white rounded-lg p-3 px-10 hover:opacity-70 mx-2">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetail;