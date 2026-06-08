<div align="center">

# 🛍️ Shoppy Dashboard

### A Modern, Feature-Rich React Admin Dashboard

[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2-ff6b6b?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)
[![React Router](https://img.shields.io/badge/React_Router-7-ca4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**A stunning, fully open-source admin dashboard built with React 19, Tailwind CSS, and Recharts — zero paid dependencies.**

[🌐 Live Demo](#-live-demo) • [✨ Features](#-features) • [📦 Installation](#-installation) • [🗂 Project Structure](#-project-structure) • [📸 Screenshots](#-screenshots) • [🛠 Tech Stack](#-tech-stack)

---

</div>

## 🌐 Live Demo

> 🚀 **[Open Live Website →](https://YOUR_USERNAME.github.io/dashboard)**

_Replace `YOUR_USERNAME` with your GitHub username after deploying._

---

## ✨ Features

### 📊 Dashboard & Analytics
- **Ecommerce Home** — Revenue hero banner with live sparkline, stat cards with trend indicators, interactive revenue vs. expenses area chart, recent transactions feed, weekly highlights, and product performance with progress bars
- **8 Interactive Charts** powered by Recharts (zero cost):
  - 📈 Line Chart — Multi-series inflation rate data
  - 🌊 Area Chart — Gradient spline area with country comparison
  - 📊 Bar Chart — Olympic medal counts
  - 🍩 Pie / Donut Chart — Project cost breakdown with hover effects
  - 💹 Financial Chart — OHLC stock price with volume bars
  - 🌡️ Color Mapping Chart — Temperature range visualization
  - 🔺 Pyramid Chart — Food pyramid with gradient bars
  - 📚 Stacked Bar Chart — Revenue breakdown by series

### 📋 Data Pages
- **Orders** — Full orders table with product images, status badges, and pricing
- **Employees** — Staff directory with avatars and designations
- **Customers** — Customer management with status indicators

### 🎯 App Pages
- **📅 Calendar** — Fully functional month calendar with event dots, navigation, and upcoming events sidebar
- **🗂 Kanban Board** — Drag-and-drop task management with 4 columns, priority badges, and tag colors
- **✍️ Rich Text Editor** — Native `execCommand` editor with full toolbar (bold, italic, headings, lists, alignment, text color, word count)
- **🎨 Color Picker** — Advanced color picker with HEX/RGB/HSL values, copy to clipboard, preset palette, and live theme integration

### 🎨 Design System
- **Glassmorphism** navbar with blur backdrop
- **Gradient** hero cards and sidebar accents
- **Dark mode** support across all pages
- **Custom animated tooltip** component (replaces Syncfusion)
- **Spinning settings FAB** with theme panel
- **Responsive** layout for mobile, tablet, and desktop
- **Micro-animations** on hover (scale, shadow, float)
- **Custom scrollbar** with gradient thumb
- **Inter font** from Google Fonts

### ⚙️ Theme Settings
- Toggle **Light / Dark mode**
- Choose from **6 preset accent colors**
- **Custom color picker** for any hex color
- All preferences saved to **localStorage**

---

## 📦 Installation

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/dashboard.git

# 2. Navigate into the project
cd dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000** 🎉

### Build for Production

```bash
npm run build
```

This creates an optimized production bundle in the `build/` folder.

---

## 🗂 Project Structure

```
dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   ├── Sidebar.jsx          # Side navigation menu
│   │   ├── ThemeSettings.jsx    # Theme settings panel
│   │   ├── Cart.jsx             # Shopping cart drawer
│   │   ├── Chat.jsx             # Chat messages dropdown
│   │   ├── Notification.jsx     # Notifications dropdown
│   │   ├── UserProfile.jsx      # User profile dropdown
│   │   ├── Header.jsx           # Page section header
│   │   ├── ChartsHeader.jsx     # Chart page header
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Tooltip.jsx          # Custom tooltip (no Syncfusion!)
│   │   ├── Footer.jsx           # Page footer
│   │   └── index.jsx            # Barrel exports
│   │
│   ├── pages/                   # All page components
│   │   ├── Ecommerce.jsx        # 🏠 Dashboard home
│   │   ├── Orders.jsx           # 📦 Orders management
│   │   ├── Employees.jsx        # 👥 Employee directory
│   │   ├── Customers.jsx        # 🤝 Customer management
│   │   ├── Calendar.jsx         # 📅 Interactive calendar
│   │   ├── Kanban.jsx           # 🗂 Drag-and-drop board
│   │   ├── Editor.jsx           # ✍️ Rich text editor
│   │   ├── ColorPicker.jsx      # 🎨 Color picker tool
│   │   └── Charts/
│   │       ├── Line.jsx         # 📈 Line chart
│   │       ├── Area.jsx         # 🌊 Area chart
│   │       ├── Bar.jsx          # 📊 Bar chart
│   │       ├── Pie.jsx          # 🍩 Pie / donut chart
│   │       ├── Financial.jsx    # 💹 Financial chart
│   │       ├── ColorMapping.jsx # 🌡️ Color mapping chart
│   │       ├── Pyramid.jsx      # 🔺 Pyramid chart
│   │       └── Stacked.jsx      # 📚 Stacked bar chart
│   │
│   ├── contexts/
│   │   └── ContextProvider.js   # Global state (theme, sidebar, menus)
│   │
│   ├── data/
│   │   └── dummy.js             # Sample data & chart configs
│   │
│   ├── App.js                   # Root app with routing
│   ├── App.css                  # App-level styles
│   └── index.css                # Tailwind + global styles
│
├── .vscode/
│   └── settings.json            # VS Code config (silences @tailwind warning)
├── tailwind.config.js           # Tailwind design tokens
├── package.json
└── README.md
```

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| [React](https://reactjs.org/) | UI framework | 19 |
| [React Router DOM](https://reactrouter.com/) | Client-side routing | 7 |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling | 3 |
| [Recharts](https://recharts.org/) | Chart library (free & open source) | 2 |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library | 5 |
| [PostCSS](https://postcss.org/) | CSS processing | 8 |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | CSS vendor prefixes | 10 |

> ✅ **Zero paid dependencies** — No Syncfusion, no premium libraries required.

---

## 🖥 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` or `/ecommerce` | Ecommerce Dashboard | Main home with analytics |
| `/orders` | Orders | Order management table |
| `/employees` | Employees | Staff directory |
| `/customers` | Customers | Customer management |
| `/calendar` | Calendar | Interactive monthly calendar |
| `/kanban` | Kanban | Drag-and-drop task board |
| `/editor` | Editor | Rich text editor |
| `/color-picker` | Color Picker | Color tool with HEX/RGB/HSL |
| `/line` | Line Chart | Multi-series line chart |
| `/area` | Area Chart | Gradient area chart |
| `/bar` | Bar Chart | Olympic medals bar chart |
| `/pie` | Pie Chart | Donut chart with legend |
| `/financial` | Financial Chart | OHLC stock chart |
| `/color-mapping` | Color Mapping | Temperature range chart |
| `/pyramid` | Pyramid Chart | Food pyramid visualization |
| `/stacked` | Stacked Chart | Stacked revenue bar chart |

---

## 🎨 Customization

### Changing the Accent Color
Click the **⚙️ gear button** (bottom-right corner) to open the Theme Settings panel. You can:
- Switch between Light and Dark mode
- Pick from 6 preset accent colors
- Enter any custom HEX color

Changes are saved to `localStorage` and persist across page refreshes.

### Adding New Routes
1. Create your page component in `src/pages/`
2. Export it from `src/pages/index.jsx`
3. Add a `<Route>` in `src/App.js`
4. Add a link entry in `src/data/dummy.js` under the `links` array

### Modifying Colors / Design Tokens
Edit `tailwind.config.js` to change the design system:

```js
theme: {
  extend: {
    colors: {
      'main-bg': '#F0F2FF',        // Light mode background
      'main-dark-bg': '#0F0E17',   // Dark mode background
    }
  }
}
```

---

## 🚀 Deployment

### Deploy to GitHub Pages (Free)

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json:
#    "homepage": "https://YOUR_USERNAME.github.io/dashboard"
#    "predeploy": "npm run build"
#    "deploy": "gh-pages -d build"

# 3. Deploy
npm run deploy
```

### Deploy to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Then visit your app at `https://your-project.vercel.app`

### Deploy to Netlify (Free)

1. Run `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done! 🎉

---

## 🐛 Known Issues & Fixes

### `@tailwind` shows red squiggles in VS Code
This is a false positive from VS Code's CSS validator. It does **not** affect the build.

**Fix:** A `.vscode/settings.json` file is already included in this repo that disables the CSS validator for this project. If you still see it, press `Ctrl+Shift+P` → `Reload Window`.

Alternatively, install the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) VS Code extension.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial projects.

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgements

- [Recharts](https://recharts.org/) — Beautiful, composable charting for React
- [React Icons](https://react-icons.github.io/react-icons/) — Thousands of icons
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) — Clean, modern typeface

---

<div align="center">

**Made with ❤️ using React + Tailwind CSS + Recharts**

⭐ If you found this helpful, please give it a star!

</div>
