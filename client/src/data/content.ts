export interface Project {
  title: string;
  slug: string;
  type: "Residencial" | "Comercial";
  cover: string;
  gallery: string[];
  year: number;
  area_m2: number;
  highlights: string[];
  description: string;
}

export interface Product {
  name: string;
  price_from: number;
  thumb: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  label: string;
}

// Projetos Mock
export const projects: Project[] = [
  {
    title: "Living multifuncional com marcenaria modular",
    slug: "living-multifuncional-marcenaria-modular",
    type: "Residencial",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&h=800&fit=crop",
    ],
    year: 2024,
    area_m2: 68,
    highlights: [
      "Marcenaria sob medida com módulos reconfiguráveis",
      "Iluminação em camadas para diferentes usos",
      "Paleta neutra com acentos em madeira natural",
    ],
    description: "Projeto residencial que transformou um living de 68m² em um espaço fluido e multifuncional. A marcenaria modular permite diferentes configurações para trabalho, lazer e recepção, enquanto a iluminação em camadas cria atmosferas adequadas para cada momento do dia.",
  },
  {
    title: "Cozinha minimalista com ilha em quartzo",
    slug: "cozinha-minimalista-ilha-quartzo",
    type: "Residencial",
    cover: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556909114-7e0f29f273f5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop",
    ],
    year: 2024,
    area_m2: 24,
    highlights: [
      "Ilha central em quartzo branco com área de refeições",
      "Armários sem puxadores para visual clean",
      "Eletrodomésticos integrados e iluminação LED embutida",
    ],
    description: "Cozinha contemporânea que une estética minimalista e alta funcionalidade. A ilha em quartzo serve como ponto focal e área de convivência, enquanto os armários sem puxadores mantêm as linhas limpas. Todos os eletrodomésticos foram integrados para preservar a harmonia visual.",
  },
  {
    title: "Escritório biofílico com zonas de foco",
    slug: "escritorio-biofilico-zonas-foco",
    type: "Residencial",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=1200&h=800&fit=crop",
    ],
    year: 2023,
    area_m2: 18,
    highlights: [
      "Design biofílico com plantas e materiais naturais",
      "Zonas separadas para foco profundo e reuniões",
      "Acústica tratada com painéis e cortinas",
    ],
    description: "Home office projetado para máxima produtividade e bem-estar. O design biofílico incorpora plantas, madeira e luz natural, enquanto as zonas de foco e reunião são separadas acusticamente. Iluminação ajustável e ergonomia foram priorizadas em cada detalhe.",
  },
  {
    title: "Loja conceito com identidade visual integrada",
    slug: "loja-conceito-identidade-visual",
    type: "Comercial",
    cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=1200&h=800&fit=crop",
    ],
    year: 2023,
    area_m2: 85,
    highlights: [
      "Identidade visual traduzida em materiais e cores",
      "Fluxo de circulação estudado para experiência do cliente",
      "Iluminação cênica para destacar produtos",
    ],
    description: "Projeto comercial que traduz a identidade da marca em cada elemento espacial. O layout foi desenhado para guiar o cliente naturalmente pelos produtos, enquanto a iluminação cênica cria pontos de interesse. Materiais duráveis e de fácil manutenção garantem longevidade.",
  },
  {
    title: "Café urbano com atmosfera acolhedora",
    slug: "cafe-urbano-atmosfera-acolhedora",
    type: "Comercial",
    cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&h=800&fit=crop",
    ],
    year: 2024,
    area_m2: 62,
    highlights: [
      "Diferentes tipos de assentos para variados perfis",
      "Acústica controlada mesmo em horários de pico",
      "Paleta terrosa com toques de verde",
    ],
    description: "Café projetado para ser um refúgio urbano acolhedor. Oferece desde mesas comunitárias até cantos individuais, atendendo diferentes necessidades. A acústica foi cuidadosamente tratada para manter conversas confortáveis mesmo quando lotado. Materiais naturais criam uma atmosfera calorosa.",
  },
  {
    title: "Coworking modular com espaços flexíveis",
    slug: "coworking-modular-espacos-flexiveis",
    type: "Comercial",
    cover: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&h=800&fit=crop",
    ],
    year: 2023,
    area_m2: 145,
    highlights: [
      "Divisórias móveis para reconfiguração rápida",
      "Salas de reunião com tecnologia integrada",
      "Áreas de descompressão e café",
    ],
    description: "Espaço de coworking projetado para máxima flexibilidade. As divisórias móveis permitem adaptar o layout conforme a demanda, desde eventos até trabalho individual. Tecnologia integrada nas salas de reunião e áreas de descompressão estrategicamente posicionadas promovem produtividade e bem-estar.",
  },
];

