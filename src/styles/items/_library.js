
import styled from "styled-components";

export const LibraryContainer = styled.div`
  background: white;
  box-shadow: 2px 2px 50px #999999;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  transform: translateX( -100% );
  transition: all 0.5s ease;
  opacity: 0;
  h2 {
    padding: 2rem;
  }
  @media screen and ( max-width: 768px ) {
    width: 100%;
  }
`

export const LibrarySongContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  transition: background 0.3s ease;
  img {
    width: 30%;
  }
  &:hover {
    background: #71b3dc96;
  } 
`

export const SongDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.7rem;
  h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.7rem;
  }
`