import { useState } from "react";


interface VideoThumbnailProps {
  thumbnail: string; // URL of the thumbnail image
  videoUrl: string; // URL of the video (YouTube, Vimeo, etc.)
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ thumbnail, videoUrl }) => {

    const [isPlaying, setIsPlaying] = useState(false);
  
    const handleTogglePlay = () => {
      setIsPlaying((prev) => !prev);
    };
  

  return (
    <div className="relative w-48 h-48 rounded-lg motion-safe:hover:scale-110 flex flex-wrap flex-row-reverse justify-center items-center">
      {/* Thumbnail as background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <img src={thumbnail} alt="" className="h-48 w-48 object-cover"/></div>

      {/* Play Button Overlay */}
     {!isPlaying && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleTogglePlay}
        >
          <button className="text-white text-4xl font-bold">▶</button>
        </div>
      )}

      {/* Video Frame (hidden by default) */}
      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`${videoUrl}?autoplay=1&mute=1`} // Add autoplay parameter to start playback
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {/* Hidden overlay to stop video */}
      {isPlaying && (
        <div
          className="absolute inset-0 bg-transparent"
          onClick={handleTogglePlay}
        ></div>
      )}
    </div>
  );
};

export default VideoThumbnail;
