import { Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Models from './components/Models';
import { useRef } from 'react';

function App() {
  const domRef = useRef();

  return (
    <>
      <div ref={domRef}></div>
      <Canvas className="canvas">
        {/* <Perf position="top-left" /> */}
        <ambientLight intensity={1} />
        <ScrollControls
          pages={5} // Each page takes 100% of the height of the canvas
          distance={1} // A factor that increases scroll bar travel (default: 1)
          damping={20} // Friction, higher is faster (default: 4)
          horizontal={false} // Can also scroll horizontally (default: false)
          infinite={false} // Can also scroll infinitely (default: false)
        >
          <Scroll>
            <Models portal={domRef} />
          </Scroll>
          <Scroll html className="scroll-overlay">
            <section></section>
            <section></section>
            <section></section>
            <section></section>
          </Scroll>
        </ScrollControls>
        <Environment preset="dawn" />
      </Canvas>
    </>
  );
}

export default App;
