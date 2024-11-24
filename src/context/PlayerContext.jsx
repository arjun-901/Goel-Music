import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvide = (props) => {
  const AudioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    AudioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    AudioRef.current.pause();
    setPlayStatus(false);
  };

  const PlayWithId = async (id) => {
    if (id >= 0 && id < songsData.length) {
      await setTrack(songsData[id]);
      AudioRef.current.play();
      setPlayStatus(true);
    }
  };

  const Previous = async () => {
    if (track.id > 0) {
      const newId = track.id - 1;
      await setTrack(songsData[newId]);
      AudioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      const newId = track.id + 1;
      await setTrack(songsData[newId]);
      AudioRef.current.play();
      setPlayStatus(true);
    }
  };
   
  const seeksong=async(e)=>{
    AudioRef.current.currentTime=((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*AudioRef.current.duration)


  }

  useEffect(() => {
    const audio = AudioRef.current;

    const updateProgress = () => {
      if (audio) {
        const currentTime = audio.currentTime || 0;
        const duration = audio.duration || 0;

        seekBar.current.style.width = `${(currentTime / duration) * 100}%`;
        setTime({
          currentTime: {
            second: Math.floor(currentTime % 60),
            minute: Math.floor(currentTime / 60),
          },
          totalTime: {
            second: Math.floor(duration % 60),
            minute: Math.floor(duration / 60),
          },
        });
      }
    };

    if (audio) {
      audio.ontimeupdate = updateProgress;
    }

    return () => {
      if (audio) {
        audio.ontimeupdate = null;
      }
    };
  }, []);

  const ContextValue = {
    AudioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    PlayWithId,
    Previous,
    next,
    seeksong
  };

  return (
    <PlayerContext.Provider value={ContextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvide;
