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
    <main>
      <h1>Job Importer Admin</h1>

      <button onClick={handleImport}>
        Run Job Import
      </button>

      <br /><br />
      <a href="/import-history">View Import History →</a>
    </main>
  );
}
