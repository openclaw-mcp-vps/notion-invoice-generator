import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Invoice Generator – Generate Invoices from Notion",
  description: "Connect your Notion database and automatically generate professional PDF invoices with Stripe payment links. Built for freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="67983346-e7fd-41ca-95e1-7809830a257d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
