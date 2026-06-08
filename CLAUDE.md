# Vinicius Machado — Portfolio Pessoal

**Objetivo**: Site pessoal de portfólio para prospecção de vagas PJ e projetos freelancer.  
**Domínio**: [viniciusmachado.com](https://viniciusmachado.com)  
**Status**: 🚧 Em desenvolvimento  
**Repositório**: https://github.com/viniwebd/viniciusmachado _(a criar)_

---

## Propósito

Portfolio pessoal de Vinicius Machado — desenvolvedor web. Voltado para:

- Captação de vagas PJ (empresas que contratam como CNPJ)
- Projetos freelancer diretos com clientes
- Apresentação de projetos, stack e contato profissional

O site deve transmitir **competência técnica e identidade própria**, diferente do Studio Vyn (que é focado em serviços de agência).

---

## Stack (referência — definir ao iniciar o projeto)

Sugestão: mesma base do Studio Vyn para aproveitar o domínio de conhecimento.

| Camada     | Tecnologia                       |
| ---------- | -------------------------------- |
| Frontend   | React 18 + TypeScript + Next.js  |
| Roteamento | Next                             |
| Estilo     | Tailwind CSS 3                   |
| Animações  | GSAP                             |
| SSG        | react-dom/server + prerender.mjs |

---

## Infraestrutura

### Servidor

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

**Fluxo completo:**

1. Push para `main` no GitHub
2. Portainer detecta via webhook e executa `docker-compose up --build`
3. Traefik roteia `viniciusmachado.com` para o container automaticamente
4. SSL renovado automaticamente

### docker-compose.yml

Já criado em `viniciusmachado/docker-compose.yml`:

- Serviço `web`: nginx servindo `dist/` (build Vite)
- Labels Traefik: `viniciusmachado.com` + `www.viniciusmachado.com`
- Sem serviço `api` por padrão — adicionar se precisar de formulário de contato

### Dockerfile

Copiar o padrão do Studio Vyn:

```
stage 1 (node:20): npm ci → npm run build → dist/
stage 2 (nginx:alpine): copia dist/ + nginx.conf
```

### DNS

Apontar no provedor de domínio:

```
A     @    → IP do servidor
CNAME www  → viniciusmachado.com
```

---

## Passos para iniciar o projeto

- [ ] Criar repositório `viniwebd/viniciusmachado` no GitHub
- [ ] Scaffold inicial (Vite + React + TS + Tailwind + TanStack Router)
- [ ] Copiar `docker-compose.yml` desta pasta para a raiz do projeto
- [ ] Criar `Dockerfile` (multi-stage) e `nginx.conf`
- [ ] Configurar webhook no Portainer apontando para o repositório
- [ ] Apontar DNS do domínio para o servidor
- [ ] Criar stack no Portainer com o `docker-compose.yml`
- [ ] Definir identidade visual (diferente do Studio Vyn)
- [ ] Implementar seções: hero, projetos, stack, sobre, contato

---

## Referência

O Studio Vyn (`studio vyn/home/`) tem toda a infra resolvida e pode ser usado como base:

- `scripts/prerender.mjs` — SSG
- `src/entry-server.tsx` — render SSR
- `nginx.conf` — cache + gzip + SPA fallback
- `Dockerfile` — multi-stage
- `api/server.js` — Express com segurança completa (se precisar de API)
