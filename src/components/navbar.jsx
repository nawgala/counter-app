import React from "react";

// Stateless Functional Component
const NawBar = ({ totalCounters }) => {
  console.log("NawBar is rendering");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NawBar;
