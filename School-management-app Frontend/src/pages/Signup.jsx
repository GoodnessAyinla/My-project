import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          {/* Sticky Sidebar - takes 50% width */}
          <div
            className="col-md-6 bg-dark text-white d-flex flex-column p-4 position-sticky top-0 vh-100"
            style={{ zIndex: 1000 }}>
            <h3 className="mb-4">Mighty Menu</h3>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item mb-3">
                <a href="/" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link text-white">
                  Login
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link text-white">
                  Register
                </a>
              </li>
              <li className="nav-item mb-3">
                <a href="#" className="nav-link text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Sign-in Form - takes 50% width */}
          <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <form className="w-75">
              <div className=" p-5 rounded bg-white">
                <h3 className="text-center mt-2 mb-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/008/040/272/non_2x/school-logo-design-template-free-vector.jpg"
                    alt="School Logo"
                    width={50}
                    className="me-2"
                  />
                  Mighty Miracle Schools
                </h3>
                <div className="mb-3">
                  <p>Name</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <p>Email</p>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <p>Password</p>
                  <input type="password" className="form-control" />
                </div>
                <button className="mt-4 btn btn-success w-100" type="button">
                  Login
                </button>
                <p className="mt-3 text-center">
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup