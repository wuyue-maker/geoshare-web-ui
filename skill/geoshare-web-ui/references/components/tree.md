# Tree 树形结构

Use Tree for true parent-child data. Use List for flat content, Steps for workflow navigation, and Timeline for chronological events.

## Anatomy and behavior

- Row: 32px minimum height, 8px horizontal padding, 4px radius, 14/22 regular text.
- Indent child groups by 24px per level.
- Switcher: 24px hit area; right chevron when collapsed and down chevron when expanded.
- Checkbox: 16px square with checked and mixed states.
- Selection: primary-5 background and primary-2 text.
- Disabled nodes use tertiary text, remain reachable by arrow navigation, and cannot be selected or checked.

Keep expansion independent from selection and checking. Collapsing a branch must not clear descendant state. In linked check mode, checking a parent affects non-disabled descendants, and child changes recompute parent true, false, or mixed state.

## Keyboard and ARIA

- Use a single roving `tabindex=0` item per tree.
- Up/Down move across visible nodes; Right expands or enters children; Left collapses or returns to the parent.
- Home/End move to the first/last visible node; Enter/Space select or check.
- Put `role="tree"` on the root, `role="treeitem"` on nodes, and `role="group"` on child lists.
- Use `aria-expanded` only for branches, `aria-selected` for single selection, `aria-checked` including `mixed` for checking, and `aria-disabled` for disabled nodes.

## API

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `data` | TreeNode[] | — | Hierarchical data |
| `selectionMode` | none / single | single | Row selection |
| `selectedKeys` | Key[] | — | Controlled selection |
| `expandedKeys` | Key[] | — | Controlled expansion |
| `defaultExpandedKeys` | Key[] | — | Initial expansion |
| `checkable` | boolean | false | Enable checkbox mode |
| `checkedKeys` | Key[] | — | Controlled checked state |
| `checkStrictly` | boolean | false | Disable parent-child linkage |
| `disabledKeys` | Key[] | — | Disabled nodes |

TreeNode contains `key`, `label`, optional `children`, `disabled`, `disableCheckbox`, and `isLeaf`. For very large visible trees, use virtualization and preserve `aria-setsize` and `aria-posinset`.
