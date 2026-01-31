"use client";

import { runImport } from "./services/api.js";

export default function Dashboard() {
  const handleImport = async () => {
    try {
      const res = await runImport();
      alert(res.data.message);
    } catch (err) {
      alert("Import failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-black text-white px-4">

      <h1 className="text-4xl font-bold tracking-wide">
        Job Importer <span className="text-purple-400">Admin</span>
      </h1>

      <div className="flex flex-col items-center gap-6 border border-purple-500/40 rounded-2xl p-10 bg-gray-900 shadow-[0_0_30px_rgba(168,85,247,0.35)]">

        <button
          onClick={handleImport}
          className="bg-purple-500 hover:bg-purple-600 transition-all duration-300
                     text-white font-semibold px-8 py-3 rounded-full
                     shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105"
        >
           Run Job Import
        </button>

        {/* LINK */}
        <a
          href="/import-history"
          className="text-purple-400 hover:text-purple-300 transition font-medium"
        >
          View Import History →
        </a>
      </div>
    </div>
  );
}
