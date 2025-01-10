import { AdaptiveDpr, Box, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import OrbitCamera from "./components/controls/OrbitCamera";
import FakeLoader from "./components/html/FakeLoader";
import { useSnapshot } from "valtio";
import { store } from "./store";
import { Doors } from "./components/models/Doors";
import { Spawnpoint } from "./components/models/Spawnpoint";
import { Labels } from "./components/models/Labels";
import Navigator from "./components/html/Navigator";
import Popup from "./components/html/Popup";
import { DoubleSide, PerspectiveCamera as PC } from "three";
import Maschinenbau from "./components/models/Maschinenbau";
import Fertigung from "./components/models/Fertigung";
import Cafeteria from "./components/models/Cafeteria";
import Landscape from "./components/models/Landscape";
import CarPark from "./components/models/CarPark";
import Plastics from "./components/models/Plastics";
import Roofs from "./components/models/Roofs";
import WindowsAndDoors from "./components/models/WindowsAndDoors";
import Walls from "./components/models/Walls";
import Entry from "./components/models/Entry";
import Commission from "./components/models/Commission";

const ConditionalRender = () => {
  const { floor } = useSnapshot(store);

  switch (floor) {
    case 1:
    case 1.1:
      return <Entry />;

    case 2:
      return <Cafeteria />;

    case 3:
    case 3.1:
    case 3.2:
      return <Fertigung />;

    case 4:
    case 4.1:
    case 4.2:
      return <Maschinenbau />;

    case 5:
    case 5.1:
    case 5.2:
      return <Plastics />;

    case 6:
      return <Commission />;
  }
};

function App() {
  const { floor, isPopupActive } = useSnapshot(store);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [targetRotationY, setTargetRotationY] = useState(Math.PI * 0.5);
  const cameraRef = useRef<PC>(null);
  const secondCameraRef = useRef<PC>(null);
  const fakeLoaderRef = useRef<HTMLDivElement>(null);

  console.log(floor);

  // POINTER EVENT BOTH USE IN MOUSE AND TOUCH CONTROLS

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setLastX(clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - lastX;
    setLastX(clientX);

    const rotationSpeed = 0.002;
    const secondCameraRotationScale = 0.1; // Scale factor for second camera rotation

    // Mapping for floor-specific rotation limits
    const rotationLimits: Record<
      number | string,
      { min: number; max: number }
    > = {
      1: { min: Math.PI * 0.2, max: Math.PI * 0.8 },
      1.1: { min: Math.PI * 1.4, max: Math.PI * 1.8 },
      2: { min: Math.PI * 0.4, max: Math.PI * 0.8 },
      3: { min: Math.PI * 0, max: Math.PI * 1 },
      3.1: { min: Math.PI * 1.7, max: Math.PI * 1.8 },
      3.2: { min: Math.PI * 1.7, max: Math.PI * 1.8 },
      4: { min: Math.PI * 0.2, max: Math.PI * 0.5 },
      4.1: { min: Math.PI * 1.7, max: Math.PI * 1.8 },
      4.2: { min: Math.PI * 1.7, max: Math.PI * 1.8 },
      5: { min: Math.PI * 0.6, max: Math.PI * 0.9 },
      7: { min: Math.PI * 1.7, max: Math.PI * 1.8 },
    };

    // Cast floor to a valid key in rotationLimits (number or string)
    const { min, max } = rotationLimits[floor as number] || {
      min: -Infinity,
      max: Infinity,
    };

    const newTargetRotationY = targetRotationY - deltaX * rotationSpeed;

    // Clamp the new target rotation Y within the limits
    setTargetRotationY(Math.max(min, Math.min(max, newTargetRotationY)));

    // Apply scaled rotation to the second camera
    if (secondCameraRef.current) {
      secondCameraRef.current.rotation.y -=
        deltaX * rotationSpeed * secondCameraRotationScale;
    }
  };

  // MOUSE CONTROLS

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handlePointerDown(event.clientX);
  };

  const handleMouseUp = () => {
    handlePointerUp();
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handlePointerMove(event.clientX);
  };

  // TOUCH CONTROLS

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      handlePointerDown(event.touches[0].clientX);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      handlePointerMove(event.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    handlePointerUp();
  };

  return (
    <main>
      {/* <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          backgroundColor: "white",
          width: 45,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999,
        }}
      >
        <h1 style={{ textAlign: "center" }}>{popupDataValue}</h1>
      </div> */}
      <div ref={fakeLoaderRef} className="fake-loader">
        <FakeLoader />
      </div>
      <Navigator />
      <Popup />
      {/* 3D */}
      <Canvas
        style={{ pointerEvents: isPopupActive ? "none" : "auto" }}
        // dpr={0.5}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <fog attach="fog" args={[0x0c69ab, 100, 600]} />
        <AdaptiveDpr />
        <OrbitCamera
          secondCameraRef={secondCameraRef}
          cameraRef={cameraRef}
          setTargetRotationY={setTargetRotationY}
          targetRotationY={targetRotationY}
          fakeLoaderRef={fakeLoaderRef}
        />
        <group position={[-140, 0, 160]}>
          <Box args={[1000, 1000, 1000]}>
            <meshBasicMaterial side={DoubleSide} color={"#2e69a6"} />
          </Box>
          <Suspense fallback={null}>
            <ConditionalRender />
            <WindowsAndDoors />
            <Roofs />
            <Walls />
            <Doors />
            <CarPark />
            <Landscape />
            <Spawnpoint />
            <Labels />
          </Suspense>
        </group>
      </Canvas>
      <Loader />
    </main>
  );
}

export default App;
