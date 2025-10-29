// Conteúdo da Maxi Decorações

export interface Project {
  title: string;
  slug: string;
  type: string;
  cover: string;
  gallery?: string[];
  year: number;
  area_m2?: number;
  highlights?: string[];
  description: string;
  tags: string[];
}

export interface Product {
  name: string;
  price_from?: number;
  thumb: string;
  tags: string[];
}

export interface Testimonial {
  quote?: string;
  content?: string;
  author?: string;
  name?: string;
  role?: string;
  avatar?: string;
  rating?: number;
  date?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const siteInfo = {
  name: "Maxi Decorações",
  tagline: "Transformamos Seu Ambiente",
  description: "Há 30 anos oferecendo soluções completas em decoração. Tecidos nobres, cortinas sob medida, pisos e revestimentos que trazem elegância e conforto para o seu lar.",
  email: "contato@maxidecoracoes.com.br",
  phone: "(21) 2622-0754",
  whatsapp: "5521262207 54",
  address: "Rua Miguel de Frias, 40, loja 101 - Icaraí, Niterói - RJ",
};

export const metrics: Metric[] = [
  { value: "30+", label: "Anos de Experiência" },
  { value: "5000+", label: "Projetos Realizados" },
  { value: "100%", label: "Satisfação Garantida" },
  { value: "4.9/5.0", label: "Avaliação Média" },
  { value: "500+", label: "Avaliações no Google" },
];

export const valueProps = [
  {
    icon: "Shield",
    title: "Garantia",
    description: "Todos os produtos com garantia de qualidade",
  },
  {
    icon: "Zap",
    title: "Rapidez",
    description: "Atendimento ágil e entrega no prazo",
  },
  {
    icon: "Package",
    title: "Estoque Próprio",
    description: "Produtos sempre disponíveis para pronta entrega",
  },
  {
    icon: "Heart",
    title: "Confiança",
    description: "30 anos de tradição e credibilidade",
  },
  {
    icon: "Award",
    title: "Qualidade Premium",
    description: "Produtos de alta qualidade com durabilidade",
  },
  {
    icon: "Users",
    title: "Atendimento Personalizado",
    description: "Equipe especializada para auxiliar em seu projeto",
  },
];

export const products: Product[] = [
  {
    name: "Tecidos & Cortinas",
    thumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
    tags: ["Tecidos Decorativos", "Cortinas", "Persianas"],
  },
  {
    name: "Pisos & Carpetes",
    thumb: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
    tags: ["Pisos Vinílicos", "Laminados", "Carpetes"],
  },
  {
    name: "Papéis de Parede",
    thumb: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&q=80",
    tags: ["Modernos", "Clássicos", "Texturizados"],
  },
];

export const projects: Project[] = [
  {
    title: "Tecidos & Cortinas",
    slug: "tecidos-cortinas",
    type: "Mais Procurado",
    description: "Tecidos nobres, cortinas elegantes e persianas modernas para transformar seus ambientes.",
    cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486700797-4a6f7e7b0b2f?w=1200&q=80",
    ],
    tags: ["Tecidos Decorativos", "Cortinas", "Persianas"],
    year: 2024,
  },
  {
    title: "Pisos & Carpetes",
    slug: "pisos-carpetes",
    type: "Novidades",
    description: "Revestimentos de alta qualidade, tapetes exclusivos e carpetes sofisticados.",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    tags: ["Pisos Vinílicos", "Laminados", "Carpetes"],
    year: 2024,
  },
  {
    title: "Papéis de Parede",
    slug: "papeis-parede",
    type: "Premium",
    description: "Soluções criativas em papéis de parede com design e funcionalidade.",
    cover: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
    ],
    tags: ["Modernos", "Clássicos", "Texturizados"],
    year: 2024,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Cliente",
    content: "Excelente atendimento! Encontrei exatamente o que procurava. A equipe é muito atenciosa e os produtos são de ótima qualidade.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    date: "Há 2 semanas",
    quote: "Excelente atendimento! Encontrei exatamente o que procurava.",
    author: "Maria Silva",
  },
  {
    name: "João Santos",
    role: "Cliente",
    content: "Melhor loja de decoração de Niterói! Variedade incrível de tecidos e cortinas. Recomendo muito!",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    date: "Há 1 mês",
    quote: "Melhor loja de decoração de Niterói! Variedade incrível de tecidos e cortinas.",
    author: "João Santos",
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    content: "Atendimento personalizado e produtos de primeira linha. Já é a terceira vez que compro aqui e sempre saio satisfeita.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    date: "Há 3 semanas",
    quote: "Atendimento personalizado e produtos de primeira linha.",
    author: "Ana Paula",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Há quanto tempo a Maxi Decorações está no mercado?",
    answer: "A Maxi Decorações atua há mais de 30 anos no mercado de decoração, oferecendo produtos de qualidade e atendimento especializado.",
  },
  {
    question: "Quais produtos vocês trabalham?",
    answer: "Trabalhamos com uma linha completa de produtos para decoração: Tecidos & Cortinas, Pisos & Carpetes, e Papéis de Parede. Todos com variedade de estilos e acabamentos.",
  },
  {
    question: "Vocês fazem instalação dos produtos?",
    answer: "Sim! Oferecemos serviço completo de instalação com equipe especializada e treinada para garantir o melhor resultado.",
  },
  {
    question: "Onde estão localizadas as lojas?",
    answer: "Temos 6 lojas estrategicamente localizadas em Niterói (4 lojas), São Gonçalo (1 loja) e Rio de Janeiro - Tijuca (1 loja). Visite a seção de contato para endereços completos.",
  },
  {
    question: "Vocês trabalham com quais marcas?",
    answer: "Trabalhamos com as melhores marcas do mercado, oferecendo produtos premium e exclusivos para garantir qualidade e durabilidade.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer: "Você pode solicitar orçamento pelo nosso site, WhatsApp (21) 2622-0754, telefone ou visitando uma de nossas lojas. Nossa equipe está pronta para atendê-lo!",
  },
  {
    question: "Vocês atendem projetos comerciais?",
    answer: "Sim! Atendemos tanto projetos residenciais quanto comerciais, oferecendo soluções personalizadas para cada necessidade.",
  },
  {
    question: "Há garantia nos produtos?",
    answer: "Sim! Todos os nossos produtos possuem garantia de qualidade. O prazo varia conforme o tipo de produto e fabricante.",
  },
];

