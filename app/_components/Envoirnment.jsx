import { Environment, OrbitControls, Text3D, Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber"; // Import useFrame
import Points from "./Points";

const EnvoirnmentComp = () => {


  return (
    <>
      <group >
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <Points />
        <Environment
          // Attach the ref to the Environment
          background
          files={[
            "/1.jpg", // Positive X
            "/2.jpg", // Negative X
            "/3.jpg", // Positive Y
            "/4.jpg", // Negative Y
            "/5.jpg", // Positive Z
            "/6.jpg",
          ]}
        />
      </group>

    </>
  );
};

export default EnvoirnmentComp;
