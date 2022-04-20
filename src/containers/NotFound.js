import React from "react";

const NotFound = () => {
  document.title = "Not Found";
  return (
    <div className="ui containe" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h2>Page Not Found!!!</h2>
    </div>
  );
};

export default NotFound;
