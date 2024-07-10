import React, { useState, useRef } from 'react'
import song from '../../Assets/music/backg.wav'
import './BgAudio.css'
import {GoUnmute} from 'react-icons/go'
import {BiSolidVolumeMute} from 'react-icons/bi'

const BgAudio = () => {
    const [isMuted, setisMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const toggleMute = () => {
        setisMuted((prevIsMuted) => !prevIsMuted)
        if (!isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
    }
    return (
        <div className='audioPlayer'>
            <audio ref={audioRef}  autoPlay loop muted={isMuted} src={song}>
            </audio>
            <button onClick={toggleMute}>{isMuted ?  <BiSolidVolumeMute className='player'/> : <GoUnmute className='player'/> }</button>
        </div>
    )
}

export default BgAudio