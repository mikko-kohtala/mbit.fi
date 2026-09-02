import { ImageResponse } from "next/og";

export const size = { height: 180, width: 180 };
export const contentType = "image/png";

// Same "M" as public/brand/mbit-mark.svg on a square black background.
// iOS applies its own corner mask, so the tile is not rounded here.
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#000",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <svg
        height="180"
        role="img"
        viewBox="0 0 64 64"
        width="180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Mbit mark</title>
        <path
          d="M14 18h7l11 14 11-14h7v28h-7V28L32 42 21 28v18h-7z"
          fill="#fff"
        />
      </svg>
    </div>,
    { ...size }
  );
}
