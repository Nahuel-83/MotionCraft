# Anime.js Showcase

A modern, interactive web application demonstrating the capabilities of Anime.js v4, built with React, TypeScript, and Vite.

## Overview

This project serves as a comprehensive showcase of animation techniques using Anime.js v4. It features a collection of interactive examples, from basic transformations to complex physics-based animations, all implemented with modern web technologies and best practices.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Animation Examples](#animation-examples)
- [Available Scripts](#available-scripts)
- [Documentation](#documentation)
- [License](#license)

## Features

- **Animated Hero Section**: Letter-by-letter text reveal with floating background shapes
- **Interactive Feature Cards**: Nine clickable cards linking to official Anime.js documentation
- **Live Code Examples**: Six interactive demonstrations including:
  - SVG path morphing
  - Grid-based stagger animations
  - Dynamic path following
  - Text reveal animations
  - Physics-based drag and drop
  - Complex movement sequences
- **Responsive Design**: Optimized layout for all screen sizes
- **Performance Optimized**: Smooth 60fps animations with proper cleanup
- **Component Architecture**: Modular structure with separated concerns

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/animaciones.git
cd animaciones
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
animaciones/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.css
│   │   │   ├── FloatingShapes.tsx
│   │   │   ├── FloatingShapes.css
│   │   │   ├── RotatingSquares.tsx
│   │   │   └── RotatingSquares.css
│   │   ├── Features/
│   │   │   ├── Features.tsx
│   │   │   ├── Features.css
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── FeatureCard.css
│   │   │   └── featuresData.ts
│   │   ├── CodeExamples/
│   │   │   ├── CodeExamples.tsx
│   │   │   ├── CodeExamples.css
│   │   │   ├── ExampleCard.tsx
│   │   │   ├── ExampleCard.css
│   │   │   ├── MorphingExample.tsx
│   │   │   ├── StaggerExample.tsx
│   │   │   ├── StaggerExample.css
│   │   │   ├── PathAnimationExample.tsx
│   │   │   ├── PathAnimationExample.css
│   │   │   ├── TextAnimationExample.tsx
│   │   │   ├── TextAnimationExample.css
│   │   │   ├── DraggableExample.tsx
│   │   │   ├── DraggableExample.css
│   │   │   ├── RotationExample.tsx
│   │   │   └── RotationExample.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies

### Core Dependencies
- **React 19.1.1**: UI library for building component-based interfaces
- **TypeScript 5.9.3**: Static type checking and enhanced IDE support
- **Vite 7.1.7**: Next-generation frontend build tool

### Animation Library
- **Anime.js 4.2.0**: Lightweight JavaScript animation engine

### Development Tools
- **ESLint**: Code quality and style enforcement
- **@vitejs/plugin-react-swc**: Fast refresh using SWC compiler

## Animation Examples

### SVG Morphing
Demonstrates smooth transitions between different SVG path definitions:

```typescript
animate('.morph-shape', {
  d: [
    'M50,10 L90,90 L10,90 Z',
    'M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z',
    'M10,50 L50,10 L90,50 L50,90 Z',
    'M30,30 L70,30 L70,70 L30,70 Z',
    'M50,10 L90,90 L10,90 Z'
  ],
  easing: 'inOut(3)',
  duration: 4000,
  loop: true
});
```

### Stagger Grid Animation
Creates cascading effects across a grid of elements:

```typescript
animate('.stagger-dot', {
  scale: [0.5, 1.5, 1],
  rotate: [0, 180, 360],
  delay: stagger(40, { 
    grid: [10, 10], 
    from: 'center' 
  }),
  loop: true,
  alternate: true
});
```

### Path-Based Movement
Animates elements along custom paths with scaling and rotation:

```typescript
animate('.path-circle', {
  translateX: [150, 0],
  translateY: [-80, 0, -80, 0],
  scale: [1, 1.5, 1],
  rotate: [0, 180, 360],
  duration: 2000,
  loop: true
});
```

### Text Reveal Animation
Individual letter animations with staggered timing:

```typescript
animate('.text-letter', {
  translateY: [-50, 0],
  opacity: [0, 1],
  rotate: [-45, 0],
  scale: [0.3, 1],
  delay: stagger(100),
  loop: true
});
```

### Physics-Based Interactions
Spring physics for natural-feeling drag and drop:

```typescript
animate(element, {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  easing: createSpring({
    mass: 1,
    stiffness: 80,
    damping: 10
  })
});
```

### Complex Movement Sequences
Combining multiple transformations with custom easing:

```typescript
animate('.rotation-square', {
  x: [-100, 100, 0],
  rotate: [0, 360],
  scale: [1, 1.3, 1],
  delay: stagger(200),
  easing: 'inOutQuint',
  loop: true
});
```

## Available Scripts

**Development**
```bash
npm run dev      # Start development server with hot reload
```

**Production**
```bash
npm run build    # Compile TypeScript and build for production
npm run preview  # Preview production build locally
```

**Code Quality**
```bash
npm run lint     # Run ESLint for code quality checks
```

## Documentation

This project implements patterns and techniques from the official Anime.js v4 documentation:

- [Getting Started Guide](https://animejs.com/documentation/getting-started/)
- [Animation Properties](https://animejs.com/documentation/properties/)
- [Stagger System](https://animejs.com/documentation/stagger/)
- [Easing Functions](https://animejs.com/documentation/easing/)
- [Timeline API](https://animejs.com/documentation/timeline/)
- [Migration Guide (v3 to v4)](https://github.com/juliangarnier/anime/wiki/Migrating-from-v3-to-v4)

## Key Implementation Details

### Component Architecture
The project follows a modular component structure with clear separation of concerns. Each component is self-contained with its own TypeScript logic and CSS styling.

### Animation Cleanup
All animations properly implement cleanup in useEffect return functions to prevent memory leaks and ensure smooth component unmounting.

### Intersection Observer
The Features section uses Intersection Observer API to trigger animations when elements enter the viewport, improving performance and user experience.

### Type Safety
Full TypeScript integration ensures type safety across all components and animation configurations.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Anime.js team for the excellent animation library
- React team for the robust UI framework
- Vite team for the exceptional development experience