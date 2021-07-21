
import styled from "styled-components";

export const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0rem 0rem 0rem;
`

export const TimeControl = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  input {
    width: 100%;
    padding: 1rem 0rem;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px; 
  }
  p {
    padding: 1rem;
  }
  .track {
    border-radius: 1rem;
    overflow: hidden;
    background: lightblue;
    width: 100%;
    height: 1rem;
    position: relative;
  }
  .animate-track {
    background: rgb( 204, 204, 204 );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX( 0% );
    pointer-events: none;
  }
  @media screen and ( max-width: 768px ) {
    width: 90%;
  }
`

export const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;
  svg {
    cursor: pointer;
  }
  @media screen and ( max-width: 768px ) {
    width: 60%;
  }
`