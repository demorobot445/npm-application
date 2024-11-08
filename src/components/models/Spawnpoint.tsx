import * as THREE from "three";
import React, { useState } from "react";
import { useCursor } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { store } from "../../store";
import { Spawn } from "./Spawn";

export function Spawnpoint(props: JSX.IntrinsicElements["group"]) {
  const { moveAnimation } = useSnapshot(store);
  const group = React.useRef<THREE.Group>(null);

  // model hovered
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const handleHoverEnter = () => setHovered(true);
  const handleHoverLeave = () => setHovered(false);
  //

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <Spawn
          name="spr005"
          position={[133.503, -0.838, -153.84]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr006"
          position={[134.43, -0.838, -160.173]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr007"
          position={[116.537, -0.838, -153.94]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr008"
          position={[116.536, -0.838, -160.172]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr009"
          position={[127.803, -0.838, -160.169]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr002"
          position={[134.235, -0.838, -168.458]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr01"
          position={[125.597, -0.838, -153.875]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr012"
          position={[122.399, -0.838, -160.169]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="sprspg"
          position={[136.758, -0.815, -140.373]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="sprspg001"
          position={[130.182, -0.815, -140.373]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
          name="sprspg002"
          position={[130.182, -0.815, -140.373]}
        />
        <Spawn
          name="sprspg003"
          position={[136.758, -0.815, -140.373]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="sprspg004"
          position={[142.939, -0.815, -140.373]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr001"
          position={[134.179, -0.798, -177.45]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr004"
          position={[116.908, -0.8, -177.45]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr003"
          position={[132.497, -0.804, -183.39]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr010"
          position={[116.861, -0.804, -183.39]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr011"
          position={[125.977, -0.804, -183.39]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr02"
          position={[128.06, -0.798, -177.45]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr013"
          position={[142.225, -0.798, -177.45]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr014"
          position={[140.801, -0.804, -183.39]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr015"
          position={[122.782, -0.798, -177.45]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={(e) => moveAnimation(e.point.x, e.point.z)}
        />
        <Spawn
          name="spr__cafeteria"
          position={[152.361, -0.433, -161.052]}
          onPointerEnter={handleHoverEnter}
          onPointerLeave={handleHoverLeave}
          onClick={() => moveAnimation(16.1, 0.1, 2, 2.6, 2.5)}
        />
      </group>
    </group>
  );
}
