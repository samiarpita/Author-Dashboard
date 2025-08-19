import "../pagination.css";
import React,{useState} from "react";
import { Badge,Pagination} from "react-bootstrap";

const dummyTitles=[
  "Easier SD Course - Guideline for Beginners to Learn Software Development",
  "Mastering React.js - From Basics to Building Your First Web Application",
  "Practical Guide to Version Control - Using Git and GitHub Like a Pro",
  "How to Write Clean Code",
  "Designing Beautiful Interfaces - A Beginner's Guide to UI/UX Principles",
  "Essential Job Interview Preparation Tips for Fresh Graduates",
  "Practical Guide to Version Control - Using Git and GitHub Like a Pro",
  "Healthy Lifestyle Tips for Students with a Busy Academic Schedule",
  "UI/UX Design Principles",
  "Git and GitHub Basics",
  "Understanding Mental Health",
  "Productivity Hacks That Work",
  "Responsive Web Design Tips",
  "Building a Career in Data Science - Skills, Tools, and Roadmap",
  "Understanding Blockchain",
  "Time Management Skills",
];

const dummyLastEdited = [
  "2 days ago", "1 week ago", "3 hours ago", "5 days ago", "2 weeks ago",
  "1 day ago", "4 hours ago", "3 weeks ago", "10 minutes ago", "8 hours ago",
  "6 days ago", "2 hours ago", "1 month ago", "15 minutes ago", "12 hours ago",
  "20 days ago", "7 hours ago", "3 days ago", "9 hours ago", "18 days ago",
];

const dummyArticles = dummyTitles.map((title, i) => ({
  id: i + 1,
  title,
  lastEdited: dummyLastEdited[i],
  status:
    i % 4 === 0
      ? "Published"
      : i % 4 === 1
      ? "Draft"
      : i % 4 === 2
      ? "Pending"
      : "Need More Research",
}));

const statusColor = {
  Published: "success",
  Draft: "warning",
  Pending: "secondary",
  "Need More Research": "info",
};

export default function Articlepage() {
  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); 

  const pageCount = Math.ceil(dummyArticles.length / itemsPerPage);
  const articles = dummyArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
  <div>
    
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="m-0">All Articles</h5>

    </div>

  <table className="table table-hover table-bordered align-middle custom-article-table">
  <thead className="table-secondary">
  <tr>
    <th style={{ width: "60%" }}>Title</th>
    <th style={{ width: "20%", textAlign: "center" }}>Last Edited</th>
    <th style={{ width: "20%", textAlign: "center" }}>Status</th>
  </tr>
  </thead>

  <tbody>
    {articles.map((article) => (
      <tr key={article.id}>
        <td>{article.title}</td>
        <td className="text-center text-muted">{article.lastEdited}</td>
        <td className="text-center">
          <Badge pill bg={statusColor[article.status]}>
            {article.status}
          </Badge>
        </td>

      </tr>
    ))}
  </tbody>
</table>

<div className="d-flex justify-content-end align-items-center gap-3 mt-3">
  
  <Pagination className="m-0">
    <Pagination.Prev
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
    />
    {[...Array(pageCount)].map((_, i) => (
      <Pagination.Item
        key={i}
        active={i + 1 === currentPage}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </Pagination.Item>
    ))}
    <Pagination.Next
      disabled={currentPage === pageCount}
      onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
    />
  </Pagination>

  <div className="d-flex align-items-center gap-2">
    <label className="m-0">Per page:</label>
    <select
      value={itemsPerPage}
      onChange={(e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }}
      className="form-select"
      style={{width: 100}}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
    </select>
  </div>
</div>

  </div>
  );

}