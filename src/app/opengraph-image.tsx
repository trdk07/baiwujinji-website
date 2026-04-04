import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "百無禁忌研究所";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F5F0EB 0%, #E8DDD4 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#2C2C2C",
            letterSpacing: 8,
            marginBottom: 24,
          }}
        >
          百無禁忌研究所
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#4A453C",
            letterSpacing: 4,
          }}
        >
          人生顧問 ・ 法事服務 ・ 感情修復
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#C23B3B",
            letterSpacing: 2,
          }}
        >
          baiwujinji.com
        </div>
      </div>
    ),
    { ...size }
  );
}
