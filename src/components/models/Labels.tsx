import * as THREE from "three";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import { useState } from "react";
import { ThreeEvent, useThree } from "@react-three/fiber";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Text004: THREE.Mesh;
    Text004_1: THREE.Mesh;
    Text004_2: THREE.Mesh;
    Text013: THREE.Mesh;
    Text013_1: THREE.Mesh;
    Text013_2: THREE.Mesh;
    Text009: THREE.Mesh;
    Text009_1: THREE.Mesh;
    Text009_2: THREE.Mesh;
    Text016: THREE.Mesh;
    Text016_1: THREE.Mesh;
    Text016_2: THREE.Mesh;
    Text116: THREE.Mesh;
    Text116_1: THREE.Mesh;
    Text116_2: THREE.Mesh;
    Text003: THREE.Mesh;
    Text003_1: THREE.Mesh;
    Text003_2: THREE.Mesh;
    Text002: THREE.Mesh;
    Text002_1: THREE.Mesh;
    Text002_2: THREE.Mesh;
    Text006: THREE.Mesh;
    Text006_1: THREE.Mesh;
    Text006_2: THREE.Mesh;
    Cube144: THREE.Mesh;
    Cube144_1: THREE.Mesh;
    Cube144_2: THREE.Mesh;
    Text018: THREE.Mesh;
    Text018_1: THREE.Mesh;
    Text018_2: THREE.Mesh;
    Text068: THREE.Mesh;
    Text068_1: THREE.Mesh;
    Text068_2: THREE.Mesh;
    Text115: THREE.Mesh;
    Text115_1: THREE.Mesh;
    Text115_2: THREE.Mesh;
    Text015: THREE.Mesh;
    Text015_1: THREE.Mesh;
    Text015_2: THREE.Mesh;
    Text019: THREE.Mesh;
    Text019_1: THREE.Mesh;
    Text019_2: THREE.Mesh;
    Text028: THREE.Mesh;
    Text028_1: THREE.Mesh;
    Text028_2: THREE.Mesh;
    Text021: THREE.Mesh;
    Text021_1: THREE.Mesh;
    Text021_2: THREE.Mesh;
    Text023: THREE.Mesh;
    Text023_1: THREE.Mesh;
    Text023_2: THREE.Mesh;
    Text024: THREE.Mesh;
    Text024_1: THREE.Mesh;
    Text024_2: THREE.Mesh;
    Cube247: THREE.Mesh;
    Cube247_1: THREE.Mesh;
    Cube247_2: THREE.Mesh;
    Text114: THREE.Mesh;
    Text114_1: THREE.Mesh;
    Text114_2: THREE.Mesh;
    Text037: THREE.Mesh;
    Text037_1: THREE.Mesh;
    Text037_2: THREE.Mesh;
    Text031: THREE.Mesh;
    Text031_1: THREE.Mesh;
    Text031_2: THREE.Mesh;
    Text010: THREE.Mesh;
    Text010_1: THREE.Mesh;
    Text010_2: THREE.Mesh;
    Text039: THREE.Mesh;
    Text039_1: THREE.Mesh;
    Text039_2: THREE.Mesh;
    Text041: THREE.Mesh;
    Text041_1: THREE.Mesh;
    Text041_2: THREE.Mesh;
    Text033: THREE.Mesh;
    Text033_1: THREE.Mesh;
    Text033_2: THREE.Mesh;
    Text110: THREE.Mesh;
    Text110_1: THREE.Mesh;
    Text110_2: THREE.Mesh;
    Text045: THREE.Mesh;
    Text045_1: THREE.Mesh;
    Text045_2: THREE.Mesh;
    Text046: THREE.Mesh;
    Text046_1: THREE.Mesh;
    Text046_2: THREE.Mesh;
    Text027: THREE.Mesh;
    Text027_1: THREE.Mesh;
    Text027_2: THREE.Mesh;
    Text049: THREE.Mesh;
    Text049_1: THREE.Mesh;
    Text049_2: THREE.Mesh;
    Text111: THREE.Mesh;
    Text111_1: THREE.Mesh;
    Text111_2: THREE.Mesh;
    Text113: THREE.Mesh;
    Text113_1: THREE.Mesh;
    Text113_2: THREE.Mesh;
    Text112: THREE.Mesh;
    Text112_1: THREE.Mesh;
    Text112_2: THREE.Mesh;
  };
  materials: {
    ["weiss.002"]: THREE.MeshStandardMaterial;
    ["hgrau.008"]: THREE.MeshStandardMaterial;
    ["weiss.leuchten"]: THREE.MeshStandardMaterial;
  };
};

