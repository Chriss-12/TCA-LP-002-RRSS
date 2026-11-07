---
name: build-social-hub
description: Build or revise a polished TCA La Paz social link hub with accessible links, sharing and responsive interaction.
---

# Build social hub

Create or revise the TCA La Paz link page as a focused navigation surface. Keep identity first, links obvious and interaction useful on both touch and pointer devices.

## Scope decides the build

Use this skill for the social hub, its link cards, sharing control and responsive presentation. Do not expand it into a full institutional website without a direct request.

## Procedure

1. Read `.agents/AGENTS.md` and the current social-link data in `src/App.tsx`.
2. Confirm each requested URL is represented exactly once and uses a clear Spanish label.
3. Use `react-icons` for every social or utility icon.
4. Keep each link as a real anchor with a descriptive accessible name.
5. Provide visible hover, focus and pressed feedback without changing layout bounds.
6. Keep ambient gradients autonomous, decorative and reduced-motion aware.
7. Keep sharing progressive. Prefer the Web Share API and provide a clipboard fallback.
8. Verify at 375 pixels, desktop width and short landscape height.
9. Run `pnpm build` and `pnpm lint` before hand-off.

## Interaction boundaries

The page must work when scripts for decorative effects fail. Never require a gesture to reach a social link or understand the page.

Do not attach decorative gradient changes to pointer or touch events. The ambient effect must continue without user input.

## Hand-off

Use `$tca-brand-ui` for palette, typography, identity assets and decorative direction. Use the repository review skills when the user requests an interface audit.

## Before you finish

| Detection pattern | Correction |
| --- | --- |
| A social row is a `div` with a click handler | Replace it with a semantic anchor |
| A utility button has only an icon | Add an accessible name and visible text when space allows |
| A tap or pointer movement changes the gradient | Remove the input handler and keep the ambient animation autonomous |
| Touch feedback depends on hover | Add an explicit pressed state |
| A link opens a new tab without `rel` | Add `rel="noreferrer"` |
| Content or gradients cut off during scroll | Clip only horizontal overflow and top-align content on short viewports |

## Reporting

List the links or behaviors changed and the responsive states checked. Report any failed verification command with its exact cause.
