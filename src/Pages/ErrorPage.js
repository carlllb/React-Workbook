import React from "react";

const ErrorPage = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/hrqwmuhr.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <b style={{ fontSize: "60px" }}>Error 404</b>
        <caption style={{ fontSize: "20px" }}>Page not found.</caption>
        <div>
          <a href="/">
            <p style={{ fontSize: "15px" }}>Fly away🛫.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
