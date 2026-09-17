import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://muskaanwedsmanjinder.vercel.app/"),

  openGraph: {
    title: "Muskaan Saini Weds Manjinder Singh",
    description: "Come celebrate their sacred union!",
    url: "https://muskaanwedsmanjinder.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Muskaan Saini Weds Manjinder Singh",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Muskaan Saini Weds Manjinder Singh",
    description: "Come celebrate their sacred union!",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://muskaanwedsmanjinder.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
