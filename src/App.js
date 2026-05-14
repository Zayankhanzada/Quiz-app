import logo from "./images/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Quizstart from "./Quizstart";

function star(){
  const starsContainer = document.getElementById("stars");

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
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={<>
            <div className="stars" id="stars"></div>
            <div className="App">
              
              <header className="container App-header text-white d-flex flex-column align-items-center justify-content-center">
                <img src={logo} className="App-logo" alt="logo" />

                <h1 className="fw-normal text-white my-5">
                  Welcome To <span className="fw-bold">Quiz Board</span>, try
                  your Best!
                </h1>

            <Link to="/instructions" className="main-start-btn fs-5 border-0 d-flex align-items-center  overflow-hidden position-relative rounded-4 gap-3  px-5  text-decoration-none"> 
                <span className="pe-3 fs-5 fw-medium">Let's Start</span>
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
<Link
  to="/instructions"
  className="start-button position-relative d-flex justify-content-center align-items-center shadow-lg border-0 overflow-hidden text-decoration-none"
>
  <span className="text-center w-100 text-white fs-4 fw-bold">Let's Start</span>
</Link>;
