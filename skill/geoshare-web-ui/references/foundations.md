# GeoShare Web Foundations

Source: GeoShare B-end component library, foundation node `893:1683`.

For web implementation, use `../../../website/foundations/tokens.css` as the executable token source. Keep it synchronized with this reference and the approved Figma library.

## Color tokens

Use semantic aliases in implementation. These base values are canonical.

| Group | Token | Value |
| --- | --- | --- |
| Text | `text/primary` | `#14171A` |
| Text | `text/secondary` | `#14171ACC` |
| Text | `text/tertiary` | `#14171A66` |
| Text | `text/disabled` | `#14171A1A` |
| Neutral | `neutral/1…9` | `#14171A`, `#2E3133`, `#626466`, `#969899`, `#D5D7D9`, `#E1E3E5`, `#F0F1F2`, `#F7F9FA`, `#FFFFFF` |
| Primary | `primary/1…6` | `#064580`, `#1890FF`, `#99CEFF`, `#CCE6FF`, `#EBF5FF`, `#F2F9FF` |
| Orange | `orange/1…4` | `#802F06`, `#FF6F26`, `#FFBB99`, `#FFEEE6` |
| Red | `red/1…4` | `#801006`, `#F13F2F`, `#FFA199`, `#FFE8E5` |
| Purple | `purple/1…4` | `#570680`, `#AE24F2`, `#DD99FF`, `#F6E5FF` |
| Indigo | `indigo/1…4` | `#0D0D80`, `#3939E5`, `#AAAAF2`, `#EBEBFF` |
| Cyan | `cyan/1…4` | `#056666`, `#21D9D9`, `#91F2F2`, `#D2F7F7` |
| Green | `green/1…4` | `#1F5933`, `#32CC65`, `#91F2B2`, `#D9FFE5` |
| Yellow | `yellow/1…4` | `#59501F`, `#F2CE18`, `#F2DE79`, `#FFF7CC` |

## Typography

- Chinese: Alibaba PuHuiTi 3; English: Cabin; numeric data: DINPro.
- Included font assets: Alibaba PuHuiTi 3 Light/Regular/Medium/Bold/Heavy, Cabin SemiBold, and DINPro Regular/Medium/Bold in `../../../website/assets/fonts/`. The supplied Cabin file is SemiBold only; use a system fallback for Cabin Regular until a licensed Regular file is added.
- Titles (Medium): 20/28, 18/26, 16/24, 14/22 px.
- Body (Regular): 16/24, 14/22, 12/20 px.
- Use system fallbacks when licensed brand fonts are unavailable. Preserve sizes, weights, and line heights.

## Layout tokens

- Spacing: 4, 8, 16, 24, 32px. Keep compound spacing on this scale.
- Radius: 4, 8, 12, 16px. Default controls and cards: 8px.
- Shadows: `0 0 8px #14171A1A` (large), `0 0 4px #14171A1A` (small), `0 2px 2px #14171A0D` (bottom subtle).

## Naming

Name tokens by role first, then component scope, for example `color-text-secondary`, `button-primary-bg-default`, and `table-row-hover-bg`. Avoid component code that depends directly on palette-step names except token definitions.
