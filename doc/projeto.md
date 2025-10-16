# 📘 Projeto LibrAI — Biblioteca Local Inteligente

**Autor:** Bruno  
**Versão:** 1.0  
**Tipo:** Documento Oficial de Visão e Arquitetura  
**Status:** Sprint 0 – Estruturação e Ambientes

---

## Visão Geral

O **LibrAI** é uma aplicação fullstack que funciona como uma **biblioteca digital pessoal**.  
Seu propósito é permitir que o usuário gerencie seus próprios livros em PDF, leia diretamente na plataforma e escreva **anotações associadas à leitura**, tudo de forma **persistente e organizada**.

O projeto nasce com a mentalidade de **produto real**, não como um protótipo:  
desde o início haverá **banco de dados relacional ativo**, **upload real de arquivos** e **integração entre backend e frontend**.  
Nenhum dado será simulado — tudo gravado e lido de forma persistente.

Além do valor funcional, LibrAI serve como demonstração prática de competências DevOps e FullStack: containerização, pipeline, arquitetura modular e automação de deploy.

---

## Estrutura Geral da Aplicação

O sistema será dividido em três módulos principais:

1. **Frontend (SPA)**  
   Desenvolvido em React com Vite, Tailwind e Zustand, o frontend será responsável pela experiência do usuário.  
   A interface exibirá a biblioteca de livros, o leitor de PDFs embutido e a área de anotações.

2. **Backend (API REST)**  
   Construído em Node.js com Express, o backend gerencia autenticação, armazenamento e controle de dados.  
   A camada de persistência usa Prisma ORM, conectado a um banco PostgreSQL.  
   O backend também gerencia o upload físico dos arquivos de livros.

3. **Banco de Dados (PostgreSQL)**  
   Responsável por armazenar usuários, livros e anotações.  
   Todas as operações (login, leitura, criação, edição, exclusão) interagem com o banco real via ORM.

Esses três módulos serão integrados e orquestrados via **Docker Compose**, garantindo isolamento e reprodutibilidade do ambiente.

---

## Arquitetura Técnica

O **frontend** comunica-se com o **backend** através de uma API REST, utilizando JSON e autenticação por JWT (tokens de sessão).  
O **backend** se comunica com o **PostgreSQL** utilizando o **Prisma ORM**, abstraindo queries SQL em uma camada de código clara.  
Os **arquivos PDF** serão armazenados inicialmente em volume local dentro do container backend (`/app/uploads`), podendo futuramente migrar para um storage externo (ex: AWS S3).

O ambiente é totalmente containerizado, com três serviços:

- **db:** PostgreSQL 15
- **backend:** Node/Express com Prisma
- **frontend:** React/Vite servindo SPA

Cada serviço roda em seu container e é orquestrado por `docker-compose.yml`.  
A persistência do banco é garantida por volume nomeado (`pgdata`).

---

## Estrutura de Dados

O modelo de dados é composto por três entidades centrais:

- **User:** identifica o usuário, com credenciais seguras (hash de senha).
- **Book:** representa cada livro digital, com título, autor, caminho do arquivo e vínculo ao usuário.
- **Note:** representa anotações feitas durante a leitura, podendo referenciar uma página específica do livro.

Essas relações garantem integridade e rastreabilidade das leituras e insights.

---

## Objetivo da Sprint 0

A Sprint 0 é dedicada à **infraestrutura**.  
Seu objetivo é preparar o ambiente e conectar todos os módulos para que o projeto se torne funcional, ainda que sem interface final.

**Resultados esperados:**

- Containers em funcionamento: backend, banco e frontend base.
- Conexão estável entre backend ↔ banco de dados.
- Endpoints básicos de autenticação e health-check disponíveis.
- Estrutura inicial do frontend servindo o build.
- Tudo versionado e controlado via Git, com pipeline inicial em GitHub Actions.

---

## Etapas Futuras

Após a Sprint 0, cada nova sprint trará uma expansão funcional:

- **Sprint 1 – Livros:** CRUD completo de livros, upload e visualização básica.
- **Sprint 2 – Leitor e Notas:** integração do leitor PDF e criação de anotações persistentes.
- **Sprint 3 – Interface Final:** refinamento visual, filtros, busca e UX.
- **Sprint 4 – Deploy:** configuração de pipelines CI/CD e hospedagem estável em ambiente público.

Cada sprint será pensada com base em princípios reais de entrega incremental e versionamento contínuo.

---

## Considerações Finais

O LibrAI é um projeto de **valor real**: útil, técnico e demonstrativo.  
Ele mostra domínio prático de ambientes DevOps, desenvolvimento fullstack e arquitetura escalável.  
A meta é que, ao final, o produto possa ser utilizado genuinamente como biblioteca pessoal e, ao mesmo tempo, como vitrine de competência técnica.

---

**Fim do Documento de Visão – LibrAI**
