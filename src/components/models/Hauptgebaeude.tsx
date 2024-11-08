import * as THREE from "three";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import { useState } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Cube707: THREE.Mesh;
    Cube707_1: THREE.Mesh;
    Cube707_2: THREE.Mesh;
    Cube661: THREE.Mesh;
    Cube661_1: THREE.Mesh;
    Cube661_2: THREE.Mesh;
    Cube662: THREE.Mesh;
    Cube662_1: THREE.Mesh;
    Cube662_2: THREE.Mesh;
    Cube742: THREE.Mesh;
    Cube742_1: THREE.Mesh;
    Cube742_2: THREE.Mesh;
    Cube668: THREE.Mesh;
    Cube668_1: THREE.Mesh;
    Cube668_2: THREE.Mesh;
    Cube790: THREE.Mesh;
    Cube790_1: THREE.Mesh;
    Cube790_2: THREE.Mesh;
    Cube804: THREE.Mesh;
    Cube804_1: THREE.Mesh;
    Cube804_2: THREE.Mesh;
    Cube731: THREE.Mesh;
    Cube731_1: THREE.Mesh;
    Cube732: THREE.Mesh;
    Cube732_1: THREE.Mesh;
    Cube158: THREE.Mesh;
    Cube158_1: THREE.Mesh;
    Cube158_2: THREE.Mesh;
    Cube161: THREE.Mesh;
    Cube161_1: THREE.Mesh;
    Cube161_2: THREE.Mesh;
    Cube162: THREE.Mesh;
    Cube162_1: THREE.Mesh;
    Cube162_2: THREE.Mesh;
    Cube201: THREE.Mesh;
    Cube201_1: THREE.Mesh;
    Cube201_2: THREE.Mesh;
    Cube206: THREE.Mesh;
    Cube206_1: THREE.Mesh;
    Cube206_2: THREE.Mesh;
    Cube209: THREE.Mesh;
    Cube209_1: THREE.Mesh;
    Cube209_2: THREE.Mesh;
    Cube210: THREE.Mesh;
    Cube210_1: THREE.Mesh;
    Cube210_2: THREE.Mesh;
    Cube211: THREE.Mesh;
    Cube211_1: THREE.Mesh;
    Cube211_2: THREE.Mesh;
    Cube212: THREE.Mesh;
    Cube212_1: THREE.Mesh;
    Cube212_2: THREE.Mesh;
    Cube213: THREE.Mesh;
    Cube213_1: THREE.Mesh;
    Cube213_2: THREE.Mesh;
    Cube214: THREE.Mesh;
    Cube214_1: THREE.Mesh;
    Cube214_2: THREE.Mesh;
    Cube215: THREE.Mesh;
    Cube215_1: THREE.Mesh;
    Cube215_2: THREE.Mesh;
    Cube216: THREE.Mesh;
    Cube216_1: THREE.Mesh;
    Cube216_2: THREE.Mesh;
    Cube217: THREE.Mesh;
    Cube217_1: THREE.Mesh;
    Cube217_2: THREE.Mesh;
    Cube218: THREE.Mesh;
    Cube218_1: THREE.Mesh;
    Cube218_2: THREE.Mesh;
    Cube219_1: THREE.Mesh;
    Cube219_2: THREE.Mesh;
    Cube219_3: THREE.Mesh;
    Cube220: THREE.Mesh;
    Cube220_1: THREE.Mesh;
    Cube220_2: THREE.Mesh;
    Cube221: THREE.Mesh;
    Cube221_1: THREE.Mesh;
    Cube221_2: THREE.Mesh;
    Cube223_1: THREE.Mesh;
    Cube223_2: THREE.Mesh;
    Cube223_3: THREE.Mesh;
    Cube224: THREE.Mesh;
    Cube224_1: THREE.Mesh;
    Cube224_2: THREE.Mesh;
    Cube248: THREE.Mesh;
    Cube248_1: THREE.Mesh;
    Cube251: THREE.Mesh;
    Cube251_1: THREE.Mesh;
    Cube258: THREE.Mesh;
    Cube258_1: THREE.Mesh;
    Cube258_2: THREE.Mesh;
    Cube240: THREE.Mesh;
    Cube240_1: THREE.Mesh;
    Cube240_2: THREE.Mesh;
    Cube256: THREE.Mesh;
    Cube256_1: THREE.Mesh;
    Cube256_2: THREE.Mesh;
    Cube261: THREE.Mesh;
    Cube261_1: THREE.Mesh;
    Cube261_2: THREE.Mesh;
    Cube262: THREE.Mesh;
    Cube262_1: THREE.Mesh;
    Cube262_2: THREE.Mesh;
    Cube290: THREE.Mesh;
    Cube290_1: THREE.Mesh;
    Cube290_2: THREE.Mesh;
    Cube294: THREE.Mesh;
    Cube294_1: THREE.Mesh;
    Cube294_2: THREE.Mesh;
    Cube295: THREE.Mesh;
    Cube295_1: THREE.Mesh;
    Cube295_2: THREE.Mesh;
    Cube047: THREE.Mesh;
    Cube047_1: THREE.Mesh;
    Cube047_2: THREE.Mesh;
    Cube106_1: THREE.Mesh;
    Cube106_2: THREE.Mesh;
    Cube106_3: THREE.Mesh;
    Cube241: THREE.Mesh;
    Cube241_1: THREE.Mesh;
    Cube241_2: THREE.Mesh;
    Cube190: THREE.Mesh;
    Cube190_1: THREE.Mesh;
    Cube190_2: THREE.Mesh;
    Cube450: THREE.Mesh;
    Cube450_1: THREE.Mesh;
    Cube450_2: THREE.Mesh;
    Cube125: THREE.Mesh;
    Cube125_1: THREE.Mesh;
    Cube125_2: THREE.Mesh;
    Cube577: THREE.Mesh;
    Cube577_1: THREE.Mesh;
    Cube577_2: THREE.Mesh;
    Cube578: THREE.Mesh;
    Cube578_1: THREE.Mesh;
    Cube578_2: THREE.Mesh;
    Cube579: THREE.Mesh;
    Cube579_1: THREE.Mesh;
    Cube579_2: THREE.Mesh;
    Cube580: THREE.Mesh;
    Cube580_1: THREE.Mesh;
    Cube580_2: THREE.Mesh;
    Cube101: THREE.Mesh;
    Cube101_1: THREE.Mesh;
    Cube101_2: THREE.Mesh;
    Cube104: THREE.Mesh;
    Cube104_1: THREE.Mesh;
    Cube104_2: THREE.Mesh;
    Cube599: THREE.Mesh;
    Logo: THREE.Mesh;
    logo2: THREE.Mesh;
    logo3: THREE.Mesh;
    LogoGROß: THREE.Mesh;
    Cube344: THREE.Mesh;
  };
  materials: {
    ["weiss.001"]: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    graublau: THREE.MeshStandardMaterial;
    ["fenster.außen"]: THREE.MeshBasicMaterial;
    schwarz: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
  };
};

