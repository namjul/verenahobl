# src/styles/

Global CSS and DaisyUI token overrides. This is where the brand becomes code.

## Files

| File | Purpose |
|---|---|
| `global.css` | Tailwind imports, DaisyUI theme override, base resets, typography scale |

## DaisyUI token overrides

These make DaisyUI components inherit the brand instead of looking like DaisyUI.

```css
@plugin "daisyui/theme" {
  name: "verena";
  default: true;

  --color-base-100: oklch(100% 0 0);       /* white */
  --color-base-200: oklch(97% 0 0);
  --color-base-300: oklch(93% 0 0);
  --color-base-content: oklch(10% 0 0);    /* near-black */

  --color-primary: oklch(10% 0 0);
  --color-primary-content: oklch(100% 0 0);

  --radius-box: 0;
  --radius-field: 0;
  --radius-selector: 0;

  --depth: 0;
  --noise: 0;
  --border: 1px;
}
```

## Typography

- Font: Brevia (load via Google Fonts or self-host)
- Single typeface — no mixing
- Category tags only: `text-transform: uppercase; letter-spacing: 0.15em`

## Rules

- No color variables beyond the token set above
- No shadows, no gradients, no rounded corners
- All color in the UI comes from project images, not CSS
