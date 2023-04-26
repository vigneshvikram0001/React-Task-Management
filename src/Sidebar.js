import React from "react";
import "./Style.css";
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="bg-white sidebar">
      <div className="m-3 brand">
        <ion-icon name="logo-xing" className="me-3 fs-5"></ion-icon>
        <span className="brand-name fs-4">SKYTOOL</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-1 my-1" href="#a">
          <i className="bi bi-speedometer2 fs-6 me-3"></i>
          <Link to="/Application" className="fs-6 link">DASHBOARD</Link>
          {/* <span className="fs-6">DASHBOARD</span> */}
        </a>
        <a className="list-group-item py-1 my-1" href="#a">
          <i className="bi bi-layout-text-sidebar-reverse fs-6 me-3"></i>
          <Link to="/" className="fs-6 link">PROJECTS</Link>
          {/* <span className="fs-6">PROJECTS</span> */}
        </a>
        <a className="list-group-item py-1 my-1" href="#a">
          <i className="bi bi-list-task fs-6 me-3"></i>
          <span className="fs-6">TASKS</span>
        </a>
        <a className="list-group-item py-1 my-1" href="#a">
          <i className="bi bi-people fs-6 me-3"></i>
          <span className="fs-6">LEAD</span>
        </a>
        <a className="list-group-item py-1 my-1" href="#a">
          <i className="bi bi-people fs-6 me-3"></i>
          <span className="fs-6">SUPPORT</span>
        </a>
        <a className="list-group-item py-1 my-1 log" href="#a">
          <i className="bi bi-power fs-6 me-3"></i>
          <span className="fs-6">Logout</span>
        </a>
      </div>
    </div>
  );
}
