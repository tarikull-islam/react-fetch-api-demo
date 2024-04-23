import React from "react";
import "./navbar.css";

const Navbar = ({ setCategory }) => {
  const handleGenarel = () => {
    setCategory("");
  };
  const handleEntertainment = () => {
    setCategory("entertainment");
  };
  const handlesports = () => {
    setCategory("sports");
  };
  const handletechnology = () => {
    setCategory("technology");
  };
  const handlebusiness = () => {
    setCategory("business");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-3">News Msg</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5">
              <li
                onClick={handleGenarel}
                className="nav-item pointer-event poi"
              >
                <div className="nav-link " aria-current="page">
                  Home
                </div>
              </li>
              <li
                className="nav-item pointer-event"
                onClick={handleEntertainment}
              >
                <div className="nav-link">Entertainment</div>
              </li>
              <li className="nav-item pointer-event" onClick={handlesports}>
                <div className="nav-link">sports</div>
              </li>
              <li className="nav-item pointer-event" onClick={handletechnology}>
                <div className="nav-link">technology</div>
              </li>
              <li className="nav-item pointer-event" onClick={handlebusiness}>
                <div className="nav-link">business</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
