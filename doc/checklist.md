# 🧩 CHECKLIST TÉCNICO — LibrAI (Versão 1.1)

**Autor:** Bruno
**Versão:** 1.1
**Status:** Guia Geral de Execução e Cronograma de Desenvolvimento
**Stack:** PERN (PostgreSQL, Express, React, Node.js, Tailwind)
**Banco de Dados:** PostgreSQL + Prisma ORM
**Infraestrutura:** Docker Compose
**Ambiente:** Desenvolvimento profissional com CI/CD

---

## 🎯 Objetivo

Este checklist guia a execução completa do projeto **LibrAI**, desde a configuração inicial até o deploy.
Serve como **documento operacional**, garantindo coerência, rastreabilidade e evolução incremental.

---

## ⚙️ Etapa 1 — Configuração Inicial do Ambiente

- [ ] Criar pasta raiz `librai/`
- [ ] Iniciar repositório Git (`git init`)
- [ ] Criar branches `main` e `dev`
- [ ] Configurar `.gitignore`, `.prettierrc`, `.eslintrc.json`
- [ ] Criar subpastas:

  - `/client` → aplicação React (Vite)
  - `/server` → backend Node/Express
  - `/docs` → documentação e logs
  - `/config` → envs, scripts e pipelines

- [ ] Inicializar `package.json` raiz
- [ ] Criar `docker-compose.yml` com:

  - `frontend` (React)
  - `backend` (Node)
  - `db` (PostgreSQL 15)

- [ ] Testar containers (`docker ps`)

---

## 🧠 Etapa 2 — Modelagem e Arquitetura de Dados

- [ ] Instalar e configurar **Prisma ORM**
- [ ] Definir modelos iniciais:

  - `Book`: título, autor, caminho, capa, data
  - `Note`: conteúdo, página, data, referência ao livro
  - `User`: nome, email, senha (hash)

- [ ] Executar `npx prisma migrate dev`
- [ ] Testar conexão real com banco PostgreSQL (container)

---

## 🔧 Etapa 3 — Backend (API REST)

- [ ] Criar estrutura base:

  - `server.js`, `routes/`, `controllers/`, `prisma/`

- [ ] Configurar middlewares:

  - `cors`, `dotenv`, `express.json()`

- [ ] Criar rotas:

  - `/api/books` — CRUD completo
  - `/api/notes` — CRUD completo

- [ ] Implementar upload de PDFs (`multer`)
- [ ] Adicionar logs e tratamento de erros global
- [ ] Validar endpoints via Postman

---

## 🎨 Etapa 4 — Frontend (Interface e Navegação)

- [ ] Inicializar projeto React com Vite
- [ ] Instalar Tailwind CSS e configurar tema
- [ ] Estrutura `/src`:

  - `components/`, `pages/`, `store/`, `hooks/`

- [ ] Criar layout base:

  - Header (logo + nome)
  - Sidebar (categorias e filtros)
  - Main grid (lista de livros)

- [ ] Configurar Zustand para estado global
- [ ] Conectar com backend via Axios

---

## 📖 Etapa 5 — Leitor de PDFs e Anotações

- [ ] Adicionar `react-pdf`
- [ ] Criar componente `<LeitorLivro />`
- [ ] Exibir PDF com zoom e paginação
- [ ] Criar sistema de anotações:

  - Caixa lateral com notas persistentes
  - Salvamento automático (API `/api/notes`)

- [ ] Sincronizar notas com páginas do livro

---

## 🔍 Etapa 6 — Busca e Organização

- [ ] Implementar busca (título, autor)
- [ ] Adicionar filtros (status, tags, favoritos)
- [ ] Ordenação (alfabética, data)
- [ ] Criar dashboard com métricas:

  - Total de livros, anotações e tempo de leitura

---

## 🧪 Etapa 7 — Testes e Qualidade

- [ ] Configurar Jest para backend
- [ ] Criar testes unitários (controllers, services)
- [ ] Testes manuais no frontend:

  - Upload, leitura, anotações

- [ ] Validar persistência real no banco

---

## 🐳 Etapa 8 — Containerização e Build

- [ ] Criar Dockerfile para backend
- [ ] Criar Dockerfile para frontend
- [ ] Configurar volume persistente `pgdata`
- [ ] Testar stack via `docker-compose up`
- [ ] Validar persistência após reinício

---

## 🚀 Etapa 9 — Deploy e CI/CD

- [ ] Configurar GitHub Actions:

  - Build e testes automáticos
  - Deploy contínuo (Railway, Render ou VPS)

- [ ] Configurar variáveis `.env` em produção
- [ ] Validar logs e uptime
- [ ] Criar domínio e servir SPA final

---

## 📑 Etapa 10 — Documentação e Logs

- [ ] Atualizar `README.md`
- [ ] Criar `architecture.md` com fluxos internos
- [ ] Adicionar `CHANGELOG.md`
- [ ] Gerar `SPRINT_LOG.md` por ciclo

---

## 🌱 Extensões Futuras

- [ ] Login e perfis de usuário
- [ ] Sincronização em nuvem
- [ ] OCR e busca textual nos PDFs
- [ ] Dashboard de estatísticas
- [ ] Análise de anotações com IA

---
