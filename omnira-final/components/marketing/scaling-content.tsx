"use client";

import { useScalingModel } from "@/hooks/use-scaling-model";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState, EmptyState } from "@/components/ui/state-views";
import { Table, Thead, Th, Tbody, Td } from "@/components/ui/table";
import { ScalingCounter } from "./scaling-counter";

export function ScalingContent() {
  const { data, error, isLoading, refetch } = useScalingModel();

  if (isLoading) {
    return (
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Skeleton className="h-[220px] w-full rounded-(--radius-lg)" />
        <Skeleton className="h-[220px] w-full rounded-(--radius-lg)" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10">
        <ErrorState title="This model didn't load" message={error.message} onRetry={refetch} />
      </div>
    );
  }

  if (!data || data.comparison.length === 0) {
    return (
      <div className="mt-10">
        <EmptyState title="No scaling model available" message="The old-way-vs-Omnira comparison will appear here once configured." />
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <ScalingCounter series={data.series} />

      <div className="rounded-(--radius-lg) border border-(--color-hairline) bg-(--color-panel)">
        <Table>
          <Thead>
            <Th>Dimension</Th>
            <Th>The old way</Th>
            <Th>The Omnira way</Th>
          </Thead>
          <Tbody>
            {data.comparison.map((row) => (
              <tr key={row.dimension}>
                <Td className="font-medium text-(--color-ink)">{row.dimension}</Td>
                <Td className="text-(--color-baseline-text)">{row.oldWay}</Td>
                <Td className="text-(--color-accent)">{row.omniraWay}</Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
