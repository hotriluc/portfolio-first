import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';

const Phone = () => {
  const phoneRef = useRef();
  const { nodes, materials } = useGLTF('scene.glb');

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
    phoneBodyColor: '#a08bc4',
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

  useFrame((state) => {
    const et = state.clock.elapsedTime;

    phoneRef.current.position.y = Math.sin(et * 0.7 + 1 * 3000) * 4;
    phoneRef.current.children[0].rotation.z =
      0.5 + Math.cos(et * 0.4 + 3000) / 2.5;
  });

  return (
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
  );
};

export default Phone;
