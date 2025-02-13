"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export function SpaceCursor() {
  // Creamos valores reactivos para las coordenadas del cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      x.set(ev.clientX);
      y.set(ev.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [x, y]);

  return (
    <>
      {/* Ocultar el cursor original */}
      <style>
        {`
          body {
            cursor: none;
          }
        `}
      </style>

      <motion.div
        className="space-cursor"
        style={{
          x,
          y,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#00ffff",
          boxShadow: "0 0 20px 2px #00ffff",
          transform: "translate(-50%, -50%)", // Centrar el cursor en el punto exacto del mouse
        }}
      />
    </>
  );
}