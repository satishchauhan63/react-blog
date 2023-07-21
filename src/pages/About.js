import React from 'react'

const About = () => {
  return (
   <>
  {/* <section className="shop_section layout_padding">
    <div className="container">
      <div className="box">
        <div className="detail-box">
          <h2>
            Fruit shop
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="img-box">
          <img src="assets/images/shop-img.jpg" alt=""/>
        </div>
        <div className="btn-box">
          <a href="">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  </section> */}

 



  <section className="about_section">
    <div className="container-fluid pt-5 pb-5">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="img-box">
            <img src="assets/images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-5">
          <div className="detail-box">
            <div className="heading_container">
              <hr/>
              <h2>
                About Our Fruit Shop
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default About
