import React, {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import "./videoSidebar.css"

function VideoSidebar({likes, mensagens, shares}) {
    const [liked, setLiked] = useState(false)
    function handdleLike(){
        setLiked(!liked)
    }


  return (
    <div className='videoSidebar'>
        <div 
        className='videosSidebar__Options'
        onClick={handdleLike}
        >
            { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            
            <p>{ liked ? likes + 1 : likes}</p>
        </div>
        <div className='videosSidebar__Options'>
            <ChatIcon fontSize='large'/>
            <p>{mensagens}</p>
        </div>
        <div className='videosSidebar__Options'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar