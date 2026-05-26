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
    const [testOption, setTestOption] = useState([
        "",
        "",
        "",
        ""
    ]);
    function handleOptionChange(index, value) {

        const updated = [...testOption];

        updated[index] = value;

        setTestOption(updated);
    }

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

                if (!manualQuestions.trim()) {
                    setErr("Enter your question !");
                    setLoading(false);
                    return;
                }

                const filledOptions = testOption.filter(
                    opt => opt.trim() !== ""
                );

                if (filledOptions.length < 2) {
                    setErr("Please enter at least 2 options!");
                    setLoading(false);
                    return;
                }

                const qs = [
                    {
                        question: manualQuestions.trim(),
                        options: filledOptions
                    }
                ];

                onStart({
                    name: name.trim(),
                    topic: "Custom Quiz",

                });
            }
            onStart({
                name: name.trim(),
                topic: topic.trim(),

            });


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
                                        Host Name
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
                                            <h3 className='text-primary text-center fs-5 m-0 p-0 mt-5 '>Question Builder</h3>
                                            <p className='fs-6 text-secondary text-center text-nowrap'>Architect your Quiz Board,  Enter the question text and define potential answers</p>
                                            <label htmlFor="manualQuestions" className="form-label">  Question Text:  </label>
                                            <textarea id="manualQuestions" rows="6" className="form-control border-dark  p-4" placeholder={`Enter Your Question with respective Options`} value={manualQuestions} onChange={e => setManualQuestions(e.target.value)} required />

                                            <div className="options d-flex align-items-center justify-content-center flex-column gap-3 mt-4">

                                                {testOption.map((opt, index) => (

                                                    <label
                                                        key={index}
                                                        className='d-flex align-items-center gap-2 test-option  w-100 p-3 text-white text-start border-0 px-4'
                                                    >

                                                        <input type='checkbox' />

                                                        <input
                                                            className="test-option border-0 w-100"
                                                            placeholder={`Option ${String.fromCharCode(65 + index)}`}
                                                            value={opt}
                                                            onChange={(e) =>
                                                                handleOptionChange(index, e.target.value)
                                                            }
                                                        />

                                                    </label>
 
                                                ))}
                                              <h5 className=' mt-lg-2 mt-1 fs-5'>Tap the checkbox for declaring an correct answer 😬!</h5>
                                            </div>
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
