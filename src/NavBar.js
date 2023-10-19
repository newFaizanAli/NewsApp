import React, { useContext, useState, useRef } from "react";
import { globalState } from "./MainPage";
import { Link, useNavigate } from "react-router-dom";
import { NavItemsSearch } from "./Component";

function Navbar() {
  let [SuggestItems, setSuggestItem] = useState([]);
  let SearchItem = useRef(null);
  let { mode, setTasks, country, categ } = useContext(globalState);

  //use navigate
  const navigate = useNavigate();
  let handledropBtn = (cn) => {
    navigate(`/${!categ ? "general" : categ}/${cn}`);
  };

  let SearchQuery = (e) => {
    if (SearchItem.current.value == "") {
      setSuggestItem([]);
    } else {
      setSuggestItem([]);
      let item = SearchItem.current.value.toLowerCase();
      let ele = NavItemsSearch().filter((e) => {
        return e.includes(item);
      });
      setSuggestItem([...ele]);
    }
  };

  let layout = (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NewsAPP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link exact to={`/general/${country}`} className="nav-link">
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to={`/business/${country}`} className="nav-link">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to={`/health/${country}`} className="nav-link">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to={`/sports/${country}`} className="nav-link">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to={`/entertainment/${country}`}
                  className="nav-link"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to={`/science/${country}`} className="nav-link">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link exact to={`/technology/${country}`} className="nav-link">
                  Technology
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Country
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className={"dropdown-item"}
                    onClick={() => handledropBtn("jp")}
                  >
                    JAPAN
                  </a>
                  <a
                    className={"dropdown-item"}
                    onClick={() => handledropBtn("us")}
                  >
                    USA
                  </a>
                  <a
                    className={"dropdown-item"}
                    onClick={() => handledropBtn("ae")}
                  >
                    UAE
                  </a>
                </div>
              </li>
            </ul>

            <div className="d-flex">
              <div className="d-flex  position-relative flex-column">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search by Category"
                  aria-label="Search"
                  ref={SearchItem}
                  onChange={() => SearchQuery()}
                />
                <div className="position-absolute mt-5">
                  {SuggestItems.map((e) => {
                    return (
                      <Link exact to={`/${e}/${country}`} className={`nav-link text-${mode === "light" ? "dark" : "light"}`}
                      >
                        {e}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <button
                className="btn btn-outline-danger ms-2"
                onClick={() => SearchQuery()}
              >
                Search
              </button>
            </div>
          </div>

          <div className="form-check form-switch pt-3 ms-3">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => setTasks("", "mode")}
              />
            </div>
            <label
              className={`form-check-label text-dark`}
              htmlFor="flexSwitchCheckDefault"
            >
              <p
                className={`text-${mode === "light" ? "dark" : "light"}`}
                id="enable-btn"
              >
                {mode}
              </p>
            </label>
          </div>
        </div>
      </nav>
    </>
  );

  return <>{layout}</>;
}

export { Navbar };
