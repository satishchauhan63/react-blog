import React, { useState } from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({
    name: " ",
    email: " ",
    phone: " ",
    massage: " "


  })


  // connection firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { name,
      email,
      phone,
      massage } = userData;
    const res = fetch('https://firebse-demo-59ce9-default-rtdb.firebaseio.com/DataCollection.json',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          massage
        })
      }

    );
    if (res) {
      setUserData({
        name: " ",
        email: " ",
        phone: " ",
        massage: "  "
      })
      alert("data store")
    } else {
      alert("please fill")
    }

  }

  return (
    <>
      <section className="contact_section layout_padding-bottom pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-lg-2 col-md-10 offset-md-1">
              <div className="heading_container">
                <hr />
                <h2>
                  Request A call back
                </h2>
              </div>
            </div>
          </div>

          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
                <form method="POST">
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <label>Full_Name</label>
                        <input type="text" placeholder="full_Name"
                        value={userData.name}
                          onChange={(event) => setUserData((pev) => ({ ...pev, name: event.target.value }))} />
                      </div>
                      <div>
                        <label>Email</label>
                        <input type="email" placeholder="Email"
                         value={userData.email}
                          onChange={(event) => setUserData((pev) => ({ ...pev, email: event.target.value }))} />
                      </div>
                      <div>
                        <label>Phone_Number</label>
                        <input type="text" placeholder="Phone_Number"
                         value={userData.phone}
                          onChange={(event) => setUserData((pev) => ({ ...pev, phone: event.target.value }))} />
                      </div>

                      <div>
                        <label>Send_Massage</label>
                        <input type="text" className="message_input" placeholder="Message"
                         value={userData.massage}
                          onChange={(event) => setUserData((pev) => ({ ...pev, massage: event.target.value }))} />
                      </div>
                      <div>
                        <button type="submit" onClick={submitData} >
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 px-0">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: "0", width: "100%", height: "100%" }} allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
