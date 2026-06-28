import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeftShort } from "react-bootstrap-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/quiz.css";

function JoinQuiz() {
  const navigate = useNavigate();
  const [quizCode, setQuizCode] = useState("");
  const handleJoin = () => {
    if (!quizCode.trim()) {
      alert("Please enter the quiz code.");
      return;
    }

    navigate("/quiz");
  };
  const location = useLocation()
  // for the space background
  useEffect(() => {
    if (location.pathname !== "/instructions") return;
    const starsContainer = document.getElementById("stars");

    if (!starsContainer) return;
    starsContainer.innerHTML = "";

    for (let i = 0; i < 180; i++) {
      const star = document.createElement("div");

      const size =
        Math.random() > 0.96
          ? "lg"
          : Math.random() > 0.7
            ? "md"
            : "sm";

      star.className = `star ${size}`;

      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      star.style.animationDuration =
        2 + Math.random() * 6 + "s";

      star.style.animationDelay =
        Math.random() * 5 + "s";

      starsContainer.appendChild(star);
    }
  }, [location.pathname]);




  return (
    <>
      <div id="stars"></div>
      <div className="container py-5">
        <div className='align-items-start'>
          <Link to='/'
            className="btn back-btn d-flex align-items-center gap-2 border border-2 text-white rounded-pill"
          >
            <span> <ArrowLeftShort size={24} /></span>
            <span className=""> Go Back</span>
          </Link>
        </div>
        <div className=" p-2 p-lg-0 d-flex align-items-center justify-content-center mt-3">
          <div
            className="modal-bg rounded-4 w-100 p-4 p-lg-5"
            style={{ maxWidth: "700px" }}
          >
            {/* Heading */}
            <h2 className="text-center text-white fw-bold fs-4 fs-lg-3 mb-4">
              Join QuizBoard
            </h2>

            {/* Quiz Code */}
            <div className="mb-4">
              <label className="form-label quiz-code-label text-white fw-bold">
                Enter Quiz Code
              </label>

              <input
                type="text"
                className={`fw-mono text-center code form-control form-control-lg ${quizCode.length === 6 ? "quiz-code-valid" : " border-1 border-dark"
                  }`}

                placeholder="Enter 6 digit quiz code"
                value={quizCode}
                onChange={(e) => setQuizCode(e.target.value)}
              />
            </div>

            {/* Instructions */}
            <div className="border rounded-3 p-lg-4 p-3 bg-light mb-4">
              <h5 className="fw-bold mb-3">
                Instructions
              </h5>

              <ul className="mb-0 ">
                <li>Read each question carefully before answering.</li>
                <li>Carefully check, The Answer is marked.</li>
                <li>Do not refresh or close the browser, The data will be lost</li>
                <li>Question may have Multiple correct answers, Read the number of option to be selected.</li>

              </ul>
            </div>

            {/* Button */}
            <div className="d-grid">
              <button
                className="glass-flow-btn d-inline-flex align-items-center overflow-hidden text-decoration-none border-0 rounded-2 p-3 fw-bold"
                onClick={handleJoin}
              >
                <span className="text-center text-white w-100  fw-semibold ">
                  Got The Instructions !
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinQuiz;