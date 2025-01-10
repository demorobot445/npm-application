import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { PerspectiveCamera as PC } from "three";
// import { Pane } from "tweakpane";
import { useGSAP } from "@gsap/react";
import { store } from "../../store";
import gsap from "gsap";

const OrbitCamera = ({
  cameraRef,
  targetRotationY,
  fakeLoaderRef,
  setTargetRotationY,
  secondCameraRef,
}: {
  fakeLoaderRef: React.RefObject<HTMLDivElement>;
  cameraRef: React.RefObject<PC>;
  secondCameraRef: React.RefObject<PC>;
  targetRotationY: number;
  setTargetRotationY: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isMainCameraActive, setIsMainCameraActive] = useState<boolean>(false);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y +=
        (targetRotationY - cameraRef.current.rotation.y) * 0.1;
    }

    if (secondCameraRef.current) {
      const desiredRotationYForSecondCamera =
        secondCameraRef.current.rotation.y;

      secondCameraRef.current.rotation.y +=
        (desiredRotationYForSecondCamera - secondCameraRef.current.rotation.y) *
        0.05;
    }
  });

  // useEffect(() => {
  //   const pane = new Pane();

  //   pane.addBinding(cameraRef.current!.position, "x", {
  //     min: -150,
  //     max: 150,
  //     step: 0.1,
  //   });
  //   pane.addBinding(cameraRef.current!.position, "y", {
  //     min: -150,
  //     max: 150,
  //     step: 0.1,
  //   });
  //   pane.addBinding(cameraRef.current!.position, "z", {
  //     min: -150,
  //     max: 150,
  //     step: 0.1,
  //   });
  //   pane.addBinding(cameraRef.current!.rotation, "x", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  //   pane.addBinding(cameraRef.current!.rotation, "y", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  //   pane.addBinding(cameraRef.current!.rotation, "z", {
  //     min: -Math.PI * 2,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //   });
  // }, []);

  const { contextSafe } = useGSAP();

  useEffect(() => {
    store.moveAnimation = contextSafe(
      (
        x: number,
        z: number,
        floor?: number,
        upper?: number,
        rotateY?: number
      ) => {
        if (floor) {
          gsap
            .timeline()
            .to(cameraRef.current!.position, {
              x,
              y: upper ? upper : 1,
              z,
              duration: 0.8,
            })
            .to(fakeLoaderRef.current, { opacity: 1 }, "<")
            .call(() => {
              if (isMainCameraActive === false) setIsMainCameraActive(true);
              store.floor = floor;
              setTargetRotationY((prev) => (rotateY ? rotateY : prev));
            })
            .to(fakeLoaderRef.current, { opacity: 0 }, ">0.4");
        } else {
          gsap
            .timeline()
            .call(() => {
              setTargetRotationY((prev) => (rotateY ? rotateY : prev));
            })
            .to(cameraRef.current!.position, {
              x,
              z,
              duration: 0.8,
              y: upper ? upper : 1,
            });
        }
      }
    );

    store.entryAnimation = contextSafe(() => {
      gsap
        .timeline()
        .to(secondCameraRef.current!.position, {
          x: 32,
          y: 1,
          z: 0,
          duration: 3,
        })
        .to(
          secondCameraRef.current!.rotation,
          {
            x: 0,
            y: 1.5,
            z: 0,
            duration: 2,
          },
          "<"
        )
        .to(
          secondCameraRef.current!.position,
          {
            x: 24.2,
            duration: 2,
          },
          "<2.2"
        )
        .to(fakeLoaderRef.current, { opacity: 1 }, "<1")
        .call(() => {
          setIsMainCameraActive(true);
          store.floor = 1;
        })
        .to(fakeLoaderRef.current, { opacity: 0 }, ">0.5");
    });

    store.reverseEntryAnimation = contextSafe(() => {
      gsap
        .timeline()
        .to(fakeLoaderRef.current, { opacity: 1 })
        .call(() => {
          setIsMainCameraActive(false);
          store.floor = 0;
        })
        .to(fakeLoaderRef.current, { opacity: 0 })
        .set(secondCameraRef.current!.rotation, {
          x: -0.08,
          y: 1.2,
          z: 0.3,
        })
        .set(secondCameraRef.current!.position, {
          x: 71.5,
          y: 33.7,
          z: 26.3,
        })
        .set(cameraRef.current!.position, {
          x: 24.2,
          y: 1,
          z: 0,
        });
    });
  }, []);

  return (
    <>
      <PerspectiveCamera
        makeDefault={isMainCameraActive}
        position={[24.2, 1, 0]}
        ref={cameraRef}
      />
      <PerspectiveCamera
        position={[71.5, 33.7, 26.3]}
        rotation={[-0.08, 1.2, 0.3, "XZY"]}
        ref={secondCameraRef}
        makeDefault={!isMainCameraActive}
      />
    </>
  );
};
export default OrbitCamera;
