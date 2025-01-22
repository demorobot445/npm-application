import * as THREE from "three";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import { useRef, useState } from "react";
import { ThreeEvent, useThree } from "@react-three/fiber";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
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
    ["weiss.002"]: THREE.MeshStandardMaterial;
    ["hgrau.008"]: THREE.MeshStandardMaterial;
    ["weiss.leuchten"]: THREE.MeshStandardMaterial;
  };
};

type GLTFResultLabel = GLTF & {
  nodes: {
    Text017: THREE.Mesh;
    Text017_1: THREE.Mesh;
    Text017_2: THREE.Mesh;
  };
  materials: {
    weiss: THREE.MeshStandardMaterial;
    hgrau: THREE.MeshStandardMaterial;
    ["weiss.leuchten"]: THREE.MeshStandardMaterial;
  };
};

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  floorNumber: number;
  floorSecondNumber?: number;
  popupValue: number;
  moveAnimationParams: [number, number, number | undefined, number, number];
  children: React.ReactNode;
};

const Label: React.FC<Props> = ({
  position,
  rotation,
  scale = 1,
  floorNumber,
  floorSecondNumber,
  popupValue,
  moveAnimationParams,
  children,
}) => {
  const { moveAnimation, floor, cameraChange } = useSnapshot(store);
  const [hovered, setHovered] = useState(false);

  // Using a ref to store original position
  const originalPositionRef = useRef<number>(0);

  useCursor(hovered);

  const handleHoverEnter = (e: ThreeEvent<PointerEvent>) => {
    setHovered(true);
    const object = e.eventObject;

    // Store the initial position on first hover if not already stored
    if (originalPositionRef.current === 0) {
      originalPositionRef.current = object.position.y;
    }

    gsap.to(object.position, {
      y: object.position.y + 0.1,
    });
  };

  const handleHoverLeave = (e: ThreeEvent<PointerEvent>) => {
    setHovered(false);
    const object = e.eventObject;
    gsap.to(object.position, {
      y: originalPositionRef.current,
    });
  };

  const { camera } = useThree();

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={handleHoverEnter}
      onPointerLeave={handleHoverLeave}
      onClick={() => {
        if (floor === floorNumber || floor === floorSecondNumber) {
          store.previousPoistion = {
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
            rotateY: camera.rotation.y,
          };
          store.isPopupActive = true;
          moveAnimation(...moveAnimationParams);
          store.popupDataValue = popupValue;
        } else if (popupValue === 8 && floor === 0) {
          cameraChange();
          store.previousPoistion = {
            x: -59.3,
            y: 5,
            z: 13.2,
            rotateY: 5.67,
          };
          moveAnimation(...moveAnimationParams);
        }
      }}
    >
      {children}
    </group>
  );
};

