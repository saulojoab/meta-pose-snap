import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { AppProps } from "next/app";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta Pose Snap",
  description: "Create Meta Hand Poses with a simple picture of your hands",
};

import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meta Pose Snap</title>
      </Head>
      <div className={`${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Component {...pageProps} />
        </StyledComponentsRegistry>
      </div>
    </>
  );
}
