import * as THREE from "three";
import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type ActionName = "Torus.009Action";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Torus014: THREE.Mesh;
    Torus014_1: THREE.Mesh;
    Torus009: THREE.Mesh;
  };
  materials: {
    ["port02.001"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};

export function Spawn(props: JSX.IntrinsicElements["group"]) {
  const group = React.useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/spawn.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Torus.009Action"]?.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="spg_außen">
          <mesh
            name="Torus014"
            geometry={nodes.Torus014.geometry}
            material={materials["port02.001"]}
          />
          <mesh
            name="Torus014_1"
            geometry={nodes.Torus014_1.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            name="Torus009"
            geometry={nodes.Torus009.geometry}
            material={materials["port02.001"]}
            scale={[1.096, 3.105, 1.096]}
          />
          <mesh rotation-x={Math.PI * 0.5}>
            <ringGeometry args={[0.25, 0, 20, 20]} />
            <meshBasicMaterial color={"#1f2025"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spawn.glb");
