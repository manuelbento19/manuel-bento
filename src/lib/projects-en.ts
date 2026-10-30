import { type Project } from '@/types'

type ProjectTranslation = Pick<Project, 'description' | 'longDescription' | 'features'>

export const projectsEn: Record<string, ProjectTranslation> = {
  modullum: {
    description:
      'No-code platform to create, customise, and publish professional portfolios in minutes with a visual drag-and-drop editor and your own domain.',
    longDescription:
      'As the founder of Modullum, I developed a platform that lets anyone publish a professional portfolio without writing code. The flow combines GitHub/Google sign-in, a visual drag-and-drop editor, and one-click publishing, replacing the manual setup of templates, hosting, and integrations. The platform includes GitHub project import, visit analytics, a digital business card with QR code, light/dark theme, and PT/EN support, with Free and Pro plans and integrated billing.',
    features: [
      'Visual drag-and-drop editor for building portfolios without code',
      'One-click publishing with your own address (name.modullum.com)',
      'Import projects directly from GitHub',
      'Visit and per-project interest analytics',
      'Digital business card with QR code',
      'Responsive portfolio with light/dark theme and PT/EN support',
      'Free and Pro plans with integrated billing'
    ]
  },
  rodiva: {
    description:
      'A PWA for managing vehicle maintenance privately and offline, with service, fuel, expense, and document tracking, an AI assistant, and cost statistics.',
    longDescription:
      'I developed RODIVA to track vehicle maintenance without relying on cloud services. All history — services, fuel, expenses, and documents — stays on the device, ensuring privacy and offline use. The experience includes PWA installation, smart alerts for deadlines and services, and an AI assistant that helps understand costs and predict maintenance.',
    features: [
      'Log services and maintenance per vehicle',
      'Fuel and expense tracking with cost statistics',
      'Manage documents associated with the vehicle',
      'AI assistant for recommendations and cost analysis',
      'Smart alerts for deadlines and services',
      'Installable PWA, 100% offline, and no account required'
    ]
  },
  'bentoo-state-man': {
    description:
      'A lightweight open-source state management library for React, designed as a simple alternative to Zustand and the Context API.',
    longDescription:
      'I created @bentoo/state-man to simplify state management in React applications without the Context API boilerplate or the weight of larger libraries. The API is small, predictable, and fully typed, making the store easy to integrate into existing projects.',
    features: [
      'Minimal and predictable API, inspired by lightweight solutions in the React ecosystem',
      'Context API alternative without boilerplate',
      'Fully typed in TypeScript',
      'Easy to integrate into existing React projects'
    ]
  },
  'bentoo-react-lazy': {
    description:
      'An open-source React library for lazy loading that loads components only when they enter the viewport.',
    longDescription:
      'I created @bentoo/react-lazy to make lazy loading simpler in React. Instead of relying only on scroll, the library loads components asynchronously when they become visible on screen, keeping the initial bundle lighter and the experience smoother. It integrates with fallbacks and Suspense and is published on npm.',
    features: [
      'Components loaded only when visible in the viewport',
      'Monitoring of when elements enter the screen',
      'Integration with fallbacks and Suspense',
      'TypeScript-typed library published on npm'
    ]
  },
  linklook: {
    description:
      'A web tool for previewing links without opening them, showing the destination’s title, image, and description.',
    longDescription:
      'I developed LinkLook to simplify link previews before opening them. After pasting a URL, the app extracts the page content and returns a clear preview with the destination’s title, image, and description, making the decision more informed. The interface is built with React and Next.js.',
    features: [
      'Preview links without opening the destination',
      'Extract title, image, and description from the page',
      'Simple and intuitive interface in React + Next.js'
    ]
  },
  image4text: {
    description:
      'A web app for extracting text from images, automating tasks that depend on manual transcription.',
    longDescription:
      'I developed Image4Text to convert images into text and simplify content extraction from screenshots, documents, and photos. The app reduces reliance on manual transcription and provides a straightforward interface for automating text processing, built with React, TypeScript, and styled-components.',
    features: [
      'Image-to-text conversion',
      'Content extraction from screenshots, documents, and photos',
      'Straightforward interface in React + TypeScript'
    ]
  },
  'micro-frontend': {
    description:
      'A proof of concept for micro frontend architecture with three independent applications, combining React and Vue in the same product.',
    longDescription:
      'I developed this project to explore micro frontend architecture in practice. The product consists of three independent applications — two in React and one in Vue — that coexist in the same shell and communicate with each other. Each application is built and deployed with Vite, demonstrating how independent teams can share a common product.',
    features: [
      'Micro frontend architecture with three independent applications',
      'React and Vue coexisting in the same product',
      'Communication between independent applications',
      'Build and deploy per application with Vite'
    ]
  },
  'port-scanner': {
    description:
      'An open-source network scanner for discovering active hosts and services by sending and analysing packets.',
    longDescription:
      'I developed Port Scanner as an open-source network diagnostics tool. Written in Node.js and TypeScript, the CLI sends packets and analyses responses to identify active hosts and services, supporting diagnostics and security tasks in local environments.',
    features: [
      'Discover hosts and services on a network',
      'Send and analyse packets',
      'CLI in Node.js + TypeScript',
      'Open source'
    ]
  },
  ollamabot: {
    description:
      'A local conversational assistant that uses Llama models via Ollama and Docker to respond coherently across different contexts.',
    longDescription:
      'I developed OllamaBot to bring a ChatGPT-style conversation experience to your own environment. Through a Llama/Ollama container, the app responds to different contexts using locally run models. The Node.js and Docker backend exposes the model, and the React interface consumes the API for a smooth interaction.',
    features: [
      'Intelligent ChatGPT-style conversational assistant',
      'Llama models running locally via Docker/Ollama',
      'Backend in Node.js + TypeScript',
      'Smooth React interface for the conversation'
    ]
  },
  'dabanda-oss': {
    description:
      'A platform for discovering and highlighting open-source projects by area and theme, making community contributions easier.',
    longDescription:
      'I developed DaBanda OSS to give visibility to open-source projects that deserve attention. The platform organises projects by area and theme, making it easier to discover relevant initiatives and find ways to contribute without relying only on social media.',
    features: [
      'Catalogue of open-source projects by area and theme',
      'Easy discovery of projects to contribute to',
      'Web platform in Next.js + Tailwind'
    ]
  },
  'unsplash-angular': {
    description:
      'An Angular application for searching and exploring Unsplash images through its API.',
    longDescription:
      'I developed this Angular application to explore integration with the Unsplash API. The project allows users to search for images and display the results in a gallery, with search state management and dynamic rendering, using Angular and TypeScript.',
    features: [
      'Integration with the Unsplash API',
      'Real-time image search',
      'Angular + TypeScript application'
    ]
  },
  'url-shortener': {
    description:
      'A URL shortener with its own API, PostgreSQL persistence, and Docker-based execution.',
    longDescription:
      'I developed a complete URL shortener, from frontend to backend. The Node.js and Express API, with Prisma and PostgreSQL, handles link creation and redirection, while Docker simplifies running the project. The result is short, easy-to-share aliases.',
    features: [
      'Shorten long URLs into short aliases',
      'Backend API in Node.js + Express + Prisma',
      'PostgreSQL persistence',
      'Containerised application with Docker'
    ]
  },
  'nano-router': {
    description:
      'A proof of concept for a React router built only with core concepts, without react-router-dom.',
    longDescription:
      'I developed Nano Router as a practical exercise on how routers work internally. The application implements navigation using only core React concepts, without react-router-dom, and serves as a study of how navigation can be built in a simple, educational way.',
    features: [
      'Routing without react-router-dom',
      'Implemented with core React concepts',
      'Educational project on how routers work'
    ]
  },
  'image-generator': {
    description:
      'A Next.js application that turns text prompts into images through the OpenAI DALL-E API.',
    longDescription:
      'I developed Image Generator to explore text-to-image generation with the OpenAI DALL-E API. Simply describe the intended idea to receive the generated image, in a simple experience built with Next.js, Tailwind, and the official OpenAI API.',
    features: [
      'Image generation with OpenAI DALL-E from text',
      'Integration with the official OpenAI API',
      'Next.js + Tailwind interface'
    ]
  },
  'studio-spa': {
    description:
      'A React SPA that demonstrates how lazy loading improves performance through on-demand loading.',
    longDescription:
      'I developed Studio SPA as a practical example of performance optimisation in React. The application demonstrates lazy loading for components and routes, loading each part only when needed, with the goal of reducing the initial bundle and improving interaction time.',
    features: [
      'Practical demonstration of lazy loading',
      'Reduced initial bundle with on-demand loading',
      'SPA in React + Tailwind'
    ]
  },
  poupanca: {
    description:
      'A React application for managing accounts and savings, with transaction recording and balance tracking.',
    longDescription:
      'I developed Poupança to offer a simple way to track accounts and savings. The application lets users record transactions, check the balance, and keep an organised view of their personal finances in one place, with an interface built in React and styled-components.',
    features: [
      'Account and savings management',
      'Transaction recording and balance tracking',
      'Interface in React + styled-components'
    ]
  }
}
