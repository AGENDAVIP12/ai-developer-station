export type StatusIntegracao = "nao_conectado";

export type Integracao = {
  id: "openai" | "lovable" | "github" | "supabase";
  nome: string;
  sigla: string;
  descricao: string;
  paraQueServe: string;
};

export const INTEGRACOES: Integracao[] = [
  {
    id: "openai",
    nome: "OpenAI",
    sigla: "AI",
    descricao: "Entende seus pedidos escritos e transforma em etapas de trabalho.",
    paraQueServe: "É a inteligência que conversa com você e escreve o plano das mudanças.",
  },
  {
    id: "lovable",
    nome: "Lovable",
    sigla: "LV",
    descricao: "Aplica as mudanças na aparência e no funcionamento do seu sistema.",
    paraQueServe: "É quem coloca a mão na massa e constrói as telas.",
  },
  {
    id: "github",
    nome: "GitHub",
    sigla: "GH",
    descricao: "Guarda o histórico de tudo que foi alterado no seu sistema.",
    paraQueServe: "Funciona como um arquivo com todas as versões do projeto.",
  },
  {
    id: "supabase",
    nome: "Supabase",
    sigla: "SB",
    descricao: "Guarda as informações do sistema, como cadastros e usuários.",
    paraQueServe: "É o lugar onde os dados ficam salvos.",
  },
];

export type StatusProjeto = "ativo" | "pausado";

export type Projeto = {
  id: string;
  nome: string;
  descricao: string;
  ultimaAtividade: string;
  status: StatusProjeto;
};

export const PROJETOS: Projeto[] = [
  {
    id: "demo",
    nome: "Projeto de demonstração",
    descricao:
      "Projeto local usado para experimentar a central. Nada aqui é enviado para fora do seu navegador.",
    ultimaAtividade: "Agora há pouco",
    status: "ativo",
  },
];

export type StatusAlteracao =
  | "Rascunho"
  | "Preparada"
  | "Aguardando aprovação"
  | "Aprovada"
  | "Cancelada";

export type Alteracao = {
  id: string;
  titulo: string;
  descricao: string;
  arquivos: string[];
  status: StatusAlteracao;
  data: string;
};

export const ALTERACOES: Alteracao[] = [
  {
    id: "alt-1",
    titulo: "Criar tela de cadastro de clientes",
    descricao: "Nova tela com nome, e-mail e telefone, com conferência dos campos obrigatórios.",
    arquivos: ["tela-cadastro", "formulario-cliente"],
    status: "Aguardando aprovação",
    data: "Hoje",
  },
  {
    id: "alt-2",
    titulo: "Ajustar o botão principal da tela inicial",
    descricao: "Deixar o botão mais visível e com texto mais direto.",
    arquivos: ["tela-inicial"],
    status: "Preparada",
    data: "Hoje",
  },
  {
    id: "alt-3",
    titulo: "Revisar textos da página de contato",
    descricao: "Anotação inicial, ainda sem detalhamento das mudanças.",
    arquivos: [],
    status: "Rascunho",
    data: "Ontem",
  },
];

export type Conversa = {
  id: string;
  titulo: string;
  resumo: string;
  quando: string;
  mensagens: number;
};

export const HISTORICO: Conversa[] = [
  {
    id: "c-1",
    titulo: "Crie uma tela de cadastro de clientes",
    resumo: "Plano em 5 etapas, aguardando conexão para executar.",
    quando: "Hoje, 14:20",
    mensagens: 2,
  },
  {
    id: "c-2",
    titulo: "Arrume o botão da tela inicial",
    resumo: "Alteração preparada e listada em Alterações.",
    quando: "Hoje, 11:05",
    mensagens: 2,
  },
];

export type EtapaStatus = "concluido" | "andamento" | "pendente" | "nao_conectado";

export type Etapa = {
  nome: string;
  detalhe: string;
  status: EtapaStatus;
};

export type RespostaIA = {
  entendimento: string;
  oQueSeraAlterado: string;
  arquivos: string[];
  etapas: Etapa[];
  resultado: string;
  proximaAcao: string;
};

export function montarResposta(pedido: string): RespostaIA {
  const texto = pedido.trim();
  return {
    entendimento: `Você pediu: “${texto}”. Vou organizar esse pedido em etapas claras antes de qualquer mudança.`,
    oQueSeraAlterado:
      "Nenhuma mudança é aplicada agora. A central monta o plano e deixa a alteração pronta para revisão.",
    arquivos: ["tela-relacionada", "componente-afetado"],
    etapas: [
      { nome: "Análise", detalhe: "Pedido interpretado", status: "concluido" },
      { nome: "Planejamento", detalhe: "Alterações definidas", status: "concluido" },
      { nome: "Execução", detalhe: "Disponível após conexão", status: "nao_conectado" },
      { nome: "Validação", detalhe: "Aguardando", status: "pendente" },
      { nome: "GitHub", detalhe: "Não conectado", status: "nao_conectado" },
    ],
    resultado:
      "Plano montado e registrado como rascunho. A execução real acontece depois que as conexões forem ativadas.",
    proximaAcao: "Conectar as ferramentas na página Integrações para permitir a execução.",
  };
}
