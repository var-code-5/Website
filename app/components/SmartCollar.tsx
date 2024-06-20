"use client";
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Model = (props: JSX.IntrinsicElements['group']) => {
  const scene = useGLTF('/dogCollar.glb').scene;
  return <primitive object={scene} {...props} />;
};

const Collar = () => {
  const meshRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('meshRef.current');
      if (meshRef.current) {
        console.log('meshRef.current', meshRef.current.style);
        meshRef.current.style.rotate += '0.1';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-[65vh]'>
    <div className='flex flex-col items-end m-5 mt-2 space-y-2'>
        <h1 className='text-8xl text-[#3C130E]'>Smart Collar</h1>
        <p className='w-[37.3%]'>Smart Collar is a collar that helps you track your pet's location, health, and activity. lalallalal lalalallala</p>
    </div>
    <section className="h-[65vh] w-full relative">
      <Canvas dpr={[1, 2]} camera={{ fov: 45}} shadows={true} ref={meshRef}>
        <PresentationControls speed={2.5} global>
          <Stage environment={'apartment'} intensity={0.01}>
            <Model scale={0.016} position={[0, -0.008, 0]} rotation={[0, Math.PI / 5, 0]} />
          </Stage>
        </PresentationControls>
      </Canvas>
        <Image src="/arrow1.png" alt="Arrow" width={150} height={150} className='absolute top-[2rem] left-[35rem]'/>
        <Image src="/arrow2.png" alt="Arrow" width={150} height={150} className='absolute top-[9rem] left-[28rem]'/>
        </section>
    </div>
  );
};

export default Collar;
