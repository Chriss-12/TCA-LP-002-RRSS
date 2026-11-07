# Style lock: TCA La Paz social hub

Established: 2026-11-06. Source: supplied TCA logo, official TCA palette image and Linktree layout reference.

## Palette

- Background and surface: Blanco humo `#F8F8F8`
- Primary: Vino TCA `#762258`
- Executive: Vino ejecutivo `#4B1638`
- Accent: Ciruela institucional `#5F294B`
- Cool dark: Azul marino `#18324A`
- Cool accent: Azul acero `#4F6D82`
- Neutral: Gris institucional `#A7A5A6` and Gris plata `#D8D6D7`
- Text primary: Grafito `#252525`, contrast 14.43:1 on Blanco humo
- Text muted: Gris carbón `#454545`, contrast 9.03:1 on Blanco humo
- Button label: Blanco humo, contrast 9.24:1 on Vino TCA
- Dark mode: not needed for this single-mode project

## Color contract

- Text-safe on Blanco humo: Vino TCA, Vino ejecutivo, Ciruela, Azul marino, Azul acero, Gris carbón and Grafito
- UI-safe: every dark brand tone against Blanco humo
- Decorative only: Gris institucional and Gris plata when used without a dark label

## Typography and shape

- Brand typography: preserved inside the official logo asset
- Interface: Segoe UI Variable, Aptos or Segoe UI
- Major radius: 32px
- Link radius: 22px
- Spacing: 4px base with 12px, 16px, 24px and 32px primary steps

## Direction

One centered link hub with a compact brand header and four large social rows. The signature is an autonomous Vino, Ciruela, Azul marino and Azul acero gradient.

## Assets and motion

- Anchor asset: `src/assets/tca-la-paz-logo.png`
- Icons: one `react-icons` family for social and utility symbols
- Motion: 120 to 240ms interaction feedback, one 240ms staggered entrance and slow ambient drift
- Reduced motion: remove entrances and reduce transitions to immediate feedback

## Do not

- Do not invent achievements, metrics or testimonials.
- Do not use gradient text.
- Do not require gestures for navigation.
- Do not change decorative gradients in response to taps or pointer movement.
- Do not replace the TCA burgundy with a generic purple palette.
- Do not introduce colors outside the ten-value TCA palette.
