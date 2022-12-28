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

function App() {
  const domRef = useRef();
  const { isLoaded } = useSelector((state) => state.ui);

  return (
    <>
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
    </>
  );
}

export default App;
