import { useEffect, useRef, useState } from 'react';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Phone = () => {
  const { nodes, materials } = useGLTF('scene.glb');
  const { width } = useWindowDimensions();

  const phoneRef = useRef();
  const gitRef = useRef();
  const emailRef = useRef();
  const linkedRef = useRef();
  const pdfRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [gitIsPressed, setGitIsPressed] = useState(false);
  const [emailIsPressed, setEmailIsPressed] = useState(false);
  const [linkedIsPressed, setLinkedIsPressed] = useState(false);
  const [pdfIsPressed, setPdfIsPressed] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame((state, delta) => {
    const et = state.clock.elapsedTime;

    // phone animation
    phoneRef.current.position.y = Math.sin(et * 0.7 + 1 * 3000) * 4;
    phoneRef.current.children[0].rotation.z =
      0.5 + Math.cos(et * 0.4 + 3000) / 2.5;

    // icons animation
    easing.damp3(
      gitRef.current.position,
      [
        gitRef.current.position.x,
        gitIsPressed ? -2 : -3,
        gitRef.current.position.z,
      ],
      0.1,
      delta
    );

    easing.damp3(
      emailRef.current.position,
      [
        emailRef.current.position.x,
        emailIsPressed ? -2 : -3,
        emailRef.current.position.z,
      ],
      0.1,
      delta
    );

    easing.damp3(
      linkedRef.current.position,
      [
        linkedRef.current.position.x,
        linkedIsPressed ? -2 : -3,
        linkedRef.current.position.z,
      ],
      0.1,
      delta
    );

    easing.damp3(
      pdfRef.current.position,
      [
        pdfRef.current.position.x,
        pdfIsPressed ? 4 : 5.5,
        pdfRef.current.position.z,
      ],
      0.1,
      delta
    );
  });

  return (
    <group ref={phoneRef}>
      <mesh
        name="PhoneBody"
        geometry={nodes.PhoneBody.geometry}
        material={materials.PhoneBody}
        position={[
          -370,
          width > 768 ? 641.7 : 722,
          width > 768 ? 163.18 : 209.18,
        ]}
        rotation={[Math.PI / 3, -0.3, 0.99]}
        scale={[-49.77, -5.02, -91.32]}
        material-color={'#a08bc4'}
        material-roughness={0.14}
        material-metalness={1}
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
          material-color={'#727272'}
          material-roughness={0.33}
          material-metalness={1}
        >
          <mesh
            name="EmailIcon"
            ref={emailRef}
            geometry={nodes.EmailIcon.geometry}
            material={materials.Envelope}
            position={[0.53, -2.05, -0.65]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[-0.24, -0.08, -0.18]}
            material-color={'#51f3ff'}
            material-roughness={0.25}
            material-metalness={1}
            onPointerDown={(e) => {
              e.stopPropagation();
              setEmailIsPressed(true);
            }}
            onPointerUp={(e) => {
              e.stopPropagation();
              window.open('mailto:example@gmail.com');
              setEmailIsPressed(false);
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              setEmailIsPressed(false);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false);
            }}
          >
            <mesh
              name="EmailText"
              geometry={nodes.EmailText.geometry}
              material={materials.Email}
              position={[2.71, -0.01, -0.01]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.78, 5.86, 0.99]}
              material-color={'#ffbf00'}
              material-roughness={0.18}
              material-metalness={1}
            />
          </mesh>
          <mesh
            ref={gitRef}
            name="GitHubIcon"
            geometry={nodes.GitHubIcon.geometry}
            material={materials.GitHubBody}
            position={[-0.52, -5, -0.65]}
            scale={[-0.18, -2.7, -0.1]}
            material-color={'#171515'}
            material-roughness={0.25}
            material-metalness={1}
            onPointerDown={(e) => {
              e.stopPropagation();
              setGitIsPressed(true);
            }}
            onPointerUp={(e) => {
              e.stopPropagation();
              window.open('https://github.com/hotriluc');
              setGitIsPressed(false);
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              setGitIsPressed(false);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false);
            }}
          >
            <mesh
              name="GithubCat"
              geometry={nodes.GitHubText.geometry}
              material={materials.GitHubText}
              position={[0.02, 0.25, 0.04]}
              scale={[0.07, 0.05, 0.07]}
              material-color={'#fafafa'}
              material-roughness={0.18}
              material-metalness={1}
            />
          </mesh>

          <mesh
            name="LinkedIcon"
            ref={linkedRef}
            geometry={nodes.LinkedIcon.geometry}
            material={materials.LinkedBody}
            position={[0, -2.05, -0.65]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.17, -0.31, -0.09]}
            material-color={'#0077b5'}
            material-roughness={0.25}
            material-metalness={1}
            onPointerDown={(e) => {
              e.stopPropagation();
              setLinkedIsPressed(true);
            }}
            onPointerUp={(e) => {
              e.stopPropagation();
              window.open('https://www.linkedin.com/in/luc-ho/');
              setLinkedIsPressed(false);
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              setLinkedIsPressed(false);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(true);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false);
            }}
          >
            <mesh
              name="LinkedText"
              geometry={nodes.LinkedText.geometry}
              material={materials.Linked}
              position={[0.13, 1.84, 0.19]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[2.12, 11.31, 2.12]}
              material-color={'#fafafa'}
              material-roughness={0.18}
              material-metalness={1}
            />
          </mesh>

          <mesh
            name="ImageHolder"
            geometry={nodes.ImageHolder.geometry}
            material={materials.ImageHolder}
            position={[0, -2.24, 0.02]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-0.62, -0.49, -0.34]}
            material-color={'#c1c1c1'}
            material-roughness={0.15}
            material-metalness={1}
          >
            <mesh
              name="PdfIcon"
              ref={pdfRef}
              geometry={nodes.PdfIcon.geometry}
              material={materials.PdfIconMaterial}
              position={[0, 4.87, 0.17]}
              rotation={[-1.57, 0, Math.PI]}
              scale={[0.44, 0.44, 0.7]}
              material-color={'#fbfbfb'}
              material-roughness={0.25}
              material-metalness={1}
              onPointerDown={(e) => {
                e.stopPropagation();
                setPdfIsPressed(true);
              }}
              onPointerUp={(e) => {
                e.stopPropagation();
                window.open('/CV_Ho.pdf');
                setPdfIsPressed(false);
              }}
              onPointerLeave={(e) => {
                e.stopPropagation();
                setPdfIsPressed(false);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHovered(false);
              }}
            >
              <mesh
                name="Extension"
                geometry={nodes.Extension.geometry}
                material={materials.Extension}
                position={[-0.62, 0.29, 0.76]}
                scale={[0.41, 0.17, 0.5]}
                material-color={'#f40f02'}
                material-roughness={0.25}
                material-metalness={1}
              >
                <mesh
                  name="ExtensionText"
                  geometry={nodes.ExtensionText.geometry}
                  material={materials.ExtensionText}
                  position={[0, 0.05, 1.19]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.8, 4.39, 1.89]}
                  material-color={'#fbfbfb'}
                  material-roughness={0.18}
                  material-metalness={1}
                />
              </mesh>
              <mesh
                name="PdfText"
                geometry={nodes.PdfText.geometry}
                material={materials.Material}
                position={[0, -0.29, 1.73]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.91, 9.03, 0.91]}
                material-color={'#a3a3a3'}
                material-roughness={0.18}
                material-metalness={1}
              />
            </mesh>
          </mesh>
          <mesh
            name="Notification"
            geometry={nodes.Notification.geometry}
            material={materials.Notification}
            position={[0, -2.24, 0.54]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-0.62, -0.49, -0.11]}
            material-color={'#ffc4c4'}
            material-roughness={0.15}
            material-metalness={1}
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default Phone;
