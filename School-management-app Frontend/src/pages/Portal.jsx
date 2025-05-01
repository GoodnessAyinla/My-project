import React from 'react'
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'

const Portal = () => {
  return (
    <>
      <Navbar />
      <div className="position-relative vh-100 vw-100">
        <img
          src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Student"
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        />

        <div className="position-absolute top-50 start-0 translate-middle-y text-white text-start ms-5">
          <h1 className="display-3 fw-bold fs-1 text-shadow">
            Your Journey to Excellence Starts Here - <br /> Welcome to MMS
          </h1>
          <h5 className="mb-4">
            Stay connected, stay informed, and stay ahead.
          </h5>
          <a href="/login" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-center m-5 fs-1 fw-semibold">Our School</h1>

        <div className="d-flex justify-content-end gap-5">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <Footers/> */}
    </>
  );
}

export default Portal