import "./globals.css";

export const metadata = {
  title: "Gayathri R | Python Developer & Full-Stack Developer",
  description:
    "Portfolio of Gayathri R, an MCA graduate skilled in Python development, SQL, React.js, machine learning, and Full-Stack web fundamentals.",
  keywords: [
    "Gayathri R",
    "Python Developer",
    "Full Stack Developer",
    "React Developer",
    "MCA Graduate",
    "Python",
    "JavaScript",
    "React",
    "SQL",
    "Machine Learning",
  ],
  authors: [
    {
      name: "Gayathri R",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}