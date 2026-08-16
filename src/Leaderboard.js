import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './css/leaderboard.css'
import logo from './images/newlogo2.png'


const players = [
    { rank: 1, name: "Alex", score: 2560, correct: 96, wrong: 24 },
    { rank: 2, name: "Sara", score: 2340, correct: 94, wrong: 22 },
    { rank: 3, name: "Ahmed", score: 2210, correct: 92, wrong: 21 },
    { rank: 4, name: "John", score: 2050, correct: 91, wrong: 20 },
    { rank: 5, name: "Max", score: 1980, correct: 89, wrong: 19 },
    { rank: 6, name: "Maria", score: 1920, correct: 87, wrong: 18 },
    { rank: 7, name: "David", score: 1850, correct: 85, wrong: 17 },
    { rank: 8, name: "James", score: 1760, correct: 84, wrong: 16 },
];

export function Leaderboard() {
    const [showDetails, setShowDetails] = useState(false);
    const location = useLocation()
    // for the space background
    useEffect(() => {
        if (location.pathname !== "/leaderboard") return;
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
            <div className="container py-5">
                <div id='stars'></div>
                {/* Header */}
                <div className="text-center mb-4">
                    <h1 className=" text-white fw-bold">
                        🏆 Quiz Result
                    </h1>
                    <p className="text-white">
                        See how they rank against each other !
                    </p>
                </div>

                {/* Tabs */}
                {/* <div className="d-flex justify-content-center mb-5">
                <div className="btn-group">
                    {["Today", "This Week", "All Time"].map((tab) => (
                        <button
                            key={tab}
                            className={`btn ${activeTab === tab
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div> */}

                {/* Top 3 */}
                <div className="row justify-content-center align-items-end g-4 mb-5">
                    <div className="top-three-section">
                        <div className="text-center mb-4">
                            <button
                                className="btn btn-outline-info display-btn fw-bold rounded-5 p-3"
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                {showDetails ? "👁 Hide " : "✨ Show     Winners"}
                            </button>
                        </div>

                        <div className="row justify-content-center align-items-end g-4 mb-5">

                            {/* SECOND PLACE */}
                            <div className="col-10 col-sm-8 col-md-4 col-lg-3">
                                <div
                                    className={`flip-card top-card silver-card ${showDetails ? "force-flipped" : ""
                                        }`}
                                >
                                    <div className="flip-card-inner text-center w-100 h-100 position-relative">
                                        <div className="flip-card-front">
                                            <div className="rank-medal">
                                                🥈
                                            </div>
                                            <div className="rank-number text-white test">
                                                #2
                                            </div>

                                            <div className="rank-label">
                                                SECOND PLACE
                                            </div>
                                        </div>
                                        <div className="flip-card-back">
                                            <div className="rank-medal">
                                                🥈
                                            </div>

                                            <h3 className="player-name text-white fw-bolder fs-5 my-1">
                                                {players[1].name}
                                            </h3>
                                            <div className="player-score fw-bolder">
                                                {players[1].score.toLocaleString()}
                                            </div>

                                            <small>POINTS</small>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-md-4 col-lg-3">
                                <div
                                    className={`flip-card top-card gold-card ${showDetails ? "force-flipped" : ""
                                        }`}
                                >
                                    <div className="flip-card-inner text-center w-100 h-100 position-relative">

                                        <div className="flip-card-front">
                                            <div className="crown fs-2">
                                                👑
                                            </div>

                                            <div className="rank-medal">
                                                🥇
                                            </div>

                                            <div className="rank-number text-white test">
                                                #1
                                            </div>

                                            <div className="rank-label">
                                                CHAMPION
                                            </div>
                                        </div>

                                        {/* BACK */}
                                        <div className="flip-card-back">
                                            <div className="crown fs-2">
                                                👑
                                            </div>

                                            <div className="rank-medal">
                                                🥇
                                            </div>
                                            <h3 className="player-name text-white fw-bolder fs-5 my-1">
                                                {players[0].name}
                                            </h3>
                                            <div className="player-score fw-bolder gold-score">
                                                {players[0].score.toLocaleString()}
                                            </div>
                                            <small>POINTS</small>


                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* THIRD PLACE */}
                            <div className="col-10 col-sm-8 col-md-4 col-lg-3">
                                <div
                                    className={`flip-card top-card bronze-card ${showDetails ? "force-flipped" : ""
                                        }`}
                                >
                                    <div className="flip-card-inner text-center w-100 h-100 position-relative">

                                        {/* FRONT */}
                                        <div className="flip-card-front">
                                            <div className="rank-medal">
                                                🥉
                                            </div>

                                            <div className="rank-number text-white">
                                                #3
                                            </div>

                                            <div className="rank-label">
                                                THIRD PLACE
                                            </div>
                                        </div>

                                        {/* BACK */}
                                        <div className="flip-card-back">
                                            <div className="rank-medal">
                                                🥉
                                            </div>
                                            <h3 className="player-name text-white fw-bolder fs-5 my-1">
                                                {players[2].name}
                                            </h3>
                                            <div className="player-score fw-bolder">
                                                {players[2].score.toLocaleString()}
                                            </div>
                                            <small>POINTS</small>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Leaderboard Table */}
                <div className="card border-0 shadow-lg space-card overflow-hidden">
                    <div className="card-header border-0 space-header py-3">
                        <div className="d-flex justify-content-center align-items-center">

                            <h5 className=" text-white">
                                <span className="fs-4 me-2">🚀</span>
                                Discover where you stand on the leaderboard.
                            </h5>

                        </div>
                    </div>

                    <div className="card-body p-0 overflow-hidden">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0 space-table">
                                <thead>
                                    <tr>
                                        <th className="ps-4">Rank</th>
                                        <th>Player</th>
                                        <th>Score</th>
                                        <th>Correct</th>
                                        <th>Wrong</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {players.map((player) => (
                                        <tr
                                            key={player.rank}

                                        >
                                            <td className=" ps-4">
                                                <span
                                                    className={`badge rounded-pill space-rank rank-${player.rank}`}
                                                >
                                                    #{player.rank}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <span className="fw-semibold text-white">
                                                        {player.name}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <span className="fw-bold fw-sans space-score">
                                                    {player.score.toLocaleString()}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge px-4 fw-sans rounded-pill bg-success">
                                                    {player.correct}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge bg-danger text-white fw-sans px-4 rounded-pill">
                                                    {player.wrong}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="space-footer mt-5">
                <div className="container py-4">

                    <div className="row align-items-center py-2">


                        <div className="col-lg-4 text-center text-lg-start">
                            <div className="">
                                <div className="space-footer-icon ">
                                    <img src={logo} className="w-50 image-fluid" alt="Logo" />
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-4">
                            <div className="d-flex justify-content-center gap-4 text-white ">
                                <Link to='/' className="space-footer-link text-decoration-none">
                                    Home
                                </Link>

                                <Link to="/host" className="space-footer-link text-decoration-none">
                                    Create A New Quiz
                                </Link>

                                <Link href="/about" className="space-footer-link text-decoration-none">
                                    About
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="space-footer-line mt-4 pt-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <small className="fs-6 text-white mb-2">
                                🚀 Keep exploring. Keep learning.
                            </small>

                            <small className="fw-mono text-white-50">
                                © 2026 OrexAi — All Rights Reserved
                            </small>

                            <small className="fw-mono text-white-50 mt-1">
                                Version 1.0.0
                            </small>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
