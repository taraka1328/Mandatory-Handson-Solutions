import React, { useState } from "react";
import EmployeesList from "./EmployeesList";
import ThemeContext from "./ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <h1>Employee Management App</h1>
        <button onClick={toggleTheme} className="toggle-btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        {/* Removed theme props */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
