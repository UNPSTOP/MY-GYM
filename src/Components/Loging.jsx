// import React from 'react'
import Emailimg from '../assets/Email.png'
import Passwordimg from '../assets/Passord.jpeg'
import video from '../assets/video.gif'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Numbercontext } from '../App'
import { useContext } from 'react'

const Loging = () => {
 
  const[email1,setEmail]=useState('')  
  const[password1,setPassword]=useState('')
  const navigate = useNavigate(); 

  const{settrur2}=useContext(Numbercontext);
  const{setcurrentnumber}=useContext(Numbercontext);
 const{setcurrentemail}=useContext(Numbercontext);
async function login(e) {
    e.preventDefault();
     try{
    const responce= await fetch('https://backen-databace.onrender.com/api/product/');
    if(!responce.ok){
      throw new Error('something went wrong');
    }
    const result=await responce.json();
    const userdata=result.data;
     const foundUser = userdata.find((user) => user.email === email1 && user.password === password1);
     let istrue=true
     console.log(userdata);
      if(foundUser){
        settrur2(true);
        setcurrentnumber(userdata.number);
        setcurrentemail(email1);
        istrue=false
        console.log('login success');
        navigate('/');
        setEmail('');
        setPassword('');
        
        }
    if(istrue){
      alert('login failed')
    }
  }catch(e){
    console.log(e);
  }
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
