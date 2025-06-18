# 📋 Task Manager Application – React with Tailwind CSS

🚀 **Live Demo**: [https://week-3-react-assignment-stine-ri.vercel.app/](https://week-3-react-assignment-stine-ri.vercel.app/)

![Task Manager Screenshot](./screenshots/download%20(1).png)

---

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)

---

## 📝 Overview

A responsive **Task Manager** application built with **React.js**, **Vite**, and **Tailwind CSS**, demonstrating:

- Component-based architecture
- Custom hooks
- Dark/light theme using Context API
- Local storage for persistent tasks
- Responsive, modern UI with smooth animations

---

## ✨ Features

### ✅ Task Management
- Add, mark complete, and delete tasks
- Filter tasks (All / Active / Completed)
- Tasks saved in browser via localStorage

### 🎨 UI/UX
- Dark and light theme toggle
- Responsive on mobile and desktop
- Smooth transitions and animations
- Clean and accessible design

### ⚛️ React Features
- Component-based structure
- `useLocalStorage` custom hook
- Context API for theme switching
- React Router for navigation

---

## 🛠 Technologies Used

- **Frontend**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📦 Installation

To run locally using `pnpm`:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies

pnpm install

3. Run the development server

pnpm run  dev


4. Open in browser

http://localhost:5173/

📁 Project Structure
src/
├── components/
│   ├── Button/           # Reusable button component
│   ├── Card/             # Card layout component
│   ├── Layout/           # App layout wrapper
│   ├── Navbar/           # Top navigation
│   └── Footer/           # Footer section
├── contexts/
│   └── ThemeContext.js   # Theme (light/dark) context
├── hooks/
│   └── useLocalStorage.js # Custom localStorage hook
├── pages/
│   ├── Home/             # Home page
│   ├── Tasks/            # Task Manager page
│   └── ApiData/          # API data fetch demo
├── App.jsx               # App entry point
└── main.jsx              # React DOM mount



🧪 Available Scripts

pnpm dev        # Start development server
pnpm build      # Build app for production
pnpm preview    # Preview the production build
pnpm lint       # Run ESLint to check code quality


🚀 Deployment
This app is deployed on Vercel.

🔗 Live Link:
https://week-3-react-js-assignment-stine-ri.vercel.app/


To deploy your version:
- Fork this repo
- Go to Vercel
- Import your GitHub repo
- Set up project and deploy 🚀


🪪 License
Distributed under the MIT License.
See LICENSE for more information.
