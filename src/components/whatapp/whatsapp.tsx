"use client";
import React from "react";

export default function WhatsappFloatButton() {
  return (
    <>
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Converse no WhatsApp"
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp" />
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          z-index: 999;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
