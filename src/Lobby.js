import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/start.css"
import "./App.css";
import "./css/lobby.css"




export default function Lobby() {
  const navigate =useNavigate();
    const location = useLocation()
    // for the space background
    useEffect(() => {
        if (location.pathname !== "/lobby") return;
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
    const generateQuizCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const [quizCode] = useState(generateQuizCode);
    return (
        <>
            <div id="stars"></div>

            <div className="container-fluid position-relative z-2">
                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-lg-10">

                        <div className="lobby-card p-4">

                            <h2 className="text-center text-white mb-4">
                                Quiz Lobby
                            </h2>

                            <div className="row g-4">

                                {/* Join Code */}
                                <div className="col-md-4">
                                    <div className="glass-card h-100 text-center">

                                        <h4 className="text-white mb-4">
                                            Join Quiz
                                        </h4>

                                        <div className="code-box  bg-white text-dark fw-sans fs-3 fw-bold text-center mb-4">
                                            {quizCode}
                                        </div>

                                        <div className="qr-wrapper bg-white p-4 px-0 mb-4 rounded-3">
                                            <QRCode
                                                value={`http://192.168.1.73:3000`}
                                                size={170}
                                                bgColor="#fff"
                                                fgColor="#000"
                                            />
                                        </div>

                                        <button
                                            className="btn btn-primary w-100"
                                            onClick={() => navigator.clipboard.writeText(quizCode)}
                                        >
                                            📋 Copy Code
                                        </button>

                                    </div>
                                </div>

                                {/* Participants */}
                                <div className="col-md-8">
                                    <div className="glass-card">

                                        <div className="d-flex justify-content-between align-items-center mb-3">

                                            <h4 className="text-white m-0">
                                                Participants
                                            </h4>

                                            <span className="badge bg-primary fs-6">
                                                12
                                            </span>

                                        </div>

                                        <div className="participant-list">

                                            {[
                                                "Ali",
                                                "Ahmed",
                                                "John",
                                                "Sarah",
                                                "Ayesha",
                                                "Bilal",
                                                "Hamza",
                                                "Zain",
                                                "Usman",
                                                "Hassan",
                                                "Saad",
                                                "Fatima",
                                                "Noor",
                                                "Areeba",
                                            ].map((name, index) => (
                                                <div
                                                    key={index}
                                                    className="participant-item"
                                                >
                                                    👤 {name}
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="text-center mt-4">
                                
                                    <button
                                        className="glass-flow-btn bg-primary d-inline-flex align-items-center overflow-hidden text-decoration-none border-0 rounded-2 p-3 fw-bold"
                                        onClick={() => navigate('/quiz') }
                                    >
                                        <span className="text-center text-white w-100   fw-semibold ">
                                            Start Quiz !
                                        </span>
                                    </button>
                                
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
