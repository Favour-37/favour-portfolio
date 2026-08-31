import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Favour Baraka — Software Engineer & Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #0a1928 0%, #0d2136 45%, #0d2b3e 100%)",
        }}
      >
        <img
          src="https://res.cloudinary.com/dxiefklmt/image/upload/v1787825099/WhatsApp_Image_2026-08-27_at_11.24.00_h3ckml.jpg"
          width={520}
          height={630}
          style={{ position: "absolute", right: 0, top: 0, objectFit: "cover", opacity: 0.55 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #0a1928 0%, #0a1928 42%, rgba(10,25,40,0.5) 60%, rgba(10,25,40,0) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            zIndex: 10,
          }}
        >
          <img
            src="https://res.cloudinary.com/dxiefklmt/image/upload/v1787844672/FB_favicon_pyhjsg.png"
            width={64}
            height={64}
            style={{
              borderRadius: 999,
              marginBottom: 32,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#ffffff" }}>
            Favour Baraka
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              marginTop: 20,
              backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 600,
            }}
          >
            Software Engineer &amp; Founder
          </div>
          <div style={{ display: "flex", fontSize: 22, marginTop: 24, color: "#94a3b8", maxWidth: 560 }}>
            Building things that hold up under real use.
          </div>
        </div>
      </div>
    ),
    size
  );
}