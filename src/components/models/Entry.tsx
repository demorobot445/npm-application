import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import {
  MeshStandardMaterial,
  MeshBasicMaterial,
  Object3D,
  Mesh,
  AnimationMixer,
  LoopRepeat,
} from "three";

const Entry = () => {
  const { scene, animations } = useGLTF("/entryway.glb");

  const [mixer, setMixer] = useState<AnimationMixer | null>(null);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  useEffect(() => {
    if (animations.length > 0) {
      // Create an AnimationMixer when animations are available
      const newMixer = new AnimationMixer(scene);

      // Set up and play the animations
      animations.forEach((clip) => {
        const action = newMixer.clipAction(clip);
        action.play();
        action.setLoop(LoopRepeat, Infinity);
      });

      // Set the mixer in state
      setMixer(newMixer);
      setIsAnimationPlaying(true);
    }

    return () => {
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [animations, scene]);

  useEffect(() => {
    if (mixer && isAnimationPlaying) {
      // Update the animation mixer in every frame
      const animate = () => {
        mixer.update(0.01);
      };

      // Simple interval to call animate() periodically
      const interval = setInterval(animate, 16); // ~60 FPS
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [mixer, isAnimationPlaying]);

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

export default Entry;

useGLTF.preload("/entryway.glb");
