"use client";

import { useState } from "react";
import RuntimeRenderer from "@/components/RuntimeRenderer";
import MetricsDashboard from "@/components/MetricsDashboard";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showJson, setShowJson] = useState(false);

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
      setShowJson(false);
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
          className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

      </div>

      {/* Runtime Preview */}
      {result?.schema && (
        <RuntimeRenderer
          schema={result.schema}
        />
      )}

      {/* Metrics Dashboard */}
      {result?.metrics && (
        <MetricsDashboard
          metrics={result.metrics}
          latencyMs={result.latencyMs}
        />
      )}

      {/* Clarification Questions */}
      {result?.needsClarification && (
        <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 mt-8">

          <h2 className="text-xl font-bold text-yellow-700 mb-4">
            Clarification Required
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            {result.questions?.map(
              (
                question: string,
                index: number
              ) => (
                <li key={index}>
                  {question}
                </li>
              )
            )}
          </ul>

        </div>
      )}

      {/* Technical Details */}
      {result && (
        <div className="mt-8">

          <button
            onClick={() =>
              setShowJson(!showJson)
            }
            className="bg-gray-800 text-white px-5 py-3 rounded-xl shadow hover:bg-gray-900"
          >
            {showJson
              ? "Hide Technical Details"
              : "Show Technical Details"}
          </button>

          {showJson && (
            <div className="bg-gray-900 text-green-400 rounded-2xl p-6 shadow-lg mt-4 overflow-auto">

              <h2 className="text-white text-xl font-bold mb-4">
                Generated Configuration
              </h2>

              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(
                  result,
                  null,
                  2
                )}
              </pre>

            </div>
          )}

        </div>
      )}

    </main>
  );
}