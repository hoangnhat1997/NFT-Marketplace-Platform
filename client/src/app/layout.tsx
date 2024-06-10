"use client";
import React from "react";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { MetaMaskProvider } from "@metamask/sdk-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Meta Market App",
          url: process.env.NEXT_PUBLIC_URL,
        },
        checkInstallationImmediately: false,
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </MetaMaskProvider>
  );
}
