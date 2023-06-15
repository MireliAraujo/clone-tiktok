import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { MusicNote } from '@mui/icons-material';

function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@Mirelly22</h3>
            <p>Descrição do vídeo</p>
            <div className='videoFooter__music'>
                <MusicNoteIcon className="videoFooter__icon"/>
                <div className='videoFooterMusic__text'>
                    <p>Título da música</p>
                </div>
                
            </div>
            
        </div>
        <img 
            className='videoFooter__record'
            alt='Imagem da um venil girando'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
        
        
        />
        
    </div>
  )
}

export default VideoFooter