export function Labels(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/labels.glb") as GLTFResult;
  const { nodes: newNodes, materials: newMaterials } = useGLTF(
    "/kunststoff-label.glb"
  ) as GLTFResultLabel;

  return (
    <group name="main-group" {...props} dispose={null}>
      <Label
        position={[134.638, 1.8, -138.1]}
        rotation={[Math.PI / 2, 0, Math.PI / 0.74]}
        floorNumber={5}
        floorSecondNumber={5.3}
        popupValue={17}
        moveAnimationParams={[6.4, 19.9, undefined, 0.5, 1.38]}
      >
        <mesh geometry={newNodes.Text017.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={newNodes.Text017_1.geometry}
          material={newMaterials.hgrau}
        />
        <mesh
          geometry={newNodes.Text017_2.geometry}
          material={newMaterials["weiss.leuchten"]}
        />
      </Label>
      <Label
        floorNumber={1}
        position={[159.953, 1.182, -161.979]}
        rotation={[0, Math.PI / 2, 0]}
        popupValue={11}
        moveAnimationParams={[22.1, -1.6, undefined, 0.6, 1.57]}
      >
        <mesh geometry={nodes.Text110.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text110_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text110_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>
      <Label
        position={[159.939, 1.182, -163.132]}
        rotation={[0, Math.PI / 2, 0]}
        floorNumber={1}
        popupValue={12}
        moveAnimationParams={[22.1, -2.8, undefined, 0.6, 1.57]}
      >
        <mesh geometry={nodes.Text039.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text039_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text039_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[159.945, 1.182, -164.268]}
        rotation={[0, Math.PI / 2, 0]}
        floorNumber={1}
        popupValue={13}
        moveAnimationParams={[22.1, -4.1, undefined, 0.6, 1.57]}
      >
        <mesh geometry={nodes.Text041.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text041_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text041_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>
      <Label
        position={[147.446, 3.778, -165.462]}
        rotation={[0, -0.568, 0]}
        scale={1.22}
        floorNumber={3.1}
        popupValue={29}
        moveAnimationParams={[4.1, -2.4, undefined, 3.2, Math.PI * 2 - 0.55]}
      >
        <mesh geometry={nodes.Text004.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text004_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text004_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[129.247, 1.946, -165.822]}
        rotation={[0, 0.688, 0]}
        scale={1.097}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={0}
        moveAnimationParams={[-10.8, -0.8, undefined, 0.7, 0.41]}
      >
        <mesh geometry={nodes.Text013.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text013_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text013_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[118.136, 2.254, -162.839]}
        rotation={[0, 0.968, 0]}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={5}
        moveAnimationParams={[-21.2, -1.7, undefined, 0.2, -0.38]}
      >
        <mesh geometry={nodes.Text009.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text009_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text009_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[132.79, 0.13, -155.35]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.426}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={2}
        moveAnimationParams={[-6.3, 4.3, undefined, 0.01, 2.13]}
      >
        <mesh geometry={nodes.Text016.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text016_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text016_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[136.714, 2.089, -166.368]}
        rotation={[0, 0.127, 0]}
        scale={1.054}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={1}
        moveAnimationParams={[-4.7, -11.5, undefined, 1, 3.6]}
      >
        <mesh geometry={nodes.Text116.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text116_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text116_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[128.62, 2.256, -149.965]}
        rotation={[0, Math.PI / 2, 0]}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={4}
        moveAnimationParams={[-7, 9.1, undefined, 1, 1.58]}
      >
        <mesh geometry={nodes.Text003.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text003_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text003_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[136.702, 1.901, -154.278]}
        rotation={[0, -0.767, 0]}
        floorNumber={3}
        floorSecondNumber={3.3}
        popupValue={3}
        moveAnimationParams={[-5.2, 8.1, undefined, 1.3, -0.63]}
      >
        <mesh geometry={nodes.Text002.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text002_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text002_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[147.819, 1.092, -167.765]}
        rotation={[0, -0.831, 0]}
        scale={1}
        floorNumber={3.2}
        popupValue={30}
        moveAnimationParams={[5, -5, undefined, -0.05, Math.PI * 1.9 - 0.55]}
      >
        <mesh geometry={nodes.Text006.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text006_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text006_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      {/* <Label
        position={[144.749, 1.064, -140.857]}
        rotation={[0, 0.906, 0]}
        scale={0.784}
        floorNumber={5.2}
        popupValue={16}
        moveAnimationParams={[6.5, 19.7, undefined, 0.5, 1.5]}
      >
        <mesh geometry={nodes.Cube144.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Cube144_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Cube144_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label> */}

      <Label
        position={[126.269, 1.841, -137.901]}
        rotation={[0, -1.103, 0]}
        scale={1.399}
        floorNumber={5}
        floorSecondNumber={5.3}
        popupValue={17}
        moveAnimationParams={[-7.8, 20.9, undefined, 1.3, 1.93]}
      >
        <mesh geometry={nodes.Text018.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text018_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text018_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      {/* <Label
        position={[134, 1.6, -137]}
        rotation={[0, Math.PI * 0.65, 0]}
        scale={1.399}
        floorNumber={5}
        floorSecondNumber={5.3}
        popupValue={17}
        moveAnimationParams={[6.4, 19.9, undefined, 0.5, 1.38]}
      >
        <mesh geometry={nodes.Cube144.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Cube144_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Cube144_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label> */}

      {/* <group
        position={[108.502, 3.516, -144.696]}
        rotation={[0, -0.719, 0]}
        scale={1.95}
      >
        <mesh geometry={nodes.Text068.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text068_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text068_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group> */}

      <Label
        position={[124, 1.28, -178.316]}
        rotation={[0, 1.322, 0]}
        scale={1.141}
        floorNumber={4}
        floorSecondNumber={4.3}
        popupValue={21}
        moveAnimationParams={[-24.3, -21.9, undefined, 0.5, -1.94]}
      >
        <mesh geometry={nodes.Text115.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text115_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text115_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[125.954, 1.28, -179.791]}
        rotation={[0, 0.773, 0]}
        scale={1.415}
        floorNumber={4}
        floorSecondNumber={4.3}
        popupValue={20}
        moveAnimationParams={[-19.6, -21.5, undefined, 0.5, -1.8]}
      >
        <mesh geometry={nodes.Text015.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text015_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text015_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[147.71, 3.657, -174.881]}
        rotation={[0, -1.008, 0]}
        scale={1.083}
        floorNumber={4.2}
        popupValue={28}
        moveAnimationParams={[4, -13.1, undefined, 3.2, Math.PI * 2 - 1.17]}
      >
        <mesh geometry={nodes.Text019.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text019_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text019_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[127.132, 1.784, -184.212]}
        rotation={[0, 0.406, 0]}
        scale={1.092}
        floorNumber={4}
        floorSecondNumber={4.3}
        popupValue={18}
        moveAnimationParams={[-12.9, -20.9, undefined, 1, -0.55]}
      >
        <mesh geometry={nodes.Text028.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text028_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text028_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[137.631, 1.462, -183.907]}
        rotation={[0, 0.833, 0]}
        scale={1.047}
        floorNumber={4}
        floorSecondNumber={4.3}
        popupValue={19}
        moveAnimationParams={[0.8, -22.9, undefined, 1.2, 1.5]}
      >
        <mesh geometry={nodes.Text021.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text021_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text021_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[148.485, 0.984, -177.851]}
        rotation={[0, -1.17, 0]}
        floorNumber={4.1}
        popupValue={25}
        moveAnimationParams={[5.7, -16.4, undefined, 0.3, Math.PI * 2 - 1.13]}
      >
        <mesh geometry={nodes.Text023.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text023_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text023_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[145.784, 4.02, -179.457]}
        rotation={[0, 0.037, 0]}
        scale={1.067}
        floorNumber={4.2}
        popupValue={26}
        moveAnimationParams={[4.5, -22.3, undefined, 3.5, Math.PI * 2 - 2.77]}
      >
        <mesh geometry={nodes.Text024.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text024_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text024_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[136.27, 1.798, -179.748]}
        rotation={[0, 1.295, 0]}
        scale={1.128}
        floorNumber={4}
        floorSecondNumber={4.3}
        popupValue={22}
        moveAnimationParams={[-11.3, -18.2, undefined, 1, -1]}
      >
        <mesh geometry={nodes.Cube247.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Cube247_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Cube247_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[146.567, 0.984, -180.328]}
        rotation={[Math.PI, -0.177, Math.PI]}
        floorNumber={4.1}
        popupValue={27}
        moveAnimationParams={[4.6, -22.8, undefined, 0.8, Math.PI * 2 - 2.77]}
      >
        <mesh geometry={nodes.Text114.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text114_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text114_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[160.446, 1.233, -154.456]}
        rotation={[0, -1.106, 0]}
        floorNumber={1}
        popupValue={14}
        moveAnimationParams={[22.6, 4.6, undefined, 0.7, 2.07]}
      >
        <mesh geometry={nodes.Text037.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text037_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text037_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[157.36, 1.233, -157.395]}
        rotation={[0, Math.PI / 2, 0]}
        floorNumber={1}
        popupValue={15}
        moveAnimationParams={[19.2, 2.7, undefined, 0.6, 1.55]}
      >
        <mesh geometry={nodes.Text031.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text031_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text031_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[159.478, 0.548, -156.587]}
        rotation={[0, -0.464, 0]}
        floorNumber={1}
        popupValue={10}
        moveAnimationParams={[20.7, 1.5, undefined, 0.5, 2.56]}
      >
        <mesh geometry={nodes.Text010.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text010_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text010_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      {/* <group
        position={[162.646, 0.548, -157.455]}
        rotation={[0, 0.137, 0]}
        scale={0.72}
      >
        <mesh
          geometry={nodes.Text033.geometry}
          
        >
        <meshBasicMaterial color={materials["weiss.002"].color} /></mesh>
        <mesh
          geometry={nodes.Text033_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text033_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </group> */}

      <Label
        position={[161.223, 3.742, -159.14]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.838}
        floorNumber={1.1}
        popupValue={31}
        moveAnimationParams={[19.4, 1.1, undefined, 3.2, Math.PI * 1.5]}
      >
        <mesh geometry={nodes.Text045.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text045_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text045_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[162.311, 3.906, -165.868]}
        rotation={[0, -0.637, 0]}
        scale={1.045}
        floorNumber={1.1}
        popupValue={24}
        moveAnimationParams={[19.9, -2.9, undefined, 3.6, Math.PI * 1.76]}
      >
        <mesh geometry={nodes.Text046.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text046_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text046_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[161.221, 3.742, -161.135]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.838}
        floorNumber={1.1}
        popupValue={23}
        moveAnimationParams={[19.4, -1.1, undefined, 3.2, Math.PI * 1.51]}
      >
        <mesh geometry={nodes.Text027.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text027_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text027_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[105.181, 3.107, -176.031]}
        rotation={[0, -0.114, 0]}
        scale={2.596}
        floorNumber={7}
        popupValue={9}
        moveAnimationParams={[-33.7, -7.3, undefined, 0.8, Math.PI * 2.22]}
      >
        <mesh geometry={nodes.Text049.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text049_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text049_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[88.796, 3.287, -161.799]}
        rotation={[0, 0.727, 0]}
        scale={2.596}
        floorNumber={7}
        popupValue={8}
        moveAnimationParams={[-61.2, -8.9, undefined, 0.6, 4.24]}
      >
        <mesh geometry={nodes.Text111.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text111_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text111_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[106.329, 2.053, -193.876]}
        rotation={[0, 0.344, 0]}
        scale={1.33}
        floorNumber={6}
        popupValue={7}
        moveAnimationParams={[-33.5, -30.2, undefined, 1, Math.PI * 2.1]}
      >
        <mesh geometry={nodes.Text113.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text113_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text113_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>

      <Label
        position={[85.184, 2.314, -194.332]}
        rotation={[0, 1.166, 0]}
        scale={1.739}
        floorNumber={6}
        popupValue={6}
        moveAnimationParams={[-49, -29.4, undefined, 1.4, Math.PI * 0.3]}
      >
        <mesh geometry={nodes.Text112.geometry}>
          <meshBasicMaterial color={materials["weiss.002"].color} />
        </mesh>
        <mesh
          geometry={nodes.Text112_1.geometry}
          material={materials["hgrau.008"]}
        />
        <mesh
          geometry={nodes.Text112_2.geometry}
          material={materials["weiss.leuchten"]}
        />
      </Label>
    </group>
  );
}

useGLTF.preload("/labels.glb");
