import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina, BotaoSecundario, Dica } from "@/components/interface";
import { ALTERACOES, type StatusAlteracao } from "@/lib/dados";

export const Route = createFileRoute("/alteracoes")({
  head: () => ({
    meta: [
      { title: "Alterações — Forja" },
      {
        name: "description",
        content: "Acompanhe as alterações propostas pela inteligência artificial e seu status.",
      },
      { property: "og:title", content: "Alterações — Forja" },
      { property: "og:description", content: "O que foi proposto, o que está pronto e o que aguarda aprovação." },
    ],
  }),
  component: Alteracoes,
});

function corStatus(status: StatusAlteracao) {
  switch (status) {
    case "Aprovada":
      return "border-ok/40 bg-ok/10 text-ok";
    case "Aguardando aprovação":
      return "border-warn/40 bg-warn/10 text-warn";
    case "Preparada":
      return "border-accent/40 bg-accent/10 text-accent";
    case "Cancelada":
      return "border-destructive/40 bg-destructive/10 text-destructive";
    default:
      return "border-line/70 bg-ink/30 text-muted-foreground";
  }
}

function Alteracoes() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Alterações"
          descricao="Cada pedido vira uma alteração registrada. Nada é enviado para fora enquanto não houver conexão."
        />

        <div className="space-y-3">
          {ALTERACOES.map((a) => (
            <Painel key={a.id} className="rise p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-display text-base font-semibold">{a.titulo}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{a.descricao}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${corStatus(a.status)}`}
                >
                  {a.status}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {a.arquivos.length ? (
                  a.arquivos.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-line/70 bg-ink/40 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-muted-foreground">Nenhuma parte definida ainda</span>
                )}
                <Dica texto="Aqui aparecem as partes do sistema que essa alteração pretende mudar." />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-muted-foreground">Data: {a.data}</span>
                <div className="flex gap-2">
                  <BotaoSecundario disabled className="px-3 py-1.5 text-xs">
                    Revisar · disponível após conexão
                  </BotaoSecundario>
                  <BotaoSecundario disabled className="px-3 py-1.5 text-xs">
                    Enviar para o GitHub · não conectado
                  </BotaoSecundario>
                </div>
              </div>
            </Painel>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
