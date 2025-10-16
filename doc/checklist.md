# 🧩 CHECKLIST TÉCNICO — Biblioteca Local Interativa

**Autor:** Bruno  
**Versão:** 1.0  
**Status:** Guia Geral de Execução e Cronograma de Desenvolvimento  
**Stack:** MERN (MongoDB, Express, React, Node.js, Tailwind)

---

## 🎯 Objetivo

Este checklist define o fluxo técnico contínuo do projeto **Biblioteca Local Interativa**, desde o setup inicial até o deploy final.  
Ele serve como **guia operacional e documento de alinhamento** entre desenvolvedor e sistema, garantindo consistência de execução, rastreabilidade e evolução incremental do produto.

---

## ⚙️ Etapa 1 — Configuração Inicial do Ambiente

- [ ] Criar pasta raiz `biblioteca-local`
- [ ] Iniciar repositório Git (`git init`)
- [ ] Criar branches `main` e `dev`
- [ ] Configurar `.gitignore`, `.prettierrc`, `.eslintrc.json`
- [ ] Criar subpastas:
  - `/client` → aplicação React
  - `/server` → backend Node/Express
  - `/docs` → documentação e logs
  - `/config` → env, scripts e pipelines
- [ ] Inicializar `package.json` raiz e dependências comuns
- [ ] Instalar Docker e preparar `docker-compose.yml` (Mongo + backend + frontend)
- [ ] Testar ambiente com containers em execução (`docker ps`)

---

## 🧠 Etapa 2 — Modelagem e Arquitetura de Dados

- [ ] Criar banco MongoDB (local ou container)
- [ ] Instalar e configurar Mongoose
- [ ] Definir modelos:
  - `Livro`: título, autor, tags, caminho, capa, data
  - `Anotação`: conteúdo, página, data, referência ao livro
  - `Usuário` (futuro): nome, e-mail, senha hash
- [ ] Criar conexão persistente (`mongoose.connect`)
- [ ] Testar criação e leitura de registros reais no banco

---

## 🔧 Etapa 3 — Backend (API REST)

- [ ] Criar estrutura base (`server.js`, `routes/`, `controllers/`)
- [ ] Configurar middlewares:
  - `cors`, `dotenv`, `express.json()`
- [ ] Criar rotas:
  - `/api/livros` — CRUD completo
  - `/api/anotacoes` — CRUD completo
- [ ] Implementar upload de PDFs (multer)
- [ ] Criar camada de serviços para extração de metadados (ex: páginas, tamanho)
- [ ] Adicionar tratamento global de erros e logs
- [ ] Validar endpoints com Postman ou Insomnia

---

## 🎨 Etapa 4 — Frontend (Interface e Navegação)

- [ ] Inicializar projeto React (Vite)
- [ ] Configurar Tailwind CSS e fontes padrão
- [ ] Criar estrutura `/src`:
  - `components/`, `pages/`, `store/`, `hooks/`
- [ ] Criar layout principal:
  - Header (logo + nome)
  - Sidebar (categorias, busca, filtros)
  - Main grid (lista dos livros)
- [ ] Configurar Zustand para estado global
- [ ] Criar comunicação base via Axios com backend

---

## 📖 Etapa 5 — Leitor de PDFs e Interação

- [ ] Adicionar biblioteca `react-pdf`
- [ ] Criar componente `<LeitorLivro />`
- [ ] Exibir PDF carregado com zoom e paginação
- [ ] Implementar sistema de anotações:
  - Caixa lateral para criar notas
  - Salvamento automático (API `/api/anotacoes`)
  - Associação da nota à página atual
- [ ] Implementar feedbacks de leitura:
  - Status (“lido”, “em andamento”)
  - Última página acessada

---

## 🔍 Etapa 6 — Busca, Filtros e Organização

- [ ] Implementar busca textual (título, autor, tags)
- [ ] Criar filtros por categoria e status
- [ ] Adicionar ordenação (alfabética, recente)
- [ ] Implementar favoritos e tags personalizadas
- [ ] Exibir resumo geral:
  - Quantidade de livros
  - Quantidade de anotações
  - Tempo de leitura

---

## 🧪 Etapa 7 — Testes e Qualidade

- [ ] Configurar Jest para backend
- [ ] Criar testes unitários (controllers e models)
- [ ] Criar testes manuais no frontend:
  - Upload
  - Leitura
  - Criação de notas
  - Persistência
- [ ] Testar integração completa (client ↔ server ↔ banco)

---

## 🐳 Etapa 8 — Containerização e Build

- [ ] Criar Dockerfile para backend
- [ ] Criar Dockerfile para frontend
- [ ] Gerar imagem do banco Mongo (volume nomeado)
- [ ] Testar stack completa via `docker-compose up`
- [ ] Testar persistência dos dados (reiniciar container)
- [ ] Criar scripts de build:
  - `npm run dev`
  - `npm run build`
  - `npm run start:local`

---

## 🚀 Etapa 9 — Deploy e CI/CD

- [ ] Criar conta no Railway, Render ou VPS pessoal
- [ ] Configurar variáveis de ambiente (`.env` remoto)
- [ ] Adicionar GitHub Actions:
  - Build e testes automáticos em `push`
  - Deploy automático na branch `main`
- [ ] Validar logs e uptime do servidor
- [ ] Criar domínio (opcional) e servir frontend compilado

---

## 📑 Etapa 10 — Documentação Final

- [ ] Atualizar `README.md` com instruções de uso e stack
- [ ] Criar `architecture.md` com fluxos internos e dependências
- [ ] Adicionar `CHANGELOG.md` com histórico de versões
- [ ] Criar seção “Próximos Passos” para evolução do projeto

---

## 🌱 Extensões Futuras (Fase 2+)

- [ ] Login e perfis de usuário
- [ ] Sincronização com nuvem
- [ ] OCR e busca dentro dos PDFs
- [ ] Dashboard de estatísticas de leitura
- [ ] Análise semântica de anotações (IA)

---

### 📜 Nota Final

Este checklist é um documento vivo.  
Ele não serve apenas como lista de tarefas, mas como **linha de raciocínio técnico** para a evolução do produto.  
Cada etapa representa uma entrega funcional completa e validável, e as revisões serão discutidas a cada ciclo de desenvolvimento.

---

**Status atual:** Preparação do ambiente (Sprint 0).  
**Próxima ação:** Criação da estrutura de pastas e containers iniciais.
