import React, { useState, useEffect } from 'react';
import "./App.css";
import "./css/host.css"
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeftShort } from "react-bootstrap-icons";
function Host() {
    const location = useLocation()
    // Host setup
    const [numQ, setNumQ] = useState(3);
    // const [name, setName] = useState("");
    // const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    // const [err, setErr] = useState("");

    useEffect(() => {
        if (location.pathname !== "/host") return;
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
            <div className="stars" id="stars"></div>
            <div className="container d-flex justify-content-center flex-column p-5 m-5">
                <div className='align-items-start'>
                    <Link to='/'
                        className="btn back-btn d-flex align-items-center gap-2 border border-2 text-white rounded-pill"
                    >
                        <span> <ArrowLeftShort size={24} /></span>
                        <span className=""> Go Back</span>
                    </Link>
                </div>
                <div className="mt-5 position-relative start-5">
                    <div className="modal-content text-white rounded-4 shadow p-4">
                        <div className="modal-header d-flex flex-column align-items-start justify-content-start border-bottom-0">
                            <h2 className="modal-title fw-Syne ">Host Setup</h2>
                            <p className='text-secondary fs-6'>AI will generate your quiz questions</p>
                        </div>
                        <div className="modal-body py-0 mb-3">
                            <div className="row flex-column g-3">
                                <div className="col-12">
                                    <label for="firstName" className="form-label text-secondary">First name</label>
                                    <input type="text" className="host-field fs-6 py-3 px-4 w-100 focus-ring-0 " id="firstName" placeholder="John Smith, etc.." value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="lastName" className="  form-label text-secondary">Quiz Topic</label>
                                    <input type="text" className="host-field fs-6 py-3 px-4 w-100 focus-ring-0 " id="lastName" placeholder="Socail Sciences, Foreign affairs, etc.." value="" required="" /> <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className=''>
                                    <label className="fs-6 text-secondary mb-1 d-block" style={{ color: "#8888BB" }}>NUMBER OF QUESTIONS — <strong style={{ color: "#6C63FF" }}>{numQ}</strong></label>
                                    <input type="range" min={3} max={10} value={numQ} step={1}
                                        className="w-100" style={{ accentColor: "#6C63FF" }}
                                        onChange={e => setNumQ(+e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button className="btn btn-primary fs-6 mt-1 p-3 rounded-5"  disabled={loading}> 
                                {/* onClick={handleCreate} */}
                                {loading ? "🤖 Generating questions..." : "✨ Create Quiz"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Host;
