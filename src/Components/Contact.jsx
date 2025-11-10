function Contact() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "auto",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Contact Us
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#444",
          marginBottom: "1.5rem"
        }}
      >
        For membership queries, training sessions or business info, feel free
        to reach out to us anytime. Our team will respond as soon as possible.
      </p>

      <a
        href="mailto:yourgym@gmail.com?subject=Inquiry&body=Hello, I want to know more about your gym."
        style={{
          display: "inline-block",
          background: "#1976d2",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          marginBottom: "2rem"
        }}
      >
        Contact by Email
      </a>

      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1rem",
          color: "#555"
        }}
      >
        <p>📍 Location: Bhopal, Madhya Pradesh</p>
        <p>📞 Phone: +91 98765 43210</p>
      </div>
    </div>
  );
}

export default Contact;
