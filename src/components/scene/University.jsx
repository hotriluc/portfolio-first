import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
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

  const {
    buildingColor,
    buildingRoughness,
    buildingMetalness,
    dividerColor,
    dividerRoughness,
    dividerMetalness,
    columnsColor,
    columnsRoughness,
    columnsMetalness,
    buildingWindowColor,
    buildingWindowRoughness,
    buildingWindowMetalness,
  } = useControls('University', {
    buildingColor: '#820000',
    buildingRoughness: { min: 0, max: 1, step: 0.01, value: 0.22 },
    buildingMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
    dividerColor: '#211b1b',
    dividerRoughness: { min: 0, max: 1, step: 0.01, value: 0.33 },
    dividerMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    columnsColor: '#690f31',
    columnsRoughness: { min: 0, max: 1, step: 0.01, value: 0 },
    columnsMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    buildingWindowColor: '#FEBFC7',
    buildingWindowRoughness: { min: 0, max: 1, step: 0.01, value: 0.13 },
    buildingWindowMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
  });

  const {
    bodyColor,
    bodyRoughness,
    bodyMetalness,
    eyesColor,
    eyesRoughness,
    eyesMetalness,
    mouthColor,
    mouthRoughness,
    mouthMetalness,
  } = useControls('Bunny', {
    bodyColor: '#fcfcfc',
    bodyRoughness: { min: 0, max: 1, step: 0.01, value: 0.75 },
    bodyMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
    eyesColor: '#ff3d77',
    eyesRoughness: { min: 0, max: 1, step: 0.01, value: 0.37 },
    eyesMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
    mouthColor: '#413434',
    mouthRoughness: { min: 0, max: 1, step: 0.01, value: 0.6 },
    mouthMetalness: { min: 0, max: 1, step: 0.01, value: 0 },
  });

  const { snakeColor, snake1Color, snakeMetalness, snakeRoughness } =
    useControls('Snake', {
      snakeColor: '#4584b6',
      snake1Color: '#ffde57',
      snakeRoughness: { min: 0, max: 1, step: 0.01, value: 0.5 },
      snakeMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
    });

  const {
    guitarBodyColor,
    guitarBodyMetalness,
    guitarBodyRoughness,

    neckColor,
    neckRoughness,
    neckMetalness,

    togglerColor,
    togglerMetalness,
    togglerRoughness,
  } = useControls('Guitar', {
    guitarBodyColor: '#ffffff',
    guitarBodyRoughness: { min: 0, max: 1, step: 0.01, value: 0.1 },
    guitarBodyMetalness: { min: 0, max: 1, step: 0.01, value: 0.24 },

    neckColor: '#653600',
    neckRoughness: { min: 0, max: 1, step: 0.01, value: 0.41 },
    neckMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    togglerColor: '#ffdfdf',
    togglerRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    togglerMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
  });

  const {
    stairsColor,
    stairsMetalness,
    stairsRoughness,
    standsColor,
    standsMetalness,
    standsRoughness,

    landColor,
    landMetalness,
    landRoughness,

    arcColor,
    arcMetalness,
    arcRoughness,
  } = useControls('Scene', {
    stairsColor: '#ffc4c4',
    stairsRoughness: { min: 0, max: 1, step: 0.01, value: 0.69 },
    stairsMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    standsColor: '#ffebf3',
    standsRoughness: { min: 0, max: 1, step: 0.01, value: 0.33 },
    standsMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    landColor: '#ffc4c4',
    landRoughness: { min: 0, max: 1, step: 0.01, value: 0.69 },
    landMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    arcColor: '#ffebf3',
    arcRoughness: { min: 0, max: 1, step: 0.01, value: 0.5 },
    arcMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
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
          material-color={dividerColor}
          material-roughness={dividerRoughness}
          material-metalness={dividerMetalness}
        />

        <mesh
          name="FirstFloor"
          geometry={nodes.FirstFloor.geometry}
          material={materials.Building}
          position={[-41.91, 91.08, -1.25]}
          scale={[27.94, 14.69, 28.79]}
          material-color={buildingColor}
          material-roughness={buildingRoughness}
          material-metalness={buildingMetalness}
        >
          <mesh
            name="FirstFloorWindows"
            geometry={nodes.FirstFloorWindows.geometry}
            material={materials.BuildingWindow}
            material-color={buildingWindowColor}
            material-roughness={buildingWindowRoughness}
            material-metalness={buildingWindowMetalness}
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
        />
        <mesh
          name="Roof"
          geometry={nodes.Roof.geometry}
          material={materials.Divider}
          position={[-17.85, 182.52, -1.25]}
          scale={[27.94, 14.69, 28.79]}
          material-color={dividerColor}
          material-roughness={dividerRoughness}
          material-metalness={dividerMetalness}
        />
        <mesh
          name="Columns"
          geometry={nodes.Columns.geometry}
          material={materials.Columns}
          position={[26.32, 147.08, -1.25]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-3.83, -30.01, -3.83]}
          material-color={columnsColor}
          material-roughness={columnsRoughness}
          material-metalness={columnsMetalness}
        />
      </group>

      <group name="UniversityScene">
        <mesh
          name="Land"
          geometry={nodes.Land.geometry}
          material={materials.Land}
          position={[40.24, 33.01, -1.25]}
          scale={[73.56, 33.19, 126.2]}
          material-color={landColor}
          material-roughness={landRoughness}
          material-metalness={landMetalness}
        />
        <mesh
          name="Stairs"
          geometry={nodes.Stairs.geometry}
          material={materials.Stairs}
          position={[54.57, 53.42, 27.17]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[17.99, 12.04, 12.04]}
          material-color={stairsColor}
          material-roughness={stairsRoughness}
          material-metalness={stairsMetalness}
        />
        <mesh
          name="Stairs001"
          geometry={nodes.Stairs001.geometry}
          material={materials.Stairs}
          position={[111.05, 40.53, -65.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[17.99, 8.18, 12.04]}
        />
        <mesh
          name="Stairs002"
          geometry={nodes.Stairs002.geometry}
          material={materials.Stairs}
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
          material-color={arcColor}
          material-roughness={arcRoughness}
          material-metalness={arcMetalness}
        />

        <mesh
          name="Stand"
          geometry={nodes.Stand.geometry}
          material={materials.Stand}
          position={[74.51, 56.8, 85.02]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={11.08}
          material-color={standsColor}
          material-roughness={standsRoughness}
          material-metalness={standsMetalness}
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
        material-color={bodyColor}
        material-roughness={bodyRoughness}
        material-metalness={bodyMetalness}
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
          material-color={eyesColor}
          material-roughness={eyesRoughness}
          material-metalness={eyesMetalness}
        />
        <mesh
          name="Mouth"
          geometry={nodes.Mouth.geometry}
          material={materials.BunnyMouth}
          position={[0.24, -0.22, 0.02]}
          rotation={[-0.17, 0.26, 1.73]}
          scale={[0.19, 0.21, 0.19]}
          material-color={mouthColor}
          material-roughness={mouthRoughness}
          material-metalness={mouthMetalness}
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
          material-color={snake1Color}
          material-roughness={snakeRoughness}
          material-metalness={snakeMetalness}
        >
          <mesh
            name="Snake"
            geometry={nodes.Snake.geometry}
            material={materials.Snake}
            material-color={snakeColor}
            material-roughness={snakeRoughness}
            material-metalness={snakeMetalness}
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
          material-color={guitarBodyColor}
          material-roughness={guitarBodyRoughness}
          material-metalness={guitarBodyMetalness}
        >
          <mesh
            name="Bridge"
            geometry={nodes.Bridge.geometry}
            material={materials.GuitarAccessories}
            position={[-0.81, 0.04, -0.15]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.07, 0.04, 0.04]}
          />
          <mesh
            name="Cube006_1"
            geometry={nodes.Cube006_1.geometry}
            material={materials.GuitarAccessories}
            position={[-0.27, 0.05, -0.14]}
            rotation={[0, 0, -1.58]}
            scale={[0.07, 0.08, 0.02]}
          />
          <mesh
            name="Neck"
            geometry={nodes.Neck.geometry}
            material={materials.Neck}
            position={[2.01, 0.02, 0.08]}
            rotation={[-1.57, 0.01, -0.01]}
            scale={[0.27, 0.15, 0.27]}
            material-color={neckColor}
            material-roughness={neckRoughness}
            material-metalness={neckMetalness}
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
            material-color={togglerColor}
            material-roughness={togglerRoughness}
            material-metalness={togglerMetalness}
          />
        </mesh>
      </group>
    </>
  );
};

export default University;
