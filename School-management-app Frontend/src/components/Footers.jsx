import React from 'react'

const Footers = () => {
  return (
    <>
      <footer class="bg-dark text-white py-5">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-between">

            <div class="col-md-4 mb-4">
              <h5>About Us</h5>
                <p>
                  The School believes in building a solid foundation for the child,
                  and as such, we strive to turn out students with passion for
                  excellence and who have been adequately prepared for tertiary
                  education and life.
                </p>
            </div>

            <div class="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <a href="#" class="btn btn-outline-light btn-sm mb-2 d-block">Go somewhere</a>
              <a href="#" class="btn btn-outline-light btn-sm mb-2 d-block">Go somewhere</a>
              <a href="#" class="btn btn-outline-light btn-sm mb-2 d-block">Go somewhere</a>
              <a href="#" class="btn btn-outline-light btn-sm mb-2 d-block">Go somewhere</a>
              <a href="#" class="btn btn-outline-light btn-sm mb-2 d-block">Go somewhere</a>
            </div>

            <div class="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p>Ogbomoso</p>
              <a href="#" class="btn btn-outline-light btn-sm">Contact Page</a>
            </div>

          </div>
              <hr class="border-secondary" />
              <p class="text-center mb-0">&copy; 2025 Your School Name. All rights reserved.</p>
          </div>
      </footer>
    </>
  );
}

export default Footers