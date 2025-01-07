import { AdaptiveDpr, Loader } from "@react-three/drei";
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
import { PerspectiveCamera as PC } from "three";
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
    const secondCameraRotationScale = 0.1; // Scale factor for the second camera rotation

    if (
      floor === 7 ||
      floor === 4.1 ||
      floor === 4.2 ||
      floor === 3.1 ||
      floor === 3.2
    ) {
      const newRotationY = targetRotationY - deltaX * rotationSpeed;

      // Define the min and max rotation limits for cameraRef
      const minRotationY = Math.PI * 1.7;
      const maxRotationY = Math.PI * 1.8;

      // Clamp the newRotationY to be within the min and max limits
      setTargetRotationY(
        Math.max(minRotationY, Math.min(maxRotationY, newRotationY))
      );

      // Apply scaled rotation to secondCameraRef
      if (secondCameraRef.current) {
        secondCameraRef.current.rotation.y -=
          deltaX * rotationSpeed * secondCameraRotationScale;
      }
    } else {
      setTargetRotationY((prev) => prev - deltaX * rotationSpeed);

      // Apply scaled rotation to secondCameraRef
      if (secondCameraRef.current) {
        secondCameraRef.current.rotation.y -=
          deltaX * rotationSpeed * secondCameraRotationScale;
      }
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
        <color attach="background" args={["#2e69a6"]} />
        <AdaptiveDpr />
        <OrbitCamera
          secondCameraRef={secondCameraRef}
          cameraRef={cameraRef}
          setTargetRotationY={setTargetRotationY}
          targetRotationY={targetRotationY}
          fakeLoaderRef={fakeLoaderRef}
        />
        <group position={[-140, 0, 160]}>
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
