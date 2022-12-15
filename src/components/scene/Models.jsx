import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useScroll,
  Html,
} from '@react-three/drei';

import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

export function Models(props) {
  // const stencil = useMask(1, true);

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
    bridgeColor,
    bridgeRoughness,
    bridgeMetalness,
    somethingColor,
    somethingRoughness,
    somethingMetalness,
    pickersColor,
    pickersRoughness,
    pickersMetalness,
    neckColor,
    neckRoughness,
    neckMetalness,

    tunersColor,
    tunersRoughness,
    tunersMetalness,

    togglerColor,
    togglerMetalness,
    togglerRoughness,
  } = useControls('Guitar', {
    guitarBodyColor: '#ffffff',
    guitarBodyRoughness: { min: 0, max: 1, step: 0.01, value: 0.1 },
    guitarBodyMetalness: { min: 0, max: 1, step: 0.01, value: 0.24 },

    bridgeColor: '#ffd700',
    bridgeRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    bridgeMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    somethingColor: '#ffd700',
    somethingRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    somethingMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    pickersColor: '#ffd700',
    pickersRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    pickersMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    neckColor: '#653600',
    neckRoughness: { min: 0, max: 1, step: 0.01, value: 0.41 },
    neckMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    fretColor: '#3c2005',
    fretRoughness: { min: 0, max: 1, step: 0.01, value: 1 },
    fretMetalness: { min: 0, max: 1, step: 0.01, value: 0 },

    tunersColor: '#ffd700',
    tunersRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    tunersMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

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
  const {
    trainColor,
    trainMetalness,
    trainRoughness,
    trainWindowColor,
    trainWindowMetalness,
    trainWindowRoughness,
    trainJointColor,
    trainJointMetalness,
    trainJointRoughness,
  } = useControls('Train', {
    trainColor: '#ffffff',
    trainRoughness: { min: 0, max: 1, step: 0.01, value: 0.15 },
    trainMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    trainWindowColor: '#d8a2c4',
    trainWindowRoughness: { min: 0, max: 1, step: 0.01, value: 0.13 },
    trainWindowMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    trainJointColor: '#141414',
    trainJointRoughness: { min: 0, max: 1, step: 0.01, value: 0.55 },
    trainJointMetalness: { min: 0, max: 1, step: 0.01, value: 0 },
  });

  const {
    computerColor,
    computerRoughness,
    screenTransmission,
    screenThickness,
    screenRoughness,
    screenClearcoat,
    screenClearcoatRoughness,
    screenIOR,

    accessoryColor,
    accessoryMetalness,
    accessoryRoughness,

    keyCapColor,
    keyCapRoughness,
  } = useControls('Computer', {
    computerColor: '#1a1a1a',
    computerRoughness: { min: 0, max: 1, step: 0.01, value: 0.12 },

    screenTransmission: { min: 0, max: 1, step: 0.01, value: 1 },
    screenThickness: { value: 0, min: 0, max: 20 },
    screenRoughness: { min: 0, max: 1, step: 0.01, value: 0 },
    screenClearcoat: { value: 1, min: 0, max: 1, step: 0 },
    screenClearcoatRoughness: { value: 0.2, min: 0, max: 1, step: 0 },
    screenIOR: { value: 1, min: 1, max: 2.3, step: 0.05 },

    y: { value: 0, min: -1, max: 2, step: 0.01 },

    accessoryColor: '#ffc4c4',
    accessoryRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    accessoryMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    keyCapColor: '#100b0b',
    keyCapRoughness: { min: 0, max: 1, step: 0.01, value: 0.62 },
  });

  const {
    phoneBodyColor,
    phoneBodyRoughness,
    phoneBodyMetalness,

    phoneScreenColor,
    phoneScreenRoughness,
    phoneScreenMetalness,

    mailIconColor,
    mailIconRoughness,
    mailIconMetalness,

    mailIconTextColor,
    mailIconTextRoughness,
    mailIconTextMetalness,

    linkedIconColor,
    linkedIconRoughness,
    linkedIconMetalness,

    linkedIconTextColor,
    linkedIconTextRoughness,
    linkedIconTextMetalness,

    gitHubIconColor,
    gitHubIconRoughness,
    gitHubIconMetalness,

    gitHubIconTextColor,
    gitHubIconTextRoughness,
    gitHubIconTextMetalness,

    imageColor,
    imageRoughness,
    imageMetalness,

    notificationColor,
    notificationRoughness,
    notificationMetalness,
  } = useControls('Phone', {
    phoneBodyColor: '#ffc4c4',
    phoneBodyRoughness: { min: 0, max: 1, step: 0.01, value: 0.14 },
    phoneBodyMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    phoneScreenColor: '#727272',
    phoneScreenRoughness: { min: 0, max: 1, step: 0.01, value: 0.33 },
    phoneScreenMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    mailIconColor: '#51f3ff',
    mailIconRoughness: { min: 0, max: 1, step: 0.01, value: 0.25 },
    mailIconMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    mailIconTextColor: '#ffbf00',
    mailIconTextRoughness: { min: 0, max: 1, step: 0.01, value: 0.18 },
    mailIconTextMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    linkedIconColor: '#0077b5',
    linkedIconRoughness: { min: 0, max: 1, step: 0.01, value: 0.25 },
    linkedIconMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    linkedIconTextColor: '#ffffff',
    linkedIconTextRoughness: { min: 0, max: 1, step: 0.01, value: 0.18 },
    linkedIconTextMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    gitHubIconColor: '#171515',
    gitHubIconRoughness: { min: 0, max: 1, step: 0.01, value: 0.25 },
    gitHubIconMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    gitHubIconTextColor: '#ffffff',
    gitHubIconTextRoughness: { min: 0, max: 1, step: 0.01, value: 0.18 },
    gitHubIconTextMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    imageColor: '#ffffff',
    imageRoughness: { min: 0, max: 1, step: 0.01, value: 0.15 },
    imageMetalness: { min: 0, max: 1, step: 0.01, value: 1 },

    notificationColor: '#ffc4c4',
    notificationRoughness: { min: 0, max: 1, step: 0.01, value: 0.15 },
    notificationMetalness: { min: 0, max: 1, step: 0.01, value: 1 },
  });

  const group = useRef();
  const pythonRef = useRef();
  const guitarRef = useRef();
  const computerRef = useRef();
  const computerBodyRef = useRef();

  const phoneRef = useRef();

  const { nodes, materials, animations } = useGLTF('/scene.glb');
  const { actions } = useAnimations(animations, group);
  const { scroll } = useScroll();

  useEffect(() => {
    void (actions['CameraAction.001'].play().paused = true);
    void (actions['Action.005'].play().paused = true);
  }, []);

  useFrame((state) => {
    actions['CameraAction.001'].time = THREE.MathUtils.lerp(
      actions['CameraAction.001'].time,
      actions['CameraAction.001'].getClip().duration * scroll.current,
      0.02
    );
    actions['Action.005'].time = THREE.MathUtils.lerp(
      actions['Action.005'].time,
      actions['Action.005'].getClip().duration * scroll.current,
      0.02
    );

    const et = state.clock.elapsedTime;

    if (pythonRef.current) {
      pythonRef.current.position.y = Math.sin(et + 1 * 3000) * 1;
      pythonRef.current.children[0].rotation.z = Math.sin(Math.PI) + et / 2;
    }

    if (guitarRef.current) {
      guitarRef.current.position.y = Math.sin(et + 2 * 3000) * 1;
      guitarRef.current.children[0].rotation.y = Math.sin(Math.PI) + et / 2;
    }

    phoneRef.current.position.y = Math.sin(et * 0.7 + 1 * 3000) * 4;
    phoneRef.current.children[0].rotation.z =
      0.5 + Math.cos(et * 0.4 + 3000) / 2.5;
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="NurbsPath" position={[227.01, 78.63, -84.13]}>
          <group
            name="Empty002"
            position={[-6.19, -28.02, 96.07]}
            scale={16.51}
          >
            <group
              name="Empty003"
              position={[0, 0, 1.29]}
              scale={[0.93, 0.93, 0.07]}
            >
              <group
                name="Empty004"
                position={[0, 0, 18.94]}
                scale={[1.08, 1.08, 13.91]}
              >
                <group
                  name="Empty005"
                  position={[0, 0, 1.54]}
                  scale={[0.93, 0.93, 0.07]}
                >
                  <group
                    name="Empty006"
                    position={[0, 0, 16.44]}
                    scale={[1.08, 1.08, 13.91]}
                  >
                    <mesh
                      name="Back"
                      geometry={nodes.Back.geometry}
                      material={materials.Train}
                      position={[0.04, -0.01, 0.12]}
                      rotation={[Math.PI, 0, Math.PI]}
                      scale={[0.68, 0.68, 1.02]}
                      material-color={trainColor}
                      material-roughness={trainRoughness}
                      material-metalness={trainMetalness}
                    >
                      <mesh
                        name="BackWindows"
                        geometry={nodes.BackWindows.geometry}
                        material={materials.TrainWindow}
                        material-color={trainWindowColor}
                        material-roughness={trainWindowRoughness}
                        material-metalness={trainWindowMetalness}
                      />
                    </mesh>
                  </group>
                  <mesh
                    name="TrainJoint001"
                    geometry={nodes.TrainJoint001.geometry}
                    material={materials.TrainJoint}
                    position={[0.04, -0.1, 0.15]}
                    scale={[0.73, 0.73, 14.17]}
                  />
                </group>
                <mesh
                  name="Middle"
                  geometry={nodes.Middle.geometry}
                  material={materials.Train}
                  position={[0.04, -0.01, 0.09]}
                  scale={[0.68, 0.68, 1.02]}
                >
                  <mesh
                    name="MiddleWindow"
                    geometry={nodes.MiddleWindow.geometry}
                    material={materials.TrainWindow}
                  />
                </mesh>
              </group>
              <mesh
                name="TrainJoint"
                geometry={nodes.TrainJoint.geometry}
                material={materials.TrainJoint}
                position={[0.04, -0.08, 0.01]}
                scale={[0.73, 0.73, 14.17]}
                material-color={trainJointColor}
                material-roughness={trainJointRoughness}
                material-metalness={trainJointMetalness}
              />
            </group>
            <mesh
              name="Nose"
              geometry={nodes.Nose.geometry}
              material={materials.Train}
              position={[0.04, -0.01, 0]}
              scale={[0.68, 0.68, 1.02]}
            >
              <mesh
                name="Nose001"
                geometry={nodes.Nose001.geometry}
                material={materials.TrainWindow}
              />
            </mesh>
          </group>
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={10000}
          near={0.1}
          fov={30}
          position={[193.52, 45.61, -157.14]}
          rotation={[2.65, 0.87, -2.75]}
          scale={25.52}
        />

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
            material={materials.Roof}
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
              material={materials.Bridge}
              position={[-0.81, 0.04, -0.15]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[0.07, 0.04, 0.04]}
              material-color={bridgeColor}
              material-roughness={bridgeRoughness}
              material-metalness={bridgeMetalness}
            />
            <mesh
              name="Cube006_1"
              geometry={nodes.Cube006_1.geometry}
              material={materials.GuitarSomething}
              position={[-0.27, 0.05, -0.14]}
              rotation={[0, 0, -1.58]}
              scale={[0.07, 0.08, 0.02]}
              material-color={somethingColor}
              material-roughness={somethingRoughness}
              material-metalness={somethingMetalness}
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
                material={materials.Lockers}
                position={[20.91, -0.29, 0.84]}
                rotation={[1.6, -0.33, -1.51]}
                scale={[0.24, 0.36, 0.15]}
                material-color={tunersColor}
                material-roughness={tunersRoughness}
                material-metalness={tunersMetalness}
              />
              <mesh
                name="Tuning_Posts"
                geometry={nodes.Tuning_Posts.geometry}
                material={materials.Posts}
                position={[19.85, 1.26, 0]}
                rotation={[-1.53, -1.17, -1.49]}
                scale={[0.19, 0.21, 0.19]}
                material-color={tunersColor}
                material-roughness={tunersRoughness}
                material-metalness={tunersMetalness}
              />
            </mesh>
            <mesh
              name="Pickers"
              geometry={nodes.Pickers.geometry}
              material={materials.Pickers}
              position={[0.69, 0.04, -0.12]}
              scale={[1, 1, 0.79]}
              material-color={pickersColor}
              material-roughness={pickersRoughness}
              material-metalness={pickersMetalness}
            />
            <mesh
              name="Regulators"
              geometry={nodes.Regulators.geometry}
              material={materials.Regulators}
              position={[-1.22, 0.8, -0.12]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.13, 0.06, 0.13]}
              material-color={togglerColor}
              material-roughness={togglerRoughness}
              material-metalness={togglerMetalness}
            />
            <mesh
              name="Toggler"
              geometry={nodes.Toggler.geometry}
              material={materials.Toggler}
              position={[1.53, -0.71, -0.11]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.13, 0.05, 0.13]}
              material-color={togglerColor}
              material-roughness={togglerRoughness}
              material-metalness={togglerMetalness}
            />
          </mesh>
        </group>

        <group ref={computerRef}>
          <mesh
            name="Screen"
            geometry={nodes.Screen.geometry}
            position={[-373.11, 380.27, -177.86]}
            rotation={[1.21, 0.19, 2.57]}
            scale={55.74}
          >
            <meshPhysicalMaterial
              // color={"green"}
              transmission={screenTransmission}
              thickness={screenThickness}
              roughness={screenRoughness}
              clearcoat={screenClearcoat}
              clearcoatRoughness={screenClearcoatRoughness}
              ior={screenIOR}
            />
          </mesh>

          <mesh
            name="ComputerBody"
            geometry={nodes.ComputerBody.geometry}
            material={materials.Computer}
            position={[-373.11, 380.27, -177.87]}
            rotation={[1.21, 0.19, 2.57]}
            scale={55.74}
            material-color={computerColor}
            material-roughness={computerRoughness}
            ref={computerBodyRef}
          >
            <Html
              portal={props.portal}
              rotation-x={-Math.PI / 2}
              zIndexRange={[-1, 100]}
              transform
              position={[0, -0.1, 0]}
              occlude={[computerBodyRef]}
            >
              <h1>hello</h1>
            </Html>

            <mesh
              name="Dynamic"
              geometry={nodes.Dynamic.geometry}
              material={materials.Dynamic}
              position={[0, -1.05, -0.96]}
              scale={[1.04, 1, 1]}
              material-color={accessoryColor}
              material-roughness={accessoryRoughness}
              material-metalness={accessoryMetalness}
            />

            <mesh
              name="ScreenStand"
              geometry={nodes.ScreenStand.geometry}
              material={materials.Computer}
              position={[-0.01, 0.66, 1.78]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.28, 0.28, 1.08]}
            />

            <mesh
              name="Keyboard"
              geometry={nodes.Keyboard.geometry}
              position={[-0.01, 0.66, 1.76]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.28, 0.28, 1.08]}
              material={materials.Computer}
            >
              <mesh
                name="Cap"
                geometry={nodes.Cap.geometry}
                material={materials.Keycap}
                position={[-0.38, 1.2, 0.59]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
                material-color={keyCapColor}
                material-roughness={keyCapRoughness}
                // material-wireframe={true}
              />
              <mesh
                name="Cap001"
                geometry={nodes.Cap001.geometry}
                material={materials.Keycap}
                position={[-1.61, 1.44, 0.59]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
              />
              <mesh
                name="Cap002"
                geometry={nodes.Cap002.geometry}
                material={materials.Keycap}
                position={[-0.38, 1.2, 0.24]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
              />
              <mesh
                name="Cap003"
                geometry={nodes.Cap003.geometry}
                material={materials.Keycap}
                position={[-1.61, 1.44, 0.24]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
              />
              <mesh
                name="Cap004"
                geometry={nodes.Cap004.geometry}
                material={materials.Keycap}
                position={[-0.38, 1.2, -0.12]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
              />
              <mesh
                name="Cap005"
                geometry={nodes.Cap005.geometry}
                material={materials.Keycap}
                position={[-1.61, 1.44, -0.12]}
                rotation={[0, 0, 0]}
                scale={[0.6, 0.66, 0.12]}
              />
              <mesh
                name="JoystickHolder"
                geometry={nodes.JoystickHolder.geometry}
                material={materials.Keycap}
                position={[-1.15, -1.55, -0.62]}
                rotation={[0, 0, -0.19]}
                scale={[-0.9, -0.52, -0.14]}
              >
                <mesh
                  name="Joystick"
                  geometry={nodes.Joystick.geometry}
                  position={[0.49, -4.46, 0]}
                  scale={[-0.13, -0.58, -0.22]}
                  material={materials.Dynamic}
                >
                  <mesh
                    name="Sphere_1"
                    geometry={nodes.Sphere_1.geometry}
                    material={materials.Dynamic}
                    position={[-0.02, 3.08, 0]}
                    scale={[2.48, 0.93, 2.48]}
                  />
                </mesh>
              </mesh>

              <group
                name="Platte"
                position={[-1.96, 0.5, 0]}
                rotation={[0, 0, -0.04]}
              >
                <mesh
                  name="Cube043"
                  geometry={nodes.Cube043.geometry}
                  material={materials.Computer}
                />
                {/* <mesh
                name="Cube043_1"
                geometry={nodes.Cube043_1.geometry}
                material={materials.Keyboard}
              />
              <mesh
                name="Cube043_2"
                geometry={nodes.Cube043_2.geometry}
                material={materials.Keyboard}
              /> */}
              </group>
              <mesh
                name="Switches"
                geometry={nodes.Switches.geometry}
                material={materials.Dynamic}
                position={[-0.49, 0.61, 0.59]}
                rotation={[0, 0, -0.19]}
                scale={[0.43, 0.38, 0.11]}
              />
            </mesh>
          </mesh>
        </group>

        <group ref={phoneRef}>
          <mesh
            name="PhoneBody"
            geometry={nodes.PhoneBody.geometry}
            material={materials.PhoneBody}
            position={[-370, 641.7, 163.18]}
            rotation={[Math.PI / 3, -0.3, 0.99]}
            scale={[-49.77, -5.02, -91.32]}
            material-color={phoneBodyColor}
            material-roughness={phoneBodyRoughness}
            material-metalness={phoneBodyMetalness}
          >
            <mesh
              name="PhoneButtons"
              geometry={nodes.PhoneButtons.geometry}
              material={materials.PhoneBody}
              position={[-0.89, -0.04, 0.36]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[-0.138, -0.27, -0.06]}
            />
            <mesh
              name="PhoneScreen"
              geometry={nodes.PhoneScreen.geometry}
              material={materials.PhoneScreen}
              position={[0, -0.78, 0]}
              material-color={phoneScreenColor}
              material-roughness={phoneScreenRoughness}
              material-metalness={phoneScreenMetalness}
            >
              <mesh
                name="EmailIcon"
                geometry={nodes.EmailIcon.geometry}
                material={materials.Envelope}
                position={[0.53, -2.05, -0.65]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[-0.24, -0.08, -0.18]}
                material-color={mailIconColor}
                material-roughness={mailIconRoughness}
                material-metalness={mailIconMetalness}
              >
                <mesh
                  name="EmailText"
                  geometry={nodes.EmailText.geometry}
                  material={materials.Email}
                  position={[2.71, -0.01, -0.01]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.78, 5.86, 0.99]}
                  material-color={mailIconTextColor}
                  material-roughness={mailIconTextRoughness}
                  material-metalness={mailIconTextMetalness}
                />
              </mesh>
              <mesh
                name="GitHubIcon"
                geometry={nodes.GitHubIcon.geometry}
                material={materials.GitHubBody}
                position={[-0.52, -2.03, -0.65]}
                scale={[-0.18, -2.7, -0.1]}
                material-color={gitHubIconColor}
                material-roughness={gitHubIconRoughness}
                material-metalness={gitHubIconMetalness}
              >
                <mesh
                  name="GithubCat"
                  geometry={nodes.GithubCat.geometry}
                  material={materials.GithubCat}
                  position={[0.02, 0.25, 0.04]}
                  scale={[0.07, 0.05, 0.07]}
                  material-color={gitHubIconTextColor}
                  material-roughness={gitHubIconTextRoughness}
                  material-metalness={gitHubIconTextMetalness}
                />
              </mesh>
              <mesh
                name="ImageHolder"
                geometry={nodes.ImageHolder.geometry}
                material={materials.ImageHolder}
                position={[0, -2.24, 0.02]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-0.62, -0.49, -0.34]}
                material-color={imageColor}
                material-roughness={imageRoughness}
                material-metalness={imageMetalness}
              />
              <mesh
                name="LinkedIcon"
                geometry={nodes.LinkedIcon.geometry}
                material={materials.LinkedBody}
                position={[0, -2.05, -0.65]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.17, -0.31, -0.09]}
                material-color={linkedIconColor}
                material-roughness={linkedIconRoughness}
                material-metalness={linkedIconMetalness}
              >
                <mesh
                  name="LinkedText"
                  geometry={nodes.LinkedText.geometry}
                  material={materials.Linked}
                  position={[0.13, 1.84, 0.19]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={[2.12, 11.31, 2.12]}
                  material-color={linkedIconTextColor}
                  material-roughness={linkedIconTextRoughness}
                  material-metalness={linkedIconTextMetalness}
                />
              </mesh>
              <mesh
                name="Notification"
                geometry={nodes.Notification.geometry}
                material={materials.Notification}
                position={[0, -2.24, 0.54]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-0.62, -0.49, -0.11]}
                material-color={notificationColor}
                material-roughness={notificationRoughness}
                material-metalness={notificationMetalness}
              />
            </mesh>
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.glb');
export default Models;