export function Labels(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/labels.glb") as GLTFResult;

  const { moveAnimation, floor } = useSnapshot(store);

  // model hovered
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const handleHoverEnter = (e: ThreeEvent<PointerEvent>) => {
    setHovered(true);
    gsap.to(e.eventObject.position, {
      y: e.eventObject.position.y + 0.1,
    });
  };
  const handleHoverLeave = (e: ThreeEvent<PointerEvent>) => {
    setHovered(false);
    gsap.to(e.eventObject.position, {
      y: e.eventObject.position.y - 0.1,
    });
  };

  const { camera } = useThree();

  return (
    <group {...props} dispose={null}>
      <group
        position={[147.446, 3.778, -165.462]}
        rotation={[0, -0.568, 0]}
        scale={1.22}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(4.1, -2.4, undefined, 3.2, Math.PI * 2 - 0.55);
            store.popupDataValue = 29;
          }
        }}
      >
        <mesh
          geometry={nodes.Text004.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text004_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text004_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[129.247, 1.946, -165.822]}
        rotation={[0, 0.688, 0]}
        scale={1.097}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-10.8, -0.8, undefined, 0.7, 0.41);
            store.popupDataValue = 0;
          }
        }}
      >
        <mesh
          geometry={nodes.Text013.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text013_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text013_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[118.136, 2.254, -162.839]}
        rotation={[0, 0.968, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-21.2, -1.7, undefined, 0.2, -0.38);
            store.popupDataValue = 5;
          }
        }}
      >
        <mesh
          geometry={nodes.Text009.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text009_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text009_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[132.79, 0.13, -155.407]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.426}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-6.3, 4.3, undefined, 0.01, 2.13);
            store.popupDataValue = 2;
          }
        }}
      >
        <mesh
          geometry={nodes.Text016.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text016_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text016_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[136.714, 2.089, -166.368]}
        rotation={[0, 0.127, 0]}
        scale={1.054}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-4.7, -11.5, undefined, 1, 3.6);
            store.popupDataValue = 1;
          }
        }}
      >
        <mesh
          geometry={nodes.Text116.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text116_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text116_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[128.62, 2.256, -149.965]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-7, 9.1, undefined, 1, 1.58);
            store.popupDataValue = 4;
          }
        }}
      >
        <mesh
          geometry={nodes.Text003.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text003_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text003_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[136.702, 1.901, -154.278]}
        rotation={[0, -0.767, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-5.2, 8.1, undefined, 1.3, -0.63);
          }
          store.popupDataValue = 3;
        }}
      >
        <mesh
          geometry={nodes.Text002.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text002_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text002_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[147.819, 1.092, -167.765]}
        rotation={[0, -0.831, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 3.2) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(5, -5, undefined, -0.05, Math.PI * 1.9 - 0.55);
            store.popupDataValue = 30;
          }
        }}
      >
        <mesh
          geometry={nodes.Text006.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text006_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text006_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[144.749, 1.064, -140.857]}
        rotation={[0, 0.906, 0]}
        scale={0.784}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 5.2) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(6.5, 19.7, undefined, 0.5, 1.5);
            store.popupDataValue = 16;
          }
        }}
      >
        <mesh
          geometry={nodes.Cube144.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Cube144_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Cube144_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[126.269, 1.841, -137.901]}
        rotation={[0, -1.103, 0]}
        scale={1.399}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 5) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-7.8, 20.9, undefined, 1.3, 1.93);
            store.popupDataValue = 17;
          }
        }}
      >
        <mesh
          geometry={nodes.Text018.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text018_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text018_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[108.502, 3.516, -144.696]}
        rotation={[0, -0.719, 0]}
        scale={1.95}
      >
        <mesh
          geometry={nodes.Text068.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text068_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text068_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[124, 1.28, -178.316]}
        rotation={[0, 1.322, 0]}
        scale={1.141}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-23.4, -20.4, undefined, 0.5, -1.94);
            store.popupDataValue = 21;
          }
        }}
      >
        <mesh
          geometry={nodes.Text115.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text115_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text115_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[125.954, 1.28, -179.791]}
        rotation={[0, 0.773, 0]}
        scale={1.415}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-19.6, -21.5, undefined, 0.5, -1.8);
            store.popupDataValue = 20;
          }
        }}
      >
        <mesh
          geometry={nodes.Text015.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text015_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text015_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[147.71, 3.657, -174.881]}
        rotation={[0, -1.008, 0]}
        scale={1.083}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4.2) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(4, -13.1, undefined, 3.2, Math.PI * 2 - 1.17);
            store.popupDataValue = 28;
          }
        }}
      >
        <mesh
          geometry={nodes.Text019.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text019_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text019_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[127.132, 1.784, -184.212]}
        rotation={[0, 0.406, 0]}
        scale={1.092}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-12.9, -20.9, undefined, 1, -0.55);
            store.popupDataValue = 18;
          }
        }}
      >
        <mesh
          geometry={nodes.Text028.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text028_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text028_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[137.631, 1.462, -183.907]}
        rotation={[0, 0.833, 0]}
        scale={1.047}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(0.8, -22.9, undefined, 1.2, 1.5);
            store.popupDataValue = 19;
          }
        }}
      >
        <mesh
          geometry={nodes.Text021.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text021_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text021_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[148.485, 0.984, -177.851]}
        rotation={[0, -1.17, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(5.7, -16.4, undefined, 0.3, Math.PI * 2 - 1.13);
            store.popupDataValue = 25;
          }
        }}
      >
        <mesh
          geometry={nodes.Text023.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text023_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text023_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[145.784, 4.02, -179.457]}
        rotation={[0, 0.037, 0]}
        scale={1.067}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4.2) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(4.5, -22.3, undefined, 3.5, Math.PI * 2 - 2.77);
            store.popupDataValue = 26;
          }
        }}
      >
        <mesh
          geometry={nodes.Text024.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text024_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text024_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[136.27, 1.798, -179.748]}
        rotation={[0, 1.295, 0]}
        scale={1.128}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-7.3, -20.5, undefined, 1, -1.61);
            store.popupDataValue = 22;
          }
        }}
      >
        <mesh
          geometry={nodes.Cube247.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Cube247_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Cube247_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[146.567, 0.984, -180.328]}
        rotation={[Math.PI, -0.177, Math.PI]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 4.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(4.6, -22.8, undefined, 0.8, Math.PI * 2 - 2.77);
            store.popupDataValue = 27;
          }
        }}
      >
        <mesh
          geometry={nodes.Text114.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text114_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text114_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[160.446, 1.233, -154.456]}
        rotation={[0, -1.106, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(22.6, 4.6, undefined, 0.7, 2.07);
            store.popupDataValue = 14;
          }
        }}
      >
        <mesh
          geometry={nodes.Text037.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text037_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text037_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[157.36, 1.233, -157.395]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(19.2, 2.7, undefined, 0.6, 1.55);
            store.popupDataValue = 15;
          }
        }}
      >
        <mesh
          geometry={nodes.Text031.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text031_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text031_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[159.478, 0.548, -156.587]}
        rotation={[0, -0.464, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(20.7, 1.5, undefined, 0.5, 2.56);
          }
          store.popupDataValue = 10;
        }}
      >
        <mesh
          geometry={nodes.Text010.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text010_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text010_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[159.939, 1.182, -163.132]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(22.1, -2.8, undefined, 0.6, 1.57);
            store.popupDataValue = 12;
          }
        }}
      >
        <mesh
          geometry={nodes.Text039.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text039_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text039_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[159.945, 1.182, -164.268]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(22.1, -4.1, undefined, 0.6, 1.57);
            store.popupDataValue = 13;
          }
        }}
      >
        <mesh
          geometry={nodes.Text041.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text041_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text041_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      {/* <group
        position={[162.646, 0.548, -157.455]}
        rotation={[0, 0.137, 0]}
        scale={0.72}
      >
        <mesh
          geometry={nodes.Text033.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text033_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text033_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group> */}
      <group
        position={[159.953, 1.182, -161.979]}
        rotation={[0, Math.PI / 2, 0]}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(22.1, -1.6, undefined, 0.6, 1.57);
            store.popupDataValue = 11;
          }
        }}
      >
        <mesh
          geometry={nodes.Text110.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text110_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text110_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[161.223, 3.742, -159.14]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.838}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(19.4, 1.1, undefined, 3.2, -1.54);
            store.popupDataValue = 31;
          }
        }}
      >
        <mesh
          geometry={nodes.Text045.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text045_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text045_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[162.311, 3.906, -165.868]}
        rotation={[0, -0.637, 0]}
        scale={1.045}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(19.9, -2.9, undefined, 3.6, -0.8);
            store.popupDataValue = 24;
          }
        }}
      >
        <mesh
          geometry={nodes.Text046.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text046_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text046_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[161.221, 3.742, -161.135]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.838}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 1.1) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(19.4, -1.1, undefined, 3.2, -1.54);
            store.popupDataValue = 23;
          }
        }}
      >
        <mesh
          geometry={nodes.Text027.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text027_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text027_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[105.181, 3.107, -176.031]}
        rotation={[0, -0.114, 0]}
        scale={2.596}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 7) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-34.3, -8.9, undefined, 0.5, Math.PI * 2.1);
          }
          store.popupDataValue = 9;
        }}
      >
        <mesh
          geometry={nodes.Text049.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text049_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text049_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[88.796, 3.287, -161.799]}
        rotation={[0, 0.727, 0]}
        scale={2.596}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 7) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-57.9, -7.4, undefined, 2.2, Math.PI * 1.35);
          }
          store.popupDataValue = 8;
        }}
      >
        <mesh
          geometry={nodes.Text111.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text111_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text111_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[106.329, 2.053, -193.876]}
        rotation={[0, 0.344, 0]}
        scale={1.33}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 6) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-33.5, -30.2, undefined, 1, Math.PI * 2.1);
          }
          store.popupDataValue = 7;
        }}
      >
        <mesh
          geometry={nodes.Text113.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text113_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text113_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
      <group
        position={[85.184, 2.314, -194.332]}
        rotation={[0, 1.166, 0]}
        scale={1.739}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        onClick={() => {
          if (floor === 6) {
            store.previousPoistion = {
              x: camera.position.x,
              y: camera.position.y,
              z: camera.position.z,
              rotateY: camera.rotation.y,
            };
            store.isPopupActive = true;
            moveAnimation(-49, -29.4, undefined, 1.4, Math.PI * 2.3);
          }
          store.popupDataValue = 6;
        }}
      >
        <mesh
          geometry={nodes.Text112.geometry}
          material={materials["weiss.002"]}
        />
        <mesh
          geometry={nodes.Text112_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text112_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/labels.glb");
