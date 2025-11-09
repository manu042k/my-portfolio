# Portfolio

A personal portfolio website built with Angular.

## About

This portfolio showcases my skills, projects, awards, and contact information. The site features a modern, responsive design with smooth animations and interactive elements to provide an engaging user experience.

## Features

- Responsive design that works on all devices
- Dynamic typing animations for text displays
- Interactive skills section with animated icons
- Project gallery with detailed descriptions
- Awards and recognition section
- Contact form for easy communication
- Dark mode toggle for user preference
- Smooth scrolling navigation
- Custom directives for enhanced interactivity

## Tech Stack

- Angular - Frontend framework
- TypeScript - Programming language
- SCSS - Styling and animations
- Angular SSR - Server-side rendering
- RxJS - Reactive programming

## Project Structure

```
src/app/
├── awards/           # Awards and recognition component
├── contact/          # Contact form component
├── directive/        # Custom directives (typing animations)
├── footer/           # Footer component
├── home/             # Home page component
├── icon-cloud/       # Animated icon cloud component
├── navbar/           # Navigation bar component
├── project-section/  # Projects showcase component
├── service/          # Services (navigation, etc.)
├── shared/           # Shared components and utilities
├── skills-section/   # Skills display component
├── theme-toggle/     # Dark/light mode toggle
└── timeline/         # Timeline component
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

The application will open at http://localhost:4200

## Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:

```bash
npm test
```

## Development

This project uses Angular's component-based architecture. Each section of the portfolio is built as a standalone component for better maintainability and reusability.

Key components include:

- Navigation service for smooth scrolling between sections
- Custom typing directive for animated text effects
- Theme toggle service for dark/light mode persistence
- Responsive design using SCSS mixins and variables

## Live Demo

https://manoj042k.netlify.app
