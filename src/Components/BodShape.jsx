import React from 'react'
import video1 from '../assets/shap1.mp4'
import video2 from '../assets/shape2.mp4'
import video3 from '../assets/shape3.mp4'
import video4 from '../assets/shape4.mp4'
import video5 from '../assets/shape5.mp4'
import video6 from '../assets/shape6.mp4'
import trainer from '../assets/trener.jpg'
const BodShape = () => {
  
      return (
          <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",  gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
              <div>
                <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={trainer} alt="trener" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "-1rem" }}>Priya Sharma</h3>
                <p style={{ fontSize: "1rem", marginBottom: "-1rem" }}>Body Transformation Expert</p>
                <p style={{maxWidth:'19rem'}}>Address: MP Nagar Zone II, Bhopal, MP</p>
              </div>
            </div>
      
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "400px", height: "230px", }} >
                <video
                  style={{ width: "100%", height: "100%" , objectFit:"fill"}}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video1} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
               <div style={{ width: "400px", height: "230px", }} >
                <video
                  style={{ width: "100%", height: "100%", objectFit:"fill" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video2} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
               <div style={{ width: "400px", height: "230px" }} >
                <video
                  style={{ width: "100%", height: "100%",objectFit:"fill" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source  src={video3} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
               <div style={{ width: "400px", height: "230px" }} >
                <video
                  style={{ width: "100%", height: "100%",objectFit:"fill" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video4} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
               <div style={{ width: "400px", height: "230px"}} >
                <video
                  style={{ width: "100%", height: "100%",objectFit:"fill" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video6} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
               <div style={{ width: "400px", height: "230px" }} >
                <video
                  style={{ width: "100%", height: "100%",objectFit:"fill" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video5} type="video/mp4" />
                  {/* Your browser does not support the video tag. */}
                </video>
      
              </div>
            </div>
            <div style={{marginBottom:'2rem'}} >
              <h3 style={{ fontSize: "1.5rem" }}>About Trainer</h3>
              <p style={{ maxWidth: "20rem" }}>Priya specializes in body shaping and transformation programs. Her training blends strength, mobility and effective fat-loss techniques to help members achieve a toned and confident physique.</p>
              {/* <h2>contact</h2> */}
              <button  onClick={() =>window.location.href ="mailto:yourgym@gmail.com?subject=Gym Inquiry&body=Hello, I want to know more about your gym."}>contact</button>
            </div>
          </div>
  )
}

export default BodShape
