function About() {
   return (
     <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "auto",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Our Gym</h2>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#555",
          marginBottom: "2rem"
        }}
      >
        Our gym is built to help members transform their body with strength
        training, cardio workouts and guided personal coaching. We provide a
        clean, safe and motivating environment with modern equipment and
        experienced trainers. Whether someone is a beginner or advanced
        athlete, we support them to reach their fitness goals.
      </p>

      <img
        src="https://images.unsplash.com/photo-1517964101294-361f9a3ac201"
        alt="Gym"
        style={{
          width: "100%",
          borderRadius: "12px",
          objectFit: "cover"
        }}
      />
    </div>
  );
}
 


export default About;
