import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina, BotaoSecundario, Dica } from "@/components/interface";
import { INTEGRACOES } from "@/lib/dados";

export const Route = createFileRoute("/integracoes")({
  head: () => ({
    meta: [
      { title: "Integrações — Forja" },
      {
        name: "description",
        content:
          "Prepare as conexões com OpenAI, Lovable, GitHub e Supabase. Nenhuma conexão está ativa.",
      },
      { property: "og:title", content: "Integrações — Forja" },
      { property: "og:description", content: "As ferramentas que a central poderá usar." },
    ],
  }),
  component: Integracoes,
});

function Integracoes() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Integrações"
          descricao="Nenhuma ferramenta está conectada. Os botões abaixo ainda não estabelecem conexão real."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {INTEGRACOES.map((i) => (
            <Painel key={i.id} className="rise p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line/70 bg-ink/40 font-display text-sm font-semibold text-accent">
                  {i.sigla}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-display text-base font-semibold">{i.nome}</h2>
                    <Dica texto={i.paraQueServe} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{i.descricao}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-ink/30 px-2.5 py-1 text-[11px] text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                  Não conectado
                </span>
                <BotaoSecundario disabled title="Disponível após conexão">
                  Conectar
                </BotaoSecundario>
              </div>
            </Painel>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Enquanto as conexões não existirem, tudo que a central mostra fica registrado apenas no
          seu navegador.
        </p>
      </div>
    </AppShell>
  );
}
