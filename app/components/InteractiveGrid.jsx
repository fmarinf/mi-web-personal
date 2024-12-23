"use client";
import { useState, useEffect } from "react";
import { useGato } from "./GatoContext";  // Importamos el contexto

export default function InteractiveGrid() {
  const rows = 16;
  const cols = 16;
  const totalCells = rows * cols;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [catIndex, setCatIndex] = useState(null);
  const [found, setFound] = useState(false);
  const [cellSize, setCellSize] = useState(25);
  const { resetKey } = useGato();  // Escuchamos el resetKey para reiniciar el grid

  const calculateDistance = (idx1, idx2) => {
    const x1 = idx1 % cols;
    const y1 = Math.floor(idx1 / cols);
    const x2 = idx2 % cols;
    const y2 = Math.floor(idx2 / cols);
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  // Restablece la posición del gato al cambiar el resetKey
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * totalCells);
    setCatIndex(randomIndex);
    setFound(false);  // Reiniciar el estado de encontrado
    setHoveredIndex(null);
  }, [totalCells, resetKey]);  // Dependemos del resetKey para resetear el grid

  const handleHover = (idx) => {
    if (!found) {
      setHoveredIndex(idx);
      if (calculateDistance(idx, catIndex) < 1.5) {
        setFound(true);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCellSize(window.innerWidth < 768 ? 18 : 25);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = Array.from({ length: totalCells }, (_, i) => i);

  return (
    <div className="flex flex-col items-center my-16">
      <p className="mb-8 text-xl text-gray-300">
        {found ? "you found him! 😎" : "can you find Silvestre? 🙀"}
      </p>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "8px",
        }}
      >
        {items.map((item, idx) => {
          const isWithinRadius =
            !found &&
            hoveredIndex !== null &&
            calculateDistance(idx, hoveredIndex) < 1.5;

          return (
            <div
              key={idx}
              className={`rounded-md flex justify-center items-center transition-all ${
                found && idx === catIndex
                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600 scale-105 shadow-2xl"
                  : isWithinRadius
                  ? "bg-gradient-to-br from-blue-500 to-purple-600 scale-105 shadow-lg"
                  : "bg-gray-800"
              }`}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
              }}
              onMouseEnter={() => handleHover(idx)}
            >
              {found && idx === catIndex ? "🐈" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
