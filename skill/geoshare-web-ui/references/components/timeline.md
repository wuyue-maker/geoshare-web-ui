# Timeline 时间轴

Use Timeline for ordered events, audit records, status changes, and business history. Use Steps when users navigate a multi-stage process.

## Variants and states

- Default: single left-aligned chronology.
- Compact: reduced vertical spacing for dense logs.
- Alternate: two-sided milestone layout; collapse to one column on narrow screens without changing DOM order.
- Status: default, completed, current, warning, error, and pending.

Map completed to green-2, current to primary-2 with a primary-5 ring, warning to orange-2, error to red-2, pending to neutral-5, and default to neutral-4. Always pair the marker with a visible status label.

Timeline items are not selectable or clickable. Put any real action inside the content as a link or button.

## Semantics and accessibility

- Use an ordered list and list items in the same order they appear visually.
- Use `<time datetime>` for time values.
- Hide decorative markers from assistive technology.
- Mark the current event with `aria-current="true"`.
- Keep alternate layout visual only; do not reorder events in CSS or DOM.

## API

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `items` | TimelineItem[] | — | Ordered event data |
| `layout` | left / alternate | left | Visual layout |
| `density` | default / compact | default | Vertical rhythm |
| `ariaLabel` | string | — | Timeline accessible name |
| `renderMarker` | function | status marker | Custom marker while retaining status text |
| `renderAction` | function | — | Local event action |

TimelineItem contains `key`, `title`, `time`, optional `description`, `meta`, `status`, `statusLabel`, and `current`. Do not expose item-level disabled, selected, or click APIs.
