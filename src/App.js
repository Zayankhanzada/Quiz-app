import logo from "./images/newlogo2.png";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import Quiz from "./Quiz";
import Quizstart from "./Quizstart";

function App() {

  useEffect(() => {
    const starsContainer = document.getElementById("stars");

    // Prevent duplicate stars
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
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <>
              <div className="stars" id="stars"></div>
              <div className="App">
                <header className="container App-header text-white d-flex flex-column align-items-center justify-content-center my-5 pt-5">
                  <span className="live-badge d-inline-flex align-items-center fw-semibold">Live-AI Quiz Platform</span>
                  <img src={logo} className="App-logo " alt="logo" />
                  <h1 className="fw-normal text-white ">
                    Welcome To Our <span className="fw-bold gradient-text">Quiz Board</span>, try your Best!
                  </h1>
                  <p className="py-3 fs-6 fs-lg-5">Create & join real-time quizzes.<br />
                    Compete, learn, dominate the leaderboard.</p>

                  <Link
                    to="/instructions"
                    className="main-start-btn fs-5 border-0 d-flex align-items-center overflow-hidden position-relative rounded-4 gap-3 px-5 text-decoration-none"
                  >
                    <span className="pe-3 fs-5 fw-medium">
                      Let's Dive! 😎
                    </span>

                    <div className="icon bg-white position-absolute d-flex align-items-center justify-content-center ms-3 rounded-3">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>

                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>

                </header>
              </div>
            </>
          }
        />

        {/* QUIZ ROUTE */}
        <Route path="/instructions" element={<Quiz />} />

        <Route path="/quiz" element={<Quizstart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;