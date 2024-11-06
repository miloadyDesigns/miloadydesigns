import { Text3D, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

const GalaxyEffectMaterial = () => {
  const colors = [
    new Color("#FF5733"), // Color 1: Red
    new Color("#FFC300"), // Color 2: Yellow
    new Color("#DAF7A6"), // Color 3: Light Green
    new Color("#900C3F"), // Color 4: Dark Red
    new Color("#581845"), // Color 5: Dark Purple
  ];

  return colors;
};

const CompanyTitle = (props) => {
  const textRef = useRef(); // Create a reference for the Text3D component
  const gradientColors = GalaxyEffectMaterial();

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} /> {/* Increased intensity for ambient light */}
      <pointLight position={[10, 10, 10]} intensity={2} /> {/* Bright point light */}
      <pointLight position={[-10, -10, -10]} intensity={2} />
      <spotLight
        position={[0, 10, 5]}
        angle={0.15}
        penumbra={1}
        intensity={5} // Increased intensity for better illumination
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Floating Text with Galaxy-like Colors */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[0, 0.5]}
      >
        <Text3D
          ref={textRef}
          position={[-5, -0.2, 1]}
          font={"fonts/2.json"}
          height={0.1}
          size={0.5}
          curveSegments={30}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={8}
        >
          UNLEASHING CREATIVITY
          <meshStandardMaterial
            color={"#FFFFFF"} // Change base color to bright white
            metalness={0.7} // Increase metalness for a shiny effect
            roughness={0.1} // Decrease roughness for a smoother finish
            emissive={"#FFFFFF"} // Emissive color for glowing effect
            emissiveIntensity={1.0} // Increased emissive intensity for brightness
          />
        </Text3D>
      </Float>
    </>
  );
};

export default CompanyTitle;
