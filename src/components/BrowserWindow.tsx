import { ChevronLeft, ChevronRight, MoreHorizontal, Search } from 'lucide-react';
import type { PropsWithChildren } from 'react';

type BrowserWindowProps = PropsWithChildren<{
  title: string;
}>;

export function BrowserWindow({ title, children }: BrowserWindowProps) {
  return (
    <main className="browser-window" aria-label={title}>
      <header className="browser-toolbar">
        <div className="traffic-lights" aria-hidden="true">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="nav-icons" aria-hidden="true">
          <ChevronLeft size={24} strokeWidth={1.8} />
          <ChevronRight size={24} strokeWidth={1.8} />
        </div>
        <h1>{title}</h1>
        <div className="toolbar-actions" aria-hidden="true">
          <MoreHorizontal size={25} strokeWidth={1.8} />
          <Search size={22} strokeWidth={1.8} />
        </div>
      </header>
      <section className="browser-content">{children}</section>
    </main>
  );
}
