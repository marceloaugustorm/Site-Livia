import SP from "../assets/sao_paulo.png";

const SobreEla = () => {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "3rem auto",
        padding: "1rem",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "#fff0f6",
        borderRadius: 15,
        boxShadow: "0 8px 20px rgba(198, 0, 72, 0.15)",
      }}
    >
      <h1 style={{ color: "#c60048", fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "700" }}>
        São Paulo infelizmente
      </h1>
      <img
        src={SP}
        alt="São Paulo"
        height={150}
        style={{
          borderRadius: 12,
          boxShadow: "0 5px 15px rgba(198, 0, 72, 0.25)",
          marginBottom: "1.5rem",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p style={{ fontSize: "1.2rem", color: "#6a6a6a", fontStyle: "italic" }}>
        Um dia vai virar palmeirense
      </p>
    </div>
  );
};

export default SobreEla;
