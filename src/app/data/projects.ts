export interface ArchitectureLayer {
  name: string;
  description: string;
  technologies: string[];
}

export interface ArchitectureInfo {
  overview: string;
  layers: ArchitectureLayer[];
  highlights: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  architecture?: ArchitectureInfo;
}

export const projects: Project[] = [
  {
    id: 115,
    slug: "imovdigital",
    title: "ImovDigital",
    description:
      "Plataforma SaaS para imobiliarias com gestao de imoveis, site proprio e ferramentas de marketing digital.",
    image: "./imovdigital.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    demoUrl: "https://imovdigital.com.br",
    featured: true,
    architecture: {
      overview:
        "Arquitetura multi-tenant SaaS com separacao clara entre frontend, backend API e painel administrativo. Cada imobiliaria possui seu proprio subdominio e dados isolados via tenant ID no banco de dados.",
      layers: [
        {
          name: "Frontend (Sites das Imobiliarias)",
          description:
            "Aplicacao Next.js com SSR para SEO otimizado. Cada imobiliaria recebe um site proprio com subdominio personalizado, listagem de imoveis, busca avancada e paginas de contato.",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "Painel Administrativo",
          description:
            "Dashboard para imobiliarias gerenciarem imoveis, leads, configuracoes do site e ferramentas de marketing digital. Interface responsiva com gestao completa do catalogo.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "API Backend",
          description:
            "API RESTful com autenticacao JWT, upload de imagens, gestao de tenants e integracao com servicos externos. Arquitetura modular com separacao por dominios.",
          technologies: ["Node.js", "TypeScript", "Prisma"],
        },
        {
          name: "Banco de Dados",
          description:
            "PostgreSQL com schema multi-tenant usando tenant ID para isolamento de dados. Migrations gerenciadas via Prisma com indexes otimizados para buscas de imoveis.",
          technologies: ["PostgreSQL", "Prisma"],
        },
      ],
      highlights: [
        "Arquitetura multi-tenant com isolamento de dados por imobiliaria",
        "SSR com Next.js para SEO otimizado nos sites das imobiliarias",
        "Upload e otimizacao de imagens para listagem de imoveis",
        "Sistema de subdominio dinamico por tenant",
      ],
    },
  },
  {
    id: 114,
    slug: "proposely",
    title: "Proposely",
    description:
      "Plataforma SaaS para criação e gestão de propostas comerciais com IA, templates profissionais e múltiplos estilos de visualização.",
    image: "./proposely.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "OpenAI",
    ],
    demoUrl: "https://proposelylp.cap.leonardo-reis.com",
    featured: true,
    architecture: {
      overview:
        "SaaS com integracao de IA para geracao automatica de propostas comerciais. Backend em Fastify com processamento assincrono, pagamentos via Stripe e geracao de conteudo com OpenAI.",
      layers: [
        {
          name: "Frontend",
          description:
            "Aplicacao React com editor de propostas interativo, preview em tempo real, multiplos templates e exportacao PDF.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "API Backend",
          description:
            "API Fastify com alta performance, autenticacao, geracao de propostas com IA e webhooks para processamento de pagamentos.",
          technologies: ["Node.js", "Fastify", "TypeScript"],
        },
        {
          name: "Integracao IA",
          description:
            "Pipeline de geracao de conteudo usando OpenAI para criar propostas automaticamente baseadas em parametros do usuario.",
          technologies: ["OpenAI API"],
        },
        {
          name: "Pagamentos & Banco",
          description:
            "Integracao Stripe para assinaturas e pagamentos recorrentes. PostgreSQL com Prisma para persistencia de dados.",
          technologies: ["Stripe", "PostgreSQL", "Prisma"],
        },
      ],
      highlights: [
        "Geracao automatica de propostas com OpenAI",
        "Pagamentos recorrentes com Stripe",
        "Editor de propostas com preview em tempo real",
        "API de alta performance com Fastify",
      ],
    },
  },
  {
    id: 113,
    slug: "aegis-vault",
    title: "Aegis Vault",
    description: "Gerenciador de senhas multiplataforma para desktop",
    image: "./aegis.png",
    tags: [
      "React",
      "Rust",
      "Tauri",
      "Criptografia",
      "MongoDB",
      "Tailwind CSS",
      "CI/CD",
    ],
    demoUrl: "https://aegisvault.leonardo-reis.com",
    repoUrl: "https://github.com/leonardoReizz/aegis-vault",
    featured: true,
    architecture: {
      overview:
        "Aplicacao desktop multiplataforma construida com Tauri (Rust + React). Criptografia end-to-end no lado do cliente com backend Rust garantindo seguranca maxima dos dados.",
      layers: [
        {
          name: "Frontend (UI)",
          description:
            "Interface React renderizada dentro do Tauri WebView. Design moderno com Tailwind CSS para gestao intuitiva de senhas.",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          name: "Core (Rust / Tauri)",
          description:
            "Backend nativo em Rust responsavel pela criptografia, gerenciamento de arquivos e comunicacao segura com o sistema operacional.",
          technologies: ["Rust", "Tauri"],
        },
        {
          name: "Criptografia",
          description:
            "Camada de criptografia AES-256 implementada em Rust para protecao dos dados sensíveis. Chaves derivadas da master password do usuario.",
          technologies: ["AES-256", "Rust"],
        },
        {
          name: "Persistencia",
          description:
            "MongoDB para sincronizacao de dados entre dispositivos. Dados armazenados sempre criptografados.",
          technologies: ["MongoDB"],
        },
      ],
      highlights: [
        "Criptografia end-to-end com AES-256 implementada em Rust",
        "Aplicacao desktop multiplataforma (Windows, macOS, Linux)",
        "Pipeline CI/CD para build e distribuicao automatica",
        "Sincronizacao segura entre dispositivos via MongoDB",
      ],
    },
  },
  {
    id: 112,
    slug: "sentra-api",
    title: "SentraAPI",
    description: "Plataforma de monitoramento para apis",
    image: "./sentra.png",
    tags: [
      "React",
      "Next.js",
      "NestJS",
      "BullMQ",
      "RabbitMQ",
      "MySQL",
      "Redis",
      "Docker",
    ],
    demoUrl: "https://sentra-web.cap.leonardo-reis.com",
    featured: true,
    architecture: {
      overview:
        "Plataforma de monitoramento de APIs com arquitetura orientada a eventos. Workers processam health checks de forma assincrona usando filas, com notificacoes em tempo real e dashboards de metricas.",
      layers: [
        {
          name: "Frontend (Dashboard)",
          description:
            "Dashboard Next.js com graficos de metricas em tempo real, configuracao de endpoints monitorados e historico de incidentes.",
          technologies: ["Next.js", "React", "TypeScript"],
        },
        {
          name: "API Backend",
          description:
            "API NestJS com modulos para gestao de monitores, usuarios e notificacoes. Arquitetura modular com injecao de dependencias.",
          technologies: ["NestJS", "TypeScript"],
        },
        {
          name: "Workers & Filas",
          description:
            "Workers BullMQ processam health checks periodicos. RabbitMQ para comunicacao entre servicos e processamento de eventos.",
          technologies: ["BullMQ", "RabbitMQ", "Redis"],
        },
        {
          name: "Infraestrutura",
          description:
            "Containers Docker orquestrados com docker-compose. MySQL para persistencia e Redis para cache e filas.",
          technologies: ["Docker", "MySQL", "Redis"],
        },
      ],
      highlights: [
        "Arquitetura orientada a eventos com RabbitMQ e BullMQ",
        "Health checks assincronos com workers distribuidos",
        "Dashboard de metricas em tempo real",
        "Infraestrutura containerizada com Docker",
      ],
    },
  },
  {
    id: 11,
    slug: "touchaba",
    title: "TouchABA",
    description: "Sistema para clinica que atuam com ABA",
    image: "./touch.png",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    demoUrl: "https://touchaba.com/",
    architecture: {
      overview:
        "Sistema web para clinicas de terapia ABA com gestao de pacientes, sessoes, relatorios e equipe terapeutica.",
      layers: [
        {
          name: "Frontend",
          description:
            "Aplicacao React para gestao de pacientes, agendamento de sessoes e visualizacao de relatorios clinicos.",
          technologies: ["React"],
        },
        {
          name: "API Backend",
          description:
            "API Node.js para gerenciamento de dados clinicos, autenticacao e regras de negocio.",
          technologies: ["Node.js"],
        },
        {
          name: "Banco de Dados & Infra",
          description:
            "PostgreSQL para persistencia de dados clinicos. Deploy containerizado com Docker.",
          technologies: ["PostgreSQL", "Docker"],
        },
      ],
      highlights: [
        "Gestao completa de pacientes e sessoes ABA",
        "Relatorios clinicos para acompanhamento terapeutico",
        "Deploy containerizado com Docker",
      ],
    },
  },
  {
    id: 1,
    slug: "associacao-aconchego",
    title: "Associacao Aconchego",
    description: "Landing page para associacao aconchego",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSgxTKerUly0tmfUuL45Am3dYN_zeB5cIfQ&s",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://associacaoaconchego.com/",
    architecture: {
      overview:
        "Landing page institucional com backend para gestao de conteudo e formularios de contato.",
      layers: [
        {
          name: "Frontend",
          description:
            "Landing page responsiva com React e Tailwind CSS, focada em apresentacao institucional e captacao de voluntarios.",
          technologies: ["React", "Tailwind CSS"],
        },
        {
          name: "Backend",
          description:
            "API Node.js para processamento de formularios e gestao de conteudo dinamico.",
          technologies: ["Node.js", "MongoDB"],
        },
      ],
      highlights: [
        "Design responsivo e acessivel",
        "Formularios de contato com backend Node.js",
      ],
    },
  },
  {
    id: 2,
    slug: "nativesec",
    title: "Nativesec",
    description:
      "Aplicacao web para gerenciamento com calendario interativo e relatorios.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb8RY8jQOqwCfxtFmcZtvc_G4m8iHITs2Uw&s",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    demoUrl: "https://nativesec.io",
    repoUrl: "https://github.com/Nativesec/nativesec-desktop",
    architecture: {
      overview:
        "Aplicacao web com Next.js para gerenciamento de tarefas e seguranca, com calendario interativo e geracao de relatorios.",
      layers: [
        {
          name: "Frontend",
          description:
            "Aplicacao Next.js com calendario interativo, dashboard de gerenciamento e geracao de relatorios.",
          technologies: ["Next.js", "TypeScript"],
        },
        {
          name: "Backend & Banco",
          description:
            "API Next.js com Prisma ORM e PostgreSQL para persistencia de dados.",
          technologies: ["PostgreSQL", "Prisma"],
        },
      ],
      highlights: [
        "Calendario interativo para gestao de tarefas",
        "Relatorios dinamicos",
        "Prisma ORM com PostgreSQL",
      ],
    },
  },
  {
    id: 3,
    slug: "gita",
    title: "Gita",
    image: "https://gita.cloud/img/dalle.webp",
    description: "Gerenciamento e observabilidade para Kubernetes",
    tags: [
      "React.JS",
      "Next.JS",
      "Node.js",
      "Python",
      "GoLang",
      "Docker",
      "MongoDB",
      "RabbitMQ",
      "Stripe",
    ],
    demoUrl: "https://gita.cloud",
    architecture: {
      overview:
        "Plataforma distribuida de gerenciamento e observabilidade para clusters Kubernetes. Arquitetura baseada em 3 microsservicos independentes (Node.js e Python) comunicando via RabbitMQ, com agentes GoLang rodando diretamente nos clusters Kubernetes dos clientes para coleta de metricas e execucao de comandos.",
      layers: [
        {
          name: "Frontend (Dashboard)",
          description:
            "Dashboard Next.js com visualizacao de clusters, pods, metricas e logs em tempo real. Interface para gerenciamento de recursos e monitoramento de saude dos clusters.",
          technologies: ["Next.js", "React"],
        },
        {
          name: "Microsservico de Pagamentos",
          description:
            "Microsservico Node.js dedicado ao billing com Stripe. Gerencia assinaturas, contagem de no/hora para cobranca proporcional e webhooks de pagamento.",
          technologies: ["Node.js", "Stripe"],
        },
        {
          name: "Microsservico de Orquestracao",
          description:
            "Microsservico principal em Node.js responsavel pela API REST, autenticacao, gestao de clusters e comunicacao com os agentes via RabbitMQ.",
          technologies: ["Node.js", "Express", "MongoDB"],
        },
        {
          name: "Microsservico de Metricas",
          description:
            "Microsservico Python para processamento e agregacao de metricas coletadas dos clusters. Pipeline de dados para dashboards e alertas.",
          technologies: ["Python"],
        },
        {
          name: "Agente Kubernetes (GoLang)",
          description:
            "Agente leve em GoLang deployado diretamente nos clusters Kubernetes dos clientes. Coleta metricas, executa comandos e reporta status via RabbitMQ para a plataforma central.",
          technologies: ["GoLang", "Kubernetes"],
        },
        {
          name: "Mensageria & Infra",
          description:
            "RabbitMQ como backbone de comunicacao entre os 3 microsservicos e os agentes nos clusters. MongoDB para persistencia. Docker para deploy dos servicos.",
          technologies: ["RabbitMQ", "MongoDB", "Docker"],
        },
      ],
      highlights: [
        "Arquitetura distribuida com 3 microsservicos independentes",
        "Agente GoLang rodando nativamente dentro dos clusters Kubernetes",
        "Sistema de billing com contagem de no/hora via Stripe",
        "Comunicacao assincrona entre servicos e agentes via RabbitMQ",
        "Microsservicos poliglotas: Node.js, Python e GoLang",
      ],
    },
  },
  {
    id: 4,
    slug: "eslint-config",
    title: "Eslint-config",
    description: "Configuracao pronta para eslint-react, node e next",
    image: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
    tags: ["Vue.js", "Firebase", "Express", "TailwindCSS"],
    repoUrl: "https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR",
  },
];
