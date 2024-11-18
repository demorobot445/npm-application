import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Zufahrtsstrasse001: THREE.Mesh;
    gruene_Insel1001: THREE.Mesh;
    gruene_Insel2001: THREE.Mesh;
    Hauptstrasse001: THREE.Mesh;
    Cube477: THREE.Mesh;
    Cube477_1: THREE.Mesh;
    Cube136: THREE.Mesh;
    Cube136_1: THREE.Mesh;
    Cube360: THREE.Mesh;
    Cube361: THREE.Mesh;
    Cube362: THREE.Mesh;
    Cube756: THREE.Mesh;
    Cube756_1: THREE.Mesh;
    Cube760: THREE.Mesh;
    Cube760_1: THREE.Mesh;
    Landebahn001: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube014_1: THREE.Mesh;
    Cube014_2: THREE.Mesh;
    Cube014_3: THREE.Mesh;
    Cube014_4: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder018_1: THREE.Mesh;
    Cylinder018_2: THREE.Mesh;
    Cylinder018_3: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Cylinder001_3: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Cylinder002_2: THREE.Mesh;
    Cylinder002_3: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube015_1: THREE.Mesh;
    Cube015_2: THREE.Mesh;
    Cube015_3: THREE.Mesh;
    Cube015_4: THREE.Mesh;
    Cube015_5: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve001_1: THREE.Mesh;
    Curve001_2: THREE.Mesh;
    Curve001_3: THREE.Mesh;
    Curve001_4: THREE.Mesh;
    Cube184: THREE.Mesh;
    Cube184_1: THREE.Mesh;
    Cube184_2: THREE.Mesh;
    Cube184_3: THREE.Mesh;
    Cube184_4: THREE.Mesh;
    Cube184_5: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Gleise002: THREE.Mesh;
    Bahndamm002: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cube025_1: THREE.Mesh;
    Cube602: THREE.Mesh;
    Cube602_1: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube026_1: THREE.Mesh;
    Cube055: THREE.Mesh;
    Cube055_1: THREE.Mesh;
    Cylinder094: THREE.Mesh;
    Cylinder094_1: THREE.Mesh;
    Plane009_1: THREE.Mesh;
    Plane009_2: THREE.Mesh;
    Plane010: THREE.Mesh;
    himmel: THREE.Mesh;
    Cylinder051: THREE.Mesh;
    Cylinder051_1: THREE.Mesh;
    Cylinder051_2: THREE.Mesh;
    Cylinder051_3: THREE.Mesh;
    Cylinder051_4: THREE.Mesh;
    Baum3001: THREE.Mesh;
    Plane012: THREE.Mesh;
    Cube745: THREE.Mesh;
    Cube745_1: THREE.Mesh;
    Cube363: THREE.Mesh;
    Cube364: THREE.Mesh;
    Curve002: THREE.Mesh;
    Curve002_1: THREE.Mesh;
    Curve002_2: THREE.Mesh;
    Curve002_3: THREE.Mesh;
    Curve002_4: THREE.Mesh;
    Curve002_5: THREE.Mesh;
    Curve002_6: THREE.Mesh;
    Curve002_7: THREE.Mesh;
    Curve002_8: THREE.Mesh;
    Curve002_9: THREE.Mesh;
  };
  materials: {
    hgrau: THREE.MeshStandardMaterial;
    gruen: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
    ["braun.001"]: THREE.MeshStandardMaterial;
    ["gruen.001"]: THREE.MeshStandardMaterial;
    ["metall.010"]: THREE.MeshStandardMaterial;
    Lampe: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    Glas: THREE.MeshPhysicalMaterial;
    schwarz: THREE.MeshStandardMaterial;
    hbl: THREE.MeshStandardMaterial;
    rot: THREE.MeshStandardMaterial;
    ["fenster.001"]: THREE.MeshStandardMaterial;
    scheinwerfer: THREE.MeshStandardMaterial;
    ["hgrau.001"]: THREE.MeshStandardMaterial;
    ["graublau.001"]: THREE.MeshStandardMaterial;
    ["weiss.001"]: THREE.MeshStandardMaterial;
    ["NMHblau.001"]: THREE.MeshStandardMaterial;
    ["Lampe.001"]: THREE.MeshStandardMaterial;
    ["metall.001"]: THREE.MeshStandardMaterial;
    ["schwarz.001"]: THREE.MeshStandardMaterial;
    ["dgrau.001"]: THREE.MeshStandardMaterial;
    rueckleuchten: THREE.MeshStandardMaterial;
    ["NMHblau.002"]: THREE.MeshStandardMaterial;
    ["fenster.002"]: THREE.MeshStandardMaterial;
    ["graublau.002"]: THREE.MeshStandardMaterial;
    ["scheinwerfer.001"]: THREE.MeshStandardMaterial;
    Rueckleuchten: THREE.MeshStandardMaterial;
    ["schwarz.003"]: THREE.MeshStandardMaterial;
    ["Fahne.001"]: THREE.MeshStandardMaterial;
    ["hblaugrau.001"]: THREE.MeshStandardMaterial;
    ["hgrau.007"]: THREE.MeshStandardMaterial;
    ["braun.007"]: THREE.MeshStandardMaterial;
    ["braun.003"]: THREE.MeshStandardMaterial;
    ["gruen.005"]: THREE.MeshStandardMaterial;
    ["graublau.hell"]: THREE.MeshStandardMaterial;
    berge: THREE.MeshStandardMaterial;
    ["gruen.002"]: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
    weiss: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.006"]: THREE.MeshStandardMaterial;
    ["weiss.004"]: THREE.MeshStandardMaterial;
    ["NMHblau.003"]: THREE.MeshStandardMaterial;
    Feuer: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    Haare: THREE.MeshStandardMaterial;
    Haut: THREE.MeshStandardMaterial;
    jeans: THREE.MeshStandardMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["Pullover_rot.001"]: THREE.MeshStandardMaterial;
  };
};

