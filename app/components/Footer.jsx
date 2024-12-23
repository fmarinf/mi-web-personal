"use client";
import { useState } from 'react';
import { useGato } from "./GatoContext";  // Importamos el contexto

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const { resetGato } = useGato();

  return (
    
    <footer className="flex items-center justify-center py-40 mt-60 space-x-6">
      <div
        className="cursor-pointer flex items-center space-x-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          resetGato();  // Reiniciar el grid del gato
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img
          src={hovered ? "/assets/data_engineer_2.png" : "/assets/data_engineer_1.png"}
          alt="Contact"
          className="w-28 h-28 object-contain transition-all duration-300 ease-in-out pointer-events-none select-none"
        />
        <p className="text-3xl text-gray-300 font-light select-none">
          let's connect
        </p>
      </div>
    </footer>
  );
}
