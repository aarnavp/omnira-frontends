import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/system/motion-provider";
import "./globals.css";

// All three are variable fonts — no `weight` needed, the full axis loads
// and components pick a weight with ordinary Tailwind classes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

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
    "The world's idle devices, becoming a decentralized global computing network. Watch the film. Contribute your hardware, or deploy on the network instead of a data center.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-(--color-ground) text-(--color-ink)">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
