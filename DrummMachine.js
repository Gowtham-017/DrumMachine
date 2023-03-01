import React, { useState, useEffect } from 'react';
import './DrummMachine.css'
const sounds = {
  A: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
  B: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
  C: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
  D: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
  E: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
  F: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')
  // add more sounds here
};

const DrumPad = ({ sound, currentSound, setCurrentSound }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setCurrentSound(sound);
    sounds[sound].currentTime = 0;
    sounds[sound].play();
  };

  const handleKeyDown = e => {
    if (e.key.toUpperCase() === sound.toUpperCase()) {
      setCurrentSound(sound);
      setIsActive(true);
      sounds[sound].currentTime = 0;
      sounds[sound].play();
    }
  };

  const handleKeyUp = e => {
    if (e.key.toUpperCase() === sound.toUpperCase()) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [sound]);

  return (
    <button
      className={`drum-pad ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {sound}
    </button>
  );
};

const DrummMachine = () => {
  const [currentSound, setCurrentSound] = useState(null);

  return (

   


    <div className="drum-machine">
       <div className='header'><h1>Drum Machine</h1></div>
      <div className="drum-pads">
        <DrumPad
          sound="A"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad 
          sound="B"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          sound="C"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          sound="D"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          sound="E"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          sound="F"
          currentSound={currentSound}
          setCurrentSound={setCurrentSound}
        />
        {/* add more drum pads here */}
      </div><br /><br />
      <div className="display">{currentSound}</div>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
            <div className='conclu'>Feel the beat</div>
    </div>
  );
};

export default DrummMachine;


// import React, { useState } from 'react';
// import './DrummMachine.css';

// const DrummMachine = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handleStop = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <div className="drum-machine">
//       <div className="drum-pad" onClick={handlePlay} onMouseUp={handleStop} onMouseLeave={handleStop}>
//         Kick
//       </div>
//       <div className="drum-pad" onClick={handlePlay} onMouseUp={handleStop} onMouseLeave={handleStop}>
//         Snare
//       </div>
//       <div className="drum-pad" onClick={handlePlay} onMouseUp={handleStop} onMouseLeave={handleStop}>
//         Hi-hat
//       </div>
//     </div>
//   );
// };

// export default DrummMachine;
