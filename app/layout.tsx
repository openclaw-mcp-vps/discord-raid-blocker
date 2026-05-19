import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Raid Blocker – Auto-block Discord server raids before damage",
  description: "Detects coordinated spam attacks on Discord servers and auto-implements protective measures like temporary lockdowns and mass user management."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8f656397-5901-41d9-8a90-197abec17982"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
