import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { computerActions } from '../../store/computer-slice';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import EmbeddedGallery from './EmbeddedGallery';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Key = ({ which, command, ...props }) => {
  const { nodes } = useGLTF('scene.glb');

  const ref = useRef();
  const dispatch = useDispatch();
  const [pressed, press] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [x, y, z] = props.position;

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

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
      onPointerDown={(e) => {
        e.stopPropagation();
        pressButtonHandler();
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        press(false);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        press(false);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      {...props}
    />
  );
};

const Joystick = ({ command, ...props }) => {
  const { nodes } = useGLTF('scene.glb');
  const dispatch = useDispatch();

  const ref = useRef();

  const [pressed, press] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

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
      <mesh
        name="Joystick"
        geometry={nodes.Joystick.geometry}
        material={props.joystickMaterial}
        position={[-1.2, 0.5, -0.62]}
        scale={[0.3, 0.3, 0.08]}
        ref={ref}
        onPointerDown={toggleJoystickHandler}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      />
    </>
  );
};

const Computer = ({ portal }) => {
  const computerRef = useRef();
  const computerBodyRef = useRef();
  const { nodes, materials } = useGLTF('scene.glb');
  const { width } = useWindowDimensions();

  useFrame((state) => {
    const et = state.clock.elapsedTime;

    // phone animation
    computerRef.current.position.y = Math.sin(et * 0.7 + 1 * 3000) * 4;

    computerRef.current.children.forEach((child) => {
      child.rotation.z = 2.57 + Math.cos(et * 0.5 + 3000) / 15;
    });
  });

  return (
    <group ref={computerRef}>
      <mesh
        name="Screen"
        geometry={nodes.Screen.geometry}
        position={[
          width > 768 ? -373.11 : -290,
          width > 768 ? 380.27 : 420,
          -177.86,
        ]}
        rotation={[1.25, 0.36, 2.57]}
        scale={55.74}
        material={materials.ComputerAccessories}
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
        position={[
          width > 768 ? -373.11 : -290,
          width > 768 ? 380.27 : 420,
          -177.87,
        ]}
        rotation={[1.25, 0.36, 2.57]}
        scale={55.74}
        material-color={'#1a1a1a'}
        material-roughness={0.12}
        ref={computerBodyRef}
      >
        <EmbeddedGallery
          portal={portal}
          rotation-x={-Math.PI / 2}
          zIndexRange={[1, -1]}
          transform
          position={[0, -0.1, 0]}
          // occlude={[computerBodyRef]}
        />
        <mesh
          name="Dynamic"
          geometry={nodes.Dynamic.geometry}
          material={materials.ComputerAccessories}
          position={[0, -1.05, -0.96]}
          scale={[1.04, 1, 1]}
          material-color={'#febfc7'}
          material-roughness={0.14}
          material-metalness={1}
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
            material-color={'#100b0b'}
            material-roughness={0.62}
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
            joystickMaterial={materials.ComputerAccessories}
          />
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
          </group>
          <mesh
            name="Switches"
            geometry={nodes.Switches.geometry}
            material={materials.ComputerAccessories}
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
