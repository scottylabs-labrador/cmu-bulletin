import "~/styles/globals.css";

import NavBar from "~/components/NavBar";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

export const metadata = {
  title: "BoilerGram",
  description: "Your new favorite social media platform.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
        <div className="flex justify-evenly">
            <main className="bg-white w-4/6">
                {children}
            </main>
        </div>
        <footer>    
            <NavBar />
        </footer>
    </React.Fragment>
  );
}
