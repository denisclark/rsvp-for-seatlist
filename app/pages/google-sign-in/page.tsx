"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function GoogleSignIn() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!(status === "loading") && !session) void signIn('google');
    if (session) window.close();
  }, [session, status]);

  return (
    <div className="h-screen w-screen absolute top-0 left-0 bg-white"></div>
  );
};