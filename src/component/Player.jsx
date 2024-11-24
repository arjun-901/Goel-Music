import React, { useContext } from 'react';
import { assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

export const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, Previous, next,seeksong } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Left Section: Song Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track?.image || ''} alt="Song Cover" />
        <div>
          <p>{track?.name || 'Unknown Song'}</p>
          <p>{track?.desc?.slice(0, 12) || 'No Description'}</p>
        </div>
      </div>

      {/* Center Section: Controls */}
      <div className="flex flex-col items-center gap-1 m-auto">
        {/* Control Buttons */}
        <div className="flex gap-4">
          {/* <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
          /> */}
          <img
            onClick={Previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
          />
          {/* <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          /> */}
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-5">
          <p>
            {time?.currentTime?.minute || '0'}:
            {time?.currentTime?.second || '00'}
          </p>
          <div
            ref={seekBg} onClick={seeksong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time?.totalTime?.minute || '0'}:
            {time?.totalTime?.second || '00'}
          </p>
        </div>
      </div>

      {/* Right Section: Additional Options */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        {/* <img className="w-4" src={assets.plays_icon} alt="Plays" /> */}
        {/* <img className="w-4" src={assets.mic_icon} alt="Mic" /> */}
        {/* <img className="w-4" src={assets.queue_icon} alt="Queue" /> */}
        {/* <img className="w-4" src={assets.speaker_icon} alt="Speaker" /> */}
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        {/* <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" /> */}
        {/* <img className="w-4" src={assets.zoom_icon} alt="Zoom" /> */}
      </div>
    </div>
  );
};

export default Player;

