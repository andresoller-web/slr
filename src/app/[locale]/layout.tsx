import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const metadataByLocale: Record<
  string,
  {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      locale: string;
    };
  }
> = {
  "pt-br": {
    title: "SLR - Soluções em obras turnkey e design & build",
    description: "Soluções em obras turnkey e design & build para seu negócio",
    openGraph: {
      title: "SLR - Soluções em obras turnkey e design & build",
      description:
        "Soluções em obras turnkey e design & build para seu negócio",
      url: "https://slrengenharia.com.br/pt-br",
      siteName: "SLR Engenharia",
      locale: "pt_BR",
    },
  },
  en: {
    title: "SLR - Turnkey construction and design & build solutions",
    description:
      "Turnkey construction and design & build solutions tailored to your business.",
    openGraph: {
      title: "SLR - Turnkey construction and design & build solutions",
      description:
        "Turnkey construction and design & build solutions tailored to your business.",
      url: "https://slrengenharia.com.br/en",
      siteName: "SLR Engineering",
      locale: "en_US",
    },
  },
  es: {
    title: "SLR - Soluciones llave en mano y diseño & construcción",
    description:
      "Soluciones de obras llave en mano y diseño & construcción para tu empresa.",
    openGraph: {
      title: "SLR - Soluciones llave en mano y diseño & construcción",
      description:
        "Soluciones de obras llave en mano y diseño & construcción para tu empresa.",
      url: "https://slrengenharia.com.br/es",
      siteName: "SLR Ingeniería",
      locale: "es_ES",
    },
  },
};

const FALLBACK_LOCALE = "pt-br";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = locale.toLowerCase();
  const metadataConfig =
    metadataByLocale[normalizedLocale] ?? metadataByLocale[FALLBACK_LOCALE];

  return {
    title: metadataConfig.title,
    description: metadataConfig.description,
    icons: {
      icon: "/logo.svg",
    },
    authors: [
      { name: "Anderson Dias Farias", url: "https://adfdeveloper.com.br" },
    ],
    openGraph: {
      images: "/logo.svg",
      title: metadataConfig.openGraph.title,
      description: metadataConfig.openGraph.description,
      url: metadataConfig.openGraph.url,
      siteName: metadataConfig.openGraph.siteName,
      locale: metadataConfig.openGraph.locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
              <script
                          id="gtm-script"
                          dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W6V4Q3K2');`,                          }}
                        /></head><body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
                  <iframe
                                src="https://www.googletagmanager.com/ns.html?id=GTM-W6V4Q3K2"
                                height="0"
                                width="0"
                                style={{ display: "none", visibility: "hidden" }}
                              /></noscript><NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
