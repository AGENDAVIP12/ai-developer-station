import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina } from "@/components/interface";
import { HISTORICO } from "@/lib/dados";

export const Route = createFileRoute("/historico")({
  head: () => ({
    meta: [
      { title: "Histórico — Forja" },
      {
        name: "description",
        content: "Reveja as conversas anteriores e o que foi combinado em cada uma.",
      },
      { property: "og:title", content: "Histórico — Forja" },
      { property: "og:description", content: "Suas conversas anteriores com a central." },
    ],
  }),
  component: Historico,
});

function Historico() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Histórico"
          descricao="Conversas de demonstração deste protótipo."
        />

        <div className="space-y-3">
          {HISTORICO.map((c) => (
            <Painel key={c.id} className="rise p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-line/70 bg-ink/40 text-accent">
                  <MessageSquare className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-sm font-semibold">{c.titulo}</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c.resumo}</p>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    {c.quando} · {c.mensagens} mensagens
                  </p>
                </div>
                <Link
                  to="/conversa"
                  className="shrink-0 rounded-xl border border-line/70 bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10"
                >
                  Abrir
                </Link>
              </div>
            </Painel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
