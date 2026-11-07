---
name: tca-brand-ui
description: Preserve and extend the TCA La Paz visual identity when designing or changing its web interfaces.
---

# TCA brand UI

Use the supplied TCA La Paz identity to guide color, type, copy and visual motion. Keep new work recognizable without copying a generic link-page template.

## Evidence before invention

Treat `src/assets/tca-la-paz-logo.png` and the user-supplied TCA palette as primary brand evidence. The ten palette values below are exact identity cues.

| Role | Hex |
| --- | --- |
| Vino TCA | `#762258` |
| Gris institucional | `#A7A5A6` |
| Blanco humo | `#F8F8F8` |
| Gris carbón | `#454545` |
| Vino ejecutivo | `#4B1638` |
| Ciruela institucional | `#5F294B` |
| Azul marino | `#18324A` |
| Azul acero | `#4F6D82` |
| Gris plata | `#D8D6D7` |
| Grafito | `#252525` |

Do not infer claims, partnerships, dates or audience statistics from the logo. Label unverified marketing content as a proposal or leave it out.

## Build the visual system

- Use Vino TCA for primary emphasis and focus, not as a full-page text background.
- Build ambient gradients only from Vino ejecutivo, Ciruela institucional, Azul marino and Azul acero.
- Use Blanco humo for the page and surfaces. Use Grafito and Gris carbón for readable text.
- Let the official logo carry the editorial typography. Use a neutral, highly readable sans serif for interface text.
- Use generous corners for major containers and tighter corners for link rows.
- Keep one memorable effect. For this project it is the autonomous ambient gradient.
- Use the diamond motif sparingly as a signature, divider or favicon.

## Protect usability

- Keep body text at 16 pixels or larger on phones.
- Keep normal text contrast at 4.5:1 and focus indicators at 3:1 or higher.
- Preserve 48-pixel touch targets and eight pixels between independent controls.
- Give motion a static reduced-motion equivalent.
- Keep decorative layers outside the accessibility tree.

## Hand-off

Use `$build-social-hub` for link data, sharing behavior and social-card interaction. Use the repository accessibility skills for a full WCAG review.

## Before you finish

| Detection pattern | Correction |
| --- | --- |
| A color falls outside the ten official values | Replace it with the closest role from the TCA palette |
| Every element uses the same radius | Restore distinct major-container and link-row radii |
| Gradient crosses text with unstable contrast | Move the gradient behind a stable surface or vignette |
| Copy claims outcomes not present in project data | Remove the claim or request verified wording |
| Motion runs under reduced-motion preferences | Replace movement with an immediate state change |

## Reporting

Report the identity source used, tokens changed and any contrast checks performed. State when a visual choice is inferred rather than present in the source asset.
