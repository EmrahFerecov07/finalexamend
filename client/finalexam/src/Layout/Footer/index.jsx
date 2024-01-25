import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    <>
      <div className='socialmedia'>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>



      </div>
      <section className='footer'>
        <div className='cards'><img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png" alt="" />
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</p>
          <br />
          <br />
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-diners-club"></i>
          <i className="fa-regular fa-credit-card"></i>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-cc-jcb"></i>
          <br />
          <br />
          <i className="fa-solid fa-lock">
            Secure online payment</i>
        </div>
        <div className='bestexperience'>
          <h3>BEST EXPERIENCE
          </h3>
          <br />
          <br />
          <h4>
            FAQ</h4>
            <br />
          <h4>Shipment
          </h4>
          <br />
          <h4>Returns</h4>
          <br />
          <h4>Gift cards</h4>
          <br />
          <h4>Policies</h4>


        </div>
        <div className='company'>
          <h3>COMPANY</h3>
          <br />
          <br />
          <h4>About us</h4>
          <br />
          <h4>Press</h4>
          <br />
          <h4>Offices</h4>
          <br />
          <h4>Affiliates</h4>
          <br />
          <h4>Giveaway</h4>
        </div>



      </section>
    </>

  )
}

export default Footer