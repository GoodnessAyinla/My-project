import React from 'react'

const Herosection = () => {
  return (
    <>
      <div className="position-relative vh-100 vw-100">
        <img
          src="https://images.unsplash.com/photo-1641395286721-2a8588bdb514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Student"
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: "cover" }}
        />

        <div className="position-absolute top-50 start-0 translate-middle-y w-100">
          <div className="container text-dark text-start">
            <h1 className="display-3 fw-bold fs-1 text-shadow"> Welcome to MMS</h1>
            <h5 className="mb-4">Your Journey to Excellence Starts Here - <br />
              Stay connected, stay informed, and stay ahead.
            </h5>
            <a href="/signup" className="btn btn-primary btn-lg">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection