import { AdaptiveDpr, Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Landschaft } from "./components/models/Landschaft";
import { Walls } from "./components/models/Walls";
import { Parkplatz } from "./components/models/Parkplatz";
import { Foyer } from "./components/models/Foyer";
import { Cafeteria } from "./components/models/Cafeteria";
import { Hauptgebaeude } from "./components/models/Hauptgebaeude";
import OrbitCamera from "./components/controls/OrbitCamera";
import FakeLoader from "./components/html/FakeLoader";
import { Fertigung } from "./components/models/Fertigung";
import { Kunststoff } from "./components/models/Kunststoff";
import { Montage } from "./components/models/Montage";
import { Aussen } from "./components/models/Aussen";
import { useSnapshot } from "valtio";
import { store } from "./store";
import { Roof } from "./components/models/Roof";
import { Doors } from "./components/models/Doors";
import { Spawnpoint } from "./components/models/Spawnpoint";
import { Labels } from "./components/models/Labels";
import Navigator from "./components/html/Navigator";
import Popup from "./components/html/Popup";

const ConditionalRender = () => {
  const { floor } = useSnapshot(store);

  switch (floor) {
    case 0:
    case 7:
      return (
        <>
          <Roof />
          <Landschaft />
          <Parkplatz />
        </>
      );
    case 1:
    case 1.1:
      return <Foyer />;

    case 2:
      return <Cafeteria />;

    case 3:
    case 3.1:
    case 3.2:
      return <Fertigung />;

    case 4:
    case 4.1:
    case 4.2:
      return <Montage />;

    case 5:
    case 5.1:
    case 5.2:
      return <Kunststoff />;

    case 6:
      return <Aussen />;
  }
};

function App() {
  // const [dpr, setDpr] = useState(1.5);
  const { floor } = useSnapshot(store);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [targetRotationY, setTargetRotationY] = useState(Math.PI * 0.5);
  const cameraRef = useRef(null);
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

    if (
      floor === 7 ||
      floor === 4.1 ||
      floor === 4.2 ||
      floor === 3.1 ||
      floor === 3.2
    ) {
      const newRotationY = targetRotationY - deltaX * rotationSpeed;

      // Define the min and max rotation limits
      const minRotationY = Math.PI * 1.7;
      const maxRotationY = Math.PI * 1.8;

      // Clamp the newRotationY to be within the min and max limits
      setTargetRotationY(
        Math.max(minRotationY, Math.min(maxRotationY, newRotationY))
      );
    } else {
      setTargetRotationY((prev) => prev - deltaX * rotationSpeed);
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
      <div ref={fakeLoaderRef} className="fake-loader">
        <FakeLoader />
      </div>
      <Navigator />
      <Popup />
      {/* 3D */}
      <Canvas
        // dpr={0.4}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AdaptiveDpr />
        <Environment preset="city" />
        <OrbitCamera
          cameraRef={cameraRef}
          setTargetRotationY={setTargetRotationY}
          targetRotationY={targetRotationY}
          fakeLoaderRef={fakeLoaderRef}
        />
        <group position={[-140, 0, 160]}>
          <Suspense fallback={null}>
            <ConditionalRender />
            <Hauptgebaeude />
            <Walls />
            <Doors />
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
