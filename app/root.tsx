import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "manifest", href: "/manifest.webmanifest" },
  { rel: "canonical", href: "https://sibermu-studenthub.vercel.app/" },
  {
    rel: "preload",
    as: "image",
    href: "/images/hero-students.jpg",
    type: "image/jpeg",
    fetchPriority: "high",
  },
  { rel: "apple-touch-icon", href: "/icons/icon-192.svg" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // Structured Data Schema.org (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://sibermu-studenthub.vercel.app/#organization",
        "name": "Universitas Siber Muhammadiyah",
        "alternateName": "SiberMu",
        "url": "https://sibermu.ac.id",
        "logo": "https://sibermu-studenthub.vercel.app/favicon.ico",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. KH. Ahmad Dahlan No. 103",
          "addressLocality": "Yogyakarta",
          "postalCode": "55262",
          "addressCountry": "ID"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+62-274-555-7423",
          "contactType": "student service",
          "email": "kemahasiswaan@sibermu.ac.id"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sibermu-studenthub.vercel.app/#website",
        "url": "https://sibermu-studenthub.vercel.app/",
        "name": "Biro Kemahasiswaan & AIK SiberMu",
        "description": "Portal Layanan Kemahasiswaan Digital dan Al-Islam Kemuhammadiyahan",
        "publisher": { "@id": "https://sibermu-studenthub.vercel.app/#organization" },
        "inLanguage": "id-ID"
      }
    ]
  };

  useEffect(() => {
    // Service Worker Registration for PWA Offline Caching
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            if (import.meta.env.DEV) {
              console.log("[PWA] Service Worker terdaftar:", reg.scope);
            }
          })
          .catch((err) => {
            console.warn("[PWA] Service Worker gagal didaftarkan:", err);
          });
      });
    }
  }, []);

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0B132B" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Biro AIK SiberMu" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#070B19] dark:text-slate-100 min-h-screen antialiased selection:bg-teal-500/20 selection:text-teal-400">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
