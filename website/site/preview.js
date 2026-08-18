const gsIcon = window.GeoShareIcons.icon;
function dateNavIcon(direction) {
  const icons = { prevYear: 'chevronDoubleLeft', prev: 'chevronLeft', next: 'chevronRight', nextYear: 'chevronDoubleRight' };
  return gsIcon(icons[direction], 'gs-figma-date-nav-icon');
}
const navigation = [
  ['开发指南', [['介绍', '#/guide/intro'], ['设计规范', '#/guide/design'], ['资源下载', '#/guide/resources']]],
  ['基础', [['颜色', '#/foundation/color'], ['文字', '#/foundation/typography'], ['布局', '#/foundation/layout']]],
  ['通用组件', [['Button 按钮', '#/components/button'], ['Tag 标签', '#/components/tag']]],
  ['数据录入', [['Input 输入框', '#/components/input'], ['Search 搜索框', '#/components/search'], ['Select 选择器（级联）', '#/components/picker'], ['Laydate 时间和日期选择器', '#/components/date-time-picker'], ['Switch 开关', '#/components/switch'], ['Radio 单选框', '#/components/radio'], ['Checkbox 复选框', '#/components/checkbox'], ['Upload 上传', '#/components/upload'], ['ColorPicker 颜色选择器', '#/components/color-picker'], ['Slider 滑块', '#/components/slider']]],
  ['导航', [['Pagination 分页', '#/components/pagination'], ['Breadcrumb 面包屑', '#/components/breadcrumb'], ['Tabs 选项卡', '#/components/tabs'], ['SideNav 侧边栏', '#/components/side-nav'], ['Steps 步骤条', '#/components/steps']]],
  ['数据展示', [['Progress 进度条', '#/components/progress'], ['Timeline 时间轴', '#/components/timeline'], ['Tree 树形结构', '#/components/tree'], ['List 列表', '#/components/list'], ['Calendar 日历', '#/components/calendar']]],
  ['反馈', [['Drawer 抽屉', '#/components/drawer'], ['Modal 弹窗', '#/components/modal']]],
];
const palettes = [
  ['文字颜色', [['text-primary', '#14171A'], ['text-secondary', '#14171ACC'], ['text-tertiary', '#14171A66'], ['text-disabled', '#14171A1A']]],
  ['中性色', [['neutral-1', '#14171A'], ['neutral-2', '#2E3133'], ['neutral-3', '#626466'], ['neutral-4', '#969899'], ['neutral-5', '#D5D7D9'], ['neutral-6', '#E1E3E5'], ['neutral-7', '#F0F1F2'], ['neutral-8', '#F7F9FA'], ['neutral-9', '#FFFFFF']]],
  ['主色', [['primary-1', '#064580'], ['primary-2', '#1890FF'], ['primary-3', '#99CEFF'], ['primary-4', '#CCE6FF'], ['primary-5', '#EBF5FF'], ['primary-6', '#F2F9FF']]],
  ['辅助色', [['orange', '#FF6F26'], ['red', '#F13F2F'], ['purple', '#AE24F2'], ['indigo', '#3939E5'], ['cyan', '#21D9D9'], ['green', '#32CC65'], ['yellow', '#F2CE18']]],
];
const pageData = {
  '#/guide/intro': { crumb: '开发指南 / 介绍', title: 'GeoShare Web UI', lead: '面向公司互联网产品的 B 端组件文档。以统一的设计语言帮助团队快速构建清晰、一致、高效的产品体验。', toc: ['开始使用', '设计原则', '组件规划'], body: `<section id="开始使用"><h2>开始使用</h2><p>本组件库由设计令牌、组件规范、可运行预览和实现代码组成。开发新功能前，先在此找到对应组件与用法；没有现成组件时，按规范新增并补充预览。</p><div class="callout"><b>当前版本</b><span>基础设计令牌已经发布。通用组件、表单和数据展示组件将按产品需求持续补充。</span></div></section><section id="设计原则"><h2>设计原则</h2><div class="principles"><div><b>清晰</b><span>信息层级明确，降低复杂业务的理解成本。</span></div><div><b>一致</b><span>相同场景使用相同组件与交互模式。</span></div><div><b>高效</b><span>优先支持高频操作与密集数据处理。</span></div></div></section><section id="组件规划"><h2>组件规划</h2><p>侧栏按基础、通用、数据录入、数据展示和反馈分类组织。每个组件页面将提供使用说明、示例、API、状态与可访问性规则。</p></section>` },
  '#/guide/design': { crumb: '开发指南 / 设计规范', title: '设计规范', lead: '所有组件与产品页面均以此处令牌为基础。变量已同时提供在 tokens.css，供开发实现直接复用。', toc: ['颜色', '文字', '布局与外观'], body: designBody() },
  '#/foundation/color': { crumb: '基础 / 颜色', title: '颜色', lead: '使用语义化颜色令牌表达信息层级、状态与操作优先级。', toc: ['颜色令牌', '使用原则'], body: `<section id="颜色令牌"><h2>颜色令牌</h2>${paletteHtml()}</section><section id="使用原则"><h2>使用原则</h2><ul><li>主色用于主要操作、选中状态和关键链接。</li><li>文本优先使用 text-primary、secondary、tertiary 等语义令牌。</li><li>状态色仅用于对应的业务反馈，避免作为装饰色。</li></ul></section>` },
  '#/foundation/typography': { crumb: '基础 / 文字', title: '文字', lead: '通过稳定的字体、字重和行高建立可扫描的信息层级。', toc: ['字体家族', '字号层级'], body: typeBody() },
  '#/foundation/layout': { crumb: '基础 / 布局', title: '布局与外观', lead: '空间与层次是 B 端界面可读性的基础。', toc: ['间距', '圆角', '阴影'], body: layoutBody() },
  '#/guide/resources': { crumb: '开发指南 / 资源下载', title: '资源下载', lead: '集中提供 GeoShare Web UI 设计与开发资源。完整 Skill 整理完成后，将在这里开放下载。', toc: ['下载 Skill', '字体资源', '开发资源'], body: `<section id="下载 Skill"><h2>下载 Skill</h2><p>后续可在此获取完整的 GeoShare Web UI Skill，用于快速调用组件规范和开发互联网产品。</p><div class="skill-download-card"><div class="skill-download-icon">G</div><div class="skill-download-copy"><b>GeoShare Web UI Skill</b><span>正在整理 · 完成后开放下载</span></div><button class="download-button is-disabled" type="button" disabled>暂未开放</button></div></section><section id="字体资源"><h2>字体资源</h2><div class="resource-card"><b>Alibaba PuHuiTi 3</b><span>Light / Regular / Medium / Bold / Heavy</span></div><div class="resource-card"><b>DINPro</b><span>Regular / Medium / Bold</span></div><div class="resource-card"><b>Cabin</b><span>SemiBold</span></div></section><section id="开发资源"><h2>开发资源</h2><p>基础令牌、字体声明与组件样式随网站持续维护。</p></section>` },
  '#/components/button': { crumb: '通用组件 / Button 按钮', title: 'Button 按钮', lead: '用于触发即时操作。按视觉样式选择按钮；页面同时展示默认与禁用示例，悬停和按下仅通过瞬时交互反馈。', toc: ['基础按钮', '下拉按钮', '特殊图形按钮', '组合按钮', '其它颜色按钮', '使用规则', 'API'], body: buttonBodyInteractiveV2() },
  '#/components/tag': { crumb: '通用组件 / Tag 标签', title: 'Tag 标签', lead: '用于标记对象的属性、分类或业务状态；按信息语义选择色调，只有可关闭标签提供移除操作。', toc: ['实色标签', '浅色标签', '边线标签', '可关闭标签', '使用规则', '无障碍', 'API'], body: tagBody() },
  '#/components/progress': { crumb: '数据展示 / Progress 进度条', title: 'Progress 进度条', lead: '用于展示任务的连续完成比例或未知时长的等待状态，不承担流程阶段导航。', toc: ['基础进度条', '尺寸与标签', '语义状态', '不确定进度', '使用规则', 'API'], body: progressBody() },
  '#/components/timeline': { crumb: '数据展示 / Timeline 时间轴', title: 'Timeline 时间轴', lead: '按时间顺序展示事件、操作记录与状态变更，适合审计记录、任务进展和业务历程。', toc: ['基础时间轴', '状态时间轴', '交替布局', '使用规则', '无障碍', 'API'], body: timelineBody() },
  '#/components/tree': { crumb: '数据展示 / Tree 树形结构', title: 'Tree 树形结构', lead: '用于展示具有父子层级的数据，并支持展开、选择与复选。', toc: ['基础树', '复选树', '交互与无障碍', '使用规则', 'API'], body: treeBody() },
  '#/components/switch': { crumb: '数据录入 / Switch 开关', title: 'Switch 开关', lead: '用于立即生效的二元开关设置；开启或关闭都应有清晰的文字说明。', toc: ['基础开关', '使用规则', 'API'], body: switchBody() },
  '#/components/radio': { crumb: '数据录入 / Radio 单选框', title: 'Radio 单选框', lead: '用于从互斥选项中选择一个值。', toc: ['基础单选框', '使用规则', 'API'], body: radioBody() },
  '#/components/checkbox': { crumb: '数据录入 / Checkbox 复选框', title: 'Checkbox 复选框', lead: '用于选择一个或多个独立选项，并支持半选状态表达部分选择。', toc: ['基础复选框', '使用规则', 'API'], body: checkboxBody() },
  '#/components/input': { crumb: '数据录入 / Input 输入框', title: 'Input 输入框', lead: '用于接收单行文本、密码、数字和结构化输入；通过统一尺寸、状态与辅助信息保持表单一致性。', toc: ['带标题输入框', '密码输入框', '装饰输入框', '数字输入框', '标签输入框', '范围输入框', '使用规则', '无障碍', 'API'], body: inputBodySimplified() },
  '#/components/search': { crumb: '数据录入 / Search 搜索框', title: 'Search 搜索框', lead: '用于从列表、资源或页面内容中快速定位目标。', toc: ['小搜索框', '大搜索框', '使用规则', '无障碍', 'API'], body: searchBody() },
  '#/components/picker': { crumb: '数据录入 / Select 选择器', title: 'Select 选择器', lead: '用于从预设选项中选择一个值，并支持单选、多选、级联选择与禁用状态。', toc: ['单选框', '多选框', '级联选框', '使用规则', '无障碍', 'API'], body: pickerBody() },
  '#/components/date-time-picker': { crumb: '数据录入 / Laydate 时间和日期选择器', title: '时间和日期选择器', lead: '用于选择时间、日期与日期时间范围，支持独立或联动面板。', toc: ['时间选择', '日期加时间选择', '日期选择', '年份选择', '使用规则', 'API'], body: dateTimePickerBodySingle() },
};
function paletteHtml() { return `<div class="color-groups">${palettes.map(([name, colors]) => `<div class="palette"><h3>${name}</h3><div class="swatches">${colors.map(([label, color]) => `<div class="swatch"><i style="background:${color}"></i><b>${label}</b><code>${color}</code></div>`).join('')}</div></div>`).join('')}</div>`; }
function typeContent() { return `<div class="spec-table"><div><b>中文</b><span>Alibaba PuHuiTi 3</span><span>Light / Regular / Medium / Bold / Heavy</span></div><div><b>英文</b><span class="cabin">Cabin</span><span>SemiBold</span></div><div><b>数字</b><span class="din">DINPro 1234567890</span><span>Regular / Medium / Bold</span></div></div><div class="type-list"><div><span>20 / 28 Medium</span><strong class="t20">这是一段文字</strong></div><div><span>18 / 26 Medium</span><strong class="t18">这是一段文字</strong></div><div><span>16 / 24 Regular</span><strong class="t16 regular">这是一段文字</strong></div><div><span>14 / 22 Regular</span><strong class="t14 regular">这是一段文字</strong></div><div><span>12 / 20 Regular</span><strong class="t12 regular">这是一段文字</strong></div></div>`; }
function typeBody() { return `<section id="字体家族"><h2>字体家族</h2>${typeContent().replace('<div class="type-list">', '</section><section id="字号层级"><h2>字号层级</h2><div class="type-list">')}</section>`; }
function layoutContent() { const spacing=[4,8,16,24,32]; const radius=[4,8,12,16]; const shadows=[['大阴影','var(--gs-shadow-lg)'],['小阴影','var(--gs-shadow-sm)'],['下浅阴影','var(--gs-shadow-bottom)']]; return `<div class="spacing-demo">${spacing.map(v=>`<div><i style="width:${v}px"></i><span>${v}px</span></div>`).join('')}</div><div class="radius-demo">${radius.map(v=>`<div><i style="border-radius:${v}px 0 0 0"></i><span>${v}px</span></div>`).join('')}</div><div class="shadow-demo">${shadows.map(([n,v])=>`<div><i style="box-shadow:${v}"></i><span>${n}</span></div>`).join('')}</div>`; }
function layoutBody() { const content=layoutContent(); return `<section id="间距"><h2>间距</h2>${content.split('<div class="radius-demo">')[0]}</section><section id="圆角"><h2>圆角</h2><div class="radius-demo">${content.split('<div class="radius-demo">')[1].split('<div class="shadow-demo">')[0]}</section><section id="阴影"><h2>阴影</h2><div class="shadow-demo">${content.split('<div class="shadow-demo">')[1]}</section>`; }
function designBody() { return `<section id="颜色"><h2>颜色</h2><p>以中性色建立内容层级，以主色表达操作与选择，以辅助色表达业务状态。</p>${paletteHtml()}</section><section id="文字"><h2>文字</h2>${typeContent()}</section><section id="布局与外观"><h2>布局与外观</h2>${layoutContent()}</section>`; }
function button(label, cls='', attrs='') {
  let content = label;
  if (cls.split(/\s+/).includes('gs-button--split')) {
    const text = label.replace(/\s*<i class="gs-button__chevron"><\/i>\s*/, '');
    content = `<span class="gs-button__label">${text}</span><span class="gs-button__split-box" aria-hidden="true"><i class="gs-button__divider"></i><i class="gs-button__chevron"></i></span>`;
  }
  return `<button type="button" class="gs-button ${cls}" ${attrs}>${content}</button>`;
}
// 输入框中的清空操作复用基础按钮的图形按钮结构；输入框只负责边缘布局，视觉状态统一由 button.css 管理。
function inputClearButton({ label = '清空输入', dataAttr = 'data-input-clear', disabled = false, hidden = false, search = false } = {}) {
  const classes = `gs-button--icon gs-button--text gs-input-clear${search ? ' gs-search-clear' : ''}`;
  const attrs = [
    `aria-label="${label}"`,
    dataAttr,
    disabled ? 'disabled' : '',
    hidden ? 'hidden' : '',
  ].filter(Boolean).join(' ');
  return button(gsIcon('close', 'gs-input-clear__icon'), classes, attrs);
}
function linkIconSvg() { return gsIcon('link', 'gs-icon-glyph'); }
function closeIconSvg() { return gsIcon('close', 'gs-tag__close-icon'); }
function tagCloseButton(label) {
  const safeLabel = escapeHtml(label);
  return button(closeIconSvg(), 'gs-button--icon gs-button--text gs-tag__close', `aria-label="移除${safeLabel}标签" data-tag-close`);
}
function escapeHtml(value='') { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function tagInputChip(label) { const safeLabel=escapeHtml(label); return `<span class="gs-tag gs-tag--neutral gs-tag--small gs-tag--closeable" data-tag-item><span class="gs-tag__label">${safeLabel}</span>${tagCloseButton(label)}</span>`; }
function buttonBody() { const colors=[['红色','red'],['橙色','orange'],['黄色','yellow'],['绿色','green'],['青色','cyan']]; const colorDemo=colors.map(([name,key])=>`<div class="color-button-line"><div class="demo-title">${name}</div><div class="button-row">${button('默认',`gs-button--${key}`)}${button('悬停',`gs-button--${key} is-hover`)}${button('按下',`gs-button--${key} is-pressed`)}${button('禁用',`gs-button--${key}`,'disabled')}</div></div>`).join(''); return `<section id="基础按钮"><h2>基础按钮</h2><p>主按钮用于局部区域的主操作；次按钮用于并列的次要操作。标准高度为 32px，圆角 4px，文字为 14/22px。</p><div class="demo-card"><div class="demo-title">主按钮</div><div class="button-row">${button('按钮')}${button('悬停','is-hover')}${button('按下','is-pressed')}${button('禁用','','disabled')}</div></div><div class="demo-card"><div class="demo-title">次按钮</div><div class="button-row">${button('按钮','gs-button--secondary')}${button('悬停','gs-button--secondary is-hover')}${button('选中','gs-button--secondary is-pressed')}${button('禁用','gs-button--secondary','disabled')}</div></div></section><section id="下拉按钮"><h2>下拉按钮</h2><p>当主要操作包含相关备选操作时使用。箭头只表示可展开，不替代明确的操作命名。</p><div class="demo-card"><div class="demo-title">下拉按钮</div><div class="button-row">${button('新建 <i class="gs-button__chevron"></i>')}${button('更多 <i class="gs-button__chevron"></i>','gs-button--secondary')}</div></div></section><section id="图形按钮"><h2>图形按钮</h2><p>图形按钮尺寸为 32 × 32px，图标为 20px。正式产品中必须提供可理解的图标和 <code>aria-label</code>。</p><div class="demo-card"><div class="demo-title">图形按钮</div><div class="button-row">${button('＋','gs-button--icon','aria-label="新增"')}${button('⌕','gs-button--icon gs-button--secondary','aria-label="搜索"')}${button('⋯','gs-button--icon gs-button--secondary','aria-label="更多操作"')}</div></div></section><section id="组合按钮"><h2>组合按钮</h2><p>用于相邻、相关的模式或操作。组只保留最外侧圆角，内部共享边框。</p><div class="demo-card"><div class="demo-title">组合按钮</div><div class="gs-button-group">${button('默认','gs-button--secondary')}${button('悬停','gs-button--secondary is-hover')}${button('选中','gs-button--secondary is-pressed')}${button('禁用','gs-button--secondary','disabled')}</div></div></section><section id="其它颜色按钮"><h2>其它颜色按钮</h2><p>Figma 定义五种颜色：红、橙、黄、绿、青。直接使用基础规范的颜色阶：<code>/2</code> 默认、<code>/3</code> 悬停、<code>/1</code> 按下、<code>/4</code> 禁用。</p><div class="demo-card color-button-grid">${colorDemo}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一操作区域最多保留一个主按钮。</li><li>其它色按钮用于稳定的领域语义，不能仅用来装饰工具栏。</li><li>没有清晰语义的图标，不得单独作为图形按钮。</li><li>禁用状态不可响应点击；若原因不明显，应在附近给予说明。</li><li>焦点状态必须保留，确保键盘操作可用。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>primary | secondary | color</span><span>按钮类型，默认 primary</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>icon</code><span>node</span><span>图标内容；图形按钮需辅助名称</span></div><div><code>loading</code><span>boolean</span><span>提交中状态，阻止重复触发</span></div></div></section>`; }
function legacyButtonBody() {
  const states = (classes='') => `<div class="button-state-row">${button('按钮',classes)}${button('按钮',`${classes} is-hover`)}${button('按钮',`${classes} is-pressed`)}${button('按钮',classes,'disabled')}</div>`;
  const dropdown = (classes='') => `<div class="button-state-row">${button('按钮 <i class="gs-button__chevron"></i>',classes)}${button('按钮 <i class="gs-button__chevron"></i>',`${classes} is-hover`)}${button('按钮 <i class="gs-button__chevron"></i>',`${classes} is-pressed`)}${button('按钮 <i class="gs-button__chevron"></i>',classes,'disabled')}</div>`;
  const iconTextStates = () => `<div class="button-state-row">${button(`${linkIconSvg()}按钮`,'gs-button--with-icon')}${button(`${linkIconSvg()}按钮`,'gs-button--with-icon is-hover')}${button(`${linkIconSvg()}按钮`,'gs-button--with-icon is-pressed')}${button(`${linkIconSvg()}按钮`,'gs-button--with-icon','disabled')}</div>`;
  const colors=[['红色（异常）','red'],['橙色（注意）','orange'],['黄色（提示）','yellow'],['绿色（正常）','green'],['青色（其它）','cyan']];
  const colorDemo=colors.map(([name,key])=>`<div class="color-button-line"><div class="demo-title">${name}</div>${states(`gs-button--${key}`)}</div>`).join('');
  const icon = (cls='', attrs='') => button(linkIconSvg(),`gs-button--icon ${cls}`,`aria-label="链接" ${attrs}`);
  const specialStyles=[['主色填充',''],['中性填充','gs-button--neutral'],['描边','gs-button--secondary'],['文字','gs-button--text']];
  return `<section id="基础按钮"><h2>基础按钮</h2><p>按操作优先级选择外观。每一种外观均必须覆盖默认、悬停、按下、禁用四种状态。</p><div class="demo-card button-matrix"><div class="matrix-head"><span>类型</span><span>默认</span><span>悬停</span><span>按下</span><span>禁用</span></div><div class="matrix-line"><b>主按钮</b>${states()}</div><div class="matrix-line"><b>灰色按钮</b>${states('gs-button--neutral')}</div><div class="matrix-line"><b>描边按钮</b>${states('gs-button--secondary')}</div><div class="matrix-line"><b>虚线按钮</b>${states('gs-button--dashed')}</div><div class="matrix-line"><b>文字按钮</b>${states('gs-button--text')}</div><div class="matrix-line"><b>主色文字</b>${states('gs-button--text-primary')}</div><div class="matrix-line"><b>图标文字</b>${states('gs-button--with-icon')}</div></div></section><section id="下拉按钮"><h2>下拉按钮</h2><p>用于主操作附带关联操作的场景；可选普通下拉或带分隔线的拆分下拉。</p><div class="demo-card button-matrix"><div class="matrix-head"><span>类型</span><span>默认</span><span>悬停</span><span>激活</span><span>禁用</span></div><div class="matrix-line"><b>主色下拉</b>${dropdown()}</div><div class="matrix-line"><b>灰色下拉</b>${dropdown('gs-button--neutral')}</div><div class="matrix-line"><b>描边下拉</b>${dropdown('gs-button--secondary')}</div><div class="matrix-line"><b>虚线下拉</b>${dropdown('gs-button--dashed')}</div><div class="matrix-line"><b>文字下拉</b>${dropdown('gs-button--text-primary')}</div><div class="matrix-line"><b>拆分下拉</b>${dropdown('gs-button--split')}</div></div></section><section id="特殊图形按钮"><h2>特殊图形按钮</h2><p>图形按钮仅用于已有明确语义的操作。采用 Figma 原始链接图标，尺寸为 32 × 32px。</p><div class="demo-card icon-variant-grid">${specialStyles.map(([name,cls])=>`<div class="icon-variant"><div class="demo-title">${name}</div><div class="button-state-row">${icon(cls)}${icon(`${cls} is-hover`)}${icon(`${cls} is-pressed`)}${icon(cls,'disabled')}</div></div>`).join('')}</div></section><section id="组合按钮"><h2>组合按钮</h2><p>把互斥的选项或紧密相关操作组合起来；仅保留两端圆角，内部共享边框。</p><div class="demo-card group-stack"><div><div class="demo-title">描边文字组</div><div class="gs-button-group">${button('默认按钮','gs-button--secondary')}${button('悬停按钮','gs-button--secondary is-hover')}${button('选中按钮','gs-button--secondary is-pressed')}${button('默认禁用','gs-button--secondary','disabled')}${button('选中禁用','gs-button--secondary is-disabled is-pressed','disabled')}</div></div><div><div class="demo-title">无边框文字组</div><div class="gs-button-group gs-button-group--text">${button('默认按钮','gs-button--text')}${button('悬停按钮','gs-button--text-primary')}${button('选中按钮','gs-button--text-primary is-pressed')}${button('默认禁用','gs-button--text','disabled')}${button('选中禁用','gs-button--text-primary','disabled')}</div></div><div><div class="demo-title">图形组</div><div class="gs-button-group gs-button-group--icon">${['','is-hover','is-pressed','',''].map((state,i)=>icon(`gs-button--secondary ${state}`,i>2?'disabled':'')).join('')}</div></div></div></section><section id="其它颜色按钮"><h2>其它颜色按钮</h2><p>仅包含五种语义色：红（异常）、橙（注意）、黄（提示）、绿（正常）、青（其它）。按颜色令牌 <code>/2</code>、<code>/3</code>、<code>/1</code>、<code>/4</code> 映射默认、悬停、按下、禁用。</p><div class="demo-card color-button-grid">${colorDemo}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一操作区域最多保留一个主按钮。</li><li>其它色按钮仅用于稳定的领域语义，不能仅用作装饰。</li><li>图形按钮必须有清晰的图标和辅助名称。</li><li>禁用状态不可响应点击；若原因不明显，应在附近给予说明。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>primary | neutral | secondary | dashed | text | color</span><span>按钮外观</span></div><div><code>dropdown</code><span>boolean | split</span><span>下拉或拆分下拉</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>icon</code><span>node</span><span>图标内容；需提供辅助名称</span></div></div></section>`;
}
function buttonBodyCurrent() {
  const dropdownStates = (style='', split=false) => {
    const classes = `${style}${split ? ' gs-button--split' : ''}`.trim();
    const content = '按钮 <i class="gs-button__chevron"></i>';
    return `<div class="button-state-row">${button(content,classes)}${button(content,`${classes} is-hover`)}${button(content,`${classes} is-pressed`)}${button(content,classes,'disabled')}</div>`;
  };
  const dropdownSection = `<section id="下拉按钮"><h2>下拉按钮</h2><p>下拉按钮按视觉外观与结构拆分展示。每种外观均提供普通下拉和带分隔线的拆分下拉，并覆盖默认、悬停、激活、禁用状态。</p><div class="demo-card button-matrix"><div class="matrix-head"><span>类型</span><span>默认</span><span>悬停</span><span>激活</span><span>禁用</span></div><div class="matrix-line"><b>主色下拉</b>${dropdownStates()}</div><div class="matrix-line"><b>主色拆分下拉</b>${dropdownStates('',true)}</div><div class="matrix-line"><b>灰色下拉</b>${dropdownStates('gs-button--neutral')}</div><div class="matrix-line"><b>灰色拆分下拉</b>${dropdownStates('gs-button--neutral',true)}</div><div class="matrix-line"><b>描边下拉</b>${dropdownStates('gs-button--secondary')}</div><div class="matrix-line"><b>描边拆分下拉</b>${dropdownStates('gs-button--secondary',true)}</div><div class="matrix-line"><b>文字下拉</b>${dropdownStates('gs-button--text-primary')}</div><div class="matrix-line"><b>文字拆分下拉</b>${dropdownStates('gs-button--text-primary',true)}</div></div></section>`;
  return legacyButtonBody().replace(/<section id="下拉按钮">[\s\S]*?<\/section><section id="特殊图形按钮">/, `${dropdownSection}<section id="特殊图形按钮">`);
}
function buttonBodyLegacyMatrix() {
  const dropdownStates = (style='', split=false) => { const cls=`${style}${split?' gs-button--split':''}`.trim(); const label='按钮 <i class="gs-button__chevron"></i>'; return `<div class="button-state-row">${button(label,cls)}${button(label,`${cls} is-hover`)}${button(label,`${cls} is-pressed`)}${button(label,cls,'disabled')}</div>`; };
  const iconButton = (style='', radius=4, state='', disabled=false) => { const cls=`gs-button--icon gs-icon-radius-${radius} ${style} ${state}`.trim(); return button(linkIconSvg(),cls,`${disabled?'disabled ':''}aria-label="链接"`); };
  const iconStates = (style='', radius=4) => `<div class="icon-state-row">${iconButton(style,radius)}${iconButton(style,radius,'is-hover')}${iconButton(style,radius,'is-pressed')}${iconButton(style,radius,'',true)}</div>`;
  const iconStyles=[['主色填充',''],['中性填充','gs-button--neutral'],['描边','gs-button--secondary'],['文字','gs-button--text']];
  const radii=[4,8,12,16];
  const special=`<section id="特殊图形按钮"><h2>特殊图形按钮</h2><p>按 Figma 的真实排列展示：每个圆角规格一组，状态纵向排列，每行依次为主色填充、中性填充、描边、文字四种外观。</p><div class="demo-card icon-matrix"><div class="icon-radius-grid">${radii.map(radius=>`<div class="icon-radius-block"><div class="icon-radius-label">圆角 ${radius}px</div><div class="icon-state-head"><span>状态</span>${iconStyles.map(([name])=>`<span>${name}</span>`).join('')}</div>${[['默认',''],['悬停','is-hover'],['按下','is-pressed'],['禁用','',true]].map(([name,state,disabled])=>`<div class="icon-state-line"><b>${name}</b>${iconStyles.map(([,style])=>iconButton(style,radius,state,disabled)).join('')}</div>`).join('')}</div>`).join('')}</div></div></section>`;
  const groupText = (classes='') => `<div class="gs-button-group ${classes}">${button('默认按钮','gs-button--secondary')}${button('悬停按钮','gs-button--secondary is-hover')}${button('选中按钮','gs-button--secondary is-pressed')}${button('默认禁用','gs-button--secondary','disabled')}${button('选中禁用','gs-button--secondary is-pressed','disabled')}</div>`;
  const textGroup = `<div class="gs-button-group gs-button-group--text">${button('默认按钮','gs-button--text')}${button('悬停按钮','gs-button--text-primary')}${button('选中按钮','gs-button--text-primary is-pressed')}${button('默认禁用','gs-button--text','disabled')}${button('选中禁用','gs-button--text-primary','disabled')}</div>`;
  const iconGroup = `<div class="gs-button-group gs-button-group--icon">${iconButton('gs-button--secondary')}${iconButton('gs-button--secondary',4,'is-hover')}${iconButton('gs-button--secondary',4,'is-pressed')}${iconButton('gs-button--secondary',4,'',true)}${iconButton('gs-button--secondary',4,'is-pressed',true)}</div>`;
  const groups=`<section id="组合按钮"><h2>组合按钮</h2><p>按 Figma 定义展示描边文字组、无边框文字组和图形组。文字组均包含默认、悬停、选中、默认禁用、选中禁用。</p><div class="demo-card group-layout"><div class="group-item group-item-outline"><div class="demo-title">描边文字组</div>${groupText()}</div><div class="group-item group-item-text"><div class="demo-title">无边框文字组</div>${textGroup}</div><div class="group-item group-item-icon"><div class="demo-title">图形组</div>${iconGroup}</div></div></section>`;
  const dropdown=`<section id="下拉按钮"><h2>下拉按钮</h2><p>下拉按钮按视觉外观与结构拆分展示：主色、灰色、描边、文字四种外观，各自有普通与拆分下拉，并覆盖默认、悬停、激活、禁用状态。</p><div class="demo-card button-matrix"><div class="matrix-head"><span>类型</span><span>默认</span><span>悬停</span><span>激活</span><span>禁用</span></div><div class="matrix-line"><b>主色下拉</b>${dropdownStates()}</div><div class="matrix-line"><b>主色拆分下拉</b>${dropdownStates('',true)}</div><div class="matrix-line"><b>灰色下拉</b>${dropdownStates('gs-button--neutral')}</div><div class="matrix-line"><b>灰色拆分下拉</b>${dropdownStates('gs-button--neutral',true)}</div><div class="matrix-line"><b>描边下拉</b>${dropdownStates('gs-button--secondary')}</div><div class="matrix-line"><b>描边拆分下拉</b>${dropdownStates('gs-button--secondary',true)}</div><div class="matrix-line"><b>文字下拉</b>${dropdownStates('gs-button--text-primary')}</div><div class="matrix-line"><b>文字拆分下拉</b>${dropdownStates('gs-button--text-primary',true)}</div></div></section>`;
  return legacyButtonBody().replace(/<section id="下拉按钮">[\s\S]*?<\/section><section id="特殊图形按钮">[\s\S]*?<\/section><section id="组合按钮">[\s\S]*?<\/section><section id="其它颜色按钮">/, `${dropdown}${special}${groups}<section id="其它颜色按钮">`);
}
function buttonBody() {
  const states = [['默认',''],['悬停','is-hover'],['按下','is-pressed'],['禁用','',true]];
  const iconText = (state='', disabled=false) => button(`${linkIconSvg()}按钮`,`gs-button--with-icon ${state}`,disabled?'disabled':'');
  const column = (title, cls='', content='按钮', split=false) => `<span class="button-spec-title">${title}</span>${states.map(([label,state,disabled])=>`<span class="button-spec-cell">${content==='icon' ? iconText(state,disabled) : button(split ? '按钮 <i class="gs-button__chevron"></i>' : content,`${cls} ${state}`.trim(),disabled?'disabled':'')}</span>`).join('')}`;
  const basic = `<section id="基础按钮"><h2>基础按钮</h2><p>按操作优先级选择外观。每一种外观均必须覆盖默认、悬停、按下、禁用四种状态。</p><div class="demo-card button-spec-grid"><div class="button-spec-row button-spec-head"><span class="button-spec-state"></span>${column('主按钮').split('</span>').slice(0,1).join('</span>')}${column('灰色按钮','gs-button--neutral').split('</span>').slice(0,1).join('</span>')}${column('描边按钮','gs-button--secondary').split('</span>').slice(0,1).join('</span>')}${column('虚线按钮','gs-button--dashed').split('</span>').slice(0,1).join('</span>')}${column('文字按钮','gs-button--text').split('</span>').slice(0,1).join('</span>')}${column('主色文字','gs-button--text-primary').split('</span>').slice(0,1).join('</span>')}${column('图标文字','','icon').split('</span>').slice(0,1).join('</span>')}</div>${states.map(([label,state,disabled])=>`<div class="button-spec-row"><span class="button-spec-state">${label}</span><span>${button('按钮',state,disabled?'disabled':'')}</span><span>${button('按钮',`gs-button--neutral ${state}`,disabled?'disabled':'')}</span><span>${button('按钮',`gs-button--secondary ${state}`,disabled?'disabled':'')}</span><span>${button('按钮',`gs-button--dashed ${state}`,disabled?'disabled':'')}</span><span>${button('按钮',`gs-button--text ${state}`,disabled?'disabled':'')}</span><span>${button('按钮',`gs-button--text-primary ${state}`,disabled?'disabled':'')}</span><span>${iconText(state,disabled)}</span></div>`).join('')}</div></section>`;
  const dropdownTypes=[['主色下拉','',false],['主色拆分下拉','',true],['灰色下拉','gs-button--neutral',false],['灰色拆分下拉','gs-button--neutral',true],['描边下拉','gs-button--secondary',false],['描边拆分下拉','gs-button--secondary',true],['文字下拉','gs-button--text-primary',false],['文字拆分下拉','gs-button--text-primary',true]];
  const dropdown = `<section id="下拉按钮"><h2>下拉按钮</h2><p>每种下拉外观均按 Figma 的普通与拆分结构展示，并覆盖默认、悬停、激活、禁用状态。</p><div class="demo-card button-spec-grid dropdown-spec-grid"><div class="button-spec-row button-spec-head"><span class="button-spec-state"></span>${dropdownTypes.map(([title])=>`<span class="button-spec-title">${title}</span>`).join('')}</div>${states.map(([label,state,disabled])=>`<div class="button-spec-row"><span class="button-spec-state">${label==='按下'?'激活':label}</span>${dropdownTypes.map(([,cls,split])=>`<span>${button('按钮 <i class="gs-button__chevron"></i>',`${cls}${split?' gs-button--split':''} ${state}`.trim(),disabled?'disabled':'')}</span>`).join('')}</div>`).join('')}</div></section>`;
  return buttonBodyCurrent().replace(/<section id="基础按钮">[\s\S]*?<\/section><section id="下拉按钮">/, `${basic}${dropdown}`).replace(/<section id="下拉按钮">[\s\S]*?<\/section><section id="特殊图形按钮">/, `${dropdown}<section id="特殊图形按钮">`);
}
function buttonBodyFinal() {
  const states = [['默认',''],['悬停','is-hover'],['按下','is-pressed'],['禁用','',true]];
  const iconText = (state='', disabled=false) => button(`${linkIconSvg()}按钮`,`gs-button--with-icon ${state}`,disabled?'disabled':'');
  const variants=[['主按钮',''],['灰色按钮','gs-button--neutral'],['描边按钮','gs-button--secondary'],['虚线按钮','gs-button--dashed'],['文字按钮','gs-button--text'],['主色文字','gs-button--text-primary']];
  const basic=`<section id="基础按钮"><h2>基础按钮</h2><p>按钮类型横向排列，默认、悬停、按下、禁用状态纵向排列，与 Figma 模块保持一致。</p><div class="demo-card button-spec-grid"><div class="button-spec-row button-spec-head"><span class="button-spec-state"></span>${variants.map(([name])=>`<span class="button-spec-title">${name}</span>`).join('')}<span class="button-spec-title">图标文字</span></div>${states.map(([label,state,disabled])=>`<div class="button-spec-row"><span class="button-spec-state">${label}</span>${variants.map(([,cls])=>`<span>${button('按钮',`${cls} ${state}`.trim(),disabled?'disabled':'')}</span>`).join('')}<span>${iconText(state,disabled)}</span></div>`).join('')}</div></section>`;
  const dropdownTypes=[['主色下拉','',false],['主色拆分下拉','',true],['灰色下拉','gs-button--neutral',false],['灰色拆分下拉','gs-button--neutral',true],['描边下拉','gs-button--secondary',false],['描边拆分下拉','gs-button--secondary',true],['文字下拉','gs-button--text-primary',false],['文字拆分下拉','gs-button--text-primary',true]];
  const dropdown=`<section id="下拉按钮"><h2>下拉按钮</h2><p>每种下拉外观均按普通与拆分结构展示，并覆盖默认、悬停、激活、禁用状态。</p><div class="demo-card button-spec-grid dropdown-spec-grid"><div class="button-spec-row button-spec-head"><span class="button-spec-state"></span>${dropdownTypes.map(([name])=>`<span class="button-spec-title">${name}</span>`).join('')}</div>${states.map(([label,state,disabled])=>`<div class="button-spec-row"><span class="button-spec-state">${label==='按下'?'激活':label}</span>${dropdownTypes.map(([,cls,split])=>`<span>${button('按钮 <i class="gs-button__chevron"></i>',`${cls}${split?' gs-button--split':''} ${state}`.trim(),disabled?'disabled':'')}</span>`).join('')}</div>`).join('')}</div></section>`;
  return `${basic}${dropdown}${buttonBodyLegacyMatrix().replace(/^[\s\S]*?<section id="特殊图形按钮">/, '<section id="特殊图形按钮">')}`;
}
function buttonBodyInteractive() {
  const iconPair = linkIconSvg();
  const live = (label, cls='', html=label, attrs='') => `<div class="live-style-item"><span class="style-label">${label}</span>${button(html, cls, attrs)}</div>`;
  const dropdownButton = (label) => `${label} <i class="gs-button__chevron"></i>`;
  const iconButton = (radius, cls='', disabled=false) => button(iconPair, `gs-button--icon gs-icon-radius-${radius} ${cls}`.trim(), `aria-label="链接"${disabled ? ' disabled' : ''}`);
  const basicVariants = [
    live('主色填充', '', '按钮'),
    live('中性填充', 'gs-button--neutral', '按钮'),
    live('描边', 'gs-button--secondary', '按钮'),
    live('虚线', 'gs-button--dashed', '按钮'),
    live('文字', 'gs-button--text', '按钮'),
    live('主色文字', 'gs-button--text-primary', '按钮'),
    live('图标文字', 'gs-button--icon-text', `${iconPair}按钮`),
  ].join('');
  const dropdownVariants = [
    live('主色下拉', '', dropdownButton('按钮')),
    live('主色拆分下拉', 'gs-button--split', dropdownButton('按钮')),
    live('中性下拉', 'gs-button--neutral', dropdownButton('按钮')),
    live('中性拆分下拉', 'gs-button--neutral gs-button--split', dropdownButton('按钮')),
    live('描边下拉', 'gs-button--secondary', dropdownButton('按钮')),
    live('描边拆分下拉', 'gs-button--secondary gs-button--split', dropdownButton('按钮')),
    live('文字下拉', 'gs-button--text-primary', dropdownButton('按钮')),
    live('文字拆分下拉', 'gs-button--text-primary gs-button--split', dropdownButton('按钮')),
  ].join('');
  const special = [4, 8, 12, 16].map(radius => `<div class="special-style-card"><h3>${radius}px 圆角</h3><div class="special-style-grid">${live('主色填充', `gs-button--icon gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}${live('中性填充', `gs-button--icon gs-button--neutral gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}${live('描边', `gs-button--icon gs-button--secondary gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}${live('文字', `gs-button--icon gs-button--text-primary gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}</div></div>`).join('');
  const outlineGroup = `<div class="gs-button-group">${button('默认按钮','gs-button--secondary')}${button('选中按钮','gs-button--secondary is-pressed')}${button('更多','gs-button--secondary')}</div>`;
  const textGroup = `<div class="gs-button-group gs-button-group--text">${button('默认按钮','gs-button--text')}${button('选中按钮','gs-button--text-primary is-pressed')}${button('更多','gs-button--text-primary')}</div>`;
  const filledGroup = `<div class="gs-button-group gs-button-group--filled">${button('默认按钮','gs-button--neutral')}${button('选中按钮','gs-button--neutral is-pressed')}${button('更多','gs-button--neutral')}</div>`;
  const iconGroup = `<div class="gs-button-group gs-button-group--icon">${iconButton(4,'gs-button--secondary')}${iconButton(4,'gs-button--text-primary is-pressed')}${iconButton(4,'gs-button--secondary')}${iconButton(4,'gs-button--secondary',true)}</div>`;
  const colors = [['红色（异常）','red'],['橙色（注意）','orange'],['黄色（提示）','yellow'],['绿色（正常）','green'],['青色（其它）','cyan']].map(([label, cls]) => live(label, `gs-button--${cls}`, '按钮')).join('');
  return `<section id="基础按钮"><h2>基础按钮</h2><p>按操作优先级选择外观。每种样式只展示一个可交互示例，悬停、按下、焦点和禁用规则由组件本身处理。</p><div class="demo-card live-demo-card"><div class="live-style-grid">${basicVariants}</div><p class="interactive-note">将鼠标移入或点击按钮查看交互反馈。</p></div></section><section id="下拉按钮"><h2>下拉按钮</h2><p>下拉按钮提供普通下拉和带分隔线的拆分下拉，两种结构均覆盖主色、中性、描边和文字外观。</p><div class="demo-card live-demo-card"><div class="live-style-grid dropdown-live-grid">${dropdownVariants}</div></div></section><section id="特殊图形按钮"><h2>特殊图形按钮</h2><p>图形按钮采用 Figma 链接图标，统一为 32 × 32px；仅改变圆角和视觉外观，不重复铺列全部状态。</p><div class="demo-card special-live-grid">${special}</div></section><section id="组合按钮"><h2>组合按钮</h2><p>把互斥选项或紧密相关操作组合起来，仅保留两端圆角，内部共享边框。</p><div class="demo-card group-layout interactive-groups"><div class="group-item"><h3>描边文字组</h3>${outlineGroup}</div><div class="group-item"><h3>无边框文字组</h3>${textGroup}</div><div class="group-item"><h3>中性填充组</h3>${filledGroup}</div><div class="group-item"><h3>图形组</h3>${iconGroup}</div></div></section><section id="其它颜色按钮"><h2>其它颜色按钮</h2><p>仅包含 Figma 定义的五种语义色：红、橙、黄、绿、青。</p><div class="demo-card live-demo-card"><div class="live-style-grid semantic-live-grid">${colors}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一操作区域最多保留一个主按钮。</li><li>按钮状态通过悬停、按下、焦点和禁用交互反馈表达，无需在页面重复罗列。</li><li>图形按钮必须有清晰的图标和辅助名称。</li><li>其它颜色只表达稳定的业务语义，不作为装饰。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>primary | neutral | secondary | dashed | text | color</span><span>按钮外观</span></div><div><code>dropdown</code><span>boolean | split</span><span>普通下拉或拆分下拉</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>icon</code><span>node</span><span>图标内容；需提供辅助名称</span></div></div></section>`;
}
function buttonBodyInteractiveV2() {
  const iconPair = linkIconSvg();
  const sample = (label, cls='', html='按钮', attrs='') => `<div class="live-style-item"><span class="style-label">${label}</span><div class="button-pair">${button(html, cls, attrs)}${button(html, cls, `${attrs} disabled`.trim())}</div></div>`;
  const dropdownHtml = '按钮 <i class="gs-button__chevron"></i>';
  const longDropdownHtml = '四字按钮 <i class="gs-button__chevron"></i>';
  const basic = [
    sample('主色填充', '', '按钮'), sample('中性填充', 'gs-button--neutral'), sample('描边', 'gs-button--secondary'), sample('虚线', 'gs-button--dashed'),
    sample('文字', 'gs-button--text'), sample('主色文字', 'gs-button--text-primary'), sample('图标文字', 'gs-button--icon-text', `${iconPair}按钮`),
  ].join('');
  const dropdown = [
    sample('主色下拉', '', dropdownHtml), sample('主色拆分下拉', 'gs-button--split', longDropdownHtml), sample('中性下拉', 'gs-button--neutral', dropdownHtml), sample('中性拆分下拉', 'gs-button--neutral gs-button--split', dropdownHtml),
    sample('描边下拉', 'gs-button--secondary', dropdownHtml), sample('描边拆分下拉', 'gs-button--secondary gs-button--split', dropdownHtml), sample('文字下拉', 'gs-button--text', dropdownHtml), sample('文字拆分下拉', 'gs-button--text gs-button--split', dropdownHtml),
  ].join('');
  const special = [4, 8, 12, 16].map(radius => `<div class="special-style-card"><h3>${radius}px 圆角</h3><div class="special-style-grid">${sample('主色填充', `gs-button--icon gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}${sample('中性填充', `gs-button--icon gs-button--neutral gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}${sample('描边', `gs-button--icon gs-button--secondary gs-icon-radius-${radius}`, iconPair, 'aria-label="链接"')}</div></div>`).join('');
  const specialText = `<div class="special-style-card special-text-card"><h3>无底色图形按钮</h3><p>无底色图形按钮没有容器圆角差异，因此只保留一组默认与禁用示例。</p><div class="special-style-grid">${sample('无底色', 'gs-button--icon gs-button--text', iconPair, 'aria-label="链接"')}</div></div>`;
  const combinationTextItems = `<button type="button" class="gs-combination__item">默认按钮</button><button type="button" class="gs-combination__item is-hover">悬停按钮</button><button type="button" class="gs-combination__item is-selected" aria-pressed="true">选中按钮</button><button type="button" class="gs-combination__item" disabled>默认禁用</button><button type="button" class="gs-combination__item is-selected" aria-pressed="true" disabled>选中禁用</button>`;
  const combinationIconItems = [['默认',''],['悬停','is-hover'],['选中','is-selected'],['默认禁用','is-disabled'],['选中禁用','is-selected is-disabled']].map(([label,state])=>`<button type="button" class="gs-combination__item ${state}" aria-label="${label}"${state.includes('is-selected') ? ' aria-pressed="true"' : ''}${state.includes('is-disabled') ? ' disabled' : ''}>${iconPair}</button>`).join('');
  const groups = `<div class="combination-showcase"><div class="combination-example"><h3>文字边线</h3><div class="gs-combination gs-combination--outline" aria-label="文字边线组合按钮">${combinationTextItems}</div></div><div class="combination-example"><h3>文字面状</h3><div class="gs-combination gs-combination--filled" aria-label="文字面状组合按钮">${combinationTextItems}</div></div><div class="combination-example"><h3>文字无边线</h3><div class="gs-combination gs-combination--text" aria-label="文字无边线组合按钮">${combinationTextItems}</div></div><div class="combination-example"><h3>图标面状</h3><div class="gs-combination gs-combination--icon" aria-label="图标面状组合按钮">${combinationIconItems}</div></div></div>`;
  const colors = [['红色（异常）','red'],['橙色（注意）','orange'],['黄色（提示）','yellow'],['绿色（正常）','green'],['青色（其它）','cyan']].map(([label, cls]) => sample(label, `gs-button--${cls}`)).join('');
  return `<section id="基础按钮"><h2>基础按钮</h2><p>每种样式展示默认与禁用两个示例；鼠标悬停或按下时查看瞬时反馈，不产生持久选中状态。</p><div class="demo-card live-demo-card"><div class="live-style-grid">${basic}</div></div></section><section id="下拉按钮"><h2>下拉按钮</h2><p>普通下拉和拆分下拉分别覆盖主色、中性、描边和文字外观。</p><div class="demo-card live-demo-card"><div class="live-style-grid dropdown-live-grid">${dropdown}</div></div></section><section id="特殊图形按钮"><h2>特殊图形按钮</h2><p>图形按钮统一为 32 × 32px。主色填充、中性填充和描边按容器圆角展示；无底色图形按钮只展示一次。</p><div class="demo-card special-live-grid">${special}${specialText}</div></section><section id="组合按钮"><h2>组合按钮</h2><p>严格按照 Figma 展示文字边线、文字无边线、文字面状和图标面状四类，以及默认、悬停、选中、默认禁用和选中禁用状态。</p><div class="demo-card combination-demo-card">${groups}</div></section><section id="其它颜色按钮"><h2>其它颜色按钮</h2><p>仅包含 Figma 定义的五种语义色，并分别提供默认与禁用示例。</p><div class="demo-card live-demo-card"><div class="live-style-grid semantic-live-grid">${colors}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一操作区域最多保留一个主按钮。</li><li>页面不设置持久化选中按钮；按下反馈只在交互期间出现。</li><li>禁用按钮不可响应点击，并使用对应禁用色阶。</li><li>图形按钮必须有清晰的图标和辅助名称。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>primary | neutral | secondary | dashed | text | color</span><span>按钮外观</span></div><div><code>dropdown</code><span>boolean | split</span><span>普通下拉或拆分下拉</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>icon</code><span>node</span><span>图标内容；需提供辅助名称</span></div></div></section>`;
}
function tag(label, tone, size='medium', closeable=false) { const close = closeable ? tagCloseButton(label) : ''; return `<span class="gs-tag gs-tag--${tone} gs-tag--${size}${closeable ? ' gs-tag--outline gs-tag--closeable' : ''}" data-tag-item><span class="gs-tag__label">${label}</span>${close}</span>`; }
function tagSet(variant, size) { const tones=[['告警','red'],['警告','orange'],['提示','yellow'],['正常','green'],['其它','cyan'],['主色','primary'],['中性','neutral']]; return tones.map(([label,tone])=>variant==='closable' ? tag(label,tone,size,true) : `<span class="gs-tag gs-tag--${tone} gs-tag--${size}${variant==='outline' ? ' gs-tag--outline' : variant==='light' ? ' gs-tag--light' : ''}"><span class="gs-tag__label">${label}</span></span>`).join(''); }
function tagDemo(variant, interactive=false) { const content = `<div class="tag-size-row"><span class="tag-size-label">24px</span><div class="tag-flow">${tagSet(variant,'medium')}</div></div><div class="tag-size-row"><span class="tag-size-label">20px</span><div class="tag-flow">${tagSet(variant,'small')}</div></div>`; return `<div class="demo-card tag-demo-card"${interactive ? ' data-tag-demo' : ''}>${content}${interactive ? '<div class="tag-demo-actions"><button type="button" class="gs-button gs-button--text-primary" data-tag-reset>恢复示例</button><span class="tag-live-status" data-tag-live role="status" aria-live="polite"></span></div>' : ''}</div>`; }
function tagBody() { return `<section id="实色标签"><h2>实色标签</h2><p>用于需要较强识别度的分类或状态。标签提供 24px 与 20px 两档高度，统一为 4px 圆角和 Alibaba PuHuiTi 3 14/22px Regular 文本。</p>${tagDemo('solid')}</section><section id="浅色标签"><h2>浅色标签</h2><p>用于需要保留状态色、但不希望边框干扰信息密度的场景；使用对应色调的浅色背景和同色文字。</p>${tagDemo('light')}</section><section id="边线标签"><h2>边线标签</h2><p>用于信息密度较高、需要降低视觉重量的场景；背景使用对应色调的浅色阶。</p>${tagDemo('outline')}</section><section id="可关闭标签"><h2>可关闭标签</h2><p>仅在用户可以移除该属性或筛选条件时使用。点击关闭图标会移除当前标签，可通过“恢复示例”再次检查。</p>${tagDemo('closable',true)}</section><section id="使用规则"><h2>使用规则</h2><ul><li>告警、警告、提示、正常仅用于对应业务语义；“其它”承载没有专门语义色的分类。</li><li>主色用于品牌或关键分类，中性色用于普通属性，不用多色标签装饰界面。</li><li>同一标签列表统一尺寸；内容过长时优先精简文案，不把标签做成段落。</li><li>普通标签是只读信息，不显示手型光标，也不承担按钮或筛选开关的职责。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>业务状态不能只依赖颜色，保留“告警、正常”等可见文字。</li><li>关闭图标使用真实按钮，提供“移除某标签”的辅助名称，可由键盘聚焦和触发。</li><li>删除标签后通过状态区域播报结果；焦点自然回到文档顺序中的下一个控件。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>tone</code><span>red | orange | yellow | green | cyan | primary | neutral</span><span>标签语义色调</span></div><div><code>variant</code><span>solid | outline | light</span><span>实色、边线或浅色外观</span></div><div><code>size</code><span>medium | small</span><span>24px 或 20px 高度</span></div><div><code>closeable</code><span>boolean</span><span>是否显示关闭按钮</span></div><div><code>onClose</code><span>function</span><span>关闭前回调；可取消移除</span></div><div><code>ariaLabel</code><span>string</span><span>自定义关闭按钮辅助名称</span></div></div></section>`; }
function progressExample(value, label=`${value}%`, cls='', name='') { const accessibleLabel=label || `${value}%`; return `<div class="progress-sample">${name ? `<span class="progress-sample__name">${name}</span>` : ''}<div class="gs-progress ${cls}" role="progressbar" aria-label="${name || '任务进度'}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}" aria-valuetext="${accessibleLabel}" style="--gs-progress-value:${value}%"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div>${cls.includes('gs-progress--hide-info') ? '' : `<span class="gs-progress__label">${label}</span>`}</div></div>`; }
function progressBody() {
  return `<section id="基础进度条"><h2>基础进度条</h2><p>进度值限制在 0–100。使用下方操作验证数值变化、完成状态和异常状态。</p><div class="demo-card"><div class="progress-controls"><button type="button" class="gs-button gs-button--secondary" data-progress-delta="-10">− 10</button><button type="button" class="gs-button gs-button--secondary" data-progress-delta="10">＋ 10</button><button type="button" class="gs-button gs-button--secondary" data-progress-status="exception">标记异常</button><button type="button" class="gs-button gs-button--text-primary" data-progress-reset>重置</button></div><div class="gs-progress" data-progress-live role="progressbar" aria-label="数据导入进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62" aria-valuetext="62%，正在导入" style="--gs-progress-value:62%"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div><span class="gs-progress__label">62%</span></div></div></section><section id="尺寸与标签"><h2>尺寸与标签</h2><p>默认轨道为 8px，小尺寸为 4px；标签可显示百分比、自定义业务文本或隐藏。</p><div class="demo-card progress-demo-stack">${progressExample(48,'48%','','默认尺寸')}${progressExample(72,'72%','gs-progress--small','小尺寸')}${progressExample(36,'','gs-progress--hide-info','隐藏标签')}${progressExample(100,'3 / 3 项','gs-progress--success','自定义标签')}</div></section><section id="语义状态"><h2>语义状态</h2><p>状态需同时使用颜色和可见文字表达，不能只依赖色彩。</p><div class="demo-card progress-demo-stack">${progressExample(64,'64% · 进行中','','正常')}${progressExample(100,'100% · 已完成','gs-progress--success','成功')}${progressExample(76,'76% · 请注意','gs-progress--warning','注意')}${progressExample(42,'42% · 发生异常','gs-progress--exception','异常')}</div></section><section id="不确定进度"><h2>不确定进度</h2><p>无法计算完成比例时使用循环色块，不展示虚构百分比；减少动态效果偏好下自动停止动画。</p><div class="demo-card"><div class="gs-progress gs-progress--indeterminate" role="progressbar" aria-label="正在加载数据"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>用于连续完成度；离散流程阶段使用 Steps 步骤条。</li><li>进度条是只读反馈，可操作数值选择使用 Slider 滑块。</li><li>不确定进度不显示百分比，完成或异常等关键节点再进行辅助通知。</li><li>状态颜色必须配合文字说明。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>value</code><span>number</span><span>当前值，自动限制在 0–max</span></div><div><code>max</code><span>number</span><span>最大值，默认 100</span></div><div><code>status</code><span>normal | success | warning | exception</span><span>业务语义状态</span></div><div><code>size</code><span>default | small</span><span>8px 或 4px 轨道</span></div><div><code>showInfo</code><span>boolean</span><span>是否显示右侧标签</span></div><div><code>format</code><span>function</span><span>格式化可见文本与 aria-valuetext</span></div><div><code>indeterminate</code><span>boolean</span><span>是否为未知完成比例</span></div></div></section>`;
}
function timelineItem({id, title, time, datetime, description, status='default', statusLabel='记录', meta='', current=false, action=false}) {
  const tagTone = { completed: 'green', current: 'primary', warning: 'orange', error: 'red', pending: 'neutral', default: 'neutral' }[status] || 'neutral';
  const statusTag = `<span class="gs-tag gs-tag--${tagTone} gs-tag--small gs-tag--light"><span class="gs-tag__label">${statusLabel}</span></span>`;
  return `<li class="gs-timeline__item" data-status="${status}"${current ? ' aria-current="true"' : ''}><span class="gs-timeline__marker" aria-hidden="true"></span><article class="gs-timeline__content" aria-labelledby="${id}"><div class="gs-timeline__header"><strong class="gs-timeline__title" id="${id}">${title}</strong><time class="gs-timeline__time" datetime="${datetime}">${time}</time></div><p class="gs-timeline__description">${description}</p><div class="gs-timeline__meta">${statusTag}${meta ? `<span>${meta}</span>` : ''}${action ? `<button type="button" class="gs-button gs-button--text-primary" data-timeline-toggle aria-expanded="false">查看详情</button>` : ''}</div>${action ? `<p class="gs-timeline__details" hidden>校验已完成 18 项，仍有 2 项字段格式需要确认。</p>` : ''}</article></li>`;
}
function timelineBody() {
  const basic = [
    timelineItem({id:'timeline-basic-1',title:'提交申请',time:'09:30',datetime:'2026-08-13T09:30:00+08:00',description:'王小明提交了数据发布申请。',status:'completed',statusLabel:'已完成',meta:'操作人：王小明'}),
    timelineItem({id:'timeline-basic-2',title:'系统校验',time:'09:42',datetime:'2026-08-13T09:42:00+08:00',description:'系统正在检查字段格式与数据完整性。',status:'current',statusLabel:'进行中',meta:'自动任务',current:true,action:true}),
    timelineItem({id:'timeline-basic-3',title:'主管审核',time:'待处理',datetime:'2026-08-13',description:'校验通过后进入主管审核。',status:'pending',statusLabel:'未开始'})
  ].join('');
  const states = [
    timelineItem({id:'timeline-state-1',title:'资源上传',time:'08:50',datetime:'2026-08-13T08:50:00+08:00',description:'源文件已成功上传。',status:'completed',statusLabel:'已完成'}),
    timelineItem({id:'timeline-state-2',title:'质量检测',time:'09:10',datetime:'2026-08-13T09:10:00+08:00',description:'正在执行质量规则。',status:'current',statusLabel:'进行中',current:true}),
    timelineItem({id:'timeline-state-3',title:'人工确认',time:'09:25',datetime:'2026-08-13T09:25:00+08:00',description:'检测到需要人工确认的字段。',status:'warning',statusLabel:'待确认'}),
    timelineItem({id:'timeline-state-4',title:'服务发布',time:'09:40',datetime:'2026-08-13T09:40:00+08:00',description:'服务连接超时，发布未完成。',status:'error',statusLabel:'异常'}),
    timelineItem({id:'timeline-state-5',title:'结果归档',time:'待处理',datetime:'2026-08-13',description:'发布完成后自动归档。',status:'pending',statusLabel:'未开始'})
  ].join('');
  const alternate = [
    timelineItem({id:'timeline-alt-1',title:'项目立项',time:'2026-06-12',datetime:'2026-06-12',description:'完成目标与范围确认。',status:'completed',statusLabel:'已完成'}),
    timelineItem({id:'timeline-alt-2',title:'原型确认',time:'2026-06-28',datetime:'2026-06-28',description:'核心流程通过评审。',status:'completed',statusLabel:'已完成'}),
    timelineItem({id:'timeline-alt-3',title:'开发上线',time:'2026-08-01',datetime:'2026-08-01',description:'第一阶段功能正式发布。',status:'current',statusLabel:'当前里程碑',current:true}),
    timelineItem({id:'timeline-alt-4',title:'版本复盘',time:'2026-08-15',datetime:'2026-08-15',description:'汇总反馈并规划下一阶段。',status:'pending',statusLabel:'未开始'})
  ].join('');
  return `<section id="基础时间轴"><h2>基础时间轴</h2><p>按统一时间方向呈现事件。整行只展示信息，局部操作使用真实按钮或链接。</p><div class="demo-card"><ol class="gs-timeline" aria-label="申请处理时间轴">${basic}</ol></div></section><section id="状态时间轴"><h2>状态时间轴</h2><p>状态点与标签共同表达业务语义，当前项使用 <code>aria-current</code> 标识。</p><div class="demo-card"><ol class="gs-timeline gs-timeline--compact" aria-label="服务发布状态时间轴">${states}</ol></div></section><section id="交替布局"><h2>交替布局</h2><p>适合低密度里程碑展示；窄屏自动回到单列，DOM 时间顺序保持不变。</p><div class="demo-card"><ol class="gs-timeline gs-timeline--alternate" aria-label="项目里程碑时间轴">${alternate}</ol></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>事件日志和业务历程使用 Timeline；可导航的多阶段流程使用 Steps。</li><li>同一页面统一使用升序或降序，不在列表中混排。</li><li>长内容展示摘要，详情通过局部链接或按钮展开。</li><li>语义色仅用于真实状态，状态点必须配合文字。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>使用有序列表保留事件顺序，时间使用带 datetime 的 time 元素。</li><li>标记点作为装饰隐藏于辅助技术，状态使用可见文字。</li><li>交替布局只改变视觉位置，不改变 DOM 顺序。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>items</code><span>TimelineItem[]</span><span>按传入顺序展示的事件</span></div><div><code>layout</code><span>left | alternate</span><span>单列或交替布局</span></div><div><code>density</code><span>default | compact</span><span>默认或紧凑间距</span></div><div><code>status</code><span>completed | current | warning | error | pending</span><span>事件业务状态</span></div><div><code>renderAction</code><span>function</span><span>渲染事件内局部操作</span></div><div><code>ariaLabel</code><span>string</span><span>时间轴辅助名称</span></div></div></section>`;
}
function treeNode({key,label,branch=false,expanded=false,selected=false,checked,disabled=false,children=''}) { const selection = checked === undefined ? ` aria-selected="${selected}"` : ` aria-checked="${checked}"`; return `<li class="gs-tree__item${branch ? '' : ' is-leaf'}${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}" role="treeitem" data-tree-key="${key}" tabindex="-1"${branch ? ` aria-expanded="${expanded}"` : ''}${selection}${disabled ? ' aria-disabled="true"' : ''}><div class="gs-tree__row" data-tree-row><span class="gs-tree__switcher" data-tree-toggle aria-hidden="true">${gsIcon('treeChevron')}</span>${checked === undefined ? '' : `<span class="gs-tree__checkbox" aria-hidden="true">${gsIcon('check', 'gs-tree__check')}${gsIcon('minus', 'gs-tree__minus')}</span>`}<span class="gs-tree__label">${label}</span></div>${branch ? `<ul class="gs-tree__children" role="group">${children}</ul>` : ''}</li>`; }
function treeBody() {
  const dataCenter = treeNode({key:'data-center',label:'数据中心',branch:true,expanded:true,children:treeNode({key:'overview',label:'数据概览',selected:true})+treeNode({key:'service',label:'数据服务'})});
  const basic = treeNode({key:'platform',label:'GeoShare 平台',branch:true,expanded:true,children:dataCenter+treeNode({key:'resources',label:'资源管理',branch:true,children:treeNode({key:'maps',label:'地图资源'})+treeNode({key:'layers',label:'图层管理'})})+treeNode({key:'settings',label:'系统设置（禁用）',disabled:true})});
  const dataProducts = treeNode({key:'data-products',label:'数据产品',branch:true,expanded:true,checked:'true',children:treeNode({key:'data-query',label:'数据查询',checked:'true'})+treeNode({key:'data-export',label:'数据导出',checked:'true'})});
  const admin = treeNode({key:'admin',label:'管理后台',branch:true,expanded:true,checked:'mixed',children:treeNode({key:'users',label:'用户管理',checked:'true'})+treeNode({key:'roles',label:'角色管理',checked:'false'})});
  const checkable = treeNode({key:'permissions',label:'产品权限',branch:true,expanded:true,checked:'mixed',children:dataProducts+treeNode({key:'map-products',label:'地图产品',checked:'false'})+admin});
  return `<section id="基础树"><h2>基础树</h2><p>点击箭头展开或收起分支，点击节点进行单选。收起分支不会清空内部选择。</p><div class="demo-card"><div class="gs-tree" data-tree data-selection="single"><ul class="gs-tree__list" role="tree" aria-label="产品模块">${basic}</ul></div></div></section><section id="复选树"><h2>复选树</h2><p>父子节点默认联动；部分子项勾选时，父节点显示半选状态。</p><div class="demo-card"><div class="gs-tree" data-tree data-checkable><ul class="gs-tree__list" role="tree" aria-label="产品权限">${checkable}</ul></div></div></section><section id="交互与无障碍"><h2>交互与无障碍</h2><ul><li>上下方向键在可见节点间移动，左右方向键展开、收起或移动层级。</li><li>Home、End 定位首尾节点，Enter 或空格执行选择/复选。</li><li>同一棵树仅一个节点进入 Tab 顺序；禁用节点可被方向键经过，但不能操作。</li><li>分支使用 aria-expanded，单选使用 aria-selected，复选使用 aria-checked。</li></ul></section><section id="使用规则"><h2>使用规则</h2><ul><li>仅用于真实父子层级；平铺信息使用 List，业务历程使用 Timeline。</li><li>默认展开不超过两层，深层数据提供搜索和定位。</li><li>同级标签保持相同粒度，不只依赖图标表达含义。</li><li>大量可见节点应采用虚拟滚动并补充集合位置信息。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>data</code><span>TreeNode[]</span><span>树形数据源</span></div><div><code>selectionMode</code><span>none | single</span><span>单选模式，默认 single</span></div><div><code>expandedKeys</code><span>Key[]</span><span>受控展开节点</span></div><div><code>selectedKeys</code><span>Key[]</span><span>受控选中节点</span></div><div><code>checkable</code><span>boolean</span><span>是否显示复选能力</span></div><div><code>checkedKeys</code><span>Key[]</span><span>受控复选节点</span></div><div><code>checkStrictly</code><span>boolean</span><span>是否关闭父子联动</span></div><div><code>disabledKeys</code><span>Key[]</span><span>禁用节点集合</span></div></div></section>`;
}
function focusTreeItem(item) { const tree=item.closest('[data-tree]'); tree.querySelectorAll('.gs-tree__item').forEach(node=>node.tabIndex=-1); item.tabIndex=0; item.focus(); }
function directTreeChildren(item) { return [...item.querySelectorAll(':scope > .gs-tree__children > .gs-tree__item')]; }
function updateTreeParents(item) { let parent=item.parentElement?.closest('.gs-tree__item'); while(parent){ const children=directTreeChildren(parent).filter(node=>!node.classList.contains('is-disabled')); const values=children.map(node=>node.getAttribute('aria-checked')); const value=values.length && values.every(state=>state==='true') ? 'true' : values.length && values.every(state=>state==='false') ? 'false' : 'mixed'; parent.setAttribute('aria-checked',value); parent=parent.parentElement?.closest('.gs-tree__item'); } }
function toggleTreeCheck(item) { if(item.classList.contains('is-disabled')) return; const checked=item.getAttribute('aria-checked')==='true'; const next=checked ? 'false' : 'true'; item.setAttribute('aria-checked',next); item.querySelectorAll(':scope > .gs-tree__children .gs-tree__item').forEach(node=>{ if(!node.classList.contains('is-disabled')) node.setAttribute('aria-checked',next); }); updateTreeParents(item); }
function activateTreeItem(item) { if(item.classList.contains('is-disabled')) return; const tree=item.closest('[data-tree]'); if(tree.hasAttribute('data-checkable')) toggleTreeCheck(item); else if(tree.dataset.selection==='single'){ tree.querySelectorAll('.gs-tree__item[aria-selected="true"]').forEach(node=>{ node.setAttribute('aria-selected','false'); node.classList.remove('is-selected'); }); item.setAttribute('aria-selected','true'); item.classList.add('is-selected'); } }
function visibleTreeItems(tree) { return [...tree.querySelectorAll('.gs-tree__item')].filter(item=>{ let parent=item.parentElement?.closest('.gs-tree__item'); while(parent){ if(parent.getAttribute('aria-expanded')==='false') return false; parent=parent.parentElement?.closest('.gs-tree__item'); } return true; }); }
function initComponentDemos(app) { app.querySelectorAll('[data-tree]').forEach(tree=>{ const current=tree.querySelector('.gs-tree__item.is-selected') || tree.querySelector('.gs-tree__item'); if(current) current.tabIndex=0; tree.querySelectorAll('.gs-tree__item[aria-checked]').forEach(item=>{ if(directTreeChildren(item).length) updateTreeParents(directTreeChildren(item)[0] || item); }); }); app.querySelectorAll('[data-checkbox-demo]').forEach(syncCheckboxDemo); app.querySelectorAll('.gs-input-range input').forEach(input=>input.setAttribute('data-numeric-only','')); }
function syncCheckboxDemo(group) { const master=group.querySelector('[data-checkbox-master]'); const items=[...group.querySelectorAll('[data-checkbox-item]:not(:disabled)')]; const checked=items.filter(item=>item.checked).length; master.checked=checked===items.length && checked>0; master.indeterminate=checked>0 && checked<items.length; }
function handleControlChange(event) {
  const input=event.target;
  if(!(input instanceof HTMLInputElement)) return;
  const group=input.closest('[data-checkbox-demo]');
  if(!group) return;
  if(input.hasAttribute('data-checkbox-master')) group.querySelectorAll('[data-checkbox-item]:not(:disabled)').forEach(item=>{ item.checked=input.checked; });
  syncCheckboxDemo(group);
}
function sanitizeNumericValue(value) {
  const raw = String(value ?? '');
  const negative = raw.startsWith('-');
  const cleaned = raw.replace(/[^0-9.]/g, '');
  const dot = cleaned.indexOf('.');
  const normalized = dot < 0 ? cleaned : `${cleaned.slice(0, dot)}.${cleaned.slice(dot + 1).replace(/\./g, '')}`;
  return `${negative ? '-' : ''}${normalized}`;
}
function handleNumericInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.hasAttribute('data-numeric-only')) return;
  const next = sanitizeNumericValue(input.value);
  if (next === input.value) return;
  const cursor = input.selectionStart;
  input.value = next;
  if (cursor !== null && input.setSelectionRange) {
    const position = Math.min(cursor, next.length);
    input.setSelectionRange(position, position);
  }
}
function handleInputAffordances(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  const clearControl = input.closest('.gs-input-field')?.querySelector('[data-input-clear]');
  if (clearControl) clearControl.hidden = input.value.length === 0;
}
function updateSearchDemo(demo, announce=false) {
  if (!demo) return;
  const input = demo.querySelector('[data-search-input]');
  const field = demo.querySelector('[data-search-field]');
  if (!input || !field) return;
  const value = input.value.trim();
  const active = document.activeElement === input || (value.length > 0 && field.dataset.searchCommitted !== 'true');
  field.classList.toggle('is-active', active);
  const clear = demo.querySelector('[data-search-clear]');
  if (clear) clear.hidden = value.length === 0;
  const submit = demo.querySelector('[data-search-submit]');
  if (submit) {
    const canSubmit = value.length > 0;
    submit.disabled = !canSubmit;
    submit.setAttribute('aria-disabled', canSubmit ? 'false' : 'true');
    submit.tabIndex = canSubmit ? 0 : -1;
  }
  const suggestions = demo.querySelector('[data-search-suggestions]');
  if (suggestions) {
    const options = [...suggestions.querySelectorAll('[data-search-option]')];
    const visible = value ? options.filter(option => (option.getAttribute('data-search-option') || '').toLowerCase().includes(value.toLowerCase())) : [];
    options.forEach(option => {
      const raw = option.getAttribute('data-search-option') || '';
      option.innerHTML = highlightSearchOption(raw, value);
      option.hidden = !visible.includes(option);
      option.setAttribute('aria-selected', option === visible[0] ? 'true' : 'false');
    });
    suggestions.hidden = !active || visible.length === 0;
  }
  if (announce) {
    const live = demo.querySelector('[data-search-live]');
    if (live) live.textContent = value ? `已搜索：${value}` : '请输入关键词';
  }
}
function commitSearchDemo(demo) {
  if (!demo) return;
  const input = demo.querySelector('[data-search-input]');
  const field = demo.querySelector('[data-search-field]');
  if (!(input instanceof HTMLInputElement) || !field || !input.value.trim()) return;
  field.dataset.searchCommitted = 'true';
  const focused = document.activeElement;
  if (focused instanceof HTMLElement && field.contains(focused)) focused.blur();
  input.blur();
  updateSearchDemo(demo, true);
}
function handleSearchInput(event) {
  if (!(event.target instanceof HTMLInputElement) || !event.target.matches('[data-search-input]')) return;
  const field = event.target.closest('[data-search-field]');
  if (field) delete field.dataset.searchCommitted;
  updateSearchDemo(event.target.closest('[data-search-demo]'));
}
function handleSearchFocus(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches('[data-search-input]')) return;
  const demo = input.closest('[data-search-demo]');
  const field = input.closest('[data-search-field]');
  if (event.type === 'focusout' && field && event.relatedTarget instanceof Node && field.contains(event.relatedTarget)) return;
  if (field?.dataset.searchClearPending === 'true') return;
  if (event.type === 'focusin') {
    if (field) delete field.dataset.searchCommitted;
    updateSearchDemo(demo);
  }
  else setTimeout(() => updateSearchDemo(demo), 0);
}
function handleSearchPointerDown(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const field = target.closest('[data-search-field]');
  if (!field) return;
  const input = field.querySelector('[data-search-input]');
  if (!(input instanceof HTMLInputElement)) return;
  field.classList.add('is-active');
  const isSubmit = target.closest('[data-search-submit]');
  const clear = target.closest('[data-search-clear]');
  if (clear instanceof HTMLButtonElement && !clear.disabled) {
    field.dataset.searchClearPending = 'true';
    const suggestions = field.closest('[data-search-demo]')?.querySelector('[data-search-suggestions]');
    if (suggestions) suggestions.hidden = true;
    clear.classList.add('is-pressed');
    if (typeof clear.setPointerCapture === 'function' && 'pointerId' in event) {
      try { clear.setPointerCapture(event.pointerId); } catch (_) { /* capture may be unavailable in some browsers */ }
    }
  }
  if (isSubmit && input.value.trim().length > 0) {
    field.dataset.searchCommitted = 'true';
    const suggestions = field.closest('[data-search-demo]')?.querySelector('[data-search-suggestions]');
    if (suggestions) suggestions.hidden = true;
    return;
  }
  if (target !== input) {
    requestAnimationFrame(() => {
      if (!input.isConnected) return;
      input.focus({ preventScroll: true });
      if (field.dataset.searchClearPending === 'true') return;
      updateSearchDemo(field.closest('[data-search-demo]'));
    });
  }
}
function handleSearchPointerEnd(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const clear = target.closest('[data-search-clear]');
  if (clear) {
    clear.classList.remove('is-pressed');
    if (event.type === 'pointercancel') {
      const field = clear.closest('[data-search-field]');
      if (field) delete field.dataset.searchClearPending;
    }
  }
}
function handleSearchClick(event) {
  const target = event.target.closest('[data-search-clear],[data-search-submit],[data-search-option]');
  if (!target) return;
  const demo = target.closest('[data-search-demo]');
  const input = demo?.querySelector('[data-search-input]');
  if (!demo || !input) return;
  if (target.hasAttribute('data-search-clear')) {
    const field = input.closest('[data-search-field]');
    if (field) delete field.dataset.searchClearPending;
    input.value = '';
    input.focus();
    updateSearchDemo(demo);
    return;
  }
  if (target.hasAttribute('data-search-option')) {
    input.value = target.textContent.trim();
    updateSearchDemo(demo, true);
    input.focus();
    const suggestions = demo.querySelector('[data-search-suggestions]');
    if (suggestions) suggestions.hidden = true;
    return;
  }
  if (target.hasAttribute('data-search-submit') && (target.hasAttribute('disabled') || target.getAttribute('aria-disabled') === 'true')) return;
  commitSearchDemo(demo);
}
function handleSearchKeydown(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches('[data-search-input]')) return;
  const demo = input.closest('[data-search-demo]');
  if (event.key === 'Escape') {
    const suggestions = demo?.querySelector('[data-search-suggestions]');
    if (suggestions) suggestions.hidden = true;
    input.blur();
    updateSearchDemo(demo);
    return;
  }
  if (event.key !== 'Enter') return;
  event.preventDefault();
  const suggestions = demo?.querySelector('[data-search-suggestions]');
  const first = suggestions && !suggestions.hidden ? [...suggestions.querySelectorAll('[data-search-option]:not([hidden])')][0] : null;
  if (first) {
    input.value = first.textContent.trim();
    suggestions.hidden = true;
  }
  commitSearchDemo(demo);
}
function handleInputKeydown(event) {
  if (event.key !== 'Enter') return;
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.disabled || input.readOnly) return;
  if (input.matches('[data-search-input]')) return;
  const field = input.closest('.gs-input-field');
  if (!field || field.classList.contains('gs-input-tags')) return;
  event.preventDefault();
  field.classList.remove('is-focused');
  input.blur();
}
function handleInputClick(event) {
  const app = document.querySelector('#app');
  const target = event.target.closest('[data-input-clear],[data-input-password-toggle],[data-input-step]');
  if (!target || !app.contains(target) || target.disabled) return;
  if (target.hasAttribute('data-input-clear')) {
    const input = target.closest('.gs-input-field')?.querySelector('input');
    if (input) { input.value = ''; target.hidden = true; input.focus(); }
    return;
  }
  if (target.hasAttribute('data-input-password-toggle')) {
    const input = target.closest('.gs-input-field')?.querySelector('input');
    if (input) {
      const visible = input.type === 'text';
      input.type = visible ? 'password' : 'text';
      target.setAttribute('aria-label', visible ? '显示密码' : '隐藏密码');
      target.classList.toggle('is-visible', !visible);
      input.focus();
    }
    return;
  }
  const step = Number(target.dataset.inputStep);
  const input = target.closest('.input-live-number,.gs-input-spinner-control')?.querySelector('input');
  if (input && Number.isFinite(step)) {
    const current = Number(input.value || 0);
    const next = current + step;
    input.value = String(Number.isInteger(next) ? next : next.toFixed(2).replace(/0+$/, '').replace(/\.$/, ''));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  }
}
function handleTagKeydown(event) {
  if (event.key !== 'Enter') return;
  const input = event.target.closest('[data-tag-demo] input');
  const app = document.querySelector('#app');
  if (!input || !app.contains(input) || input.disabled || input.readOnly || input.closest('.gs-input-tags.is-disabled')) return;
  const value = input.value.trim();
  event.preventDefault();
  if (!value) {
    input.closest('.gs-input-field')?.classList.remove('is-focused');
    input.blur();
    return;
  }
  const demo = input.closest('[data-tag-demo]');
  const live = demo.querySelector('[data-tag-live]');
  input.insertAdjacentHTML('beforebegin', tagInputChip(value));
  input.value = '';
  if (live) live.textContent = `已添加${value}标签`;
  input.focus();
}
function closePicker(picker) {
  if (!picker) return;
  const trigger = picker.querySelector('[data-picker-trigger]');
  const popup = picker.querySelector('[data-picker-popup]');
  if (popup) popup.hidden = true;
  if (trigger) { trigger.setAttribute('aria-expanded', 'false'); trigger.classList.remove('is-active'); }
}
function closeAllPickers(except) {
  document.querySelectorAll('#app [data-picker]').forEach(picker => { if (picker !== except) closePicker(picker); });
}
function openPicker(picker) {
  const trigger = picker?.querySelector('[data-picker-trigger]');
  const popup = picker?.querySelector('[data-picker-popup]');
  if (!trigger || !popup || trigger.disabled) return;
  closeAllPickers(picker);
  const next = popup.hidden;
  popup.hidden = !next;
  trigger.setAttribute('aria-expanded', String(next));
  trigger.classList.toggle('is-active', next);
}
function selectPickerOption(picker, option) {
  if (!picker || !option || option.disabled) return;
  const value = option.dataset.pickerValue || option.textContent.trim();
  const trigger = picker.querySelector('[data-picker-trigger]');
  const valueNode = trigger?.querySelector('.gs-select__value');
  if (valueNode) {
    valueNode.textContent = value;
    valueNode.classList.remove('gs-select__placeholder');
    valueNode.classList.add('is-selected');
  }
  picker.querySelectorAll('.gs-select-option[aria-selected="true"]').forEach(node => { node.setAttribute('aria-selected', 'false'); node.classList.remove('is-selected'); });
  option.setAttribute('aria-selected', 'true'); option.classList.add('is-selected');
  closePicker(picker);
}
function pickerMultiTag(label, value = label, closable = true) {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);
  const close = closable ? `<button type="button" class="gs-tag__close gs-button gs-button--icon gs-button--text" data-picker-close aria-label="移除${safeLabel}">${closeIconSvg()}</button>` : '';
  return `<span class="gs-tag gs-tag--neutral gs-tag--small gs-tag--light${closable ? ' gs-tag--closeable' : ' is-disabled'}"${closable ? ` data-picker-chip data-picker-value="${safeValue}"` : ' aria-disabled="true"'}><span class="gs-tag__label">${safeLabel}</span>${close}</span>`;
}
function syncPickerMultiTags(picker) {
  const tags = picker?.querySelector('[data-picker-tags]');
  const placeholder = picker?.querySelector('[data-picker-placeholder]');
  if (!tags) return;
  const selected = [...picker.querySelectorAll('[data-picker-multi-option][aria-selected="true"]')];
  tags.innerHTML = selected.map(option => pickerMultiTag(option.dataset.pickerLabel || option.textContent.trim(), option.dataset.pickerValue || option.textContent.trim())).join('');
  if (placeholder) placeholder.hidden = selected.length > 0;
}
function togglePickerMultiOption(picker, option) {
  if (!picker || !option || option.disabled) return;
  const next = option.getAttribute('aria-selected') !== 'true';
  option.setAttribute('aria-selected', String(next));
  option.classList.toggle('is-selected', next);
  syncPickerMultiTags(picker);
}
function handlePickerClick(event) {
  const app = document.querySelector('#app');
  const target = event.target.closest('[data-picker-trigger],[data-picker] .gs-select-option,[data-picker-close]');
  if (target && app.contains(target)) {
    const picker = target.closest('[data-picker]');
    if (target.matches('[data-picker-close]')) {
      const chip = target.closest('[data-picker-chip]');
      const value = chip?.dataset.pickerValue;
      // A chip can be rendered from an already-selected value before the
      // popup options are mounted (for example, in the initial demo state).
      // Fall back to the currently selected option so the close action still
      // removes the chip and keeps the picker state in sync.
      const option = [...(picker?.querySelectorAll('[data-picker-multi-option]') || [])].find(node => node.dataset.pickerValue === value)
        || (chip && picker?.querySelector('[data-picker-multi-option][aria-selected="true"]'));
      if (option) togglePickerMultiOption(picker, option);
      else chip?.remove();
      return;
    }
    if (target.matches('[data-picker-trigger]')) { openPicker(picker); return; }
    if (target.matches('[data-picker-multi-option]')) { togglePickerMultiOption(picker, target); return; }
    if (picker?.dataset.picker === 'cascader' && target.closest('[data-picker-pane="parent"]')) {
      const pane = picker.querySelector('[data-picker-pane="child"]');
      const parentValue = target.dataset.pickerValue || target.textContent.trim();
      const children = parentValue === '数据中心' ? ['数据概览', '数据服务'] : parentValue === '资源管理' ? ['地图资源', '图层管理'] : ['系统设置'];
      pane.innerHTML = children.map(label => pickerOption(label, { value: `${parentValue} / ${label}` })).join('');
      picker.querySelectorAll('[data-picker-pane="parent"] .gs-select-option').forEach(node => node.classList.toggle('is-selected', node === target));
      return;
    }
    selectPickerOption(picker, target);
    return;
  }
  const picker = event.target.closest('[data-picker]');
  if (!picker) closeAllPickers();
}
function handlePickerOutsideClick(event) {
  // The component root only covers the article body. Listen at document level
  // as well so clicks in the sidebar, page TOC, or surrounding shell dismiss
  // an open picker without affecting clicks inside the picker itself.
  if (!event.target.closest('[data-picker]')) closeAllPickers();
}
function handlePickerKeydown(event) {
  const trigger = event.target.closest('[data-picker-trigger]');
  if (trigger) {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPicker(trigger.closest('[data-picker]')); }
    if (event.key === 'Escape') { closePicker(trigger.closest('[data-picker]')); }
    return;
  }
  const option = event.target.closest('[data-picker] .gs-select-option');
  if (!option) return;
  const picker = option.closest('[data-picker]');
  const options = [...picker.querySelectorAll('[data-picker-popup]:not([hidden]) .gs-select-option:not(:disabled)')];
  const index = options.indexOf(option);
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { event.preventDefault(); options[Math.min(index + 1, options.length - 1)]?.focus(); }
  else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') { event.preventDefault(); options[Math.max(index - 1, 0)]?.focus(); }
  else if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); option.click(); }
  else if (event.key === 'Escape') { event.preventDefault(); closePicker(picker); picker.querySelector('[data-picker-trigger]')?.focus(); }
}
function handleComponentClick(event) {
  const app=document.querySelector('#app');
  if (handleDateTimeClick(event)) return;
  // Picker dismissal also needs to run for clicks outside a picker. Keep the
  // single delegated listener on #app so every open popup closes consistently.
  handlePickerClick(event);
  if (event.target.closest('[data-picker-trigger],[data-picker] .gs-select-option')) return;
  const tagClose=event.target.closest('[data-tag-close]');
  if(tagClose && app.contains(tagClose)){ const item=tagClose.closest('[data-tag-item]'); const label=item?.querySelector('.gs-tag__label')?.textContent || '标签'; const live=tagClose.closest('[data-tag-demo]')?.querySelector('[data-tag-live]'); item?.remove(); if(live) live.textContent=`已移除${label}标签`; return; }
  const tagReset=event.target.closest('[data-tag-reset]');
  if(tagReset && app.contains(tagReset)){ const demo=tagReset.closest('[data-tag-demo]'); if(demo){ const fresh=document.createRange().createContextualFragment(`<div>${tagDemo('closable',true)}</div>`).firstElementChild; demo.replaceWith(fresh); fresh.querySelector('[data-tag-live]').textContent='已恢复全部标签'; } return; }
  const progressButton=event.target.closest('[data-progress-delta],[data-progress-status],[data-progress-reset]');
  if(progressButton && app.contains(progressButton)){ const progress=app.querySelector('[data-progress-live]'); if(progress){ let value=Number(progress.getAttribute('aria-valuenow')); progress.classList.remove('gs-progress--success','gs-progress--warning','gs-progress--exception'); if(progressButton.hasAttribute('data-progress-delta')) value=Math.max(0,Math.min(100,value+Number(progressButton.dataset.progressDelta))); if(progressButton.hasAttribute('data-progress-reset')) value=62; if(progressButton.dataset.progressStatus==='exception') progress.classList.add('gs-progress--exception'); else if(value===100) progress.classList.add('gs-progress--success'); progress.style.setProperty('--gs-progress-value',`${value}%`); progress.setAttribute('aria-valuenow',String(value)); const state=progress.classList.contains('gs-progress--exception')?'，发生异常':value===100?'，已完成':'，正在处理'; progress.setAttribute('aria-valuetext',`${value}%${state}`); progress.querySelector('.gs-progress__label').textContent=`${value}%`; } return; }
  const timelineButton=event.target.closest('[data-timeline-toggle]');
  if(timelineButton && app.contains(timelineButton)){ const details=timelineButton.closest('.gs-timeline__content').querySelector('.gs-timeline__details'); const expanded=timelineButton.getAttribute('aria-expanded')==='true'; timelineButton.setAttribute('aria-expanded',String(!expanded)); timelineButton.textContent=expanded?'查看详情':'收起详情'; details.hidden=expanded; return; }
  const row=event.target.closest('[data-tree-row]');
  if(row && app.contains(row)){ const item=row.closest('.gs-tree__item'); focusTreeItem(item); if(event.target.closest('[data-tree-toggle]') && item.hasAttribute('aria-expanded')) item.setAttribute('aria-expanded',String(item.getAttribute('aria-expanded')!=='true')); else activateTreeItem(item); }
}
function handleTocClick(event) { const link=event.target.closest('a[data-section]'); if(!link) return; const section=document.getElementById(link.dataset.section); if(section){ event.preventDefault(); section.scrollIntoView({behavior:'smooth',block:'start'}); } }
function handleTreeKeydown(event) { const item=event.target.closest('.gs-tree__item'); if(!item || event.target!==item) return; const tree=item.closest('[data-tree]'); const visible=visibleTreeItems(tree); const index=visible.indexOf(item); let target=null; if(event.key==='ArrowDown') target=visible[Math.min(index+1,visible.length-1)]; if(event.key==='ArrowUp') target=visible[Math.max(index-1,0)]; if(event.key==='Home') target=visible[0]; if(event.key==='End') target=visible[visible.length-1]; if(event.key==='ArrowRight'){ if(item.getAttribute('aria-expanded')==='false') item.setAttribute('aria-expanded','true'); else if(item.getAttribute('aria-expanded')==='true') target=directTreeChildren(item)[0]; } if(event.key==='ArrowLeft'){ if(item.getAttribute('aria-expanded')==='true') item.setAttribute('aria-expanded','false'); else target=item.parentElement?.closest('.gs-tree__item'); } if(event.key==='Enter' || event.key===' '){ activateTreeItem(item); event.preventDefault(); return; } if(target){ event.preventDefault(); focusTreeItem(target); } }
function control(label, type, state='') {
  return `<span class="gs-control gs-control--${type} ${state}" aria-disabled="${state.includes('is-disabled') ? 'true' : 'false'}"><span class="gs-control__indicator" aria-hidden="true"></span><span>${label}</span></span>`;
}
function switchControl(label, tone='blue', state='') {
  return `<span class="gs-switch gs-switch--${tone} ${state}" aria-disabled="${state.includes('is-disabled') ? 'true' : 'false'}"><span>${label}</span><span class="gs-switch__track" aria-hidden="true"></span></span>`;
}
function switchTrack(tone='blue', state='') {
  return `<span class="gs-switch gs-switch--spec gs-switch--${tone} ${state}" aria-hidden="true"><span class="gs-switch__track"></span></span>`;
}
function switchDemo(label, tone='blue', checked=false, disabled=false) {
  return `<label class="gs-live-switch gs-live-switch--${tone} ${disabled?'is-disabled':''}"><span>${label}</span><input type="checkbox" ${checked?'checked':''} ${disabled?'disabled':''}><span class="gs-live-switch__track" aria-hidden="true"></span></label>`;
}
function radioDemo(label, group, checked=false, disabled=false) {
  return `<label class="gs-live-control gs-live-control--radio ${disabled?'is-disabled':''}"><input type="radio" name="${group}" ${checked?'checked':''} ${disabled?'disabled':''}><span class="gs-live-control__indicator" aria-hidden="true"></span><span>${label}</span></label>`;
}
function checkboxDemo(label, attribute, checked=false, disabled=false) {
  return `<label class="gs-live-control gs-live-control--checkbox ${disabled?'is-disabled':''}"><input type="checkbox" ${attribute} ${checked?'checked':''} ${disabled?'disabled':''}><span class="gs-live-control__indicator" aria-hidden="true"></span><span>${label}</span></label>`;
}
function switchBody() {
  const states = [['默认', ''], ['悬停', 'is-hover'], ['按下', 'is-pressed'], ['禁用', 'is-disabled']];
  const column = (title, tone, active=false) => `<div class="switch-spec-col"><span class="switch-spec-col__title">${title}</span>${states.map(([,state])=>switchTrack(tone, `${active?'is-on ':''}${state}`)).join('')}</div>`;
  return `<section id="基础开关"><h2 class="figma-spec-heading">开关</h2><div class="demo-card switch-spec-card"><div class="switch-spec-grid"><div class="switch-spec-col switch-spec-col--states"><span class="switch-spec-col__title">状态</span>${states.map(([label])=>`<span class="switch-spec-state">${label}</span>`).join('')}</div>${column('关闭','blue')}${column('主色','blue',true)}${column('红色','red',true)}${column('绿色','green',true)}</div></div></section><section id="交互示例"><p>点击开关可立即切换状态；禁用项不可操作。</p><div class="demo-card control-live-demo">${switchDemo('消息通知','blue',true)}${switchDemo('风险预警','red')}${switchDemo('自动同步','green',true)}${switchDemo('系统维护','blue',false,true)}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>用于立即生效的二元开关设置。</li><li>颜色表达的业务语义应同时通过文案说明。</li><li>禁用态不响应交互。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>checked</code><span>boolean</span><span>是否开启</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>tone</code><span>blue | red | green</span><span>激活状态颜色</span></div></div></section>`;
}
function radioBody() {
  const items = [['未选中',''], ['悬停未选中','is-hover'], ['已选中','is-selected'], ['禁用未选中','is-disabled'], ['禁用已选中','is-selected is-disabled']];
  return `<section id="基础单选框"><h2 class="figma-spec-heading">单选</h2><div class="demo-card control-spec-card"><div class="figma-control-row">${items.map(([label,state])=>control(label,'radio',state)).join('')}</div></div></section><section id="交互示例"><p>同一组选项只能选择一个；禁用项不可选择。</p><fieldset class="demo-card control-live-demo" aria-label="地图底图">${radioDemo('街道地图','map-style',true)}${radioDemo('影像地图','map-style')}${radioDemo('地形地图','map-style')}${radioDemo('暂不可用','map-style',false,true)}</fieldset></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一组选项只能选择一个。</li><li>默认值应符合最常见的业务场景。</li><li>不可选项使用禁用状态并保留原因说明。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>name</code><span>string</span><span>单选组名称</span></div><div><code>checked</code><span>boolean</span><span>是否选中</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div></div></section>`;
}
function checkboxBody() {
  const items = [['未选中',''], ['悬停未选中','is-hover'], ['已选中','is-selected'], ['禁用未选中','is-disabled'], ['禁用已选中','is-selected is-disabled'], ['半选','is-selected is-mixed'], ['禁用半选','is-selected is-mixed is-disabled']];
  return `<section id="基础复选框"><h2 class="figma-spec-heading">多选</h2><div class="demo-card control-spec-card"><div class="figma-control-row">${items.map(([label,state])=>control(label,'checkbox',state)).join('')}</div></div></section><section id="交互示例"><p>可单独选择多个选项；全选会联动可操作项，并自动显示半选状态。</p><fieldset class="demo-card control-live-demo" data-checkbox-demo aria-label="数据权限">${checkboxDemo('全选','data-checkbox-master')}<span class="control-live-demo__divider"></span>${checkboxDemo('查看数据','data-checkbox-item',true)}${checkboxDemo('导出数据','data-checkbox-item')}${checkboxDemo('管理成员','data-checkbox-item')}${checkboxDemo('继承上级权限','data-checkbox-item',false,true)}</fieldset></section><section id="使用规则"><h2>使用规则</h2><ul><li>选项之间不互斥，可同时选择多个。</li><li>半选只用于父子选择关系。</li><li>禁用选项不可切换。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>checked</code><span>boolean</span><span>是否选中</span></div><div><code>indeterminate</code><span>boolean</span><span>是否半选</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div></div></section>`;
}
function inputField(options = {}) {
  const { state = '', value = '', placeholder = '提示内容', type = 'text', prefix = '', suffix = '', eye = false, clear = false, disabled = false, tags = '', range = false, number = false, className = '' } = options;
  const fieldState = [state, disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const numeric = type === 'number' || number;
  const safeValue = escapeHtml(value);
  const safePlaceholder = escapeHtml(placeholder);
  const input = `<input type="${numeric ? 'number' : type}"${numeric ? ' data-numeric-only inputmode="decimal" step="any"' : ''} value="${safeValue}" placeholder="${safePlaceholder}" ${disabled ? 'disabled' : ''} aria-label="${safePlaceholder || '输入内容'}" />`;
  const eyeControl = eye ? button(
    gsIcon(type === 'text' ? 'eye' : 'eyeOff', 'gs-input-eye__icon'),
    `gs-button--icon gs-button--text gs-input-eye${type === 'text' ? ' is-visible' : ''}`,
    `aria-label="${type === 'text' ? '隐藏密码' : '显示密码'}" ${disabled ? 'disabled' : ''} data-input-password-toggle`,
  ) : '';
  const clearControl = clear ? inputClearButton({
    label: '清空输入',
    dataAttr: 'data-input-clear',
    disabled,
    hidden: String(value).length === 0,
  }) : '';
  const suffixContent = suffix.replace('⌄', gsIcon('chevronDown', 'gs-input-chevron'));
  const body = tags ? `${tags}${input}` : `${prefix ? `<span class="gs-input-addon">${prefix}</span>` : ''}${input}${suffix ? `<span class="gs-input-addon gs-input-addon--suffix">${suffixContent}</span>` : ''}`;
  return `<div class="gs-input-field ${fieldState}">${body}${clearControl}${eyeControl}</div>`;
}
function inputRow(label, content, extra = '') { return `<div class="input-state-row"><span class="input-state-label">${label}</span><div class="input-state-content">${content}${extra}</div></div>`; }
function inputSection(title, id, rows) { return `<section id="${id}" class="input-variant"><h2>${title}</h2><div class="input-state-stack">${rows}</div></section>`; }
function inputNumberField(value = '2.5', state = '', spinner = false, disabled = false) {
  const field = inputField({ value, state, disabled, type: 'number', className: spinner ? 'gs-input-number-field' : '' });
  return `<div class="gs-input-number-control"><button class="gs-input-step-button" type="button" aria-label="减少" ${disabled ? 'disabled' : ''}>${gsIcon('minus', 'gs-input-step-icon gs-input-step-icon--minus')}</button>${field}<button class="gs-input-step-button" type="button" aria-label="增加" ${disabled ? 'disabled' : ''}>${gsIcon('plus', 'gs-input-step-icon gs-input-step-icon--plus')}</button></div>`;
}
function inputNumberSpinnerField(value = '2.5', state = '', disabled = false) {
  const field = inputField({ value, state, disabled, type: 'number', className: 'gs-input-spinner-field' });
  return `<div class="gs-input-spinner-control${disabled ? ' is-disabled' : ''}">${field}<span class="gs-input-spinner-buttons"><button class="gs-input-spinner-button" type="button" data-input-step="1" aria-label="增加" ${disabled ? 'disabled' : ''}>${gsIcon('spinnerArrowUp', 'gs-input-spinner-icon')}</button><button class="gs-input-spinner-button" type="button" data-input-step="-1" aria-label="减少" ${disabled ? 'disabled' : ''}>${gsIcon('spinnerArrowDown', 'gs-input-spinner-icon')}</button></span></div>`;
}
function inputBody() {
  const plainRows = (title = '四字标题') => [
    inputRow('未输入默认', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('未输入悬停', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ placeholder: '提示内容', state: 'is-hover' })}</div>`),
    inputRow('正在输入', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ value: '正在输入的文字', state: 'is-focused', clear: true })}</div>`),
    inputRow('输入默认', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ value: '输入的内容' })}</div>`),
    inputRow('输入异常', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ value: '输入的内容', state: 'is-error' })}</div>`, '<p class="input-helper">辅助文字</p>'),
    inputRow('禁用输入', `<div class="gs-input-labeled"><span>${title}</span>${inputField({ value: '输入的内容', disabled: true })}`),
  ].join('');
  const passwordRows = [
    inputRow('未输入默认', inputField({ placeholder: '提示内容', type: 'password', eye: true })),
    inputRow('未输入悬停', inputField({ placeholder: '提示内容', type: 'password', eye: true, state: 'is-hover' })),
    inputRow('正在输入', inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, state: 'is-focused' })),
    inputRow('输入默认', inputField({ value: '1Gst$5M*R1', type: 'text', eye: true })),
    inputRow('输入异常', inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, state: 'is-error' }), '<p class="input-helper">辅助文字</p>'),
    inputRow('禁用输入', inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, disabled: true })),
  ].join('');
  const decoratedRows = [
    inputRow('未输入默认', inputField({ placeholder: '提示内容', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}` , className: 'gs-input-composite' })),
    inputRow('未输入悬停', inputField({ placeholder: '提示内容', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}`, state: 'is-hover', className: 'gs-input-composite' })),
    inputRow('正在输入', inputField({ value: '正在输入的文字', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}`, state: 'is-focused', className: 'gs-input-composite' })),
    inputRow('输入默认', inputField({ value: '输入的内容', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}`, className: 'gs-input-composite' })),
    inputRow('输入异常', inputField({ value: '输入的内容', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}`, state: 'is-error', className: 'gs-input-composite' }), '<p class="input-helper">辅助文字</p>'),
    inputRow('禁用输入', inputField({ value: '输入的内容', prefix: 'http://', suffix: `.com${gsIcon('chevronDown', 'gs-input-chevron')}`, disabled: true, className: 'gs-input-composite' })),
  ].join('');
  const numericRows = [
    inputRow('未输入默认', `<div class="input-number-pair">${inputNumberField('', '', false)}${inputField({ placeholder: '提示内容', className: 'gs-input-spinner' })}</div>`),
    inputRow('未输入悬停', `<div class="input-number-pair">${inputNumberField('', 'is-hover', false)}${inputField({ placeholder: '提示内容', state: 'is-hover', className: 'gs-input-spinner' })}</div>`),
    inputRow('正在输入', `<div class="input-number-pair">${inputNumberField('2.5', 'is-focused', false)}${inputField({ value: '2.5', state: 'is-focused', className: 'gs-input-spinner' })}</div>`),
    inputRow('输入默认', `<div class="input-number-pair">${inputNumberField('2.5')}${inputField({ value: '2.5', className: 'gs-input-spinner' })}</div>`),
    inputRow('输入异常', `<div class="input-number-pair">${inputNumberField('100', 'is-error')}${inputField({ value: '2.5', className: 'gs-input-spinner' })}</div>`, '<p class="input-helper">辅助文字</p>'),
    inputRow('禁用输入', `<div class="input-number-pair">${inputNumberField('2.5', '', false, true)}${inputField({ value: '2.5', disabled: true, className: 'gs-input-spinner' })}</div>`),
  ].join('');
  const tagSet = (count = 1, state = '', disabled = false) => Array.from({ length: count }, () => `<span class="gs-tag gs-tag--neutral gs-tag--small ${disabled ? 'is-disabled' : ''}"><span class="gs-tag__label">文案信息</span><span class="gs-tag__close" aria-hidden="true">${closeIconSvg()}</span></span>`).join('');
  const tagRows = [
    inputRow('未输入默认', `<div class="gs-input-field gs-input-tags"><input placeholder="提示内容" aria-label="标签输入" /></div>`),
    inputRow('未输入悬停', `<div class="gs-input-field gs-input-tags is-hover"><input placeholder="提示内容" aria-label="标签输入" /></div>`),
    inputRow('正在输入', `<div class="gs-input-field gs-input-tags is-focused">${tagSet(1)}<input value="正在输入的文字" aria-label="标签输入" /></div>`),
    inputRow('输入默认', `<div class="gs-input-field gs-input-tags">${tagSet(2)}<input aria-label="标签输入" /></div>`),
    inputRow('输入悬停', `<div class="gs-input-field gs-input-tags is-hover">${tagSet(2)}<input aria-label="标签输入" /></div>`),
    inputRow('禁用输入', `<div class="gs-input-field gs-input-tags is-disabled">${tagSet(2, '', true)}<input disabled aria-label="标签输入" /></div>`),
  ].join('');
  const rangeRows = [
    inputRow('未输入默认', `<div class="gs-input-range">${inputField({ placeholder: '提示内容' })}<span>—</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('未输入悬停', `<div class="gs-input-range">${inputField({ placeholder: '提示内容', state: 'is-hover' })}<span>—</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('正在输入', `<div class="gs-input-range">${inputField({ value: '正在输入的文字', state: 'is-focused' })}<span>—</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('输入默认', `<div class="gs-input-range">${inputField({ value: '输入的文字' })}<span>—</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('输入悬停', `<div class="gs-input-range">${inputField({ value: '输入的文字', state: 'is-hover' })}<span>—</span>${inputField({ placeholder: '提示内容' })}</div>`),
    inputRow('禁用输入', `<div class="gs-input-range">${inputField({ value: '输入的文字', disabled: true })}<span>—</span>${inputField({ placeholder: '提示内容', disabled: true })}</div>`),
  ].join('');
  const liveTags = `<span class="gs-tag gs-tag--neutral gs-tag--small gs-tag--closeable" data-tag-item><span class="gs-tag__label">文案信息</span>${tagCloseButton('文案信息')}</span>`;
  return `<div class="input-layout">${inputSection('带标题输入框', '带标题输入框', plainRows())}${inputSection('密码输入框', '密码输入框', passwordRows)}${inputSection('装饰输入框', '装饰输入框', decoratedRows)}${inputSection('数字输入框', '数字输入框', numericRows)}${inputSection('标签输入框', '标签输入框', tagRows)}${inputSection('范围输入框', '范围输入框', rangeRows)}</div><section id="交互示例"><h2>交互示例</h2><p>输入框支持清空、密码显隐、数字步进和标签移除；禁用项不可操作。</p><div class="demo-card input-live-grid"><div class="input-live-item"><span class="input-live-label">文本输入</span>${inputField({ value: '可编辑内容', clear: true, className: 'input-live-field' })}</div><div class="input-live-item"><span class="input-live-label">密码输入</span>${inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, className: 'input-live-field' })}</div><div class="input-live-item"><span class="input-live-label">数字输入</span><div class="input-live-number"><button class="gs-input-step-button" type="button" data-input-step="-1" aria-label="减少">${gsIcon('minus', 'gs-input-step-icon gs-input-step-icon--minus')}</button><div class="gs-input-field"><input type="number" value="2.5" placeholder="提示内容" aria-label="数字输入" /></div><button class="gs-input-step-button" type="button" data-input-step="1" aria-label="增加">${gsIcon('plus', 'gs-input-step-icon gs-input-step-icon--plus')}</button></div></div><div class="input-live-item" data-tag-demo><span class="input-live-label">标签输入</span><div class="gs-input-field gs-input-tags">${liveTags}<input placeholder="提示内容" aria-label="添加标签" /><span class="input-live-status" data-tag-live aria-live="polite"></span></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>输入框统一使用 32px 高度、4px 圆角和 14/22px Regular 文本。</li><li>悬停、聚焦和异常状态应提供清晰边框反馈；错误说明放在控件下方。</li><li>密码、数字、标签和范围输入只在语义明确时使用对应结构。</li><li>长文本优先使用多行组件，不在单行输入框中截断关键信息。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>每个输入框必须有可关联的标签或 aria-label。</li><li>错误信息通过 aria-describedby 关联，不能只依靠红色边框。</li><li>禁用输入使用原生 disabled，清空、显隐和步进操作提供可理解的名称。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>text | password | number</span><span>输入类型</span></div><div><code>value</code><span>string | number</span><span>受控值</span></div><div><code>placeholder</code><span>string</span><span>占位提示</span></div><div><code>status</code><span>default | error</span><span>视觉状态</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>prefix / suffix</code><span>node</span><span>装饰输入框前后缀</span></div><div><code>allowClear</code><span>boolean</span><span>显示清空操作</span></div><div><code>step</code><span>number</span><span>数字输入步进值</span></div></div></section>`;
}
function inputBodySimplified() {
  const section = (id, title, description, live, disabled) => {
    const examples = disabled === null ? live : `<div class="input-example"><span class="input-example__label">交互示例</span>${live}</div><div class="input-example"><span class="input-example__label">禁用示例</span>${disabled}</div>`;
    return `<section id="${id}" class="input-component-section"><h2>${title}</h2><p>${description}</p><div class="demo-card input-component-demo">${examples}</div></section>`;
  };
  const liveTags = `<span class="gs-tag gs-tag--neutral gs-tag--small gs-tag--closeable" data-tag-item><span class="gs-tag__label">文案信息</span>${tagCloseButton('文案信息')}</span>`;
  const stepperLive = `<div class="input-live-number"><button class="gs-input-step-button" type="button" data-input-step="-1" aria-label="减少">${gsIcon('minus', 'gs-input-step-icon gs-input-step-icon--minus')}</button><div class="gs-input-field"><input type="number" data-numeric-only inputmode="decimal" value="2.5" step="0.5" placeholder="提示内容" aria-label="数字输入" /></div><button class="gs-input-step-button" type="button" data-input-step="1" aria-label="增加">${gsIcon('plus', 'gs-input-step-icon gs-input-step-icon--plus')}</button></div>`;
  const stepperDisabled = `<div class="input-live-number"><button class="gs-input-step-button" type="button" disabled aria-label="减少">${gsIcon('minus', 'gs-input-step-icon gs-input-step-icon--minus')}</button><div class="gs-input-field is-disabled"><input type="number" data-numeric-only inputmode="decimal" value="2.5" disabled aria-label="数字输入" /></div><button class="gs-input-step-button" type="button" disabled aria-label="增加">${gsIcon('plus', 'gs-input-step-icon gs-input-step-icon--plus')}</button></div>`;
  const numberExample = (state, content) => `<div class="input-example"><span class="input-example__label">${state}</span>${content}</div>`;
  const numberGroup = (type, live, disabled) => `<div class="input-number-group"><span class="input-number-group__title">${type}</span>${numberExample('交互示例', live)}${numberExample('禁用示例', disabled)}</div>`;
  const numberLive = `${numberGroup('加减控制', stepperLive, stepperDisabled)}${numberGroup('上下控制', inputNumberSpinnerField('2.5'), inputNumberSpinnerField('2.5', '', true))}`;
  const disabledNumber = null;
  return `${section('带标题输入框', '带标题输入框', '适用于需要在输入框前明确标识字段含义的场景；默认空值和清空后共用同一个提示语。', `<div class="gs-input-labeled"><span>四字标题</span>${inputField({ value: '输入内容', placeholder: '提示内容', clear: true, className: 'input-live-field' })}</div>`, `<div class="gs-input-labeled"><span>四字标题</span>${inputField({ value: '输入内容', disabled: true })}</div>`)}${section('密码输入框', '密码输入框', '用于密码等敏感信息；点击眼睛图标切换明文与密文。', inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, className: 'input-live-field' }), inputField({ value: 'Gst$5M*R1', type: 'password', eye: true, disabled: true }))}${section('装饰输入框', '装饰输入框', '通过前缀和后缀补充协议、单位或域名等结构信息。', inputField({ placeholder: '提示内容', prefix: 'http://', suffix: '.com⌄', className: 'gs-input-composite input-live-field' }), inputField({ value: '输入内容', prefix: 'http://', suffix: '.com⌄', disabled: true, className: 'gs-input-composite' }))}${section('数字输入框', '数字输入框', '用于数量、金额等数值输入；同时支持加减按钮和上下箭头两种步进控制。', numberLive, disabledNumber)}${section('标签输入框', '标签输入框', '用于输入多个可独立移除的标签；点击标签关闭按钮即可移除。', `<div class="gs-input-field gs-input-tags" data-tag-demo>${liveTags}<input placeholder="提示内容" aria-label="添加标签" /><span class="input-live-status" data-tag-live aria-live="polite"></span></div>`, `<div class="gs-input-field gs-input-tags is-disabled"><span class="gs-tag gs-tag--neutral gs-tag--small is-disabled" aria-disabled="true"><span class="gs-tag__label">文案信息</span></span><input disabled aria-label="标签输入" /></div>`)}${section('范围输入框', '范围输入框', '用于输入起止范围；两个输入框共享同一语义并保持对齐。', `<div class="gs-input-range">${inputField({ placeholder: '提示内容', className: 'input-live-field' })}<span>—</span>${inputField({ placeholder: '提示内容', className: 'input-live-field' })}</div>`, `<div class="gs-input-range">${inputField({ value: '1', disabled: true })}<span>—</span>${inputField({ value: '99', disabled: true })}</div>`)}<section id="使用规则"><h2>使用规则</h2><ul><li>每类输入框提供一个完整交互示例；需要说明不可操作状态时，紧邻展示一个禁用示例。</li><li><code>placeholder</code> 同时用于初始空值和清空后的提示，只配置一次即可。</li><li>统一使用 32px 高度、4px 圆角和 14/22px Regular 文本。</li><li>悬停、聚焦和异常状态通过真实交互或表单校验反馈呈现，不重复铺设状态矩阵。</li><li>错误说明放在控件下方，密码、数字、标签和范围结构只用于对应语义。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>每个输入框必须有可关联的标签或 aria-label。</li><li>错误信息通过 aria-describedby 关联，不能只依靠红色边框。</li><li>禁用输入使用原生 disabled，清空、显隐、关闭和步进操作提供可理解的名称。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>text | password | number</span><span>输入类型</span></div><div><code>value</code><span>string | number</span><span>受控值</span></div><div><code>placeholder</code><span>string</span><span>初始空值与清空后共用的提示语，默认“提示内容”，可自定义</span></div><div><code>status</code><span>default | error</span><span>视觉状态</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>prefix / suffix</code><span>node</span><span>装饰输入框前后缀</span></div><div><code>allowClear</code><span>boolean</span><span>显示清空操作</span></div><div><code>step</code><span>number</span><span>输入数字的步进值</span></div></div></section>`;
}
function searchFieldMarkup(size='small', placeholder='提示内容', value='') {
  const large = size === 'large';
  const fieldClass = `gs-search-field gs-search-field--${size}${value ? ' is-active' : ''}`;
  const leadingIcon = large ? '' : gsIcon('search', 'gs-search-icon gs-search-icon--leading');
  const safePlaceholder = escapeHtml(placeholder);
  const safeValue = escapeHtml(value);
  return `<div class="${fieldClass}" data-search-field data-search-size="${size}">${leadingIcon}<input type="search" value="${safeValue}" placeholder="${safePlaceholder}" aria-label="搜索内容" autocomplete="off" data-search-input>${large ? `<button class="gs-search-submit" type="button" data-search-submit aria-label="搜索" aria-disabled="${value ? 'false' : 'true'}"${value ? '' : ' disabled'} tabindex="${value ? '0' : '-1'}">${gsIcon('searchLarge', 'gs-search-icon')}</button>` : `${inputClearButton({ label: '清空搜索', dataAttr: 'data-search-clear', hidden: !value, search: true })}${gsIcon('search', 'gs-search-icon gs-search-icon--trailing')}`}</div>`;
}
function highlightSearchOption(option, query='') {
  const text = escapeHtml(option);
  const needle = escapeHtml(query.trim());
  if (!needle) return text;
  const pattern = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
  return text.replace(pattern, match => `<span class="gs-search-option__match">${match}</span>`);
}
function searchSuggestions(options, query='', open=false) {
  return `<div class="gs-search-suggestions" data-search-suggestions${open ? '' : ' hidden'}>${options.map((option, index) => `<button type="button" class="gs-search-option" data-search-option="${escapeHtml(option)}" aria-selected="${index === 0 ? 'true' : 'false'}">${highlightSearchOption(option, query)}</button>`).join('')}</div>`;
}
function searchExample(size, {label, withPopup=false, value='', placeholder='提示内容'}={}) {
  const options = ['正在输入的选项', '正在输入的选项111', '正在输入的选项1111'];
  const popup = withPopup ? searchSuggestions(options, value, Boolean(value)) : '';
  return `<div class="gs-search-example gs-search-example--${size}${withPopup ? ' gs-search-example--with-popup' : ' gs-search-example--without-popup'}" data-search-demo data-search-popup="${withPopup ? 'true' : 'false'}"><span class="gs-search-example__label">${escapeHtml(label || `${size === 'large' ? '大' : '小'}搜索组件`)}</span>${searchFieldMarkup(size, placeholder, value)}${popup}<span class="gs-search-live" data-search-live aria-live="polite"></span></div>`;
}
function searchBody() {
  return `<section id="小搜索框"><h2>小搜索框</h2><p>用于紧凑工具栏和列表页搜索；可按需展示模糊查询候选浮层。</p><div class="demo-card gs-search-demo-grid">${searchExample('small', {label:'小搜索组件（无浮框）'})}${searchExample('small', {label:'小搜索组件（有浮框）', withPopup:true, value:'正在输入'})}</div></section><section id="大搜索框"><h2>大搜索框</h2><p>用于页面主搜索；右侧独立搜索按钮与输入框保持同一交互区域。</p><div class="demo-card gs-search-demo-grid gs-search-demo-grid--large">${searchExample('large', {label:'大搜索组件（无浮框）'})}${searchExample('large', {label:'大搜索组件（有浮框）', withPopup:true, value:'正在输入'})}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>小搜索框用于工具栏等紧凑场景，大搜索框用于页面级主搜索。</li><li>模糊查询浮层只提供候选定位辅助，不替代明确结果。</li><li>输入后按回车或点击搜索按钮提交；候选项可点击确认。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>输入框提供可理解的 aria-label，清空和搜索按钮提供独立名称。</li><li>候选列表使用真实按钮，支持 Tab、Enter 和 Escape 操作。</li><li>搜索结果或提交状态通过 aria-live 文本反馈。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>size</code><span>small | large</span><span>搜索框尺寸，默认 small</span></div><div><code>value</code><span>string</span><span>当前搜索关键词</span></div><div><code>placeholder</code><span>string</span><span>初始空值与清空后共用的提示语，默认“提示内容”，可自定义</span></div><div><code>allowClear</code><span>boolean</span><span>小搜索框是否显示清空操作</span></div><div><code>popup</code><span>boolean</span><span>是否显示模糊查询候选浮层</span></div><div><code>onSearch</code><span>(value) =&gt; void</span><span>回车或搜索按钮提交时触发</span></div></div></section>`;
}
function pickerOption(label, { selected = false, disabled = false, arrow = false, value = '' } = {}) {
  return `<button type="button" class="gs-select-option${selected ? ' is-selected' : ''}" role="option" aria-selected="${selected}"${disabled ? ' disabled aria-disabled="true"' : ''}${value ? ` data-picker-value="${escapeHtml(value)}"` : ''}>${escapeHtml(label)}${arrow ? gsIcon('chevronRight', 'gs-select-option__arrow') : ''}</button>`;
}
function selectChevron() {
  return `<span class="gs-select__chevron" aria-hidden="true">${gsIcon('chevronDown', 'gs-select__chevron-icon gs-select__chevron-icon--down')}${gsIcon('chevronUp', 'gs-select__chevron-icon gs-select__chevron-icon--up')}</span>`;
}
function pickerSingleExample({ id, withIcon = false, value = '请选择' }) {
  const icon = withIcon ? `<span class="gs-select__prefix" aria-hidden="true">${gsIcon('user')}</span>` : '';
  const valueClass = value === '请选择' ? 'gs-select__value gs-select__placeholder' : 'gs-select__value is-selected';
  return `<div class="gs-picker-example" data-picker="single"><span class="gs-picker-example__label">交互示例</span><div class="gs-select-wrap"><button type="button" class="gs-select" data-picker-trigger aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-popup">${icon}<span class="${valueClass}">${escapeHtml(value)}</span>${selectChevron()}</button><div id="${id}-popup" class="gs-select-popup" data-picker-popup role="listbox" hidden>${pickerOption('这是选项一')}${pickerOption('这是选项二')}${pickerOption('暂不可用', { disabled: true })}</div></div></div><div class="gs-picker-example" data-picker="single-disabled"><span class="gs-picker-example__label">禁用示例</span><button type="button" class="gs-select is-disabled" disabled aria-disabled="true">${icon}<span class="gs-select__value">已选择内容</span><span class="gs-select__chevron" aria-hidden="true">${gsIcon('chevronDown')}</span></button></div>`;
}
function pickerMultiOption(label, { selected = false, disabled = false, value = label } = {}) {
  return `<button type="button" class="gs-select-option gs-select-option--checkable${selected ? ' is-selected' : ''}" role="option" aria-selected="${selected}" data-picker-multi-option data-picker-label="${escapeHtml(label)}" data-picker-value="${escapeHtml(value)}"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-select-option__checkbox" aria-hidden="true"></span><span class="gs-select-option__label">${escapeHtml(label)}</span></button>`;
}
function pickerMultiExample({ id = 'picker-multi' } = {}) {
  return `<div class="gs-picker-example gs-picker-example--multi" data-picker="multi"><span class="gs-picker-example__label">交互示例</span><div class="gs-select-wrap"><div class="gs-select gs-select--multi" role="combobox" tabindex="0" data-picker-trigger aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-popup"><span class="gs-select__prefix" aria-hidden="true">${gsIcon('user')}</span><span class="gs-select__tags" data-picker-tags></span><span class="gs-select__placeholder" data-picker-placeholder>请选择</span>${selectChevron()}</div><div id="${id}-popup" class="gs-select-popup" data-picker-popup role="listbox" hidden>${pickerMultiOption('这是选项一', { value: '这是选项一' })}${pickerMultiOption('这是选项二', { value: '这是选项二' })}${pickerMultiOption('这是选项三', { value: '这是选项三' })}${pickerMultiOption('这是选项四', { disabled: true, value: '这是选项四' })}</div></div></div><div class="gs-picker-example gs-picker-example--multi-disabled" data-picker="multi-disabled"><span class="gs-picker-example__label">禁用示例</span><div class="gs-select gs-select--multi is-disabled" aria-disabled="true"><span class="gs-select__prefix" aria-hidden="true">${gsIcon('user')}</span><span class="gs-select__tags">${pickerMultiTag('文案信息', '文案信息', false)}${pickerMultiTag('文案信息', '文案信息-2', false)}</span><span class="gs-select__chevron" aria-hidden="true">${gsIcon('chevronDown')}</span></div></div>`;
}
function pickerCascaderExample() {
  return `<div class="gs-picker-example gs-picker-example--cascader" data-picker="cascader"><span class="gs-picker-example__label">交互示例</span><div class="gs-select-wrap"><button type="button" class="gs-select" data-picker-trigger aria-haspopup="listbox" aria-expanded="false" aria-controls="picker-cascader-popup"><span class="gs-select__value gs-select__placeholder">请选择</span>${selectChevron()}</button><div id="picker-cascader-popup" class="gs-select-popup gs-select-popup--cascader" data-picker-popup role="listbox" hidden><div class="gs-select-pane" data-picker-pane="parent">${pickerOption('数据中心', { arrow: true, value: '数据中心' })}${pickerOption('资源管理', { arrow: true, value: '资源管理' })}${pickerOption('系统设置', { arrow: true, value: '系统设置' })}</div><div class="gs-select-pane" data-picker-pane="child"><span class="gs-select-pane__placeholder">请选择上级选项</span></div></div></div></div><div class="gs-picker-example gs-picker-example--cascader-disabled" data-picker="cascader-disabled"><span class="gs-picker-example__label">禁用示例</span><button type="button" class="gs-select is-disabled" disabled aria-disabled="true"><span class="gs-select__value">已选择内容 / 已选择内容</span><span class="gs-select__chevron" aria-hidden="true">${gsIcon('chevronDown')}</span></button></div>`;
}
function pickerBody() {
  return `<section id="单选框"><h2>单选框</h2><p>从互斥选项中选择一个值，点击后展开候选浮层。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerSingleExample({ id: 'picker-single', value: '请选择' })}</div></div></section><section id="多选框"><h2>多选框</h2><p>从多个选项中选择多个值；已选项以标签展示，可继续打开浮层增删选项。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerMultiExample({ id: 'picker-multi' })}</div></div></section><section id="级联选框"><h2>级联选框</h2><p>按父子层级逐级选择；选择父级后展示对应的下一级选项。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerCascaderExample()}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>选项较少且需要明确选择时使用 Select；互斥选项很少时可直接使用 Radio。</li><li>单选器默认显示占位提示，选择后显示已选内容；多选器保留已选标签并允许继续修改。</li><li>禁用状态不可打开浮层，禁用选项不能被选择。</li><li>级联选框只用于真实的父子层级，选项名称保持同级粒度一致。</li><li>浮层与触发器保持同一层级，选择后保留当前值。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>触发器使用 button 与 aria-haspopup、aria-expanded、aria-controls。</li><li>候选项使用 role=option 和 aria-selected，禁用项使用原生 disabled。</li><li>多选标签的移除按钮提供独立 accessible name；选择状态不只依赖颜色。</li><li>支持 Enter/Space 打开或切换，Escape 关闭，方向键在候选项之间移动。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>options</code><span>Option[]</span><span>单选或多选候选项</span></div><div><code>mode</code><span>single | multiple</span><span>选择模式，默认 single</span></div><div><code>value</code><span>string | string[]</span><span>当前选中值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用选择器</span></div><div><code>prefix</code><span>node</span><span>可选的前置图标</span></div><div><code>cascader</code><span>boolean</span><span>是否启用级联层级选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>选项变化时触发</span></div></div></section>`;
}
function dtpTrigger(id, kind='date', value='', disabled=false, initialOpen=false) {
  const icon = kind === 'time' ? 'clock' : 'calendar';
  const popup = kind === 'time' ? dtpTimePopup(id, value) : kind === 'year' ? dtpYearPopup(id) : dtpDatePopup(id, value);
  const shown = value || (kind === 'time' ? '请选择' : kind === 'year' ? '请选择年份' : '请选择日期');
  // Demos always start in their resting state. Opening is initiated by the user.
  const opened = false;
  const triggerContent = kind === 'time'
    ? `<span class="gs-dtp-trigger__value${value ? '' : ' is-placeholder'}" data-dtp-value>${escapeHtml(shown)}</span><span class="gs-dtp-trigger__icon gs-dtp-trigger__icon--end" aria-hidden="true">${gsIcon(icon)}</span>`
    : `<span class="gs-dtp-trigger__value${value ? '' : ' is-placeholder'}" data-dtp-value>${escapeHtml(shown)}</span><span class="gs-dtp-trigger__icon" aria-hidden="true">${gsIcon(icon)}</span>`;
  return `<div class="gs-dtp-field${disabled ? ' is-disabled' : ''}" data-dtp-field data-dtp-kind="${kind}"><button type="button" class="gs-dtp-trigger${disabled ? ' is-disabled' : ''}${opened ? ' is-active' : ''}" data-dtp-trigger aria-haspopup="dialog" aria-expanded="${opened}" aria-controls="${id}-popup"${disabled ? ' disabled aria-disabled="true"' : ''}>${triggerContent}</button>${popup.replace(' hidden>', opened ? '>' : ' hidden>')}</div>`;
}
function currentTimeValue(date = new Date()) { return [date.getHours(), date.getMinutes(), date.getSeconds()].map(value => String(value).padStart(2, '0')).join(':'); }
function normalizeTimeValue(value = '') {
  const fallback = currentTimeValue().split(':').map(Number);
  const parts = String(value || '').split(':').map(Number);
  return [0, 1, 2].map(index => {
    const max = index === 0 ? 23 : 59;
    const part = Number.isFinite(parts[index]) ? parts[index] : fallback[index];
    return String(Math.min(max, Math.max(0, part))).padStart(2, '0');
  }).join(':');
}
function timeWheelValues(kind) { const size = kind === 'hour' ? 24 : 60; return Array.from({ length: size }, (_, index) => String(index).padStart(2, '0')); }
function dtpTimePopup(id, selectedValue='') {
  const selected = normalizeTimeValue(selectedValue).split(':');
  const columns = [['hour', timeWheelValues('hour')], ['minute', timeWheelValues('minute')], ['second', timeWheelValues('second')]];
  const cycleCount = 5;
  const middleCycle = Math.floor(cycleCount / 2);
  return `<div id="${id}-popup" class="gs-dtp-popover gs-dtp-time-popover" data-dtp-popup role="dialog" aria-label="选择时间" hidden><div class="gs-dtp-time-columns">${columns.map(([kind, values],columnIndex)=>`<div class="gs-dtp-time-column" data-dtp-column="${kind}"><div class="gs-dtp-time-wheel" data-dtp-time-wheel data-dtp-time-initial="${selected[columnIndex]}" data-dtp-middle-cycle="${middleCycle}" role="listbox" aria-label="${kind === 'hour' ? '小时' : kind === 'minute' ? '分钟' : '秒'}" tabindex="0">${Array.from({length:cycleCount},(_,cycle)=>values.map(v=>`<span class="gs-dtp-time-item${cycle===middleCycle&&v===selected[columnIndex]?' is-in-slot':''}" data-dtp-time-item data-dtp-time-cycle="${cycle}" data-dtp-value="${v}" role="option" aria-selected="${cycle===middleCycle&&v===selected[columnIndex]}">${v}</span>`).join('')).join('')}</div></div>`).join('')}</div><div class="gs-dtp-popover__footer gs-dtp-time-footer"><button type="button" class="gs-button gs-button--text-primary" data-dtp-action="now">现在</button><button type="button" class="gs-button gs-button--secondary" data-dtp-action="cancel">取消</button><button type="button" class="gs-button" data-dtp-action="confirm">确认</button></div></div>`;
}
function dtpDatePopup(id, selectedDate = '') { const {year,month}=calendarMonthFromValue(selectedDate); return `<div id="${id}-popup" class="gs-dtp-popover gs-dtp-popover--calendar" data-dtp-popup data-dtp-calendar-year="${year}" data-dtp-calendar-month="${month}" data-dtp-calendar-selected="${escapeHtml(selectedDate)}" role="dialog" aria-label="选择日期" hidden><div class="gs-dtp-calendar__head"><button type="button" class="gs-dtp-nav" data-dtp-nav="prev" aria-label="上个月">${dateNavIcon('prev')}</button><strong data-dtp-calendar-title>${year}年${month}月</strong><button type="button" class="gs-dtp-nav" data-dtp-nav="next" aria-label="下个月">${dateNavIcon('next')}</button></div><div class="gs-dtp-weekdays">${['日','一','二','三','四','五','六'].map(x=>`<span>${x}</span>`).join('')}</div><div class="gs-dtp-calendar-grid" data-dtp-calendar-grid>${dtpCalendarCells(year,month,selectedDate)}</div><div class="gs-dtp-popover__footer"><button type="button" class="gs-dtp-action gs-dtp-action--quiet" data-dtp-action>取消</button><button type="button" class="gs-dtp-action" data-dtp-action>确定</button></div></div>`; }
function dtpYearPopup(id) { return `<div id="${id}-popup" class="gs-dtp-popover" data-dtp-popup role="dialog" aria-label="选择年份" hidden><div class="gs-dtp-calendar__head"><button type="button" class="gs-dtp-nav" data-dtp-nav="prev" aria-label="上一组年份">${dateNavIcon('prev')}</button><strong>选择年份</strong><button type="button" class="gs-dtp-nav" data-dtp-nav="next" aria-label="下一组年份">${dateNavIcon('next')}</button></div><div class="gs-dtp-year-grid">${Array.from({length:12},(_,i)=>2024+i).map(y=>`<button type="button" class="gs-dtp-option${y===2026?' is-current':''}" data-dtp-option data-dtp-value="${y}">${y}</button>`).join('')}</div><div class="gs-dtp-popover__footer"><button type="button" class="gs-dtp-action gs-dtp-action--quiet" data-dtp-action>取消</button><button type="button" class="gs-dtp-action" data-dtp-action>确定</button></div></div>`; }
function dtpExample(label, content) { return `<div class="gs-dtp-example"><span class="gs-dtp-example__label">${label}</span>${content}</div>`; }
function dateTimePickerBody() { return `<section id="时间选择"><h2>时间选择</h2><p>选择一天中的时间，支持默认、激活与禁用状态。</p><div class="demo-card gs-dtp-card gs-dtp-time-card"><div class="gs-dtp-state-list"><div class="gs-dtp-state-row" data-dtp-state="default"><span class="gs-dtp-state-label">未选择默认</span>${dtpTrigger('dtp-time-default','time')}</div><div class="gs-dtp-state-row" data-dtp-state="hover"><span class="gs-dtp-state-label">未选择悬停</span>${dtpTrigger('dtp-time-hover','time')}</div><div class="gs-dtp-state-row is-active" data-dtp-state="active"><span class="gs-dtp-state-label">激活选择框</span>${dtpTrigger('dtp-time-active','time','14:45:31',false,true)}</div><div class="gs-dtp-state-row is-disabled" data-dtp-state="disabled"><span class="gs-dtp-state-label">禁用选择</span>${dtpTrigger('dtp-time-disabled','time','14:45:31',true)}</div></div></div></section><section id="日期加时间选择"><h2>日期加时间选择</h2><p>日期与时间可独立选择，适用于起止时间等结构化场景。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid"><div class="gs-dtp-example"><span class="gs-dtp-example__label">交互示例</span><div class="gs-dtp-range">${dtpTrigger('dtp-range-date','date')}<span class="gs-dtp-range__separator">至</span>${dtpTrigger('dtp-range-time','time')}</div></div><div class="gs-dtp-example"><span class="gs-dtp-example__label">禁用示例</span><div class="gs-dtp-range">${dtpTrigger('dtp-range-date-disabled','date','2026-08-13',true)}<span class="gs-dtp-range__separator">至</span>${dtpTrigger('dtp-range-time-disabled','time','18:30',true)}</div></div></div></div></section><section id="日期选择"><h2>日期选择</h2><p>选择具体日期，浮层中的日期网格与输入框保持同一交互区域。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-date','date'))}${dtpExample('禁用示例',dtpTrigger('dtp-date-disabled','date','2026-08-13',true))}</div></div></section><section id="年份选择"><h2>年份选择</h2><p>选择年份，适用于年度筛选与统计口径设置。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-year','year'))}${dtpExample('禁用示例',dtpTrigger('dtp-year-disabled','year','2026',true))}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>时间、日期与日期时间范围使用对应类型，避免让用户手动输入格式。</li><li>激活后显示浮层，选择后回填值并关闭；点击外部区域也会关闭浮层。</li><li>禁用状态不可打开、不可选择，且不产生悬停与按下反馈。</li><li>日期范围的起止值应保持清晰的先后关系，并提供可读的格式提示。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>time | date | datetime | year</span><span>选择器类型</span></div><div><code>value</code><span>string | Date</span><span>当前值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>range</code><span>boolean</span><span>是否启用范围选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>值变化时触发</span></div></div></section>`; }
function dateTimePickerBodySingle() {
  return `<section id="时间选择"><h2>时间选择</h2><p>选择一天中的时间；交互示例可打开浮层完成选择，禁用示例不可操作。</p><div class="demo-card gs-dtp-card gs-dtp-time-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-time-interactive','time',currentTimeValue(),false,true))}${dtpExample('禁用示例',dtpTrigger('dtp-time-disabled','time',currentTimeValue(),true))}</div></div></section><section id="日期加时间选择"><h2>日期加时间选择</h2><p>日期面板与时间面板左右独立选择，浮窗浮在组件上方，不挤压页面布局。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-datetime-stack">${dtpExample('交互示例',dtpDateTimeRange('dtp-datetime-range-single','2026-05-21 14:45:31','',false,true))}${dtpExample('禁用示例',dtpDateTimeRange('dtp-datetime-range-disabled-single','2026-05-21 14:45:31','2026-05-21 14:45:31',true))}</div></div></section><section id="日期选择"><h2>日期选择</h2><p>选择具体日期，浮层中的日期网格与输入框保持同一交互区域。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-date-single','date'))}${dtpExample('禁用示例',dtpTrigger('dtp-date-disabled-single','date','2026-08-13',true))}</div></div></section><section id="年份选择"><h2>年份选择</h2><p>选择年份，适用于年度筛选与统计口径设置。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-year-single','year'))}${dtpExample('禁用示例',dtpTrigger('dtp-year-disabled-single','year','2026',true))}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>时间、日期与日期时间范围使用对应类型，避免让用户手动输入格式。</li><li>激活后显示浮层，选择后回填值并关闭；点击外部区域也会关闭浮层。</li><li>禁用状态不可打开、不可选择，且不产生悬停与按下反馈。</li><li>日期范围的起止值应保持清晰的先后关系，并提供可读的格式提示。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>time | date | datetime | year</span><span>选择器类型</span></div><div><code>value</code><span>string | Date</span><span>当前值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>range</code><span>boolean</span><span>是否启用范围选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>值变化时触发</span></div></div></section>`;
}
function closeDateTimePicker(field) { if(!field) return; field.querySelectorAll('[data-dtp-popup]').forEach(p=>p.hidden=true); field.querySelectorAll('[data-dtp-trigger]').forEach(t=>{t.setAttribute('aria-expanded','false');t.classList.remove('is-active');}); }
function closeAllDateTimePickers(except=null) { document.querySelectorAll('[data-dtp-field]').forEach(f=>{ if(f!==except) closeDateTimePicker(f); }); }
function openDateTimePicker(field) { closeAllDateTimePickers(field); const trigger=field.querySelector('[data-dtp-trigger]'); const popup=field.querySelector('[data-dtp-popup]'); if(!trigger||!popup) return; popup.hidden=false; trigger.setAttribute('aria-expanded','true'); trigger.classList.add('is-active'); }
function handleDateTimeClick(event) { const trigger=event.target.closest('[data-dtp-trigger]'); if(trigger){ if(trigger.disabled) return true; const field=trigger.closest('[data-dtp-field]'); const popup=field?.querySelector('[data-dtp-popup]'); if(popup?.hidden) openDateTimePicker(field); else closeDateTimePicker(field); event.preventDefault(); return true; } const option=event.target.closest('[data-dtp-option]'); if(option){ if(option.disabled) return true; const field=option.closest('[data-dtp-field]'); const value=field?.querySelector('[data-dtp-value]'); if(field?.dataset.dtpKind==='time'){ const column=option.closest('[data-dtp-column]'); column?.querySelectorAll('[data-dtp-option].is-current').forEach(item=>item.classList.remove('is-current')); option.classList.add('is-current'); const parts=[...field.querySelectorAll('[data-dtp-column]')].map(col=>col.querySelector('[data-dtp-option].is-current')?.dataset.dtpValue||'00'); if(value){value.textContent=parts.join(':');value.classList.remove('is-placeholder');} return true; } if(value){value.textContent=option.dataset.dtpValue||option.textContent.trim();value.classList.remove('is-placeholder');} closeDateTimePicker(field); return true; } const action=event.target.closest('[data-dtp-action]'); if(action){closeDateTimePicker(action.closest('[data-dtp-field]')); return true;} const nav=event.target.closest('[data-dtp-nav]'); if(nav){event.preventDefault(); return true;} return false; }
function handleDateTimeOutsideClick(event) { if(!event.target.closest('[data-dtp-field]')) closeAllDateTimePickers(); }
function handleDateTimeKeydown(event) { const field=event.target.closest('[data-dtp-field]'); if(!field) return; if(event.key==='Escape'){closeDateTimePicker(field); return;} if((event.key==='Enter'||event.key===' ')&&event.target.closest('[data-dtp-option]')){event.preventDefault(); event.target.click();} }
function dtpDateTimeOption(label, value, part, current = false, disabled = false) {
  return `<button type="button" class="gs-dtp-datetime-option${current ? ' is-current' : ''}" data-dtp-datetime-option data-dtp-datetime-part="${part}" data-dtp-datetime-value="${escapeHtml(value)}"${disabled ? ' disabled aria-disabled="true"' : ''}>${escapeHtml(label)}</button>`;
}
function calendarMonthFromValue(value = '') {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    if (month >= 1 && month <= 12 && day >= 1 && day <= new Date(year, month, 0).getDate()) return { year, month };
  }
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}
function formatCalendarDate(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function calendarCells(year, month, renderCell) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(year, month - 1, index - firstDay + 1);
    return renderCell(date, date.getMonth() === month - 1);
  }).join('');
}
function dtpCalendarCells(year, month, selectedDate = '') {
  return calendarCells(year, month, (date, inMonth) => {
    const value = formatCalendarDate(date);
    return `<button type="button" class="gs-dtp-option${value === selectedDate ? ' is-current' : ''}${inMonth ? '' : ' is-outside'}" data-dtp-option data-dtp-value="${value}"${inMonth ? '' : ' disabled aria-disabled="true"'}>${date.getDate()}</button>`;
  });
}
function dtpDateTimeCalendarCells(year, month, selectedDate = '') {
  return calendarCells(year, month, (date, inMonth) => {
    const value = formatCalendarDate(date);
    return dtpDateTimeOption(String(date.getDate()), value, 'date', value === selectedDate, !inMonth);
  });
}
function setCalendarMonth(popup, delta, dateTime = false) {
  if (!popup) return;
  const current = new Date(Number(popup.dataset.dtpCalendarYear), Number(popup.dataset.dtpCalendarMonth) - 1 + delta, 1);
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  popup.dataset.dtpCalendarYear = String(year);
  popup.dataset.dtpCalendarMonth = String(month);
  const selected = popup.dataset.dtpCalendarSelected || '';
  const title = popup.querySelector(dateTime ? '[data-dtp-datetime-calendar-title]' : '[data-dtp-calendar-title]');
  const grid = popup.querySelector(dateTime ? '[data-dtp-datetime-calendar-grid]' : '[data-dtp-calendar-grid]');
  if (title) title.textContent = dateTime ? `${year} 年　${month}月` : `${year}年${month}月`;
  if (grid) grid.innerHTML = dateTime ? dtpDateTimeCalendarCells(year, month, selected) : dtpCalendarCells(year, month, selected);
}
function dtpDateTimePopup(id, startValue = '', initialOpen = false) {
  const date = startValue ? String(startValue).slice(0, 10) : '2026-08-20';
  const [year, month, day] = date.split('-').map(Number);
  const hours = '14', minutes = '45', seconds = '31';
  const safeYear = Number.isFinite(year) ? year : 2026;
  const safeMonth = Number.isFinite(month) && month > 0 && month < 13 ? month : 8;
  const safeDay = Number.isFinite(day) && day > 0 ? day : 20;
  const selectedDate = `${safeYear}-${String(safeMonth).padStart(2,'0')}-${String(safeDay).padStart(2,'0')}`;
  const calendar = dtpDateTimeCalendarCells(safeYear, safeMonth, selectedDate);
  const timeColumn = (part, values, current) => `<div class="gs-dtp-datetime-time-column" data-dtp-datetime-column="${part}">${values.map(value => dtpDateTimeOption(value, value, part, value === current)).join('')}</div>`;
  const hidden = initialOpen ? '' : ' hidden';
  return `<div id="${id}-datetime-popup" class="gs-dtp-popover gs-dtp-datetime-popover" data-dtp-datetime-popup data-dtp-calendar-year="${safeYear}" data-dtp-calendar-month="${safeMonth}" data-dtp-calendar-selected="${selectedDate}" role="dialog" aria-label="选择日期和时间"${hidden}>
    <div class="gs-dtp-datetime-panels">
      <section class="gs-dtp-datetime-date-panel" aria-label="日期选择">
        <div class="gs-dtp-datetime-date-head"><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="prev-year" aria-label="上一年">${dateNavIcon('prevYear')}</button><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="prev" aria-label="上个月">${dateNavIcon('prev')}</button><strong data-dtp-datetime-calendar-title>${safeYear} 年　${safeMonth}月</strong><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="next" aria-label="下个月">${dateNavIcon('next')}</button><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="next-year" aria-label="下一年">${dateNavIcon('nextYear')}</button></div>
        <div class="gs-dtp-datetime-date-body"><div class="gs-dtp-datetime-weekdays">${['日','一','二','三','四','五','六'].map(dayName => `<span>${dayName}</span>`).join('')}</div><div class="gs-dtp-datetime-calendar" data-dtp-datetime-calendar-grid>${calendar}</div></div>
      </section>
      <section class="gs-dtp-datetime-time-panel" aria-label="时间选择"><h3 class="gs-dtp-datetime-time-title">${hours} : ${minutes} : ${seconds}</h3><div class="gs-dtp-datetime-time-columns">${timeColumn('hour', ['11','12','13','14','15','16','17'], hours)}${timeColumn('minute', ['42','43','44','45','46','47','48'], minutes)}${timeColumn('second', ['28','29','30','31','32','33','34'], seconds)}</div></section>
    </div>
    <div class="gs-dtp-popover__footer gs-dtp-datetime-footer"><button type="button" class="gs-dtp-action gs-dtp-action--text" data-dtp-datetime-action="now">现在</button><span class="gs-dtp-datetime-footer__actions"><button type="button" class="gs-dtp-action gs-dtp-action--text gs-dtp-action--muted" data-dtp-datetime-action="cancel">取消</button><button type="button" class="gs-dtp-action" data-dtp-datetime-action="confirm">确认</button></span></div>
  </div>`;
}
function dtpDateTimeRange(id, startValue = '', endValue = '', disabled = false, initialOpen = false) {
  // Keep date-time ranges closed by default, even when a sample includes a value.
  const opened = false;
  const start = startValue || '请选择日期';
  const end = endValue || '请选择日期';
  return `<div class="gs-dtp-datetime-field${disabled ? ' is-disabled' : ''}" data-dtp-datetime-field data-dtp-datetime-start="${escapeHtml(startValue)}"><button type="button" class="gs-dtp-datetime-trigger${disabled ? ' is-disabled' : ''}${opened ? ' is-active' : ''}" data-dtp-datetime-trigger aria-haspopup="dialog" aria-expanded="${opened}" aria-controls="${id}-datetime-popup"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-dtp-datetime__value${startValue ? '' : ' is-placeholder'}" data-dtp-datetime-value="start">${escapeHtml(start)}</span><span class="gs-dtp-datetime__separator">—</span><span class="gs-dtp-datetime__value${endValue ? '' : ' is-placeholder'}" data-dtp-datetime-value="end">${escapeHtml(end)}</span><span class="gs-dtp-datetime__icon" aria-hidden="true">${gsIcon('calendar')}</span></button>${dtpDateTimePopup(id, startValue, opened)}</div>`;
}
function dateTimePickerBody() {
  return `<section id="时间选择"><h2>时间选择</h2><p>选择一天中的时间，支持默认、激活与禁用状态。</p><div class="demo-card gs-dtp-card gs-dtp-time-card"><div class="gs-dtp-state-list"><div class="gs-dtp-state-row" data-dtp-state="default"><span class="gs-dtp-state-label">未选择默认</span>${dtpTrigger('dtp-time-default','time')}</div><div class="gs-dtp-state-row" data-dtp-state="hover"><span class="gs-dtp-state-label">未选择悬停</span>${dtpTrigger('dtp-time-hover','time')}</div><div class="gs-dtp-state-row is-active" data-dtp-state="active"><span class="gs-dtp-state-label">激活选择框</span>${dtpTrigger('dtp-time-active','time','14:45:31',false,true)}</div><div class="gs-dtp-state-row is-disabled" data-dtp-state="disabled"><span class="gs-dtp-state-label">禁用选择</span>${dtpTrigger('dtp-time-disabled','time','14:45:31',true)}</div></div></div></section><section id="日期加时间选择"><h2>日期加时间选择</h2><p>日期面板与时间面板左右独立选择，浮窗浮在组件上方，不挤压页面布局。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-datetime-stack">${dtpExample('交互示例',dtpDateTimeRange('dtp-datetime-range','2026-05-21 14:45:31','',false,true))}${dtpExample('禁用示例',dtpDateTimeRange('dtp-datetime-range-disabled','2026-05-21 14:45:31','2026-05-21 14:45:31',true))}</div></div></section><section id="日期选择"><h2>日期选择</h2><p>选择具体日期，浮层中的日期网格与输入框保持同一交互区域。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-date','date'))}${dtpExample('禁用示例',dtpTrigger('dtp-date-disabled','date','2026-08-13',true))}</div></div></section><section id="年份选择"><h2>年份选择</h2><p>选择年份，适用于年度筛选与统计口径设置。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-year','year'))}${dtpExample('禁用示例',dtpTrigger('dtp-year-disabled','year','2026',true))}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>时间、日期与日期时间范围使用对应类型，避免让用户手动输入格式。</li><li>激活后显示浮层，选择后回填值并关闭；点击外部区域也会关闭浮层。</li><li>禁用状态不可打开、不可选择，且不产生悬停与按下反馈。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>time | date | datetime | year</span><span>选择器类型</span></div><div><code>value</code><span>string | Date</span><span>当前值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>range</code><span>boolean</span><span>是否启用范围选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>值变化时触发</span></div></div></section>`;
}
function timeWheelParts(field) {
  const value = field?.querySelector('[data-dtp-value]')?.textContent.trim();
  return value?.match(/^\d{2}:\d{2}:\d{2}$/)?.[0].split(':') || [...field?.querySelectorAll('[data-dtp-time-wheel]') || []].map(wheel => wheel.dataset.dtpTimeInitial || '00');
}
function nearestTimeWheelItem(wheel) {
  const items = [...wheel.querySelectorAll('[data-dtp-time-item]')];
  if (!items.length) return null;
  const center = wheel.scrollTop + wheel.clientHeight / 2;
  return items.reduce((nearest, item) => Math.abs(item.offsetTop + item.offsetHeight / 2 - center) < Math.abs(nearest.offsetTop + nearest.offsetHeight / 2 - center) ? item : nearest, items[0]);
}
function updateTimeWheelSelection(field, wheel, current) {
  if (!current) return;
  wheel.querySelectorAll('[data-dtp-time-item]').forEach(item => {
    const selected = item === current;
    item.classList.toggle('is-in-slot', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  const column = wheel.closest('[data-dtp-column]');
  const index = { hour: 0, minute: 1, second: 2 }[column?.dataset.dtpColumn];
  const value = field?.querySelector('[data-dtp-value]');
  if (index === undefined || !value) return;
  const parts = timeWheelParts(field);
  parts[index] = current.dataset.dtpValue;
  value.textContent = parts.join(':');
  value.classList.remove('is-placeholder');
}
function timeWheelTargetForValue(wheel, value, preferMiddle = false) {
  const targets = [...wheel.querySelectorAll('[data-dtp-time-item]')].filter(item => item.dataset.dtpValue === value);
  if (!targets.length) return null;
  if (preferMiddle || wheel.dataset.dtpTimeReady !== 'true') {
    const middle = targets.find(item => item.dataset.dtpTimeCycle === wheel.dataset.dtpMiddleCycle);
    if (middle) return middle;
  }
  const center = wheel.scrollTop + wheel.clientHeight / 2;
  return targets.reduce((nearest, item) => Math.abs(item.offsetTop + item.offsetHeight / 2 - center) < Math.abs(nearest.offsetTop + nearest.offsetHeight / 2 - center) ? item : nearest, targets[0]);
}
function scrollTimeWheelToValue(wheel, value, behavior = 'auto', preferMiddle = false) {
  const target = timeWheelTargetForValue(wheel, value, preferMiddle);
  if (!target) return;
  const top = Math.max(0, target.offsetTop - (wheel.clientHeight - target.offsetHeight) / 2);
  if (Math.abs(wheel.scrollTop - top) > 1) {
    if (behavior === 'smooth') {
      wheel._dtpIsSnapping = true;
      clearTimeout(wheel._dtpSnapTimer);
      wheel._dtpSnapTimer = setTimeout(() => { wheel._dtpIsSnapping = false; }, 360);
    }
    wheel.scrollTo({ top, behavior });
  }
  wheel.querySelectorAll('[data-dtp-time-item]').forEach(item => {
    const selected = item === target;
    item.classList.toggle('is-in-slot', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  wheel.dataset.dtpTimeReady = 'true';
}
function syncTimeWheels(field, behavior = 'auto') {
  if (field?.dataset.dtpKind !== 'time') return;
  timeWheelParts(field).forEach((part, index) => {
    const wheel = field.querySelectorAll('[data-dtp-time-wheel]')[index];
    if (wheel) scrollTimeWheelToValue(wheel, part, behavior);
  });
}
function handleTimeWheelScroll(event) {
  const wheel = event.target.closest?.('[data-dtp-time-wheel]');
  if (!wheel) return;
  const field = wheel.closest('[data-dtp-field]');
  if (wheel._dtpIsSnapping) {
    if (!wheel._dtpScrollFrame) wheel._dtpScrollFrame = requestAnimationFrame(() => {
      wheel._dtpScrollFrame = 0;
      updateTimeWheelSelection(field, wheel, nearestTimeWheelItem(wheel));
    });
    return;
  }
  clearTimeout(wheel._dtpScrollTimer);
  if (!wheel._dtpScrollFrame) wheel._dtpScrollFrame = requestAnimationFrame(() => {
    wheel._dtpScrollFrame = 0;
    const current = nearestTimeWheelItem(wheel);
    updateTimeWheelSelection(field, wheel, current);
    wheel._dtpScrollTimer = setTimeout(() => {
      const latest = nearestTimeWheelItem(wheel);
      if (latest) {
        const middleCycle = wheel.dataset.dtpMiddleCycle;
        const atEdge = middleCycle && latest.dataset.dtpTimeCycle !== middleCycle;
        scrollTimeWheelToValue(wheel, latest.dataset.dtpValue, atEdge ? 'auto' : 'smooth', atEdge);
      }
    }, 140);
  });
}
function closeDateTimePicker(field) { if(!field) return; field.querySelectorAll('[data-dtp-popup],[data-dtp-datetime-popup]').forEach(p=>p.hidden=true); field.querySelectorAll('[data-dtp-trigger],[data-dtp-datetime-trigger]').forEach(t=>{t.setAttribute('aria-expanded','false');t.classList.remove('is-active');}); field.classList.remove('is-open'); }
function closeAllDateTimePickers(except=null) { document.querySelectorAll('[data-dtp-field],[data-dtp-datetime-field]').forEach(f=>{ if(f!==except) closeDateTimePicker(f); }); }
function openDateTimePicker(field) { closeAllDateTimePickers(field); const trigger=field.querySelector('[data-dtp-trigger],[data-dtp-datetime-trigger]'); const popup=field.querySelector('[data-dtp-popup],[data-dtp-datetime-popup]'); if(!trigger||!popup) return; popup.hidden=false; trigger.setAttribute('aria-expanded','true'); trigger.classList.add('is-active'); field.classList.add('is-open'); requestAnimationFrame(() => syncTimeWheels(field)); }
function handleDateTimeClick(event) {
  const datetimeTrigger = event.target.closest('[data-dtp-datetime-trigger]');
  if (datetimeTrigger) {
    if (datetimeTrigger.disabled) return true;
    const field = datetimeTrigger.closest('[data-dtp-datetime-field]');
    const popup = field?.querySelector('[data-dtp-datetime-popup]');
    if (popup?.hidden) openDateTimePicker(field); else closeDateTimePicker(field);
    event.preventDefault();
    return true;
  }
  const datetimeOption = event.target.closest('[data-dtp-datetime-option]');
  if (datetimeOption) {
    if (datetimeOption.disabled) return true;
    const field = datetimeOption.closest('[data-dtp-datetime-field]');
    const part = datetimeOption.dataset.dtpDatetimePart;
    if (part === 'date') {
      const start = field?.querySelector('[data-dtp-datetime-value="start"]');
      const current = start?.textContent.trim() || '请选择日期';
      const time = current.match(/\d{2}:\d{2}:\d{2}/)?.[0] || '14:45:31';
      if (start) { start.textContent = `${datetimeOption.dataset.dtpDatetimeValue} ${time}`; start.classList.remove('is-placeholder'); }
      const popup = field?.querySelector('[data-dtp-datetime-popup]');
      if (popup) popup.dataset.dtpCalendarSelected = datetimeOption.dataset.dtpDatetimeValue;
    } else {
      const start = field?.querySelector('[data-dtp-datetime-value="start"]');
      const current = start?.textContent.trim() || '2026-08-20 14:45:31';
      const date = current.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || '2026-08-20';
      const parts = current.match(/\d{2}:\d{2}:\d{2}/)?.[0].split(':') || ['14', '45', '31'];
      const index = { hour: 0, minute: 1, second: 2 }[part];
      if (start && index !== undefined) { parts[index] = datetimeOption.dataset.dtpDatetimeValue; start.textContent = `${date} ${parts.join(':')}`; start.classList.remove('is-placeholder'); }
    }
    const group = datetimeOption.closest('[data-dtp-datetime-column],.gs-dtp-datetime-calendar');
    group?.querySelectorAll('.is-current').forEach(item => item.classList.remove('is-current'));
    datetimeOption.classList.add('is-current');
    return true;
  }
  const datetimeAction = event.target.closest('[data-dtp-datetime-action]');
  if (datetimeAction) {
    const field = datetimeAction.closest('[data-dtp-datetime-field]');
    if (datetimeAction.dataset.dtpDatetimeAction === 'now') {
      const now = new Date();
      const date = formatCalendarDate(now);
      const time = currentTimeValue(now);
      const start = field?.querySelector('[data-dtp-datetime-value="start"]');
      if (start) { start.textContent = `${date} ${time}`; start.classList.remove('is-placeholder'); }
      const popup = field?.querySelector('[data-dtp-datetime-popup]');
      if (popup) { popup.dataset.dtpCalendarSelected = date; popup.dataset.dtpCalendarYear = String(now.getFullYear()); popup.dataset.dtpCalendarMonth = String(now.getMonth() + 1); setCalendarMonth(popup, 0, true); }
    }
    closeDateTimePicker(field);
    return true;
  }
  const datetimeNav = event.target.closest('[data-dtp-datetime-nav]');
  if (datetimeNav) {
    const action = datetimeNav.dataset.dtpDatetimeNav;
    const delta = action === 'prev-year' ? -12 : action === 'next-year' ? 12 : action === 'prev' ? -1 : 1;
    setCalendarMonth(datetimeNav.closest('[data-dtp-datetime-popup]'), delta, true);
    event.preventDefault();
    return true;
  }
  const trigger = event.target.closest('[data-dtp-trigger]');
  if (trigger) {
    if (trigger.disabled) return true;
    const field = trigger.closest('[data-dtp-field]');
    const popup = field?.querySelector('[data-dtp-popup]');
    if (popup?.hidden) openDateTimePicker(field); else closeDateTimePicker(field);
    event.preventDefault();
    return true;
  }
  const timeItem = event.target.closest('[data-dtp-time-item]');
  if (timeItem) {
    const wheel = timeItem.closest('[data-dtp-time-wheel]');
    const field = timeItem.closest('[data-dtp-field]');
    if (wheel && field) { const preferMiddle = timeItem.dataset.dtpTimeCycle !== wheel.dataset.dtpMiddleCycle; updateTimeWheelSelection(field, wheel, timeItem); scrollTimeWheelToValue(wheel, timeItem.dataset.dtpValue, 'smooth', preferMiddle); }
    return true;
  }
  const option = event.target.closest('[data-dtp-option]');
  if (option) {
    if (option.disabled) return true;
    const field = option.closest('[data-dtp-field]');
    const value = field?.querySelector('[data-dtp-value]');
    if (field?.dataset.dtpKind === 'time') {
      const column = option.closest('[data-dtp-column]');
      const index = { hour: 0, minute: 1, second: 2 }[column?.dataset.dtpColumn];
      const parts = (value?.textContent.trim().match(/^\d{2}:\d{2}:\d{2}$/)?.[0]?.split(':')) || timeWheelParts(field);
      if (index !== undefined) parts[index] = option.dataset.dtpValue;
      if (value) { value.textContent = parts.join(':'); value.classList.remove('is-placeholder'); }
      return true;
    }
    if (value) { value.textContent = option.dataset.dtpValue || option.textContent.trim(); value.classList.remove('is-placeholder'); }
    closeDateTimePicker(field);
    return true;
  }
  const action = event.target.closest('[data-dtp-action]');
  if (action) {
    const field = action.closest('[data-dtp-field]');
    if (action.dataset.dtpAction === 'now' && field?.dataset.dtpKind === 'time') {
      const value = field.querySelector('[data-dtp-value]');
      const now = currentTimeValue();
      if (value) { value.textContent = now; value.classList.remove('is-placeholder'); }
      syncTimeWheels(field, 'smooth');
    }
    closeDateTimePicker(field);
    return true;
  }
  const nav = event.target.closest('[data-dtp-nav]');
  if (nav) {
    const popup = nav.closest('[data-dtp-popup]');
    if (popup?.dataset.dtpCalendarYear) setCalendarMonth(popup, nav.dataset.dtpNav === 'prev' ? -1 : 1);
    event.preventDefault();
    return true;
  }
  return false;
}
function handleDateTimeOutsideClick(event) { if(!event.target.closest('[data-dtp-field],[data-dtp-datetime-field]')) closeAllDateTimePickers(); }
function handleDateTimeKeydown(event) {
  const field = event.target.closest('[data-dtp-field],[data-dtp-datetime-field]');
  if (!field) return;
  const wheel = event.target.closest('[data-dtp-time-wheel]');
  if (wheel && ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(event.key)) {
    const items = [...wheel.querySelectorAll('[data-dtp-time-item]')];
    const current = nearestTimeWheelItem(wheel);
    const currentIndex = Math.max(0, items.indexOf(current));
    const step = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : event.key === 'PageUp' ? -5 : event.key === 'PageDown' ? 5 : 0;
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : Math.min(items.length - 1, Math.max(0, currentIndex + step));
    const next = items[nextIndex];
    if (next) { const preferMiddle = next.dataset.dtpTimeCycle !== wheel.dataset.dtpMiddleCycle; updateTimeWheelSelection(field, wheel, next); scrollTimeWheelToValue(wheel, next.dataset.dtpValue, 'smooth', preferMiddle); event.preventDefault(); }
    return;
  }
  if (event.key === 'Escape') { closeDateTimePicker(field); return; }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-dtp-option],[data-dtp-datetime-option]')) { event.preventDefault(); event.target.click(); }
}
function placeholder(label) { return { crumb: label, title: label, lead: '该组件正在按照 GeoShare Web UI 规范建设中。', toc: ['组件状态', '后续内容'], body: `<section id="组件状态"><h2>组件状态</h2><div class="component-empty"><span>✦</span><b>即将上线</b><p>完成后将提供组件用途、交互规则、状态、可运行示例与 API 文档。</p></div></section><section id="后续内容"><h2>后续内容</h2><p>如果当前项目需要此组件，请按基础规范先完成业务实现，并将通用能力回收至组件库。</p></section>` }; }
function getPage() { const hash=location.hash || '#/guide/intro'; if(pageData[hash]) return pageData[hash]; const item=navigation.flatMap(x=>x[1]).find(x=>x[1]===hash); return placeholder(item?.[0] || '页面未找到'); }
function renderNav() { document.querySelector('#side-nav').innerHTML=navigation.map(([group,items])=>`<section><p>${group}</p>${items.map(([label,href])=>`<a href="${href}" data-href="${href}">${label}</a>`).join('')}</section>`).join(''); }
function render() { const page=getPage(); const shell=document.querySelector('#article-shell').content.cloneNode(true); shell.querySelector('.breadcrumb').innerHTML=page.crumb; shell.querySelector('h1').textContent=page.title; shell.querySelector('.lead').textContent=page.lead; shell.querySelector('.article-body').innerHTML=location.hash === '#/components/date-time-picker' ? dateTimePickerBodySingle() : page.body; const app=document.querySelector('#app'); app.replaceChildren(shell); document.querySelectorAll('[data-href]').forEach(a=>a.classList.toggle('active',a.dataset.href===(location.hash||'#/guide/intro'))); document.querySelector('#page-toc').innerHTML=`<p>本页目录</p>${page.toc.map(x=>`<a href="${location.hash || '#/guide/intro'}" data-section="${x}">${x}</a>`).join('')}`; initComponentDemos(app); app.focus({preventScroll:true}); }
function search(query) { const q=query.trim().toLowerCase(); document.querySelectorAll('#side-nav a').forEach(a=>{ a.hidden=Boolean(q && !a.textContent.toLowerCase().includes(q)); }); document.querySelectorAll('#side-nav section').forEach(section=>{ section.hidden=Boolean(q && !section.querySelector('a:not([hidden])')); }); }
renderNav(); render(); const appRoot=document.querySelector('#app'); appRoot.addEventListener('click',handleComponentClick); appRoot.addEventListener('click',handleInputClick); appRoot.addEventListener('click',handleSearchClick); appRoot.addEventListener('change',handleControlChange); appRoot.addEventListener('input',handleNumericInput); appRoot.addEventListener('input',handleInputAffordances); appRoot.addEventListener('input',handleSearchInput); appRoot.addEventListener('pointerdown',handleSearchPointerDown); appRoot.addEventListener('pointerup',handleSearchPointerEnd); appRoot.addEventListener('pointercancel',handleSearchPointerEnd); appRoot.addEventListener('focusin',handleSearchFocus); appRoot.addEventListener('focusout',handleSearchFocus); appRoot.addEventListener('keydown',handleSearchKeydown); appRoot.addEventListener('keydown',handleInputKeydown); appRoot.addEventListener('keydown',handleTagKeydown); appRoot.addEventListener('keydown',handleTreeKeydown); appRoot.addEventListener('keydown',handlePickerKeydown); appRoot.addEventListener('keydown',handleDateTimeKeydown); appRoot.addEventListener('scroll',handleTimeWheelScroll,true); document.addEventListener('click',handlePickerOutsideClick); document.addEventListener('click',handleDateTimeOutsideClick); document.querySelector('#page-toc').addEventListener('click',handleTocClick); addEventListener('hashchange',render); document.querySelector('#search-input').addEventListener('input',e=>search(e.target.value)); addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#search-input').focus();}});