export const stores = [
  {
    name: "Loja Miguel de Frias",
    tag: "Principal",
    address: "Rua Miguel de Frias, 40, loja 101",
    neighborhood: "Icaraí, Niterói",
    cep: "24220-002",
    phone: "(21) 2621-5177",
    whatsapp: "(21) 2622-0754",
    hours: "Seg a Sex: 09h - 19h | Sáb: 9h - 13h",
  },
  {
    name: "Loja José Clemente 73",
    address: "Rua José Clemente, 73, loja 1",
    neighborhood: "Centro, Niterói",
    cep: "24020-102",
    phone: "(21) 2717-6636 / 2717-5103",
    hours: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja Conceição",
    address: "Rua da Conceição 181",
    neighborhood: "Centro, Niterói",
    cep: "24020-083",
    phone: "(21) 2620-2118",
    hours: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja São Gonçalo",
    address: "Rua Feliciano Sodré, 71",
    neighborhood: "Centro, São Gonçalo",
    cep: "24440-440",
    phone: "(21) 2604-3099",
    hours: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja Tijuca",
    address: "Rua Conde de Bonfim 807 loja B",
    neighborhood: "Tijuca, Rio de Janeiro",
    cep: "20530-000",
    phone: "(21) 2571-0887",
    hours: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
  },
  {
    name: "Loja José Clemente 58",
    address: "Rua José Clemente 58",
    neighborhood: "Centro, Niterói",
    cep: "24020-105",
    phone: "(21) 2622-9124",
    hours: "Seg a Sex: 10h - 18h | Sáb: 9h - 13h",
    note: "Somente tecidos",
  },
];

// Compatibilidade com código antigo
export const processSteps = [
  {
    number: "01",
    title: "Consulta",
    description: "Entenda suas necessidades e estilo",
  },
  {
    number: "02",
    title: "Seleção",
    description: "Escolha produtos do nosso catálogo",
  },
  {
    number: "03",
    title: "Medição",
    description: "Medidas precisas para perfeito acabamento",
  },
  {
    number: "04",
    title: "Instalação",
    description: "Equipe especializada cuida de tudo",
  },
];

export const whyModernPoints = [
  "Produtos de alta qualidade com garantia",
  "Atendimento personalizado e consultoria especializada",
  "Estoque próprio para pronta entrega",
  "30 anos de experiência no mercado",
  "6 lojas para melhor atendê-lo",
  "Instalação profissional incluída",
];
