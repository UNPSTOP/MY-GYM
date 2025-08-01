// import React from 'react'
import Emailimg from '../assets/Email.png'
import Passwordimg from '../assets/Passord.jpeg'
import video from '../assets/video.gif'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Loging = () => {

  const[email1,setEmail]=useState('')  
  const[password1,setPassword]=useState('')
  let[data,setData]=useState([])
 const navigate = useNavigate(); 
useEffect(() => {
    setData( JSON.parse(localStorage.getItem('user')) || []);   
    
    // setData(JSON.parse(localStorage.getItem('user')) || []);
},[])
  function login(e) {
    e.preventDefault()
    let istrue=true
    
    for(let  i=0;i<data.length;i++){
      if(email1===data[i].email && password1===data[i].password){
        alert('login successful')
        istrue=false;
        break;
      }
      // console.log(data[i].email,data[i].password);
    }
    if(istrue){
      alert('login failed')
    }
// console.log(email1,password1);
  }
  
  
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexWrap: 'wrap',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'1rem'}}>
      <div style={{maxWidth:'19rem',justifyContent:'center',alignItems:'center'}}>
        <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>USER LOGIN</h2>
        <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Emailimg} alt="email" style={{ width: '2rem', height: '2rem' }} />
            <input value={email1} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" required placeholder='Enter your email' style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} />
          </div>
          <br />
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Passwordimg} alt="password" style={{ width: '2rem', height: '2rem' }} />
            <input value={password1} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" name="password" required placeholder='Enter your password' style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} />
          </div>
          <br />
          
          <button type="submit" >Lugin</button>
          <p onClick={()=>navigate('/forget') } style={{ textAlign: 'center', color: 'blue', fontFamily: 'karla',cursor:'pointer' }}>Forget Password</p>
        </form>
      </div>

  
      <div style={{maxWidth:'19rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <img  src={ video} alt="Login Animation"   style={{width:"400px", height:"360px",}}/>

      </div>
      
    </div>
  )
}

export default Loging
