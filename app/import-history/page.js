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
    <div className="text-center px-8 ">
      <h1 className="text-3xl text-gray-600 font-bold mt-8">Import History</h1>
      <ImportTable logs={logs} />
    </div>
  );
}
