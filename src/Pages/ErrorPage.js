import React from "react";
import "../App.css";
const ErrorPage = () => {
  return (
    <section>
      <div className="error">
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/hrqwmuhr.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <b className="errorHeader">Error 404</b>
        <caption className="errorCaption">Page not found.</caption>
        <div>
          <a href="/">
            <p className="errorRedirect">Fly back🛫.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
