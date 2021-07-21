
import React from 'react';
// Import styles
import { SongContainer } from '../styles/items/_song';

const Song = ({ currentSong }) => {
  return(
    <SongContainer className="song-container">

      <img src={ currentSong.cover } alt="Current Song Album Cover" />
      <h2>{ currentSong.name }</h2>
      <h3>{ currentSong.artist }</h3>

    </SongContainer>
  );
}

export default Song;