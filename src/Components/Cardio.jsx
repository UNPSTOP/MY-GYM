import React from 'react'
import trainer from '../assets/trener.jpg'
import video1 from '../assets/cardio1.mp4'
import video2 from '../assets/cardio2.mp4'
import video3 from '../assets/cardio3.mp4'


const Cardio = () => {
  
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",  gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div>
              <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src={trainer} alt="trener" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "-1rem" }}>Riya Mehta</h3>
              <p style={{ fontSize: "1rem", marginBottom: "-1rem" }}>Cardio Specialist</p>
              <p style={{maxWidth:'19rem'}}>Address: Shahpura Main Road, Bhopal, MP</p>
            </div>
          </div>
    
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "400px", height: "230px", }} >
              <video
                style={{ width: "100%", height: "100%",objectFit:"cover" }}
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
                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video2} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
              </video>
    
            </div>
             <div style={{ width: "400px", height: "230px", }} >
              <video
                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source  src={video3} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
              </video>
    
            </div>
             
          </div>
          <div style={{marginBottom:'2rem'}} >
            <h3 style={{ fontSize: "1.5rem" }}>About Trainer</h3>
            <p style={{ maxWidth: "20rem" }}>Riya designs high-energy cardio routines that improve stamina, heart health and overall endurance. Her sessions are fun, motivating and perfect for fat-burning and staying active..</p>
            {/* <h2>contact</h2> */}
            <button  onClick={() =>window.location.href ="mailto:yourgym@gmail.com?subject=Gym Inquiry&body=Hello, I want to know more about your gym."}>contact</button>
          </div>
        </div>
  )
}

export default Cardio
