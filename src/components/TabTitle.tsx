"use client";

import { useEffect } from "react";

export default function TabTitle() {
  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibility = () => {
      document.title = document.hidden
        ? "❤️‍🩹想好了再回來也行"
        : originalTitle;
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return null;
}
