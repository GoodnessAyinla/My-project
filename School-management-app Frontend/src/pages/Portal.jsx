import React from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import Herosection from "../components/Herosection";

const Portal = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <h1 class="mb-4">The Principal</h1>
            <p class="lead">
              Welcome to MMS — a place where excellence is nurtured, character
              is built, and futures are shaped.
              <br />
              <br />
              As Principal, I take great pride in leading a dedicated team of
              educators committed to providing a safe, supportive, and
              academically rich environment for every student. We believe
              education goes beyond textbooks — it's about developing confident,
              respectful, and responsible young individuals prepared to thrive
              in a changing world.
              <br />
              <br />
              At MMS, we foster curiosity, celebrate achievement, and encourage
              every child to discover and develop their unique talents. Whether
              in the classroom, on the field, or through creative expression,
              our goal is to help each student become the best version of
              themselves.
              <br />
              <br />
              Thank you for considering our school. I invite you to explore more
              and become part of our growing community.
              <br />
              <br />
              Warm regards, <br />
              <strong>Mrs. Mbaka T.Q</strong>
              <br />
              Principal, MM School
            </p>
          </div>

          <div class="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1690820498008-8941d1b32e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Principal"
              class="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      <div class="container py-5">
        <h1 class="text-center mb-5 mt-5 fs-1 fw-semibold">Our Schools</h1>
        <hr class="border-secondary mb-5" />

        <div class="row justify-content-center g-4">
          <div class="col-md-4">
            <div class="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3Nyb29tfGVufDB8fDB8fHww"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="bg-primary text-white rounded-4 p-5 shadow text-center">
          <h2 class="mb-4">
            🎓 <strong>Why Choose Us?</strong>
          </h2>
          <ul class="list-unstyled fs-5 mb-4">
            <li>
              ✔️ Expert, caring teachers who bring out the best in every student
            </li>
            <li>✔️ A safe, tech-enabled learning environment</li>
            <li>✔️ Strong academics paired with real-world skills</li>
            <li>✔️ Vibrant clubs, leadership programs, and sports</li>
          </ul>
          <p class="fs-5 mb-3">
            📅 <strong>Limited Slots Available – Secure Your Spot Now!</strong>
          </p>
          <p class="fs-5 mb-4">
            📞 Call us today or click below to begin the journey!
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" class="btn btn-light btn-lg fw-semibold">
              👉 Enroll Now
            </a>
            <a href="#" class="btn btn-outline-light btn-lg fw-semibold">
              📍 Book a School Tour
            </a>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
};

export default Portal;
