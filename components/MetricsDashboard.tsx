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
}: Props) {
  const successRate =
    metrics.totalRequests > 0
      ? (
          (metrics.successfulRequests /
            metrics.totalRequests) *
          100
        ).toFixed(0)
      : "0";

  return (
    <div className="mt-10">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-3xl font-bold">
          📊 Metrics Dashboard
        </h2>
        <p className="mt-2 opacity-90">
          Real-time compiler performance and reliability metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="bg-green-100 border border-green-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-green-800">
            ✅ Success Rate
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {successRate}%
          </p>
        </div>

        <div className="bg-blue-100 border border-blue-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-blue-800">
            ⚡ Latency
          </h3>
          <p className="text-3xl font-bold text-blue-700">
            {latencyMs ?? 0} ms
          </p>
        </div>

        <div className="bg-purple-100 border border-purple-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-purple-800">
            📥 Total Requests
          </h3>
          <p className="text-3xl font-bold text-purple-700">
            {metrics.totalRequests}
          </p>
        </div>

        <div className="bg-green-50 border border-green-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-green-800">
            🎯 Successful Requests
          </h3>
          <p className="text-3xl font-bold text-green-700">
            {metrics.successfulRequests}
          </p>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-red-800">
            ❌ Failed Requests
          </h3>
          <p className="text-3xl font-bold text-red-700">
            {metrics.failedRequests}
          </p>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-5 shadow">
          <h3 className="font-semibold text-yellow-800">
            🔧 Repairs Triggered
          </h3>
          <p className="text-3xl font-bold text-yellow-700">
            {metrics.repairsTriggered}
          </p>
        </div>

      </div>
    </div>
  );
}