import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Cube567: THREE.Mesh;
    Cube567_1: THREE.Mesh;
    Cube567_2: THREE.Mesh;
    Cube927: THREE.Mesh;
    Cube927_1: THREE.Mesh;
    Cube927_2: THREE.Mesh;
    Cube928: THREE.Mesh;
    Cube928_1: THREE.Mesh;
    Cube928_2: THREE.Mesh;
    Cube929: THREE.Mesh;
    Cube929_1: THREE.Mesh;
    Cube929_2: THREE.Mesh;
    Cube930: THREE.Mesh;
    Cube930_1: THREE.Mesh;
    Cube930_2: THREE.Mesh;
    Cube931: THREE.Mesh;
    Cube931_1: THREE.Mesh;
    Cube931_2: THREE.Mesh;
    Cube739: THREE.Mesh;
    Cube739_1: THREE.Mesh;
    Cube739_2: THREE.Mesh;
    NMH_Logo: THREE.Mesh;
    Cube107: THREE.Mesh;
    Cube107_1: THREE.Mesh;
    Cube107_2: THREE.Mesh;
    NMH_Logo001: THREE.Mesh;
    Cube108: THREE.Mesh;
    Cube108_1: THREE.Mesh;
    Cube110: THREE.Mesh;
    Cube110_1: THREE.Mesh;
    Cube111: THREE.Mesh;
    Cube111_1: THREE.Mesh;
    Cube102: THREE.Mesh;
    Cube102_1: THREE.Mesh;
    Cube102_2: THREE.Mesh;
    Cube102_3: THREE.Mesh;
    Cube102_4: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder015_1: THREE.Mesh;
    Cylinder015_2: THREE.Mesh;
    Cube078: THREE.Mesh;
    Cube079: THREE.Mesh;
    Cube114: THREE.Mesh;
    Cube114_1: THREE.Mesh;
    Cube116: THREE.Mesh;
    Cube116_1: THREE.Mesh;
    Cube083: THREE.Mesh;
    Cube118: THREE.Mesh;
    Cube118_1: THREE.Mesh;
    Cube118_2: THREE.Mesh;
    Cube119: THREE.Mesh;
    Cube119_1: THREE.Mesh;
    Cube119_2: THREE.Mesh;
    Cube120: THREE.Mesh;
    Cube120_1: THREE.Mesh;
    Cube644: THREE.Mesh;
    Cube644_1: THREE.Mesh;
    Cube122: THREE.Mesh;
    Cube122_1: THREE.Mesh;
    Cube124: THREE.Mesh;
    Cube124_1: THREE.Mesh;
    Cube198: THREE.Mesh;
    Cube198_1: THREE.Mesh;
    Cube198_2: THREE.Mesh;
    Cube621: THREE.Mesh;
    Cube621_1: THREE.Mesh;
    Cube049: THREE.Mesh;
    Cube049_1: THREE.Mesh;
    Cube049_2: THREE.Mesh;
    Cube175: THREE.Mesh;
    Cube175_1: THREE.Mesh;
    Cube620: THREE.Mesh;
    Cube620_1: THREE.Mesh;
    Cube620_2: THREE.Mesh;
    Cube620_3: THREE.Mesh;
    Cube622: THREE.Mesh;
    Cube622_1: THREE.Mesh;
    Cube622_2: THREE.Mesh;
    Cube622_3: THREE.Mesh;
    Cube043: THREE.Mesh;
    Cube043_1: THREE.Mesh;
    Cube043_2: THREE.Mesh;
    Cube043_3: THREE.Mesh;
    Cube170: THREE.Mesh;
    Cube170_1: THREE.Mesh;
    Cube170_2: THREE.Mesh;
    Cube170_3: THREE.Mesh;
    Cube170_4: THREE.Mesh;
    Cube170_5: THREE.Mesh;
    Cube170_6: THREE.Mesh;
    Cube077_1: THREE.Mesh;
    Cube077_2: THREE.Mesh;
    Cube077_3: THREE.Mesh;
    Cube078_1: THREE.Mesh;
    Cube078_2: THREE.Mesh;
    Cube078_3: THREE.Mesh;
    Cube563: THREE.Mesh;
    Cube563_1: THREE.Mesh;
    Cube613: THREE.Mesh;
    Cube613_1: THREE.Mesh;
    Cube615: THREE.Mesh;
    Cube615_1: THREE.Mesh;
    Cube616: THREE.Mesh;
    Cube616_1: THREE.Mesh;
    Cube616_2: THREE.Mesh;
    Cube619: THREE.Mesh;
    Cube619_1: THREE.Mesh;
    Cube619_2: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder074: THREE.Mesh;
    Cylinder075: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Plane006: THREE.Mesh;
    Cube761: THREE.Mesh;
    Cube761_1: THREE.Mesh;
    Cube761_2: THREE.Mesh;
    Cube761_3: THREE.Mesh;
    Cube761_4: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube314: THREE.Mesh;
    Cube314_1: THREE.Mesh;
    Cube314_2: THREE.Mesh;
    Cube085: THREE.Mesh;
    Cube085_1: THREE.Mesh;
    Cube085_2: THREE.Mesh;
    Cube109: THREE.Mesh;
    Cube109_1: THREE.Mesh;
    Cube109_2: THREE.Mesh;
    Cube300: THREE.Mesh;
    Cube300_1: THREE.Mesh;
    Cube303: THREE.Mesh;
    Cube303_1: THREE.Mesh;
    Cube304: THREE.Mesh;
    Cube304_1: THREE.Mesh;
    Cube305: THREE.Mesh;
    Cube305_1: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube010_1: THREE.Mesh;
    Cube010_2: THREE.Mesh;
    Cube010_3: THREE.Mesh;
    Cube291_1: THREE.Mesh;
    Cube291_2: THREE.Mesh;
    Cube274: THREE.Mesh;
    Cube274_1: THREE.Mesh;
    Cube286: THREE.Mesh;
    Cube286_1: THREE.Mesh;
    Cube287: THREE.Mesh;
    Cube287_1: THREE.Mesh;
    Cube289: THREE.Mesh;
    Cube289_1: THREE.Mesh;
    Cube309: THREE.Mesh;
    Cube309_1: THREE.Mesh;
    Cube310: THREE.Mesh;
    Cube310_1: THREE.Mesh;
    Cube311: THREE.Mesh;
    Cube311_1: THREE.Mesh;
    Cube312: THREE.Mesh;
    Cube312_1: THREE.Mesh;
    Cube313: THREE.Mesh;
    Cube313_1: THREE.Mesh;
    Cube313_2: THREE.Mesh;
    Cube307: THREE.Mesh;
    Cube307_1: THREE.Mesh;
    Cylinder077: THREE.Mesh;
    Cylinder077_1: THREE.Mesh;
    Cube187: THREE.Mesh;
    Cube187_1: THREE.Mesh;
    Cube362: THREE.Mesh;
    Cube362_1: THREE.Mesh;
    Cube250: THREE.Mesh;
    Cube250_1: THREE.Mesh;
    Cube523: THREE.Mesh;
    Cube523_1: THREE.Mesh;
    Cube522: THREE.Mesh;
    Cube522_1: THREE.Mesh;
    Cube597: THREE.Mesh;
    Cube597_1: THREE.Mesh;
    Cube597_2: THREE.Mesh;
    Cube597_3: THREE.Mesh;
    Cube597_4: THREE.Mesh;
    Cube597_5: THREE.Mesh;
    Cube597_6: THREE.Mesh;
    Cube597_7: THREE.Mesh;
    Cube597_8: THREE.Mesh;
    Cube599: THREE.Mesh;
    Cube599_1: THREE.Mesh;
    Cube599_2: THREE.Mesh;
    Cube599_3: THREE.Mesh;
    Cube599_4: THREE.Mesh;
    Cube599_5: THREE.Mesh;
    Cube599_6: THREE.Mesh;
    Cube599_7: THREE.Mesh;
    Cube601: THREE.Mesh;
    Cube601_1: THREE.Mesh;
    Cube605: THREE.Mesh;
    Cube605_1: THREE.Mesh;
    Cube605_2: THREE.Mesh;
    Cube605_3: THREE.Mesh;
    Cube605_4: THREE.Mesh;
    Cube605_5: THREE.Mesh;
    Cube605_6: THREE.Mesh;
    Cube605_7: THREE.Mesh;
    Cube608: THREE.Mesh;
    Cube608_1: THREE.Mesh;
    Cube608_2: THREE.Mesh;
    Cube608_3: THREE.Mesh;
    Cube608_4: THREE.Mesh;
    Cube608_5: THREE.Mesh;
    Cube608_6: THREE.Mesh;
    Cube608_7: THREE.Mesh;
    Cube612: THREE.Mesh;
    Cube612_1: THREE.Mesh;
    Cube612_2: THREE.Mesh;
    Cube612_3: THREE.Mesh;
    Cube612_4: THREE.Mesh;
    Cube612_5: THREE.Mesh;
    Cube612_6: THREE.Mesh;
    Cube612_7: THREE.Mesh;
    Cube610: THREE.Mesh;
    Cube610_1: THREE.Mesh;
    Cube611: THREE.Mesh;
    Cube611_1: THREE.Mesh;
    Cube461: THREE.Mesh;
    Cube461_1: THREE.Mesh;
    Cube461_2: THREE.Mesh;
    Cube270: THREE.Mesh;
    Cube270_1: THREE.Mesh;
    Cube270_2: THREE.Mesh;
    Cube270_3: THREE.Mesh;
    Cube270_4: THREE.Mesh;
    Cube270_5: THREE.Mesh;
    Cube332: THREE.Mesh;
    Cube332_1: THREE.Mesh;
    Cube333: THREE.Mesh;
    Cube333_1: THREE.Mesh;
    Cube333_2: THREE.Mesh;
    Untitled032: THREE.Mesh;
    Untitled032_1: THREE.Mesh;
    Cube346: THREE.Mesh;
    Cube346_1: THREE.Mesh;
    Cube346_2: THREE.Mesh;
    Cube346_3: THREE.Mesh;
    Cube346_4: THREE.Mesh;
    Cube346_5: THREE.Mesh;
    Cube924: THREE.Mesh;
    Cube924_1: THREE.Mesh;
    Cube925: THREE.Mesh;
    Cube925_1: THREE.Mesh;
    Cube925_2: THREE.Mesh;
    Untitled033: THREE.Mesh;
    Untitled033_1: THREE.Mesh;
    Cube237: THREE.Mesh;
    Cube237_1: THREE.Mesh;
    Cube237_2: THREE.Mesh;
    Cube237_3: THREE.Mesh;
    Cube237_4: THREE.Mesh;
    Cube237_5: THREE.Mesh;
    Cube237_6: THREE.Mesh;
    Cube237_7: THREE.Mesh;
    Cube237_8: THREE.Mesh;
    Cube091: THREE.Mesh;
    Cube091_1: THREE.Mesh;
    Cube091_2: THREE.Mesh;
    Cube091_3: THREE.Mesh;
    Cube091_4: THREE.Mesh;
    Cube091_5: THREE.Mesh;
    Cube092: THREE.Mesh;
    Cube092_1: THREE.Mesh;
    Cube098: THREE.Mesh;
    Cube098_1: THREE.Mesh;
    Cube098_2: THREE.Mesh;
    Untitled030: THREE.Mesh;
    Untitled030_1: THREE.Mesh;
    Cube093: THREE.Mesh;
    Cube093_1: THREE.Mesh;
    Cube093_2: THREE.Mesh;
    Cube093_3: THREE.Mesh;
    Cube093_4: THREE.Mesh;
    Cube093_5: THREE.Mesh;
    Cube094: THREE.Mesh;
    Cube094_1: THREE.Mesh;
    Cube105: THREE.Mesh;
    Cube105_1: THREE.Mesh;
    Cube105_2: THREE.Mesh;
    Untitled031: THREE.Mesh;
    Untitled031_1: THREE.Mesh;
    roof: THREE.Mesh;
    Cube325: THREE.Mesh;
    Cube325_1: THREE.Mesh;
    Cube763: THREE.Mesh;
    Cube763_1: THREE.Mesh;
    Cube763_2: THREE.Mesh;
    Cube568: THREE.Mesh;
    Cube568_1: THREE.Mesh;
    Cube568_2: THREE.Mesh;
    Cube568_3: THREE.Mesh;
    Cube568_4: THREE.Mesh;
    Cube568_5: THREE.Mesh;
    Cube568_6: THREE.Mesh;
    Cube568_7: THREE.Mesh;
    Cube568_8: THREE.Mesh;
    Cube569: THREE.Mesh;
    Cube569_1: THREE.Mesh;
    Cube569_2: THREE.Mesh;
    Cube569_3: THREE.Mesh;
    Cube569_4: THREE.Mesh;
    Cube569_5: THREE.Mesh;
    Cube569_6: THREE.Mesh;
    Cube569_7: THREE.Mesh;
    Cube569_8: THREE.Mesh;
  };
  materials: {
    Glas: THREE.MeshPhysicalMaterial;
    schwarz: THREE.MeshStandardMaterial;
    ["Trikot.SVHohentengenrot"]: THREE.MeshStandardMaterial;
    ["Trikot.SVHochberg"]: THREE.MeshStandardMaterial;
    ["Trikot.SVÖlkofen"]: THREE.MeshStandardMaterial;
    ["Trikot.WildWings"]: THREE.MeshStandardMaterial;
    ["Trikot.Razorbacks"]: THREE.MeshStandardMaterial;
    ["Trikot.NMH-Trikot"]: THREE.MeshStandardMaterial;
    ["Trikot.SVHohentengenrot.001"]: THREE.MeshStandardMaterial;
    ["NMHblau.001"]: THREE.MeshStandardMaterial;
    ["hblaugrau.001"]: THREE.MeshStandardMaterial;
    hbl: THREE.MeshStandardMaterial;
    Lampe: THREE.MeshStandardMaterial;
    weiss: THREE.MeshStandardMaterial;
    braun: THREE.MeshStandardMaterial;
    ["weiss.001"]: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    ["dgrau.001"]: THREE.MeshStandardMaterial;
    ["braun.001"]: THREE.MeshStandardMaterial;
    ["graublau.hell"]: THREE.MeshStandardMaterial;
    ["drot.001"]: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
    ["schwarz.022"]: THREE.MeshStandardMaterial;
    ["schwarz.001"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.002"]: THREE.MeshStandardMaterial;
    ["schwarz.008"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.005"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.001"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["schwarz.012"]: THREE.MeshStandardMaterial;
    ["Glas.001"]: THREE.MeshPhysicalMaterial;
    bild: THREE.MeshStandardMaterial;
    ["fenster.004"]: THREE.MeshStandardMaterial;
    ["Lampe.001"]: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["weiss.007"]: THREE.MeshStandardMaterial;
    ["braun.006"]: THREE.MeshStandardMaterial;
    ["gruen.003"]: THREE.MeshStandardMaterial;
    ["metall.007"]: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
    ["fenster.außen"]: THREE.MeshBasicMaterial;
    drot: THREE.MeshStandardMaterial;
    boden: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["schwarz.018"]: THREE.MeshStandardMaterial;
    Bildschirmleuchten: THREE.MeshStandardMaterial;
    ["weiss.008"]: THREE.MeshStandardMaterial;
    ["Glas.003"]: THREE.MeshPhysicalMaterial;
    brick: THREE.MeshStandardMaterial;
    Holz: THREE.MeshStandardMaterial;
    teppichboden: THREE.MeshStandardMaterial;
    ["weiss.004"]: THREE.MeshStandardMaterial;
    ["metall.002"]: THREE.MeshStandardMaterial;
    ["Plasti.weiß.001"]: THREE.MeshPhysicalMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["weiß-metall.001"]: THREE.MeshStandardMaterial;
    ["dblau.stoff.001"]: THREE.MeshStandardMaterial;
    ["schwarz.023"]: THREE.MeshStandardMaterial;
    ["weiss.006"]: THREE.MeshStandardMaterial;
    ["weiss.012"]: THREE.MeshStandardMaterial;
    ["braun.008"]: THREE.MeshStandardMaterial;
    ["gruen.006"]: THREE.MeshStandardMaterial;
    ["dblau.012"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    ["weiss.013"]: THREE.MeshStandardMaterial;
    ["braun.013"]: THREE.MeshStandardMaterial;
    ["schwarz.010"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["weiß-metall.005"]: THREE.MeshStandardMaterial;
    ["Rzo_Hair.001"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    jeans: THREE.MeshStandardMaterial;
    ["Rzo_Hair.002"]: THREE.MeshStandardMaterial;
    graublau: THREE.MeshStandardMaterial;
  };
};

export function Foyer(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/foyer.glb") as GLTFResult;

  const [buildingPicMap, medalPicMap, shirtPicMap] = useTexture([
    "/pictures/building.png",
    "/pictures/medal.png",
    "/pictures/shirt.png",
  ]);

  useEffect(() => {
    buildingPicMap.flipY = false;
    medalPicMap.flipY = false;
    shirtPicMap.flipY = false;
    buildingPicMap.needsUpdate = true;
    medalPicMap.needsUpdate = true;
    shirtPicMap.needsUpdate = true;
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.roof.geometry}
        material={materials.graublau}
        position={[160.807, 5.444, -160.098]}
        scale={[2.907, 3.157, 4.261]}
      />
      <group
        position={[159.948, 0.469, -162.002]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[0.351, 0.016, 0.466]}
      >
        <mesh
          geometry={nodes.Cube325.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube325_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[157.338, 0.811, -156.832]}
        rotation={[Math.PI, 0, 0.108]}
        scale={[-0.007, -0.173, -0.127]}
      >
        <mesh geometry={nodes.Cube763.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube763_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube763_2.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[163.082, 0.366, -156.801]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube568.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube568_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube568_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube568_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube568_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube568_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube568_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube568_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube568_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[162.104, 0.366, -153.847]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube569.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube569_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube569_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube569_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube569_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube569_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube569_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube569_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube569_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <mesh
        geometry={nodes.NMH_Logo.geometry}
        material={materials["NMHblau.001"]}
        position={[162.177, -0.457, -157.424]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={12.189}
      />
      <group
        position={[159.202, -0.401, -157.22]}
        scale={[0.758, 0.438, 0.347]}
      >
        <mesh
          geometry={nodes.Cube107.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh geometry={nodes.Cube107_1.geometry} material={materials.hbl} />
        <mesh geometry={nodes.Cube107_2.geometry} material={materials.Lampe} />
      </group>
      <mesh
        geometry={nodes.NMH_Logo001.geometry}
        material={materials["NMHblau.001"]}
        position={[159.254, -0.431, -157.396]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={12.189}
      />
      <group
        position={[161.525, -0.385, -156.457]}
        scale={[0.315, 0.412, 0.412]}
      >
        <mesh geometry={nodes.Cube108.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube108_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[162.88, -0.411, -154.225]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.332, 0.435, 1.319]}
      >
        <mesh geometry={nodes.Cube110.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube110_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[162.272, -0.139, -150.871]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.283, 0.712, 0.686]}
      >
        <mesh
          geometry={nodes.Cube111.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube111_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[159.471, -0.024, -155.903]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.328, 0.825, 0.368]}
      >
        <mesh
          geometry={nodes.Cube102.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube102_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube102_2.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube102_3.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh geometry={nodes.Cube102_4.geometry} material={materials.metall} />
      </group>
      <group
        position={[162.054, -0.723, -163.181]}
        rotation={[0, 1.505, 0]}
        scale={[0.966, 0.128, 0.966]}
      >
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cylinder015_2.geometry}
          material={materials.metall}
        />
      </group>
      <mesh
        geometry={nodes.Cube078.geometry}
        material={materials.hblaugrau}
        position={[158.826, 0.922, -161.035]}
        scale={[1.114, 1.432, 0.092]}
      />
      <mesh
        geometry={nodes.Cube079.geometry}
        material={materials.weiss}
        position={[161.161, 0.523, -166.948]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.389, 1.394, 0.1]}
      />
      <group
        position={[162.164, 0.591, -165.314]}
        scale={[0.787, 1.445, 0.092]}
      >
        <mesh geometry={nodes.Cube114.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube114_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[161.358, 0.581, -165.314]}
        scale={[1.175, 1.445, 0.092]}
      >
        <mesh geometry={nodes.Cube116.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube116_1.geometry} material={materials.Glas} />
      </group>
      <mesh
        geometry={nodes.Cube083.geometry}
        material={materials.hblaugrau}
        position={[159.895, 0.711, -154.693]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.284, 1.681, 0.092]}
      />
      <group
        position={[157.71, -0.152, -155.471]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.047, 0.688, 0.355]}
      >
        <mesh
          geometry={nodes.Cube118.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube118_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube118_2.geometry} material={materials.metall} />
      </group>
      <group
        position={[157.923, -0.312, -164.242]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.047, 0.688, 0.355]}
      >
        <mesh
          geometry={nodes.Cube119.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube119_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube119_2.geometry} material={materials.metall} />
      </group>
      <group
        position={[157.543, -0.043, -167.216]}
        scale={[0.217, 0.762, 0.482]}
      >
        <mesh
          geometry={nodes.Cube120.geometry}
          material={materials["schwarz.022"]}
        />
        <mesh geometry={nodes.Cube120_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[159.134, -0.12, -167.782]}
        scale={[0.538, 0.023, 0.916]}
      >
        <mesh geometry={nodes.Cube644.geometry} material={materials.braun} />
        <mesh
          geometry={nodes.Cube644_1.geometry}
          material={materials["schwarz.001"]}
        />
      </group>
      <group
        position={[159.026, 0.533, -169.448]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.412, 0.019, 0.745]}
      >
        <mesh
          geometry={nodes.Cube122.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube122_1.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[162.735, 0.512, -169.448]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.412, 0.019, 0.745]}
      >
        <mesh
          geometry={nodes.Cube124.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube124_1.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[162.884, -0.413, -157.221]}
        scale={[1.359, 0.438, 0.347]}
      >
        <mesh
          geometry={nodes.Cube198.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh geometry={nodes.Cube198_1.geometry} material={materials.hbl} />
        <mesh geometry={nodes.Cube198_2.geometry} material={materials.Lampe} />
      </group>
      <group
        position={[162.747, -0.12, -168.036]}
        scale={[0.538, 0.023, 0.916]}
      >
        <mesh geometry={nodes.Cube621.geometry} material={materials.braun} />
        <mesh
          geometry={nodes.Cube621_1.geometry}
          material={materials["schwarz.001"]}
        />
      </group>
      <group
        position={[159.899, 0.034, -151.316]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.062, 0.904, 0.467]}
      >
        <mesh
          geometry={nodes.Cube049.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube049_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube049_2.geometry} material={materials.metall} />
      </group>
      <group
        position={[162.054, 0.173, -157.143]}
        rotation={[0, 1.252, -Math.PI / 2]}
        scale={[0.163, 0.01, 0.258]}
      >
        <mesh
          geometry={nodes.Cube175.geometry}
          material={materials["schwarz.008"]}
        />
        <mesh
          geometry={nodes.Cube175_1.geometry}
          material={materials["Bildschirmleuchten.005"]}
        />
      </group>
      <group
        position={[159.325, -0.204, -167.426]}
        rotation={[-0.04, -0.481, -1.478]}
        scale={[0.108, 0.004, 0.136]}
      >
        <mesh
          geometry={nodes.Cube620.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube620_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube620_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube620_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[162.577, -0.204, -167.311]}
        rotation={[-3.055, -1.146, 1.76]}
        scale={[0.108, 0.004, 0.136]}
      >
        <mesh
          geometry={nodes.Cube622.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube622_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube622_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube622_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[159.644, 0.034, -157.278]}
        rotation={[0, 1.47, 0.249]}
        scale={[0.221, 0.088, 0.088]}
      >
        <mesh
          geometry={nodes.Cube043.geometry}
          material={materials["schwarz.012"]}
        />
        <mesh
          geometry={nodes.Cube043_1.geometry}
          material={materials["Glas.001"]}
        />
        <mesh geometry={nodes.Cube043_2.geometry} material={materials.bild} />
        <mesh
          geometry={nodes.Cube043_3.geometry}
          material={materials["fenster.004"]}
        />
      </group>
      <group position={[159.949, 0.504, -163.058]} scale={0.26}>
        <mesh geometry={nodes.Cube170.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube170_1.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube170_2.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube170_3.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube170_4.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube170_5.geometry}
          material={materials.fenster}
        />
        <mesh geometry={nodes.Cube170_6.geometry}>
          <meshStandardMaterial map={medalPicMap} />
        </mesh>
      </group>
      <group
        position={[163.189, 0.737, -151.033]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.226, 0.226, 0.456]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[163.329, 0.169, -157.469]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.174, 0.174, 0.352]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[158.49, 1.193, -155.993]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.226, 0.236, 0.456]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[161.839, 0.024, -154.21]}
        rotation={[0, 1.571, 0]}
        scale={[0.124, 0.124, 0.251]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[163.904, -0.812, -162.725]}
        scale={[0.144, 0.216, 0.291]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[146.443, 2.609, -177.195]}
        rotation={[Math.PI, -0.207, Math.PI]}
        scale={[-0.099, -0.106, -0.106]}
      >
        <mesh geometry={nodes.Cube563.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube563_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[159.166, -0.295, -167.679]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
        scale={[-0.099, -0.106, -0.106]}
      >
        <mesh geometry={nodes.Cube613.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube613_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[162.737, -0.295, -167.933]}
        rotation={[0, 1.563, 0]}
        scale={[-0.099, -0.106, -0.106]}
      >
        <mesh geometry={nodes.Cube615.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube615_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group position={[157.421, 0.062, -167.512]} scale={[0.191, 0.005, 0.37]}>
        <mesh geometry={nodes.Cube616.geometry} material={materials.NMHblau} />
        <mesh geometry={nodes.Cube616_1.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube616_2.geometry}
          material={materials["fenster.außen"]}
        />
      </group>
      <group
        position={[162.71, -0.192, -167.705]}
        rotation={[0, 1.505, 0]}
        scale={[0.191, 0.005, 0.37]}
      >
        <mesh geometry={nodes.Cube619.geometry} material={materials.NMHblau} />
        <mesh geometry={nodes.Cube619_1.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube619_2.geometry}
          material={materials["fenster.außen"]}
        />
      </group>
      <group position={[162.572, 0.22, -157.251]} scale={-0.036}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials.metall}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder074.geometry}
        material={materials.Glas}
        position={[157.444, -0.001, -167.357]}
        rotation={[0, -0.281, 0]}
        scale={[0.032, 0.043, 0.032]}
      />
      <mesh
        geometry={nodes.Cylinder075.geometry}
        material={materials.Glas}
        position={[162.755, -0.256, -167.903]}
        rotation={[0, 0.94, 0]}
        scale={[0.032, 0.043, 0.032]}
      />
      <group
        position={[162.115, 0.025, -157.397]}
        rotation={[0, 1.508, 0]}
        scale={[0.08, 0.006, 0.106]}
      >
        <mesh
          geometry={nodes.Cube017.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube017_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane006.geometry}
        material={materials.boden}
        position={[159.497, -0.817, -159.674]}
      />
      <group
        position={[159.949, 0.417, -164.246]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.495}
      >
        <mesh geometry={nodes.Cube761.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube761_1.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube761_2.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube761_3.geometry}
          material={materials.fenster}
        />
        <mesh geometry={nodes.Cube761_4.geometry}>
          <meshStandardMaterial map={buildingPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.513, -152.445]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube567.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube567_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube567_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.515, -153.555]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube927.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube927_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube927_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.514, -154.107]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube928.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube928_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube928_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.51, -155.205]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube929.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube929_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube929_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.517, -154.653]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube930.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube930_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube930_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.514, -155.752]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube931.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube931_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube931_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[159.961, 0.513, -153.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <mesh geometry={nodes.Cube739.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube739_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube739_2.geometry}>
          <meshStandardMaterial map={shirtPicMap} />
        </mesh>
      </group>
      <group
        position={[162.619, 1.733, -151.097]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.033, 0.03, 0.151]}
      >
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group
        position={[157.289, 3.531, -155.361]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[0.333, 0.015, 0.443]}
      >
        <mesh
          geometry={nodes.Cube325.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube325_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[157.289, 2.948, -155.091]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[0.29, 0.013, 0.386]}
      >
        <mesh
          geometry={nodes.Cube325.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube325_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[162.947, 3.692, -153.358]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.368, 0.017, 0.49]}
      >
        <mesh
          geometry={nodes.Cube325.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube325_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[162.008, 2.969, -163.13]}
        rotation={[0, 1.571, 0]}
        scale={[0.201, 0.201, 0.405]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[158.928, 2.541, -169.377]}
        rotation={[Math.PI, -0.476, Math.PI]}
        scale={[0.176, 0.176, 0.356]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[163.767, 2.807, -153.607]}
        rotation={[0, 1.571, 0]}
        scale={[0.226, 0.226, 0.456]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[159.223, 2.845, -161.524]}
        rotation={[0, -0.684, 0]}
        scale={[0.156, 0.156, 0.315]}
      >
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[162.72, 2.841, -169.479]}
        rotation={[0, -1.571, 0]}
        scale={[0.171, 0.171, 0.345]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[162.122, 2.824, -150.701]}
        rotation={[0, 1.571, 0]}
        scale={[0.152, 0.152, 0.308]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[162.405, 2.832, -156.88]}
        rotation={[0, -1.571, 0]}
        scale={[0.193, 0.193, 0.391]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[163.201, 2.584, -162.708]}
        rotation={[0, -1.571, 0]}
        scale={[0.162, 0.162, 0.328]}
      >
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_3.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[161.267, 3.638, -152.343]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.814, 1.642, 0.1]}
      >
        <mesh
          geometry={nodes.Cube300.geometry}
          material={materials["weiss.008"]}
        />
        <mesh
          geometry={nodes.Cube300_1.geometry}
          material={materials["Glas.003"]}
        />
      </group>
      <group
        position={[163.072, 3.56, -153.833]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.513, 1.508, 0.035]}
      >
        <mesh geometry={nodes.Cube303.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube303_1.geometry} material={materials.Glas} />
      </group>
      <group position={[158.452, 3.061, -151.324]} scale={[1.13, 1.081, 1.156]}>
        <mesh geometry={nodes.Cube304.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube304_1.geometry} material={materials.brick} />
      </group>
      <group
        position={[159.801, 3.747, -155.184]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.28, 1.731, 0.1]}
      >
        <mesh
          geometry={nodes.Cube305.geometry}
          material={materials["weiss.008"]}
        />
        <mesh
          geometry={nodes.Cube305_1.geometry}
          material={materials["Glas.003"]}
        />
      </group>
      <group
        position={[159.472, 2.204, -158.512]}
        scale={[0.295, 0.294, 0.255]}
      >
        <mesh geometry={nodes.Cube010.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube010_1.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube010_2.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube010_3.geometry} material={materials.Holz} />
      </group>
      <group
        position={[160.883, 1.938, -160.109]}
        rotation={[0, 0, -Math.PI]}
        scale={[-3.611, -0.064, -9.582]}
      >
        <mesh geometry={nodes.Cube291_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube291_2.geometry}
          material={materials.teppichboden}
        />
      </group>
      <group
        position={[161.782, 2.807, -169.428]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.193, 0.338, 0.519]}
      >
        <mesh
          geometry={nodes.Cube274.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube274_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[159.171, 2.541, -169.393]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.214, 0.338, 0.519]}
      >
        <mesh
          geometry={nodes.Cube286.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube286_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[162.314, 2.807, -163.122]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.19, -0.338, -0.519]}
      >
        <mesh
          geometry={nodes.Cube287.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube287_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[162.321, 2.807, -150.764]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.175, -0.338, -0.519]}
      >
        <mesh geometry={nodes.Cube289.geometry} material={materials.Holz} />
        <mesh geometry={nodes.Cube289_1.geometry} material={materials.Holz} />
      </group>
      <group
        position={[162.603, 2.807, -153.625]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.201, -0.338, -0.519]}
      >
        <mesh geometry={nodes.Cube309.geometry} material={materials.Holz} />
        <mesh geometry={nodes.Cube309_1.geometry} material={materials.Holz} />
      </group>
      <group
        position={[163.412, 2.561, -162.632]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.201, -0.229, -0.519]}
      >
        <mesh geometry={nodes.Cube310.geometry} material={materials.Holz} />
        <mesh geometry={nodes.Cube310_1.geometry} material={materials.Holz} />
      </group>
      <group
        position={[163.687, 2.807, -156.77]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.201, -0.338, -0.519]}
      >
        <mesh geometry={nodes.Cube311.geometry} material={materials.Holz} />
        <mesh geometry={nodes.Cube311_1.geometry} material={materials.Holz} />
      </group>
      <group
        position={[163.687, 2.807, -159.929]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.201, -0.338, -0.519]}
      >
        <mesh geometry={nodes.Cube312.geometry} material={materials.Holz} />
        <mesh geometry={nodes.Cube312_1.geometry} material={materials.Holz} />
      </group>
      <group
        position={[162.405, 2.832, -159.973]}
        rotation={[0, -1.571, 0]}
        scale={[0.193, 0.193, 0.391]}
      >
        <mesh
          geometry={nodes.Cube313.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube313_1.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube313_2.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[164.145, 2.122, -161.503]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.327, -0.015, -0.564]}
      >
        <mesh
          geometry={nodes.Cube307.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube307_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[159.106, 2.781, -158.301]}
        rotation={[-Math.PI, 0.979, -Math.PI]}
        scale={-0.038}
      >
        <mesh
          geometry={nodes.Cylinder077.geometry}
          material={materials.weiss}
        />
        <mesh
          geometry={nodes.Cylinder077_1.geometry}
          material={materials.metall}
        />
      </group>
      <group
        position={[159.059, 2.977, -161.581]}
        rotation={[0, -0.684, 0]}
        scale={[0.247, 0.014, 0.426]}
      >
        <mesh
          geometry={nodes.Cube187.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube187_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[159.008, 2.747, -161.581]}
        rotation={[Math.PI, -1.225, Math.PI]}
        scale={[0.192, 0.011, 0.33]}
      >
        <mesh
          geometry={nodes.Cube362.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube362_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[163.558, 2.002, -166.319]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[-0.193, -0.338, -0.346]}
      >
        <mesh
          geometry={nodes.Cube250.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube250_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[158.286, 2.553, -155.473]}
        rotation={[0, 0.059, 0]}
        scale={[-0.099, -0.106, -0.106]}
      >
        <mesh
          geometry={nodes.Cube523.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube523_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[158.312, 2.549, -155.458]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.438, 0.019, 0.746]}
      >
        <mesh
          geometry={nodes.Cube522.geometry}
          material={materials["Plasti.weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube522_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[157.983, 3.107, -167.572]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube597.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube597_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube597_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube597_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube597_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube597_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube597_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube597_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube597_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[163.272, 2.428, -161.589]}
        rotation={[0, 1.507, 0]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube599.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube599_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube599_2.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube599_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube599_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube599_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube599_6.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube599_7.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[157.58, 2.922, -162.061]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.186, 0.909, 0.288]}
      >
        <mesh geometry={nodes.Cube601.geometry} material={materials.braun} />
        <mesh
          geometry={nodes.Cube601_1.geometry}
          material={materials["weiss.001"]}
        />
      </group>
      <group
        position={[163.225, 2.588, -158.284]}
        rotation={[0, 1.507, 0]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube605.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube605_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube605_2.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube605_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube605_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube605_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube605_6.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube605_7.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[163.245, 2.588, -155.424]}
        rotation={[Math.PI, -1.518, Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube608.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube608_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube608_2.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube608_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube608_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube608_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube608_6.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube608_7.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[163.102, 2.428, -151.576]}
        rotation={[Math.PI, -1.507, Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube612.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube612_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube612_2.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube612_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube612_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube612_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube612_6.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube612_7.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[157.764, 2.274, -157.834]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.183, 0.28, 0.392]}
      >
        <mesh
          geometry={nodes.Cube610.geometry}
          material={materials["weiss.006"]}
        />
        <mesh geometry={nodes.Cube610_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[159.331, 2.274, -153.337]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.183, 0.28, 0.395]}
      >
        <mesh
          geometry={nodes.Cube611.geometry}
          material={materials["weiss.006"]}
        />
        <mesh geometry={nodes.Cube611_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[159.219, 2.682, -157.864]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.118, 0.118, 0.239]}
      >
        <mesh
          geometry={nodes.Cube461.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube461_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube461_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[163.507, 2.44, -165.452]}
        rotation={[-0.139, 0, 0]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube270.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube270_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube270_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube270_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube270_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube270_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube332.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube332_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube333.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube333_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube333_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled032.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled032_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[163.519, 2.44, -164.119]}
        rotation={[-3.003, 0, -Math.PI]}
        scale={0.919}
      >
        <mesh geometry={nodes.Cube346.geometry} material={materials.jeans} />
        <mesh
          geometry={nodes.Cube346_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube346_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube346_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube346_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube346_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube924.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube924_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube925.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube925_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube925_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled033.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled033_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[162.903, 3.093, -168.421]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube237.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube237_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube237_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube237_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube237_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube237_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube237_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube237_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube237_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[163.299, 2.438, -157.732]}
        rotation={[-3, 0.172, 3.117]}
        scale={0.919}
      >
        <mesh geometry={nodes.Cube091.geometry} material={materials.jeans} />
        <mesh
          geometry={nodes.Cube091_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube091_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube091_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube091_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube091_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube092.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube092_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube098.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube098_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube098_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled030.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled030_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[163.271, 2.44, -161.513]}
        rotation={[-0.139, -0.084, -0.012]}
        scale={0.919}
      >
        <mesh geometry={nodes.Cube093.geometry} material={materials.jeans} />
        <mesh
          geometry={nodes.Cube093_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube093_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube093_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube093_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube093_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube094.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube094_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube105.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube105_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube105_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled031.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled031_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[162.619, 5.145, -150.397]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.583, 0.03, 0.151]}
      >
        <mesh
          geometry={nodes.Cube314.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube314_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube314_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group
        position={[158.853, 5.145, -153.311]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.583, 0.03, 0.151]}
      >
        <mesh
          geometry={nodes.Cube085.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube085_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube085_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group
        position={[158.962, 5.145, -159.484]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.583, 0.03, 0.151]}
      >
        <mesh
          geometry={nodes.Cube109.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube109_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube109_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/foyer.glb");
