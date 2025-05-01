import React from 'react'

const Signin = () => {
  return (
    <>
      <div className="container-fluid vh-100 bg-light d-flex justify-content-center align-items-center">
        <form  className="w-100" style={{ maxWidth: "500px" }} >
          <div className="p-5 rounded bg-white">
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
            <button className="mt-4 btn btn-success w-100" type="submit">
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
    </>
  );
}

export default Signin