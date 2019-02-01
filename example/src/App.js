import React, {useRef} from 'react'

import useMyHook from 'use-scroll-to-reveal'

import styled, { keyframes, css } from 'styled-components';
import * as animations from 'react-animations';

const animation = keyframes`${animations.fadeIn}`;

const StyledSection = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 101vh;
  background: hsl(${({hue=0}) => hue}, 50%, 50%);
  ${({revealed}) => revealed && css`animation: 1s ${animation}`}
`;

const MySection = (props) => {
  const ref = useRef()
  const revealed = useMyHook(ref)
  return <StyledSection revealed={revealed} ref={ref} {...props}/>
}

const MyA = styled.a`
color: white;
margin: 0.5em;
`


const example = `
// example with styled-components and react-animations
const StyledSection = styled.section\`
  // ... your styles
  \${({revealed}) => revealed && css\`animation: 1s \${animation}\`}
\`;
const MySection = (props) => {
  const ref = useRef()
  const revealed = useMyHook(ref)
  return <StyledSection revealed={revealed} ref={ref} {...props}/>
}`

const App = () => {
  return (
    <div>
      <MySection>

        <pre><code>{`npm install use-scroll-to-reveal`}</code></pre>
        <pre><code>{`yarn add use-scroll-to-reveal`}</code></pre>


      </MySection>
      <MySection hue={120}>
        <pre><code>{example}</code></pre>
      </MySection>
      <MySection hue={240}>
        <MyA href="https://github.com/Hermanya/use-scroll-to-reveal">github</MyA>
        <MyA href="https://www.npmjs.com/package/use-scroll-to-reveal">npm</MyA>
      </MySection>
    </div>
  )
}
export default App