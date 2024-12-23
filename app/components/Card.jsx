"use client";
import { useState, useEffect } from "react";

export default function Card({ title, year, company, imgSrc }) {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    setGradient(generateGradient());
  }, []);

  return (
    <div
      className="card flex flex-col items-center justify-end p-6 w-[260px] h-[360px] rounded-3xl shadow-lg transition-transform duration-500"
      style={{
        background: `linear-gradient(145deg, ${gradient})`,
      }}
    >
      {/* Recuadro para la Imagen - Gradiente Colorido */}
      <div
        className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: generateImageBackground(),
        }}
      >
        <img src={imgSrc} alt={title} className="w-16 h-16 object-contain pointer-events-none select-none" />
      </div>

      <p className="text-lg text-gray-400">{year}</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  );
}

// Gradientes Oscuros para Fondo de Tarjeta
function generateGradient() {
  const gradients = [
    ['#1A1A1A', '#1C1C1C'],
    ['#121212', '#181818'],
    ['#101010', '#161616'],
    ['#0D0D0D', '#141414'],
    ['#080808', '#121212'],
  ];
  const randomIndex = Math.floor(Math.random() * gradients.length);
  const [start, end] = gradients[randomIndex];
  return `${start}, ${end}`;
}

// Gradientes de Colores Suaves y Elegantes para el Recuadro de Imagen
function generateImageBackground() {
  const vibrantGradients = [
    'linear-gradient(135deg, #6D5BBA, #8D58BF)',
    'linear-gradient(135deg, #3A1C71, #D76D77)',
    'linear-gradient(135deg, #232526, #414345)',
    'linear-gradient(135deg, #667EEA, #764BA2)',
    'linear-gradient(135deg, #141E30, #243B55)',
  ];
  const randomIndex = Math.floor(Math.random() * vibrantGradients.length);
  return vibrantGradients[randomIndex];
}
