import { GoogleOneTap, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { User, currentUser } from "@clerk/nextjs/server";
import { useEffect, useMemo, useRef, useState } from "react";
import NavBar from "~/components/NavBar";

export default async function LoginPage() {
   const user = await currentUser();
    return (
      <main className="flex h-[95vh] flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Welcome!
          </h1>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/profile">
              <button className="bg-blue-500 rounded-lg p-4 text-2xl"> 🪵 📥</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <h2 className="text-2xl font-bold">{user?.firstName+" "+user?.lastName}</h2>
          </SignedIn>
        </div>
      </main>
    );
  }
  