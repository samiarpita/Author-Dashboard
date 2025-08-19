import React from "react";
import profileImage from "../assets/arpita.png";

export default function Profilepage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      
      <div
        style={{
          backgroundColor: "#343a40",
          color: "white",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-circle"
          width={150}
          height={150}
          style={{ border: "5px solid white", marginBottom: "1rem" }}
        />
        <h3>Samia Rahman Arpita</h3>
      </div>
      
      <div
        style={{
          backgroundColor: "white",
          color: "#212529", 
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <p>
          <strong>Computer Science student</strong> with a passion for technology, coding, and
          problem-solving.
          <br />
          Sharing ideas, insights, and learning through articles and projects.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:samiarahmanarpita@gmail.com"
            style={{ color: "#0d6efd", textDecoration: "none" }}
          >
            samiarahmanarpita@gmail.com
          </a>
        </p>
        <p>Date of Joining: 2025-07-02</p>
      </div>
    </div>
  );
}