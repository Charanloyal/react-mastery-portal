
### 🚀 Project: ReactEngine v4.0 (Full-Stack Dashboard)

**Frontend Architecture & State Management**

* Engineered a dynamic single-page application (SPA) using **React.js** and **Vite**, optimizing build speeds and client-side performance.
* Implemented **React Router v6** for seamless, page-reload-free navigation between the Home Manager and Data Dashboard modules.
* Utilized the **Context API** and custom hooks to manage global application state, successfully building a dynamic Light/Dark mode theme toggler.

**UI/UX & Component Design**

* Designed a highly responsive, modern interface using **Tailwind CSS**, featuring custom gradient text, interactive hover states, and glassmorphism (backdrop-blur) effects.
* Built an interactive **Development Planner** component utilizing `useState` for real-time task tracking, dynamic CSS class rendering, and mathematical progress bar visualizations.

**Backend & API Integration**

* Designed and initialized a custom **Node.js** and **Express.js** REST API to serve as the data backbone for the application frontend.
* Structured a relational **SQL** database and utilized the `mysql2` library to establish a secure connection pool, successfully querying and serving live data.
* Replaced static mock APIs with real-time `fetch` requests to the custom local server, managing CORS protocols and asynchronous data rendering in React.

**DevOps & Deployment**

* Troubleshot and resolved complex Windows-specific `ENAMETOOLONG` path limits and dependency resolution errors (`ERESOLVE`) during the build process.
* Configured Git version control (implementing `.gitignore` for node modules) and successfully deployed the compiled production build globally via **GitHub Pages.
