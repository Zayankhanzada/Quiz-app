import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/start.css";
export default function Quizstart() {
  // sidebar closing
  const [Sidebar, setSidebar] = useState(true);

  // dark and light theme
  const [theme, settheme] = useState({
    mode: "light", // Adding a mode key makes logic easier to read
    color: "#1E293B",
    backgroundColor: "#F8FAFC",
  });

  const changetheme = () => {
    if (theme.mode === "light") {
      settheme({
        mode: "dark",
        color: "#F1F5F9", // Soft white text
        backgroundColor: "#353839",
        // Deep matte black
      });
    } else {
      settheme({
        mode: "light",
        color: "#1E293B", // Deep charcoal text
        backgroundColor: "#F8FAFC", // Clean off-white
      });
    }
  };

  return (
    <div className="overflow-hidden h-100 " style={theme}>
      <nav
        className="navbar navbar-expand border-bottom  text-center p-3 "
        style={{ background: theme.backgroundColor }}
      >
        <div className="container-fluid justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-row gap-3">
            <Link
              to="/instructions"
              className="btn border-secondary"
              style={{ color: theme.color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-bar-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </Link>
            <button
              className="btn border-secondary  fw-bold"
              style={{ color: theme.color }}
              onClick={() => setSidebar(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
            </button>
          </div>
          <div className=" justify-content-center text-center text-white pt-1  ">
            <h4 className="text-center fs-4" style={{ color: theme.color }}>
              {" "}
              Mulitple choice Questions
            </h4>
          </div>
          <div className="justiy-content-end ">
            <button
              className="btn btn-primary align-items-center"
              onClick={() => changetheme()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-moon-stars-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="row gap-4 ">
        {/* Question offcanvas */}
        <div className="col-12 col-lg-3  ">
          {Sidebar && (
            <div
              className="sidebar d-flex flex-column shadow-lg "
              style={theme}
            >
              <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
                <span className="fs-5 fw-semibold">Questions:</span>
                <span
                  className="btn border-2 border-secondary align-items-center "
                  onClick={() => setSidebar(false)}
                  style={theme}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                    />
                  </svg>
                </span>
              </div>
              <div className="list-group list-group-flush border-bottom overflow-auto flex-grow-1">
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action  py-3 lh-sm"
                  aria-current="true"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small className=""> <span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  aria-current="true"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  aria-current="true"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
                <a
                  href="/quiz"
                  className="list-group-item list-group-item-action py-3 lh-sm"
                  style={theme}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <small><span class="badge text-bg-secondary">Status</span> </small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* body for Questions */}
        <div
          className={`col-12 ${
            Sidebar ? "col-lg-8" : "col-lg-10"
          } p-4 `}
        >
          <div className=" my-5 ">
            <p className="">Choose From Below Options</p>
            <h2 className="fs-4">
              <span className="fw-bolder fs-3">Q.</span> Here the Questions
              goes?
            </h2>
          </div>
          <div className="options d-flex align-items-center justify-content-center flex-column gap-3">
            <button
              className="btn w-100 p-3 text-start btn-outline-secondary"
              style={theme}
            >
              Click here to select the Option
            </button>
            <button
              className="btn w-100 p-3 text-start btn-outline-secondary"
              style={theme}
            >
              Click here to select the Option
            </button>
            <button
              className="btn w-100 p-3 text-start btn-outline-secondary"
              style={theme}
            >
              Click here to select the Option
            </button>
            <button
              className="btn w-100 p-3 text-start btn-outline-secondary"
              style={theme}
            >
              Click here to select the Option
            </button>
          </div>
          <div className=" mt-5">
            <button type="button" class="btn btn-secondary submit" style={theme}>
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
