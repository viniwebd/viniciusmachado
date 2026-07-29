# Vinicius Machado — Portfolio Pessoal

**Objetivo**: Site pessoal de portfólio para prospecção de vagas PJ e projetos freelancer.
**Domínio**: [viniciusmachado.com](https://viniciusmachado.com)
**Status**: 🚀 Em produção (home refeita conforme Figma)
**Repositório**: https://github.com/viniwebd/viniciusmachado

---

## Propósito

Portfolio pessoal de Vinicius Machado — Web Designer / UI Designer freelancer. Voltado para:

- Captação de vagas PJ (empresas que contratam como CNPJ)
- Projetos freelancer diretos com clientes
- Apresentação de projetos, stack e contato profissional

O site transmite **competência técnica e identidade própria**, diferente do Studio Vyn (agência de serviços).

---

## Stack

| Camada     | Tecnologia                                                     |
| ---------- | -------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                             |
| Runtime    | React 19 + TypeScript 5                                        |
| Estilo     | Tailwind CSS 4 (`@theme` + arbitrary values, sem `tailwind.config`) |
| Tipografia | Inter via `next/font/google`                                   |
| Ícones     | lucide-react                                                   |
| Scroll     | Lenis (smooth) integrado ao `gsap.ticker`                      |
| Animações  | GSAP 3 + ScrollTrigger (grátis)                                |
| Build      | `next build` (turbopack) → SSG / static export                 |

**Nota**: ScrollSmoother é plugin pago do Club GSAP. Optamos por Lenis + easing `power4.out` que dá sensação equivalente sem custo/licença. GSAP ticker unifica RAF (Lenis não roda RAF próprio).

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # <NavBar>, <SmoothScroll>, <GradualBlur>, {children}
│   ├── page.tsx                # Home: content-wrapper (z-10) + <Footer/> irmão
│   ├── globals.css             # @theme tokens, .container-page, .stagger-in
│   ├── ds/page.tsx             # Design system reference (rota /ds)
│   ├── politica-de-privacidade/
│   └── termos-de-uso/
├── components/
│   ├── NavBar.tsx              # Fixed glass no topo, slide-in via GSAP
│   ├── SmoothScroll.tsx        # Lenis + GSAP ticker + ScrollTrigger bridge
│   ├── Footer.tsx              # Fixed no bottom (z-0); tooltip email/WhatsApp
│   ├── GradualBlur.tsx         # 5-layer progressive backdrop-blur no bottom
│   ├── ProjectModal.tsx        # Modal ao clicar num project card
│   ├── sections/
│   │   ├── Hero.tsx            # H1 + subtext + CTAs, emerge via GSAP timeline
│   │   ├── Projects.tsx        # Grid 2×2, escala scroll-linked com ScrollTrigger
│   │   ├── About.tsx           # Texto com reveal por scroll (TextGradientScroll)
│   │   ├── Testimonials.tsx    # Carrossel manual, quote com stagger GSAP
│   │   ├── WorkHistory.tsx     # Lista slide-in da direita, reverte on scroll back
│   │   └── Courses.tsx         # Mesmo padrão de WorkHistory
│   └── ui/
│       ├── WhisperText.tsx     # Título char-por-char via CSS transition
│       ├── TextGradientScroll.tsx # Palavra-por-palavra opacity via scroll
│       ├── Badge.tsx, Button.tsx, ButtonDS.tsx  # (usados em /ds)
│       └── ...
└── data/
    └── projects.ts             # Dados dos projetos
```

---

## Design tokens (globals.css `@theme`)

| Token             | Valor                        |
| ----------------- | ---------------------------- |
| `--color-ink`     | `#000000`                    |
| `--color-paper`   | `#ffffff`                    |
| `--color-muted`   | `#706b6b` (texto secundário) |
| `--color-muted-light` | `#c3c0c0` (footer text)   |
| `--color-accent`  | `#aadf3a` (verde CTA)        |
| `--font-sans`     | Inter                        |
| `--radius-lg`     | `16px`                       |
| `--radius-pill`   | `999px`                      |

**`.container-page`**: `width 100% mobile, 80% ≥1024px, max-w 1440px, padding-inline 20px mobile / 0 desktop`. Aplicado em todas as seções.

---

## Animações — mapa

| Seção / Elemento | Efeito | Trigger | Implementação |
| --- | --- | --- | --- |
| NavBar | Slide-in do topo | Mount | GSAP fromTo |
| NavBar | Glass bg | Sempre | `bg-white/70 backdrop-blur-xl` |
| Hero — label/heading/subtext/buttons | Fade + slide up | Mount | GSAP timeline com stagger manual |
| Section titles (h2) | Char-by-char whisper | IntersectionObserver | `WhisperText` (CSS transition inline por span) |
| Projects — imagens | Escala 0.82 → 1 | Scroll (scrub) | `gsap.fromTo` + `scrollTrigger.scrub` |
| About — texto | Opacity 0.18 → 1 por palavra | Scroll (scrub) | `TextGradientScroll` (scroll listener + JSX split) |
| Testimonials — quote | Word stagger (xPercent) | inView + index | GSAP timeline com `stagger: 0.012` |
| Testimonials — autor | Fade + slide up | inView + index | GSAP fromTo em block |
| WorkHistory / Courses items | Slide da direita, reverte on scroll back | ScrollTrigger `toggleActions: play none none reverse` | GSAP fromTo por item |
| Footer copyright/etc | — | — | Estático |
| GradualBlur | 5 layers backdrop-filter empilhados | Fixed sempre | Progressive blur (mask + blur crescente) |

---

## Efeitos "hero" (mais complexos)

### Footer peel reveal
- Content wrapper `z-10 bg-white` cobre viewport
- Footer `fixed bottom-0 z-0` — sempre atrás
- `marginBottom: var(--footer-height)` no wrapper (medido via `ResizeObserver` no Footer)
- Ao scrollar, wrapper sobe e revela footer que estava atrás
- Link `#contato` no NavBar → `SmoothScroll` intercepta e scrolla para `document.documentElement.scrollHeight` (fim da página) em vez de `scrollTo(element)` que quebra com fixed elements

### GradualBlur
- 5 divs empilhados dentro de `fixed bottom-0 z-40 h-[100px]`
- Cada layer: `backdrop-filter: blur(Xrem)` + `mask-image: linear-gradient` em faixa específica
- Blur cresce de 0.083rem (topo) → 1rem (base). Faixas se sobrepõem → transição contínua
- Sem cor / sem gradient de tinta — só intensidade de blur
- Removido `contain: layout paint` da Testimonials seria opção, mas foi aplicado *dentro* da seção Testimonials pra isolar repaint

### Tooltip cursor (email + telefone)
- Segue mouse (`left: mouseX`, `top: rect.top - 8` ou `bottom + 8`)
- Detecta lado (`above`/`below`) baseado em onde o cursor entrou no link
- Bounce lateral: `rotate(-velocity * 5deg)` com clamp ±14° + reset em 90ms
- Easing spring: `cubic-bezier(0.34, 1.56, 0.64, 1)` no transform
- Hook `useMouseTooltip` compartilhado entre `CopyEmail` e `WhatsAppPhone`
- `CopyEmail`: clipboard.writeText + label "Copiado!" por 1.5s
- `WhatsAppPhone`: `<a>` com `wa.me/554899456297?text=<msg>`, tooltip "Me chama no WhatsApp 👋"

### Testimonials height estável
- Bloco invisível (`absolute inset-x-0 top-0 -z-10 invisible`) renderiza os 3 quotes
- `ResizeObserver` mede cada um, guarda o max em `maxQuoteHeight`
- Aplicado como `minHeight` no quote visível → arrows não pulam entre navegações
- `contain: layout paint` na section evita jank em scroll com GradualBlur ativo

---

## Performance / gotchas

- **`force3D: false`** no GSAP dos testimonials — evita criar composite layer por palavra, importante quando GradualBlur está por cima (senão o backdrop recompõe muitas vezes por frame)
- **`contain: layout paint`** na Testimonials — isola repaint
- **`isolation: isolate`** foi tentado mas não é necessário com contain
- **Tailwind 4 e gradientes**: `bg-gradient-to-b` é legado no v4 — em contextos críticos usar inline `background: linear-gradient(...)`
- **`@media (prefers-reduced-motion: reduce)`** no `.stagger-in` do CSS (não usado hoje mas herdado)

---

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Home (Hero, Projects, About, Testimonials, WorkHistory, Courses, Footer) |
| `/ds` | Design system reference (não indexado, `robots: noindex`) |
| `/politica-de-privacidade` | LGPD |
| `/termos-de-uso` | Termos |

---

## Assets

- `public/Curriculo-Vinicius-Machado-WebDesginer.pdf`
- `public/assets/project-{sanmarino,ogliari,izex}.png` — thumbnails dos projetos
- `public/assets/{andrews-barbosa,kaua,bruna-silva}.png` — avatares dos testimonials
- `public/assets/logo-*.png` — usados em `/ds` (design system) e histórico anterior
- `public/assets/tool-*.svg` — icons de ferramentas (não usados na home atual, mantidos pro `/ds`)

---

## Infraestrutura (não alterada)

Mesmo servidor do Studio Vyn — sem custo adicional.

| Recurso       | Detalhe                                                |
| ------------- | ------------------------------------------------------ |
| Orquestração  | Portainer                                              |
| Proxy reverso | Traefik                                                |
| SSL           | Let's Encrypt via Traefik (`certresolver=letsencrypt`) |
| Rede Docker   | `traefik_network` (external, já existe)                |

### Deploy

```
git push → webhook Portainer → rebuild automático do container
```

Fluxo:
1. Push para `main` no GitHub
2. Portainer detecta via webhook e executa `docker-compose up --build`
3. Traefik roteia `viniciusmachado.com` para o container automaticamente
4. SSL renovado automaticamente

### Docker

- `Dockerfile` multi-stage: node:20 (build) → nginx:alpine (serve `.next/`)
- `docker-compose.yml`: serviço `web` + labels Traefik para `viniciusmachado.com` e `www.viniciusmachado.com`

### DNS

```
A     @    → IP do servidor
CNAME www  → viniciusmachado.com
```

---

## Contato

- E-mail: contato@viniciusmachado.com
- WhatsApp: +55 48 9 9945-6297 (link `wa.me/554899456297` no site)
- Linkedin: linkedin.com/in/vinicius-designer
- GitHub: github.com/viniwebd
