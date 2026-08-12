"use client";

import { motion } from "framer-motion";
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDemandModel } from "@/hooks/use-demand-model";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { formatPercent } from "@/lib/utils/format";

/** Demand vs. provisioned-capacity chart for §01 The problem — makes the
 * waste of always-on provisioning visible in one image. Illustrative /
 * conceptual, not a measurement of a real deployment. */
export function DemandChart() {
  const { data, error, isLoading, refetch } = useDemandModel();

  if (isLoading) {
    return (
      <div className="flex h-[320px] flex-col gap-3 rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel) p-5">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
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
        title="No demand data yet"
        message="Once a workload history exists, its demand curve renders here."
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
      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-wider text-(--color-ink-faint)">
          Illustrative — occasional peak demand vs. always-on provisioning
        </p>
        <p className="font-mono text-xs text-(--color-warning-text)">
          ~{formatPercent(data.wastedCapacityPct, 0)} of provisioned capacity sits unused
        </p>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data.points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-hairline)" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={{ stroke: "var(--color-hairline)" }}
              interval={6}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--color-ink-faint)", fontFamily: "var(--font-mono)" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => `${v}%`}
              width={40}
            />
            <Tooltip
              formatter={(value, name) => [
                `${Number(value).toFixed(0)}%`,
                name === "demand" ? "Actual demand" : "Provisioned capacity",
              ]}
              labelStyle={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ink)" }}
              contentStyle={{
                background: "var(--color-panel-inset)",
                border: "1px solid var(--color-hairline)",
                borderRadius: "var(--radius-md)",
                fontSize: 12,
              }}
              itemStyle={{ color: "var(--color-ink)" }}
            />
            <Line
              type="stepAfter"
              dataKey="provisioned"
              stroke="var(--color-baseline)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
              isAnimationActive
            />
            <Area
              type="monotone"
              dataKey="demand"
              stroke="var(--color-brand)"
              strokeWidth={2}
              fill="var(--color-brand-surface)"
              fillOpacity={1}
              isAnimationActive
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex items-center gap-4 text-xs text-(--color-ink-muted)">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-(--color-brand)" aria-hidden /> Actual demand
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 border-t border-dashed border-(--color-baseline)" aria-hidden /> Provisioned capacity
        </span>
      </div>

      <table className="sr-only">
        <caption>Demand versus provisioned capacity by day, as a percentage of total capacity.</caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Actual demand</th>
            <th scope="col">Provisioned capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.points.map((point) => (
            <tr key={point.label}>
              <td>{point.label}</td>
              <td>{point.demand}%</td>
              <td>{point.provisioned}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
