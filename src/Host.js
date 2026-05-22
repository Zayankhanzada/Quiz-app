import React, { useState, useEffect } from 'react';
import "./App.css";
import "./css/host.css"
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeftShort } from "react-bootstrap-icons";
function Host() {
    const location = useLocation()
    // for the space background
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
    // Host setup
    const [mode, setMode] = useState("ai");
    const [manualQuestions, setManualQuestions] = useState("");
    const [numQ, setNumQ] = useState(3);
    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    function onStart() {
        console.log("your quiz in process")

    }
    function fetchAIQuestions() {
        alert('quiz in process')
    };
    async function handleCreate() {

        if (!name.trim()) {
            setErr("Enter your name");
            return;
        }

        setErr("");
        setLoading(true);

        try {

            if (mode === "manual") {

                const qs = manualQuestions
                    .split("\n")
                    .filter(q => q.trim());

                onStart({
                    name: name.trim(),
                    topic: "Custom Quiz",
                    questions: qs
                });

            } else {

                if (!topic.trim()) {
                    setErr("Enter quiz topic");
                    setLoading(false);
                    return;
                }

                const qs = await fetchAIQuestions(
                    topic.trim(),
                    numQ
                );

                onStart({
                    name: name.trim(),
                    topic: topic.trim(),
                    questions: qs
                });
            }

        } catch (e) {

            console.warn(e);

        }

        setLoading(false);
    }



    return (
        <>
            <div className="stars" id="stars"></div>
            <div className="container d-flex justify-content-center flex-column p-lg-5 p-3 m-lg-5 m-0">
                <div className='align-items-start'>
                    <Link to='/'
                        className="btn back-btn d-flex align-items-center gap-2 border border-2 text-white rounded-pill"
                    >
                        <span> <ArrowLeftShort size={24} /></span>
                        <span className=""> Go Back</span>
                    </Link>
                </div>
                <div className="mt-5 position-relative start-5">
                    <div className="modal-content text-white rounded-4 p-lg-5 p-3">
                        <div className="modal-header d-flex flex-column align-items-start justify-content-start border-bottom-0">
                            <h2 className="modal-title fw-Syne text-center text-lg-start ">Host Setup</h2>
                            <p className='text-secondary fs-6'>AI will Help to Generate your quiz questions</p>
                        </div>
                        <div className="modal-body py-0 mb-3">
                            <div className="row flex-column g-3">

                                <div className="col-12">
                                    <label htmlFor="firstName" className="form-label text-secondary">
                                        First name
                                    </label>

                                    <input
                                        type="text"
                                        className="host-field fs-6 py-3 px-4 w-100 focus-ring-0"
                                        id="firstName"
                                        placeholder="John Smith, etc.."
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div className="col-12">

                                    <div className="d-flex gap-2 mb-3">

                                        <button
                                            type="button"
                                            className={`btn ${mode === "ai"
                                                ? "btn-primary"
                                                : "btn-outline-primary"}`}

                                            onClick={() => setMode("ai")}
                                        >
                                            AI Generated
                                        </button>

                                        <button
                                            type="button"
                                            className={`btn ${mode === "manual"
                                                ? "btn-primary"
                                                : "btn-outline-primary"}`}

                                            onClick={() => setMode("manual")}
                                        >
                                            Create Manually
                                        </button>

                                    </div>

                                    {mode === "ai" ? (
                                        <>
                                            <label
                                                htmlFor="topic"
                                                className="form-label text-secondary"
                                            >
                                                Quiz Topic
                                            </label>

                                            <input
                                                type="text"
                                                className="host-field fs-6 py-3 px-4 w-100 focus-ring-0"
                                                id="topic"
                                                placeholder="Social Sciences, Foreign affairs, etc.."
                                                value={topic}
                                                onChange={e => setTopic(e.target.value)}
                                            />

                                            <div className="mt-3">
                                                <label className="fs-6 text-secondary mb-2 d-block">
                                                    NUMBER OF QUESTIONS —
                                                    <strong className="text-primary"> {numQ}</strong>
                                                </label>

                                                <input
                                                    type="range"
                                                    min={3}
                                                    max={10}
                                                    value={numQ}
                                                    step={1}
                                                    className="w-100"
                                                    onChange={e => setNumQ(+e.target.value)}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <label
                                                htmlFor="manualQuestions"
                                                className="form-label text-secondary"
                                            >
                                                Enter Questions
                                            </label>

                                            <textarea
                                                id="manualQuestions"
                                                rows="6"
                                                className="form-control"
                                                placeholder={`What is React?
What is JSX?
What is State?`}
                                                value={manualQuestions}
                                                onChange={e =>
                                                    setManualQuestions(e.target.value)
                                                }
                                            />
                                        </>
                                    )}

                                </div>

                            </div>
                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            {err && <div className="text-danger fs-6">{err}</div>}
                            <button className="btn btn-primary fs-6 mt-1 p-3 rounded-5" onClick={handleCreate} disabled={loading} >

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
