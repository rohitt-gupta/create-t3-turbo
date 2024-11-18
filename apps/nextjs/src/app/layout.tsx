import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@justcollab/ui";
import { ThemeProvider, ThemeToggle } from "@justcollab/ui/theme";
import { Toaster } from "@justcollab/ui/toast";

import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

import { env } from "~/env";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.justcollab.com"
      : "http://localhost:3000",
  ),
  title: "Just Collab",
  description: "Collab with the best influencers in your niche",
  openGraph: {
    title: "Just Collab",
    description: "Collab with the best influencers in your niche",
    url: "https://turbo.justcollab.com",
    siteName: "Just Collab",
  },
  twitter: {
    card: "summary_large_image",
    site: "@justcollab",
    creator: "@justcollab",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
