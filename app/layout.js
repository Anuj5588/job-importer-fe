import "./globals.css";

export const metadata = {
  title: "Job Importer Admin",
  description: "Admin panel for job import system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
