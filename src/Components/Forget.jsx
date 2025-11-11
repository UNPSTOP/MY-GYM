import number1 from '../assets/phone1.svg'
import { useState, useEffect } from 'react'
import OTP from '../assets/OTP.webp'
import video from '../assets/video1.gif'
import { Numbercontext } from '../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import {createContext} 
// const Usercontext=createContext();
const Forget = () => {
    const [number, setnumber] = useState("")
    const [otp, setotp] = useState('')
    let [getotp1, getotp] = useState('')
    const {setNumber}=useContext(Numbercontext)
   const navigate = useNavigate();

       async function cheqnumber(){
       try{
           const responce= await fetch('https://backen-databace.onrender.com/api/product');
           console.log(responce)
           console.log(number)
           if(!responce.ok){
             throw new Error('something went wrong');
           }
           const result=await responce.json();
           const data=result.data;
           console.log(data)
          const cleanInput = number.trim();
          const fundenumber = data.find(user => user.number.trim() === cleanInput);
            if(fundenumber){
                setNumber(number)
                console.log("we got a valid unumber")
                return true
            }else{
           
        return false;
            }
       }catch(error){
           console.log(error);
           return false;
       }
   }
    
  async  function getotp2() {
    try{
       const istrue=await cheqnumber();
      console.log("is true",istrue)
        if(istrue){
            let otp2=Math.floor(100000 + Math.random() * 900000).toString();
            getotp(otp2)
            return alert(otp2)
     }else{
       return  alert('enter valid number')
     }     
    }catch(error){
        console.log(error)

    }
  }
    function cheqotp(){
        
        if(otp===getotp1){
            return true
        }
        return false
    }
     function forget(e) {
        e.preventDefault()
        if(cheqotp()){
            
            navigate('/newpassord')
            alert('submit successfully')
        }else{
            alert('enter valid otp')
        }
    }
    return (
        <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', margin: '2rem', padding: '2rem', gap: '1rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '1rem'}}>
          
            <div >
                <h2 style={{ textAlign: 'center', color: 'red', fontFamily: 'cursive' }}>Forget password</h2>
                <div>
                    <form onSubmit={forget} style={{ display: 'flex',maxWidth:'20rem', flexDirection: 'column', gap: '2rem' }} >
                        <div style={{ display: 'flex', gap: '0.1rem', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ width: '2rem', height: '2rem', marginLeft: '0.5rem' }} src={number1} alt="number" />
                            <input value={number} onChange={(e) => { setnumber(e.target.value) }} pattern="[0-9]{10}" title='Enter 10 digit number' style={{ borderLeft: 'none',textAlign:'center', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive',marginLeft:'1.7rem' }} type="text" placeholder='Enter your number' />

                        </div>
                        
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}> 
                             <img style={{ width: '3.5rem', height: '3.5rem' }} src={OTP} alt="otp" />
                              <input value={otp} onChange={(e) => { setotp(e.target.value) }} pattern="[0-9]{6}" maxLength={6} minLength={6} title='Enter 6 digit number' style={{textAlign:'center', borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} required type="text" placeholder='Enter your otp' />
                        </div>
                        <div style={{ display: 'flex',flexDirection:'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                            <button style={{width:'12rem'}} onClick={getotp2}> get otp</button>
                        <button style={{width:'12rem'}}>submit</button>
                        </div>
                    </form>
                </div>

                
            </div>
            <div>
                    <img src={video} alt="" />
                </div>
        </div>
    )
}

export default Forget
