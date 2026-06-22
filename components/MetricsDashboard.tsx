type Props = {
  metrics: {
    totalRequests: number;
    successfulRequests: number;
    failedRequests: number;
    repairsTriggered: number;
  };
  latencyMs?: number;
};

export default function MetricsDashboard({
  metrics,
  latencyMs,
}: Props)
 {
    const successRate =
    metrics.totalRequests > 0
      ? (
          (metrics.successfulRequests /
            metrics.totalRequests) *
          100
        ).toFixed(0)
      : "0";

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Metrics Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="border rounded p-4">
  <h3 className="font-semibold">
   Success Rate
  </h3>
  <p className="text-2xl">
    {successRate}%
  </p>
</div>
<div className="border rounded p-4">
  <h3 className="font-semibold">
    Latency
  </h3>
  <p className="text-2xl">
    {latencyMs ?? 0} ms
  </p>
</div>


        <div className="border rounded p-4">
          <h3 className="font-semibold">
            Total Requests
          </h3>
          <p className="text-2xl">
            {metrics.totalRequests}
          </p>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-semibold">
            Successful Requests
          </h3>
          <p className="text-2xl">
            {metrics.successfulRequests}
          </p>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-semibold">
            Failed Requests
          </h3>
          <p className="text-2xl">
            {metrics.failedRequests}
          </p>
        </div>

        <div className="border rounded p-4">
          <h3 className="font-semibold">
            Repairs Triggered
          </h3>
          <p className="text-2xl">
            {metrics.repairsTriggered}
          </p>
        </div>

      </div>
    </div>
  );
}
