import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="container-fluid">
      <div className="footer-top row row-cols-1 row-cols-sm-2 row-cols-md-4 p-3 p-sm-5 text-light">
        <div className="col  mb-3 d-flex flex-column align-items-center">
          <img  width="80" alt="WEATHERIFY"className='spec' />
          <img  width="126" alt="WEATHERIFY Text" />
        </div>
        
        <div className="col mb-3 sm-6 ">
          <ul className="nav flex-column align-items-center ">
            <li className="mb-2">
            <h5  className="title">Social media</h5>
            </li>
            <div>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Website
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> LinkedIn
                </a>
              </li>
            
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Instagram
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="col mb-3 sm-6 " >
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5 className="title">Useful links</h5>
            </li>
            <div style={{ marginLeft: '40px' }} >
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/about"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="#"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Technical design
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/blogs"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  target="_blank"
                  href="/courses"
                  className="nav-link p-0 text-light"
                >
                  <i className="bi bi-chevron-right"></i> Courses
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="col mb-3 sm-6">
          <ul className="nav flex-column align-items-center">
            <li className="mb-2">
              <h5 className='title'>Follow us</h5>
            </li>
            <li className="nav-item mb-3 d-flex justify-content-center align-items-center gap-2 ">
              <a
                target="_blank"
                href="#"
                className="nav-link p-0 text-light someSpace "
              >
                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="#"
                className="nav-link p-0 text-light someSpace "
              >
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="#"
                className="nav-link p-0 text-light someSpace"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "40px" }} />
              </a>
              <a
                target="_blank"
                href="https://github.com/Aji-ncodew"
                className="nav-link p-0 text-light "
              >
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "40px" }} />
              </a>
            </li>
            <li className="mb-2">
              <h5 className='title'>Contact Details</h5>
            </li>
            <li className="nav-item mb-2">
              <a href="mailto:ajincodew@gmail.com">
                <i className="bi bi-envelope-at"></i> ajincodew@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="tel:+212684134782">
                <i className="bi bi-telephone"></i> +212 6 84 13 47 82
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-light">
        <div className="social-icons">
          {/* Add social media icons as needed */}
        </div>
        <div className="copyright d-flex justify-content-center align-items-center py-4 border-top border-dark">
          <p className="mt-2 text-center">
            &copy; {year} Weatherify <i className="bi bi-heart-fill"></i> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;