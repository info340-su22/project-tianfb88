import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppHeader(props) {
  const [active, setActive] = useState("Organizer");
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  const navList = [
    {
      title: "Find My Apartment",
      path: "/home",
    },
    {
      title: "Crowd Source",
      path: "/crowd",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Saved List",
      path: "/saved",
    },
    {
      title: "Appointment",
      path: "/appointment",
    },
  ];

  return (
    <>
      <header>
        <div className="container">
          <h1>{active}</h1>
          <p className="app-descr">UW</p>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {navList.map((nav) => {
              return (
                <li
                  key={nav.title}
                  className={
                    "nav-item " + (nav.title === active ? "active" : "")
                  }
                  onClick={() => {
                    setActive(nav.title);
                    Navigate(nav.path);
                  }}
                >
                  <span className="nav-link">
                    {nav.title}
                  </span>
                </li>
              );
            })}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onInput={(event) => setSearch(event.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={() => {
                Navigate("/home?search=" + search);
              }}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default AppHeader;
