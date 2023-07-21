import React from 'react'


const Header = () => {
  return (
   <>
    <section className=" slider_section position-relative" >
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-box"style={{height:"200px"}} >
              <img src="assets/images/slider-img.jpg" alt=""/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-box " style={{height:"200px"}}>
              <img src="assets/images/img2.jpg" alt=""/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="img-box "  >
              <img src="assets/images/slider-img.jpg" alt=""/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section className="nav_section ">
    <div className="container" >
      <div className="custom_nav2" >
        <nav className="navbar navbar-expand custom_nav-container ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <div className="d-flex  flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ourfruit">Our Fruit </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/testimonial">Testimonial</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
          
        </nav>
      </div>
    </div>
  </section>
   </>
  )
}

export default Header
