import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { MeshStandardMaterial, MeshBasicMaterial, Object3D, Mesh } from "three";

const Walls = () => {
  const { scene } = useGLTF("/models/walls.glb");

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

  return <primitive object={scene as unknown as Object3D} />;
};

export default Walls;

useGLTF.preload("/models/walls.glb");
