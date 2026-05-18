import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CK3AI Çeviri İlerlemesi",
  description: "CK3AI mod çeviri projeleri için halka açık ilerleme panosu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <div className="shell">
          <header className="nav">
            <div className="nav-inner">
              <Link className="brand" href="/">
                <span className="sigil" aria-hidden="true" />
                <span>CK3AI Public Progress</span>
              </Link>
              <nav className="nav-links" aria-label="Ana menü">
                <Link href="/">Modlar</Link>
                <Link href="/about">Hakkında</Link>
              </nav>
            </div>
          </header>
          <main className="container">{children}</main>
        </div>
      </body>
    </html>
  );
}
