import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/system/motion-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Omnira — Compute, delivered like a utility",
    template: "%s · Omnira",
  },
  description:
    "Omnira decouples data from compute and routes workloads onto a distributed fleet of idle devices instead of permanently provisioned cloud capacity — the full architecture, economics, and market case.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-(--color-ground) text-(--color-ink)">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
