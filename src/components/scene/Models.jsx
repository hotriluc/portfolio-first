import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import {
  useGLTF,
  PerspectiveCamera,
  useAnimations,
  useScroll,
} from '@react-three/drei';

import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

import Computer from './Computer';
import Phone from './Phone';
import University from './University';

export function Models(props) {
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

  const group = useRef();

  const { nodes, materials, animations } = useGLTF('/scene.glb');
  const { actions } = useAnimations(animations, group);
  const { scroll } = useScroll();

  useEffect(() => {
    void (actions['CameraAction.001'].play().paused = true);
    void (actions['Action.005'].play().paused = true);
  }, []);

  useFrame(() => {
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

        <University />
        <Computer portal={props.portal} />
        <Phone />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.glb');
export default Models;
