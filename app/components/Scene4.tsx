"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model4";

interface Props {
  test1: boolean;
  setTest1: React.Dispatch<React.SetStateAction<boolean>>;
  test1Text: boolean;
  setTest1Text: React.Dispatch<React.SetStateAction<boolean>>;
  test2: boolean;
  setTest2: React.Dispatch<React.SetStateAction<boolean>>;
  test2Text: boolean;
  setTest2Text: React.Dispatch<React.SetStateAction<boolean>>;
}

const Scene4: React.FC<Props> = ({
  test1,
  setTest1,
  test1Text,
  setTest1Text,
  test2,
  setTest2,
  test2Text,
  setTest2Text,
}) => {
  return (
    <Canvas>
      <directionalLight intensity={2} position={[0, 2, 4]} />
      <Environment preset="city" />
      <Model
        test1={test1}
        setTest1={setTest1}
        test1Text={test1Text}
        setTest1Text={setTest1Text}
        test2={test2}
        setTest2={setTest2}
        test2Text={test2Text}
        setTest2Text={setTest2Text}
      />
    </Canvas>
  );
};

export default Scene4;
