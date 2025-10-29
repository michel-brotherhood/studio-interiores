# Project TODO

## Estrutura e Configuração
- [x] Instalar e configurar Framer Motion
- [x] Configurar paleta de cores e tokens CSS
- [x] Configurar tipografia (Google Fonts)
- [x] Configurar grid de 12 colunas
- [x] Configurar tema light/dark

## Componentes Base
- [x] Header (sticky, logo, navegação, CTA primário)
- [x] Hero (H1, sub, CTAs duplos)
- [x] ValueProps (3-6 itens com ícones)
- [x] Metrics (cards com números)
- [x] PortfolioGrid (cards responsivos, filtros/tabs)
- [x] ProcessSteps (4 passos, ícones, setas)
- [x] WhyModern (bloco educativo com bullet points)
- [x] Testimonials (slider simples, acessível)
- [x] FAQAccordion (acordeão, aria-controls, keyboard friendly)
- [x] StoreShowcase (cards de produto)
- [x] FinalCTA (headline + botão)
- [x] Footer (links, redes, direitos, email/telefone)
- [x] ContactForm (nome, email, telefone, mensagem; LGPD friendly)

## Páginas e Rotas
- [x] Página Home (/)
- [x] Página Projetos (/projetos) com filtros
- [x] Página Detalhe do Projeto (/projetos/[slug])
- [x] Página Contato (/contato)
- [x] Página Loja (/loja)
- [x] Página Privacidade (/privacidade)
- [x] Página Termos (/termos)

## Dados Mock
- [x] Criar dados mock de projetos (6 itens)
- [x] Criar dados mock de produtos (6 itens)
- [x] Criar dados de depoimentos
- [x] Criar dados de FAQ
- [x] Criar dados de métricas

## Animações e Interações
- [x] Animações com Framer Motion (120-180ms)
- [x] Parallax leve no Hero
- [x] Stagger em grids
- [x] Estados hover/focus/active
- [x] Microinterações

## Acessibilidade e Performance
- [x] Contraste ≥ 4.5:1
- [x] Navegação por teclado
- [x] Aria-* em acordeões/menus
- [x] Alt text em imagens
- [x] Otimização de imagens
- [x] Lazy loading
- [x] Prefetch em links críticos

## SEO e Meta
- [x] Metatags completas (title, description)
- [x] OpenGraph/Twitter cards
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Favicons
- [x] Schema.org (Organization + Service + BreadcrumbList)

## Analytics e Testes
- [x] Eventos básicos (hero_cta_click, portfolio_view, contact_submit)
- [x] Estrutura i18n (pt-BR default, preparado para en-US)
- [ ] Teste de acessibilidade (axe-core)
- [ ] Variantes A/B prontas

## Documentação
- [x] README com instruções de edição de conteúdo
- [x] README com instruções de troca de paleta

## Ajustes para Ficar Igual à Referência Decoraa
- [x] Mudar hero para imagem de fundo real (sem gradiente)
- [x] Alterar background geral de branco para off-white/bege (#F5F3F0)
- [x] Redesenhar cards de projeto com bordas coloridas (sem sombras)
- [x] Centralizar logo no header
- [x] Redistribuir navegação do header (links à esquerda e direita do logo)
- [x] Ajustar métricas para grid de 5 colunas com labels acima dos números
- [x] Aumentar espaçamento vertical entre seções
- [x] Simplificar seção About (texto centralizado, sem elementos decorativos)
- [x] Remover gradientes e elementos decorativos (blobs)
- [x] Ajustar tipografia para fonte mais neutra
- [x] Reduzir tamanho dos títulos para proporções mais elegantes
- [x] Adicionar mais espaço em branco (breathing room)

## Bugs Reportados
- [x] Corrigir chaves duplicadas no Header (rightLinks com /contato duplicado)
- [x] Remover âncoras aninhadas no Header (Link já renderiza <a>)
- [x] Corrigir âncoras aninhadas no PortfolioGrid e StoreShowcase
- [x] Corrigir âncoras aninhadas no Footer
