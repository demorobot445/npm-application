import { Box, useCursor, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { MeshStandardMaterial, MeshBasicMaterial, Object3D, Mesh } from "three";
import { useSnapshot } from "valtio";
import { store } from "../../store";

const WindowsAndDoors = () => {
  const { scene } = useGLTF("/models/windows&doors.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as Mesh;

        if (mesh.material instanceof MeshStandardMaterial) {
          const stdMaterial = mesh.material;

          const basicMaterial = new MeshBasicMaterial({
            map: stdMaterial.map || null,
            color: stdMaterial.color.clone(),
            alphaMap: stdMaterial.alphaMap || null,
            transparent: stdMaterial.transparent,
            opacity: stdMaterial.opacity,
            envMap: stdMaterial.envMap || null,
            wireframe: stdMaterial.wireframe,
            wireframeLinewidth: stdMaterial.wireframeLinewidth,
            side: stdMaterial.side,
          });

          mesh.material = basicMaterial;
        }

        if (child.name.startsWith("glass")) {
          const mesh = child as Mesh;

          mesh.material = new MeshBasicMaterial({
            transparent: true,
            opacity: 0.5,
          });
        }
      }
    });
  }, [scene]);

  // MODEL HOVER SHOW POINTER CUSOR
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  // GLOBAL STORE
  const { entryAnimation } = useSnapshot(store);

  return (
    <>
      <primitive object={scene as unknown as Object3D} />;
      <Box
        onClick={entryAnimation}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        args={[2, 2.5, 2]}
        position={[164.54, 0.5, -160.186]}
      >
        <meshBasicMaterial transparent opacity={0} />
      </Box>
    </>
  );
};

export default WindowsAndDoors;

useGLTF.preload("/models/windows&doors.glb");
