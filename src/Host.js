import React, { useEffect } from 'react';
import "./App.css";
import "./css/host.css"
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeftShort } from "react-bootstrap-icons";
function Host() {
    const location = useLocation()

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
            <div className="container d-flex flex-column p-5 m-5">
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
                            <h1 className="modal-title fw-Syne fs-5">Host Setup</h1>
                             <p className='text-secondary fs-6'>AI will generate your quiz questions</p>
                        </div>
                         <div className="modal-body py-0">
                            
                        </div> <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button type="button" className="btn btn-lg btn-primary">Save changes</button>
                            <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Host;
