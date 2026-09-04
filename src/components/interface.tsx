import type { ReactNode } from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dica({ texto, children }: { texto: string; children?: ReactNode }) {
  return (
    <span className="group relative inline-flex items-center gap-1 align-middle">
      {children}
      <HelpCircle className="size-3.5 text-muted-foreground" aria-hidden />
      <span className="sr-only">{texto}</span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-lg border border-line bg-surface px-3 py-2 text-[11px] leading-relaxed text-muted-foreground opacity-0 shadow-xl transition-opacity group-hover:opacity-100"
      >
        {texto}
      </span>
    </span>
  );
}

export function Painel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <section
      className={cn(
        "glass overflow-hidden rounded-2xl shadow-xl shadow-black/30",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function TituloPagina({
  titulo,
  descricao,
  acao,
}: {
  titulo: string;
  descricao: string;
  acao?: ReactNode;
}) {
  return (
    <div className="rise mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight">{titulo}</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{descricao}</p>
      </div>
      {acao}
    </div>
  );
}

export function SeloNaoConectado({ rotulo }: { rotulo: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-ink/30 px-2.5 py-1 text-[11px] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-muted-foreground/60" />
      {rotulo}
      <span className="text-muted-foreground/70">· Não conectado</span>
    </span>
  );
}

export function EstadoVazio({
  titulo,
  descricao,
  acao,
}: {
  titulo: string;
  descricao: string;
  acao?: ReactNode;
}) {
  return (
    <div className="glass flex flex-col items-center rounded-2xl px-6 py-14 text-center">
      <div className="grid size-11 place-items-center rounded-xl border border-line/70 bg-ink/40 text-accent">
        ◈
      </div>
      <p className="mt-4 font-display text-base font-semibold">{titulo}</p>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{descricao}</p>
      {acao ? <div className="mt-5">{acao}</div> : null}
    </div>
  );
}

export function BotaoPrimario({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/30 transition-transform hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function BotaoSecundario({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-line/70 bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
