import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className="footer mt-5">
  <div className="container py-5">
    <div className="row align-items-center">
      
      <div className="col-md-6 mb-4 mb-md-0">
        <h5 className="footer-logo">Musée du Louvre</h5>
        <p className="footer-text">Rue de Rivoli, 75001 Paris, France</p>
        <p className="footer-text">Email: <a href="mailto:contact@louvre.fr">contact@louvre.fr</a></p>
        <p className="footer-copy mt-3">&copy; {new Date().getFullYear()} Louvre Museum. All rights reserved.</p>
      </div>

      <div className="col-md-6 text-md-end text-center">
        <h6 className="footer-connect">Follow us</h6>
        <div className="footer-social d-flex justify-content-md-end justify-content-center gap-4 mt-3">
          <a href="https://wa.me/1234567890" className="footer-icon whatsapp" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/yourmuseum" className="footer-icon instagram" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>
   </>
  )
}
