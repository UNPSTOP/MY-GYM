// src/components/GymCard.jsx
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Numbercontext } from '../App';
import { useContext } from 'react';
// import { QRCode } from 'qrcode.react';
const Receipt = () => {
    const {currentnumber}=useContext(Numbercontext);
// const[data,setdata]=useState([]);
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  const [member, setMember] = useState({
    name: '',
    lastname: '',
    email12: '',
  });

    useEffect(() => {
        const  storedData = JSON.parse(localStorage.getItem('user') || []);   
       
      
        const founduser=storedData.find((item)=>item.number1 ===currentnumber);
    
        if(founduser){
          setMember({
            name:founduser.firstname,
            lastname:founduser.lastname,
            email12:founduser.email
          });
  }

    },[])
    
    

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.emoji}>🏋‍♂</span>
        <h2>FitLife Gym</h2>
        <p>123 Main Street, Bhopal, MP</p>
      </div>

      <hr />

      <div style={styles.info}>
        <p><strong>Member Name:</strong> {member.name} </p>

        <p><strong> Member Last Name:</strong> {member.lastname}  </p>
        <p><strong>Member Email:</strong> {member.email12}  </p>
        <p><strong>Member Number:</strong> {currentnumber}  </p>
        <p><strong>Start Date:</strong> {formattedDate}</p>
        <p><strong>End Date:</strong> 30day</p>
        <p><strong>Amount Paid:</strong> ₹2000</p>
        <p><strong>Payment Status:</strong> ✅ Done</p>
      </div>

      <div style={styles.qrSection}>
        <p>Scan QR for Details</p>
        {/* <QRCode value={member.qrData} size={100} /> */}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    color:'black',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '15px',
    border: '2px solid #ccc',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center'
  },
  emoji: {
    fontSize: '30px'
  },
  info: {
    marginTop: '15px',
    lineHeight: '1.6'
  },
  qrSection: {
    marginTop: '20px',
    textAlign: 'center'
  }
};

export default Receipt;
