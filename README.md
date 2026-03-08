# Portfolio Site

This repository contains the source code for my personal portfolio landing page.
The site serves as a central hub for exploring my software engineering projects and demonstrations.

Rather than hosting projects directly, the portfolio provides a brief overview of my work and links to individual project repositories and live demos.

## Purpose

The portfolio site is designed to:

* Introduce my software engineering work and interests
* Provide quick access to live demonstrations of projects
* Link to project repositories and documentation
* Serve as a stable entry point for hosted applications

Projects featured on the site may evolve over time as new work is completed.

## Tech Stack

The site is built as a lightweight static frontend using:

* **React**
* **TypeScript**
* **Vite**

This stack provides fast local development, minimal runtime overhead, and easy static deployment.

## Development

Start the development server:

```bash
npm install
npm run dev
```

The site will be available at:

```
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

The optimized static output will be generated in the `dist/` directory.

## Deployment

The site is deployed as a static frontend. The build artifacts from `dist/` can be served by any static hosting platform.

This repository is currently configured to be deployed via **Render Static Sites**, with the domain managed through **Cloudflare DNS**.

## Notes

This repository intentionally remains minimal.
Individual projects are maintained in their own repositories and deployed independently.
