"use client";

import { useState } from "react";
import RuntimeRenderer from "@/components/RuntimeRenderer";
import MetricsDashboard from "@/components/MetricsDashboard";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-5xl font-bold">
          🚀 AI App Compiler
        </h1>

        <p className="mt-3 text-lg opacity-90">
          Natural Language → Intent → Architecture →
          Schema → Validation → Runtime
        </p>

        <p className="mt-2 opacity-80">
          Build application blueprints from plain English.
        </p>
      </div>

      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

        <h2 className="text-2xl font-semibold mb-4">
          Describe Your Application
        </h2>

        <textarea
          className="w-full h-40 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Example: Build a CRM with login, contacts, dashboard and admin analytics"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* JSON Output */}
      {result && (
        <div className="bg-gray-900 text-green-400 rounded-2xl p-6 shadow-lg mb-8 overflow-auto">
          <h2 className="text-white text-xl font-bold mb-4">
            Generated Configuration
          </h2>

          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {/* Runtime Preview */}
      {result?.schema && (
        <RuntimeRenderer schema={result.schema} />
      )}

      {/* Metrics */}
      {result?.metrics && (
        <MetricsDashboard
          metrics={result.metrics}
          latencyMs={result.latencyMs}
        />
      )}

    </main>
  );
}