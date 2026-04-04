"use client";

import { useEffect } from "react";

interface Props {
  src?: string;
  /** true = parallax pan through tall image as user scrolls */
  parallax?: boolean;
}

export default function PageBackground({ src = "/images/bg-home.webp", parallax = false }: Props) {
  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url('${src}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";

    if (!parallax) {
      body.style.backgroundPosition = "top center";
      return () => {
        body.style.backgroundImage = "";
        body.style.backgroundSize = "";
        body.style.backgroundRepeat = "";
        body.style.backgroundAttachment = "";
        body.style.backgroundPosition = "";
      };
    }

    // Parallax: pan from top to bottom of image as user scrolls
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      body.style.backgroundPosition = `center ${progress * 100}%`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      body.style.backgroundImage = "";
      body.style.backgroundSize = "";
      body.style.backgroundRepeat = "";
      body.style.backgroundAttachment = "";
      body.style.backgroundPosition = "";
    };
  }, [src, parallax]);

  return null;
}
