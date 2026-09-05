import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquarePlus, FolderKanban, Plug, GitPullRequestArrow } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina, SeloNaoConectado, Dica } from "@/components/interface";
import { INTEGRACOES, PROJETOS, ALTERACOES } from "@/lib/dados";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forja — Central de comando para desenvolvimento" },
      {
        name: "description",
        content:
          "Converse com uma inteligência artificial para criar e ajustar sistemas, com etapas claras e linguagem simples.",
      },
      { property: "og:title", content: "Forja — Central de comando para desenvolvimento" },
      {
        property: "og:description",
        content: "Peça mudanças em português e acompanhe cada etapa do trabalho.",
      },
    ],
  }),
  component: Inicio,
});

const ATALHOS = [
  {
    to: "/conversa" as const,
    titulo: "Nova conversa",
    texto: "Descreva o que você quer criar ou mudar.",
    icone: MessageSquarePlus,
  },
  {
    to: "/projetos" as const,
    titulo: "Projetos",
    texto: "Veja e abra os projetos cadastrados.",
    icone: FolderKanban,
  },
  {
    to: "/integracoes" as const,
    titulo: "Integrações",
    texto: "Prepare as conexões com as ferramentas.",
    icone: Plug,
  },
  {
    to: "/alteracoes" as const,
    titulo: "Alterações",
    texto: "Acompanhe o que a IA propôs mudar.",
    icone: GitPullRequestArrow,
  },
];

function Inicio() {
  const projeto = PROJETOS[0];

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Início"
          descricao="Sua central para pedir mudanças em sistemas usando linguagem do dia a dia."
        />

        <Painel className="rise p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="softpulse size-2 rounded-full bg-ok" />
              <span className="text-xs font-medium text-ok">Ativo</span>
            </div>
            <span className="rounded-full border border-line/70 px-2.5 py-1 text-[11px] text-muted-foreground">
              Protótipo
            </span>
          </div>
          <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">{projeto.nome}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{projeto.descricao}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {INTEGRACOES.map((i) => (
              <SeloNaoConectado key={i.id} rotulo={i.nome} />
            ))}
          </div>
        </Painel>

        <div className="rise d1 mt-6 grid gap-3 sm:grid-cols-2">
          {ATALHOS.map((a) => {
            const Icone = a.icone;
            return (
              <Link
                key={a.to}
                to={a.to}
                className="glass flex items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-white/10"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-line/70 bg-ink/40 text-accent">
                  <Icone className="size-4" />
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold">{a.titulo}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{a.texto}</span>
                </span>
              </Link>
            );
          })}
        </div>

        <Painel className="mt-6 p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-sm font-semibold">Como funciona</h3>
            <Dica texto="Cada pedido vira um plano com etapas. Nada é aplicado no seu sistema enquanto as ferramentas não estiverem conectadas." />
          </div>
          <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>1. Você escreve o pedido do seu jeito, sem termos técnicos.</li>
            <li>2. A central interpreta e monta um plano em etapas.</li>
            <li>3. A alteração fica registrada para você revisar e aprovar.</li>
            <li>4. A execução acontece quando as ferramentas forem conectadas.</li>
          </ol>
          <p className="mt-4 text-xs text-muted-foreground">
            {ALTERACOES.length} alterações registradas neste protótipo.
          </p>
        </Painel>
      </div>
    </AppShell>
  );
}
