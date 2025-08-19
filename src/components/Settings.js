import React from "react";
import {Button} from "react-bootstrap";
import{Moon,Sun}from "lucide-react";
export default function Settings({darkMode,toggleTheme}){
   return(
    <div>
        <h2>Settings</h2>
        <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}{" "}
            {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
    </div>
   );
}