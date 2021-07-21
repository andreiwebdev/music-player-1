
import React from 'react';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
// Import Styles
import { NavContainer } from '../styles/items/_nav';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return(
    <NavContainer>
      <h1>Waves</h1>
      <button onClick={ () => setLibraryStatus( !libraryStatus ) } >
        Library
        <FontAwesomeIcon icon={ faMusic } />
      </button>
    </NavContainer>
  );  
}

export default Nav;