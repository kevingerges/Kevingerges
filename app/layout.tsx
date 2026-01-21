import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Gerges - Software Engineer at Meta",
  description: "Software Engineer at Meta building privacy-compliant infrastructure and AI-powered automation. Former intern at LinkedIn, Kaiser Permanente, and NASA. Expertise in distributed systems, data pipelines, and machine learning.",
  keywords: [
    "Kevin Gerges",
    "Software Engineer",
    "Meta",
    "Facebook",
    "Privacy Engineering",
    "AI",
    "Machine Learning",
    "Data Pipelines",
    "LinkedIn",
    "NASA",
    "USC",
    "Full Stack Developer",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Kevin Gerges", url: "https://kevingerges.com" }],
  creator: "Kevin Gerges",
  publisher: "Kevin Gerges",
  metadataBase: new URL("https://kevingerges.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevingerges.com",
    title: "Kevin Gerges - Software Engineer at Meta",
    description: "Software Engineer at Meta building privacy-compliant infrastructure and AI-powered automation. Former intern at LinkedIn, Kaiser Permanente, and NASA.",
    siteName: "Kevin Gerges",
    images: [
      {
        url: "/img/IMG_6867.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin Gerges - Software Engineer at Meta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Gerges - Software Engineer at Meta",
    description: "Software Engineer at Meta building privacy-compliant infrastructure and AI-powered automation.",
    images: ["/img/IMG_6867.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Gerges",
  url: "https://kevingerges.com",
  image: "https://kevingerges.com/img/IMG_6867.jpg",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Meta",
    url: "https://meta.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Southern California",
    url: "https://usc.edu",
  },
  sameAs: [
    "https://github.com/Kevingerges",
    "https://www.linkedin.com/in/kevingerges/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Privacy Engineering",
    "Machine Learning",
    "Data Pipelines",
    "Distributed Systems",
    "Python",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/img/fav.jpg" type="image/png" />
        <link rel="canonical" href="https://kevingerges.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4M3VW5VNX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag(){dataLayer.push(arguments)}
              window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-H4M3VW5VNX")
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
