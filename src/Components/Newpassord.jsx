import React from 'react'
import Password from '../assets/Passord.jpeg'
import { useState} from 'react'
import { useContext } from 'react';
import { Numbercontext } from '../App'
const Newpassord = () => {

    const {number}=useContext(Numbercontext)
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
      async function get() {
        try {
            const responce = await fetch('https://backen-databace.onrender.com/api/product');
            if (!responce.ok) {
                throw new Error('something went wrong');
            }
            const data = await responce.json();
             for(let  i=0;i<data.length;i++){
            if(number==data[i].phone){
                fetch(`https://backen-databace.onrender.com/api/product/${data[i].id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: data[i].name,
                        email: data[i].email,
                        number: data[i].number,
                        password: password,
                        payment_status: data[i].payment_status,
                        payment_id: data[i].payment_id,
                        payment_amount: data[i].payment_amount,
                        day: data[i].day
                    }),
                })
                return true;
            }
        }
        return false;
        } catch (e) {
            console.log(e);
        }
        
    }

  async  function submit(e) {
        e.preventDefault();
        if (password === confirmpassword) {
            const istrue=await get();
            istrue && navigator('/');
        }else{
            alert('password not matched')
        }
      
    }
    return (
        <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', boxShadow: 'rgba(8, 8, 8, 1) 0px 5px 15px',borderRadius:'1rem' ,maxWidth: '67%' }}>
            
           <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} >
            <h2 style={{ textAlign: 'center', color: 'red',fontFamily: 'cursive' }}>Change Password</h2>
            {/* <h3> number  is {number}</h3> */}
             <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                <input onChange={(e) => { setPassword(e.target.value) }} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                    title="Password must be at least 8 characters, include upper/lowercase letters, a number, and a special character"
                    required min={6} value={password} style={{
                        borderLeft: 'none', borderRight:
                            
                            'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', maxWidth:
                            '20rem', height: '2rem', color: 'black', fontFamily: 'cursive'
                    }}
                    type="password" placeholder='Enter your new Password' />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: '2rem', height: '2rem' }} src={Password} alt="passord" />
                <input value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} required min={6} style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '2px solid black', backgroundColor: 'transparent', maxWidth: '20rem', height: '2rem', color: 'black', fontFamily: 'cursive' }} type="password" placeholder='Enter your Confirm Password' />

            </div>
            <button style={{maxWidth:'20rem'}} type='submit'>submit</button>
           </form>
        </div>
    )
}

export default Newpassord
