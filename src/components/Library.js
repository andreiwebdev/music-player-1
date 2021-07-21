
import React from 'react';
// Import Components
import LibrarySong from './LibrarySong';
// Import Styles
import { LibraryContainer } from '../styles/items/_library';

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus }) => {
  return(
    <LibraryContainer className={ libraryStatus ? 'active-library' : '' } >
      <h2>Library</h2>
      <div>
        { songs.map( song => 
          <LibrarySong
            songs={ songs }
            setCurrentSong={ setCurrentSong } 
            song={ song }
            id={ song.id } 
            key={ song.id }
            audioRef={ audioRef }
            isPlaying={ isPlaying }
            setSongs={ setSongs }
          /> 
        )}
      </div>
    </LibraryContainer>
  );
};

export default Library;