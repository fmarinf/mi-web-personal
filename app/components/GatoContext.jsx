"use client";
import { createContext, useContext, useState } from "react";

const GatoContext = createContext();

export function GatoProvider({ children }) {
  const [resetKey, setResetKey] = useState(0);  // Clave para forzar el reinicio

  const resetGato = () => {
    setResetKey((prev) => prev + 1);  // Incrementa para forzar re-render
  };

  return (
    <GatoContext.Provider value={{ resetKey, resetGato }}>
      {children}
    </GatoContext.Provider>
  );
}

export const useGato = () => useContext(GatoContext);
