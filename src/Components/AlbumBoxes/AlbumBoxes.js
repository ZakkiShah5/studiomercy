import React, { useRef, useState } from 'react'
import './AlbumBoxes.css'
import album1 from '../../Assets/albums/a0169049054_2.jpg'
import album2 from '../../Assets/albums/a1044223294_2.jpg'
import album3 from '../../Assets/albums/a1264983291_2.jpg'
import album4 from '../../Assets/albums/a1695987948_2.jpg'
import album5 from '../../Assets/albums/a2040795199_2.jpg'
import album6 from '../../Assets/albums/a2095466355_2.jpg'
import album7 from '../../Assets/albums/a3425592352_2.jpg'
import album8 from '../../Assets/albums/a3439793829_2.jpg'
import album9 from '../../Assets/albums/glassSm.png'
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import { BiSolidSkipPreviousCircle, BiSolidSkipNextCircle } from 'react-icons/bi'
import m1 from '../../Assets/music/badluck.mp3'
import m2 from '../../Assets/music/reef.mp3'
import m3 from '../../Assets/music/samurai.mp3'
import m4 from '../../Assets/music/hstrings2.flac'
import m5 from '../../Assets/music/call.mp3'
import m6 from '../../Assets/music/ghost.wav'
import m7 from '../../Assets/music/hwave.mp3'
import m8 from '../../Assets/music/glass.wav'



const AlbumBoxes = () => {

    const [song] = useState([
        {
            title: 'Bad Luck',
            src: m1,
        },
        {
            title: 'Reefers',
            src: m2,
        },
        {
            title: 'Last Samurai',
            src: m3,
        },
        {
            title: 'Heat Strings Vol.1',
            src: m7,
        },
        {
            title: 'Call My Name',
            src: m5,
        },
        {
            title: 'Heart Strings Vol.2',
            src: m4,
        },
        {
            title: 'Ghost Stories',
            src: m6,
        },
        {
            title: 'Glass introvert',
            src: m8,
        }
    ]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(song[0]);
    const [loaded, setLoaded] = useState(false);

    const clickRef = useRef();
    const audioElement = useRef();
    const playPause = () => {
        if (loaded) {
            if (isPlaying) {
                audioElement.current.pause();
            }
            else {
                audioElement.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    }
    const canPlay = () => {
        setLoaded(true);
    }
    const handlePrev = ()=>{
        const index = song.findIndex(x=>x.title === currentSong.title);
        if(index===0){
           setCurrentSong(song[song.length - 1]);
        }
        else{
            setCurrentSong(song[index-1]);
        }
        audioElement.current.currentTime = 0;
        setIsPlaying(false);
    }
    const handleNext = ()=>{
        const index = song.findIndex(x=>x.title === currentSong.title);
        if(index=== song.length - 1){
           setCurrentSong(song[0]);
           audioElement.current.play();
        }
        else{
            setCurrentSong(song[index+1]);
            audioElement.current.play();
        }
        setIsPlaying(false);
        
        console.log("Current Time is " , audioElement.current.currentTime)
    }
    
    const onPlaying = () => {
        const duration = audioElement.current.duration;
        const ct = audioElement.current.currentTime;
        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });
    }
    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divProgress = offset / width * 100;
        audioElement.current.currentTime = divProgress/100*currentSong.length;
    }
    const playfirst=()=>{
        setCurrentSong(song[0]);
        audioElement.current.play() 
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playsecond=()=>{
        setCurrentSong(song[1]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playthird=()=>{
        setCurrentSong(song[2]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playfourth=()=>{
        setCurrentSong(song[3]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playfifth=()=>{
        setCurrentSong(song[4]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playsixth=()=>{
        setCurrentSong(song[0]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playseventh=()=>{
        setCurrentSong(song[5]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    
    const playlast=()=>{
        setCurrentSong(song[6]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }
    const playend=()=>{
        setCurrentSong(song[7]);
        audioElement.current.play();
        audioElement.current.currentTime = 0;
        setIsPlaying(true);
    }

    return (
        <>
            {<span>
                <audio src={currentSong.src} ref={audioElement} onCanPlayThrough={canPlay} onTimeUpdate={onPlaying} />
            </span>}
            <div className='AlbumBox container'>
                
                <div className="Box-1">
                    <div className="image">
                        <img src={album1} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playfirst} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album2} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playsecond} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>
                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album3} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playthird} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album4} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playfourth} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album5} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playfifth} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album6} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playsixth} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album7} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playseventh} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album8} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon'onClick={playlast} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
                <div className="Box-1">
                    <div className="image">
                        <img src={album9} alt="Album-1" />
                        <div className="overlay">
                            <BsFillPlayCircleFill className='playIcon' onClick={playend} />
                        </div>
                    </div>
                    <div className='border-btn'>
                        <button>Listen On Youtube</button>
                    </div>

                </div>
            </div>
            <div className="bigPlayer">
                <div className='seekBack' onClick={checkWidth} ref={clickRef}>
                    <div className="seekBar" style={{ width: `${currentSong.progress + "%"}` }}></div>
                </div>
                <div className="songTitle">
                    {/* {song.map((currentSong, index) => (<h3 key={index}> <span>Now Playing: </span> {currentSong.title}</h3>))} */}
                    <h3><span>Now Playing:  </span>{" " +currentSong.title}</h3>
                </div>
                <div className="player-conatainer">

                    <div className="prev">
                        <BiSolidSkipPreviousCircle className='nexprev' onClick={handlePrev} />
                    </div>
                    <div className="Play-icon">
                        {isPlaying ? <BsFillPauseCircleFill className='icon-play' onClick={playPause} /> : <BsFillPlayCircleFill className='icon-play' onClick={playPause} />}
                    </div>
                    <div className="next">
                        <BiSolidSkipNextCircle className='nexprev' onClick={handleNext}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumBoxes