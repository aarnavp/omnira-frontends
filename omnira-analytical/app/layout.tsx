import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Omnira — The infrastructure thesis",
    template: "%s · Omnira",
  },
  description:
    "Omnira decouples data from compute and routes workloads onto a distributed fleet of idle devices instead of permanently provisioned cloud capacity — ~98% distributed edge compute, ≤2% public cloud, 0% master data at the edge.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-(--color-surface) text-(--color-text)">
        {children}
      </body>
    </html>
  );
}
