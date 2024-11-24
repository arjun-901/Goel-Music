import { useContext } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Player from './component/Player';
import Display from './component/Display';
// import PlayerContextProvide from './context/PlayerContext';
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { AudioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player />
        {/* Corrected the typo in the tag name */}
        <audio ref={AudioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
}

export default App;

