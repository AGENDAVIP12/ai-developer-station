import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina, BotaoSecundario } from "@/components/interface";
import { PROJETOS } from "@/lib/dados";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Forja" },
      {
        name: "description",
        content: "Veja seus projetos, o status de cada um e abra a central de conversa.",
      },
      { property: "og:title", content: "Projetos — Forja" },
      { property: "og:description", content: "Todos os seus projetos em um só lugar." },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Projetos"
          descricao="Cada projeto guarda suas conversas e alterações."
          acao={
            <BotaoSecundario disabled title="Disponível após conexão">
              <Plus className="size-4" />
              Novo projeto · disponível após conexão
            </BotaoSecundario>
          }
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {PROJETOS.map((p) => (
            <Painel key={p.id} className="rise p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ok">
                  <span className="softpulse size-2 rounded-full bg-ok" />
                  {p.status === "ativo" ? "Ativo" : "Pausado"}
                </span>
                <span className="rounded-full border border-line/70 px-2.5 py-1 text-[11px] text-muted-foreground">
                  Local
                </span>
              </div>
              <h2 className="mt-2 font-display text-lg font-semibold tracking-tight">{p.nome}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.descricao}</p>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Última atividade: {p.ultimaAtividade}
              </p>
              <Link
                to="/conversa"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/30 transition hover:brightness-110"
              >
                Abrir projeto
              </Link>
            </Painel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