// Produtos Mock
export const products: Product[] = [
  {
    name: "Poltrona Nórdica Cinza",
    price_from: 2890,
    thumb: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
    tags: ["Poltrona", "Nórdico", "Cinza"],
  },
  {
    name: "Mesa de Centro Mármore",
    price_from: 3450,
    thumb: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop",
    tags: ["Mesa", "Mármore", "Minimalista"],
  },
  {
    name: "Luminária de Piso Arco",
    price_from: 1890,
    thumb: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop",
    tags: ["Iluminação", "Moderno", "Arco"],
  },
  {
    name: "Aparador em Madeira Maciça",
    price_from: 4200,
    thumb: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop",
    tags: ["Aparador", "Madeira", "Artesanal"],
  },
  {
    name: "Conjunto de Quadros Abstratos",
    price_from: 890,
    thumb: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=600&fit=crop",
    tags: ["Arte", "Abstrato", "Conjunto"],
  },
  {
    name: "Poltrona Wingback Veludo",
    price_from: 3650,
    thumb: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop",
    tags: ["Poltrona", "Veludo", "Clássico"],
  },
];

// Depoimentos
export const testimonials: Testimonial[] = [
  {
    quote: "Transformaram nossos 68 m² em um lar fluido e iluminado.",
    author: "Marina S.",
  },
  {
    quote: "Consultoria objetiva, sem ruído. Resultado acima do esperado.",
    author: "Daniel R.",
  },
];

// FAQ
export const faqs: FAQ[] = [
  {
    question: "Quais serviços vocês oferecem?",
    answer: "Projeto residencial e comercial, consultoria pontual e execução acompanhada.",
  },
  {
    question: "Qual o prazo médio?",
    answer: "Entre 6 e 12 semanas para projeto completo, conforme escopo.",
  },
  {
    question: "Vocês reaproveitam móveis?",
    answer: "Sim. Priorizamos o que faz sentido e integramos com novas peças.",
  },
  {
    question: "Como funcionam os honorários?",
    answer: "Proposta fechada por etapa, com transparência de insumos e fornecedores.",
  },
  {
    question: "Atendem a distância?",
    answer: "Sim. Reuniões online, medições assistidas e acompanhamento híbrido.",
  },
];

// Métricas
export const metrics: Metric[] = [
  { value: "150+", label: "projetos" },
  { value: "4,9/5", label: "satisfação média" },
  { value: "10+", label: "anos somados de experiência" },
  { value: "190", label: "ambientes entregues" },
];

// Passos do Processo
export const processSteps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Briefing afiado para entender rotina, medidas e budget.",
  },
  {
    number: "02",
    title: "Conceito",
    description: "Moodboards, paleta, diretrizes de materiais e iluminação.",
  },
  {
    number: "03",
    title: "Projeto",
    description: "Layouts, detalhamento técnico, lista de compras e prazos.",
  },
  {
    number: "04",
    title: "Obra/Instalação",
    description: "Coordenação com fornecedores, visita técnica, ajustes finos.",
  },
];

// Valores e Diferenciais
export const valueProps = [
  {
    title: "Entrega completa",
    description: "Conceito, projeto executivo e acompanhamento.",
  },
  {
    title: "Foco no uso",
    description: "Fluxo, iluminação, acústica e ergonomia pensados no seu dia a dia.",
  },
  {
    title: "Tecnologia a favor",
    description: "Visualizações 3D, orçamentos claros, cronograma transparente.",
  },
];

// Why Modern
export const whyModernPoints = [
  "Grid e hierarquia visual: leitura rápida e decisão fácil — do layout do site ao layout da sala.",
  "Tipografia legível e neutra: comunica sofisticação sem competir com o ambiente.",
  "Paleta com bases calmas + acentos: flexível no digital e no físico; reduz fadiga visual.",
  "Microinterações (no site) e microdetalhes (no espaço): pequenas escolhas, grande percepção de qualidade.",
  "Responsividade real: site rápido e acessível; ambientes modulares e multifunção.",
  "Iluminação como interface: camadas (geral, tarefa, destaque) para guiar o olhar.",
  "Sustentabilidade pragmática: materiais duráveis e fáceis de manter.",
];
