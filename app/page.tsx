"use client";

import { useState } from "react";
import RuntimeRenderer from "@/components/RuntimeRenderer";
import MetricsDashboard from "@/components/MetricsDashboard";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        AI App Compiler
      </h1>

      <textarea
        className="w-full h-40 border rounded p-4"
        placeholder="Describe your application..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="mt-4 bg-black text-white px-5 py-2 rounded"
      >
        Generate
      </button>

      {result && (
        <pre className="mt-6 bg-gray-100 p-4 rounded overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

      {result?.schema && (
  <RuntimeRenderer schema={result.schema} />
)}

      {result?.metrics && (
  <MetricsDashboard
  metrics={result.metrics}
  latencyMs={result.latencyMs}
/>
)}
    </main>
  );
}