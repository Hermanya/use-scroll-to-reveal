import React, {useRef} from 'react'

import useMyHook from 'use-scroll-to-reveal'

import styled, { keyframes, css } from 'styled-components';
import * as animations from 'react-animations';

const animation = keyframes`${animations.fadeIn}`;

const StyledSection = styled.section`
  height: 101vh;
  background: hsl(${({hue=0}) => hue}, 50%, 50%);
  ${({revealed}) => revealed && css`animation: 1s ${animation}`}
`;

const MySection = (props) => {
  const ref = useRef()
  const revealed = useMyHook(ref)
  return <StyledSection revealed={revealed} ref={ref} {...props}/>
}

const App = () => {
  return (
    <div>
      <MySection/>
      <MySection hue={120} />
      <MySection hue={240}/>
    </div>
  )
}
export default App