import Comida from "../assets/macarrao.png";

const Macarrao = () => {
  return (
    <div
      style={{
        maxWidth: 300,
        margin: "3rem auto",
        padding: "1rem",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "#fff8e1",
        borderRadius: 15,
        boxShadow: "0 8px 20px rgba(255, 193, 7, 0.2)",
      }}
    >
      <h2 style={{ color: "#ffa000", fontSize: "2.2rem", marginBottom: "1.5rem", fontWeight: "700" }}>
        Macarrão né acertei de novo
      </h2>

      <img
        src={Comida}
        alt="Macarrão"
        width={250}
        style={{
          borderRadius: 12,
          boxShadow: "0 5px 15px rgba(255, 193, 7, 0.3)",
          marginBottom: "1.5rem",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <p style={{ fontSize: "1.2rem", color: "#6b4c00", fontStyle: "italic" }}>
        Ta me devendo um beijo
      </p>
    </div>
  );
};

export default Macarrao;
