---
name: geoshare-web-ui
description: Build, extend, review, or document GeoShare company B-end web UI components and product screens. Use when creating administration consoles, operational dashboards, data tables, forms, navigation, feedback states, design tokens, component specifications, Storybook-style previews, or implementation code that must follow the GeoShare visual system.
---

# GeoShare Web UI

Build calm, information-dense B-end interfaces from the company design tokens. Read [references/foundations.md](references/foundations.md) before designing or coding.

Read [references/component-roadmap.md](references/component-roadmap.md) before adding a component page, so component taxonomy stays consistent across the Skill and website.

Read [references/website-documentation.md](references/website-documentation.md) before changing a documentation page or adding a component preview. Apply its shared demo-card anatomy instead of inventing a page-specific layout.

## Workflow

1. Inspect the target product and reuse its framework, existing components, and token conventions.
2. Start with semantic roles from the foundation reference; do not scatter raw hex values when a token exists.
3. Compose responsive layouts with the 4px spacing scale, 8px as the default control/card radius, and restrained elevation.
4. Build accessible component states: default, hover, active, focus-visible, disabled, loading, empty, error, and success where relevant. Standalone actionable icons use the shared Button component's icon-only variant rather than carrying click behavior on a bare icon; compound controls with a dedicated Figma interaction contract keep their component-specific internal buttons.
5. For a new shared component, document its purpose, anatomy, variants, states, properties, and usage rules. Provide one complete, runnable interaction example; if the component supports disabling, add one disabled example beside it. Keep product-specific rules out of the base component.
6. Verify visual hierarchy, contrast, keyboard access, and dense-data behavior before handoff.

For button work, read [references/components/button.md](references/components/button.md) and reuse [../../website/components/button.css](../../website/components/button.css) as the baseline implementation.

For tag work, read [references/components/tag.md](references/components/tag.md) and reuse [../../website/components/tag.css](../../website/components/tag.css) as the baseline implementation.

For data-display component work, load only the matching reference and reuse its website CSS baseline:

- Progress: [references/components/progress.md](references/components/progress.md) and [../../website/components/progress.css](../../website/components/progress.css).
- Timeline: [references/components/timeline.md](references/components/timeline.md) and [../../website/components/timeline.css](../../website/components/timeline.css).
- Tree: [references/components/tree.md](references/components/tree.md) and [../../website/components/tree.css](../../website/components/tree.css).

Every component preview uses one complete live interaction example rather than repeating state snapshots or interaction demos. Default, hover, active, and focus-visible behavior is inspected through that example. When the component supports a disabled state, always show one additional disabled example.

## Design decisions

- Use blue `#1890FF` for primary action and selection. Do not use it merely as decoration.
- Use `#14171A` with alpha roles for textual hierarchy. Keep destructive and semantic colors reserved for feedback/status.
- Prefer 14px body text in dense B-end views; use 16px when readability or content length requires it.
- Use 4px, 8px, 12px, or 16px radii intentionally. Avoid arbitrary values.
- Prefer small or bottom shadows for floating surfaces; do not shadow every card.

## Component additions

When a user asks for a new component:

1. Check whether a component already covers the behavior.
2. Define a stable API with semantic variants rather than one-off styling props.
3. Add one complete interactive preview, plus one disabled example when supported; document other meaningful variants and states without duplicating the interaction demo.
4. Update the component index/specification site along with implementation.

## Reference

Read [references/foundations.md](references/foundations.md) for canonical colors, typography, spacing, radii, shadows, and naming guidance. Reuse the approved fonts in [../../website/assets/fonts](../../website/assets/fonts), the implementation-ready variables in [../../website/foundations/tokens.css](../../website/foundations/tokens.css), and the font declarations in [../../website/foundations/fonts.css](../../website/foundations/fonts.css) when producing a local preview or distributable UI package. Treat the linked GeoShare Figma foundation page as the visual source of truth; update this reference whenever the approved Figma tokens change.
