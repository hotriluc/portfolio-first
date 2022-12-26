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

function App() {
  const domRef = useRef();

  return (
    <>
      <div ref={domRef}></div>

      {/* <CustomLoader /> */}
      <Canvas className="canvas" dpr={[1, 2]}>
        <Perf position="top-left" />

        <Suspense fallback={null}>
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
              <Models portal={domRef} />
              <Environment preset="dawn" />
            </Scroll>
            <Scroll html className="scroll-overlay">
              <Hero />
              <About />
              <Works />
              <Contacts />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
