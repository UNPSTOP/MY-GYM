import Name from '../assets/Email.png'
import Password from '../assets/key.svg'
import Email1 from '../assets/mail.svg'
import video from '../assets/second1.gif'
import numberimg from '../assets/phone1.svg'
import { useState,useContext } from 'react'
import { Numbercontext } from '../App'
import { useNavigate } from 'react-router-dom';


const Register = () => {
   const [firstname, setFirstname] = useState('')
   const [lastname, setLastname] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmpassword, setConfirmpassword] = useState('')
   const [number1, setnumber] = useState('')
   const [numbertrue, setnumberfalse] = useState(false);
   const [emailtrue, setemailfalse] = useState(false); 

   const [istrue, settrue] = useState(false)

   const navigate = useNavigate();

   const {settrur2 } = useContext(Numbercontext);
    const  {setcurrentnumber} = useContext(Numbercontext);
   const {setcurrentemail} = useContext(Numbercontext); 


async function checkDuplicates(email, number1) {
  try {
    const response = await fetch('https://backen-databace.onrender.com/api/product');
    if (!response.ok) throw new Error("Failed to fetch");

    const result = await response.json();
    const users = result.data; 

    const emailFound = users.some(user => user.email === email);
    const numberFound = users.some(user => user.number === number1);
   if(emailFound){setemailfalse(true)}
   if(numberFound){setnumberfalse(true)}
    

    return { emailFound, numberFound };
  } catch (err) {
    console.log(err);
    return { emailFound: false, numberFound: false };
  }
}

 async function register(e) {

      e.preventDefault();
      
 const { emailFound, numberFound } = await checkDuplicates(email, number1);
      if (password === confirmpassword) {
      //   const hold = await checkDuplicates();
        if (!emailFound && !numberFound) {
            console.log("inside register");
            setcurrentnumber(number1);
            setcurrentemail(email);
            await fetch('https://backen-databace.onrender.com/api/product', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  name: firstname + ' ' + lastname,
                  email: email,
                  number: number1,
                  password: password,
                  payment_status: false,
                  payment_id: "122321",
                  payment_amount: 0,
                  day: 0
               }),
            })
            settrur2(true);
            navigate('/');
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmpassword('');
            setnumber('');
            alert('registration successful');            
         }
         settrue(false);
      }else{
         settrue(true);
         alert('password not matched')
         
      }
 }
   return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexWrap: 'wrap',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '1rem', color: 'black' }}>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img  src={video} alt="point" />
         </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }} >
               <h2>USER REGISTER</h2>
               <p>IF YOU ALREADY HAVE AN ACCOUNT <strong onClick={() => navigate('/loging')} style={{ color: 'blue', cursor: 'pointer' }}>click here</strong></p>
            </div>

            
            <form onSubmit={register} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '30rem',justifyContent: 'center', alignItems: 'center',margin:'1rem' }}>
               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ width: '2rem', height: '2rem' }} src={Name} alt="name" />
                  <input value={firstname} onChange={(e) => { setFirstname(e.target.value) }} title="Enter at least 2 letters. Letters and spaces only." required min={3} style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="text" placeholder='Enter your name' />
               </div>
               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ width: '2rem', height: '2rem' }} src={Name} alt="name" />
                  <input value={lastname} onChange={(e) => { setLastname(e.target.value) }} pattern="[A-Za-z\s]{2,}" title="Enter at least 2 letters. Letters and spaces only." required min={3} style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="text" placeholder='Enter your last name' />
               </div>
               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' ,}}>
                  <img style={{ width: '2rem', height: '2rem' }} src={Email1} alt="Email" />
                  <input value={email} onChange={(e) => { setEmail(e.target.value)  }} title="Enter a valid email address" required style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="email" placeholder='Enter your Email' />
                  
                  
               </div>
               {
                     emailtrue ? < p style={{ color: 'red', margin: '0', padding: '0', marginTop: '-1rem', marginBottom: '-1rem' }}>Email already exist</p> : ''
                  }
               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ width: '2rem', height: '2rem' }} src={numberimg} alt="number" />
                  <input value={number1} required minLength={10} maxLength={10} onChange={(e) => { setnumber(e.target.value)}} pattern="[0-9]{10}" title='Enter 10 digit number' style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="text" placeholder='Enter your number' />

               </div>
               {
                  numbertrue ? < p style={{ color: 'red', margin: '0', padding: '0', marginTop: '-1rem', marginBottom: '-1rem' }}>Number already exist</p> : ''
               }
               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                  <input onChange={(e) => { setPassword(e.target.value) }} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                     title="Password must be at least 8 characters, include upper/lowercase letters, a number, and a special character"
                     required min={6} value={password} style={{
                        borderLeft: 'none', borderRight:
                           // password===confirmpassword?'none':'2px solid red',
                           'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width:
                           '20rem', height: '2rem', color: 'black', fontFamily: 'cursive'
                     }}
                     type="password" placeholder='Enter your Password' />
               </div>


               <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                  <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                  <input value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} required min={6} style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="password" placeholder='Enter your Confirm Password' />

               </div>

               {istrue && <p style={{ color: 'red', marginTop: '-1rem', fontFamily: 'cursive' }}>Password does not match</p>}
               <div>
                  <input style={{ cursor: 'pointer', width: '1rem', height: '1rem' }} required type="checkbox" name="remember" id="" /> <span>read and agree to the <strong onClick={() => { navigate('/termsofcondition') }} style={{ color: 'blue', cursor: 'pointer' }}>terms and conditions</strong></span>
               </div>

               <button type='submit'  style={{marginBottom:'1rem',maxWidth:'20rem',height:'2.5rem',borderRadius:'1rem',backgroundColor:'black',color:'white',cursor:'pointer',fontFamily:'cursive' }}>Register</button>

            </form>
         </div>

      </div>
    
   )
}

export default Register
