# GeoShare Web UI Component Roadmap

Source: GeoShare Figma component index, node `571:455`.

Use these categories in the component documentation site and when adding component specifications.

| Category | Components |
| --- | --- |
| General | Button, Tag |
| Data entry | Input (number), Search, Select (cascader), Laydate (date and time picker), Radio, Checkbox, Upload, ColorPicker, Slider |
| Navigation | Pagination, Breadcrumb, Tabs, SideNav, Steps |
| Data display | Progress, Timeline, Tree, List, Calendar |
| Feedback | Drawer, Modal |

## Classification conventions

- Put a component in the category that matches its primary user task, even when it can appear elsewhere.
- Keep Calendar in Data display; use Laydate for direct date or time input.
- Keep Progress in Data display; use Steps for navigation through a multi-stage task.
- Keep SideNav in Navigation and Drawer in Feedback, because their primary behaviors are navigation and temporary contextual overlay respectively.
- Add each component page only after its Figma module is ready. Until then, retain the generated “即将上线” documentation placeholder.
