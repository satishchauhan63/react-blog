import React from "react";
import { useNavigate } from "react-router-dom";

const Menu=()=>{
          const navigate=useNavigate()
          return(
                    <section className="nav_section">
                    <div className="container">
                      <div className="custom_nav2">
                        <nav className="navbar navbar-expand custom_nav-container ">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex  flex-column flex-lg-row align-items-center">
                              <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                  <a className="nav-link" onClick={()=>navigate('/')}>Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"  onClick={()=>navigate('/about')}>About </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"  onClick={()=>navigate('/fruits')}>Our Fruit </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link"onClick={()=>navigate('/testimonial')}>Testimonial</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" onClick={()=>navigate('/contact')}>Contact Us</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" onClick={()=>navigate('/login')}>Login</a>
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
          )
}

export default Menu