# Nexus AI - 3D Marketing & AI Agency

This is the MVP codebase for Nexus AI, a modern digital agency that blends Fortune 500-level 3D aesthetics with rigorous AI automation. 

## Features
- **Immersive 3D Hero:** A liquid glass interactive sphere powered by React Three Fiber and Drei (`MeshTransmissionMaterial`).
- **Premium Tech Aesthetic:** Tailwind CSS configured for a dark mode, neon-accent UI.
- **Scroll Animations:** Built-in Framer Motion page entrance effects.
- **Conversion Focused:** Contact form configured for high-value AI lead qualification constraints.

## Local Setup Instructions

1. **Install Dependencies**
   Navigate to this directory and install all node modules:
   ```bash
   npm install
   ```
   *(Note: This project uses Vite 6 and Tailwind CSS v4 via the `@tailwindcss/vite` plugin. If you face peer dependency warnings during install, use `--legacy-peer-deps`)*

2. **Run Local Development Server**
   ```bash
   npm run dev
   ```
   This will start the Vite dev server on `http://localhost:5173`. The 3D scene compiles best on newer web browsers that support robust WebGL contexts.

## Production Build

To build the static assets for production deployment:
```bash
npm run build
```
The output will be placed in the `dist` directory.

## Assets & Structure
- `src/index.css`: Defines the global color tokens, Tailwind entry point, and custom CSS animations.
- `src/App.jsx`: The main layout orchestrator assembling the site sections.
- `src/components/Hero.jsx`: Contains the `LiquidGlassShape` Three.js canvas.
- `src/components/About.jsx`: Grid layout of agency capabilities.
- `src/components/Testimonials.jsx`: Client proof block.
- `src/components/Contact.jsx`: Integrated mock-form for lead generation.

## Accessibility and Performance Notes
- **3D Fallback**: The canvas relies on WebGL. For production, consider wrapping the `<Canvas>` in an Error Boundary and providing a static CSS gradient fallback for devices without WebGL support.
- **Performance**: The `MeshTransmissionMaterial` is computationally heavy (simulating refraction). To support lower-end mobile devices, you can conditionally lower `samples` and `resolution` props based on the `useFrame` framerate.
- **A11y**: Color contrasts in the dark theme meet WCAG AA standards. Ensure the Contact form (`id="contact"`) inputs retain visible focus states (currently handled via Tailwind `focus:ring` classes).
