import { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Canvas } from '@react-three/fiber';
import { Environment, Scroll, ScrollControls } from '@react-three/drei';

import Models from './components/scene/Models';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Works from './components/sections/Works';
import Contacts from './components/sections/Contacts';
import CustomLoader from './components/UI/CustomLoader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Noto Serif Display', serif;
      background-color: #101010;
      background: radial-gradient(
        circle at top left,
        #febfc7 0%,
        #d8a2c4 25%,
        #a08bc4 80%,
        #7d74a1 97%
      );
      /* background: radial-gradient(circle at bottom center, #212121 0%, #101010 80%); */
      color: #FCFBF4;

      overflow: hidden;
    }

    .scroll-overlay {
      width: 100vw;
      overflow: hidden;
      position: absolute;
      z-index: 1000;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h2 {
      font-size: 5.6rem;
    }

    section {
      height: 100vh;
    }

    button {
      font-family: inherit;
    }

    .activeItem {
      border: 0.4px solid royalblue;
      /* padding: 1px; */
      scale: 1.2;
      font-size: inherit;
      transition: scale 0.2s;
    }

    .imgHolder {
      width: 8px;
      height: 8px;
    }

    .imgHolder img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`;

function App() {
  const domRef = useRef();
  const { isLoaded } = useSelector((state) => state.ui);

  const lightTheme = {
    color: '#fbfbfb',
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <div ref={domRef}></div>
      <CustomLoader text={'Welcome'} timeOut={1.2} />

      <Canvas className="canvas" dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <ScrollControls
          // style={{ zIndex: 1 }}
          pages={5}
          distance={1}
          damping={20}
          horizontal={false}
          infinite={false}
        >
          <Scroll>
            <Suspense fallback={null}>
              <Models portal={domRef} />
              <Environment preset="dawn" />
            </Suspense>
          </Scroll>
          <Scroll html className="scroll-overlay">
            <Hero isLoaded={isLoaded} />
            <About />
            <Works />
            <Contacts />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </ThemeProvider>
  );
}

export default App;
