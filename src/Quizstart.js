import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "./images/newlogo2.png";
import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons";
import "./css/start.css";
export default function Quizstart() {
  // sidebar closing
  const [Sidebar, setSidebar] = useState(true);

  // dark and light theme
  const [theme, settheme] = useState({
    mode: "light",
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
              onClick={() => setSidebar(currentValue => !currentValue)}
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
            <h2 className="text-center fs-4" style={{ color: theme.color }}>
              QuizBoard
            </h2>

          </div>
          <div className="justify-content-end ">
            <button
              className="btn btn-primary theme align-items-center fs-4"
              onClick={() => changetheme()}>
              {theme.mode === "dark"
                ? <BrightnessHighFill />
                : <MoonFill />}
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
                <h5 className="fs-5 fw-semibold">Questions:</h5>

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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small className=""> <span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
                    <small><span className="badge text-bg-secondary">Status</span> </small>
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
        <div className={`col-12 ${Sidebar ? "col-lg-8 " : "col-lg-10 px-5"} p-4 `} >
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
            <button type="button" className="btn btn-secondary submit" style={theme}>
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
