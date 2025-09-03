import React from "react";

export default function App() {
  return (
    <div>
      {/* ================= HEADER ================= */}
      <header className="bg-white border-bottom">
        <div className="container d-flex align-items-center justify-content-between py-3">
          {/* Logo */}
          <a href="/" className="d-flex align-items-center text-decoration-none">
            <img
              src="/spp_wordmark_logo.svg"
              alt="Staples Logo"
              style={{ height: "28px" }}
            />
          </a>

          {/* Left Navigation */}
          <nav className="d-none d-md-flex gap-4 fw-semibold">
            <a href="#" className="text-dark text-decoration-none">
              Shop
            </a>
            <a href="#" className="text-dark text-decoration-none">
              Help Me Pick
            </a>
          </nav>

          {/* Search */}
          <form
            className="d-flex align-items-center"
            style={{ flex: "1", maxWidth: "300px" }}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
            />
          </form>

          {/* Icons */}
          <div className="d-flex gap-3 ms-3">
            <a href="#" className="text-dark">
              <i className="far fa-user"></i>
            </a>
            <a href="#" className="text-dark">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>

        {/* Sub Nav */}
        <div className="bg-white border-top text-center py-2 small fw-semibold">
          <a href="#" className="mx-3 text-dark text-decoration-none">
            24-Hour Production
          </a>
          <a href="#" className="mx-3 text-dark text-decoration-none">
            Best Sellers
          </a>
          <a href="#" className="mx-3 text-dark text-decoration-none">
            Closeouts
          </a>
          <a href="#" className="mx-3 text-dark text-decoration-none">
            Our Story
          </a>
        </div>

        {/* Support Info */}
        <div className="bg-light text-start ps-4 py-1 small text-muted">
          Get answers, ideas or help:{" "}
          <a href="#" className="text-decoration-none">
            Contact Us
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-5 bg-white">
        <h2 className="fw-bold display-6">
          Create Your Own Promotional Products
        </h2>
      </section>

{/* ================= CATEGORIES ================= */}
<section className="container pb-5">
  <div className="row g-4">
    {[
      { title: "24-Hour Production", img: "/1.jpg", badge: "GET IT FAST!" },
      { title: "Custom Apparel", img: "/2.jpg" },
      { title: "Custom Drinkware", img: "/3.jpg" },
      { title: "Custom Bags & Coolers", img: "/4.jpg" },
      { title: "Custom Office Essentials", img: "/5.jpg" },
      { title: "Custom Writing", img: "/6.jpg" },
      { title: "Custom Tech", img: "/7.jpg" },
      { title: "Custom Hats & Caps", img: "/8.jpg" },
    ].map((category, i) => (
      <div className="col-6 col-md-3" key={i}>
        <div className="card h-100 border-0 text-center position-relative p-3 rounded-4 shadow-sm">

          {/* Badge (only once) */}
          {category.badge && (
            <span
              className="badge position-absolute top-0 start-0 rounded-end px-3 py-2"
              style={{
                backgroundColor: "#007bff",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              {category.badge}
            </span>
          )}

          {/* Image */}
          <img
            src={category.img}
            alt={category.title}
            className="mx-auto d-block rounded-3"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />

          {/* Title */}
          <div className="mt-2">
            <h6 className="fw-bold">{category.title}</h6>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




{/* ================= PROMO BANNER ================= */}
<section className="py-5 bg-white">
  <div className="container d-flex justify-content-center">
    <div
      className="d-flex align-items-center justify-content-between w-100"
      style={{ maxWidth: "1200px" }}
    >
      {/* Left Yellow with Image */}
      <div
        className="d-flex align-items-center justify-content-center overflow-hidden"
        style={{
          backgroundColor: "#FFC845",
          borderRadius: "0 50px 50px 0",
          width: "50%",
          minHeight: "320px",
        }}
      >
        <img
          src="/9.jpg"
          alt="Promotional Woman"
          className="img-fluid h-100 w-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* White Card in Middle */}
      <div
        className="bg-white rounded-3 shadow p-4 text-center text-md-start"
        style={{
          flex: "0 0 420px",
          margin: "0 -40px", 
          zIndex: "2",
        }}
      >
        <h2 className="fw-bold mb-3">
          Start your journey from boring to branded.
        </h2>
        <p className="mb-4">
          Add brand personality &amp; color to everyday items!
        </p>
        <button
          className="btn text-white px-4 py-2"
          style={{ backgroundColor: "#F44719" }}
        >
          Shop Custom Products
        </button>
      </div>

      {/* Right Yellow */}
      <div
        style={{
          backgroundColor: "#FFC845",
          borderRadius: "50px 0 0 50px",
          width: "50%",
          minHeight: "320px",
        }}
      ></div>
    </div>
  </div>
</section>


      {/* ================= FOOTER ================= */}
<footer className="bg-light text-dark py-5 mt-5 border-top">
  <div className="container">
    <div className="row g-5 align-items-start">
      
      {/* Company Info + Links */}
      <div className="col-md-6">
        {/* Logo */}
        <div className="d-flex align-items-center mb-3">
          <img
            src="/logo2.svg"
            alt="Promotional Products Logo"
            style={{ height: "40px" }}
            className="me-2"
          />
          <span className="fw-semibold"></span>
        </div>

        {/* Description */}
        <p className="mb-1 fw-semibold">
          We are the Brand Love, Built Better, Together™ company.
        </p>
        <a href="#" className="text-danger fw-semibold small d-block mb-3">
          Our Story &gt;
        </a>

        {/* Links stacked */}
        <ul className="list-unstyled fw-bold">
  <li className="mb-2">
    <a href="#" className="text-dark text-decoration-none">Help</a>
  </li>
  <li className="mb-2">
    <a href="#" className="text-dark text-decoration-none">About Us</a>
  </li>
  <li className="mb-2">
    <a href="#" className="text-dark text-decoration-none">Blog</a>
  </li>
  <li className="mb-2">
    <span className="text-dark">1-800-491-3003</span>
  </li>
  <li>
    <a href="#" className="text-dark text-decoration-none">Careers</a>
  </li>
</ul>


        {/* Social Icons */}
        <div className="d-flex gap-3 mt-3">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="col-md-6">
        <h5 className="fw-bold mb-3">
          Sign Up and Get 10% OFF Your First Order
        </h5>
        <p className="small mb-3">
          Enter your email below to receive exclusive offers and more.
        </p>
        <form className="d-grid gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="btn text-white fw-semibold"
            style={{ backgroundColor: "#F44719" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center mt-4 small text-secondary">
      © 2025 Staples, Inc. All Rights Reserved.
      <br />
      <a href="#" className="text-decoration-none text-secondary">Corporate Social Responsibility</a> | 
      <a href="#" className="text-decoration-none text-secondary"> Terms and Conditions</a> | 
      <a href="#" className="text-decoration-none text-secondary"> Accessibility Statement</a> | 
      <a href="#" className="text-decoration-none text-secondary"> Privacy Notice</a> | 
      <a href="#" className="text-decoration-none text-secondary"> Cookie Preferences</a>
    </div>
  </div>
</footer>

    </div>
  );
}
