import logo from './images/logo.png';
import './App.css';
import {BrowserRouter, Routes , Route , Link} from 'react-router-dom'
import Quiz from './Quiz';
import Quizstart from './Quizstart';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <h1 className="fw-normal my-5">
                  Welcome To <span className="fw-bold">Quiz Board</span>, try your Best!
                </h1>

                <Link
                  to="/instructions"
                  className="start-button position-relative d-flex justify-content-center align-items-center shadow-lg border-0 overflow-hidden text-decoration-none"
                >
                  <span className="text-center w-100 text-white fs-4 fw-bold">
                    Let's Start
                  </span>
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
