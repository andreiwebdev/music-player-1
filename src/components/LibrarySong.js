
import React from 'react';
//Import Styles
import { LibrarySongContainer, SongDescription } from '../styles/items/_library';
import { playAudio } from '../util';

const LibrarySong = ({ song, songs, setSongs, id, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong( song );
    audioRef.current.play();
    // add active state
    const newSongs = songs.map( song => {
      if( song.id === id ) {
        return {
          ...song,
          active: true,
        }
      } else {
        return {
          ...song,
          active: false,
        }
      }
    });
    setSongs( newSongs );
    // check if the song is playing
    playAudio( isPlaying, audioRef );
  };
  return(
    <LibrarySongContainer onClick={ songSelectHandler } className={ song.active ? `selected` : '' }>
      <img src={ song.cover } alt="Current Song Album Cover" />
      <SongDescription>
        <h3>{ song.name }</h3>
        <h4>{ song.artist }</h4>
      </SongDescription>
    </LibrarySongContainer>
  );
}

export default LibrarySong;