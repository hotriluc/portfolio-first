import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Models from './components/scene/Models';
import { Suspense, useRef } from 'react';
// import CustomLoader from './components/ui/CustomLoader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Works from './components/sections/Works';
import Contacts from './components/sections/Contacts';
import { Perf } from 'r3f-perf';
import CustomLoader from './components/UI/CustomLoader';
import { useSelector } from 'react-redux';

function App() {
  const domRef = useRef();
  const { isLoaded } = useSelector((state) => state.ui);

  return (
    <>
      <div ref={domRef}></div>
      <CustomLoader text={'Welcome'} timeOut={1.2} />

      <Canvas className="canvas" dpr={[1, 2]}>
        <Perf position="top-left" />

        <ambientLight intensity={1} />

        <ScrollControls
          // style={{ zIndex: 1 }}
          pages={5} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={20} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
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
