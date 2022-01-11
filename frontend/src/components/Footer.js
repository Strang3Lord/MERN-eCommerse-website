import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div id='shopify-section-footer-6' class='shopify-section'>
      <footer class='site-footer footer-06' role='contentinfo'>
        <div class='footer-middle'>
          <div class='container'>
            <div class='row'>
              <div class='col-footer col-12 col-md-3'>
                <h3 class='foot-title dropdow-mb'>
                  <span> Shop</span>
                </h3>
                <ul>
                  <li>
                    <a
                      href='/collections/larger-than-life'
                      title='Large Size'
                      class='foot-link'
                    >
                      <span>Small Size</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/collections/larger-than-life'
                      title='Large Size'
                      class='foot-link'
                    >
                      <span>Medium Size</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/collections/larger-than-life'
                      title='Large Size'
                      class='foot-link'
                    >
                      <span>Large Size</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-footer col-12 col-md-3'>
                <h3 class='foot-title dropdow-mb'>
                  <span>Information</span>
                </h3>

                <ul>
                  <li>
                    <a
                      href='/pages/about-us'
                      title='About Us'
                      class='foot-link'
                    >
                      <span>About Us</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/pages/contact'
                      title='Contact Us'
                      class='foot-link'
                    >
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-footer col-12 col-md-3'>
                <h3 class='foot-title dropdow-mb'>
                  <span>Customer Service</span>
                </h3>

                <ul>
                  <li>
                    <a
                      href='/pages/terms-conditions'
                      title='Terms &amp; Conditions'
                      class='foot-link'
                    >
                      <span>Terms &amp; Conditions</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/pages/cancellation-policy'
                      title='Cancellation Policy'
                      class='foot-link'
                    >
                      <span>Cancellation Policy</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='/pages/orders-shipping'
                      title='Orders &amp; Shipping'
                      class='foot-link'
                    >
                      <span>Orders &amp; Shipping</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-footer col-12 col-md-3 '>
                <div class='social-media'>
                  <h3 class='foot-title'>Keep in touch</h3>

                  <ul class='social-icons'>
                    <li class='instagram'>
                      <a
                        href='https://www.instagram.com/dream__filters/'
                        title='Instagram'
                        target='_blank'
                      >
                        <i class='fa fa-instagram fa-lg' aria-hidden='true'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>
          <div class='container'>
            <div class='row'>
              <div class='col-12'>
                <address>
                  <div style={{ textAlign: 'center' }}>© 2022 ChiChi</div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
