"use client";
import { faqs } from "@/utils/perguntas";
import React, { useState } from "react";
 // caminho ajustado conforme sua estrutura

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="faq py-5">
      <div className="container">
        <h2 className="text-center mb-4">Dúvidas Frequentes</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map(({ id, headingId, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button d-flex justify-content-between align-items-center ${
                      isOpen ? "" : "collapsed"
                    }`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => toggle(id)}
                  >
                    <span>{question}</span>
                    <i
                      className={`bi toggle-icon ${
                        isOpen ? "bi-dash-lg text-danger" : "bi-plus-lg text-primary"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h2>
                <div
                  id={id}
                  className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                  aria-labelledby={headingId}
                >
                  <div className="accordion-body">{answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .accordion-button {
          cursor: pointer;
          font-weight: 600;
          font-size: 1.05rem;
          transition: background-color 0.3s ease;
        }

        .accordion-button:hover,
        .accordion-button:focus {
          background-color: #f8f9fa;
          outline: none;
        }

        .toggle-icon {
          font-size: 1.25rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .accordion-button:not(.collapsed) .toggle-icon {
          transform: rotate(45deg);
        }

        @media (max-width: 576px) {
          .accordion-button {
            font-size: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .toggle-icon {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  );
}
