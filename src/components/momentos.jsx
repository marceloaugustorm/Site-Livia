import { useState } from "react";
import Namoro from "../assets/namoro.mp4";
import Doido from "../assets/doido.mp4";
import Assumido from "../assets/assumido.jpeg";
import Familia from "../assets/familia.jpeg"

const momentos = [
  {
    id: 1,
    src: Namoro,
    tipo: "video",
    titulo: "Namoro Assumido",
    data: "O grande dia",
    descricao: "Assumimos o namoro e foi um dos dias mais felizes da minha vida.",
    cor: "#ff1744"
  },
  {
    id: 2,
    src: Doido,
    tipo: "video",
    titulo: "Dia doido",
    data: "Inesquecível kkk",
    descricao: "Brigas, pegação e muito mais",
    cor: "#e91e63"
  },
  {
    id: 3,
    src: Assumido,
    tipo: "imagem",
    titulo: "Fui assumido",
    data: "Pelo insta",
    descricao: "Quase n assumiu AHAHAHHA",
    cor: "#9c27b0"
  },
{
    id: 4,  
    src: Familia,
    tipo: "imagem",
    titulo: "Conheceu minha família toda no terceiro encontro AHHAHAHHA",
    data: "Vc tava mo nervosa",
    descricao: "OBS: Lembra da Paulinha e minha vó te encarando HAHAHAHA",
    cor: "#9c27b0"
}
];

const MomentosJuntos = () => {
  const [hovered, setHovered] = useState(null);
  const [modal, setModal] = useState(null);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '3rem 0'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #ff1744, #e91e63, #9c27b0)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    },
    subtitle: {
      fontSize: '1.4rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.7',
      fontStyle: 'italic'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2.5rem',
      marginBottom: '3rem'
    },
    momentoCard: {
      backgroundColor: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      position: 'relative'
    },
    momentoCardHover: {
      transform: 'translateY(-20px) scale(1.03)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)'
    },
    mediaContainer: {
      position: 'relative',
      width: '100%',
      height: '280px',
      overflow: 'hidden'
    },
    media: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    mediaHover: {
      transform: 'scale(1.1)'
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'linear-gradient(45deg, rgba(255, 23, 68, 0.9), rgba(156, 39, 176, 0.9))',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '1rem'
    },
    overlayVisible: {
      opacity: '1'
    },
    overlayIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      animation: 'bounce 2s infinite'
    },
    overlayText: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    momentoInfo: {
      padding: '2rem'
    },
    momentoTitulo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '0.5rem'
    },
    momentoData: {
      fontSize: '1rem',
      color: '#718096',
      marginBottom: '1rem',
      fontStyle: 'italic',
      fontWeight: '500'
    },
    momentoDescricao: {
      color: '#4a5568',
      fontSize: '1.1rem',
      lineHeight: '1.6'
    },
    videoIcon: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      color: '#ff1744',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
    },
    modal: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000',
      padding: '2rem'
    },
    modalContent: {
      position: 'relative',
      maxWidth: '95vw',
      maxHeight: '90vh',
      backgroundColor: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)'
    },
    modalMedia: {
      width: '100%',
      height: 'auto',
      maxHeight: '70vh',
      objectFit: 'contain',
      display: 'block'
    },
    modalInfo: {
      padding: '2rem',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    modalTitulo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '0.5rem'
    },
    modalData: {
      fontSize: '1.1rem',
      color: '#4a5568',
      marginBottom: '1rem',
      fontStyle: 'italic'
    },
    modalDescricao: {
      fontSize: '1.2rem',
      color: '#2d3748',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'linear-gradient(135deg, #ff1744, #e91e63)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
      zIndex: '1001'
    },
    footer: {
      textAlign: 'center',
      marginTop: '4rem',
      padding: '3rem',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '25px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(10px)'
    },
    footerTitle: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #ff1744, #9c27b0)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heartPulse: {
      animation: 'pulse 2s infinite'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @media (max-width: 768px) {
            .title { font-size: 2.5rem !important; }
            .grid { grid-template-columns: 1fr !important; }
            .momento-card { margin: 0 !important; }
          }
        `}
      </style>

      <div style={styles.content}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            Momentos marcantes HAHAHA
            <span style={styles.heartPulse}>💖</span>
          </h1>
          <p style={styles.subtitle}>
            "Quando me verem em um momento, dia ou hora com você, pode ter certeza que vou estar feliz."
            <span style={styles.heartPulse}></span>
          </p>
        </div>

        <div style={styles.grid}>
          {momentos.map((m) => (
            <div
              key={m.id}
              style={{
                ...styles.momentoCard,
                ...(hovered === m.id ? styles.momentoCardHover : {})
              }}
              onMouseEnter={() => setHovered(m.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setModal(m)}
            >
              <div style={styles.mediaContainer}>
                {m.tipo === "video" && (
                  <div style={styles.videoIcon}>
                    ▶️
                  </div>
                )}
                
                {m.tipo === "video" ? (
                  <video
                    src={m.src}
                    style={{
                      ...styles.media,
                      ...(hovered === m.id ? styles.mediaHover : {})
                    }}
                    muted
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={m.src}
                    alt={m.titulo}
                    style={{
                      ...styles.media,
                      ...(hovered === m.id ? styles.mediaHover : {})
                    }}
                  />
                )}

                <div style={{
                  ...styles.overlay,
                  ...(hovered === m.id ? styles.overlayVisible : {}),
                  background: `linear-gradient(45deg, ${m.cor}dd, ${m.cor}aa)`
                }}>
                  <div style={styles.overlayIcon}>
                    {m.tipo === "video" ? "🎬" : "📸"}
                  </div>
                  <div style={styles.overlayText}>
                    Clique para reviver este momento
                  </div>
                </div>
              </div>

              <div style={styles.momentoInfo}>
                <h3 style={styles.momentoTitulo}>{m.titulo}</h3>
                <p style={styles.momentoData}>{m.data}</p>
                <p style={styles.momentoDescricao}>{m.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <h2 style={styles.footerTitle}>
            
          </h2>
          <p style={styles.momentoDescricao}>
            São apenas alguns momentos que me lembrei aqui na madrugada, mas tem muitos mais
          </p>
        </div>
      </div>

      {modal && (
        <div 
          style={styles.modal}
          onClick={() => setModal(null)}
        >
          <div 
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeButton}
              onClick={() => setModal(null)}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'linear-gradient(135deg, #d63384, #c2185b)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'linear-gradient(135deg, #ff1744, #e91e63)';
              }}
            >
              ×
            </button>

            {modal.tipo === "video" ? (
              <video
                src={modal.src}
                style={styles.modalMedia}
                controls
                autoPlay
              />
            ) : (
              <img
                src={modal.src}
                alt={modal.titulo}
                style={styles.modalMedia}
              />
            )}

            <div style={styles.modalInfo}>
              <h3 style={styles.modalTitulo}>{modal.titulo}</h3>
              <p style={styles.modalData}>{modal.data}</p>
              <p style={styles.modalDescricao}>{modal.descricao}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MomentosJuntos;