# Tag 标签

Source: GeoShare Figma `组件 - 标签`, node `2049:2083`.

## Purpose

Use Tag to mark an object's attribute, category, or business status. A standard Tag is read-only information; only a closeable Tag exposes an action.

## Taxonomy

Keep all three Figma families available:

1. Solid (`solid`): strong category or status recognition.
2. Outline (`outline`): lower visual weight for dense content.
3. Closeable (`outline + closeable`): removable attribute or filter condition.

Each family supports `medium` (24px) and `small` (20px). Do not invent hover, pressed, selected, or disabled states: the approved Figma module does not define them.

## Anatomy and size

| Part | Medium | Small |
| --- | --- | --- |
| Height | 24px | 20px |
| Standard minimum width | 56px | 40px |
| Closeable minimum width | 64px | 56px |
| Horizontal padding | 8px | 4px |
| Radius | 4px | 4px |
| Text | Alibaba PuHuiTi 3 Regular (400), 14/22px | Alibaba PuHuiTi 3 Regular (400), 12/20px |
| Close icon | 16 × 16px | 16 × 16px |

Use a 4px gap between label and close icon for the 24px Tag, and reduce it by half to 2px for the 20px Tag. Keep the close icon asset from the Figma export; the Figma layer is named “加” but the glyph and component meaning are close/remove.

When the close action reuses the shared icon-only Button, override its global 32px minimum width inside Tag: keep the embedded close button at `16 × 16px`. Do not change the global Button size.

For closeable Tags, lay out the label and close button as a centered two-column content grid, rather than relying on inline baseline alignment. Use equal left and right padding around the combined group: 7px at 24px height and 4px at 20px height. The label and close icon must be horizontally and vertically centered as one unit; do not apply optical translate offsets.


Use the bundled Alibaba PuHuiTi 3 Regular file for Tag text. The documentation site's Chinese typography uses the same family with Light and Regular weights according to hierarchy.

Render the close icon as inline SVG with `stroke="currentColor"`. Its color must inherit the Tag tone through CSS; do not export or store one SVG file per semantic color.

## Tones

| Tone | Label | Solid | Outline / closeable |
| --- | --- | --- | --- |
| `red` | 告警 | red/2 with white text | red/4 background, red/2 border/text/icon |
| `orange` | 警告 | orange/2 with white text | orange/4 background, orange/2 border/text/icon |
| `yellow` | 提示 | yellow/2 with white text | yellow/4 background, yellow/2 border/text/icon |
| `green` | 正常 | green/2 with white text | green/4 background, green/2 border/text/icon |
| `cyan` | 其它 | cyan/2 with white text | cyan/4 background, cyan/2 border/text/icon |
| `primary` | 主色 | primary/2 with white text | primary/4 background, primary/2 border/text/icon |
| `neutral` | 中性 | neutral/6 with secondary text | outline and closeable use neutral/6; border/text/icon use neutral/3 (`#626466`) |

Figma repeats the same neutral solid sample twice. Treat it as a duplicate, not as a new state or API variant.

Use neutral/7 as the background only for the neutral Light Tag. Other Light Tag tones continue to use their corresponding semantic soft color.

## Interaction and accessibility

- Keep solid and outline tags non-interactive; do not assign `cursor: pointer`, `tabindex`, or click handlers.
- Render close as a real `button type="button"` with an accessible name such as `aria-label="移除告警标签"`.
- Activate close with pointer, Enter, or Space. Remove only the containing tag.
- Keep the visible semantic label; never communicate business status through color alone.
- Announce successful removal through a polite status region when the surrounding product does not already provide feedback.
- If removal can fail or requires confirmation, let `onClose` cancel the DOM/data update.

## API

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `tone` | `red \| orange \| yellow \| green \| cyan \| primary \| neutral` | `neutral` | Semantic color tone |
| `variant` | `solid \| outline` | `solid` | Visual treatment |
| `size` | `medium \| small` | `medium` | 24px or 20px height |
| `closeable` | `boolean` | `false` | Show an accessible close button |
| `onClose` | `(event) => boolean \| void` | — | Close callback; returning false cancels removal |
| `ariaLabel` | `string` | generated from label | Accessible name for the close button |

## Usage rules

- Reserve red, orange, yellow, and green for their real business meanings.
- Use cyan for uncategorized/other status, primary for brand or key categories, and neutral for ordinary attributes.
- Keep one size within a tag collection. Shorten long labels rather than turning a tag into paragraph text.
- Use a selectable control such as Checkbox, Radio, or a documented filter-chip pattern when selection is required; do not add selected state to base Tag.
