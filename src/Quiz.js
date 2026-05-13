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
      <div className=" modal-bg rounded-4 p-lg-5 p-3  ">
        <div className="">
          <h1 className="fs-3 fw-mono d-flex align-items-center justify-content-center fw-bold">
            Terms and Conditions
          </h1>
        </div>
        <div className="modal-body py-5">
          <ul>
            <li className="fw-bold fs-6 lh-lg  ">
              Read each question carefully before answering.{" "}
            </li>
            <li className="fw-bold fs-6 lh-lg ">
              Select the most appropriate answer from the given options.{" "}
            </li>
            <li className="fw-bold fs-6 lh-lg ">
              Do not refresh or close the browser during the quiz.{" "}
            </li>
            <li className="fw-bold fs-6 lh-lg">
              Click the Submit button after answering all questions{" "}
            </li>
          </ul>
        </div>
        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

        <Link
to="/quiz"
className="glass-flow-btn rounded-2 p-3"
>
<span className="text-center w-100  fs-5 fw-bold ">
  Got The Instructions !
</span>
</Link>
<button onClick = {()=> navigate('/')} className=" cssbuttons-io-button  fs-5 border-0 d-flex align-items-center justify-content-center  overflow-hidden position-relative rounded-4 gap-3 px-5 text-decoration-none"> 
<div className="icon bg-white position-absolute start-0 d-none align-items-center justify-content-center ms-3 rounded-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left fw-bold" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
                  </div>
                <span className="pe-3 fs-5 fw-medium ">Go Back</span>
                  
                </button>   
        </div>
      </div>
    </div>
    </div>
  );
}
export default Quiz;







// <button
//             onClick={() => navigate("/")}
//             className="btn btn-lg btn-disagree"
//           >
//             Disagree
//           </button>