<div align="center">

# 🛍️ Shoppy Dashboard

### Modern React Admin Dashboard with Analytics & Interactive UI

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge\&logo=react\&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38b2ac?style=for-the-badge\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2-ff6b6b?style=for-the-badge\&logo=recharts\&logoColor=white)](https://recharts.org/)
[![React Router](https://img.shields.io/badge/React_Router-7-ca4245?style=for-the-badge\&logo=react-router\&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A responsive React admin dashboard built with Tailwind CSS and Recharts, featuring analytics, charts, dark mode, and customizable themes.**

[🌐 Live Demo](#-live-demo) • [✨ Features](#-features) • [📦 Installation](#-installation) • [🗂 Project Structure](#-project-structure) • [🛠 Tech Stack](#-tech-stack)

---

</div>

## 🌐 Live Demo

> 🚀 **[Open Live Website →](https://react-dashboard-pi-azure.vercel.app)**

---

## 📌 About The Project

This project was built to practice creating modern admin dashboards using React and Tailwind CSS.
It focuses on reusable components, responsive layouts, charts, theme customization, and interactive UI elements.

---

## ✨ Features

### 📊 Dashboard & Analytics

* Revenue overview cards and analytics
* Interactive charts and statistics
* Recent transactions and sales updates
* Responsive ecommerce dashboard layout

### 📈 Included Charts

* 📈 Line Chart
* 🌊 Area Chart
* 📊 Bar Chart
* 🍩 Pie / Donut Chart
* 💹 Financial Chart
* 🌡️ Color Mapping Chart
* 🔺 Pyramid Chart
* 📚 Stacked Bar Chart

### 📋 Management Pages

* Orders management
* Employees directory
* Customers page

### 🎯 Interactive Apps

* 📅 Calendar
* 🗂 Kanban Board
* ✍️ Rich Text Editor
* 🎨 Color Picker

### 🎨 UI Features

* Dark / Light mode
* Theme customization
* Responsive layout
* Sidebar navigation
* Smooth animations
* Custom scrollbar styling

> ✅ Built entirely using free and open-source libraries.

---

## 📦 Installation

### Prerequisites

* [Node.js](https://nodejs.org/) v16 or higher
* npm v8 or higher

### Quick Start

```bash id="gpr6k4"
# Clone the repository
git clone https://github.com/Srijansingh011/Dashboard.git

# Navigate into the project
cd Dashboard

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at:

```bash id="k9uh4x"
http://localhost:3000
```

### Build for Production

```bash id="9mv1hg"
npm run build
```

This creates an optimized production bundle in the `build/` folder.

---

## 🗂 Project Structure

```bash id="scknys"
dashboard/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── data/
│   ├── App.js
│   ├── App.css
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🛠 Tech Stack

| Technology       | Purpose             |
| ---------------- | ------------------- |
| React            | Frontend Framework  |
| Tailwind CSS     | Styling             |
| Recharts         | Charts & Graphs     |
| React Router DOM | Routing             |
| React Icons      | Icons               |
| PostCSS          | CSS Processing      |
| Autoprefixer     | CSS Vendor Prefixes |

---

## 🖥 Pages & Routes

| Route               | Page                |
| ------------------- | ------------------- |
| `/` or `/ecommerce` | Ecommerce Dashboard |
| `/orders`           | Orders              |
| `/employees`        | Employees           |
| `/customers`        | Customers           |
| `/calendar`         | Calendar            |
| `/kanban`           | Kanban Board        |
| `/editor`           | Rich Text Editor    |
| `/color-picker`     | Color Picker        |
| `/line`             | Line Chart          |
| `/area`             | Area Chart          |
| `/bar`              | Bar Chart           |
| `/pie`              | Pie Chart           |
| `/financial`        | Financial Chart     |
| `/color-mapping`    | Color Mapping       |
| `/pyramid`          | Pyramid Chart       |
| `/stacked`          | Stacked Chart       |

---

## 🎨 Customization

### Theme Settings

Use the ⚙️ settings button to:

* Switch between Light and Dark mode
* Change accent colors
* Customize dashboard appearance

### Adding New Routes

1. Create a new page in `src/pages/`
2. Export it from `src/pages/index.jsx`
3. Add the route inside `App.js`
4. Add navigation links inside `dummy.js`

---

## 🚀 Deployment

### Deploy to Vercel

```bash id="5mjlwm"
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash id="m2ynlf"
npm install --save-dev gh-pages
```

Add this inside `package.json`:

```json id="95b1ta"
"homepage": "https://<your-username>.github.io/Dashboard",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Then run:

```bash id="1f7rcy"
npm run deploy
```

---

## 📚 What I Learned

While building this project, I improved my understanding of:

* React component structure
* Context API state management
* Tailwind CSS layouts
* Recharts integration
* Responsive dashboard design
* Deployment using Vercel

---

## 🐛 Known Issues

### Tailwind CSS Warnings in VS Code

Some `@tailwind` warnings may appear in VS Code because of the default CSS validator.
This does not affect the project build.

Recommended extension:

* Tailwind CSS IntelliSense

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* Recharts
* Tailwind CSS
* React Icons
* Google Fonts (Inter)

---

<div align="center">

Built with React, Tailwind CSS, and Recharts.

Created by Srijan Singh

⭐ If you like this project, feel free to star the repository.

</div>
