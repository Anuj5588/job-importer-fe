export default function ImportTable({ logs }) {
  return (
    <div className="overflow-x-auto mt-6 min-w-[500px]">
      <table className="min-w-full border border-purple-500/40 rounded-lg overflow-hidden">
        {/* TABLE HEADER */}
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="px-4 py-3 text-left">File Name</th>
            <th className="px-4 py-3 text-center">Total</th>
            <th className="px-4 py-3 text-center">New</th>
            <th className="px-4 py-3 text-center">Updated</th>
            <th className="px-4 py-3 text-center">Failed</th>
            <th className="px-4 py-3 ">Timestamp</th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="bg-black text-white">
          {logs?.length > 0 ? (
            logs.map((log, index) => (
              <tr
                key={log._id}
                className={`border-t border-purple-500/20 hover:bg-purple-500/10 transition ${
                  index % 2 === 0 ? "bg-black" : "bg-gray-900"
                }`}
              >
                <td className="px-4 py-3 font-mono">{log.fileName}</td>
                <td className="px-4 py-3 text-center">{log.totalFetched}</td>
                <td className="px-4 py-3 text-center text-green-400">
                  {log.newJobs}
                </td>
                <td className="px-4 py-3 text-center text-blue-400">
                  {log.updatedJobs}
                </td>
                <td className="px-4 py-3 text-center text-red-400">
                  {log.failedJobs.length}
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {new Date(log.createdAt).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="px-4 py-6 text-center text-gray-400"
              >
                No logs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
