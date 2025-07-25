import routes from "./imagens";

const projetos = [
  {
    id: 1,
    titulo: "Profissionalismo na Contabilidade",
    descricao:
      "Garantimos excelência e responsabilidade em todos os serviços contábeis prestados.",
    imagem: routes.profissionalismo,
    slug: "profissionalismo-contabilidade",
    imagensExtras: [routes.tecnologia, routes.confianca],

    dataEvento: "10 Dezembro 2024",
    localEvento: "São Paulo - SP",
    depoimentos: [
      {
        nome: "Maria Silva",
        texto: "Recebi o brinquedo com muita alegria. Muito obrigada!",
        foto: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        nome: "João Souza",
        texto: "A ação social transformou a vida das crianças da comunidade.",
        foto: "https://randomuser.me/api/portraits/men/43.jpg",
      },
    ],
    contato: {
      telefone: "+55 11 91234-5678",
      email: "contato@cliente.com",
      redesSociais: [
        { nome: "Facebook", url: "https://facebook.com/cliente" },
        { nome: "Instagram", url: "https://instagram.com/cliente" },
      ],
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  {
    id: 2,
    titulo: "Atendimento de Qualidade",
    descricao:
      "Foco no atendimento personalizado para cada cliente, priorizando suas necessidades.",
    imagem: routes.atendimento,
    slug: "atendimento-de-qualidade",
    imagensExtras: [routes.tecnologia, routes.confianca],

    dataEvento: "15 Janeiro 2025",
    localEvento: "Campinas - SP",
    depoimentos: [
      {
        nome: "Ana Paula",
        texto: "O atendimento personalizado fez toda a diferença para minha empresa.",
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
    contato: {
      telefone: "+55 19 98765-4321",
      email: "atendimento@cliente.com",
      redesSociais: [
        { nome: "Instagram", url: "https://instagram.com/cliente" },
      ],
    },
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },

  {
    id: 3,
    titulo: "Tecnologia e Inovação",
    descricao:
      "Utilizamos ferramentas modernas para agilizar processos e garantir segurança de dados.",
    imagem: routes.tecnologia,
    slug: "tecnologia-e-inovacao",
    imagensExtras: [routes.profissionalismo, routes.atendimento],

    dataEvento: "20 Fevereiro 2025",
    localEvento: "São José dos Campos - SP",
    depoimentos: [
      {
        nome: "Carlos Eduardo",
        texto: "A inovação trouxe mais eficiência e segurança para nosso negócio.",
        foto: "https://randomuser.me/api/portraits/men/12.jpg",
      },
      {
        nome: "Patrícia Gomes",
        texto: "Tecnologia de ponta para garantir processos ágeis e confiáveis.",
        foto: "https://randomuser.me/api/portraits/women/30.jpg",
      },
    ],
    contato: {
      telefone: "+55 12 99876-5432",
      email: "tecnologia@cliente.com",
      redesSociais: [
        { nome: "Facebook", url: "https://facebook.com/cliente" },
        { nome: "YouTube", url: "https://youtube.com/cliente" },
      ],
    },
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
];

export default projetos;
