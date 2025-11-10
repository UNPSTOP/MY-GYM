import React from 'react'
import './Landingpage.css'
import img12 from '../assets/langingimg.gif'
import hart from '../assets/hartbit.jpg'
import runing from '../assets/runing.png'
import dumbel from '../assets/dumbbell123.png'
import clock from '../assets/clock.png'
import tick from '../assets/tick.png'
import wrongtick from '../assets/tickwrong.png'
import body1 from '../assets/body1.jpeg'
import body2 from '../assets/body2.jpeg'
import body3 from '../assets/body3.jpg'
import tick2 from '../assets/tick2.jpeg'
import { useNavigate } from 'react-router-dom'
import { Numbercontext } from '../App'
import { useContext } from 'react'

const Landingpage = () => {

  const { currentnumber } = useContext(Numbercontext);
  const { istrue2, settrur2 } = useContext(Numbercontext);
  const { setday, setamount, setupiid } = useContext(Numbercontext);
  const navigate = useNavigate();

  function Zeromony() {
    alert('included in free plan');
  }

  const handlePayment = (amount, day) => {
    if (!istrue2) {
      alert('please login first')
    } else {
      const options = {
        key: "rzp_live_KLergsCNd2cdEm",
        amount: amount * 100,
        currency: "INR",
        name: "Gym Website",
        description: "Transaction",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
          alert("Payment successful! ID: " + response.razorpay_payment_id);
          setupiid(response.razorpay_payment_id);
          setday(day);
          setamount(amount);
          navigate('/Receipt');
        },
        prefill: {
          name: "user name",
          email: currentnumber,
          contact: "user mobile number",
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  function logout() {
    settrur2(false);
  }

  return (
    <div className='main'>

      {/* NAVBAR */}
      <div style={{ position: 'sticky', top: '0', zIndex: '1' }}>
        <div style={{ borderBottom: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ color: 'white', fontSize: '2rem', marginLeft: '1rem' }}>
              MY<spna style={{ color: 'red' }}>-GYM</spna>
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              <li>Home</li>
              <li onClick={() => navigate('/about')}>About</li>
              <li onClick={() => navigate('/ContactUs')}>Contect</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '.2rem', listStyle: 'none', padding: '2px', marginLeft: '1rem' }}>
            {
              istrue2
                ? <li onClick={logout} style={{ cursor: 'pointer' }}>Logout</li>
                : <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li onClick={() => navigate('/loging')}>Login</li> /
                    <li onClick={() => navigate('/Register')}>Register</li>
                  </ul>
            }
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', padding: '2rem', width: '30%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <h1>SHAPRE YOURE</h1>
            <h1 style={{ color: 'red', marginTop: '1rem' }}>BODY</h1>
          </div>

          <p style={{ Width: '50%', fontSize: '1rem' }}>
            <span style={{ color: "red", fontWeight: "bold" }}>Welcome to our official gym website.</span>
            This platform is made for people who want a strong, healthy and confident life...
          </p>

          <h1 style={{ borderBottom: '2px solid red' }}>OPEN 24H</h1>
        </div>

        <div style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img12} alt="" />
        </div>
      </div>

      {/* PROGRAM SECTION */}
      <div className='program'>
        <h2>PROGRAM</h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>

          <div className='box' id="section1">
            <img src={dumbel} alt="" />
            <h3>Strength Training</h3>
            💪 Strength Training...
            <button onClick={() => navigate('/Strength')}>Get started</button>
          </div>

          <div className='box' id="section2">
            <img src={runing} alt="cardio" />
            <h3>Cardio Training</h3>
            🏃‍♂️ Cardio Training...
            <button onClick={() => navigate('/Cardio')}>Get started</button>
          </div>

          <div className='box' id="section3">
            <img src={hart} alt="hart" />
            <h3>Health Training</h3>
            ❤️ Health Training...
            <button onClick={() => navigate('/Health')} style={{ marginTop: '-0.5rem' }}>Get started</button>
          </div>

          <div className='box' id="section4">
            <img src={clock} alt="clock" />
            <h3>Shape Body</h3>
            ⏱️ Shape Body...
            <button onClick={() => navigate('/Shape')}>Get started</button>
          </div>

        </div>
      </div>

      {/* PRICING */}
      <h2>SIMPLE, TRANSPARANT PRICING</h2>

      <div style={{ width: '100%', display: 'flex', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

        {/* BASIC PLAN */}
        <div className='circle' style={{ backgroundColor: '#232323' }}>

          <div>
            <h2>Basic</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need quick access to basic fitness features</p>
            <h1>$0.00 <span>/month</span></h1>
            Access to basic gym equipment
            <button onClick={Zeromony}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'><img src={tick} alt="yes" /><p>Access to basic gym equipment</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Limited workout space</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>No trainer guidance included</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>General fitness tips</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Access during non-peak hours</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Free body weight exercises area</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Basic treadmill access (limited time)</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>No diet plan included</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>No locker access</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>No personal training sessions</p></div>
          </div>

        </div>

        {/* PROFESSIONAL PLAN */}
        <div className='circle' style={{ backgroundColor: '#f17109ff' }}>

          <div>
            <h2>Professional</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need Advanced features and tools for client work</p>
            <h1>$25.00<span>/month</span></h1>
            <button onClick={() => handlePayment(1, 90)}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'><img src={tick} alt="yes" /><p>Full access to all gym equipment</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Unlimited cardio workouts</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Group training sessions</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Trainer support during working hours</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Basic diet chart included</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Dedicated stretching/mobility zone</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Locker access</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Weekly progress tracking</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>1 personal training session per month</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Body fat analysis</p></div>
          </div>

        </div>

        {/* PRO PLAN */}
        <div className='circle' style={{ backgroundColor: '#56855cff' }}>

          <div>
            <h2>Pro</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need quick access to basic fitness features</p>
            <h1>$50.0 <span>/month</span></h1>
            <button onClick={() => handlePayment(5, 200)}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'><img src={tick} alt="yes" /><p>Unlimited access to all facilities</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Personal trainer support</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Custom workout + diet plan</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Premium cardio & strength zone</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Priority locker and shower access</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Weekly body transformation audit</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Unlimited group classes</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Fast-track customer support</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Special weight-loss programs</p></div>
            <div className='tick'><img src={tick} alt="yes" /><p>Free monthly fitness assessment</p></div>
          </div>

        </div>

      </div>

      {/* WHY CHOOSE US */}
      <div className='whychouse' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', color: 'white' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

          <div style={{ width: '50%', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%', display: 'flex', gap: '1rem', flexDirection: 'column', marginTop: '2rem', marginBottom: '2rem' }}>
              <img className='imgbody' src={body1} alt="" />
              <img className='imgbody' src={body2} alt="" />
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', width: '50%' }}>
              <img className='imgbody' style={{ width: '100%' }} src={body3} alt="" />
            </div>
          </div>

          <div style={{ width: '40%', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
            <h1>Why CHOOSE US?</h1>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>HAVE PERSONL TRAINER</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>FREE PERSONAL TRINER FOR NEW MEMBERS</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>FREE SUPPLEMENTS FOR EVERY NEW MEMBER</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>OPEN 24 HOURS</p>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: 'white', flexWrap: 'wrap' }}>

        <div className='footer2'>
          <h1>MAX-<span style={{ color: 'red' }}>GYM</span></h1>
          <p style={{ maxWidth: '20rem' }}>
            Your gym is a dedicated fitness space built to help every member grow stronger...
          </p>
        </div>

        <div className='footer2'>
          <ul>
            <h3>program</h3>
            <li><a style={{ textDecoration: "none", color: "white" }} href="#section1">Strength Training</a></li>
            <li><a style={{ textDecoration: "none", color: "white" }} href="#section2">Cardio Training</a></li>
            <li><a style={{ textDecoration: "none", color: "white" }} href="#section3">Body Building</a></li>
            <li><a style={{ textDecoration: "none", color: "white" }} href="#section4">Shape Body</a></li>
          </ul>
        </div>

        <div className='footer2'>
          <ul>
            <h3>About Us</h3>
            <li onClick={() => navigate('/CompanyInfo')}>Company info</li>
            <li onClick={() => navigate('/BusinessArea')}>Business Area</li>
            <li onClick={() => navigate('/Member')}>Member</li>
            <li onClick={() => navigate('/Newsroom')}>Newsroom</li>
          </ul>
        </div>

        <div className='footer2'>
          <ul>
            <h3>Support</h3>
            <li onClick={() => navigate('/ShippingandDeliveryPolicy')}>Shipping Policy</li>
            <li onClick={() => navigate('/PrivacyPolicy')}>Privacy Policy</li>
            <li onClick={() => navigate('/termsofcondition')}>Terms of Use</li>
            <li onClick={() => navigate('/CancellationandRefund')}>cancellation and Refund Policy</li>
            <li onClick={() => navigate('/ContactUs')}>Contact</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Landingpage
