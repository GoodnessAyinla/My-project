import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-md-6 d-none d-md-block p-0 position-relative">
            <img
              src="https://media.istockphoto.com/id/1138440263/photo/graduated-blue-summer-sky-genuine-photograph.webp?a=1&b=1&s=612x612&w=0&k=20&c=E9CKRhhpDlPEkoNIhxm4NkYzD6QbIuohKHC_zF0h5Z0="
              alt="Background"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", height: "100vh" }} // Ensure it's responsive
            />

            <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-3">
              <h1>Welcome to MMS Admission Portal</h1>
              <hr className="bold" />
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <form className="w-75">
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
                  <p>First Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <p>Email</p>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <p>Phone Number</p>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="+2348000000000"
                  />
                </div>
                <div className="mb-3">
                  <p>Password</p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button className="mt-4 btn btn-primary w-100" type="button">
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