# Progress 进度条

Use Progress to communicate continuous completion or an unknown waiting duration. Use Steps for discrete stages and Slider for user-controlled values.

## Anatomy and variants

- Track: neutral-7, 8px default height or 4px small height, 4px radius.
- Bar: primary-2 for normal, green-2 for success, orange-2 for warning, and red-2 for exception.
- Label: right aligned 12/20 DINPro. Support percentage, custom text, or hidden display.
- Indeterminate: animate a partial primary bar without inventing a percentage; stop the animation under `prefers-reduced-motion`.

Progress is read-only. Do not add hover, pressed, selected, or disabled states.

## Accessibility

- Set `role="progressbar"` and `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` for determinate progress.
- Omit `aria-valuenow` for indeterminate progress.
- Synchronize custom visible text with `aria-valuetext`.
- Pair semantic color with visible state text. Do not announce every percentage update through a high-frequency live region.

## API

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | number | — | Current determinate value, clamped to 0–max |
| `max` | number | 100 | Maximum value |
| `status` | normal / success / warning / exception | normal | Semantic state |
| `size` | default / small | default | 8px or 4px track |
| `showInfo` | boolean | true | Show the label |
| `format` | function | percentage | Visible text and `aria-valuetext` |
| `indeterminate` | boolean | false | Unknown completion |
| `ariaLabel` | string | — | Accessible name when no external label exists |
