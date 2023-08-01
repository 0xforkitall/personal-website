---
id: '1'
slug: 'how-to-integrate-a-3d-model-using-nextjs-threejs-typescript'
title: 'How to Integrate a 3D Model using Next.js, Three.js and TypeScript'
description: 'Learn how to add a stunning 3D model to your Next.js website using Three.js and TypeScript. Create interactive 3D scenes to captivate your users.'
image: '/assets/blog/posts/how-to-integrate-a-3d-model-using-nextjs-threejs-typescript/cover.jpg'
author:
    id: '0'
    displayName: '0xforkitall'
    avatar: '/assets/blog/authors/0xforkitall.png'
topics:
    - 3D Models
    - Three.js
    - Next.js
    - TypeScript
metadata:
    title: '0xforkitall | How to Integrate a 3D Model using Next.js, Three.js and TypeScript'
    description: 'Learn how to add a stunning 3D model to your Next.js website using Three.js and TypeScript. Create interactive 3D scenes to captivate your users.'
    image: '/assets/blog/posts/how-to-integrate-a-3d-model-using-nextjs-threejs-typescript/cover.jpg'
createdAt: '2023-08-01T12:05:00Z'
updatedAt: '2023-08-01T12:05:00Z'
---

Are you ready to take your Next.js website to the next level by incorporating captivating 3D models? In this comprehensive guide, I'll walk you through the process of integrating a 3D model into your Next.js application using Three.js and TypeScript. With interactive 3D scenes, you can create an engaging and immersive user experience that will leave your visitors amazed.

##### Why Three.js?

Three.js is a popular JavaScript library that simplifies 3D graphics rendering in the browser. It provides a wide range of tools and utilities for creating and manipulating 3D scenes, making it an ideal choice for web developers who want to add interactive 3D elements to their websites.

##### Prerequisites

Before we begin, ensure you have the following set up:

1. [Node.js](https://nodejs.org/en) and npm installed on your machine.
2. A basic understanding of JavaScript, React and Next.js.
3. Familiarity with TypeScript.

##### Step 1: Create a New Next.js Project

Let's start by creating a new Next.js project. Open your terminal and run the following command:

```bash
npx create-next-app my-3d-model-app
```

During the project setup, you'll be prompted to choose various options. Make sure to select the following:

```bash
Would you like to use TypeScript? => Yes
Would you like to use ESLint? => Yes
Would you like to use Tailwind CSS? => No
Would you like to use `src/` directory? => Yes
Would you like to use App Router? (recommended) => Yes
Would you like to customize the default import alias? => No
```

After the setup is complete, navigate into the project folder:

```bash
cd my-3d-model-app
```

##### Step 2: Install Three.js and Other Dependencies

Next, let's install Three.js and other required dependencies. Run the following command in your project directory:

```bash
yarn add three @react-three/fiber
yarn add --dev @types/three
```

The `three` package contains the Three.js library, while `@react-three/fiber` is an additional package that make working with Three.js in React applications much easier.

##### Step 3: Import the 3D Model

For our example, we will use the Ethereum 3D model created by [jihambru](https://sketchfab.com/jihambru). You can find free 3D models online on websites like [Sketchfab](https://sketchfab.com/feed) or [TurboSquid](https://www.turbosquid.com/).

Download the Ethereum 3D model from [my repository](https://github.com/0xforkitall/personal-website/blob/main/public/assets/models/ethereum-logo.glb) and place it in the `/public` folder of your Next.js project.

##### Step 4: Building the 3D Scene

In your Next.js project, create a new component to hold the 3D scene. For example, let's create a new `/src/component` folder and a `model-viewer.tsx` component with the following code:

```tsx
'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/ethereum-logo.glb');

    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
            <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
            <primitive object={myModel.scene} />
        </Canvas>
    );
};
```

The `ModelViewer` component will load and display the 3D model in a canvas, along with adding some lights to the scene. The [use client](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive) directive ensures that Next.js renders the component only on the client side.

##### Step 5: Using the 3D Model Component

Now, let's use the `ModelViewer` component we created in our main page. Open the `app/page.tsx` file and modify it as follows:

```tsx
import { ModelViewer } from '../components/model-viewer';

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Next.js 3D Model App</h1>
            <ModelViewer />
        </div>
    );
}
```

##### Step 6: Run the Application

Save your changes and start the Next.js development server:

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to see the 3D model integrated into your Next.js application!

##### Step 7: Animate the Scene (optional)

Use the `useFrame` hook from `@react-three/fiber` in order to add a simple animation to your scene. As the hook must be used inside the `<Canvas />` context, we need to modify the `ModelViewer` component in order to have the context available on the `EthereumModel` component:

```tsx
'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ModelViewer: React.FC = () => {
    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            <EthereumModel />
        </Canvas>
    );
};

export const EthereumModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/ethereum-logo.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
            <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
            <primitive object={myModel.scene} ref={modelRef} />
        </>
    );
};
```

##### Conclusion

Congratulations! You've successfully integrated a 3D model into your Next.js application using Three.js and TypeScript. You can now experiment with different 3D models, lighting and camera settings to create engaging and interactive 3D experiences for your website.

Happy coding and stay tuned for more blog posts and tutorials! If you have any questions or want to showcase your creations, feel free to connect with me on my socials.

-   Email: [0xforkitall@gmail.com](mailto:0xforkitall@gmail.com)
-   Twitter: [@0xforkitall](https://twitter.com/0xforkitall)
-   Reddit: [u/@0xforkitall](https://reddit.com/user/0xforkitall)
-   Instagram: [@0xforkitall](https://www.instagram.com/0xforkitall)
