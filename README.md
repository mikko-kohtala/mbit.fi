# mbit.fi

## Brand

Icons live in `public/brand/`. All artwork is hand-drawn SVG paths (no font dependency), black and white to match the site.

| File | Use |
| --- | --- |
| `mbit-mark.svg` / `mbit-mark-512.png` | Square "M" mark on a black rounded tile. Favicon, avatars, app icons. |
| `mbit-mark-light.svg` / `mbit-mark-light-512.png` | Same mark, white tile with black "M", for dark surfaces that need a light tile. |
| `mbit-mark-mono.svg` / `mbit-mark-mono-512.png` | "M" only, transparent background. The SVG fills with `currentColor`, the PNG is black. |
| `mbit-wordmark.svg` / `mbit-wordmark-white.svg` | "Mbit" wordmark on a transparent background, black or white. |
| `mbit-wordmark-tile.svg` | "Mbit" wordmark on a wide black rounded tile. Social previews, banners. |
| `mbit-wordmark-square.svg` / `mbit-wordmark-square-512.png` | "Mbit" wordmark on a square black tile, for logo fields that require a square image. |

The square files are 512x512, so they pass uploaders that demand a minimum logo size.

`app/icon.svg` and `app/favicon.ico` are the favicons, and `app/apple-icon.tsx` renders the same mark as a 180px PNG at build time. All three are picked up automatically by Next.js.
