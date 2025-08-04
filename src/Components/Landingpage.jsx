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
  // const  [amount,setamount]=useState(0);
  const { currentnumber } = useContext(Numbercontext);
  const { istrue2, settrur2 } = useContext(Numbercontext);
  function Zeromony() {
    alert('included in free plan');
    // console.log("curr",currentnumber);
  }
  const handlePayment = (amount) => {
    if (!istrue2) {
      alert('please login first')
    } else {
      const options = {
        key: "rzp_live_KLergsCNd2cdEm", // 🛑 Replace with your Razorpay key
        amount: amount * 100, // in paise = ₹500.00
        currency: "INR",
        name: "Gym Website",
        description: " Transaction",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
          alert("Payment successful! ID: " + response.razorpay_payment_id);
          navigate('/Receipt');
          // You can send this response to your backend
        },
        prefill: {
          name: "user name",
          email: currentnumber, 
          contact: "user mobile number",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  const navigate = useNavigate();
  function logout() {
    settrur2(false);
    // setcurrentnumber('');
    // navigate('/');
  }
  return (
    <div className='main' >
      <div style={{ position: 'sticky', top: '0', zIndex: '1', }} >
        <div style={{ borderBottom: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div><h2 style={{ color: 'white', fontSize: '2rem', marginLeft: '1rem' }}>MY<spna style={{ color: 'red' }}>-GYM</spna></h2></div>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              <li>Home</li>
              <li>About</li>
              <li>Contect</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '.2rem', listStyle: 'none', padding: '2px', marginLeft: '1rem' }}>

            {
              istrue2 ? <li onClick={logout} style={{ cursor: 'pointer' }}>Logout</li> : <ul style={{ display: 'flex', listStyle: 'none' }}><li onClick={() => navigate('/loging')}>Login</li>/<li onClick={() => navigate('/Register')}>Register</li></ul>
            }
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '3rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', padding: '2rem', width: '30%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}><h1>SHAPRE YOURE </h1>
            <h1 style={{ color: 'red', marginTop: '1rem' }}>BODY</h1></div>
          <p style={{ Width: '50%', fontSize: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente nemo sunt ratione voluptatum vel consequatur molestias assumenda nulla eos. Dolorem, rem doloremque.</p>

          <h1 style={{ borderBottom: '2px solid red' }}>OPEN
            24H
          </h1>
        </div>
        <div style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img12} alt="" />
        </div>
      </div>

      <div className='program'>
        <h2>PROGRAM</h2>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className='box'>
            <img src={dumbel} alt="" />
            <h3>Strength Training</h3>
            💪 Strength Training
            Build muscle, increase endurance, and boost metabolism through structured resistance workouts. Strength training enhances bone density and overall physical performance, making daily activities easier and safer.
            <button onClick={() => navigate('/Strength')}>Get started</button>



          </div>



          <div className='box'>
            <img src={runing} alt="cardio" />
            <h3>Cardio Training</h3>
            <p>
              🏃‍♂️ Cardio Training
              Improve your heart health, stamina, and energy levels with cardiovascular workouts. From running to cycling, cardio training keeps your blood flowing and burns calories effectively for long-term wellness.

            </p>
            <button onClick={() => navigate('/Cardio')}>Get started</button>
          </div>


          <div className='box'>
            <img src={hart} alt="hart" />
            <h3>Health Training</h3>
            <p>
              ❤️ Health Training
              Focused on overall wellness, health training combines flexibility, balance, and functional movements. It’s ideal for preventing injuries, improving posture, and promoting a healthy lifestyle inside and out.
            </p>
            <button onClick={() => navigate('/Health')} style={{ marginTop: '-0.5rem' }}>Get started</button>
          </div>

          <div className='box'>
            <img src={clock} alt="clock" />
            <h3>Shape Body</h3>
            <p>

              ⏱️ Shape Body
              Tone your physique and sculpt your body with customized workouts targeting fat loss and muscle definition. Shape Body training blends cardio, strength, and mobility to help you achieve a lean, defined look.
            </p>
            <button onClick={() => navigate('/Shape')}>Get started</button>
          </div>
        </div>
      </div>
      <h2>SIMPLE, TRANSPARANT PRICING</h2>
      <div style={{ width: '100%', display: 'flex', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

        <div className='circle' style={{ backgroundColor: '#232323' }}>

          <div >
            <h2>Basic</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need quick access to basic fitness features</p>
            <h1>$0.00 <span>/month</span></h1>
            <button onClick={Zeromony}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>20,000+ og PNG & SVG Graphics</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. in ex. Quae.</p>

            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className='circle' style={{ backgroundColor: ' #f17109ff' }}>
          <div >
            <h2>Professional</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need Advanced features and    tools for client work</p>
            <h1>$25.00<span>/month</span></h1>
            <button onClick={() => handlePayment(0.1)}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>20,000+ og PNG & SVG Graphics</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. in ex. Quae.</p>

            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={wrongtick} alt="no" />
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className='circle' style={{ backgroundColor: ' #56855cff' }}>
          <div >
            <h2>Basic</h2>
            <p style={{ maxWidth: '25rem' }}>ideal for individuals who need quick access to basic fitness features</p>
            <h1>$50.0 <span>/month</span></h1>
            <button onClick={() => handlePayment(5000)}>Get started Now</button>
          </div>

          <div style={{ marginTop: '0.5rem', marginLeft: '1.2rem' }}>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>20,000+ og PNG & SVG Graphics</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="yes" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>

            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. in ex. Quae.</p>

            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='tick'>
              <img src={tick} alt="no" />
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>


        </div>

      </div>

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
            {/* <h1>US?</h1> */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>HAVE PERSONL TRAINER</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>FREE PERSONAL TRINER FOR NEW MEMBERS</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>FREE SUPPLEMENTS FOR EVERY NEW  MEMBER</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', }}>
              <img style={{ width: '2rem', height: '2rem' }} src={tick2} alt="" />
              <p>OPEN 24 HOURS</p>
            </div>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: 'white', flexWrap: 'wrap' }}>
        <div className='footer2'>
          <h1>MAX-<span style={{ color: 'red' }}>GYM</span></h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
          <p style={{ maxWidth: '20rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae voluptatibus, eligendi cupiditate magni perspiciatis quo eveniet deserunt, quisquam facere reprehenderit architecto omnis.</p>
        </div>
        <div className='footer2'>

          <ul>
            <h3>program</h3>
            <li>Strenght Training</li>
            <li>Cardio Training</li>
            <li>Body Building</li>
            <li>Shape  Body</li>
          </ul>
        </div>
        <div className='footer2'>


          <ul>
            <h3>About Us</h3>
            <li>Company info</li>
            <li> Business Area</li>
            <li>Member</li>
            <li> Newsroom</li>
          </ul>
        </div>
        <div className='footer2'>
          <ul>
            <h3>Support</h3>
            <li onClick={() => navigate('/ShippingandDeliveryPolicy')}>Shipping Policy</li>
            <li onClick={() => navigate('/PrivacyPolicy')}> Privacy Policy</li>
            <li onClick={() => navigate('/termsofcondition')}>Terms of Use</li>
            <li onClick={() => navigate('/CancellationandRefund')} > cancellation and Refund Policy</li>
            {/* <li onClick={}>Support</li> */}
            <li onClick={() => navigate('/ContactUs')}>Contact</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Landingpage
