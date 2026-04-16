import "./globals.css";

export const metadata = {
  title: "Projectiva | M.Tech, MS Academic Assignments & Projects",
  description:
    "Get M.Tech, MS and Postgraduate academic assignments, projects, and documentation with expert support. AI/ML, Data Science, Web Development solutions available.",
  
  keywords: [
    "MTech projects",
    "MS assignments",
    "academic assignments help",
    "final year projects",
    "AI ML projects",
    "data science projects",
    "assignment help India",
  ],

  authors: [{ name: "Projectiva" }],
  creator: "Projectiva",

  metadataBase: new URL("https://projectiva.in"), // 🔥 update to your real domain

  openGraph: {
    title: "Projectiva | Academic Assignments & Projects",
    description:
      "Professional academic support for M.Tech, MS & postgraduate students worldwide.",
    url: "https://projectiva.in",
    siteName: "Projectiva",
    images: [
      {
        url: "/preview.jpg", // keep inside public/
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projectiva | Academic Assignments & Projects",
    description:
      "Get expert help for M.Tech, MS and postgraduate assignments.",
    images: ["/preview.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}