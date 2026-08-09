import type { Metadata } from "next";
import { LegalNav } from "@/components/system/legal-nav";
import { SiteFooter } from "@/components/cinematic/site-footer";

export const metadata: Metadata = {
  title: "Terms",
  description: "The state of Omnira's terms of service during the product preview.",
};

export default function TermsPage() {
  return (
    <>
      <LegalNav />
      <main className="mx-auto max-w-2xl px-6 py-20 sm:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-(--color-ink-faint) uppercase">Terms</p>
        <h1 className="mt-4 font-(family-name:--font-display) text-title font-medium text-(--color-ink)">
          Terms, honestly.
        </h1>
        <p className="mt-6 text-body text-(--color-ink-muted)">
          This site is a product preview for Omnira, shown ahead of general
          availability. No accounts, payments, or device enrollment happen
          here yet — everything you can click through is a demonstration of
          the product&rsquo;s direction, not a live service you can sign a
          binding agreement to use today.
        </p>
        <p className="mt-4 text-body text-(--color-ink-muted)">
          A complete terms of service — covering contribution agreements for
          device owners and usage terms for workloads deployed on the
          network — will be published alongside the accounts and billing
          system it governs, before anything here becomes a live product.
        </p>
        <p className="mt-10 text-sm text-(--color-ink-faint)">
          © {new Date().getFullYear()} Omnira. All rights reserved.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
