import logo from "./images/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quiz from "./Quiz";
import Quizstart from "./Quizstart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header text-white d-flex flex-column align-items-center justify-content-center container">
                <img src={logo} className="App-logo" alt="logo" />

                <h1 className="fw-normal text-dark my-5">
                  Welcome To <span className="fw-bold">Quiz Board</span>, try
                  your Best!
                </h1>

            <Link to="/instructions" className=" cssbuttons-io-button  fs-5 border-0 d-flex align-items-center  overflow-hidden position-relative rounded-4 gap-3  px-5  text-decoration-none"> 
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
