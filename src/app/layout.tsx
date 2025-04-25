import { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Cairo } from "next/font/google";
import "../styles/index.css";
import AOSWrapper from "@/components/AOS/AOSWrapper";
import { Providers } from "./providers";

// Cairo font configuration
// ✅ تحميل خط Cairo وتحديد الـ subsets والدوال
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"], // اختياري: أوزان متعددة
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFCFC" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  // Base URL for all relative URLs in metadata
  metadataBase: new URL("https://roqe-digital.vercel.app"),

  // Title configurations
  title: {
    // Template for title suffix (used in child pages)
    template: "%s | رقي",
    // Default title for homepage
    default: "رقي | وكالة رقمية متكاملة لبناء هويتك الرقمية",
  },

  // Primary site description (SEO important)
  description:
    "وكالة رقمية متخصصة في تصميم وتطوير المواقع الإلكترونية، تطبيقات الجوال، الهويات البصرية، والتسويق الرقمي. نقدم حلولاً رقمية متكاملة تناسب احتياجات عملك.",

  // Technical info
  generator: "Next.js", // Indicates the framework used
  applicationName: "رقي",
  referrer: "origin-when-cross-origin", // Referrer policy

  // SEO keywords
  keywords: [
    "وكالة رقمية",
    "تصميم مواقع",
    "تطوير مواقع",
    "تسويق رقمي",
    "هوية بصرية",
    "برمجة",
    "تصميم تطبيقات",
    "شركة برمجة",
    "تسويق إلكتروني",
    "تصميم ويب",
    "تطوير تطبيقات",
  ],

  // Ownership information
  authors: [{ name: "رقي", url: "https://roqe-digital.vercel.app" }],
  creator: "رقي", // Content creator
  publisher: "رقي", // Content publisher

  // Automatic detection settings
  formatDetection: {
    email: true, // Detect email addresses
    address: false, // Don't detect addresses
    telephone: true, // Detect phone numbers
  },

  // URL alternatives
  alternates: {
    canonical: "/", // Primary URL
    languages: {
      "ar-SA": "/", // Arabic (Saudi Arabia) version
      // 'en-US': '/en', // Uncomment if English version exists
    },
  },


  // Open Graph (Facebook/LinkedIn) metadata
  openGraph: {
    title: "رقي | وكالة رقمية متكاملة لبناء هويتك الرقمية",
    description: "نقدم خدمات تصميم وتطوير المواقع الإلكترونية، تطبيقات الجوال، الهويات البصرية، والتسويق الرقمي",
    url: "https://roqe-digital.vercel.app",
    siteName: "رقي",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "رقي - وكالة رقمية متكاملة",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  // Twitter Card metadata
  // twitter: {
  //   card: "summary_large_image", // Displays large image summary card
  //   title: "رقي | وكالة رقمية متكاملة لبناء هويتك الرقمية",
  //   description:
  //     "نقدم خدمات تصميم وتطوير المواقع الإلكترونية، تطبيقات الجوال، الهويات البصرية، والتسويق الرقمي",
  //   creator: "@roqe_digital", // Twitter handle
  //   images: ["/twitter-image.jpg"], // Recommended size: 800x418
  // },

  // Search engine indexing instructions
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
    nocache: false, // Allow caching
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1, // Unlimited video preview
      "max-image-preview": "large", // Full image preview
      "max-snippet": -1, // Unlimited text snippet
    },
  },

  icons: {
    icon: "/favicon.ico", // Only using favicon which is automatically provided by Next.js
  },

  // Favicons and app icons
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" }, // Standard favicon
  //     { url: "/icon.png", type: "image/png", sizes: "32x32" }, // Standard icon
  //   ],
  //   shortcut: "/shortcut-icon.png", // Windows shortcut icon
  //   apple: [
  //     { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // Apple touch icon
  //   ],
  //   other: [
  //     {
  //       rel: "apple-touch-icon",
  //       url: "/apple-touch-icon.png", // Alternative apple icon
  //     },
  //   ],
  // },

  // PWA manifest
  manifest: "/site.webmanifest",

  // Search engine verification
  verification: {
    google: "your-google-verification-code", // Google Search Console
    yandex: "your-yandex-verification-code", // Yandex Webmaster
  },

  // Site category (helps with classification)
  category: "technology",

  // Apple specific PWA settings
  appleWebApp: {
    capable: true, // Yes, this works as an Apple web app
    title: "رقي",
    statusBarStyle: "black-translucent", // iOS status bar style
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="ar"
      dir="rtl"
    >
       <body dir="rtl" className={`bg-[#FCFCFC] dark:bg-black ${cairo.className}`}>
        <AOSWrapper>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </Providers>
        </AOSWrapper>
      </body>
    </html>
  );
}
