# Website Documentation Standard

Use this standard for every GeoShare UI component page.

## Page sequence

1. Component title and one-sentence purpose.
2. Usage or sizing rule.
3. One primary interactive demo card. It must present a complete, realistic operation flow for the component rather than a collection of simulated state snapshots. If the component supports a disabled state, include exactly one disabled example alongside the live example.
4. Usage rules and API.

Static anatomy, size, and visual-variant references may appear outside the primary interactive demo. Do not turn those references into duplicate interaction demos or full state matrices.

## Demo card

Use the same demo-card anatomy for the component's primary interaction:

1. Scenario title (`.demo-title`).
2. One fully operable example (`.button-row` or equivalent) that covers the component's main interaction.
3. One visibly disabled example when the component defines a disabled state.
4. Optional concise instruction or live result/status (`.demo-caption` or an accessible status region).

Keep 16px between demo cards. When a component has multiple semantic color variants, show them as compact visual references; the page still keeps only one complete interaction demo.

## Visual rules

- Use the site tokens and shared component CSS; do not create a one-off visual language for a component page.
- Use `提示内容` as the default placeholder text for every input-like control in component previews. Keep `placeholder` as a configurable parameter so product implementations can replace it with specific guidance.
- Any standalone icon that triggers an action must be composed with the shared Button component's icon-only variant. Compound controls with a dedicated Figma interaction specification, such as the two-part numeric stepper, keep their component-specific internal buttons instead. Do not attach button behavior directly to a bare icon; keep the icon asset decorative and provide every button with an accessible name.
- Use `--gs-neutral-8` as demo-card background, `--gs-neutral-6` as its border, 8px card radius, and 20px internal padding.
- Keep labels at 13px secondary text; use 12px tertiary text for state captions.
