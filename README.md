# mbit.fi

## Brand

Icons live in `public/brand/`. All artwork is hand-drawn SVG paths (no font dependency), black and white to match the site.

| File | Use |
| --- | --- |
| `mbit-mark.svg` | Square "M" mark on a black rounded tile. Favicon, avatars, app icons. |
| `mbit-mark-light.svg` | Same mark, white tile with black "M", for dark surfaces that need a light tile. |
| `mbit-mark-mono.svg` | "M" only, transparent background, fills with `currentColor`. |
| `mbit-wordmark.svg` / `mbit-wordmark-white.svg` | "Mbit" wordmark on a transparent background, black or white. |
| `mbit-wordmark-tile.svg` | "Mbit" wordmark on a black rounded tile. Social previews, banners. |

`app/icon.svg` and `app/favicon.ico` are the favicons, and `app/apple-icon.tsx` renders the same mark as a 180px PNG at build time. All three are picked up automatically by Next.js.
