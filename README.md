# Prodev Airbnb Clone Frontend

This project is a frontend clone of the Airbnb application, built with [Next.js](https://nextjs.org/) and [React](https://react.dev/). It demonstrates a modern, component-based architecture and uses TypeScript for type safety.

## Features

- **Landing Page**: A homepage introducing the Airbnb clone system.
- **About Page**: Simple about page.
- **Reusable Components**: Includes `Card` and `Pill` components for UI consistency.
- **API Route Example**: Example API endpoint at `/api/hello`.
- **Image Assets**: Uses local images for UI elements.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **ESLint**: Configured for code quality and consistency.

## Project Structure

```
alx-project-0x00/
├── components/         # Reusable React components (Card, Pill)
├── interfaces/         # TypeScript interfaces (currently empty)
├── pages/              # Next.js pages (index, about, landing, API route)
├── public/             # Static assets (images, icons)
├── styles/             # Global CSS (Tailwind)
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
├── postcss.config.mjs  # PostCSS (for Tailwind)
└── eslint.config.mjs   # ESLint configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## License

This project is for educational purposes.
