# PAKAL CARDS - Responsive QA Matrix

## Breakpoints
- Mobile: <= 640 px
- Tablet: 641-1024 px
- Desktop: >= 1025 px

## Required viewport checks
| Width | Expected layout |
|---|---|
| 360 | Hamburger; 2 resource columns; single touch carousel card; stacked CTAs |
| 390 | Hamburger; 2 resource columns; 80vw carousel card; no clipping |
| 430 | Hamburger; 2 resource columns; fluid hero; full-width purchase CTAs |
| 768 | Tablet hamburger; 4 resource columns; 3 gateway cards; 2 trail columns |
| 1024 | Tablet layout retained; no desktop navigation collision |
| 1440 | Full navigation; two-column hero; 4 trail columns; capped content width |

## Acceptance criteria
1. No unintended horizontal page scrolling.
2. Only intended mobile carousels scroll horizontally.
3. Original PAKAL logo and resource artwork remain uncropped.
4. Mobile interactive controls are at least 48 px high; primary CTAs are 52 px high.
5. Landscape images use `object-fit/background-size: cover`; product/logo artwork uses `contain`.
6. Mobile resources: 2 columns. Tablet/desktop resources: 4 columns.
7. Mobile route/trail content uses touch scroll + scroll snap.
8. Header menu is hamburger below 1025 px and full navigation at desktop.
9. RTL remains enabled at the document root.
10. Reduced-motion users receive a static background instead of fades.
