import Title from '@/components/Title';
import { forwardRef, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import HewyLogo from '@/images/h.svg';

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
            <primitive ref={ref} object={deathStar.scene} scale={0.03} />
        </>
    )
}

const HomeHero: React.FC = () => {
    const logo = useRef<SVGElement>(null);

    return (
        <section className="bg-neutral-800 h-[650px] lg:min-h-[100vh] relative flex items-center justify-center lg:grid lg:grid-cols-2 lg:gap-6">
            <Canvas className="h-full" style={{ background: 'transparent', zIndex: 10, overflow: 'visible' }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <DeathStar />
                    <directionalLight color="white" position={[4, 0, 20]} />
                </Suspense>
            </Canvas>

            <div className="flex items-center lg:items-start justify-center flex-col text-white absolute lg:relative w-11/12 mx-auto text-center lg:text-left !bg-transparent">
                <div className="z-20 drop-shadow-md">
                    <Title {...{
                        className: 'uppercase text-7xl 2xl:text-8xl font-heading tracking-wide'
                    }}>Oliver Heward</Title>
                    <p className="font-body font-light lg:text-xl xl:text-2xl">Fullstack JS Developer - Fluid Digital</p>
                </div>

                <HewyLogo className="!absolute max-w-[750px] -left-20 lg:rotate-12 fill-purple-600 hidden lg:block opacity-5 z-0" />
            </div>
        </section>
    )
}

export default HomeHero;