import React from "react";
import { Outlet, Link } from "react-router-dom";
const Navbar = function() {
  return (
    <>
      <nav className="ui raised very padded segment">
        <Link className="ui teal inverted segment">QCC</Link>
        <div className="ui right floated header">
          <button className="ui button ">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button ">
            <Link to="/about">About us</Link>
          </button>
          <button className="ui button ">
            <Link to="/contact">Contact</Link>
          </button>
          <button className="ui button ">
            <Link to="/form">Form</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
