import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const University = () => {
  const pythonRef = useRef();
  const guitarRef = useRef();
  const { nodes, materials } = useGLTF('/scene.glb');

  useFrame((state) => {
    const et = state.clock.elapsedTime;

    if (pythonRef.current) {
      pythonRef.current.position.y = Math.sin(et + 1 * 3000) * 1;
      pythonRef.current.children[0].rotation.z = Math.sin(Math.PI) + et / 2;
    }

    if (guitarRef.current) {
      guitarRef.current.position.y = Math.sin(et + 2 * 3000) * 1;
      guitarRef.current.children[0].rotation.y = Math.sin(Math.PI) + et / 2;
    }
  });

  return (
    <>
      <group name="University">
        <mesh
          name="Divider001"
          geometry={nodes.Divider001.geometry}
          material={materials.Divider}
          position={[-41.91, 42.77, -1.25]}
          scale={[27.94, 14.69, 28.79]}
          material-color={'#211b1b'}
          material-roughness={0.33}
          material-metalness={1}
        />

        <mesh
          name="FirstFloor"
          geometry={nodes.FirstFloor.geometry}
          material={materials.Building}
          position={[-41.91, 91.08, -1.25]}
          scale={[27.94, 14.69, 28.79]}
          material-color={'#820000'}
          material-roughness={0.22}
          material-metalness={1}
        >
          <mesh
            name="FirstFloorWindows"
            geometry={nodes.FirstFloorWindows.geometry}
            material={materials.BuildingWindow}
            material-color={'#ffd1fe'}
            material-roughness={0.13}
            material-metalness={1}
          />
        </mesh>
        <mesh
          name="SecondFloor"
          geometry={nodes.SecondFloor.geometry}
          material={materials.Building}
          position={[-27.04, 147.07, -1.25]}
          scale={[27.94, 14.69, 28.79]}
        >
          <mesh
            name="SecondFloorWindows"
            geometry={nodes.SecondFloorWindows.geometry}
            material={materials.BuildingWindow}
          />
        </mesh>
        <mesh
          name="Divider"
          geometry={nodes.Divider.geometry}
          material={materials.Divider}
          position={[-41.91, 90.42, -1.25]}
          scale={[27.94, 14.69, 28.79]}
          material-color={'#211b1b'}
          material-roughness={0.33}
          material-metalness={1}
        />
        <mesh
          name="Roof"
          geometry={nodes.Roof.geometry}
          material={materials.Divider}
          position={[-17.85, 182.52, -1.25]}
          scale={[27.94, 14.69, 28.79]}
        />
        <mesh
          name="Columns"
          geometry={nodes.Columns.geometry}
          material={materials.Columns}
          position={[26.32, 147.08, -1.25]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-3.83, -30.01, -3.83]}
          material-color={'#690f31'}
          material-roughness={0}
          material-metalness={1}
        />
      </group>

      <group name="UniversityScene">
        <mesh
          name="Land"
          geometry={nodes.Land.geometry}
          material={materials.Land}
          position={[40.24, 33.01, -1.25]}
          scale={[73.56, 33.19, 126.2]}
          material-color={'#ffc4c4'}
          material-roughness={0.69}
          material-metalness={1}
        />
        <mesh
          name="Stairs"
          geometry={nodes.Stairs.geometry}
          material={materials.Land}
          position={[54.57, 53.42, 27.17]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[17.99, 12.04, 12.04]}
        />
        <mesh
          name="Stairs001"
          geometry={nodes.Stairs001.geometry}
          material={materials.Land}
          position={[111.05, 40.53, -65.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[17.99, 8.18, 12.04]}
        />
        <mesh
          name="Stairs002"
          geometry={nodes.Stairs002.geometry}
          material={materials.Land}
          position={[124.91, 28.14, 72.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[17.99, 12.04, 12.04]}
        />

        <mesh
          name="Arc"
          geometry={nodes.Arc.geometry}
          material={materials.Arc}
          position={[222.1, 64.3, 87.21]}
          scale={[51.06, 41.73, 29.81]}
          material-color={'#ffebf3'}
          material-roughness={0.5}
          material-metalness={1}
        />

        <mesh
          name="Stand"
          geometry={nodes.Stand.geometry}
          material={materials.Stand}
          position={[74.51, 56.8, 85.02]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={11.08}
          material-color={'#ffebf3'}
          material-roughness={0.33}
          material-metalness={1}
        />

        <mesh
          name="Stand001"
          geometry={nodes.Stand001.geometry}
          material={materials.Stand}
          position={[74.51, 56.7, -101.96]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={11.08}
        />

        <mesh
          name="Stand002"
          geometry={nodes.Stand002.geometry}
          material={materials.Stand}
          position={[132.69, 49.46, -26.56]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={11.08}
        />
      </group>

      <mesh
        name="Head"
        geometry={nodes.Head.geometry}
        material={materials.Bunny}
        position={[82.63, 91.55, -101.97]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[9.31, 10.72, 10.72]}
        material-color={'#fcfcfc'}
        material-roughness={0.75}
        material-metalness={1}
      >
        <mesh
          name="Bod"
          geometry={nodes.Bod.geometry}
          material={materials.Bunny}
          position={[1.41, 0.74, -0.08]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.85, 0.98, 0.85]}
        >
          <mesh
            name="Hands"
            geometry={nodes.Hands.geometry}
            material={materials.Bunny}
            position={[-0.04, 0.01, 0.94]}
            rotation={[-2.53, -0.88, -0.24]}
          />
          <mesh
            name="Tail"
            geometry={nodes.Tail.geometry}
            material={materials.Bunny}
            position={[0.88, -0.68, -0.02]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.3}
          />
        </mesh>
        <mesh
          name="Eyes"
          geometry={nodes.Eyes.geometry}
          material={materials.BunnyEyes}
          position={[0.2, -0.14, 0.45]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.13, 0.15, 0.13]}
          material-color={'#ff3d77'}
          material-roughness={0.37}
          material-metalness={1}
        />
        <mesh
          name="Mouth"
          geometry={nodes.Mouth.geometry}
          material={materials.BunnyMouth}
          position={[0.24, -0.22, 0.02]}
          rotation={[-0.17, 0.26, 1.73]}
          scale={[0.19, 0.21, 0.19]}
          material-color={'#413434'}
          material-roughness={0.6}
          material-metalness={1}
        />
      </mesh>

      <group ref={pythonRef}>
        <mesh
          name="Snake001"
          geometry={nodes.Snake001.geometry}
          material={materials['Snake.001']}
          position={[74.51, 85.46, 84.25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={3.51}
          material-color={'#ffde57'}
          material-roughness={0.5}
          material-metalness={1}
        >
          <mesh
            name="Snake"
            geometry={nodes.Snake.geometry}
            material={materials.Snake}
            material-color={'#4584b6'}
            material-roughness={0.5}
            material-metalness={1}
          />
        </mesh>
      </group>

      <group ref={guitarRef}>
        <mesh
          name="GuitarBody"
          geometry={nodes.GuitarBody.geometry}
          material={materials.GuitarBody}
          position={[131.27, 73.79, -25.17]}
          rotation={[0.2, -0.5, 1.58]}
          scale={[5.45, 5.45, 9.02]}
          material-color={'#fafafa'}
          material-roughness={0.1}
          material-metalness={0.24}
        >
          <mesh
            name="Bridge"
            geometry={nodes.Bridge.geometry}
            material={materials.GuitarAccessories}
            position={[-0.81, 0.04, -0.15]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.07, 0.04, 0.04]}
            material-color={'#febfc7'}
            material-roughness={0.14}
            material-metalness={1}
          />
          {/* <mesh
            name="Cube006_1"
            geometry={nodes.Cube006_1.geometry}
            material={materials.GuitarAccessories}
            position={[-0.27, 0.05, -0.14]}
            rotation={[0, 0, -1.58]}
            scale={[0.07, 0.08, 0.02]}
          /> */}
          <mesh
            name="Neck"
            geometry={nodes.Neck.geometry}
            material={materials.Neck}
            position={[2.01, 0.02, 0.08]}
            rotation={[-1.57, 0.01, -0.01]}
            scale={[0.27, 0.15, 0.27]}
            material-color={'#653600'}
            material-roughness={0.41}
            material-metalness={1}
          >
            {/* <mesh
                name="Fret"
                geometry={nodes.Fret.geometry}
                material={materials.Fret}
                position={[0, 0.11, 0]}
                material-color={fretColor}
                material-roughness={fretRoughness}
                material-metalness={fretMetalness}
              /> */}
            <mesh
              name="Lockers"
              geometry={nodes.Lockers.geometry}
              material={materials.GuitarAccessories}
              position={[20.91, -0.29, 0.84]}
              rotation={[1.6, -0.33, -1.51]}
              scale={[0.24, 0.36, 0.15]}
            />
            <mesh
              name="Tuning_Posts"
              geometry={nodes.Tuning_Posts.geometry}
              material={materials.GuitarAccessories}
              position={[19.85, 1.26, 0]}
              rotation={[-1.53, -1.17, -1.49]}
              scale={[0.19, 0.21, 0.19]}
            />
          </mesh>
          <mesh
            name="Pickers"
            geometry={nodes.Pickers.geometry}
            material={materials.GuitarAccessories}
            position={[0.69, 0.04, -0.12]}
            scale={[1, 1, 0.79]}
          />
          <mesh
            name="Regulators"
            geometry={nodes.Regulators.geometry}
            material={materials.GuitarAccessories}
            position={[-1.22, 0.8, -0.12]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.13, 0.06, 0.13]}
          />
          <mesh
            name="Toggler"
            geometry={nodes.Toggler.geometry}
            material={materials.GuitarAccessories}
            position={[1.53, -0.71, -0.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.13, 0.05, 0.13]}
          />
        </mesh>
      </group>
    </>
  );
};

export default University;
