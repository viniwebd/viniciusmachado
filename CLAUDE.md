# Vinicius Machado — Portfolio Pessoal

**Objetivo**: Site pessoal de portfólio para prospecção de vagas PJ e projetos freelancer.
**Domínio**: [viniciusmachado.com](https://viniciusmachado.com)
**Status**: 🚀 Em produção (home reescrita conforme Figma, copy final aplicada em código) | 🔄 Iniciativa ativa de reestruturação (ver abaixo) — falta construir as páginas de case dedicadas
**⚠️ REGRA #0**: **AJUSTES NO FIGMA PRIMEIRO, CÓDIGO DEPOIS.** Ver seção "REGRA #0" abaixo antes de qualquer ação.
**Repositório**: https://github.com/viniwebd/viniciusmachado

---

## 🔄 Iniciativa Atual — Reestruturação de Home + Case Studies (2026-08)

Reestruturação da home concluída (Figma + código). Em andamento: migrar cases de modal (removido) para páginas dedicadas em `/cases/[slug]`.

### Documentos que orientam esse trabalho (em `docs/`)

1. **`docs/portfolio-guide.md`** — guia canônico. Cresceu ao longo da iniciativa: §1–§6 filosofia/estrutura original, **§7** estrutura final de 9 seções do case (substitui o template Apparício de 11 seções), **§8** regras de linguagem e tom (palavras banidas, sem travessão, negrito, sem nichar), **§9** padrões extraídos do portfolio novo do Apparício (apparicio.com) em produção, **§10** "decisão > entregável" (Marianne Fernandes / Nu Design Day) com teste de verificação. **Consultar antes de escrever/reescrever qualquer copy.**
2. **`docs/portfolio-audit-checklist.md`** — fonte da verdade dos próximos passos. Checklist executável com prioridades.
3. **`docs/case-study-reference-apparicio.md`** — análise do portfolio antigo de Apparício Junior (referência, não template — superado pelo §9 do guide, que já reflete o portfolio novo dele).
4. **`docs/portfolio-references-synthesis.md`** — síntese comparativa dos 3 portfolios sênior de referência (Apparício, Cate Silva, Sami Parvez).
5. **`docs/carreira-vinicius-machado.md`** — brain sobre o Vinicius: carreira, experiência, projetos, skills, e o case San Marino completo (contexto, solução técnica, resultados reais, reflexão). Fonte de fatos reais para escrever bio/case studies. Contém diretrizes de escrita. Vinicius envia atualizações incrementais — sempre reler antes de escrever qualquer copy sobre ele.
6. **`docs/case-san-marino-copy.md`** — copy final revisada do case San Marino (título, contexto, problema, solução em blocos, resultados, meu papel, reflexão), já passada pelo filtro do guide §1–§10. Pronta pra aplicar manual no Figma; ainda não implementada em `/cases/san-marino` (rota não existe em código ainda).

### Decisões consolidadas

| # | Decisão | Escolha |
|---|---|---|
| 1 | Cases em páginas dedicadas `/cases/[slug]` (não modal) | ✅ SIM — modal (`ProjectModal.tsx`) removido do código. Cards de projeto na home já linkam pra `/cases/{id}`, rota ainda não existe (404 até ser construída) |
| 2 | Template de case | `portfolio-guide.md` §7 (9 seções), **flexível** — nem todo projeto terá tudo (Processo é omitido se não houver material real). Melhor omitir seção do que preencher com genérico |
| 3 | Seção "Capacidades e Ferramentas" na home | ✅ SIM — implementada em Figma e código (`Capabilities.tsx`) |
| 4 | Filtro de cliente ("trabalho com quem…") | ❌ NÃO (posicionamento aberto por ora) |
| 5 | Lista de marcas atendidas próxima ao Hero | ❌ NÃO (sem reputação/marcas grandes por ora) |
| 6 | Humanizar tom do Hero | ✅ SIM — feito, várias rodadas de revisão (ver `docs/portfolio-guide.md` §8/§9) |
| 7 | Cards de projeto na home | Só imagem, sem texto embaixo (título/pitch/resultado saem quando a página do case for construída) |

### 🚨 REGRA #0 — FIGMA FIRST, CÓDIGO DEPOIS (LEIA ANTES DE QUALQUER AÇÃO)

**Ordem sagrada da iniciativa:**

1. **Figma primeiro** — copy, layout, estrutura. Vinicius e/ou Claude via MCP `use_figma`.
2. **Código depois** — só implementar quando o frame Figma correspondente estiver aprovado.

**Palavras-chave do Vinicius que significam WRITE NO FIGMA (NÃO editar código):**
- "ajuste no Figma"
- "copy no Figma"
- "atualizar Figma"
- "fazer no Figma"
- "escrever no Figma"
- "aplicar direto no Figma"
- "faz [X] no Figma"

Se Vinicius pediu Figma, JAMAIS abrir Edit/Write em `src/`. Se dúvida → PERGUNTAR.

Arquivo Figma alvo: `hOJX81uV4W7aUjbhUI49K5` (Vinicius Machado — Portfolio).
Páginas: `Portfolio` (148:235), `Link Bio` (213:826), `Design System` (0:1), `Design System — M3` (nova, ver seção Figma abaixo).

**Atenção — seat do Figma**: o seat do time caiu de "Full" pra "View" em algum momento. Isso bloqueia leitura E escrita via MCP (remoto `mcp__figma__` e local `mcp__figma-local__`), mesmo com a conexão ativa (`whoami` funciona, mas `get_metadata`/`use_figma` retornam erro pedindo Dev Mode). Se qualquer chamada Figma falhar com esse erro, é isso — avisar o Vinicius pra checar o seat antes de tentar de novo. Também existe rate limit próprio do plano Starter do Figma MCP (separado do problema de seat).

### Fluxo Figma write (via MCP)

Para escrever no Figma via Claude:

1. Skill obrigatório antes de qualquer write: `figma:figma-use` (via `Skill` tool).
2. Tool de write: `use_figma` — SÓ existe no MCP remoto `mcp__figma__` **após OAuth**.
   - Tools `mcp__figma-local__*` (desktop) são **read-only** (get_metadata, get_design_context, get_screenshot, get_variable_defs).
3. Se `use_figma` não aparece na busca, autenticar: `mcp__figma__authenticate` → user abre URL → cola callback em `mcp__figma__complete_authentication`.
4. Se auth MCP quebrar (server drop no callback): pedir user reiniciar Claude Code OU usar Chrome extension `claude-in-chrome` como fallback.
5. **Gotcha Windows**: `use_figma` roda em ambiente que resolve `import.meta.url` como `/C:/...` (leading slash). Se algum script auxiliar usar `new URL(import.meta.url).pathname` pra montar paths, quebra no Windows — usar `fileURLToPath` do módulo `url` em vez disso.
6. **Auto-layout lag**: depois de converter um frame pra auto-layout ou mudar `layoutSizingHorizontal`/`primaryAxisSizingMode` no mesmo script que já lê `.height`/`.width` em seguida, o valor lido pode vir defasado (reflow ainda não assentou). Se os números voltarem inconsistentes, não confiar — rodar um script novo só de leitura pra confirmar o estado real antes de continuar.

### Figma — Design System M3 (nova página, 2026-08-19)

Página separada `Design System — M3`, **paralela** à página `Design System` (0:1) original — não substitui, é sistema de estudo/referência. Gerada com **HCT real** via `@microsoft/material-color-utilities` (biblioteca oficial do Google, rodada localmente fora do Figma pra computar a paleta, depois aplicada como Variables via `use_figma`), a partir da cor semente `#aadf3a`.

- Collection **`M3 Reference`**: 78 vars (6 famílias tonais × 13 tons), modo único
- Collection **`M3 System`**: 36 vars, Light + Dark (roles semânticas completas: primary/secondary/tertiary/error com container+on-color, surface em 5 níveis, outline, inverse)
- Board visual com as paletas + roles + type scale (15 estilos, Roboto) + shape scale (7 tokens de radius)
- Ver histórico da conversa pra reproduzir o script gerador se precisar recriar/atualizar

### Estado atual (2026-08-19)

- **Home**: copy final aplicada em Figma **e** em código (Hero, About, Capabilities, Projects, Testimonials, Footer, NavBar). Passou por várias rodadas de revisão de linguagem (ver `portfolio-guide.md` §8–§10) — H1 e Sobre mim reescritos múltiplas vezes até bater com as regras (sem "freelancer"/"focado em", sem travessão, sem nome de ferramenta no H1, primeira pessoa no Sobre).
- **Responsividade**: retrabalhada em profundidade — breakpoint custom `xl: 1440px` adicionado (Tailwind v4 só tem até `lg: 1024px` por padrão), `.container-page` trocou de `width: 80%` fluido pra `padding-inline: 80px` fixo a partir de 1024px (resolve alinhamento em 1024 e 1440 ao mesmo tempo). Tiers ajustados manualmente em 768px, 425px e 320px pra Hero, NavBar, Footer, Testimonials.
- **Case San Marino**: construído e reconstruído várias vezes no Figma (frame `Portfolio / Desktop` node `208:396`), seguindo a estrutura de 9 seções do guide §7, revisado contra §8/§9/§10. Copy final replicada em `docs/case-san-marino-copy.md` pra aplicar manual (Figma ficou bloqueado por causa do seat). **Ainda não implementado em código** — rota `/cases/san-marino` não existe.
- **Popup de projeto removido**: `ProjectModal.tsx` deletado, `description`/`skills`/`screenshots` removidos de `ProjectData`. Cards da home agora são só imagem, linkando pra `/cases/{id}` (ainda 404).
- **Analytics**: Microsoft Clarity instalado (`@microsoft/clarity`), inicializado em `ClarityAnalytics.tsx` no layout raiz.
- **SEO**: `sitemap.ts` e `robots.ts` adicionados (convenção nativa do Next.js App Router), `/ds` excluído de ambos.

### Regras ao trabalhar nessa iniciativa

- **Figma primeiro, código depois** (ver Regra #0 acima). Violar essa regra = retrabalho.
- **Nunca inventar métricas** — se não tem número real, usar aprendizado qualitativo honesto.
- **Nunca preencher seção com texto genérico** — omitir é melhor.
- **Sempre consultar `docs/portfolio-audit-checklist.md`** antes de propor mudanças.
- **Seguir `docs/portfolio-guide.md` §8 à risca em qualquer copy nova**: sem travessão, sem palavras banidas (caos, redesign como enquadramento, "acreditaram em mim", marca/marcas, resultados exponenciais, complexo, focado/foco em, freelancer na construção "Web Designer freelancer"), sem nome de ferramenta no H1, sem nichar no H1/Sobre, negrito nos pontos-chave, tom positivo/grandioso sem inventar fato.
- **Preservar o que já é bom** (stack, tokens, tooltip email/WhatsApp, footer peel reveal, GradualBlur) — só remover quando Figma explicitamente substituir.

### Graphify

Projeto tem knowledge graph em `graphify-out/`. Regras de uso já estão em `~/.claude/CLAUDE.md` (global). Update com `graphify update .` após mudanças significativas de código.

---

## Propósito

Portfolio pessoal de Vinicius Machado — Web Designer, atualmente estudando Product Design. Voltado para:

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
| Analytics  | Microsoft Clarity (`@microsoft/clarity`)                       |
| Build      | `next build` (turbopack) → SSG / static export                 |

**Nota**: ScrollSmoother é plugin pago do Club GSAP. Optamos por Lenis + easing `power4.out` que dá sensação equivalente sem custo/licença. GSAP ticker unifica RAF (Lenis não roda RAF próprio).

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx               # Layout raiz: <ClarityAnalytics>, <SmoothScroll>, {children}
│   ├── sitemap.ts                # /sitemap.xml (convenção Next.js)
│   ├── robots.ts                 # /robots.txt (exclui /ds)
│   ├── globals.css               # @theme tokens (inclui --breakpoint-xl: 1440px), .container-page, .stagger-in
│   ├── bio/page.tsx              # Link-in-bio (fora do route group (site))
│   └── (site)/
│       ├── layout.tsx            # <NavBar>, <GradualBlur>, {children}
│       ├── page.tsx              # Home: content-wrapper (z-10) + <Footer/> irmão
│       ├── ds/page.tsx            # Design system reference (rota /ds, noindex)
│       ├── politica-de-privacidade/
│       └── termos-de-uso/
├── components/
│   ├── NavBar.tsx                # Fixed glass no topo, slide-in via GSAP, links com HoverRoll
│   ├── SmoothScroll.tsx          # Lenis + GSAP ticker + ScrollTrigger bridge
│   ├── Footer.tsx                # Fixed no bottom (z-0); tooltip email/WhatsApp; "Voltar para o topo"
│   ├── GradualBlur.tsx           # 5-layer progressive backdrop-blur, esconde perto do footer (scroll-aware)
│   ├── ClarityAnalytics.tsx      # Client component, Clarity.init() no mount
│   ├── SocialLinks.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Label + H1 + subtext + 2 CTAs (Download CV, Copiar e-mail)
│   │   ├── Projects.tsx          # Grid 2-col (a partir de lg), só imagem, linka pra /cases/{id}
│   │   ├── About.tsx             # Texto estático (sem mais scroll-effect), 2 parágrafos, grid 50/50 com título
│   │   ├── Capabilities.tsx      # "Capacidades e Ferramentas", grid 50/50, 2 sub-colunas
│   │   └── Testimonials.tsx      # Carrossel manual, quote estática, altura travada (quote + role/company)
│   ├── ui/
│   │   ├── WhisperText.tsx       # Título char-por-char via CSS transition
│   │   ├── HoverRoll.tsx         # Efeito "roleta" de hover em texto de botão/link (usado em Hero/NavBar/Footer)
│   │   ├── TextGradientScroll.tsx # Não usado mais na home — só na página /bio (BioCards)
│   │   ├── Badge.tsx, Button.tsx, ButtonDS.tsx  # (usados em /ds)
│   │   └── ...
│   └── bio/                      # Componentes exclusivos da página /bio
└── data/
    └── projects.ts               # ProjectData: id, title, pitch, result?, image, tags, liveUrl?
                                   # (description/skills/screenshots removidos junto com o modal)
```

**Componentes removidos nessa iniciativa**: `ProjectModal.tsx` (popup de projeto — cases agora abrem em página própria), `WorkHistory.tsx`, `Courses.tsx` (seções tiradas da home, não existem mais no Figma).

---

## Design tokens (globals.css `@theme`)

| Token             | Valor                        |
| ----------------- | ---------------------------- |
| `--breakpoint-xl`  | `1440px` (custom — Tailwind v4 só tem `lg: 1024px` por padrão) |
| `--color-ink`     | `#000000`                    |
| `--color-paper`   | `#ffffff`                    |
| `--color-muted`   | `#706b6b` (texto secundário) |
| `--color-muted-light` | `#c3c0c0` (footer text)   |
| `--color-accent`  | `#aadf3a` (verde CTA)        |
| `--font-sans`     | Inter                        |
| `--radius-lg`     | `16px`                       |
| `--radius-pill`   | `999px`                      |

**`.container-page`**: `width 100%, max-w 1440px, padding-inline 20px` (mobile) → **`padding-inline: 80px`** fixo a partir de `1024px` (era `width: 80%` fluido — trocado pra dar margem idêntica de 80px em 1024 e 1440, sem depender do viewport). Aplicado em todas as seções.

**Breakpoints usados no projeto** (além do padrão Tailwind): `min-[425px]:` e `min-[320px]` (base) são usados manualmente em Hero/NavBar/Footer/Testimonials pra ajustes bem finos de mobile — não confundir com os breakpoints nomeados (`md`/`lg`/`xl`).

---

## Animações — mapa

| Seção / Elemento | Efeito | Trigger | Implementação |
| --- | --- | --- | --- |
| NavBar | Slide-in do topo | Mount | GSAP fromTo |
| NavBar | Glass bg | Sempre | `bg-white/70 backdrop-blur-xl` |
| Hero — label/heading/subtext/buttons | Fade + slide up | Mount | GSAP timeline com stagger manual |
| Section titles (h2) | Char-by-char whisper | IntersectionObserver | `WhisperText` (CSS transition inline por span) |
| Botões/links (Hero, NavBar, Footer) | Texto "roleta" no hover | `group-hover` | `HoverRoll` — 2 cópias do texto empilhadas, translateY no hover |
| Projects — imagens | Escala 0.82 → 1 | Scroll (scrub) | `gsap.fromTo` + `scrollTrigger.scrub` |
| Testimonials — autor | Fade + slide up | inView + index | GSAP fromTo em block |
| Footer — setas (social links) | Rotate 45° no hover | `group-hover:rotate-45` | CSS transition |
| Footer copyright/etc | — | — | Estático |
| GradualBlur | 5 layers backdrop-filter empilhados | Fixed, mas opacity→0 perto do footer | Progressive blur (mask + blur crescente) + scroll listener |

**Removido nessa iniciativa**: `TextGradientScroll` no About (palavra-por-palavra opacity via scroll) e o word-stagger GSAP na quote do Testimonials — os dois viraram texto estático. Motivo: excesso de motion (guia §1), pedido do Vinicius. `TextGradientScroll.tsx` continua existindo, só não é mais usado na home (segue em uso na página `/bio`).

---

## Efeitos "hero" (mais complexos)

### Footer peel reveal
- Content wrapper `z-10 bg-white` cobre viewport
- Footer `fixed bottom-0 z-0` — sempre atrás
- `marginBottom: var(--footer-height)` no wrapper (medido via `ResizeObserver` no Footer)
- Ao scrollar, wrapper sobe e revela footer que estava atrás
- Link `#contato`/`#home` no NavBar/Footer → `SmoothScroll` intercepta cliques em `a[href^="#"]` e usa `lenis.scrollTo`; `#contato` especificamente vai pro fim do documento (`scrollHeight`) porque o footer é `fixed` e não tem posição própria pra scrollar até ele
- Footer tem link "Voltar para o topo" (`/#home`) no canto direito da linha de copyright, mesmo mecanismo de scroll suave

### GradualBlur (scroll-aware)
- 5 divs empilhados dentro de `fixed bottom-0 z-40 h-[100px]`
- Cada layer: `backdrop-filter: blur(Xrem)` + `mask-image: linear-gradient` em faixa específica
- Blur cresce de 0.083rem (topo) → 1rem (base). Faixas se sobrepõem → transição contínua
- **Não é mais permanentemente visível**: um listener de scroll compara `scrollY + innerHeight` contra `scrollHeight - footerHeight` (lê a CSS var `--footer-height` que o Footer mantém atualizada); quando o scroll entra na zona onde o footer é revelado, o blur faz fade-out (opacity, 300ms). Importante: como o Footer é `position: fixed`, um `IntersectionObserver` nele **não funciona** (sempre reporta "intersecting") — por isso o cálculo é feito via scroll position, não via observer.

### Tooltip cursor (email + telefone) — Footer
- Segue mouse (`left: mouseX`, `top: rect.top - 8` ou `bottom + 8`)
- Detecta lado (`above`/`below`) baseado em onde o cursor entrou no link
- Bounce lateral: `rotate(-velocity * 5deg)` com clamp ±14° + reset em 90ms
- Easing spring: `cubic-bezier(0.34, 1.56, 0.64, 1)` no transform
- Hook `useMouseTooltip` compartilhado entre `CopyEmail` e `WhatsAppPhone`
- `CopyEmail`: clipboard.writeText + label "Copiado!" por 1.5s
- `WhatsAppPhone`: `<a>` com `wa.me/554899456297?text=<msg>`, tooltip "Me chama no WhatsApp 👋"

### Copiar e-mail — Hero
- Segundo botão do Hero é "Copiar e-mail" (não link): `navigator.clipboard.writeText`, texto muda pra "Copiado!" por 1.5s
- Width do botão fica fixo mesmo trocando de texto: truque de CSS grid com um `<span>` invisível sempre com o texto mais longo ("Copiar e-mail") na mesma célula do texto visível — reserva o espaço sem precisar de `min-w` chutado em px

### HoverRoll (efeito "roleta")
- `src/components/ui/HoverRoll.tsx`: recebe `text`, renderiza 2 cópias empilhadas (`flex-col`) dentro de um container `overflow-hidden`
- Container pai precisa ter a classe `group` — o roll ativa via `group-hover:-translate-y-[calc(1.2em+6px)]`
- Altura da janela visível é `1.2em` (não `1em`) e as cópias têm `leading-[1.2]` forçado — necessário pra não cortar descendente de letras como "g"
- Usado em: botões do Hero, links do NavBar (exceto o nome "Vinicius Machado", que fica sem efeito por pedido), CTA + nav links + social links do Footer

### Testimonials — altura estável (quote + autor)
- Bloco invisível (`absolute inset-x-0 top-0 -z-10 invisible`) renderiza os 3 quotes E os 3 blocos "role + company"
- `ResizeObserver` mede cada um, guarda o max em `maxQuoteHeight` e `maxRoleHeight` separadamente
- Aplicado como `minHeight` no quote visível e no parágrafo de role/company → nada pula de tamanho ao trocar de depoimento (inclusive nomes de empresa que quebram linha diferente, tipo "Bio Connect Marketing" vs "Grupo Aura")
- `contain: layout paint` na section evita jank em scroll com GradualBlur ativo
- Setas de navegação (prev/next): `border border-black/10` (igual o botão "Copiar e-mail"), `cursor-pointer` explícito (`<button>` não herda pointer por padrão)
- Nome da empresa no card do autor é link (`companyUrl`, quando existe) com underline sempre visível, cor muda pra preto no hover

---

## Performance / gotchas

- **`force3D: false`** no GSAP dos testimonials — evita criar composite layer por palavra, importante quando GradualBlur está por cima (senão o backdrop recompõe muitas vezes por frame)
- **`contain: layout paint`** na Testimonials — isola repaint
- **`isolation: isolate`** foi tentado mas não é necessário com contain
- **Tailwind 4 e gradientes**: `bg-gradient-to-b` é legado no v4 — em contextos críticos usar inline `background: linear-gradient(...)`
- **`@media (prefers-reduced-motion: reduce)`** no `.stagger-in` do CSS (não usado hoje mas herdado)
- **`<button>` não herda `cursor: pointer`** do navegador — sempre adicionar `cursor-pointer` explícito em botões interativos (aconteceu 2x nessa iniciativa: Hero copiar e-mail, setas do Testimonials)
- **`next/link` vs `<a>` interno**: o lint `@next/next/no-html-link-for-pages` só pega `<a href="...">` com string **literal** apontando pra rota interna (`/#algo`) — se o href vem de uma variável/prop (`href={item.href}` num `.map()`), o lint não detecta estaticamente e deixa passar. Preferir `Link` do `next/link` sempre que o href for literal.

---

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Home (Hero, Projects, About, Capabilities, Testimonials, Footer) |
| `/cases/[slug]` | **Planejada, não implementada.** Cards da home já linkam pra cá (`san-marino`, `ogliari`, `izex`) — hoje dá 404 |
| `/bio` | Link-in-bio, fora do route group `(site)` |
| `/ds` | Design system reference (não indexado, `robots: noindex`, excluído do sitemap) |
| `/politica-de-privacidade` | LGPD |
| `/termos-de-uso` | Termos |
| `/sitemap.xml` | Gerado por `src/app/sitemap.ts` |
| `/robots.txt` | Gerado por `src/app/robots.ts` |

---

## Assets

- `public/Vinicius_Machado_Web_Desginer_CV.pdf` — nome mantido exatamente como o Vinicius fez upload (não renomear)
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
