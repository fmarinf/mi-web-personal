import { Geist, Geist_Mono } from "next/font/google";
import { GatoProvider } from "./components/GatoContext";  // Importar el contexto
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Data Engineer",
  description: "Data Engineer Portfolio showcasing projects, skills, and experience.",
  keywords: "Data Engineer, Portfolio, Python, AWS, Chile, Big Data",
  author: "Fernando Marín Figueroa",
  openGraph: {
    title: "Portfolio | Data Engineer",
    description: "Showcasing projects and experience in data engineering.",
    url: "https://fernandomarin.cl",
    site_name: "Tu Portfolio",
    images: [
      {
        url: "https://fernandomarin.cl",
        width: 800,
        height: 600,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://fernandomarin.cl" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Portfolio | Data Engineer" />
      <meta property="og:description" content="Showcasing projects and experience in data engineering." />
      <meta property="og:image" content="https://fernandomarin.cl/og-image.jpg" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GatoProvider>
          {children}
        </GatoProvider>
      </body>
    </html>
  );
}
