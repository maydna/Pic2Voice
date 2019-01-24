import React from 'react';
//without any state

const VoiceDisplay = ({imageURL, audioURL }) => {
    return (
      <div className='center ma'>
      <audio src={audioURL} controls autoPlay/>
      </div>
    );
}

export default VoiceDisplay;
