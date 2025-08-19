import React, { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { Menu, User, FileText, Home, Moon, Sun } from "lucide-react";


export default function Sidebar({ collapsed, setPage }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <div
      
      className={`d-flex flex-column justify-content-between p-3 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
      style={{ width: collapsed ? "60px" : "200px", height: "100vh", transition: "0.3s" }}
    >
      
      <div>
        <div className="d-flex justify-content-center mb-4">
        <Button
          variant={darkMode ? "outline-light" : "outline-secondary"}
          onClick={() => setPage("Profile")}
        >
          <Home size={20} />
        </Button>
      </div>

        <div
          className="d-flex flex-column gap-3"
          style={{ alignItems: collapsed ? "center" : "flex-start" }}
        >
          <Button variant="light" onClick={() => setPage("Profile")}>
            <User size={16} /> {!collapsed && "Profile"}
          </Button>
          <Button variant="light" onClick={() => setPage("Article Lists")}>
            <FileText size={16} /> {!collapsed && "Article Lists"}
          </Button>
          <Button variant="light" onClick={() => setPage("Settings")}>
            <FileText size={16} /> {!collapsed && "Settings"}
          </Button>
        </div>
      </div>

      <div className="mt-auto pt-3">
        <Button
          variant={darkMode ? "outline-light" : "outline-dark"} 
          onClick={toggleTheme}
        >
         {darkMode ? <Sun size={16}/> : <Moon size={16} />} {!collapsed && (darkMode ? "Light Mode" : "Dark Mode")}
        </Button>
      </div>
     </div>
  );
  
}
