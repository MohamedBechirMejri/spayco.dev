import { Stars, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";

const Scene = () => {
  const group = useRef<THREE.Group>();

  // rotate the text

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <group ref={group}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <group>
        <Text
          font="/fonts/bangers.ttf"
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          castShadow
          fontSize={1}
        >
          Aziz Mejri
          <meshStandardMaterial
            emissive="purple"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </Text>
        <Text
          font="/fonts/bangers.ttf"
          position={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          castShadow
          fontSize={1}
        >
          Spayco
          <meshStandardMaterial
            emissive="blue"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </Text>
      </group>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </group>
  );
};

export default Scene;
