import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { easing } from 'maath';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { computerActions } from '../../store/computer-slice';
import EmbeddedGallery from './EmbeddedGallery';

const Key = ({ which, command, ...props }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [pressed, press] = useState(false);
  const { nodes } = useGLTF('scene.glb');
  const [x, y, z] = props.position;

  /**
   * Animate key press
   */
  useFrame((state, delta) => {
    easing.damp3(
      ref.current.position,
      [x, pressed ? y - 0.2 : y, z],
      0.1,
      delta
    );
  });

  /**
   * Change state to pressed and dispatch an action to computer store
   */
  const pressButtonHandler = () => {
    press(true);
    if (command) {
      dispatch(computerActions.setCommand(command));
    }
  };

  return (
    <mesh
      ref={ref}
      geometry={nodes[which].geometry}
      onPointerDown={pressButtonHandler}
      onPointerUp={() => press(false)}
      onPointerLeave={() => press(false)}
      {...props}
    />
  );
};

const Joystick = ({ command, ...props }) => {
  const ref = useRef();
  const [pressed, press] = useState(false);
  const { nodes } = useGLTF('scene.glb');
  const dispatch = useDispatch();

  /**
   * Animate joystick
   */
  useFrame((state, delta) => {
    easing.damp3(ref.current.rotation, [0, 0, pressed ? -0.4 : 0], 0.1, delta);
  });

  /**
   * Change state to pressed and dispatch an action to computer store
   */
  const toggleJoystickHandler = () => {
    press(!pressed);
    if (command) {
      dispatch(computerActions.openProject());
    }
  };

  return (
    <>
      <mesh
        name="JoystickHolder"
        geometry={nodes.JoystickHolder.geometry}
        material={props.holderMaterial}
        position={[-1.15, -1.55, -0.62]}
        rotation={[0, 0, -0.19]}
        scale={[-0.9, -0.52, -0.14]}
      />
      <group
        name="Joystick"
        position={[-1.2, 0.5, -0.62]}
        scale={[0.3, 0.3, 0.08]}
        ref={ref}
      >
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={props.joystickMaterial}
          onPointerDown={toggleJoystickHandler}
        />
        <mesh
          name="Sphere001_1"
          geometry={nodes.Sphere001_1.geometry}
          material={props.joystickMaterial}
        />
      </group>
    </>
  );
};

const Computer = ({ portal }) => {
  const computerRef = useRef();
  const computerBodyRef = useRef();
  const { nodes, materials } = useGLTF('scene.glb');

  const {
    computerColor,
    computerRoughness,
    // screenTransmission,
    // screenThickness,
    // screenRoughness,
    // screenClearcoat,
    // screenClearcoatRoughness,
    // screenIOR,

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

  return (
    <group ref={computerRef}>
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[-373.11, 380.27, -177.86]}
        rotation={[1.25, 0.45, 2.57]}
        scale={55.74}
        material={materials.Dynamic}
      >
        {/* <meshPhysicalMaterial
          // color={"green"}
          transmission={screenTransmission}
          thickness={screenThickness}
          roughness={screenRoughness}
          clearcoat={screenClearcoat}
          clearcoatRoughness={screenClearcoatRoughness}
          ior={screenIOR}
        /> */}
      </mesh>

      <mesh
        name="ComputerBody"
        geometry={nodes.ComputerBody.geometry}
        material={materials.Computer}
        position={[-373.11, 380.27, -177.87]}
        rotation={[1.25, 0.45, 2.57]}
        scale={55.74}
        material-color={computerColor}
        material-roughness={computerRoughness}
        ref={computerBodyRef}
      >
        <EmbeddedGallery
          portal={portal}
          rotation-x={-Math.PI / 2}
          zIndexRange={[1, -1]}
          transform
          position={[0, -0.1, 0]}
          occlude={[computerBodyRef]}
        />
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
          <Key
            command={'LEFT'}
            which="Cap"
            material={materials.Keycap}
            position={[-0.38, 1.2, 0.59]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
            material-color={keyCapColor}
            material-roughness={keyCapRoughness}
          />
          <Key
            command={'RIGHT'}
            which="Cap004"
            material={materials.Keycap}
            position={[-0.38, 1.2, -0.12]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
          />
          <Key
            command={'UP'}
            which="Cap003"
            material={materials.Keycap}
            position={[-1.61, 1.44, 0.24]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
          />
          <Key
            command={'DOWN'}
            which="Cap002"
            material={materials.Keycap}
            position={[-0.38, 1.2, 0.24]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
          />
          <Key
            which="Cap001"
            material={materials.Keycap}
            position={[-1.61, 1.44, 0.59]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
          />
          <Key
            which="Cap005"
            material={materials.Keycap}
            position={[-1.61, 1.44, -0.12]}
            rotation={[0, 0, 0]}
            scale={[0.6, 0.66, 0.12]}
          />

          <Joystick
            command={'OPEN'}
            holderMaterial={materials.Keycap}
            joystickMaterial={materials.Dynamic}
          />
          {/* <group
            name="Joystick"
            position={[-1.2, 0.5, -0.62]}
            scale={[0.3, 0.3, 0.08]}
            // rotation-z={-0.4}
          >
            <mesh
              name="Sphere001"
              geometry={nodes.Sphere001.geometry}
              material={materials.Dynamic}
            />
            <mesh
              name="Sphere001_1"
              geometry={nodes.Sphere001_1.geometry}
              material={materials.Dynamic}
            />
          </group>{' '} */}

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
  );
};

export default Computer;
