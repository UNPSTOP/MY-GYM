import React from 'react'
import Password from '../assets/Passord.jpeg'
import { useState,useEffect } from 'react'
import { useContext } from 'react';
import { Numbercontext } from '../App'
const Newpassord = () => {

    const {number}=useContext(Numbercontext)
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const[data,setData]=useState([]);
    useEffect(()=>{
         setData( JSON.parse(localStorage.getItem('user')) || []);
    },[]);
    function submit(e) {
        e.preventDefault()
        if (password === confirmpassword) {
        for(let  i=0;i<data.length;i++){
            if(number===data[i].number){
                data[i].password=password;
                alert('password changed successfully');
                localStorage.setItem('user', JSON.stringify(data));
                
                break;
            }
        }
        }else{
            alert('password not matched')
        }
        console.log(data);
    }
    return (
        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', boxShadow: 'rgba(8, 8, 8, 1) 0px 5px 15px',borderRadius:'1rem' }}>
            
           <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} >
            <h2 style={{ textAlign: 'center', color: 'red',fontFamily: 'cursive' }}>Change Password</h2>
            {/* <h3> number  is {number}</h3> */}
             <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                <input onChange={(e) => { setPassword(e.target.value) }} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                    title="Password must be at least 8 characters, include upper/lowercase letters, a number, and a special character"
                    required min={6} value={password} style={{
                        borderLeft: 'none', borderRight:
                            
                            'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width:
                            '20rem', height: '2rem', color: 'black', fontFamily: 'cursive'
                    }}
                    type="password" placeholder='Enter your new Password' />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                <input value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} required min={6} style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', width: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="password" placeholder='Enter your Confirm Password' />

            </div>
            <button>submit</button>
           </form>
        </div>
    )
}

export default Newpassord
