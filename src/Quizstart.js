import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import logo from "./images/newlogo2.png";
import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons";
import "./css/start.css";
export default function Quizstart() {

  const navigate = useNavigate();
  // All states 
  const [Sidebar, setSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
  ];

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
  // Go back button
  const handleConfirm = () => {
    setShowModal(false);
    navigate("/instructions");
  };
  // UseEffect for the prevention of page reloading
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="overflow-hidden h-100 " style={theme}>
      <nav
        className="navbar navbar-expand border-bottom text-center p-3 "
        style={{ background: theme.backgroundColor }}
      >
        <div className="container-fluid justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-row gap-2 gap-lg-3">
            <Link
              to="/instructions"
              className="btn border-secondary exit-button"
              style={{ color: theme.color }}
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
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
            {showModal && (
              <div
                className="modal fade show d-block"
                tabIndex="-1"
                style={{ color: theme.color }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content rounded-3 shadow">
                    <div className="modal-body p-4 text-center" style={{ color: theme.color }}>
                      <h5 className="mb-0">Want to Exit Quiz?</h5>
                      <p className="mb-0 mt-1">
                        If you leave now, your current quiz progress will be lost and you'll need to start again.
                      </p>
                    </div>

                    <div className="modal-footer flex-nowrap p-0">
                      <button
                        type="button"
                        className="btn btn-lg exit-button btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
                        onClick={handleConfirm}
                        style={{ color: theme.color }}>
                        <strong>Exit Quiz </strong>
                      </button>

                      <button
                        type="button"
                        className="btn btn-lg btn-success btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0"
                        onClick={() => setShowModal(false)}
                        style={{ color: theme.color }} >
                        Continue! 👍
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button
              className="btn border-secondary sidebar-btn fw-bold d-inline-flex align-items-center gap-2"
              style={{ color: theme.color }}
              onClick={() => setSidebar(currentValue => !currentValue)}
            >
              <span className="d-lg-flex d-none">Questions</span>
              {Sidebar ? <i className="bi bi-box-arrow-left"></i> : <i className="bi bi-box-arrow-right"></i>}
            </button>
          </div>
          <div className=" justify-content-center align-items-center text-center text-white pt-1  ">
            <h2 className="text-center fs-4" style={{ color: theme.color }}>
              QuizBoard
            </h2>

          </div>
          <div className="justify-content-end align-items-center ">
            <button
              className="btn theme align-items-center fs-4"
              onClick={() => changetheme()} style={{ color: theme.color }}>
              {theme.mode === "dark"
                ? <BrightnessHighFill />
                : <MoonFill />}
            </button>

          </div>
        </div>
      </nav>

      <div className={`row flex-wrap-reverse ${Sidebar ? "" : "justify-content-center"} align-items-top gap-2`}>
        {/* Question offcanvas */}
        <div className={`col-12 ${Sidebar ? "col-lg-3 " : "col-lg-1"}`} >
          <div className={`sidebar ${Sidebar ? "show-sidebar" : "hide-sidebar"} d-flex flex-column justify-content-start align-items-start shadow-lg border-end`}
            style={theme}
          >
            <div className="d-flex align-items-center justify-content-between w-100  p-3 border-bottom mt-1 ">
              <h5 className="fs-5 fw-semibold">Questions Menu:</h5>
              <button
                className="btn border-secondary sidebar-btn fw-bold d-inline-flex d-lg-none align-items-center gap-2"
                style={{ color: theme.color }}
                onClick={() => setSidebar(currentValue => !currentValue)}
              >
                <span className="d-lg-flex d-none">Questions</span>
                {Sidebar ? <i className="bi bi-box-arrow-left"></i> : <i className="bi bi-box-arrow-right"></i>}
              </button>
            </div>
            <div className="list-group list-group-flush border-bottom overflow-auto flex-grow-1 custom-scrollbar">
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

        </div>

        {/* body for Questions */}
        {/* */}
        <div className={`col-12 ${Sidebar ? "col-lg-8 " : "col-lg-8 px-5"} p-4`} >
          <div className="question-wrapper my-5 ">
            <p className="">Choose (No of Opt) From Below Options</p>
            <h2 className="fs-4">
              <span className="fw-bolder fs-3">Q.</span> Here the Questions
              goes?
            </h2>
          </div>
          <div className="options d-flex align-items-center justify-content-center flex-column gap-3"  >
            {options.map((option, index) => (
              <div key={index} className="checkbox-wrapper w-100 mb-2" >
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                  style={{ color: theme.color, background: theme.backgroundColor }}
                />

                <label htmlFor={`option-${index}`} className="d-flex align-items-center fs-6 fw-regular w-100" style={{ color: theme.color, background: theme.backgroundColor, borderColor: theme.color }}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className=" d-flex justify-content-between align-item-center mt-5">
            <button type="button" className="btn btn-secondary skip-btn" style={theme}>
              Skip Question
            </button>
            <button type="button" className="btn btn-secondary btn-border-success submit-btn" style={theme}>
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
