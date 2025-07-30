import { Link } from "react-router-dom";
import Livia from "../assets/Livia.jpeg";

import "../components/home.css"

const Home = () => {
  return (
    <div className="container text-center py-5">
      <img
        src={Livia}
        alt="Foto da Livia"
        width="280"
        height="380"
        className="rounded-4 shadow mb-4 mx-auto d-block"
        style={{ objectFit: "cover" }}
      />

      <h1 className="display-5 fw-bold mb-3 text-primary">Meu Mo 💖</h1>

      <p className="lead mb-5 text-secondary">
        Um cantinho só pra mostrar o quanto admiro a Livia.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 justify-content-center">
        <div className="col d-grid">
          <Link to="/sobre" className="botao-link">
            Time Favorito ⚽
          </Link>
        </div>
        <div className="col d-grid">
          <Link to="/macarrao" className="botao-link">
            Comida Preferida 🍝
          </Link>
        </div>
        <div className="col d-grid">
          <Link to="/foto" className="botao-link">
            Fotos Favoritas 📸
          </Link>
        </div>
        <div className="col d-grid">
          <Link to="/momentos" className="botao-link">
            Momentos Nossos 💑
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
