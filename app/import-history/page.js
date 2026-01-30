"use client";

import { useEffect, useState } from "react";
import { fetchImportHistory } from "../services/api";
import ImportTable from "@/components/ImportTable";

export default function ImportHistory() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const res = await fetchImportHistory();
    setLogs(res.data);
  };

  return (
    <main>
      <h1>Import History</h1>
      <ImportTable logs={logs} />
    </main>
  );
}
