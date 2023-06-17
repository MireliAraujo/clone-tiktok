import React, { useEffect, useState } from 'react';
import './App.css';
import db from "./config/firebase"
import Video from "./pages/Video" 
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapShot = await getDocs(videosCollection);
    const videosList = videosSnapShot.docs.map(doc => doc.data())
    setVideos(videosList)

  }


   useEffect(()=>{
    getVideos();
   }, []);
  return (
    <div className="App">
      <div className="app__videos">
        
        { video.map((item) =>{
          return(
              <Video 
                likes={item.likes}
                mensagens={item.mensagens}
                shares={item.share}
                name={item.nome}
                description={item.description}
                music={item.music}
                url={item.url}
              />
            )
        }) }
        
      </div>
    </div>
  );
}

export default App;
