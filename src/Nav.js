import React from "react";
import "bootstrap/js/dist/dropdown";
import "../src/Style.css"

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white px-3 pe-6">
      <i className="navbar-brand bi bi-justify-left fs-4"></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown me-6">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              YourTask
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">Your Work</a>
              <a className="dropdown-item" href="#">Filter</a>
              <a className="dropdown-item" href="#">Dashboard</a>
              <a className="dropdown-item" href="#">Team</a>
              <a className="dropdown-item" href="#">App</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
