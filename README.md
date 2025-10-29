# Estúdio Interiores - Landing Page

Landing page moderna e responsiva para estúdio de decoração e interiores, desenvolvida com **Next.js**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

## 🎨 Características

- ✅ Design moderno e minimalista
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ Otimizado para SEO (meta tags, Schema.org, sitemap)
- ✅ Acessível (navegação por teclado, ARIA labels, contraste adequado)
- ✅ Performance otimizada (lazy loading, prefetch)
- ✅ Sistema de design consistente com Tailwind CSS
- ✅ Tipografia customizada (Inter + Space Grotesk)

## 📁 Estrutura do Projeto

```
client/
├── public/           # Arquivos estáticos
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/   # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── ValueProps.tsx
│   │   ├── Metrics.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── WhyModern.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── StoreShowcase.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── ContactForm.tsx
│   │   └── SEO.tsx
│   ├── data/         # Dados mock
│   │   └── content.ts
│   ├── pages/        # Páginas
│   │   ├── Home.tsx
│   │   ├── Projetos.tsx
│   │   ├── ProjetoDetalhe.tsx
│   │   ├── Contato.tsx
│   │   ├── Loja.tsx
│   │   ├── Privacidade.tsx
│   │   └── Termos.tsx
│   ├── App.tsx       # Rotas
│   └── index.css     # Estilos globais
```

## 🚀 Como Usar

### Desenvolvimento

```bash
pnpm install
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build de Produção

```bash
pnpm build
pnpm preview
```

## ✏️ Como Editar o Conteúdo

### 1. Textos e Dados

Todos os textos, projetos, produtos e outros dados estão centralizados no arquivo:

**`client/src/data/content.ts`**

Neste arquivo você encontra:

- **projects**: Lista de projetos (título, descrição, imagens, etc.)
- **products**: Lista de produtos da loja
- **testimonials**: Depoimentos de clientes
- **faqs**: Perguntas frequentes
- **metrics**: Números e estatísticas
- **processSteps**: Etapas do processo de trabalho
- **valueProps**: Propostas de valor
- **whyModernPoints**: Pontos sobre design moderno

**Exemplo de edição:**

```typescript
export const projects: Project[] = [
  {
    title: "Seu Novo Projeto",
    slug: "seu-novo-projeto",
    type: "Residencial",
    cover: "https://sua-imagem.jpg",
    // ... outros campos
  },
];
```

### 2. Cores e Paleta

As cores estão definidas no arquivo:

**`client/src/index.css`**

Procure pela seção `:root` e edite as variáveis CSS:

```css
:root {
  /* Brand colors - Estúdio de Interiores */
  --brand-primary: 15 23 42; /* #0F172A - slate-900 */
  --brand-accent: 124 58 237; /* #7C3AED - purple-600 */
  
  /* Outras cores... */
  --primary: var(--color-slate-900);
  --accent: oklch(0.623 0.214 259.815);
  /* ... */
}
```

**Dica:** Use o formato `oklch` para cores mais precisas ou valores RGB separados por espaços para compatibilidade com Tailwind.

### 3. Tipografia

As fontes estão configuradas em dois lugares:

**a) Import das fontes (Google Fonts):**

No arquivo `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@700;800&display=swap" rel="stylesheet" />
```

**b) Aplicação das fontes:**

No arquivo `client/src/index.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### 4. Imagens

As imagens dos projetos e produtos estão usando URLs do Unsplash como placeholder. Para usar suas próprias imagens:

1. Coloque as imagens na pasta `client/public/images/`
2. Atualize os caminhos em `client/src/data/content.ts`:

```typescript
cover: "/images/seu-projeto.jpg",
```

### 5. Informações de Contato

Edite as informações de contato no componente:

**`client/src/components/Footer.tsx`**

E na página:

**`client/src/pages/Contato.tsx`**

### 6. SEO e Meta Tags

Edite as meta tags no arquivo:

**`client/index.html`**

E no componente:

**`client/src/components/SEO.tsx`**

## 🎨 Paleta de Cores Atual

- **Primária**: `#0F172A` (Slate 900) - Títulos e textos principais
- **Accent**: `#7C3AED` (Purple 600) - Botões e destaques
- **Background**: Branco / Off-white
- **Muted**: Cinza claro para fundos secundários
- **Text**: Tons de cinza para textos secundários

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Contraste de cores ≥ 4.5:1
- Navegação completa por teclado
- Labels ARIA em componentes interativos
- Textos alternativos em imagens
- Foco visível em elementos interativos

## 📊 Analytics

O site já está configurado com Umami Analytics. Os eventos rastreados incluem:

- Cliques em CTAs principais
- Visualizações de portfólio
- Envios de formulário de contato

## 🔧 Tecnologias Utilizadas

- **React 19** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **Wouter** - Roteamento leve
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

## 📝 Licença

Este projeto foi desenvolvido para uso exclusivo do Estúdio Interiores.

---

**Desenvolvido com ❤️ para criar espaços modernos e funcionais.**
