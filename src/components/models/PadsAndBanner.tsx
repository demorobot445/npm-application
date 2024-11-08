import * as THREE from "three";
import React, { useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";

// type ActionName =
//   | "Plane.008Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Plane.008Action.001"
//   | "Torus.009Action"
//   | "Plane.008Action"
//   | "Plane.008Action"
//   | "Plane.008Action.001"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Plane.008Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Torus.009Action"
//   | "Plane.008Action"
//   | "Plane.008Action"
//   | "Torus.009Action"
//   | "Plane.008Action"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action"
//   | "Plane.008Action"
//   | "Torus.009Action"
//   | "Plane.008Action"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001"
//   | "Plane.008Action.001";

// interface GLTFAction extends THREE.AnimationClip {
//   name: ActionName;
// }

type GLTFResult = GLTF & {
  nodes: {
    Torus009: THREE.Mesh;
    Torus009_1: THREE.Mesh;
    Torus009_2: THREE.Mesh;
    Torus009_3: THREE.Mesh;
    Torus009_4: THREE.Mesh;
    Torus009_5: THREE.Mesh;
    Torus009_6: THREE.Mesh;
    Torus009_7: THREE.Mesh;
    Torus009_8: THREE.Mesh;
    Torus009_9: THREE.Mesh;
    Torus009_10: THREE.Mesh;
    Torus009_11: THREE.Mesh;
    Torus009_12: THREE.Mesh;
    Torus009_13: THREE.Mesh;
    Torus009_14: THREE.Mesh;
    Torus009_15: THREE.Mesh;
    Torus009_16: THREE.Mesh;
    Torus009_17: THREE.Mesh;
    Torus009_18: THREE.Mesh;
    Torus009_19: THREE.Mesh;
    Torus009_20: THREE.Mesh;
    Torus009_21: THREE.Mesh;
    Torus009_22: THREE.Mesh;
    Torus014: THREE.Mesh;
    Torus014_1: THREE.Mesh;
    Torus009_23: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane047_1: THREE.Mesh;
    Plane048: THREE.Mesh;
    Plane048_1: THREE.Mesh;
    Plane049: THREE.Mesh;
    Plane049_1: THREE.Mesh;
    Plane033: THREE.Mesh;
    Plane033_1: THREE.Mesh;
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
    port01: THREE.MeshStandardMaterial;
    ["schwarz.016"]: THREE.MeshStandardMaterial;
    port02: THREE.MeshStandardMaterial;
    ["weiss.002"]: THREE.MeshStandardMaterial;
    ["hgrau.008"]: THREE.MeshStandardMaterial;
    ["weiss.leuchten"]: THREE.MeshStandardMaterial;
  };
};

export function PadsAndBanner(props: JSX.IntrinsicElements["group"]) {
  // model hovered
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const handleHoverEnter = () => setHovered(true);
  const handleHoverLeave = () => setHovered(false);
  //
  const { moveAnimation } = useSnapshot(store);
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/padsAndBanner.glb") as GLTFResult;
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
        <group name="spr005" position={[133.503, -0.838, -153.84]}>
          <group name="spg_außen">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009"
              geometry={nodes.Torus009.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr006" position={[134.43, -0.838, -160.173]}>
          <group name="spg_außen_1">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_1"
              geometry={nodes.Torus009_1.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr007" position={[116.537, -0.838, -153.94]}>
          <group name="spg_außen_2">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_2"
              geometry={nodes.Torus009_2.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr008" position={[116.536, -0.838, -160.172]}>
          <group name="spg_außen_3">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_3"
              geometry={nodes.Torus009_3.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr009" position={[127.803, -0.838, -160.169]}>
          <group name="spg_außen_4">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_4"
              geometry={nodes.Torus009_4.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchmon001"
          position={[134.095, -0.85, -171.95]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.464, 3.34, 3.375]}
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
          position={[148.8, 1.785, -160.484]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.034, 4.332, 3.489]}
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
        <group name="spr002" position={[134.235, -0.838, -168.458]}>
          <group name="spg_außen_5">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_5"
              geometry={nodes.Torus009_5.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr01" position={[125.597, -0.838, -153.875]}>
          <group name="spg_außen_6">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_6"
              geometry={nodes.Torus009_6.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr012" position={[122.399, -0.838, -160.169]}>
          <group name="spg_außen_7">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_7"
              geometry={nodes.Torus009_7.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchmon002"
          position={[122.696, -0.85, -171.95]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.464, 3.34, 3.375]}
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
        <group name="sprspg" position={[136.758, -0.815, -140.373]}>
          <group name="spg_außen_8">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_8"
              geometry={nodes.Torus009_8.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchgang_büros"
          position={[144.139, -0.866, -138.363]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[2.878, 3.732, 2.205]}
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
        <group
          name="durchgang_lager"
          position={[113.516, -0.802, -142.45]}
          rotation={[0, 1.571, 0]}
          scale={[6.308, 5.192, 5.192]}
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
        </group>
        <group
          name="sprspg001"
          position={[130.182, -0.815, -140.373]}
          rotation={[0, 0.001, 0]}
        >
          <group name="spg_außen_9">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_9"
              geometry={nodes.Torus009_9.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="sprspg002"
          position={[130.182, -0.815, -140.373]}
          rotation={[0, 0.001, 0]}
        >
          <group name="spg_außen_10">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_10"
              geometry={nodes.Torus009_10.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="sprspg003" position={[136.758, -0.815, -140.373]}>
          <group name="spg_außen_11">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_11"
              geometry={nodes.Torus009_11.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="sprspg004" position={[142.939, -0.815, -140.373]}>
          <group name="spg_außen_12">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_12"
              geometry={nodes.Torus009_12.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchgang_fert"
          position={[143.648, -0.849, -147.037]}
          scale={[2.878, 3.406, 2.205]}
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
        <group name="spr001" position={[134.179, -0.798, -177.45]}>
          <group name="spg_außen_13">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_13"
              geometry={nodes.Torus009_13.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="spr004"
          position={[116.908, -0.8, -177.45]}
          rotation={[Math.PI, -0.863, Math.PI]}
        >
          <group name="spg_außen_14">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_14"
              geometry={nodes.Torus009_14.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr003" position={[132.497, -0.804, -183.39]}>
          <group name="spg_außen_15">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_15"
              geometry={nodes.Torus009_15.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchhin"
          position={[113.543, -0.814, -177.618]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[7.458, 6.295, 6.079]}
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
        <group name="spr010" position={[116.861, -0.804, -183.39]}>
          <group name="spg_außen_16">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_16"
              geometry={nodes.Torus009_16.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr011" position={[125.977, -0.804, -183.39]}>
          <group name="spg_außen_17">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_17"
              geometry={nodes.Torus009_17.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr02" position={[128.06, -0.798, -177.45]}>
          <group name="spg_außen_18">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_18"
              geometry={nodes.Torus009_18.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr013" position={[142.225, -0.798, -177.45]}>
          <group name="spg_außen_19">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_19"
              geometry={nodes.Torus009_19.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr014" position={[140.801, -0.804, -183.39]}>
          <group name="spg_außen_20">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_20"
              geometry={nodes.Torus009_20.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group name="spr015" position={[122.782, -0.798, -177.45]}>
          <group name="spg_außen_21">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_21"
              geometry={nodes.Torus009_21.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchgang_fert_"
          position={[122.669, -0.803, -172.561]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.749, 3.281, 2.518]}
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
          onClick={(e) => moveAnimation(e.point.x - 1, e.point.z, 2)}
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
          name="spr__cafeteria"
          position={[152.361, -0.433, -161.052]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        >
          <group name="spg_außen_22">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_22"
              geometry={nodes.Torus009_22.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchgang_fert_bottom"
          position={[147.929, -0.847, -160.066]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[4.092, 4.354, 3.928]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x - 1, e.point.z, 3)}
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
          name="spgHIN"
          position={[94.309, -0.714, -128.766]}
          scale={18.081}
        >
          <group name="spg_außen_23">
            <mesh
              name="Torus014"
              geometry={nodes.Torus014.geometry}
              material={materials["schwarz.016"]}
            />
            <mesh
              name="Torus014_1"
              geometry={nodes.Torus014_1.geometry}
              material={materials.port01}
            />
            <mesh
              name="Torus009_23"
              geometry={nodes.Torus009_23.geometry}
              material={materials.port02}
              scale={[1.096, 3.105, 1.096]}
            />
          </group>
        </group>
        <group
          name="durchghalle"
          position={[107.337, -0.749, -186.314]}
          scale={[7.404, 6.063, 6.063]}
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
        <group
          name="Einkauf001"
          position={[147.446, 3.778, -165.462]}
          rotation={[0, -0.568, 0]}
          scale={1.22}
        >
          <mesh
            name="Text004"
            geometry={nodes.Text004.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text004_1"
            geometry={nodes.Text004_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text004_2"
            geometry={nodes.Text004_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Drehen_Dreh-fräsen001"
          position={[129.247, 1.946, -165.822]}
          rotation={[0, 0.688, 0]}
          scale={1.097}
        >
          <mesh
            name="Text013"
            geometry={nodes.Text013.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text013_1"
            geometry={nodes.Text013_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text013_2"
            geometry={nodes.Text013_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Ausbildungs_und_Kundencenter001"
          position={[118.136, 2.254, -162.839]}
          rotation={[0, 0.968, 0]}
        >
          <mesh
            name="Text009"
            geometry={nodes.Text009.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text009_1"
            geometry={nodes.Text009_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text009_2"
            geometry={nodes.Text009_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Smart_Eco_Box"
          position={[132.79, 0.13, -155.407]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.426}
        >
          <mesh
            name="Text016"
            geometry={nodes.Text016.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text016_1"
            geometry={nodes.Text016_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text016_2"
            geometry={nodes.Text016_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="SchleifenMessen"
          position={[136.714, 2.089, -166.368]}
          rotation={[0, 0.127, 0]}
          scale={1.054}
        >
          <mesh
            name="Text116"
            geometry={nodes.Text116.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text116_1"
            geometry={nodes.Text116_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text116_2"
            geometry={nodes.Text116_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Fräsen_Groß001"
          position={[128.62, 2.256, -149.965]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Text003"
            geometry={nodes.Text003.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text003_1"
            geometry={nodes.Text003_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text003_2"
            geometry={nodes.Text003_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="FräsemKlein001"
          position={[136.702, 1.901, -154.278]}
          rotation={[0, -0.767, 0]}
        >
          <mesh
            name="Text002"
            geometry={nodes.Text002.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text002_1"
            geometry={nodes.Text002_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text002_2"
            geometry={nodes.Text002_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Programmierung_CAD-CAM001"
          position={[147.819, 1.092, -167.765]}
          rotation={[0, -0.831, 0]}
        >
          <mesh
            name="Text006"
            geometry={nodes.Text006.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text006_1"
            geometry={nodes.Text006_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text006_2"
            geometry={nodes.Text006_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Verwaltung001"
          position={[144.749, 1.064, -140.857]}
          rotation={[0, 0.906, 0]}
          scale={0.784}
        >
          <mesh
            name="Cube144"
            geometry={nodes.Cube144.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Cube144_1"
            geometry={nodes.Cube144_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Cube144_2"
            geometry={nodes.Cube144_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Produktion001"
          position={[126.269, 1.841, -137.901]}
          rotation={[0, -1.103, 0]}
          scale={1.399}
        >
          <mesh
            name="Text018"
            geometry={nodes.Text018.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text018_1"
            geometry={nodes.Text018_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text018_2"
            geometry={nodes.Text018_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Lager001"
          position={[108.502, 3.516, -144.696]}
          rotation={[0, -0.719, 0]}
          scale={1.95}
        >
          <mesh
            name="Text068"
            geometry={nodes.Text068.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text068_1"
            geometry={nodes.Text068_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text068_2"
            geometry={nodes.Text068_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Einzelanlagen001"
          position={[119.625, 1.28, -178.316]}
          rotation={[0, 1.322, 0]}
          scale={1.141}
        >
          <mesh
            name="Text115"
            geometry={nodes.Text115.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text115_1"
            geometry={nodes.Text115_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text115_2"
            geometry={nodes.Text115_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Handhabungsgerät001"
          position={[125.954, 1.28, -179.791]}
          rotation={[0, 0.773, 0]}
          scale={1.415}
        >
          <mesh
            name="Text015"
            geometry={nodes.Text015.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text015_1"
            geometry={nodes.Text015_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text015_2"
            geometry={nodes.Text015_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Konstrukteur001"
          position={[147.71, 3.657, -174.881]}
          rotation={[0, -1.008, 0]}
          scale={1.083}
        >
          <mesh
            name="Text019"
            geometry={nodes.Text019.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text019_1"
            geometry={nodes.Text019_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text019_2"
            geometry={nodes.Text019_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Montage_Machanik001"
          position={[127.132, 1.784, -184.212]}
          rotation={[0, 0.406, 0]}
          scale={1.092}
        >
          <mesh
            name="Text028"
            geometry={nodes.Text028.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text028_1"
            geometry={nodes.Text028_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text028_2"
            geometry={nodes.Text028_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Montage_Elektrik001"
          position={[137.631, 1.462, -183.907]}
          rotation={[0, 0.833, 0]}
          scale={1.047}
        >
          <mesh
            name="Text021"
            geometry={nodes.Text021.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text021_1"
            geometry={nodes.Text021_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text021_2"
            geometry={nodes.Text021_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Programmierer001"
          position={[148.485, 0.984, -177.851]}
          rotation={[0, -1.17, 0]}
        >
          <mesh
            name="Text023"
            geometry={nodes.Text023.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text023_1"
            geometry={nodes.Text023_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text023_2"
            geometry={nodes.Text023_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Projektleiter001"
          position={[145.784, 4.02, -179.457]}
          rotation={[0, 0.037, 0]}
          scale={1.067}
        >
          <mesh
            name="Text024"
            geometry={nodes.Text024.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text024_1"
            geometry={nodes.Text024_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text024_2"
            geometry={nodes.Text024_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Verkettete_Anlagen001"
          position={[136.27, 1.798, -179.748]}
          rotation={[0, 1.295, 0]}
          scale={1.128}
        >
          <mesh
            name="Cube247"
            geometry={nodes.Cube247.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Cube247_1"
            geometry={nodes.Cube247_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Cube247_2"
            geometry={nodes.Cube247_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="EPLANkonstrukteur"
          position={[146.567, 0.984, -180.328]}
          rotation={[Math.PI, -0.177, Math.PI]}
        >
          <mesh
            name="Text114"
            geometry={nodes.Text114.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text114_1"
            geometry={nodes.Text114_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text114_2"
            geometry={nodes.Text114_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Partnerschaften001"
          position={[160.446, 1.233, -154.456]}
          rotation={[0, -1.106, 0]}
        >
          <mesh
            name="Text037"
            geometry={nodes.Text037.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text037_1"
            geometry={nodes.Text037_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text037_2"
            geometry={nodes.Text037_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Infomaterial001"
          position={[157.36, 1.233, -157.395]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Text031"
            geometry={nodes.Text031.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text031_1"
            geometry={nodes.Text031_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text031_2"
            geometry={nodes.Text031_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Auszeichnungen001"
          position={[159.478, 0.548, -156.587]}
          rotation={[0, -0.464, 0]}
        >
          <mesh
            name="Text010"
            geometry={nodes.Text010.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text010_1"
            geometry={nodes.Text010_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text010_2"
            geometry={nodes.Text010_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Zertifikate001"
          position={[159.939, 1.182, -163.132]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Text039"
            geometry={nodes.Text039.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text039_1"
            geometry={nodes.Text039_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text039_2"
            geometry={nodes.Text039_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Über_uns001"
          position={[159.945, 1.182, -164.268]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Text041"
            geometry={nodes.Text041.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text041_1"
            geometry={nodes.Text041_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text041_2"
            geometry={nodes.Text041_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Tour"
          position={[162.646, 0.548, -157.455]}
          rotation={[0, 0.137, 0]}
          scale={0.72}
        >
          <mesh
            name="Text033"
            geometry={nodes.Text033.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text033_1"
            geometry={nodes.Text033_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text033_2"
            geometry={nodes.Text033_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Imagefilm"
          position={[159.953, 1.182, -161.979]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Text110"
            geometry={nodes.Text110.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text110_1"
            geometry={nodes.Text110_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text110_2"
            geometry={nodes.Text110_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Personal_Lohnbuchhaltung001"
          position={[161.223, 3.742, -159.14]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.838}
        >
          <mesh
            name="Text045"
            geometry={nodes.Text045.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text045_1"
            geometry={nodes.Text045_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text045_2"
            geometry={nodes.Text045_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Vertrieb_Montageleitung001"
          position={[162.311, 3.906, -165.868]}
          rotation={[0, -0.637, 0]}
          scale={1.045}
        >
          <mesh
            name="Text046"
            geometry={nodes.Text046.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text046_1"
            geometry={nodes.Text046_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text046_2"
            geometry={nodes.Text046_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="geschäftsführung"
          position={[161.221, 3.742, -161.135]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.838}
        >
          <mesh
            name="Text027"
            geometry={nodes.Text027.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text027_1"
            geometry={nodes.Text027_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text027_2"
            geometry={nodes.Text027_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Pausnplatz001"
          position={[105.181, 3.107, -176.031]}
          rotation={[0, -0.114, 0]}
          scale={2.596}
        >
          <mesh
            name="Text049"
            geometry={nodes.Text049.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text049_1"
            geometry={nodes.Text049_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text049_2"
            geometry={nodes.Text049_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Transport"
          position={[88.796, 3.287, -161.799]}
          rotation={[0, 0.727, 0]}
          scale={2.596}
        >
          <mesh
            name="Text111"
            geometry={nodes.Text111.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text111_1"
            geometry={nodes.Text111_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text111_2"
            geometry={nodes.Text111_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="inbetriebnahme"
          position={[106.329, 2.053, -193.876]}
          rotation={[0, 0.344, 0]}
          scale={1.33}
        >
          <mesh
            name="Text113"
            geometry={nodes.Text113.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text113_1"
            geometry={nodes.Text113_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text113_2"
            geometry={nodes.Text113_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
        <group
          name="Sägen"
          position={[85.184, 2.314, -194.332]}
          rotation={[0, 1.166, 0]}
          scale={1.739}
        >
          <mesh
            name="Text112"
            geometry={nodes.Text112.geometry}
            material={materials["weiss.002"]}
          />
          <mesh
            name="Text112_1"
            geometry={nodes.Text112_1.geometry}
            material={materials["hgrau.008"]}
          />
          <mesh
            name="Text112_2"
            geometry={nodes.Text112_2.geometry}
            material={materials["weiss.leuchten"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/padsAndBanner.glb");
