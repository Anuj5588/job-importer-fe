export default function ImportTable({ logs }) {

    console.log("logs", logs)
  return (
    <table border="2" cellPadding="5">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Total</th>
          <th>New</th>
          <th>Updated</th>
          <th>Failed</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log._id}>
            <td>{log.fileName}</td>
            <td>{log.totalFetched}</td>
            <td>{log.newJobs}</td>
            <td>{log.updatedJobs}</td>
            <td>{log.failedJobs.length}</td>
            <td>{new Date(log.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
