import React from "react";

const NotFound = () => {
    return (
        <div style={{ background: "linear-gradient(#090909, #161616,#090909)", height:'100vh' }}>
            <section class="page-top" id="top">
                <h1 class="page-heading">Not Found 😕</h1>
                <p class="page-details">The page you requested for was not found. Please check your URL and try again.</p>
            </section>
        </div>
    );
}

export default NotFound;