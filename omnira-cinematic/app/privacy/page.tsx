import type { Metadata } from "next";
import { LegalNav } from "@/components/system/legal-nav";
import { SiteFooter } from "@/components/cinematic/site-footer";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Omnira handles data today, during the pilot, and what changes at general availability.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNav />
      <main className="mx-auto max-w-2xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">Privacy</p>
        <h1 className="mt-4 font-(family-name:--font-display) text-title font-medium text-(--color-ink)">
          Privacy, plainly.
        </h1>
        <p className="mt-6 text-body text-(--color-ink-muted)">
          This is a product preview. There is no live account system, and no
          personal data is collected by this site beyond ordinary,
          anonymous page-load metrics your browser sends to any website.
          Everything on the Live Pulse module — devices online, requests
          served, uptime — is illustrative pilot data, clearly marked as
          such where it appears.
        </p>
        <h2 className="mt-10 font-(family-name:--font-display) text-lg font-medium text-(--color-ink)">
          When Omnira launches for real
        </h2>
        <p className="mt-4 text-body text-(--color-ink-muted)">
          Customer master data stays inside the customer&rsquo;s own
          perimeter — on-premises or in storage they control. Devices that
          contribute compute only ever receive small, transient task
          fragments, processed in memory and wiped after execution. A full,
          binding privacy policy will be published before general
          availability, alongside the account and billing systems it
          governs.
        </p>
        <p className="mt-10 text-sm text-(--color-ink-faint)">
          Questions in the meantime? There&rsquo;s no support inbox wired up
          yet — this page will carry one before launch.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
