import React, { useState, useEffect } from 'react';
import "../styles/footer.css";

export const Footer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // Inicializa el tiempo restante en 10 minutos (600 segundos)
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0); // Índice de la oferta actual
  const offers = [
    "¡ÚLTIMA OFERTA! Pide ahora y lleva 2 ampolletas GRATIS",
    "¡Nuevo producto disponible! ¡No te lo pierdas!",
    "¡Descuento especial hoy! ¡Aprovecha ahora!",
    "¡Gran evento de venta en marcha! ¡No te lo pierdas!",
    "¡Promoción exclusiva por tiempo limitado! ¡Descúbrelo!",
  ]; // Array de ofertas

  useEffect(() => {
    // Función para actualizar el tiempo restante cada segundo
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1); // Reduce el tiempo restante en 1 segundo
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta para evitar pérdidas de memoria
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Si el tiempo restante llega a cero, actualizar la oferta
    if (timeLeft === 0) {
      // Incrementar el índice de la oferta actual
      setCurrentOfferIndex(prevIndex => (prevIndex + 1) % offers.length);
      
      // Por ahora, simplemente reiniciamos el temporizador
      setTimeLeft(600); // Reinicia el tiempo restante a 10 minutos cuando se agota
    }
  }, [timeLeft, offers]);

  // Función para convertir segundos en formato de minutos:segundos
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <footer className="footer-container fixed bottom-0 w-full shadow-md z-50 p-4">
      <div className="yellow-rectangle flex-grow flex items-center">
        <h1 className="text-white text-center text-1xl mx-auto">
          {/* Muestra la oferta actual */}
          {offers[currentOfferIndex]}
          {/* Muestra el tiempo restante solo si queda tiempo */}
          {timeLeft > 0 && <br />}
          {timeLeft > 0 && <span>Tiempo restante: {formatTime(timeLeft)}</span>}
        </h1>
      </div>
    </footer>
  );
};
