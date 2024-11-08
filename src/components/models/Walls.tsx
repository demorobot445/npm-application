import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube719: THREE.Mesh;
    Cube719_1: THREE.Mesh;
    Cube719_2: THREE.Mesh;
    Cube720: THREE.Mesh;
    Cube720_1: THREE.Mesh;
    Cube720_2: THREE.Mesh;
    Cube720_3: THREE.Mesh;
    Cube720_4: THREE.Mesh;
    Cube720_5: THREE.Mesh;
    Cube720_6: THREE.Mesh;
    Cube537: THREE.Mesh;
    Cube537_1: THREE.Mesh;
    Cube537_2: THREE.Mesh;
    Cube537_3: THREE.Mesh;
    Cube537_4: THREE.Mesh;
    Cube541: THREE.Mesh;
    Cube541_1: THREE.Mesh;
    Cube541_2: THREE.Mesh;
    Cube543: THREE.Mesh;
    Cube543_1: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube016_1: THREE.Mesh;
    Cube016_2: THREE.Mesh;
  };
  materials: {
    hblaugrau: THREE.MeshStandardMaterial;
    ["hblaugrau.Fertigung.001"]: THREE.MeshStandardMaterial;
    boden: THREE.MeshStandardMaterial;
    graublau: THREE.MeshStandardMaterial;
    ["hblaugrau.boden"]: THREE.MeshStandardMaterial;
    ["Glas.001"]: THREE.MeshPhysicalMaterial;
    brick: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    Glas: THREE.MeshPhysicalMaterial;
    teppichboden: THREE.MeshStandardMaterial;
    ["hblaugrau..gerillt"]: THREE.MeshStandardMaterial;
  };
};

export function Walls(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/walls.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[107.767, -0.733, -140.702]}
        scale={[6.646, 6.725, 6.786]}
      >
        <mesh
          geometry={nodes.Cube719.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube719_1.geometry}
          material={materials["hblaugrau.Fertigung.001"]}
        />
        <mesh geometry={nodes.Cube719_2.geometry} material={materials.boden} />
      </group>
      <group
        position={[107.754, -0.733, -159.099]}
        scale={[6.646, 6.725, 6.786]}
      >
        <mesh
          geometry={nodes.Cube720.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube720_1.geometry}
          material={materials["hblaugrau.Fertigung.001"]}
        />
        <mesh
          geometry={nodes.Cube720_2.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube720_3.geometry}
          material={materials["hblaugrau.boden"]}
        />
        <mesh geometry={nodes.Cube720_4.geometry}>
          <meshPhysicalMaterial
            roughness={0.4}
            transmission={1}
            thickness={0.5}
          />
        </mesh>
        <mesh geometry={nodes.Cube720_5.geometry} material={materials.boden} />
        <mesh geometry={nodes.Cube720_6.geometry} material={materials.brick} />
      </group>
      <group
        position={[119.054, -0.733, -158.296]}
        scale={[6.646, 6.725, 6.786]}
      >
        <mesh geometry={nodes.Cube537.geometry} material={materials.graublau} />
        <mesh geometry={nodes.Cube537_1.geometry} material={materials.brick} />
        <mesh geometry={nodes.Cube537_2.geometry} material={materials.boden} />
        <mesh
          geometry={nodes.Cube537_3.geometry}
          material={materials.fenster}
        />
        <mesh geometry={nodes.Cube537_4.geometry}>
          <meshPhysicalMaterial
            roughness={0.4}
            transmission={1}
            thickness={0.5}
          />
        </mesh>
      </group>
      <group
        position={[160.915, -0.733, -150.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[6.646, 6.725, 6.786]}
      >
        <mesh geometry={nodes.Cube541.geometry} material={materials.graublau} />
        <mesh geometry={nodes.Cube541_1.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube541_2.geometry}
          material={materials.teppichboden}
        />
      </group>
      <group
        position={[107.754, -0.733, -179.539]}
        scale={[6.646, 6.725, 6.786]}
      >
        <mesh
          geometry={nodes.Cube543.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube543_1.geometry}
          material={materials["hblaugrau.Fertigung.001"]}
        />
      </group>
      <group position={[98.339, 2.325, -194.12]} scale={[6.646, 6.725, 6.786]}>
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials.hblaugrau}
        />
        <mesh geometry={nodes.Cube016_1.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube016_2.geometry}
          material={materials["hblaugrau..gerillt"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/walls.glb");
