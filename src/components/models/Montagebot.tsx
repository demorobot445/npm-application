import * as THREE from "three";
import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane031: THREE.Mesh;
    Plane031_1: THREE.Mesh;
    Plane031_2: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube056_1: THREE.Mesh;
    Cube056_2: THREE.Mesh;
    Cube328: THREE.Mesh;
    Cube328_1: THREE.Mesh;
    Cube328_2: THREE.Mesh;
    Cube329: THREE.Mesh;
    Cube329_1: THREE.Mesh;
    Cube329_2: THREE.Mesh;
    Cube264: THREE.Mesh;
    Cylinder036: THREE.Mesh;
    Cylinder036_1: THREE.Mesh;
    Cylinder043: THREE.Mesh;
    Cylinder043_1: THREE.Mesh;
    Bone: THREE.Bone;
  };
  materials: {
    ["gelb.001"]: THREE.MeshStandardMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["metall.010"]: THREE.MeshStandardMaterial;
    ["gelb.002"]: THREE.MeshStandardMaterial;
    ["weiss.010"]: THREE.MeshStandardMaterial;
    ["schwarz.006"]: THREE.MeshStandardMaterial;
    ["Plastik-weiss"]: THREE.MeshStandardMaterial;
  };
};

export function MontageBot(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/montagebot.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[123.198, -0.804, -179.753]}
        rotation={[0, 0.508, 0]}
        scale={0.767}
      >
        <mesh
          geometry={nodes.Plane031.geometry}
          material={materials["gelb.001"]}
        />
        <mesh
          geometry={nodes.Plane031_1.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Plane031_2.geometry}
          material={materials["metall.010"]}
        />
        <group position={[0.339, 0.719, 0.219]}>
          <primitive object={nodes.Bone} />
        </group>
        <group position={[0.334, 0.999, 0]}>
          <mesh
            geometry={nodes.Cube056.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cube056_1.geometry}
            material={materials["gelb.002"]}
          />
          <mesh
            geometry={nodes.Cube056_2.geometry}
            material={materials["schwarz.007"]}
          />
        </group>
        <group position={[0.242, 1.065, -0.035]}>
          <mesh
            geometry={nodes.Cube328.geometry}
            material={materials["gelb.001"]}
          />
          <mesh
            geometry={nodes.Cube328_1.geometry}
            material={materials["schwarz.007"]}
          />
          <mesh
            geometry={nodes.Cube328_2.geometry}
            material={materials["weiss.010"]}
          />
        </group>
        <group position={[0.707, 1.038, 0.428]}>
          <mesh
            geometry={nodes.Cube329.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cube329_1.geometry}
            material={materials["gelb.002"]}
          />
          <mesh
            geometry={nodes.Cube329_2.geometry}
            material={materials["schwarz.007"]}
          />
        </group>
        <mesh
          geometry={nodes.Cube264.geometry}
          material={materials["gelb.001"]}
          position={[-0.001, 0.227, 0]}
        />
        <group position={[0.699, 1.032, 0.697]}>
          <mesh
            geometry={nodes.Cylinder036.geometry}
            material={materials["schwarz.006"]}
          />
          <mesh
            geometry={nodes.Cylinder036_1.geometry}
            material={materials["metall.010"]}
          />
        </group>
        <group position={[0.708, 1.006, 0.759]}>
          <mesh
            geometry={nodes.Cylinder043.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cylinder043_1.geometry}
            material={materials["Plastik-weiss"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/montagebot.glb");
