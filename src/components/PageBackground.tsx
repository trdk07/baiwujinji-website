"use client";

import { useEffect } from "react";

interface Props {
  src?: string;
  /** Desktop background-position (default: "top center") */
  position?: string;
  /** Mobile background-position override (default: same as position) */
  mobilePosition?: string;
  /** true = parallax pan through tall image as user scrolls */
  parallax?: boolean;
}

const MOBILE_QUERY = "(max-width: 768px)";

export default function PageBackground({
  src = "/images/bg-home.webp",
  position = "top center",
  mobilePosition,
  parallax = false,
}: Props) {
  useEffect(() => {
    const body = document.body;
    const mql = window.matchMedia(MOBILE_QUERY);

    body.style.backgroundImage = `url('${src}')`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = mql.matches ? "scroll" : "fixed";

    const applyPosition = (isMobile: boolean) => {
      if (!parallax) {
        body.style.backgroundPosition = isMobile
          ? (mobilePosition ?? position)
          : position;
      }
      body.style.backgroundAttachment = isMobile ? "scroll" : "fixed";
    };

    if (!parallax) {
      applyPosition(mql.matches);

      const onChange = (e: MediaQueryListEvent) => applyPosition(e.matches);
      mql.addEventListener("change", onChange);

      return () => {
        mql.removeEventListener("change", onChange);
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
  }, [src, position, mobilePosition, parallax]);

  return null;
}
