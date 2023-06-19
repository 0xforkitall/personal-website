'use client';

import { Center } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import type { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export interface IHomeSectionModelProps {}

const viewportBreakpoint = 4;

const getModelPosition = (width: number, height: number) => {
    return width > viewportBreakpoint
        ? { x: width / 2 - 0.5, y: height / 2 - 1, scale: 2, left: true }
        : { x: 0, y: height / 2 - 0.5, scale: 1, left: false };
};

export const HomeSectionModel: React.FC<IHomeSectionModelProps> = () => {
    const ethereumModel = useLoader(GLTFLoader, '/assets/models/ethereum-logo.glb');
    const modelRef = useRef<Mesh>(null);

    const { width, height } = useThree((state) => state.viewport);
    const { x, y, scale, left } = getModelPosition(width, height);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#33ff33" intensity={10} />
            <pointLight position={[10, 10, 10]} color="#00c8ff" intensity={10} />
            <Center bottom={true} left={left} position={[x, y, 0]}>
                <mesh ref={modelRef}>
                    <primitive object={ethereumModel.scene} scale={scale} />
                </mesh>
            </Center>
        </>
    );
};
