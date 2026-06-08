import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid,
  Customers, Kanban, Line, Area, Bar, Pie, Financial,
  ColorPicker, ColorMapping, Editor,
} from './pages';
import './App.css';
import { useStateContext, ContextProvider } from './contexts/ContextProvider';
import Tooltip from './components/Tooltip';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative bg-main-bg dark:bg-main-dark-bg min-h-screen">
          {/* Settings FAB */}
          <div className="fixed right-5 bottom-5 z-[1000]">
            <Tooltip content="Theme Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="w-14 h-14 rounded-2xl text-white text-2xl flex items-center justify-center shadow-glow-lg hover:scale-110 transition-transform duration-200 pulse-glow"
                style={{ background: `linear-gradient(135deg, ${currentColor}, #a855f7)` }}
              >
                <FiSettings className="animate-spin" style={{ animationDuration: '8s' }} />
              </button>
            </Tooltip>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar h-screen z-10">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}

          {/* Main content */}
          <div
            className={`transition-all duration-300 ${
              activeMenu ? 'md:ml-72' : ''
            } w-full`}
          >
            {/* Navbar */}
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 navbar">
              <Navbar />
            </div>

            {/* Page content */}
            <div className="p-0">
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

const AppWrapper = () => (
  <ContextProvider>
    <App />
  </ContextProvider>
);

export default AppWrapper;