export function Landschaft(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/landschaft.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Landebahn001.geometry}
        material={materials.hbl}
        position={[35.439, -0.425, -120.876]}
        rotation={[0, 0.137, 0]}
        scale={[12.554, 0.325, 90.274]}
      />
      <group
        position={[165.535, 2.714, -323.341]}
        rotation={[0, 0.338, 0]}
        scale={1.485}
      >
        <mesh geometry={nodes.Cube014.geometry} material={materials.rot} />
        <mesh
          geometry={nodes.Cube014_1.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube014_2.geometry}
          material={materials.scheinwerfer}
        />
        <mesh
          geometry={nodes.Cube014_3.geometry}
          material={materials["hgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube014_4.geometry}
          material={materials["graublau.001"]}
        />
      </group>
      <group
        position={[159.96, 4.199, -334.858]}
        rotation={[0, 0.334, 0]}
        scale={[0.717, 0.125, 0.717]}
      >
        <mesh
          geometry={nodes.Cylinder018.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.rot}
        />
        <mesh
          geometry={nodes.Cylinder018_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cylinder018_3.geometry}
          material={materials["hgrau.001"]}
        />
      </group>
      <group
        position={[155.55, 4.199, -347.59]}
        rotation={[0, 0.328, 0]}
        scale={[0.717, 0.125, 0.717]}
      >
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.rot}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["hgrau.001"]}
        />
      </group>
      <group
        position={[151.111, 4.199, -360.284]}
        rotation={[0, 0.326, 0]}
        scale={[0.717, 0.125, 0.717]}
      >
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.rot}
        />
        <mesh
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cylinder002_3.geometry}
          material={materials["hgrau.001"]}
        />
      </group>
      <group
        position={[136.119, 0.186, -338.093]}
        rotation={[0, 0.233, 0]}
        scale={[1.073, 1.073, 0.952]}
      >
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube015_1.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube015_2.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube015_3.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube015_4.geometry}
          material={materials["metall.001"]}
        />
        <mesh
          geometry={nodes.Cube015_5.geometry}
          material={materials["schwarz.001"]}
        />
      </group>
      <group
        position={[135.714, 2.355, -339.625]}
        rotation={[0, 0.233, 0]}
        scale={40.973}
      >
        <mesh
          geometry={nodes.Curve001.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Curve001_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Curve001_2.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Curve001_3.geometry}
          material={materials.rueckleuchten}
        />
        <mesh
          geometry={nodes.Curve001_4.geometry}
          material={materials["schwarz.001"]}
        />
      </group>
      <group
        position={[210.421, 0.393, -48.156]}
        rotation={[0, 0.257, 0]}
        scale={[0.941, 0.81, 1.516]}
      >
        <mesh
          geometry={nodes.Cube184.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube184_1.geometry}
          material={materials["fenster.002"]}
        />
        <mesh
          geometry={nodes.Cube184_2.geometry}
          material={materials["graublau.002"]}
        />
        <mesh
          geometry={nodes.Cube184_3.geometry}
          material={materials["scheinwerfer.001"]}
        />
        <mesh
          geometry={nodes.Cube184_4.geometry}
          material={materials.Rueckleuchten}
        />
        <mesh
          geometry={nodes.Cube184_5.geometry}
          material={materials["schwarz.003"]}
        />
      </group>
      <group
        position={[181.754, 1.496, -145.882]}
        rotation={[0, -0.408, 0]}
        scale={3.219}
      >
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Fahne.001"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["hblaugrau.001"]}
        />
      </group>
      <group
        position={[180.597, 1.496, -148.296]}
        rotation={[0, -0.491, 0]}
        scale={3.219}
      >
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Fahne.001"]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["hblaugrau.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Gleise002.geometry}
        material={materials["hgrau.007"]}
        position={[174.288, 0.305, -294.384]}
        rotation={[0, 0.33, 0]}
        scale={[0.217, 0.263, 1.236]}
      />
      <mesh
        geometry={nodes.Bahndamm002.geometry}
        material={materials["braun.007"]}
        position={[174.239, -1.504, -297.515]}
        rotation={[0, 0.335, 0]}
        scale={1.822}
      />
      <group
        position={[179.188, -0.511, -138.838]}
        scale={[0.127, 0.391, 0.112]}
      >
        <mesh
          geometry={nodes.Cube025.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube025_1.geometry}
          material={materials["gruen.005"]}
        />
      </group>
      <group
        position={[177.22, 1.183, -140.629]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.88, 1.088, 0.88]}
      >
        <mesh
          geometry={nodes.Cube602.geometry}
          material={materials["gruen.005"]}
        />
        <mesh
          geometry={nodes.Cube602_1.geometry}
          material={materials["braun.003"]}
        />
      </group>
      <group
        position={[155.047, 1.293, -145.357]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.944, 1.167, 0.944]}
      >
        <mesh
          geometry={nodes.Cube602.geometry}
          material={materials["gruen.005"]}
        />
        <mesh
          geometry={nodes.Cube602_1.geometry}
          material={materials["braun.003"]}
        />
      </group>
      <group
        position={[179.94, -0.511, -140.911]}
        scale={[0.127, 0.391, 0.112]}
      >
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube026_1.geometry}
          material={materials["gruen.005"]}
        />
      </group>
      <group position={[170.407, -0.511, -179]} scale={[0.127, 0.391, 0.112]}>
        <mesh
          geometry={nodes.Cube055.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube055_1.geometry}
          material={materials["gruen.005"]}
        />
      </group>
      <group
        position={[175.754, 0.477, -168.198]}
        scale={[1.484, 0.494, 1.484]}
      >
        <mesh
          geometry={nodes.Cylinder094.geometry}
          material={materials["gruen.005"]}
        />
        <mesh
          geometry={nodes.Cylinder094_1.geometry}
          material={materials["braun.003"]}
        />
      </group>
      <group
        position={[129.04, 6.165, -271.622]}
        scale={[375.463, 241.675, 375.463]}
      >
        <mesh
          geometry={nodes.Plane009_1.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh geometry={nodes.Plane009_2.geometry} material={materials.berge} />
      </group>
      <mesh
        geometry={nodes.Plane010.geometry}
        material={materials["gruen.002"]}
        position={[136.138, -0.895, -272.354]}
        scale={375.463}
      />
      <mesh
        geometry={nodes.himmel.geometry}
        material={materials.NMHblau}
        position={[-200, 178.493, 100]}
        scale={[-560.809, 350, -1200]}
      />
      <group
        position={[159.056, 0.479, -139.114]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.044}
      >
        <mesh
          geometry={nodes.Cylinder051.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cylinder051_1.geometry}
          material={materials.weiss}
        />
        <mesh
          geometry={nodes.Cylinder051_2.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder051_3.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cylinder051_4.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Baum3001.geometry}
        material={materials["gruen.005"]}
        position={[154.675, -0.287, -168.435]}
        scale={[0.127, 0.391, 0.112]}
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials.hbl}
        position={[189.469, -0.922, -132.766]}
      />
      <group position={[152.985, 0.549, -168.82]} scale={[0.127, 0.391, 0.112]}>
        <mesh
          geometry={nodes.Cube745.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube745_1.geometry}
          material={materials["gruen.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube363.geometry}
        material={materials["Material.008"]}
        position={[151.551, -0.776, -167.257]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.244, 0.22, 0.309]}
      />
      <mesh
        geometry={nodes.Cube364.geometry}
        material={materials["Material.008"]}
        position={[151.241, -0.776, -166.431]}
        rotation={[0, -1.571, 0]}
        scale={[0.275, 0.22, 0.309]}
      />
      <group
        position={[82.291, 32.203, -135.975]}
        rotation={[-Math.PI, 1.114, -Math.PI]}
        scale={177.263}
      >
        <mesh
          geometry={nodes.Curve002.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Curve002_1.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Curve002_2.geometry}
          material={materials["braun.003"]}
        />
        <mesh geometry={nodes.Curve002_3.geometry} material={materials.Feuer} />
        <mesh
          geometry={nodes.Curve002_4.geometry}
          material={materials["Material.015"]}
        />
        <mesh geometry={nodes.Curve002_5.geometry} material={materials.Haare} />
        <mesh geometry={nodes.Curve002_6.geometry} material={materials.Haut} />
        <mesh geometry={nodes.Curve002_7.geometry} material={materials.jeans} />
        <mesh
          geometry={nodes.Curve002_8.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Curve002_9.geometry}
          material={materials["Pullover_rot.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Zufahrtsstrasse001.geometry}
        material={materials.hgrau}
        position={[93.254, -1.149, -134.916]}
        rotation={[Math.PI, -0.094, Math.PI]}
        scale={[-5.244, -0.32, -5.885]}
      />
      <mesh
        geometry={nodes.gruene_Insel1001.geometry}
        material={materials.gruen}
        position={[108.434, -0.33, -94.84]}
        rotation={[-Math.PI, 0.355, -Math.PI]}
        scale={[-5.244, -0.32, -5.885]}
      />
      <mesh
        geometry={nodes.gruene_Insel2001.geometry}
        material={materials.gruen}
        position={[96.498, -0.371, -172.883]}
        rotation={[-Math.PI, 0.338, -Math.PI]}
        scale={[-5.455, -0.231, -3.567]}
      />
      <mesh
        geometry={nodes.Hauptstrasse001.geometry}
        material={materials.hblaugrau}
        position={[185.698, -0.854, -156.91]}
        rotation={[Math.PI, -0.237, Math.PI]}
        scale={[-5.873, -0.167, -3.323]}
      />
      <group
        position={[75.751, -0.037, -311.913]}
        rotation={[0, 1.496, 0]}
        scale={[0.277, 0.851, 0.244]}
      >
        <mesh
          geometry={nodes.Cube477.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube477_1.geometry}
          material={materials["gruen.001"]}
        />
      </group>
      <group
        position={[212.778, -0.848, -79.613]}
        rotation={[0, 0.248, 0]}
        scale={0.167}
      >
        <mesh
          geometry={nodes.Cube136.geometry}
          material={materials["metall.010"]}
        />
        <mesh geometry={nodes.Cube136_1.geometry} material={materials.Lampe} />
      </group>
      <mesh
        geometry={nodes.Cube360.geometry}
        material={materials["Material.008"]}
        position={[103.584, -0.393, -174.609]}
        rotation={[0, 1.571, 0]}
        scale={[0.403, 0.251, 0.403]}
      />
      <mesh
        geometry={nodes.Cube361.geometry}
        material={materials["Material.008"]}
        position={[101.212, -0.393, -175.418]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.403, 0.251, 0.403]}
      />
      <mesh
        geometry={nodes.Cube362.geometry}
        material={materials["Material.008"]}
        position={[102.805, -0.393, -175.512]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.403, 0.251, 0.403]}
      />
      <group
        position={[102.36, -0.393, -173.935]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.273}
      >
        <mesh
          geometry={nodes.Cube756.geometry}
          material={materials["Material.008"]}
        />
        <mesh geometry={nodes.Cube756_1.geometry} material={materials.Glas} />
      </group>
      <group position={[103.23, -0.533, -175.2]} scale={1.973}>
        <mesh geometry={nodes.Cube760.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube760_1.geometry} material={materials.Glas} />
      </group>
    </group>
  );
}

useGLTF.preload("/landschaft.glb");
