import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Paperclip, Send, Check, Loader2, Circle, Plug } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Painel, Dica, BotaoPrimario, BotaoSecundario } from "@/components/interface";
import { INTEGRACOES, PROJETOS, montarResposta, type Etapa, type RespostaIA } from "@/lib/dados";

export const Route = createFileRoute("/conversa")({
  head: () => ({
    meta: [
      { title: "Nova conversa — Forja" },
      {
        name: "description",
        content:
          "Descreva em português o que deseja criar ou alterar e veja o plano em etapas claras.",
      },
      { property: "og:title", content: "Nova conversa — Forja" },
      {
        property: "og:description",
        content: "Transforme pedidos escritos em etapas compreensíveis de desenvolvimento.",
      },
    ],
  }),
  component: Conversa,
});

type Mensagem =
  | { id: string; autor: "usuario"; texto: string }
  | { id: string; autor: "ia"; resposta: RespostaIA };

function IconeEtapa({ status }: { status: Etapa["status"] }) {
  if (status === "concluido")
    return (
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ok/15 text-ok">
        <Check className="size-3.5" />
      </span>
    );
  if (status === "andamento")
    return (
      <span className="softpulse grid size-6 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
        <Loader2 className="size-3.5" />
      </span>
    );
  if (status === "nao_conectado")
    return (
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-warn/15 text-warn">
        <Plug className="size-3.5" />
      </span>
    );
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
      <Circle className="size-2.5" />
    </span>
  );
}

function rotuloStatus(status: Etapa["status"]) {
  if (status === "concluido") return { texto: "Concluído", cor: "text-ok" };
  if (status === "andamento") return { texto: "Em andamento", cor: "text-accent" };
  if (status === "nao_conectado") return { texto: "Não conectado", cor: "text-warn" };
  return { texto: "Aguardando", cor: "text-muted-foreground" };
}

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        {titulo}
      </p>
      <div className="mt-1 text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function Conversa() {
  const projeto = PROJETOS[0];
  const [texto, setTexto] = useState("");
  const [pensando, setPensando] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);

  function enviar() {
    const pedido = texto.trim();
    if (!pedido || pensando) return;
    const id = String(Date.now());
    setMensagens((m) => [...m, { id, autor: "usuario", texto: pedido }]);
    setTexto("");
    setPensando(true);
    window.setTimeout(() => {
      setMensagens((m) => [...m, { id: id + "-ia", autor: "ia", resposta: montarResposta(pedido) }]);
      setPensando(false);
    }, 900);
  }

  return (
    <AppShell>
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-4 pt-4 lg:px-8 lg:pt-8">
        <Painel className="rise p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="softpulse size-2 rounded-full bg-ok" />
              <span className="text-xs font-medium text-ok">Ativo</span>
            </div>
            <span className="rounded-full border border-line/70 px-2.5 py-1 text-[11px] text-muted-foreground">
              Protótipo
            </span>
          </div>
          <h1 className="mt-2 font-display text-xl font-semibold tracking-tight">
            {projeto?.nome ?? "Projeto"}
          </h1>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {INTEGRACOES.map((i) => (
              <span
                key={i.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-ink/30 px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                {i.nome} · Não conectado
              </span>
            ))}
          </div>
        </Painel>

        <div className="flex-1 space-y-4 py-5">
          {mensagens.length === 0 && !pensando ? (
            <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">
              <p className="font-display text-base font-semibold text-foreground">
                Escreva do seu jeito
              </p>
              <p className="mt-1">
                Exemplos: “Crie uma tela de cadastro.”, “Arrume o botão da tela inicial.”, “Veja se
                essa função está funcionando.”
              </p>
            </div>
          ) : null}

          {mensagens.map((m) =>
            m.autor === "usuario" ? (
              <div key={m.id} className="rise flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-brand px-3.5 py-2.5 text-sm text-primary-foreground shadow-lg shadow-brand/25">
                  {m.texto}
                </div>
              </div>
            ) : (
              <div key={m.id} className="rise flex items-start gap-2.5">
                <div className="glass mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg text-accent">
                  ◈
                </div>
                <div className="glass min-w-0 flex-1 rounded-2xl p-4">
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {m.resposta.entendimento}
                  </p>

                  <Bloco titulo="O que será alterado">{m.resposta.oQueSeraAlterado}</Bloco>

                  <Bloco titulo="Arquivos envolvidos">
                    <span className="flex flex-wrap gap-1.5">
                      {m.resposta.arquivos.map((a) => (
                        <span
                          key={a}
                          className="rounded-md border border-line/70 bg-ink/40 px-2 py-1 text-xs text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                      <Dica texto="“Arquivos” são as partes do sistema que serão tocadas por essa mudança." />
                    </span>
                  </Bloco>

                  <div className="mt-3 space-y-2">
                    {m.resposta.etapas.map((e) => {
                      const r = rotuloStatus(e.status);
                      return (
                        <div
                          key={e.nome}
                          className="flex items-center gap-2.5 rounded-xl border border-line/60 bg-ink/30 px-3 py-2"
                        >
                          <IconeEtapa status={e.status} />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-wide">
                              {e.nome}
                            </p>
                            <p className="text-[11px] text-muted-foreground">{e.detalhe}</p>
                          </div>
                          <span className={`ml-auto text-[11px] font-medium ${r.cor}`}>
                            {r.texto}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <Bloco titulo="Resultado">{m.resposta.resultado}</Bloco>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line/60 bg-ink/30 px-3 py-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide">Próxima ação</p>
                      <p className="text-[11px] text-muted-foreground">{m.resposta.proximaAcao}</p>
                    </div>
                    <BotaoSecundario disabled className="px-3 py-1.5 text-[11px]">
                      Disponível após conexão
                    </BotaoSecundario>
                  </div>
                </div>
              </div>
            ),
          )}

          {pensando ? (
            <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <div className="glass grid size-8 place-items-center rounded-lg text-accent">◈</div>
              <span className="softpulse">Organizando seu pedido em etapas...</span>
            </div>
          ) : null}
        </div>

        <div className="sticky bottom-0 z-10 bg-gradient-to-t from-ink via-ink/90 to-transparent pb-5 pt-2">
          <div className="glass rounded-2xl p-2 shadow-xl shadow-black/30">
            <textarea
              rows={2}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Descreva o que você quer criar ou alterar..."
              className="min-h-14 w-full resize-none rounded-xl bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="mt-1 flex items-center gap-2 px-1">
              <span className="group relative">
                <button
                  disabled
                  aria-label="Anexar arquivo"
                  className="grid size-9 place-items-center rounded-lg border border-line/70 text-muted-foreground opacity-60"
                >
                  <Paperclip className="size-4" />
                </button>
                <span className="pointer-events-none absolute bottom-full left-0 mb-2 w-52 rounded-lg border border-line bg-surface px-3 py-2 text-[11px] text-muted-foreground opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                  Anexar imagens, documentos e arquivos: disponível após conexão.
                </span>
              </span>
              <BotaoPrimario onClick={enviar} disabled={!texto.trim() || pensando} className="ml-auto">
                Enviar
                <Send className="size-3.5" />
              </BotaoPrimario>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
