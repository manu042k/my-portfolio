# Manoj Manjunatha - Portfolio

A personal portfolio website built with Angular, featuring a modern, highly interactive design. 

## About

This portfolio showcases my professional experience, projects, skills, and education. The site features a continuous frame-by-frame scroll hero animation and a dynamic WebGL Physarum (slime mold) simulation as a background, creating a deeply engaging and unique user experience.

## Features

- **WebGL Physarum Simulation:** An interactive, living background built with WebGL and customized shaders.
- **Hero Scroll Animation:** A high-performance, canvas-based frame-by-frame scroll animation synced to the user's scroll position, inspired by Apple's product pages.
- **Single-Page Resume Overlay:** Clean, responsive overlay displaying experience, projects, education, and skills over the background.
- **Modern Angular Architecture:** Built with the latest Angular version using standalone components and signals.
- **Responsive Design:** Optimized for both desktop and mobile viewing, including responsive contact icons.

## Tech Stack

- **Angular (Standalone Components)** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling, variables, and CSS-based parallax
- **WebGL / HTML5 Canvas** - High-performance graphics and animations
- **Node.js & npm** - Dependency management and build tools

## Project Structure

```text
src/app/
├── components/
│   └── organism-bg/    # WebGL Physarum simulation background component
├── app.component.html  # Main layout, resume content, and scroll animation overlay
├── app.component.scss  # Global and component styles
└── app.component.ts    # Main component logic and resume data source
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/manu042k/my-portfolio.git
```

Navigate to the project directory:

```bash
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The application will open at `http://localhost:4200`

## Build & Optimization

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Live Demo

[https://manu042k.tech](https://manu042k.tech)
