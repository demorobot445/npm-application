import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    roof: THREE.Mesh;
    roof001: THREE.Mesh;
    Cube830: THREE.Mesh;
    Cube830_1: THREE.Mesh;
    Cube660: THREE.Mesh;
    Cube855: THREE.Mesh;
    Cube855_1: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder020: THREE.Mesh;
    Cube154: THREE.Mesh;
    Cube154_1: THREE.Mesh;
    Cube184: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cube657: THREE.Mesh;
    Cube856: THREE.Mesh;
    Cube856_1: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cube658: THREE.Mesh;
    Cube865: THREE.Mesh;
    Cube865_1: THREE.Mesh;
    Cylinder023: THREE.Mesh;
  };
  materials: {
    graublau: THREE.MeshStandardMaterial;
    ["graublau.001"]: THREE.MeshStandardMaterial;
    ["hblaugrau.003"]: THREE.MeshStandardMaterial;
    ["schwarz.019"]: THREE.MeshStandardMaterial;
    ["hblaugrau.004"]: THREE.MeshStandardMaterial;
    ["schwarz.028"]: THREE.MeshStandardMaterial;
    ["hblaugrau.007"]: THREE.MeshStandardMaterial;
    ["schwarz.038"]: THREE.MeshStandardMaterial;
    ["hblaugrau.009"]: THREE.MeshStandardMaterial;
    ["schwarz.050"]: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
  };
};

export function Roof(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/roof.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.roof.geometry}
        material={materials.graublau}
        position={[160.807, 5.444, -160.098]}
        scale={[2.907, 3.157, 4.261]}
      />
      <mesh
        geometry={nodes.roof001.geometry}
        material={materials["graublau.001"]}
        position={[151.582, 8.107, -156.914]}
        scale={[5.608, 3.031, 5.153]}
      />
      <group position={[122.689, 5.689, -150.409]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube830.geometry}
          material={materials["hblaugrau.003"]}
        />
        <mesh
          geometry={nodes.Cube830_1.geometry}
          material={materials["schwarz.019"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube660.geometry}
        material={materials["hblaugrau.003"]}
        position={[124.983, 8.716, -160.202]}
        scale={[24.469, 3.294, 6.742]}
      />
      <group position={[122.679, 5.759, -161.821]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube855.geometry}
          material={materials["hblaugrau.003"]}
        />
        <mesh
          geometry={nodes.Cube855_1.geometry}
          material={materials["schwarz.019"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={materials["hblaugrau.003"]}
        position={[138.21, 5.32, -154.177]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials["hblaugrau.003"]}
        position={[138.21, 5.354, -165.589]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <group position={[122.689, 5.638, -137.005]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube154.geometry}
          material={materials["hblaugrau.004"]}
        />
        <mesh
          geometry={nodes.Cube154_1.geometry}
          material={materials["schwarz.028"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube184.geometry}
        material={materials["hblaugrau.004"]}
        position={[124.993, 8.706, -141.19]}
        scale={[24.158, 3.294, 6.742]}
      />
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={materials["hblaugrau.004"]}
        position={[138.21, 5.265, -140.773]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <mesh
        geometry={nodes.Cube657.geometry}
        material={materials["hblaugrau.007"]}
        position={[124.993, 8.706, -180.186]}
        scale={[24.158, 3.294, 6.742]}
      />
      <group position={[122.689, 5.638, -176.001]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube856.geometry}
          material={materials["hblaugrau.007"]}
        />
        <mesh
          geometry={nodes.Cube856_1.geometry}
          material={materials["schwarz.038"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials["hblaugrau.007"]}
        position={[138.21, 5.265, -179.769]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <mesh
        geometry={nodes.Cube658.geometry}
        material={materials["hblaugrau.009"]}
        position={[102.666, 8.753, -194.949]}
        scale={[23.72, 3.235, 6.62]}
      />
      <group position={[100.358, 5.916, -190.565]} scale={[2.877, 3.168, 3.35]}>
        <mesh
          geometry={nodes.Cube865.geometry}
          material={materials["hblaugrau.009"]}
        />
        <mesh
          geometry={nodes.Cube865_1.geometry}
          material={materials["schwarz.050"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder023.geometry}
        material={materials.hblaugrau}
        position={[100.364, 5.55, -194.264]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.699, -7.515, -1.407]}
      />
    </group>
  );
}

useGLTF.preload("/roof.glb");
