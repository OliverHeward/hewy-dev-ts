import Title from '@/components/Title';
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Clients from '@/components/Clients';
import AboutMe from '@/components/AboutMe';
import BlogPosts from '@/components/BlogPosts';
import SEO from '@/components/SEO';

const DeathStar = () => {
  const ref = useRef(null);
  const deathStar = useLoader(GLTFLoader, '/scene.gltf');
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.y = a / 20;
    ref.current.rotation.x = a / 80;
  })
  return (
    <>
      <primitive ref={ref} object={deathStar.scene} scale={0.04} />
    </>
  )
}

export default function Home() {

  return (
    <main>
      <SEO {...{
        title: 'Home'
      }} />
      <section className="bg-neutral-800 h-[650px] lg:grid lg:grid-cols-2">
        <Canvas className="h-full" style={{ background: 'transparent' }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <DeathStar />
            <directionalLight color="white" position={[0, 0, 10]} />
          </Suspense>
        </Canvas>

        <div className="flex items-start justify-center flex-col text-white">
          <Title {...{
            className: 'uppercase text-7xl font-heading tracking-wide'
          }}>Oliver Heward</Title>
          <p>Fullstack JS Developer - Fluid Digital</p>
        </div>
      </section>
      <AboutMe />
      <Clients />
      <BlogPosts />
    </main>
  );
}
