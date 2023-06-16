import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from './components/sidebar/VideoSidebar';
import "./video.css";

function video({likes, mensagens, shares, name, description, music, url}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const videoRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes}
        mensagens={mensagens}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default video;
