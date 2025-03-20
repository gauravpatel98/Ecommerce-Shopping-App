import React from 'react'
// import './Footer.css'

const Footer = () => {
  return (
    <>

<footer class="bg-dark text-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5>Customer Service</h5>
        <ul class="list-unstyled ">
          <li><a href="#" class="text-decoration-none">Contact Us</a></li>
          <li><a href="#" class="text-decoration-none">Shipping & Returns</a></li>
          <li><a href="#" class="text-decoration-none">FAQ</a></li>
          <li><a href="#" class="text-decoration-none">Track Your Order</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>About Us</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none">Our Story</a></li>
          <li><a href="#" class="text-decoration-none">Careers</a></li>
          <li><a href="#" class="text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" class="text-decoration-none">Terms of Service</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none">New Arrivals</a></li>
          <li><a href="#" class="text-decoration-none">Best Sellers</a></li>
          <li><a href="#" class="text-decoration-none">Sale</a></li>
          <li><a href="#" class="text-decoration-none">Blog</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5>Stay Connected</h5>
        <p>Subscribe to our newsletter for updates and exclusive offers.</p>
        <div class="mt-3">
          <a href="#" class="text-decoration-none me-2"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-decoration-none me-2"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-decoration-none me-2"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-decoration-none"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    <hr class="mt-4"/>
    <div class="text-center">
      <p>&copy; 2024 Your E-commerce Store. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer