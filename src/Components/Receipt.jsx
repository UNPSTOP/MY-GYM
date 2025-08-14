import React, { useEffect, useState, useContext } from "react";
import { Numbercontext } from "../App";
import { QRCodeCanvas } from "qrcode.react";

const Receipt = () => {
  const { currentnumber, currentemail, day1, amount, upiid } = useContext(Numbercontext);
  const [member, setMember] = useState(null); // start with null (not loaded)


  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  async function fillldata() {
    try {
      const response = await fetch("https://backen-databace.onrender.com/api/product");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      const data = result.data;

      console.log("API Data:", data);
      console.log("Current email:", currentemail);
      console.log("Current number:", currentnumber);

      // ✅ strict equality check
      const member1 = data.find(
        (user) =>
          user.email === currentemail || user.number === currentnumber
      );

      console.log("Found Member:", member1);


      if (member1) {
        setMember({
          name: member1.name || "none",
          email: member1.email || "none",
          number: member1.number || "none",
          day: member1.day + day1 || 0,
          payment_id: upiid || "none",
          payment_amount: amount + member1.payment_amount || 0,
          payment_status: true,
          createdAt: member1.createdAt || "none",
        });
        await fetch(`https://backen-databace.onrender.com/api/product/${member1._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: member1.name || "none",
            email: member1.email || "none",
            number: member1.number || "none",
            day: member1.day + day1 || 0,
            payment_id: upiid || "none",
            payment_amount: amount + member1.payment_amount || 0,
            payment_status: true,
            createdAt: member1.createdAt || "none",
          }),
        })
      } else {
        console.warn("No matching member found!");
      }
    } catch (error) {
      console.error("Error parsing member data:", error);
    }
  }

  useEffect(() => {
    fillldata();
  }, [currentemail, currentnumber]);

  // ✅ Only show UI once member is loaded
  if (!member) {
    return <p>no member found...</p>;
  }

  // ✅ qrData inside render, always latest state
  const qrData = JSON.stringify(member);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.emoji}>🏋‍♂</span>
        <h2>MAX-Gym</h2>
        <p>123 Main Street, Bhopal, MP</p>
      </div>

      <hr />

      <div style={styles.info}>
        <p><strong>Member Name:</strong> {member.name}</p>
        <p><strong>Member Email:</strong> {member.email}</p>
        <p><strong>Member Number:</strong> {member.number}</p>
        <p><strong>Start Date:</strong> {formattedDate}</p>
        <p><strong>Payment ID:</strong> {member.payment_id}</p>
        <p><strong>Payment Amount:</strong> {member.payment_amount}</p>
        <p><strong>Payment Status:</strong> {member.payment_status ? "Paid" : " Unpaid"}</p>
        <p><strong>End Date:</strong> {member.day}</p>
      </div>

      <div style={styles.qrSection}>
        <p>Scan QR for Details</p>
        <QRCodeCanvas value={qrData} size={200} />
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    color: "black",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    border: "2px solid #ccc",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
  },
  emoji: {
    fontSize: "30px",
  },
  info: {
    marginTop: "15px",
    lineHeight: "1.6",
  },
  qrSection: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default Receipt;
