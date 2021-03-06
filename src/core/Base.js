import React from "react";
import Footer from "./Footer";
import ImageSider from "./ImageSider";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "  p-4",
  children
}) => {




  return (
    <div>
      <Menu />

      <div className="container-fluid">
        {/* <div className="jumbotron   text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div> */}
        <div className={className}>{children}</div>
      </div>

      <Footer />
      {/* <footer className="footer mt-auto py-3">
        <div className="container-fluid bg-success text-center py-3">
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">
            An Amazing <span className="text-dark">MERN</span> Project
        </span>
        </div>
      </footer> */}
    </div>
  )
}

export default Base;
