import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/quiz.css";
function Quiz() {
  const navigate = useNavigate();
  return (
    <div className="bg-brown min-vh-100">
    <div className="container d-flex align-items-center justify-content-center pt-10 h-100  ">
      <div className=" modal-bg rounded-4 shadow-lg p-5  ">
        <div className="">
          <h1 className="fs-3 fw-mono d-flex align-items-center justify-content-center fw-bold">
            Terms and Conditions
          </h1>
        </div>
        <div className="modal-body py-5">
          <ul>
            <li className="fw-bold  ">
              Read each question carefully before answering.{" "}
            </li>
            <li className="fw-bold ">
              Select the most appropriate answer from the given options.{" "}
            </li>
            <li className="fw-bold ">
              Do not refresh or close the browser during the quiz.{" "}
            </li>
            <li className="fw-bold ">
              Click the Submit button after answering all questions{" "}
            </li>
          </ul>
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
        <Link
  to="/quiz"
  className="start-button position-relative d-flex justify-content-center align-items-center shadow-lg border-0 overflow-hidden text-decoration-none"
>
  <span className="text-center w-100 text-white fs-5 fw-bold">
    Got The Instructions !
  </span>
</Link>
          <button
            onClick={() => navigate("/")}
            className="btn btn-lg btn-disagree"
          >
            Disagree
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Quiz;
