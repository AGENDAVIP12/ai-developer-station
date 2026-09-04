import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  FolderKanban,
  MessageSquarePlus,
  History,
  Plug,
  GitPullRequestArrow,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ITENS = [
  { to: "/", rotulo: "Início", icone: Home },
  { to: "/projetos", rotulo: "Projetos", icone: FolderKanban },
  { to: "/conversa", rotulo: "Nova conversa", icone: MessageSquarePlus },
  { to: "/historico", rotulo: "Histórico", icone: History },
  { to: "/integracoes", rotulo: "Integrações", icone: Plug },
  { to: "/alteracoes", rotulo: "Alterações", icone: GitPullRequestArrow },
  { to: "/configuracoes", rotulo: "Configurações", icone: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [aberto, setAberto] = useState(false);
  const caminho = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ink text-foreground">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="k1 absolute -left-32 -top-24 size-[26rem] rounded-full opacity-55 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--brand), transparent 72%)" }}
        />
        <div
          className="k2 absolute -right-32 top-40 size-[26rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--accent), transparent 72%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in oklab, var(--brand) 10%, transparent), transparent 45%)",
          }}
        />
      </div>

      <div className="relative flex min-h-screen">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/10 bg-ink/80 backdrop-blur-xl transition-transform lg:translate-x-0",
            aberto ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-2 px-4 pb-4 pt-5">
            <div className="flex items-center gap-2.5">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-lg text-accent shadow-lg shadow-brand/40">
                ◈
              </div>
              <div className="leading-tight">
                <p className="font-display text-[15px] font-semibold tracking-tight">Forja</p>
                <p className="text-[11px] text-muted-foreground">Central de desenvolvimento</p>
              </div>
            </div>
            <button
              onClick={() => setAberto(false)}
              aria-label="Fechar menu"
              className="grid size-8 place-items-center rounded-lg border border-line/70 text-muted-foreground lg:hidden"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav className="flex-1 space-y-1 px-3">
            {ITENS.map((item) => {
              const ativo = caminho === item.to;
              const Icone = item.icone;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setAberto(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    ativo
                      ? "border border-white/10 bg-white/10 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  <Icone className={cn("size-4", ativo && "text-accent")} />
                  {item.rotulo}
                </Link>
              );
            })}
          </nav>

          <div className="m-3 rounded-xl border border-line/70 bg-ink/40 px-3 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Modo protótipo
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Nenhuma ferramenta externa está conectada. Tudo funciona apenas no seu navegador.
            </p>
          </div>
        </aside>

        {aberto ? (
          <button
            aria-label="Fechar menu"
            onClick={() => setAberto(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <button
            onClick={() => setAberto(true)}
            className="glass m-4 inline-flex w-fit items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground lg:hidden"
          >
            <Menu className="size-4" /> Menu
          </button>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
