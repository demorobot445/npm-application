import * as THREE from "three";
import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube022: THREE.Mesh;
    Cube022_1: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube010: THREE.Mesh;
    Bone: THREE.Bone;
  };
  materials: {
    ["Plasti.blackl.004"]: THREE.MeshStandardMaterial;
    ["orange.001"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.005"]: THREE.MeshStandardMaterial;
  };
};

export function FertigungBot(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/fertigungbot.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[128.202, 0.371, -150.068]} scale={0.826}>
        <primitive object={nodes.Bone} />
      </group>
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Plasti.blackl.005"]}
        position={[126.35, -0.742, -150.491]}
        scale={[0.826, 0.489, 0.826]}
      />
    </group>
  );
}

useGLTF.preload("/fertigungbot.glb");
