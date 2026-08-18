# Button 按钮

Source: GeoShare Figma `组件-按钮`, node `893:1107`.

## Complete taxonomy

The website and implementations must keep these Figma families separate; do not collapse the module into a few representative examples.

1. Basic: primary fill, neutral fill, outline, dashed outline, neutral text, primary text, and icon + text.
2. Dropdown: these visual families with a trailing chevron, plus a split dropdown with divider.
3. Special icon: 32 × 32px icon-only fill, neutral, outline, and no-background variants. Fill, neutral, and outline variants may use 4/8/12/16px container radii. Name the text-style variant “无底色图形按钮”; it has no visible container, uses neutral text color by default, and is documented once rather than repeated for every radius. Use the exported Figma icon asset rather than redrawing it.
4. Groups: outlined text group, borderless text group, filled text group, and filled icon group. Follow Figma node `2240:201`.
5. Semantic colors: red (exception), orange (attention), yellow (notice), green (normal), cyan (other).

Keep every family and visual style available in the implementation and visual reference, but use one complete live button interaction example for the documentation page. The implementation still defines default, hover, pressed/selected (dropdown: active), focus-visible, and disabled behavior in CSS; do not repeat those states as a large matrix or create duplicate interaction demos. Because Button supports disabling, always show one disabled button beside the live example.

Text dropdowns use neutral text and icon colors by default. Change them to `#1890FF` on hover and `#064580` while pressed; do not render their default state as primary blue.

## Anatomy

- Standard text button: 32px height, 4px radius, horizontal padding 8px, 14/22px label.
- Icon-only button: 32 × 32px, 20px icon centered.
- Text-plus-icon and dropdown buttons retain the 32px outer height.
- Button groups use 4px outer corners and shared borders between adjacent items.

### Combination button specification

- Provide four variants: outlined text, borderless text, filled text, and filled icon.
- Text groups are 400px wide in the reference layout and divide available width equally across five items.
- Outlined text uses a white surface and `#E1E3E5` shared borders. Selected uses `#1890FF`; selected-disabled uses `#CCE6FF` border with `#99CEFF` text.
- Borderless text uses 16px-high `#E1E3E5` separators. Default uses secondary text, hover and selected use `#1890FF`, default-disabled uses tertiary text, and selected-disabled uses `#99CEFF`.
- Filled groups use a `#F0F1F2` outer surface, 2px padding, 4px gap, and 4px outer radius. Each item is 28px high with 2px radius. Selected uses a white surface.
- Filled icon items are 28 × 28px with a 20px icon. Default uses `#626466`, hover uses `#1890FF`, selected uses `#2E3133`, and disabled uses `#D5D7D9`.
- Every combination item must use inline-flex with horizontal and vertical centering. Do not rely on the browser's native button baseline alignment.

## Types and states

| Type | Default | Hover | Pressed / selected | Disabled |
| --- | --- | --- | --- | --- |
| Primary | `#1890FF`, white text | `#99CEFF`, white text | `#064580`, white text | `#CCE6FF`, white text |
| Secondary | white, `#E1E3E5` border, secondary text | white, primary text | `#CCE6FF`, `#064580` border and text | white, `#E1E3E5` border and tertiary text |
| Icon primary | Same color and state mapping as primary | Same | Same | Same |
| Primary text | transparent, `#1890FF` text | `#F2F9FF`, `#1890FF` text | `#CCE6FF`, `#064580` text | transparent, tertiary text |
| Neutral fill | `#E1E3E5`, secondary text | `#F0F1F2`, secondary text | `#D5D7D9`, secondary text | `#F0F1F2`, tertiary text |

## Other color buttons

Use the approved foundation palette directly. Every color follows the same scale: palette `/2` default, `/3` hover, `/1` pressed, `/4` disabled.

| Variant | Token family | Default |
| --- | --- | --- |
| Orange | `orange/1…4` | `#FF6F26` |
| Red | `red/1…4` | `#F13F2F` |
| Yellow | `yellow/1…4` | `#F2CE18` |
| Green | `green/1…4` | `#32CC65` |
| Cyan | `cyan/1…4` | `#21D9D9` |

## Split dropdown divider

The split divider is 1 × 16px. Its color is part of the component state and must change together with the label, chevron, background, and border.

| Visual family | Default | Hover | Active / pressed | Disabled |
| --- | --- | --- | --- | --- |
| Primary fill | `#D5D7D9` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Neutral fill | `#D5D7D9` | `#D5D7D9` | `#969899` | `#D5D7D9` |
| Outline | `#D5D7D9` | `#1890FF` | `#064580` | `#D5D7D9` |
| Text | `#D5D7D9` | `#1890FF` | `#064580` | `#D5D7D9` |

Drive the divider through the local `--button-split-divider` variable. Do not use one shared neutral color for every state and do not approximate the primary divider with opacity.

Build split dropdowns from two real layout regions: a left-aligned `.gs-button__label` and a fixed 32px-wide, right-aligned `.gs-button__split-box` containing a real 1 × 16px `.gs-button__divider` plus the chevron. Do not draw the divider with an absolutely positioned pseudo-element or a full-height border. Keep `min-width: 80px`, but use intrinsic width so longer labels expand the button instead of overflowing or becoming centered across the arrow region.

## Usage rules

- Use one primary button for the main action in a local action group; use secondary buttons for alternatives.
- Use other-color buttons only when color carries stable domain meaning; do not use multiple colors merely to decorate a toolbar.
- Use a dropdown button only when one action has related alternatives.
- Use icon-only buttons only when the icon is unambiguous; include an accessible name (`aria-label` or visible tooltip).
- Route standalone actionable icons through the shared icon-only Button variant, including icons embedded in other components such as password visibility controls. Compound controls with their own Figma interaction contract, such as numeric stepper halves, remain internal subcontrols of that component. A bare SVG, `span`, or page-local icon wrapper must not own button behavior.
- Render recolorable SVG icons inline with `fill="currentColor"` or `stroke="currentColor"`. Let the component CSS `color` token drive default, hover, pressed, and disabled icon colors; do not maintain separate color-specific SVG files or external `<img>` variants.
- Use a button group for mutually exclusive modes or adjacent, related actions.
- Disabled buttons must not be interactive. Keep the reason apparent through nearby content when it is not obvious.
