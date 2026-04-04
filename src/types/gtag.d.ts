declare function gtag(
  command: "config" | "event" | "js" | "set",
  targetId: string | Date,
  config?: Record<string, unknown>
): void;
