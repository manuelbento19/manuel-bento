import { type Project } from '@/types'

type ProjectTranslation = Pick<Project, 'description' | 'longDescription' | 'features'>

export const projectsEn: Record<string, ProjectTranslation> = {
  modullum: {
    description:
      'No-code portfolio builder. Create, customise and publish a professional portfolio in minutes with a visual drag-and-drop editor and your own address (name.modullum.com).',
    longDescription:
      'Modullum lets anyone create and publish a professional portfolio without writing code. A simple flow — sign in with GitHub/Google, customise with the visual editor and publish in one click — replaces assembling templates, hosting and integrations. It includes GitHub project import, visit analytics, a digital business card with QR code and light/dark theme, in PT and EN.',
    features: [
      'Visual drag-and-drop editor, 100% no-code',
      'One-click publishing with your own address (name.modullum.com)',
      'Import projects directly from GitHub',
      'Visit and per-project interest analytics',
      'Digital business card with QR code',
      'Responsive portfolio, light/dark theme and PT/EN',
      'Free and Pro plans with integrated billing'
    ]
  },
  rodiva: {
    description:
      'Your pocket mechanic. Personal vehicle maintenance manager to log services, fuel and documents — all offline, no accounts and 100% on your device. Installable PWA with an AI assistant, smart alerts and cost statistics.',
    longDescription:
      'RODIVA was born from the need to track your own vehicle maintenance without relying on cloud services. All history stays on the device: services, fuel, expenses and documents, with full privacy and offline use. It combines an installable PWA experience with an AI assistant that helps understand costs and predict maintenance.',
    features: [
      'Log services and maintenance per vehicle',
      'Fuel and expense tracking with cost statistics',
      'Manage documents associated with the vehicle',
      'AI assistant for recommendations and cost analysis',
      'Smart alerts for deadlines and services',
      'Installable PWA, 100% offline and no accounts'
    ]
  },
  'bentoo-state-man': {
    description:
      'A lightweight state management package for React apps, designed as a simplified alternative to Zustand and the Context API.',
    longDescription:
      '@bentoo/state-man was designed for those who want state management without the Context API boilerplate and without the weight of larger libraries. The API is small, predictable and fully typed, ideal for applications that need a simple and direct store.',
    features: [
      'Minimal and predictable API, inspired by lightweight solutions in the React ecosystem',
      'Replaces the Context API without boilerplate',
      'Fully typed in TypeScript',
      'Easy to integrate into existing React projects'
    ]
  },
  'bentoo-react-lazy': {
    description:
      'A library built to make lazy loading easy in React applications. It allows components to be loaded only when they become visible on screen, offering a way to monitor when elements enter the viewport.',
    longDescription:
      '@bentoo/react-lazy solves lazy loading based on actual viewport visibility, instead of relying only on scroll. Components are loaded asynchronously when they enter the screen, keeping the initial bundle lighter and the experience smoother.',
    features: [
      'Components loaded only when visible in the viewport',
      'Monitoring of when elements enter the screen',
      'Integration with fallbacks and Suspense',
      'TypeScript-typed library, published on npm'
    ]
  },
  linklook: {
    description:
      'A small app that captures and shows a preview of provided links. It generates a quick and intuitive preview of the page content without needing to open the link directly.',
    longDescription:
      'LinkLook is a handy tool to preview any link without opening it. You paste the URL, the app extracts the content and returns a clear preview with the destination’s title, image and description, making it easier to decide before entering the page.',
    features: [
      'Quick link preview without opening the destination',
      'Extraction of title, image and description from the content',
      'Simple and intuitive interface in React + Next.js'
    ]
  },
  image4text: {
    description:
      'An app for converting images to text. It extracts text from images to automate text processing.',
    longDescription:
      'Image4Text converts images to text, allowing you to extract content from screenshots, documents and photos to speed up processes that depend on manual typing. A simple tool with a clear goal: to automate text extraction.',
    features: [
      'Image-to-text conversion',
      'Content extraction from screenshots and photos',
      'Straightforward interface in React + TypeScript'
    ]
  },
  'micro-frontend': {
    description:
      'This project demonstrates a micro frontend application with three independent apps: react-components, vue-components and app. Allowing you to work with React and Vue.',
    longDescription:
      'This project is a proof of concept of micro frontend architecture: three independent applications (two with React and one with Vue) that live in the same product and communicate with each other. A practical demonstration of independent teams sharing a common shell.',
    features: [
      'Micro frontend architecture with three independent applications',
      'React and Vue coexisting in the same product',
      'Communication between independent applications',
      'Build and deploy per application with Vite'
    ]
  },
  'port-scanner': {
    description:
      'A free and open-source network scanner. It is used to discover hosts and services on a computer network by sending packets and analysing the responses.',
    longDescription:
      'A classic open-source network scanner, written in Node.js and TypeScript: it sends packets to the network and analyses the responses to discover active hosts and services. A useful tool for diagnostics and security in local environments.',
    features: [
      'Discovery of hosts and services on a network',
      'Packet sending and analysis',
      'CLI in Node.js + TypeScript',
      'Open source'
    ]
  },
  ollamabot: {
    description:
      'An innovative application that uses the Llama container image to implement an intelligent conversational assistant, similar to GPT, able to understand and generate coherent answers in a variety of contexts, providing a natural and effective interaction experience.',
    longDescription:
      'OllamaBot brings a ChatGPT-style assistant to your own environment: via a Llama/Ollama container, it answers coherently across a variety of contexts with locally run models. The Node.js + Docker backend exposes the model and the React interface consumes the API.',
    features: [
      'Intelligent ChatGPT-style conversational assistant',
      'Llama models via Docker/Ollama container',
      'Backend in Node.js + TypeScript',
      'Smooth React interface for the conversation'
    ]
  },
  'dabanda-oss': {
    description:
      'A platform dedicated to promoting and highlighting open-source projects from various areas and themes. It offers an easy and accessible way to discover and contribute to open-source projects, driving innovation and knowledge sharing.',
    longDescription:
      'DaBanda OSS is an open-source project aggregator organised by areas and themes. The goal is to give visibility to projects that deserve attention, making it easier for the community to discover and contribute, rather than relying only on social media.',
    features: [
      'Catalogue of open-source projects by area and theme',
      'Easy discovery of projects to contribute to',
      'Web platform in Next.js + Tailwind'
    ]
  },
  'unsplash-angular': {
    description: 'An application built in Angular to search images from Unsplash.',
    longDescription:
      'An Angular application that consumes the Unsplash API to search for images. A clean example of external API integration, search state management and gallery rendering, all written in Angular + TypeScript.',
    features: [
      'Integration with the Unsplash API',
      'Real-time image search',
      '100% Angular + TypeScript app'
    ]
  },
  'url-shortener': {
    description:
      'A URL shortener is a website that reduces the length of your URL (Uniform Resource Locator). The idea is to minimise the web page address into something easier to remember and track.',
    longDescription:
      'A complete URL shortener, from frontend to backend: the Node.js/Express API with Prisma and PostgreSQL handles link creation and redirection, while Docker simplifies execution. Long links become short, easy-to-share aliases.',
    features: [
      'Shortening long URLs into short aliases',
      'Backend API in Node.js + Express + Prisma',
      'Persistence with PostgreSQL',
      'Containerised with Docker'
    ]
  },
  'nano-router': {
    description:
      'A small React app to demonstrate how to do routing without react-router-dom, using only basic React.js concepts. It served as a proof of concept that with React basics you can do a lot of things, including routing.',
    longDescription:
      'Nano Router is a proof of concept: a working router built only with base React concepts, without react-router-dom. It demonstrates that with the React essentials you can implement navigation, serving as a study of how routers work internally.',
    features: [
      'Routing without react-router-dom',
      'Implemented with base React concepts',
      'Educational project on how routers work'
    ]
  },
  'image-generator': {
    description:
      'An application that integrates seamlessly with the OpenAI DALL-E API and generates captivating images based on text prompts.',
    longDescription:
      'Image Generator connects to the OpenAI DALL-E API to turn text into images. Just describe what you want and the app returns the generated image, in a simple experience built with Next.js, Tailwind and the official OpenAI API.',
    features: [
      'Image generation with OpenAI DALL-E from text',
      'Real data source via the official OpenAI API',
      'Next.js + Tailwind interface'
    ]
  },
  'studio-spa': {
    description:
      'A React application to show how to optimise performance using lazy loading.',
    longDescription:
      'Studio SPA is a practical example of performance optimisation: a React SPA that demonstrates lazy loading for real — components and routes loaded only when needed, reducing the initial bundle and improving interaction time.',
    features: [
      'Practical demonstration of lazy loading',
      'Reduced initial bundle with on-demand loading',
      'SPA in React + Tailwind'
    ]
  },
  poupanca: {
    description:
      'An application built with React.js with the goal of managing your accounts/savings.',
    longDescription:
      'Poupança is a simple and straightforward manager for your accounts and savings: record transactions, track the balance and keep your personal finances under control in one place. Built with React and styled-components.',
    features: [
      'Account and savings management',
      'Transaction recording and balance tracking',
      'Interface in React + styled-components'
    ]
  }
}
