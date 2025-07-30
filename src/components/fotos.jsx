import React, { useState } from 'react';
import foto1 from "../assets/foto 1.jpeg";
import foto2 from "../assets/foto 2.jpeg";
import foto3 from "../assets/foto 3.jpeg";
import foto4 from "../assets/foto 4.jpeg";
import foto5 from "../assets/foto 5.jpeg";

const GaleriaFotos = () => {
  const fotos = [
    {
      id: 1,
      src: foto1,
      titulo: "Mó gata slk",
      descricao: "morri aqui"
    },
    {
      id: 2,
      src: foto2,
      titulo: "Uma deusa ela",
      descricao: "Sempre chique"
    },
    {
      id: 3,
      src: foto3,
      titulo: "Radiante como sempre",
      descricao: "Você sabia que essa ia estar aqui ne HAHAHAHAHAH"
    },
    {
      id: 4,
      src: foto4,
      titulo: "HAHAHAHAHAHAHAH",
      descricao: ""
    },
    {
      id: 5,
      src: foto5,
      titulo: "Amor da minha vida 💖",
      descricao: "Te amo pra sempre"
    }
  ];

    const [fotoSelecionada, setFotoSelecionada] = useState(null);
    const [hoveredFoto, setHoveredFoto] = useState(null);

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #e0e7ff 100%)',
            fontFamily: 'Arial, sans-serif',
            padding: '2rem 0'
        },
        content: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem'
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        },
        subtitle: {
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
        },
        galeria: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
        },
        fotoCard: {
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        },
        fotoCardHover: {
            transform: 'translateY(-10px) scale(1.02)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
        },
        fotoContainer: {
            position: 'relative',
            width: '100%',
            height: '250px',
            overflow: 'hidden'
        },
        foto: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
        },
        fotoHover: {
            transform: 'scale(1.1)'
        },
        overlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.8))',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        overlayVisible: {
            opacity: '1'
        },
        fotoInfo: {
            padding: '1.5rem'
        },
        fotoTitulo: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
        },
        fotoDescricao: {
            color: '#6b7280',
            fontSize: '0.9rem',
            lineHeight: '1.5'
        },
        modal: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000',
            padding: '2rem'
        },
        modalContent: {
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        },
        modalFoto: {
            width: '100%',
            height: 'auto',
            maxHeight: '70vh',
            objectFit: 'contain'
        },
        modalInfo: {
            padding: '1.5rem',
            textAlign: 'center'
        },
        closeButton: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease'
        },
        footer: {
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        heartPulse: {
            animation: 'pulse 1.5s infinite'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                    }
                    
                    @media (max-width: 768px) {
                        .title { font-size: 2rem !important; }
                        .galeria { grid-template-columns: 1fr !important; }
                    }
                `}
            </style>

            <div style={styles.content}>
                <div style={styles.header}>
                    <h1 style={styles.title}>
                        Fotos favoritas
                        <span style={styles.heartPulse}></span>
                    </h1>
                    <p style={styles.subtitle}>
                        Fotos que acabam comigo, a quarta é a melhor HAHAHAH
                        <span style={styles.heartPulse}>✨</span>
                    </p>
                </div>

                <div style={styles.galeria}>
                    {fotos.map((foto) => (
                        <div
                            key={foto.id}
                            style={{
                                ...styles.fotoCard,
                                ...(hoveredFoto === foto.id ? styles.fotoCardHover : {})
                            }}
                            onMouseEnter={() => setHoveredFoto(foto.id)}
                            onMouseLeave={() => setHoveredFoto(null)}
                            onClick={() => setFotoSelecionada(foto)}
                        >
                            <div style={styles.fotoContainer}>
                                <img
                                    src={foto.src}
                                    alt={foto.titulo}
                                    style={{
                                        ...styles.foto,
                                        ...(hoveredFoto === foto.id ? styles.fotoHover : {})
                                    }}
                                />
                                <div style={{
                                    ...styles.overlay,
                                    ...(hoveredFoto === foto.id ? styles.overlayVisible : {})
                                }}>
                                    Clique para ampliar 🔍
                                </div>
                            </div>
                            <div style={styles.fotoInfo}>
                                <h3 style={styles.fotoTitulo}>{foto.titulo}</h3>
                                <p style={styles.fotoDescricao}>{foto.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={styles.footer}>
                    <h2 style={{...styles.fotoTitulo, marginBottom: '1rem'}}>
                        Galeria do Amor 💖
                    </h2>
                    <p style={styles.fotoDescricao}>
                        Te Amo Meu Bem! 
                    </p>
                </div>
            </div>

            {/* Modal para foto ampliada */}
            {fotoSelecionada && (
                <div 
                    style={styles.modal}
                    onClick={() => setFotoSelecionada(null)}
                >
                    <div 
                        style={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            style={styles.closeButton}
                            onClick={() => setFotoSelecionada(null)}
                            onMouseOver={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
                            onMouseOut={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.5)'}
                        >
                            ×
                        </button>
                        <img
                            src={fotoSelecionada.src}
                            alt={fotoSelecionada.titulo}
                            style={styles.modalFoto}
                        />
                        <div style={styles.modalInfo}>
                            <h3 style={styles.fotoTitulo}>{fotoSelecionada.titulo}</h3>
                            <p style={styles.fotoDescricao}>{fotoSelecionada.descricao}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GaleriaFotos;