export function Hauptgebaeude(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/hauptgebaeude.glb") as GLTFResult;
  // MODEL HOVER SHOW POINTER CUSOR
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  // GLOBAL STORE
  const { entryAnimation } = useSnapshot(store);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube599.geometry}
        material={materials.hblaugrau}
        position={[112.047, 3.108, -162.084]}
        scale={[1.174, 0.133, 13.054]}
      />
      <mesh
        geometry={nodes.Logo.geometry}
        material={materials.NMHblau}
        position={[142.355, 2.702, -133.65]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={105.248}
      />
      <mesh
        geometry={nodes.logo2.geometry}
        material={materials.NMHblau}
        position={[148.269, 2.702, -187.13]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={105.248}
      />
      <mesh
        geometry={nodes.logo3.geometry}
        material={materials.NMHblau}
        position={[142.355, 2.702, -133.65]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={105.248}
      />
      <mesh
        geometry={nodes.LogoGROß.geometry}
        material={materials.NMHblau}
        position={[162.777, 5.085, -158.207]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={105.248}
      />
      <mesh
        geometry={nodes.Cube344.geometry}
        material={materials.hblaugrau}
        position={[105.483, 3.108, -185.136]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.174, 0.133, 13.054]}
      />
      <group
        position={[105.139, 0.96, -147.344]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.207, 1.769, 1.605]}
      >
        <mesh
          geometry={nodes.Cube707.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube707_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube707_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[142.359, 0.913, -134.001]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.286, 0.996, 0.542]}
      >
        <mesh geometry={nodes.Cube661.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube661_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube661_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[143.448, 0.537, -134.053]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.453, 1.372, 0.552]}
      >
        <mesh geometry={nodes.Cube662.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube662_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube662_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[130.23, 0.553, -134.053]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.453, 1.359, 0.552]}
      >
        <mesh geometry={nodes.Cube742.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube742_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube742_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.258, 0.987, -159.882]}
        scale={[0.089, 1.769, 1.605]}
      >
        <mesh
          geometry={nodes.Cube668.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube668_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube668_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[107.107, 0.96, -186.634]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.207, 1.769, 1.605]}
      >
        <mesh
          geometry={nodes.Cube790.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube790_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube790_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[95.573, 0.96, -186.634]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.207, 1.769, 1.605]}
      >
        <mesh
          geometry={nodes.Cube804.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube804_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube804_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[122.771, 0.095, -172.258]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.289, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube731.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube731_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[134.157, 0.096, -172.266]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.299, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube732.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube732_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[139.021, 0.913, -134.001]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.286, 0.996, 0.542]}
      >
        <mesh geometry={nodes.Cube158.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube158_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube158_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[129.16, 0.913, -134.001]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.286, 0.996, 0.542]}
      >
        <mesh geometry={nodes.Cube161.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube161_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube161_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[125.852, 0.913, -134.001]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.286, 0.996, 0.542]}
      >
        <mesh geometry={nodes.Cube162.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube162_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube162_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[148.123, 0.913, -134.001]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.286, 0.996, 0.542]}
      >
        <mesh geometry={nodes.Cube201.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube201_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube201_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.128, 0.706, -144.056]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.311, 0.786, 0.403]}
      >
        <mesh geometry={nodes.Cube206.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube206_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube206_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.114, 3.367, -144.066]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.318, 0.886, 0.403]}
      >
        <mesh geometry={nodes.Cube209.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube209_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube209_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.151, 0.633, -181.852]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.306, 0.786, 0.441]}
      >
        <mesh geometry={nodes.Cube210.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube210_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube210_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.151, 3.367, -181.847]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.321, 0.886, 0.439]}
      >
        <mesh geometry={nodes.Cube211.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube211_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube211_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.108, 0.649, -169.82]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.786, 0.439]}
      >
        <mesh geometry={nodes.Cube212.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube212_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube212_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.108, 3.367, -169.823]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.312, 0.886, 0.439]}
      >
        <mesh geometry={nodes.Cube213.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube213_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube213_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[102.092, 0.424, -133.975]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.666, 1.22, 0.552]}
      >
        <mesh geometry={nodes.Cube214.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube214_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube214_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[102.092, 0.469, -147.373]}
        rotation={[0, -1.57, 0]}
        scale={[0.501, 1.22, 0.552]}
      >
        <mesh geometry={nodes.Cube215.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube215_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube215_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.173, 0.758, -149.087]}
        scale={[0.398, 0.886, 0.433]}
      >
        <mesh geometry={nodes.Cube216.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube216_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube216_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.227, 0.438, -157.326]}
        scale={[0.562, 1.209, 0.552]}
      >
        <mesh geometry={nodes.Cube217.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube217_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube217_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.192, 0.758, -162.023]}
        scale={[0.398, 0.886, 0.433]}
      >
        <mesh geometry={nodes.Cube218.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube218_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube218_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.192, 0.758, -168.941]}
        scale={[0.398, 0.886, 0.433]}
      >
        <mesh
          geometry={nodes.Cube219_1.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube219_2.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube219_3.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.226, 0.438, -167.632]}
        scale={[0.562, 1.209, 0.552]}
      >
        <mesh geometry={nodes.Cube220.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube220_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube220_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.184, 0.758, -180.378]}
        scale={[0.384, 0.886, 0.433]}
      >
        <mesh geometry={nodes.Cube221.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube221_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube221_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[122.842, 0.913, -187.064]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.544, 0.996, 0.438]}
      >
        <mesh
          geometry={nodes.Cube223_1.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube223_2.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube223_3.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[143.455, 0.395, -187.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.769, 1.23, 0.552]}
      >
        <mesh geometry={nodes.Cube224.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube224_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube224_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[143.529, 2.678, -172.289]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.299, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube248.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube248_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[143.47, 0.102, -172.277]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.273, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube251.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube251_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[144.099, 3.304, -186.641]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.137, 0.996, 0.507]}
      >
        <mesh geometry={nodes.Cube258.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube258_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube258_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[156.194, 1.044, -151.588]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.292, 1.872, 0.809]}
      >
        <mesh geometry={nodes.Cube240.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube240_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube240_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[156.194, 4.718, -151.588]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.292, 1.872, 0.809]}
      >
        <mesh geometry={nodes.Cube256.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube256_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube256_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[156.194, 1.044, -162.41]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.351, -1.872, -0.809]}
      >
        <mesh geometry={nodes.Cube261.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube261_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube261_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[156.194, 4.718, -162.41]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.351, -1.872, -0.809]}
      >
        <mesh geometry={nodes.Cube262.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube262_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube262_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[164.512, 0.511, -151.266]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.316, -1.322, -0.551]}
      >
        <mesh geometry={nodes.Cube290.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube290_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube290_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[157.104, 0.489, -168.844]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.464, -1.322, -0.599]}
      >
        <mesh geometry={nodes.Cube294.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube294_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube294_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[164.512, 3.246, -151.264]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.316, -1.322, -0.552]}
      >
        <mesh geometry={nodes.Cube295.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube295_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube295_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[160.673, 0.496, -150.413]}
        rotation={[-Math.PI, 1.567, 0]}
        scale={[-0.292, -1.322, -0.724]}
      >
        <mesh geometry={nodes.Cube047.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube047_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube047_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[164.522, 0.511, -163.723]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.316, -1.322, -0.551]}
      >
        <mesh
          geometry={nodes.Cube106_1.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube106_2.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube106_3.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[160.619, 0.481, -169.737]}
        rotation={[0, -1.566, -Math.PI]}
        scale={[-0.325, -1.322, -0.588]}
      >
        <mesh geometry={nodes.Cube241.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube241_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube241_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.236, 0.996, -177.877]}
        scale={[0.123, 1.769, 1.605]}
      >
        <mesh
          geometry={nodes.Cube190.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube190_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube190_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.184, 0.758, -173.697]}
        scale={[0.384, 0.886, 0.433]}
      >
        <mesh geometry={nodes.Cube450.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube450_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube450_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        onClick={entryAnimation}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        position={[164.54, 0.457, -160.186]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.682, 1.244, 0.074]}
      >
        <mesh geometry={nodes.Cube125.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube125_1.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube125_2.geometry}
          material={materials["fenster.außen"]}
        />
      </group>
      <group
        position={[149.321, 0.199, -148.834]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.769, 1.23, 0.552]}
      >
        <mesh geometry={nodes.Cube577.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube577_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube577_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.303, 0.268, -139.78]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.769, 1.23, 1.091]}
      >
        <mesh geometry={nodes.Cube578.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube578_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube578_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.128, 0.706, -138.396]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.311, 0.786, 0.403]}
      >
        <mesh geometry={nodes.Cube579.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube579_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube579_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[149.321, 0.272, -182.868]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.769, 1.23, 0.552]}
      >
        <mesh geometry={nodes.Cube580.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube580_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube580_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[102.832, 1.113, -186.519]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.384, 0.701, 0.433]}
      >
        <mesh geometry={nodes.Cube101.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube101_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube101_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[104.048, 0.438, -186.576]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.562, 1.209, 0.552]}
      >
        <mesh geometry={nodes.Cube104.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube104_1.geometry}
          material={materials["fenster.außen"]}
        />
        <mesh
          geometry={nodes.Cube104_2.geometry}
          material={materials.fenster}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hauptgebaeude.glb");
