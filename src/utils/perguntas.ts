// src/utils/faqs.ts

export type FAQItem = {
  id: string;
  headingId: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "collapseOne",
    headingId: "headingOne",
    question: "Quais documentos são necessários para abrir uma empresa?",
    answer:
      "Para abrir uma empresa, normalmente são exigidos documentos pessoais como RG, CPF, comprovante de endereço, além de documentos específicos dependendo do tipo de empresa.",
  },
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question: "Quanto tempo leva para abrir um CNPJ?",
    answer:
      "O tempo médio para abertura de CNPJ pode variar entre 3 a 10 dias úteis, dependendo da documentação e do tipo de empresa.",
  },
  {
    id: "collapseThree",
    headingId: "headingThree",
    question: "Quais são os custos para abrir uma empresa?",
    answer:
      "Os custos podem incluir taxas de registro, alvarás, contador e outros custos específicos do seu ramo de atividade. Podemos ajudar você com um orçamento personalizado.",
  },
  {
    id: "collapseFour",
    headingId: "headingFour",
    question: "É possível abrir uma empresa totalmente online?",
    answer:
      "Sim! Nosso serviço permite que você faça a abertura da sua empresa 100% digital, com acompanhamento de especialistas durante todo o processo.",
  },
  {
    id: "collapseFive",
    headingId: "headingFive",
    question: "Quais tipos de empresa vocês ajudam a abrir?",
    answer:
      "Atendemos a abertura de MEI, EI, EIRELI, LTDA e outras modalidades, sempre orientando qual a melhor opção para o seu negócio.",
  },
];
