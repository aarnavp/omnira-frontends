"use client";

import { motion } from "framer-motion";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useCloudTaxModel } from "@/hooks/use-cloud-tax-model";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { formatCompactNumber, formatUsd } from "@/lib/utils/format";

/** The "Cloud Tax" comparison for §06 Economics: continuously provisioned
 * cloud capacity cost vs. Omnira's elastic model — an illustrative target
 * comparison, not a measured historical result (the section copy is
 * responsible for keeping that distinction explicit). */
export function CloudTaxChart() {
  const { data, error, isLoading, refetch } = useCloudTaxModel();

  if (isLoading) {
    return (
      <div className="flex h-[340px] flex-col gap-3 rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-5">
        <Skeleton className="h-3 w-56" />
        <Skeleton className="flex-1 w-full" />
      </div>
    );
  }

  if (error) {
    return <ErrorState title="This chart didn't load" message={error.message} onRetry={refetch} />;
  }

  if (!data || data.points.length === 0) {
    return (
      <EmptyState
        title="No cost model yet"
        message="Once a cost baseline exists, the always-on-vs-elastic comparison renders here."
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-5"
    >
      <p className="mb-1 font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
        Target operating model — always-on cloud vs. Omnira elastic, indexed over 12 months
      </p>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-hairline)" vertical={false} />
            <XAxis
              dataKey="month"
              tickFormatter={(v: number) => `M${v}`}
              tick={{ fontSize: 11, fill: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={{ stroke: "var(--color-hairline)" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => `$${formatCompactNumber(v)}`}
              width={48}
            />
            <Tooltip
              formatter={(value, name) => [
                formatUsd(Number(value)),
                name === "alwaysOnCloudUsd" ? "Always-on cloud" : "Omnira elastic",
              ]}
              labelFormatter={(label) => `Month ${label}`}
              contentStyle={{
                background: "var(--color-panel-inset)",
                border: "1px solid var(--color-hairline)",
                borderRadius: "var(--radius-md)",
                fontSize: 12,
              }}
              itemStyle={{ color: "var(--color-ink)" }}
            />
            <Legend
              formatter={(value) => (
                <span className="font-mono text-xs text-(--color-ink-muted)">
                  {value === "alwaysOnCloudUsd" ? "Always-on cloud" : "Omnira elastic"}
                </span>
              )}
            />
            <Line type="monotone" dataKey="alwaysOnCloudUsd" stroke="var(--color-baseline)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="omniraElasticUsd" stroke="var(--color-brand)" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <table className="sr-only">
        <caption>Monthly cost, always-on cloud versus Omnira elastic, target operating model in USD.</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Always-on cloud</th>
            <th scope="col">Omnira elastic</th>
          </tr>
        </thead>
        <tbody>
          {data.points.map((point) => (
            <tr key={point.month}>
              <td>{point.month}</td>
              <td>{formatUsd(point.alwaysOnCloudUsd)}</td>
              <td>{formatUsd(point.omniraElasticUsd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
