import * as THREE from "three";
import React, { useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";

type ActionName =
  | "Plane.008Action"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action"
  | "Plane.008Action"
  | "Plane.008Action.001"
  | "Plane.008Action"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action"
  | "Plane.008Action"
  | "Plane.008Action"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action"
  | "Plane.008Action"
  | "Plane.008Action"
  | "Plane.008Action.001"
  | "Plane.008Action.001"
  | "Plane.008Action.001";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Plane033: THREE.Mesh;
    Plane033_1: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane047_1: THREE.Mesh;
    Plane048: THREE.Mesh;
    Plane048_1: THREE.Mesh;
    Plane049: THREE.Mesh;
    Plane049_1: THREE.Mesh;
  };
  materials: {
    port01: THREE.MeshStandardMaterial;
    ["schwarz.016"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Doors(props: JSX.IntrinsicElements["group"]) {
  const { moveAnimation, floor } = useSnapshot(store);
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/doors.glb") as GLTFResult;
  // model hovered
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const handleHoverEnter = () => setHovered(true);
  const handleHoverLeave = () => setHovered(false);
  //
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="eingang"
          position={[164.687, -0.741, -160.374]}
          rotation={[0, Math.PI / 2, 0]}
          scale={4.202}
        >
          <group
            name="Plane015"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchmon001"
          position={[134.095, -0.85, -171.95]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.464, 3.34, 3.375]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(-1.5, -12.5, 4, 2.8, 0.64);
          }}
        >
          <group
            name="Plane017"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durcheinkauf"
          position={[142.773, 2.908, -165.275]}
          rotation={[0, 1.571, 0]}
          scale={[1.836, 1.414, 1.937]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(3.4, -2.5, 3.1, 3.6, Math.PI * 1.7);
          }}
        >
          <group
            name="Plane017_1"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_1"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchprogrammierung-CAD-CAM"
          position={[144.039, -0.827, -165.917]}
          rotation={[0, 1.571, 0]}
          scale={[2.117, 2.685, 3.375]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(4.3, -5.1, 3.2, 0.6, Math.PI * 1.7);
          }}
        >
          <group
            name="Plane017_2"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_2"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchcafeteria002"
          position={[143.45, 1.725, -172]}
          rotation={[0, Math.PI / 1, 0]}
          scale={[2.8, 3.4, 4.1]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3.1) moveAnimation(3.5, -12.6, 4.2, 3.7, 5.67);
          }}
        >
          <group
            name="Plane017_2"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_2"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchcafeteria"
          position={[147.548, -0.835, -160.064]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.034, 4.332, 3.489]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(16.38, -0.047, 2, 1, Math.PI * 0.5);
          }}
        >
          <group
            name="Plane017_3"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_3"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchcafeteria001"
          position={[143.641, 1.785, -162.047]}
          rotation={[0, Math.PI / 1, 0]}
          scale={3.25}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3 || floor === 3.4)
              moveAnimation(3.4, -2.5, 3.1, 3.6, Math.PI * 1.7);
          }}
        >
          <group
            name="Plane017_4"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_4"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchganghin"
          position={[113.545, -0.814, -159.583]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[7.651, 6.106, 6.106]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(-59.3, 13.2, 7, 5, 5.67);
          }}
        >
          <group
            name="Plane017_5"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_5"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchmon002"
          position={[122.696, -0.85, -171.95]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.464, 3.34, 3.375]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(-1.5, -12.5, 4, 2.8, 0.64);
          }}
        >
          <group
            name="Plane017_6"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_6"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_büros"
          position={[144.139, -0.866, -138.363]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[2.878, 3.732, 2.205]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 5 || floor === 5.3) {
              store.isPopupActive = true;
              store.popupDataValue = 17;
              moveAnimation(6.4, 19.9, undefined, 0.5, 1.38);
            }
          }}
        >
          <group
            name="Plane015_1"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_1"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        {/* <group
          name="durchgang_lager"
          position={[113.516, -0.802, -142.45]}
          rotation={[0, 1.571, 0]}
          scale={[6.308, 5.192, 5.192]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 5 || floor === 5.3)
              moveAnimation(-38.3, 22.9, 5.4, 1.3, -0.92);
          }}
        >
          <group
            name="Plane015_2"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_2"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgangspg"
          position={[112.92, -0.814, -142.485]}
          rotation={[0, 1.571, 0]}
          scale={[6.248, 5.216, 5.216]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 5.4) moveAnimation(2.2, 14.2, 5, 3.3, 2.04);
          }}
        >
          <group
            name="Plane017_7"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_7"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group> */}
        <group
          name="durchgang_fert"
          position={[143.648, -0.849, -147.037]}
          scale={[2.878, 3.406, 2.205]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 5 || floor === 5.3)
              moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
          }}
        >
          <group
            name="Plane015_3"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_3"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_fert"
          position={[143.248, -0.849, -147.756]}
          scale={[2.878, 3.406, 2.205]}
          rotation-y={Math.PI * 1}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 3 || floor === 3.3)
              moveAnimation(2.2, 14.2, 5, 3.3, 2.04);
          }}
        >
          <group
            name="Plane015_3"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_3"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchhin"
          position={[113.543, -0.814, -177.618]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[7.458, 6.295, 6.079]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 4 || floor === 4.3)
              moveAnimation(-59.3, 13.2, 7, 5, 5.67);
          }}
        >
          <group
            name="Plane017_8"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_8"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="Durchgang_konstrukteuere_Teamelieter"
          position={[142.85, 2.756, -175.982]}
          rotation={[0, 1.571, 0]}
          scale={[1.896, 1.414, 1.937]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 4 || floor === 4.3)
              moveAnimation(3.5, -12.6, 4.2, 3.7, 5.67);
            else moveAnimation(2.8, -15, 4, 2.6, 0.84);
          }}
        >
          <group
            name="Plane017_9"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_9"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_programmierer_Eplaner"
          position={[144.042, -0.072, -178.582]}
          rotation={[0, 1.571, 0]}
          scale={[1.896, 1.414, 1.937]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 4 || floor === 4.3)
              moveAnimation(4.3, -16.2, 4.1, 0.6, 5.57);
            else moveAnimation(2.8, -15, 4, 2.6, 0.84);
          }}
        >
          <group
            name="Plane017_10"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_10"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchfert"
          position={[134.234, -0.817, -172.587]}
          scale={[2.464, 3.34, 3.375]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 4 || floor === 4.3)
              moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
          }}
        >
          <group
            name="Plane017_11"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_11"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_fert_"
          position={[122.669, -0.803, -172.561]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.749, 3.281, 2.518]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 4 || floor === 4.3)
              moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
          }}
        >
          <group
            name="Plane015_4"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_4"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_cafeteria"
          position={[157.304, -0.793, -159.816]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[3.542, 4.097, 4.292]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => {
            if (floor === 1) moveAnimation(e.point.x - 1, e.point.z, 2);
          }}
        >
          <group
            name="Plane015_5"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_5"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_fert_bottom"
          position={[147.929, -0.847, -160.066]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.092, 4.354, 3.928]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 2 || floor === 2.1)
              moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.7);
          }}
        >
          <group
            name="Plane015_6"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_6"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_verwaltung"
          position={[157.014, 1.984, -160.901]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.701, 4.652, 4.701]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 2 || floor === 2.1)
              moveAnimation(18.2, 0.7, 1.1, 3.7, Math.PI * 1.7);
          }}
        >
          <group
            name="Plane017_12"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_12"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="DurchgangFoyer"
          position={[157.011, -0.805, -159.821]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[3.359, 4.022, 4.146]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => {
            if (floor === 2 || floor === 2.1)
              moveAnimation(e.point.x + 1, e.point.z);
          }}
        >
          <group
            name="Plane017_13"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_13"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_ferttop"
          position={[149.137, 1.937, -160.452]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[3.834, 4.01, 4.994]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 2 || floor === 2.1)
              moveAnimation(8.5, 1.3, 3.4, 3.3, 0.87);
          }}
        >
          <group
            name="Plane015_7"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_7"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgang_cafeteria002"
          position={[157.386, 2.018, -160.901]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.784, 4.735, 4.784]}
        >
          <group
            name="Plane015_8"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_8"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchghalle"
          position={[107.337, -0.749, -186.314]}
          scale={[7.404, 6.063, 6.063]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => {
            if (floor === 7)
              moveAnimation(e.point.x, e.point.z - 2, 6, 1, Math.PI * 0.1);
          }}
        >
          <group
            name="Plane015_9"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane047"
              geometry={nodes.Plane047.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane047_1"
              geometry={nodes.Plane047_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane014_9"
              position={[0.154, 0.006, -0.003]}
              rotation={[0, 0.362, 0]}
            >
              <mesh
                name="Plane048"
                geometry={nodes.Plane048.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane048_1"
                geometry={nodes.Plane048_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchmon"
          position={[113.056, -0.754, -178.033]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[7.651, 6.106, 6.106]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 7) moveAnimation(-1.5, -12.5, 4, 2.8, 0.64);
          }}
        >
          <group
            name="Plane017_14"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_14"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchgangfert"
          position={[113.061, -0.754, -160.105]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[7.651, 6.106, 6.106]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 7) moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
          }}
        >
          <group
            name="Plane017_15"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_15"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
        <group
          name="durchhin001"
          position={[107.339, -0.754, -187.022]}
          scale={[7.651, 6.106, 6.106]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => {
            if (floor === 6) moveAnimation(-59.3, 13.2, 7, 5, 5.67);
          }}
        >
          <group
            name="Plane017_16"
            position={[-0.031, 0, 0]}
            scale={[1, 1, 0.643]}
          >
            <mesh
              name="Plane033"
              geometry={nodes.Plane033.geometry}
              material={materials.port01}
            />
            <mesh
              name="Plane033_1"
              geometry={nodes.Plane033_1.geometry}
              material={materials["schwarz.016"]}
            />
            <group
              name="Plane016_16"
              position={[0.15, 0.002, 0.001]}
              rotation={[0, -0.391, 0]}
            >
              <mesh
                name="Plane049"
                geometry={nodes.Plane049.geometry}
                material={materials.port01}
              />
              <mesh
                name="Plane049_1"
                geometry={nodes.Plane049_1.geometry}
                material={materials["schwarz.016"]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/doors.glb");
