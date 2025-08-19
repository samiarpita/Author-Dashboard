import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Profilepage from "./components/Profilepage";
import Articlepage from "./components/Articlepage";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState("Profile");
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

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
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar collapsed={collapsed} setPage={setPage} page={page} />
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        
        <Button
          variant="outline-secondary"
          className="mb-3"
          onClick={() => setCollapsed(!collapsed)}
          style={{ alignSelf: "flex-start", width: "auto" }}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>

       <main style ={{ flexGrow: 1, overflowY: "auto"}}>
         {page === "Profile" && <Profilepage />}
         {page === "Article Lists" && <Articlepage />}
         {page === "Settings" && (
           <Settings darkMode={darkMode} toggleTheme={toggleTheme} />           
         )}
       </main>
      </div>
    </div>
  );
}
