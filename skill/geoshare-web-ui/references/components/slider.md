# Slider 滑块

Use Slider for selecting a value from a continuous numeric range. Use Progress for read-only completion feedback and Select for discrete named choices.

## Anatomy and variants

- Track: neutral-6, 6px height, 999px radius.
- Filled track and thumb: primary-2 by default; primary-3 on hover/focus and primary-1 while pressed.
- Value tip: hidden until hover/focus by default; `tipsAlways` keeps it visible. `setTips` may add a business unit such as `GB`.
- Result text: optional live text when the product intentionally suppresses the floating tip.
- Range selection: two coordinated thumbs for choosing a continuous start and end value; show both values in a result row.
- Disabled: neutral track and thumb, no pointer or keyboard changes.

## Interaction and accessibility

- Use a native `input[type="range"]` so Arrow keys, Home, End, focus, and screen-reader value announcements work consistently.
- Provide an accessible name with a visible label or `aria-label`.
- Keep `min`, `max`, and `step` aligned with the business data precision. Pair with a number input when exact entry is important.
- Use range selection when the user needs to choose an interval; keep the start value no greater than the end value.
- Do not rely on the floating tip alone to communicate the value; it is supplementary feedback.

## API

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | number | — | Current value |
| `min` | number | 0 | Minimum value |
| `max` | number | 100 | Maximum value |
| `step` | number | 1 | Increment between values |
| `tips` | boolean | true | Show the floating value tip |
| `tipsAlways` | boolean | false | Keep the tip visible |
| `setTips` | `(value) => string` | value | Format the floating tip |
| `range` | boolean | false | Enable start/end interval selection |
| `onChange` | `(value) => void` | — | Called when the value changes |
| `disabled` | boolean | false | Disable pointer and keyboard interaction |
