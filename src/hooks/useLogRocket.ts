"use client";
import LogRocket from "logrocket";
import { useEffect } from "react";

export default function useLogRocket() {
  useEffect(() => {
    console.log("log rocket initialized");
    LogRocket.init("0jnbgx/personal-website");
  }, []);

  return null;
}
