import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Painel, TituloPagina, BotaoSecundario, Dica, SeloNaoConectado } from "@/components/interface";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações — Forja" },
      {
        name: "description",
        content:
          "Preferências de idioma, tema e notificações da central. Disponíveis após conexão.",
      },
      { property: "og:title", content: "Configurações — Forja" },
      {
        property: "og:description",
        content: "Idioma, tema e notificações — ainda sem funcionamento real.",
      },
    ],
  }),
  component: Configuracoes,
});

const SECOES = [
  {
    id: "idioma",
    titulo: "Idioma",
    descricao: "Define o idioma dos textos da central. Por enquanto tudo é exibido em português.",
    dica: "A troca de idioma só passa a valer quando a central tiver onde guardar suas preferências.",
    valor: "Português (Brasil)",
  },
  {
    id: "tema",
    titulo: "Tema",
    descricao: "Escolha entre visual escuro ou claro. O tema escuro é o único disponível agora.",
    dica: "A alternância de tema depende de uma conexão para lembrar sua escolha.",
    valor: "Escuro",
  },
  {
    id: "notificacoes",
    titulo: "Notificações",
    descricao: "Avisos sobre alterações, conversas e execuções em andamento.",
    dica: "Os avisos dependem de integração com as ferramentas de desenvolvimento.",
    valor: "Desativadas",
  },
] as const;

function Configuracoes() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
        <TituloPagina
          titulo="Configurações"
          descricao="Preferências da central. Nada aqui é salvo ainda — as opções ficam disponíveis após conexão."
        />

        <div className="space-y-3">
          {SECOES.map((s) => (
            <Painel key={s.id} className="rise p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-display text-base font-semibold">{s.titulo}</h2>
                    <Dica texto={s.dica} />
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">{s.descricao}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-line/70 bg-ink/30 px-3 py-1.5 text-xs text-muted-foreground">
                    Valor atual: <span className="text-foreground">{s.valor}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <SeloNaoConectado rotulo="Disponível após conexão" />
                  <BotaoSecundario disabled title="Disponível após conexão">
                    Alterar
                  </BotaoSecundario>
                </div>
              </div>
            </Painel>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Estas opções são apenas demonstração. Nenhuma preferência é gravada e nenhuma ferramenta
          externa é acionada.
        </p>
      </div>
    </AppShell>
  );
}
