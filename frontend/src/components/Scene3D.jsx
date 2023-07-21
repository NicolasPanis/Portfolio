import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("../assets/a_windy_day.glb");
  return <primitive object={scene} scale={0.01} {...props} />;
}

function Scene3D() {
  return (
    <div>
      <Canvas dpr={[1, 2]} style={{ position: "absolute" }}>
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default Scene3D;
