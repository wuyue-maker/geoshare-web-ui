const gsIcon = window.GeoShareIcons.icon;
const uploadSampleImage = 'https://www.figma.com/api/mcp/asset/7a842362-bf6a-474b-8929-aaffdaaf53d8.png';
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
const breadcrumbItems = ['上级页面', '上级页面', '当前页面'];
const sideNavItems = [
  ['chat', 'chat', '会话'],
  ['mail', 'mail', '邮件'],
  ['notification', 'notice', '通知'],
  ['qrcode', 'qrcode', '二维码'],
  ['rootList', 'list', '列表'],
  ['setting', 'setting', '设置'],
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
  '#/components/slider': { crumb: '数据录入 / Slider 滑块', title: 'Slider 滑块', lead: '用于在连续数值范围内快速选择一个值，并通过提示文本和结果反馈保持当前选择可见。', toc: ['提示文本', '其它类型', '使用规则', '无障碍', 'API'], body: sliderBody() },
  '#/components/tabs': { crumb: '导航 / Tabs 选项卡', title: 'Tabs 选项卡', lead: '用于在同一内容区域内切换关联视图，支持默认、卡片、可增减和垂直布局。', toc: ['默认选项卡', '卡片主题选项卡', '增减选项卡', '垂直选项卡', '使用规则', '无障碍', 'API'], body: tabsBody() },
  '#/components/side-nav': { crumb: '导航 / SideNav 侧边栏', title: 'SideNav 侧边栏', lead: '用于承载页面或画布中的高频辅助操作，并悬浮在内容区域侧边，不打断主任务流。', toc: ['侧边栏', '使用规则', '无障碍', 'API'], body: sideNavBody() },
  '#/components/steps': { crumb: '导航 / Steps 步骤条', title: 'Steps 步骤条', lead: '用于展示有明确先后关系的流程阶段，支持横向与纵向排列，并以完成、进行中、错误和未进行状态表达当前进度。', toc: ['步骤条', '使用规则', '无障碍', 'API'], body: stepsBody() },
  '#/components/timeline': { crumb: '数据展示 / Timeline 时间轴', title: 'Timeline 时间轴', lead: '按时间顺序展示事件、操作记录与状态变更，适合审计记录、任务进展和业务历程。', toc: ['基础时间轴', '状态时间轴', '交替布局', '使用规则', '无障碍', 'API'], body: timelineBody() },
  '#/components/tree': { crumb: '数据展示 / Tree 树形结构', title: 'Tree 树形结构', lead: '用于展示具有父子层级的数据，并支持展开、选择与复选。', toc: ['基础树', '复选树', '交互与无障碍', '使用规则', 'API'], body: treeBody() },
  '#/components/list': { crumb: '数据展示 / List 列表', title: 'List 列表', lead: '用于按行展示同类型结构化信息，支持选择、状态反馈和行内操作。', toc: ['大列表', '小列表', '多数据类型示例', '交互与状态', '使用规则', '无障碍', 'API'], body: listBody() },
  '#/components/calendar': { crumb: '数据展示 / Calendar 日历', title: 'Calendar 日历', lead: '用于浏览月度日期、选择日期并切换年月视图，适合排期、签到和日期浏览场景。', toc: ['基础日历', '使用规则', '无障碍', 'API'], body: calendarBody() },
  '#/components/switch': { crumb: '数据录入 / Switch 开关', title: 'Switch 开关', lead: '用于立即生效的二元开关设置；开启或关闭都应有清晰的文字说明。', toc: ['基础开关', '使用规则', 'API'], body: switchBody() },
  '#/components/radio': { crumb: '数据录入 / Radio 单选框', title: 'Radio 单选框', lead: '用于从互斥选项中选择一个值。', toc: ['基础单选框', '使用规则', 'API'], body: radioBody() },
  '#/components/checkbox': { crumb: '数据录入 / Checkbox 复选框', title: 'Checkbox 复选框', lead: '用于选择一个或多个独立选项，并支持半选状态表达部分选择。', toc: ['基础复选框', '使用规则', 'API'], body: checkboxBody() },
  '#/components/upload': { crumb: '数据录入 / Upload 上传', title: 'Upload 上传', lead: '用于选择图片或文件，并清晰反馈待上传、上传中、成功和异常状态。', toc: ['图片上传', '按钮上传', '输入上传', '上传列表', '使用规则', '无障碍', 'API'], body: uploadBodyCompact({ maxCount: 5 }) },
  '#/components/color-picker': { crumb: '数据录入 / ColorPicker 颜色选择器', title: 'ColorPicker 颜色选择器', lead: '颜色选择器拆分为常规单色选择器，以及支持单色 / 渐变切换的选择器。', toc: ['常规单色颜色选择器', '单色渐变切换颜色选择器', '使用规则', '无障碍', 'API'], body: colorPickerBody() },
  '#/components/input': { crumb: '数据录入 / Input 输入框', title: 'Input 输入框', lead: '用于接收单行文本、密码、数字和结构化输入；通过统一尺寸、状态与辅助信息保持表单一致性。', toc: ['带标题输入框', '密码输入框', '装饰输入框', '数字输入框', '标签输入框', '范围输入框', '使用规则', '无障碍', 'API'], body: inputBodySimplified() },
  '#/components/search': { crumb: '数据录入 / Search 搜索框', title: 'Search 搜索框', lead: '用于从列表、资源或页面内容中快速定位目标。', toc: ['小搜索框', '大搜索框', '使用规则', '无障碍', 'API'], body: searchBody() },
  '#/components/picker': { crumb: '数据录入 / Select 选择器', title: 'Select 选择器', lead: '用于从预设选项中选择一个值，并支持单选、多选、级联选择与禁用状态。', toc: ['单选框', '多选框', '级联选框', '使用规则', '无障碍', 'API'], body: pickerBody() },
  '#/components/pagination': { crumb: '导航 / Pagination 分页', title: 'Pagination 分页', lead: '用于在大量数据中切换当前页，并可按需组合总数据数、每页数量与快速跳转。', toc: ['基础分页', '分页类型', '使用规则', '无障碍', 'API'], body: paginationBody() },
  '#/components/breadcrumb': { crumb: '导航 / Breadcrumb 面包屑', title: 'Breadcrumb 面包屑', lead: '用于展示当前页面在信息架构中的位置，并提供返回上级页面的路径入口。', toc: ['带图标', '不带图标', '使用规则', '无障碍', 'API'], body: breadcrumbBody() },
  '#/components/date-time-picker': { crumb: '数据录入 / Laydate 时间和日期选择器', title: '时间和日期选择器', lead: '用于选择时间、日期与日期时间范围，支持独立或联动面板。', toc: ['时间选择', '日期选择', '日期加时间选择', '日期区间联动选择', '年份选择', '使用规则', 'API'], body: dateTimePickerBodySingle() },
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
function paginationPageList(current, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
  if (current >= totalPages - 3) return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  return [1, 'ellipsis', current - 1, current, current + 1, 'ellipsis', totalPages];
}
function paginationButtons(current, totalPages, disabled=false) {
  const previous = button(gsIcon('chevronLeft'), 'gs-button--icon gs-button--text gs-icon-radius-4 gs-pagination__button gs-pagination__nav', `data-pagination-page="${current - 1}" aria-label="上一页"${disabled || current === 1 ? ' disabled' : ''}`);
  const pages = paginationPageList(current, totalPages).map(item => item === 'ellipsis'
    ? '<span class="gs-pagination__ellipsis" aria-hidden="true">•••</span>'
    : button(item, `gs-pagination__button${item === current ? ' is-current' : ' gs-button--secondary'}`, `data-pagination-page="${item}" aria-label="第 ${item} 页"${item === current ? ' aria-current="page"' : ''}${disabled ? ' disabled' : ''}`)).join('');
  const next = button(gsIcon('chevronRight'), 'gs-button--icon gs-button--text gs-icon-radius-4 gs-pagination__button gs-pagination__nav', `data-pagination-page="${current + 1}" aria-label="下一页"${disabled || current === totalPages ? ' disabled' : ''}`);
  return `${previous}${pages}${next}`;
}
function paginationSizeSelect(pageSize, disabled = false) {
  const options = [10,20,50].map(value => pickerOption(`${value} 条/页`, { value: String(value), selected: value === pageSize })).join('');
  return `<div class="gs-select-wrap gs-pagination__size-wrap" data-picker="pagination-size"><button type="button" class="gs-select gs-pagination__size" data-picker-trigger aria-haspopup="listbox" aria-expanded="false"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-select__value is-selected">${pageSize} 条/页</span>${selectChevron()}</button><div class="gs-select-popup" data-picker-popup role="listbox" hidden>${options}</div></div>`;
}
function paginationJumpField(page, disabled = false) {
  return inputField({ value: String(page), placeholder: '', disabled, className: `gs-pagination__input-wrap${disabled ? ' is-disabled' : ''}` })
    .replace('<input ', '<input class="gs-pagination__input" data-pagination-jump ')
    .replace('aria-label="输入内容"', 'aria-label="跳至页码"');
}
function paginationMarkup({ variant='full', size='large', disabled=false, total=101, pageSize=10, current=1 }={}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, current), totalPages);
  const hasTotal = ['full', 'size', 'total'].includes(variant);
  const hasSize = ['full', 'size'].includes(variant);
  const hasJump = variant === 'full';
  const sizeControl = hasSize ? paginationSizeSelect(pageSize, disabled) : '';
  const jump = hasJump ? `<label class="gs-pagination__jump"><span class="gs-pagination__jump-label">跳至</span>${paginationJumpField(page, disabled)}<span class="gs-pagination__jump-suffix">/ ${totalPages} 页</span></label>` : '';
  return `${hasTotal ? `<span class="gs-pagination__total">共 ${total} 项数据</span>` : ''}${sizeControl}<span class="gs-pagination__pages" data-pagination-pages>${paginationButtons(page,totalPages,disabled)}</span>${jump}`;
}
function paginationExample({ label, variant='full', size='large', disabled=false, current=1 }={}) {
  if (label === '禁用示例') return '';
  return `<div class="gs-pagination-example"><div class="gs-pagination${size === 'small' ? ' gs-pagination--small' : ''}" data-pagination data-pagination-variant="${variant}" data-pagination-size-value="10" data-pagination-total="101" data-pagination-current="${current}"${disabled ? ' data-pagination-disabled="true" aria-disabled="true"' : ''}>${paginationMarkup({ variant, size, disabled, current })}</div></div>`;
}
function paginationBody() {
  const types = [
    ['大 / 总数据数 + 每页数量 + 翻页', 'full', 'large'],
    ['大 / 总数据数 + 每页数量', 'size', 'large'],
    ['大 / 总数据数', 'total', 'large'],
    ['大', 'pages', 'large'],
    ['小', 'pages', 'small'],
  ].map(([name, variant, size]) => `<div class="pagination-type"><span class="pagination-type__name">${name}</span>${paginationExample({ label: '交互示例', variant, size })}</div>`).join('');
  return `<section id="基础分页"><h2>基础分页</h2><p>默认使用 32px 大尺寸分页；当前页使用主色 2 作为背景色，页码切换、每页数量与跳页均可操作。</p><div class="demo-card gs-pagination-demo">${paginationExample({ label: '交互示例', variant: 'full' })}${paginationExample({ label: '禁用示例', variant: 'full', disabled: true, current: 1 })}</div></section><section id="分页类型"><h2>分页类型</h2><p>根据页面信息密度组合总数据数、每页数量、翻页和跳页能力；小尺寸仅用于空间有限的紧凑场景。</p><div class="demo-card pagination-type-list">${types}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>数据量超过单页承载时使用分页；少量连续内容优先使用加载更多或列表。</li><li>当前页必须清晰可见，首页和末页分别禁用不可继续前进的方向按钮。</li><li>每页数量变更后重置到第一页；跳页输入应限制在有效页码范围内。</li><li>小尺寸分页不搭配总数、每页数量或跳页，避免压缩操作区域。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>上一页、下一页和页码使用真实 button，并提供可理解的辅助名称。</li><li>当前页使用 <code>aria-current="page"</code>，禁用按钮不响应键盘与鼠标操作。</li><li>跳页输入框提供页码范围说明，按 Enter 或离焦后提交。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>current</code><span>number</span><span>当前页码，从 1 开始</span></div><div><code>pageSize</code><span>number</span><span>每页数据条数，默认 10</span></div><div><code>total</code><span>number</span><span>总数据量</span></div><div><code>showSizeChanger</code><span>boolean</span><span>是否展示每页数量选择</span></div><div><code>showQuickJumper</code><span>boolean</span><span>是否展示跳页输入</span></div><div><code>size</code><span>large | small</span><span>32px 或 24px 尺寸</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用所有分页操作</span></div><div><code>onChange</code><span>(page, pageSize) =&gt; void</span><span>页码或每页数量变化时触发</span></div></div></section>`;
}
function renderPagination(root) {
  if (!root) return;
  const variant = root.dataset.paginationVariant || 'full';
  const size = root.classList.contains('gs-pagination--small') ? 'small' : 'large';
  const total = Number(root.dataset.paginationTotal) || 101;
  const pageSize = Number(root.dataset.paginationSizeValue) || 10;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(1, Number(root.dataset.paginationCurrent) || 1), totalPages);
  const disabled = root.dataset.paginationDisabled === 'true';
  root.dataset.paginationCurrent = String(current);
  root.innerHTML = paginationMarkup({ variant, size, disabled, total, pageSize, current });
}
function breadcrumbLink(label, { withIcon = false, level = 1, itemIndex = 0 } = {}) {
  const safeLabel = escapeHtml(label);
  const icon = withIcon ? gsIcon('link', 'gs-breadcrumb__icon') : '';
  return `<button type="button" class="gs-breadcrumb__item gs-breadcrumb__link" data-breadcrumb-link data-breadcrumb-index="${itemIndex}" data-breadcrumb-label="${safeLabel}" aria-label="返回第 ${level} 级路径：${safeLabel}">${icon}<span>${safeLabel}</span></button>`;
}
function breadcrumbSeparator(type) {
  if (type === 'slash') return '<span class="gs-breadcrumb__separator gs-breadcrumb__separator--slash" aria-hidden="true">/</span>';
  return `<span class="gs-breadcrumb__separator" aria-hidden="true">${gsIcon('chevronRight', 'gs-breadcrumb__separator-icon')}</span>`;
}
function breadcrumbTrailMarkup({ withIcon = false, currentIndex = breadcrumbItems.length - 1 } = {}) {
  const separator = withIcon ? 'arrow' : 'slash';
  return `<div class="gs-breadcrumb" aria-label="面包屑导航">${breadcrumbItems.slice(0, currentIndex + 1).map((label, index) => {
    const current = index === currentIndex;
    const item = current
      ? `<span class="gs-breadcrumb__item gs-breadcrumb__current" aria-current="page">${withIcon ? gsIcon('link', 'gs-breadcrumb__icon') : ''}<span>${label}</span></span>`
      : breadcrumbLink(label, { withIcon, level: index + 1, itemIndex: index });
    return `${index ? breadcrumbSeparator(separator) : ''}${item}`;
  }).join('')}</div>`;
}
function breadcrumbExample({ withIcon = false } = {}) {
  return `<div data-breadcrumb-trail data-breadcrumb-icon="${withIcon}" data-breadcrumb-current="${breadcrumbItems.length - 1}">${breadcrumbTrailMarkup({ withIcon })}</div>`;
}
function breadcrumbBody() {
  const demo = withIcon => `<div class="demo-card gs-breadcrumb-demo" data-breadcrumb-demo>${breadcrumbExample({ withIcon })}<p class="gs-breadcrumb__live" data-breadcrumb-live aria-live="polite"></p></div>`;
  return `<section id="带图标"><h2>带图标</h2><p>适用于路径节点具有明确对象语义的场景。图标、文字与分隔符均使用 16px 图标和 4px 间距。</p>${demo(true)}</section><section id="不带图标"><h2>不带图标</h2><p>适用于简洁的层级路径展示。当前页面仅用于标识位置，不提供点击操作。</p>${demo(false)}</section><section id="使用规则"><h2>使用规则</h2><ul><li>面包屑最多展示当前页面及必要的上级路径；层级过深时应折叠中间节点。</li><li>除当前页外的路径节点可点击返回对应层级，当前页不应作为链接。</li><li>同一页面中保持分隔符、图标和文字样式一致，不混用不同类型。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>使用 <code>nav</code> 或带有明确 <code>aria-label</code> 的导航容器标识路径用途。</li><li>当前页使用 <code>aria-current=&quot;page&quot;</code>，上级路径使用可聚焦的真实按钮或链接。</li><li>键盘焦点与悬停均应提供可见反馈，不以颜色作为唯一的路径识别方式。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>items</code><span>BreadcrumbItem[]</span><span>路径节点数据，最后一个节点作为当前页</span></div><div><code>withIcon</code><span>boolean</span><span>是否在每个节点前展示图标</span></div><div><code>separator</code><span>arrow | slash</span><span>节点之间的分隔符类型</span></div><div><code>onNavigate</code><span>(item) =&gt; void</span><span>点击上级路径节点时触发</span></div></div></section>`;
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
function uploadFileNameMarkup(fileName) {
  const value = String(fileName || '');
  const dot = value.lastIndexOf('.');
  const extension = dot > 0 ? value.slice(dot) : '';
  const base = extension ? value.slice(0, dot) : value;
  return `<span class="upload-file-name" title="${escapeHtml(value)}"><span class="upload-file-name__base">${escapeHtml(base)}</span>${extension ? `<span class="upload-file-name__extension">${escapeHtml(extension)}</span>` : ''}</span>`;
}
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
  const combinationIconItems = [['默认',''],['悬停','is-hover'],['选中','is-selected'],['默认禁用','is-disabled'],['选中禁用','is-selected is-disabled']].map(([label,state])=>`<button type="button" class="gs-combination__item ${state}" aria-label="${label}"${state.includes('disabled') ? ' disabled' : ''}${state.includes('selected') ? ' aria-pressed="true"' : ''}>${iconPair}</button>`).join('');
  const completeTextItems = ['选项一','选项二','选项三'].map((label,index)=>`<button type="button" class="gs-combination__item${index === 0 ? ' is-selected' : ''}" data-combination-option aria-pressed="${index === 0 ? 'true' : 'false'}"${index === 2 ? ' disabled' : ''}>${label}</button>`).join('');
  const completeIconItems = ['选项一','选项二','选项三'].map((label,index)=>`<button type="button" class="gs-combination__item${index === 0 ? ' is-selected' : ''}" data-combination-option aria-label="${label}" aria-pressed="${index === 0 ? 'true' : 'false'}"${index === 2 ? ' disabled' : ''}>${iconPair}</button>`).join('');
  const combinationExample = (title, cls, completeItems, states) => `<div class="combination-example"><h3>${title}</h3><div class="combination-example__column"><span class="combination-example__label">完整示例（三选项）</span><div class="gs-combination gs-combination--interactive ${cls}" data-combination-group aria-label="${title}完整交互示例">${completeItems}</div></div><div class="combination-example__column"><span class="combination-example__label">状态参考</span><div class="gs-combination ${cls}" aria-label="${title}状态参考">${states}</div></div></div>`;
  const groups = `<div class="combination-showcase">${combinationExample('文字边线','gs-combination--outline',completeTextItems,combinationTextItems)}${combinationExample('文字面状','gs-combination--filled',completeTextItems,combinationTextItems)}${combinationExample('文字无边线','gs-combination--text',completeTextItems,combinationTextItems)}${combinationExample('图标面状','gs-combination--icon',completeIconItems,combinationIconItems)}</div>`;
  const colors = [['红色（异常）','red'],['橙色（注意）','orange'],['黄色（提示）','yellow'],['绿色（正常）','green'],['青色（其它）','cyan']].map(([label, cls]) => sample(label, `gs-button--${cls}`)).join('');
  return `<section id="基础按钮"><h2>基础按钮</h2><p>每种样式展示默认与禁用两个示例；鼠标悬停或按下时查看瞬时反馈，不产生持久选中状态。</p><div class="demo-card live-demo-card"><div class="live-style-grid">${basic}</div></div></section><section id="下拉按钮"><h2>下拉按钮</h2><p>普通下拉和拆分下拉分别覆盖主色、中性、描边和文字外观。</p><div class="demo-card live-demo-card"><div class="live-style-grid dropdown-live-grid">${dropdown}</div></div></section><section id="特殊图形按钮"><h2>特殊图形按钮</h2><p>图形按钮统一为 32 × 32px。主色填充、中性填充和描边按容器圆角展示；无底色图形按钮只展示一次。</p><div class="demo-card special-live-grid">${special}${specialText}</div></section><section id="组合按钮"><h2>组合按钮</h2><p>每种组合类型前置一个可操作的四选项完整示例，后面保留原有平铺全状态参考。</p><div class="demo-card combination-demo-card">${groups}</div></section><section id="其它颜色按钮"><h2>其它颜色按钮</h2><p>仅包含 Figma 定义的五种语义色，并分别提供默认与禁用示例。</p><div class="demo-card live-demo-card"><div class="live-style-grid semantic-live-grid">${colors}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>同一操作区域最多保留一个主按钮。</li><li>组合按钮完整示例在同组内保持单选，状态参考用于核对全部视觉状态。</li><li>禁用按钮不可响应点击，并使用对应禁用色阶。</li><li>图形按钮必须有清晰的图标和辅助名称。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>primary | neutral | secondary | dashed | text | color</span><span>按钮外观</span></div><div><code>dropdown</code><span>boolean | split</span><span>普通下拉或拆分下拉</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>icon</code><span>node</span><span>图标内容；需提供辅助名称</span></div></div></section>`;
}
function tag(label, tone, size='medium', closeable=false) { const close = closeable ? tagCloseButton(label) : ''; return `<span class="gs-tag gs-tag--${tone} gs-tag--${size}${closeable ? ' gs-tag--outline gs-tag--closeable' : ''}" data-tag-item><span class="gs-tag__label">${label}</span>${close}</span>`; }
function tagSet(variant, size) { const tones=[['告警','red'],['警告','orange'],['提示','yellow'],['正常','green'],['其它','cyan'],['主色','primary'],['中性','neutral']]; return tones.map(([label,tone])=>variant==='closable' ? tag(label,tone,size,true) : `<span class="gs-tag gs-tag--${tone} gs-tag--${size}${variant==='outline' ? ' gs-tag--outline' : variant==='light' ? ' gs-tag--light' : ''}"><span class="gs-tag__label">${label}</span></span>`).join(''); }
function tagDemo(variant, interactive=false) { const content = `<div class="tag-size-row"><span class="tag-size-label">24px</span><div class="tag-flow">${tagSet(variant,'medium')}</div></div><div class="tag-size-row"><span class="tag-size-label">20px</span><div class="tag-flow">${tagSet(variant,'small')}</div></div>`; return `<div class="demo-card tag-demo-card"${interactive ? ' data-tag-demo' : ''}>${content}${interactive ? '<div class="tag-demo-actions"><button type="button" class="gs-button gs-button--text-primary" data-tag-reset>恢复示例</button><span class="tag-live-status" data-tag-live role="status" aria-live="polite"></span></div>' : ''}</div>`; }
function tagBody() { return `<section id="实色标签"><h2>实色标签</h2><p>用于需要较强识别度的分类或状态。标签提供 24px 与 20px 两档高度，统一为 4px 圆角和 Alibaba PuHuiTi 3 14/22px Regular 文本。</p>${tagDemo('solid')}</section><section id="浅色标签"><h2>浅色标签</h2><p>用于需要保留状态色、但不希望边框干扰信息密度的场景；使用对应色调的浅色背景和同色文字。</p>${tagDemo('light')}</section><section id="边线标签"><h2>边线标签</h2><p>用于信息密度较高、需要降低视觉重量的场景；背景使用对应色调的浅色阶。</p>${tagDemo('outline')}</section><section id="可关闭标签"><h2>可关闭标签</h2><p>仅在用户可以移除该属性或筛选条件时使用。点击关闭图标会移除当前标签，可通过“恢复示例”再次检查。</p>${tagDemo('closable',true)}</section><section id="使用规则"><h2>使用规则</h2><ul><li>告警、警告、提示、正常仅用于对应业务语义；“其它”承载没有专门语义色的分类。</li><li>主色用于品牌或关键分类，中性色用于普通属性，不用多色标签装饰界面。</li><li>同一标签列表统一尺寸；内容过长时优先精简文案，不把标签做成段落。</li><li>普通标签是只读信息，不显示手型光标，也不承担按钮或筛选开关的职责。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>业务状态不能只依赖颜色，保留“告警、正常”等可见文字。</li><li>关闭图标使用真实按钮，提供“移除某标签”的辅助名称，可由键盘聚焦和触发。</li><li>删除标签后通过状态区域播报结果；焦点自然回到文档顺序中的下一个控件。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>tone</code><span>red | orange | yellow | green | cyan | primary | neutral</span><span>标签语义色调</span></div><div><code>variant</code><span>solid | outline | light</span><span>实色、边线或浅色外观</span></div><div><code>size</code><span>medium | small</span><span>24px 或 20px 高度</span></div><div><code>closeable</code><span>boolean</span><span>是否显示关闭按钮</span></div><div><code>onClose</code><span>function</span><span>关闭前回调；可取消移除</span></div><div><code>ariaLabel</code><span>string</span><span>自定义关闭按钮辅助名称</span></div></div></section>`; }
function progressExample(value, label=`${value}%`, cls='', name='') { const accessibleLabel=label || `${value}%`; return `<div class="progress-sample">${name ? `<span class="progress-sample__name">${name}</span>` : ''}<div class="gs-progress ${cls}" role="progressbar" aria-label="${name || '任务进度'}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}" aria-valuetext="${accessibleLabel}" style="--gs-progress-value:${value}%"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div>${cls.includes('gs-progress--hide-info') ? '' : `<span class="gs-progress__label">${label}</span>`}</div></div>`; }
function progressBody() {
  const controls = `${button('− 10', 'gs-button--secondary progress-controls__delta', 'data-progress-delta="-10"')}${button('＋ 10', 'gs-button--secondary progress-controls__delta', 'data-progress-delta="10"')}${button('标记异常', 'gs-button--secondary progress-controls__status', 'data-progress-status="exception"')}${button('重置', 'gs-button--text-primary', 'data-progress-reset')}`;
  return `<section id="基础进度条"><h2>基础进度条</h2><p>进度值限制在 0–100。使用下方操作验证数值变化、完成状态和异常状态。</p><div class="demo-card"><div class="progress-controls">${controls}</div><div class="gs-progress" data-progress-live role="progressbar" aria-label="数据导入进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62" aria-valuetext="62%，正在导入" style="--gs-progress-value:62%"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div><span class="gs-progress__label">62% · 进行中</span></div></div></section><section id="尺寸与标签"><h2>尺寸与标签</h2><p>默认轨道为 8px，小尺寸为 4px；标签可显示百分比、自定义业务文本或隐藏。</p><div class="demo-card progress-demo-stack">${progressExample(48,'48%','','默认尺寸')}${progressExample(72,'72%','gs-progress--small','小尺寸')}${progressExample(36,'','gs-progress--hide-info','隐藏标签')}${progressExample(100,'3 / 3 项','gs-progress--success','自定义标签')}</div></section><section id="语义状态"><h2>语义状态</h2><p>状态需同时使用颜色和可见文字表达，不能只依赖色彩。</p><div class="demo-card progress-demo-stack">${progressExample(64,'64% · 进行中','','正常')}${progressExample(100,'100% · 已完成','gs-progress--success','成功')}${progressExample(76,'76% · 请注意','gs-progress--warning','注意')}${progressExample(42,'42% · 发生异常','gs-progress--exception','异常')}</div></section><section id="不确定进度"><h2>不确定进度</h2><p>无法计算完成比例时使用循环色块，不展示虚构百分比；减少动态效果偏好下自动停止动画。</p><div class="demo-card"><div class="gs-progress gs-progress--indeterminate" role="progressbar" aria-label="正在加载数据"><div class="gs-progress__track"><div class="gs-progress__bar"></div></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>用于连续完成度；离散流程阶段使用 Steps 步骤条。</li><li>进度条是只读反馈，可操作数值选择使用 Slider 滑块。</li><li>不确定进度不显示百分比，完成或异常等关键节点再进行辅助通知。</li><li>状态颜色必须配合文字说明。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>value</code><span>number</span><span>当前值，自动限制在 0–max</span></div><div><code>max</code><span>number</span><span>最大值，默认 100</span></div><div><code>status</code><span>normal | success | warning | exception</span><span>业务语义状态</span></div><div><code>size</code><span>default | small</span><span>8px 或 4px 轨道</span></div><div><code>showInfo</code><span>boolean</span><span>是否显示右侧标签</span></div><div><code>format</code><span>function</span><span>格式化可见文本与 aria-valuetext</span></div><div><code>indeterminate</code><span>boolean</span><span>是否为未知完成比例</span></div></div></section>`;
}
function sliderBody() {
  return `<section id="提示文本"><h2>提示文本</h2><p>滑块提示默认在圆形按钮附近悬停或聚焦时出现；需要业务单位时可自定义提示内容，也可以关闭提示并把当前值同步到结果区域。</p><div class="demo-card gs-slider-demo-card"><div class="gs-slider-demo-grid"><div class="gs-slider-example"><div class="demo-title">自定义提示文本</div><div class="demo-caption">拖动滑块，提示文本会随数值更新。</div><div class="gs-slider" data-slider data-slider-unit="GB"><input class="gs-slider__input" type="range" min="20" max="1000" step="10" value="240" aria-label="存储空间"><output class="gs-slider__output" data-slider-output>240 GB</output></div></div><div class="gs-slider-example"><div class="demo-title">关闭提示并同步结果</div><div class="gs-slider" data-slider data-slider-tips="false"><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="58" aria-label="当前数值"><span class="gs-slider__result" data-slider-result>当前数值：58</span></div></div><div class="gs-slider-example"><div class="demo-title">始终显示提示</div><div class="demo-caption">适合需要持续确认当前值的设置场景。</div><div class="gs-slider" data-slider data-slider-tips-always="true"><input class="gs-slider__input" type="range" min="0" max="100" step="5" value="75" aria-label="完成比例"><output class="gs-slider__output" data-slider-output>75</output></div></div><div class="gs-slider-example gs-slider-example--disabled"><div class="demo-title">禁用滑块</div><div class="demo-caption">不可操作时保留当前值和禁用原因。</div><div class="gs-slider" data-slider data-slider-tips-always="true"><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="35" disabled aria-label="不可用数值"><output class="gs-slider__output is-always" data-slider-output>35</output></div></div></div></div></section><section id="其它类型"><h2>其它类型</h2><p>需要精确输入时，可在滑动选择的同时直接编辑当前数值。</p><div class="demo-card gs-slider-demo-card"><div class="gs-slider-demo-grid"><div class="gs-slider-example"><div class="demo-title">输入框编辑</div><div class="demo-caption">可拖动滑块或直接输入数值。</div><div class="gs-slider gs-slider--editable" data-slider data-slider-tips="false"><div class="gs-slider__editable-row"><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="42" aria-label="可编辑数值"><div class="gs-input-field gs-slider__edit-field"><input type="number" min="0" max="100" step="1" value="42" data-slider-edit-input aria-label="直接输入数值"></div></div></div></div><div class="gs-slider-example"><div class="demo-title">范围选择并反馈</div><div class="demo-caption">拖动两个圆形按钮选择开始值和结束值。</div><div class="gs-slider gs-slider--range" data-slider-range><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="20" data-slider-range-input="start" aria-label="范围开始值"><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="60" data-slider-range-input="end" aria-label="范围结束值"><div class="gs-slider-range-result" data-slider-range-result>开始值：20 · 结束值：60</div></div></div><div class="gs-slider-example"><div class="demo-title">预设范围</div><div class="demo-caption">适合展示已有范围值的场景。</div><div class="gs-slider gs-slider--range" data-slider-range><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="30" data-slider-range-input="start" aria-label="预设范围开始值"><input class="gs-slider__input" type="range" min="0" max="100" step="1" value="60" data-slider-range-input="end" aria-label="预设范围结束值"><div class="gs-slider-range-result" data-slider-range-result>开始值：30 · 结束值：60</div></div></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>用于连续数值或有明确顺序的范围选择；离散选项优先使用 Select。</li><li>默认值应落在最常用的业务区间，并通过提示或结果文本让当前值可确认。</li><li>步长必须与数据精度一致；范围边界应在附近明确展示。</li><li>需要精确录入时，可与数字输入框组合；禁用状态不可拖动或通过键盘改变。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>使用原生 range 输入承载键盘操作、焦点和方向键调整，必须提供可理解的 aria-label。</li><li>提示文本是辅助反馈，不代替可访问名称；数值变化通过结果区域或 aria-live 低频同步。</li><li>保留 2px 焦点轮廓，禁用态同时降低轨道、滑块与文字对比度。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>value</code><span>number</span><span>当前值</span></div><div><code>min / max</code><span>number</span><span>可选范围，默认 0–100</span></div><div><code>step</code><span>number</span><span>单次调整步长，默认 1</span></div><div><code>tips</code><span>boolean</span><span>是否显示值提示，默认 true</span></div><div><code>tipsAlways</code><span>boolean</span><span>是否始终显示提示文本</span></div><div><code>setTips</code><span>(value) =&gt; string</span><span>格式化提示文本，可附加业务单位</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>值变化时触发</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div></div></section>`;
}
function timelineItem({id, title, time, datetime, description, status='default', statusLabel='记录', meta='', current=false, action=false}) {
  const tagTone = { completed: 'green', current: 'primary', warning: 'orange', error: 'red', pending: 'neutral', default: 'neutral' }[status] || 'neutral';
  const statusTag = `<span class="gs-tag gs-tag--${tagTone} gs-tag--small gs-tag--light"><span class="gs-tag__label">${statusLabel}</span></span>`;
  const detailsId = `${id}-details`;
  return `<li class="gs-timeline__item" data-status="${status}"${current ? ' aria-current="true"' : ''}><span class="gs-timeline__marker" aria-hidden="true"></span><article class="gs-timeline__content" aria-labelledby="${id}"><div class="gs-timeline__header"><span class="gs-timeline__title" id="${id}">${title}</span><time class="gs-timeline__time" datetime="${datetime}">${time}</time></div><p class="gs-timeline__description">${description}</p><div class="gs-timeline__meta">${statusTag}${meta ? `<span>${meta}</span>` : ''}${action ? `<button type="button" class="gs-button gs-button--text-primary" data-timeline-toggle aria-expanded="false" aria-controls="${detailsId}">查看详情</button>` : ''}</div>${action ? `<p class="gs-timeline__details" id="${detailsId}" hidden>校验已完成 18 项，仍有 2 项字段格式需要确认。</p>` : ''}</article></li>`;
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
function treeNode({key,label,branch=false,expanded=false,selected=false,checked,disabled=false,children=''}) { const selection = checked === undefined ? ` aria-selected="${selected}"` : ` aria-checked="${checked}"`; const checkClass = checked === undefined ? '' : ` is-selected${checked === 'mixed' ? ' is-mixed' : ''}${disabled ? ' is-disabled' : ''}`; return `<li class="gs-tree__item${branch ? '' : ' is-leaf'}${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}" role="treeitem" data-tree-key="${key}" tabindex="-1"${branch ? ` aria-expanded="${expanded}"` : ''}${selection}${disabled ? ' aria-disabled="true"' : ''}><div class="gs-tree__row" data-tree-row><span class="gs-tree__switcher" data-tree-toggle aria-hidden="true">${gsIcon('treeChevron')}</span>${checked === undefined ? '' : `<span class="gs-control gs-control--checkbox gs-tree__checkbox${checkClass}" aria-hidden="true"><span class="gs-control__indicator"></span></span>`}<span class="gs-tree__label">${label}</span></div>${branch ? `<ul class="gs-tree__children" role="group">${children}</ul>` : ''}</li>`; }
function treeBody() {
  const dataCenter = treeNode({key:'data-center',label:'数据中心',branch:true,expanded:true,children:treeNode({key:'overview',label:'数据概览',selected:true})+treeNode({key:'service',label:'数据服务'})});
  const basic = treeNode({key:'platform',label:'GeoShare 平台',branch:true,expanded:true,children:dataCenter+treeNode({key:'resources',label:'资源管理',branch:true,children:treeNode({key:'maps',label:'地图资源'})+treeNode({key:'layers',label:'图层管理'})})+treeNode({key:'settings',label:'系统设置（禁用）',disabled:true})});
  const dataProducts = treeNode({key:'data-products',label:'数据产品',branch:true,expanded:true,checked:'true',children:treeNode({key:'data-query',label:'数据查询',checked:'true'})+treeNode({key:'data-export',label:'数据导出',checked:'true'})});
  const admin = treeNode({key:'admin',label:'管理后台',branch:true,expanded:true,checked:'mixed',children:treeNode({key:'users',label:'用户管理',checked:'true'})+treeNode({key:'roles',label:'角色管理',checked:'false'})});
  const checkable = treeNode({key:'permissions',label:'产品权限',branch:true,expanded:true,checked:'mixed',children:dataProducts+treeNode({key:'map-products',label:'地图产品',checked:'false'})+admin});
  const strict = treeNode({key:'strict-permissions',label:'产品权限',branch:true,expanded:true,checked:'false',children:treeNode({key:'strict-data',label:'数据产品',branch:true,expanded:true,checked:'false',children:treeNode({key:'strict-query',label:'数据查询',checked:'true'})+treeNode({key:'strict-export',label:'数据导出',checked:'false'})})+treeNode({key:'strict-map',label:'地图产品',checked:'false'})});
  return `<section id="基础树"><h2>基础树</h2><p>点击箭头展开或收起分支，点击节点进行单选。收起分支不会清空内部选择。</p><div class="demo-card"><div class="gs-tree" data-tree data-selection="single"><ul class="gs-tree__list" role="tree" aria-label="产品模块">${basic}</ul></div></div></section><section id="复选树"><h2>复选树</h2><p>默认模式父子节点联动；开启 <code>checkStrictly</code> 后，每个节点独立勾选。</p><div class="tree-demo-grid"><div class="demo-card"><div class="demo-title">父子联动</div><div class="gs-tree" data-tree data-checkable><ul class="gs-tree__list" role="tree" aria-label="产品权限">${checkable}</ul></div></div><div class="demo-card"><div class="demo-title">独立选择</div><div class="gs-tree" data-tree data-checkable data-check-strictly><ul class="gs-tree__list" role="tree" aria-label="独立产品权限">${strict}</ul></div></div></div></section><section id="交互与无障碍"><h2>交互与无障碍</h2><ul><li>上下方向键在可见节点间移动，左右方向键展开、收起或移动层级。</li><li>Home、End 定位首尾节点，Enter 或空格执行选择/复选。</li><li>同一棵树仅一个节点进入 Tab 顺序；禁用节点可被方向键经过，但不能操作。</li><li>分支使用 aria-expanded，单选使用 aria-selected，复选使用 aria-checked。</li></ul></section><section id="使用规则"><h2>使用规则</h2><ul><li>仅用于真实父子层级；平铺信息使用 List，业务历程使用 Timeline。</li><li>默认展开不超过两层，深层数据提供搜索和定位。</li><li>同级标签保持相同粒度，不只依赖图标表达含义。</li><li>大量可见节点应采用虚拟滚动并补充集合位置信息。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>data</code><span>TreeNode[]</span><span>树形数据源</span></div><div><code>selectionMode</code><span>none | single</span><span>单选模式，默认 single</span></div><div><code>expandedKeys</code><span>Key[]</span><span>受控展开节点</span></div><div><code>selectedKeys</code><span>Key[]</span><span>受控选中节点</span></div><div><code>checkable</code><span>boolean</span><span>是否显示复选能力</span></div><div><code>checkedKeys</code><span>Key[]</span><span>受控复选节点</span></div><div><code>checkStrictly</code><span>boolean</span><span>是否关闭父子联动</span></div><div><code>disabledKeys</code><span>Key[]</span><span>禁用节点集合</span></div></div></section>`;
}
function focusTreeItem(item) { const tree=item.closest('[data-tree]'); tree.querySelectorAll('.gs-tree__item').forEach(node=>node.tabIndex=-1); item.tabIndex=0; item.focus(); }
function directTreeChildren(item) { return [...item.querySelectorAll(':scope > .gs-tree__children > .gs-tree__item')]; }
function syncTreeCheckbox(item) { const checkbox=item.querySelector(':scope > .gs-tree__row .gs-tree__checkbox'); if(!checkbox) return; const state=item.getAttribute('aria-checked'); checkbox.classList.toggle('is-selected',state==='true' || state==='mixed'); checkbox.classList.toggle('is-mixed',state==='mixed'); checkbox.classList.toggle('is-disabled',item.classList.contains('is-disabled')); }
function updateTreeParents(item) { if(item.closest('[data-tree]')?.hasAttribute('data-check-strictly')) return; let parent=item.parentElement?.closest('.gs-tree__item'); while(parent){ const children=directTreeChildren(parent).filter(node=>!node.classList.contains('is-disabled')); const values=children.map(node=>node.getAttribute('aria-checked')); const value=values.length && values.every(state=>state==='true') ? 'true' : values.length && values.every(state=>state==='false') ? 'false' : 'mixed'; parent.setAttribute('aria-checked',value); syncTreeCheckbox(parent); parent=parent.parentElement?.closest('.gs-tree__item'); } }
function toggleTreeCheck(item) { if(item.classList.contains('is-disabled')) return; const tree=item.closest('[data-tree]'); const checked=item.getAttribute('aria-checked')==='true'; const next=checked ? 'false' : 'true'; item.setAttribute('aria-checked',next); if(!tree.hasAttribute('data-check-strictly')) { item.querySelectorAll(':scope > .gs-tree__children .gs-tree__item').forEach(node=>{ if(!node.classList.contains('is-disabled')) node.setAttribute('aria-checked',next); }); updateTreeParents(item); } tree.querySelectorAll('.gs-tree__item[aria-checked]').forEach(syncTreeCheckbox); }
function activateTreeItem(item) { if(item.classList.contains('is-disabled')) return; const tree=item.closest('[data-tree]'); if(tree.hasAttribute('data-checkable')) toggleTreeCheck(item); else if(tree.dataset.selection==='single'){ tree.querySelectorAll('.gs-tree__item[aria-selected="true"]').forEach(node=>{ node.setAttribute('aria-selected','false'); node.classList.remove('is-selected'); }); item.setAttribute('aria-selected','true'); item.classList.add('is-selected'); } }
function visibleTreeItems(tree) { return [...tree.querySelectorAll('.gs-tree__item')].filter(item=>{ let parent=item.parentElement?.closest('.gs-tree__item'); while(parent){ if(parent.getAttribute('aria-expanded')==='false') return false; parent=parent.parentElement?.closest('.gs-tree__item'); } return true; }); }
function listCheckbox({ checked=false, mixed=false, label='选择此项', attrs='' } = {}) {
  return `<button type="button" class="gs-control gs-control--checkbox gs-list__selection${checked || mixed ? ' is-selected' : ''}${mixed ? ' is-mixed' : ''}" aria-label="${label}" aria-pressed="${checked}" ${attrs}><span class="gs-control__indicator" aria-hidden="true"></span></button>`;
}
function listTable(size='large') {
  const rows = [
    ['项目概览', 'GeoShare 平台', '2026-08-20', '处理中'],
    ['数据服务', '数据中心', '2026-08-19', '已完成'],
    ['资源管理', '资源中心', '2026-08-18', '待处理'],
    ['系统设置', '管理后台', '2026-08-17', '处理中'],
  ];
  const selectedIndex = size === 'large' ? 3 : 1;
  return `<div class="gs-list gs-list--${size}" data-list aria-label="${size === 'large' ? '大列表' : '小列表'}交互示例"><div class="gs-list__table" role="grid"><div class="gs-list__row gs-list__head" role="row"><div class="gs-list__cell gs-list__cell--selection" role="columnheader">${listCheckbox({ mixed: true, label: '全选', attrs: 'data-list-select-all' })}</div><div class="gs-list__cell" role="columnheader">名称</div><div class="gs-list__cell" role="columnheader">所属模块</div><div class="gs-list__cell" role="columnheader">更新时间</div><div class="gs-list__cell" role="columnheader">状态</div><div class="gs-list__cell gs-list__cell--action" role="columnheader">操作</div></div><div data-list-rows>${rows.map(([name,module,date,status], index) => `<div class="gs-list__row${index === selectedIndex ? ' is-selected' : ''}" role="row" data-list-row data-list-label="${name}" data-list-selected="${index === selectedIndex}" tabindex="0"><div class="gs-list__cell gs-list__cell--selection" role="gridcell">${listCheckbox({ checked: index === selectedIndex, label: `选择${name}`, attrs: 'data-list-select' })}</div><div class="gs-list__cell gs-list__cell--name" role="gridcell">${name}</div><div class="gs-list__cell" role="gridcell">${module}</div><div class="gs-list__cell" role="gridcell">${date}</div><div class="gs-list__cell" role="gridcell"><span class="gs-list__status">${status}</span></div><div class="gs-list__cell gs-list__cell--action" role="gridcell">${button('查看', 'gs-button--text-primary gs-list__action', 'data-list-view')}${button('删除', 'gs-button--text gs-list__action gs-list__action--danger', 'data-list-delete')}</div></div>`).join('')}</div></div><span class="gs-list__live" data-list-live role="status" aria-live="polite">已选择 1 项</span></div>`;
}
function listMixedTypeTable() {
  const rows = [
    ['城市基础地图', '王小雨', '2026-08-21 14:30', '2,481', '处理中', '地图服务', 'city-map.geojson'],
    ['三维建筑数据', '李晨', '2026-08-20 09:12', '18,920', '已完成', '三维数据', 'building.glb'],
    ['遥感影像成果', '陈思', '2026-08-19 16:45', '6,048', '待审核', '影像数据', 'remote-image.tif'],
  ];
  const content = `<div class="gs-list__row gs-list__head" role="row"><div class="gs-list__cell">项目名称</div><div class="gs-list__cell">负责人</div><div class="gs-list__cell">更新时间</div><div class="gs-list__cell gs-list__cell--number">数据量</div><div class="gs-list__cell">状态</div><div class="gs-list__cell">分类标签</div><div class="gs-list__cell">附件</div><div class="gs-list__cell gs-list__cell--action-slot" aria-hidden="true"></div></div>${rows.map(([name,owner,date,count,status,tagName,file], index) => `<div class="gs-list__row" role="row" data-list-mixed-index="${index}"><div class="gs-list__cell gs-list__cell--name" role="gridcell">${name}</div><div class="gs-list__cell gs-list__person" role="gridcell"><span class="gs-list__avatar" aria-hidden="true">${owner.slice(0, 1)}</span>${owner}</div><div class="gs-list__cell" role="gridcell">${date}</div><div class="gs-list__cell gs-list__cell--number" role="gridcell">${count}</div><div class="gs-list__cell" role="gridcell"><span class="gs-list__status">${status}</span></div><div class="gs-list__cell" role="gridcell"><span class="gs-list__tag">${tagName}</span></div><div class="gs-list__cell gs-list__file" role="gridcell">${file}</div><div class="gs-list__cell gs-list__cell--action-slot" aria-hidden="true"></div></div>`).join('')}`;
  const actions = `<div class="gs-list__action-rail" aria-label="操作"><div class="gs-list__action-rail-head">操作</div>${rows.map((_, index) => `<div class="gs-list__action-rail-row" data-list-mixed-action-row="${index}">${button('查看', 'gs-button--text-primary gs-list__action')}${button('下载', 'gs-button--text-primary gs-list__action')}</div>`).join('')}</div>`;
  return `<div class="gs-list gs-list--mixed" aria-label="多数据类型列表示例"><div class="gs-list__table" role="grid"><div class="gs-list__scroll-viewport"><div class="gs-list__scroll-content">${content}</div></div>${actions}</div></div>`;
}
function listBody() {
  return `<section id="大列表"><h2>大列表</h2><p>表头高度 48px、数据行高度 40px，适用于标准业务列表。表头使用主色 6，行分割线使用中性色 7。</p><div class="demo-card gs-list-demo-card">${listTable('large')}</div></section><section id="小列表"><h2>小列表</h2><p>表头和数据行均为 32px，适用于信息密度更高的工具面板和弹层列表。</p><div class="demo-card gs-list-demo-card">${listTable('small')}</div></section><section id="多数据类型示例"><h2>多数据类型示例</h2><p>在同一列表中组合文本、人员、日期、数字、状态、标签、附件和操作。字段较多时通过横向滚动承载，并将高频操作固定在最右侧。</p><div class="demo-card gs-list-demo-card">${listMixedTypeTable()}</div></section><section id="交互与状态"><h2>交互与状态</h2><ul><li>悬停行使用中性色 8；选中行使用主色 5，文本切换为主色 2。</li><li>可通过行首复选框选择多项；表头复选框自动显示全选或半选状态。</li><li>行内“查看”“删除”使用统一 Button 按钮组件，删除后会实时更新选择状态。</li></ul></section><section id="使用规则"><h2>使用规则</h2><ul><li>列表用于结构一致的平铺数据；具有父子关系的数据使用 Tree。</li><li>同列数据保持同一格式和对齐方式，操作列固定在最右侧。</li><li>列表项较多时应提供分页、筛选或虚拟滚动，避免无限延长页面。</li><li>状态不只依赖颜色，需保留可读文字。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>使用 grid、row 与 gridcell 表达表格化列表结构。</li><li>选择与全选使用真实按钮，并提供明确的辅助名称与实时状态反馈。</li><li>行内操作拥有独立焦点，不会因点击操作而误触发行选择。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>size</code><span>large | small</span><span>40px 数据行或 32px 紧凑行</span></div><div><code>columns</code><span>ListColumn[]</span><span>列标题、字段与单元格渲染方式</span></div><div><code>data</code><span>ListItem[]</span><span>列表数据源</span></div><div><code>selectedKeys</code><span>Key[]</span><span>受控选中项集合</span></div><div><code>onSelectionChange</code><span>(keys) =&gt; void</span><span>选择项变化时触发</span></div><div><code>renderActions</code><span>(item) =&gt; node</span><span>行内操作区域</span></div></div></section>`;
}
function syncList(list) {
  if (!list) return;
  const rows = [...list.querySelectorAll('[data-list-row]')];
  const selected = rows.filter(row => row.dataset.listSelected === 'true');
  rows.forEach(row => {
    const checked = row.dataset.listSelected === 'true';
    row.classList.toggle('is-selected', checked);
    const control = row.querySelector('[data-list-select]');
    control?.classList.toggle('is-selected', checked);
    control?.setAttribute('aria-pressed', String(checked));
  });
  list.querySelectorAll('[data-list-mixed-action-row]').forEach(actionRow => {
    const row = list.querySelector(`[data-list-row][data-list-mixed-index="${actionRow.dataset.listMixedActionRow}"]`);
    actionRow.classList.toggle('is-selected', row?.dataset.listSelected === 'true');
  });
  const master = list.querySelector('[data-list-select-all]');
  const all = rows.length > 0 && selected.length === rows.length;
  const mixed = selected.length > 0 && !all;
  master?.classList.toggle('is-selected', all || mixed);
  master?.classList.toggle('is-mixed', mixed);
  master?.setAttribute('aria-pressed', String(all));
  const live = list.querySelector('[data-list-live]');
  if (live) live.textContent = selected.length ? `已选择 ${selected.length} 项` : '未选择任何项';
}
function handleListClick(event) {
  const target = event.target.closest?.('[data-list-select-all],[data-list-select],[data-list-view],[data-list-delete],[data-list-row]');
  if (!target) return false;
  const list = target.closest('[data-list]');
  if (!list) return false;
  if (target.hasAttribute('data-list-select-all')) {
    const rows = [...list.querySelectorAll('[data-list-row]')];
    const shouldSelect = rows.some(row => row.dataset.listSelected !== 'true');
    rows.forEach(row => { row.dataset.listSelected = String(shouldSelect); });
    syncList(list);
    return true;
  }
  const row = target.closest('[data-list-row]');
  if (!row) return true;
  if (target.hasAttribute('data-list-delete')) {
    const label = row.dataset.listLabel || '列表项';
    row.remove();
    syncList(list);
    const live = list.querySelector('[data-list-live]');
    if (live) live.textContent = `已删除${label}`;
    return true;
  }
  if (target.hasAttribute('data-list-view')) {
    const live = list.querySelector('[data-list-live]');
    if (live) live.textContent = `正在查看${row.dataset.listLabel || '列表项'}`;
    return true;
  }
  row.dataset.listSelected = String(row.dataset.listSelected !== 'true');
  syncList(list);
  return true;
}
function handleListHover(event) {
  const target = event.target.closest?.('[data-list-mixed-index],[data-list-mixed-action-row]');
  const list = target?.closest('.gs-list--mixed');
  if (!list) return;
  const index = target.dataset.listMixedIndex ?? target.dataset.listMixedActionRow;
  const related = event.relatedTarget?.closest?.('[data-list-mixed-index],[data-list-mixed-action-row]');
  const relatedIndex = related?.dataset.listMixedIndex ?? related?.dataset.listMixedActionRow;
  if (event.type === 'pointerout' && related?.closest('.gs-list--mixed') === list && relatedIndex === index) return;
  const hovered = event.type === 'pointerover' ? index : '';
  list.querySelectorAll('[data-list-mixed-index],[data-list-mixed-action-row]').forEach(node => {
    const nodeIndex = node.dataset.listMixedIndex ?? node.dataset.listMixedActionRow;
    node.classList.toggle('is-hover', nodeIndex === hovered);
  });
}
document.addEventListener('pointerover', handleListHover);
document.addEventListener('pointerout', handleListHover);
function formatSliderValue(root, value) { const unit = root.dataset.sliderUnit || ''; return `${value}${unit ? ` ${unit}` : ''}`; }
function syncSlider(root) {
  const input = root?.querySelector('[data-slider-input], .gs-slider__input');
  if (!input) return;
  const min = Number(input.min || 0); const max = Number(input.max || 100); const value = Number(input.value);
  const percent = max === min ? 0 : ((value - min) / (max - min)) * 100;
  const label = formatSliderValue(root, value);
  root.style.setProperty('--gs-slider-value', `${Math.max(0, Math.min(100, percent))}%`);
  const inputRect = input.getBoundingClientRect(); const rootRect = root.getBoundingClientRect(); const thumbSize = 22;
  const thumbPosition = max === min ? 0 : (value - min) / (max - min);
  root.style.setProperty('--gs-slider-tip-left', `${inputRect.left - rootRect.left + (thumbSize / 2) + (inputRect.width - thumbSize) * thumbPosition}px`);
  const output = root.querySelector('[data-slider-output]');
  if (output) { output.textContent = label; output.classList.toggle('is-always', root.dataset.sliderTipsAlways === 'true'); }
  const example = root.closest('.gs-slider-example');
  const result = example?.querySelector('[data-slider-result]');
  if (result) result.textContent = `当前数值：${value}`;
  const editInput = root.querySelector('[data-slider-edit-input]');
  if (editInput && editInput.value !== String(value)) editInput.value = String(value);
  input.setAttribute('aria-valuetext', label);
}
function handleSliderInput(event) { const input = event.target; if (!(input instanceof HTMLInputElement) || !input.matches('[data-slider-input], .gs-slider__input')) return; syncSlider(input.closest('[data-slider]')); }
function handleSliderEditInput(event) { const editInput = event.target; if (!(editInput instanceof HTMLInputElement) || !editInput.matches('[data-slider-edit-input]')) return; const root = editInput.closest('[data-slider]'); const range = root?.querySelector('.gs-slider__input'); if (!root || !range || editInput.value === '') return; const min = Number(range.min || 0); const max = Number(range.max || 100); const step = Number(range.step || 1); const raw = Number(editInput.value); if (!Number.isFinite(raw)) return; const value = Math.min(max, Math.max(min, min + Math.round((raw - min) / step) * step)); range.value = String(value); editInput.value = String(value); syncSlider(root); }
function syncSliderRange(root) { const inputs = [...(root?.querySelectorAll('[data-slider-range-input]') || [])]; if (inputs.length < 2) return; const min = Number(inputs[0].min || 0); const max = Number(inputs[0].max || 100); const values = inputs.map(input => Number(input.value)); const start = Math.min(values[0], values[1]); const end = Math.max(values[0], values[1]); const startPercent = max === min ? 0 : ((start - min) / (max - min)) * 100; const endPercent = max === min ? 100 : ((end - min) / (max - min)) * 100; root.style.setProperty('--gs-slider-range-start', `${Math.max(0, Math.min(100, startPercent))}%`); root.style.setProperty('--gs-slider-range-end', `${Math.max(0, Math.min(100, endPercent))}%`); const inputRect = inputs[0].getBoundingClientRect(); const rootRect = root.getBoundingClientRect(); const thumbSize = 22; const tipLeft = value => `${inputRect.left - rootRect.left + (thumbSize / 2) + (inputRect.width - thumbSize) * ((value - min) / (max - min))}px`; root.style.setProperty('--gs-slider-range-start-tip-left', tipLeft(start)); root.style.setProperty('--gs-slider-range-end-tip-left', tipLeft(end)); const result = root.querySelector('[data-slider-range-result]'); if (result) result.textContent = `开始值：${start} · 结束值：${end}`; inputs.forEach(input => input.setAttribute('aria-valuetext', String(Number(input.value)))); }
function enhanceSliderRange(root) { root.dataset.sliderRangeFeedback = root.closest('.gs-slider-example')?.querySelector('.demo-title')?.textContent.includes('范围选择并反馈') ? 'result' : 'tip'; root.querySelectorAll('[data-slider-range-result], [data-slider-range-output]').forEach(item => item.remove()); if (root.dataset.sliderRangeFeedback === 'result') { const result = document.createElement('span'); result.className = 'gs-slider__result'; result.dataset.sliderRangeResult = ''; result.setAttribute('aria-live','polite'); root.append(result); return; } const inputs = [...root.querySelectorAll('[data-slider-range-input]')]; inputs.forEach((input,index) => { const output = document.createElement('output'); output.className = 'gs-slider__output'; output.dataset.sliderRangeOutput = index === 0 ? 'start' : 'end'; output.textContent = input.value; output.setAttribute('aria-hidden','true'); root.append(output); }); }
function syncSliderRangeTips(root) { const inputs = [...(root?.querySelectorAll('[data-slider-range-input]') || [])]; root?.querySelectorAll('[data-slider-range-output]').forEach((output,index) => { if (inputs[index]) output.textContent = inputs[index].value; }); }
function handleSliderRangeInput(event) { const input = event.target; if (!(input instanceof HTMLInputElement) || !input.matches('[data-slider-range-input]')) return; const root = input.closest('[data-slider-range]'); if (!root) return; const inputs = [...root.querySelectorAll('[data-slider-range-input]')]; const other = inputs.find(item => item !== input); if (other && Number(input.value) < Number(other.value)) other.value = input.value; syncSliderRange(root); syncSliderRangeTips(root); }
function sliderRangePointerValue(root, event) { const input = root?.querySelector('[data-slider-range-input]'); if (!input || typeof event.clientX !== 'number') return null; const rect = input.getBoundingClientRect(); const min = Number(input.min || 0); const max = Number(input.max || 100); const step = Number(input.step || 1); const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)); const raw = min + (max - min) * ratio; return Math.min(max, Math.max(min, min + Math.round((raw - min) / step) * step)); }
function updateSliderRangePointer(root, event) { const value = sliderRangePointerValue(root, event); const inputs = [...(root?.querySelectorAll('[data-slider-range-input]') || [])]; const active = Number(root?.dataset.sliderRangeActive); if (value === null || inputs.length < 2 || !Number.isInteger(active)) return; const other = inputs[active === 0 ? 1 : 0]; inputs[active].value = String(value); if (active === 0 && Number(inputs[active].value) > Number(other.value)) inputs[active].value = other.value; if (active === 1 && Number(inputs[active].value) < Number(other.value)) inputs[active].value = other.value; syncSliderRange(root); syncSliderRangeTips(root); }
function handleSliderRangePointerDown(event) { const root = event.target.closest?.('[data-slider-range]'); if (!root || event.target.closest?.('.gs-slider-range-result')) return; const inputs = [...root.querySelectorAll('[data-slider-range-input]')]; const value = sliderRangePointerValue(root, event); if (inputs.length < 2 || value === null) return; const rect = inputs[0].getBoundingClientRect(); const min = Number(inputs[0].min || 0); const max = Number(inputs[0].max || 100); const pointerRatio = (event.clientX - rect.left) / rect.width; const positions = inputs.map(input => (Number(input.value) - min) / (max - min)); const active = Math.abs(pointerRatio - positions[0]) <= Math.abs(pointerRatio - positions[1]) ? 0 : 1; root.dataset.sliderRangeActive = String(active); updateSliderRangePointer(root, event); event.preventDefault(); }
function handleSliderRangeHover(event) { const hit = document.elementFromPoint?.(event.clientX, event.clientY); const root = hit?.closest?.('[data-slider-range]'); document.querySelectorAll('[data-slider-range]').forEach(item => item.classList.remove('is-range-thumb-hover')); document.querySelectorAll('[data-slider-range] .is-range-hover').forEach(input => input.classList.remove('is-range-hover')); document.querySelectorAll('[data-slider-range] .gs-slider__output').forEach(output => output.classList.remove('is-visible')); if (!root) return; const inputs = [...root.querySelectorAll('[data-slider-range-input]')]; if (inputs.length < 2) return; const rect = inputs[0].getBoundingClientRect(); const min = Number(inputs[0].min || 0); const max = Number(inputs[0].max || 100); const thumbSize = 22; const positions = inputs.map(input => rect.left + (thumbSize / 2) + (rect.width - thumbSize) * ((Number(input.value) - min) / (max - min))); const active = Math.abs(event.clientX - positions[0]) <= Math.abs(event.clientX - positions[1]) ? 0 : 1; if (Math.abs(event.clientX - positions[active]) <= 14) { root.classList.add('is-range-thumb-hover'); inputs[active].classList.add('is-range-hover'); if (root.dataset.sliderRangeFeedback === 'tip') root.querySelector(`[data-slider-range-output="${active === 0 ? 'start' : 'end'}"]`)?.classList.add('is-visible'); } }
function handleSliderRangePointerMove(event) { handleSliderRangeHover(event); const root = document.querySelector('[data-slider-range][data-slider-range-active]'); if (!root) return; updateSliderRangePointer(root, event); event.preventDefault(); }
function handleSliderRangePointerEnd() { document.querySelectorAll('[data-slider-range][data-slider-range-active]').forEach(root => delete root.dataset.sliderRangeActive); }
function setSliderTipVisible(root, visible) { const output = root?.querySelector('[data-slider-output]'); if (!output || root.dataset.sliderTipsAlways === 'true') return; output.classList.toggle('is-visible', visible); }
function hideSliderTips(except) { document.querySelectorAll('[data-slider]').forEach(root => { if (root !== except) setSliderTipVisible(root, false); }); }
function sliderThumbPosition(root) { const input = root?.querySelector('.gs-slider__input'); if (!input) return null; const rect = input.getBoundingClientRect(); const min = Number(input.min || 0); const max = Number(input.max || 100); const value = Number(input.value); const percent = max === min ? 0 : (value - min) / (max - min); return { x: rect.left + rect.width * percent, y: rect.top + rect.height / 2 }; }
function pointerOverSliderThumb(root, event) { const position = sliderThumbPosition(root); if (!position || typeof event.clientX !== 'number') return false; return Math.abs(event.clientX - position.x) <= 14 && Math.abs(event.clientY - position.y) <= 14; }
function handleSliderPointerDown(event) { const input = event.target.closest?.('.gs-slider__input'); const root = input?.closest('[data-slider]'); if (!root || input.disabled) return; hideSliderTips(root); root.dataset.sliderPointerActive = 'true'; setSliderTipVisible(root, true); }
function handleSliderPointerMove(event) { const root = event.target.closest?.('[data-slider]') || document.querySelector('[data-slider][data-slider-pointer-active="true"]'); if (!root) { hideSliderTips(); return; } hideSliderTips(root); if (root.dataset.sliderTipsAlways === 'true') return; setSliderTipVisible(root, pointerOverSliderThumb(root, event)); }
function handleSliderPointerUp(event) { const root = event.target.closest?.('[data-slider]') || document.querySelector('[data-slider][data-slider-pointer-active="true"]'); if (!root) { hideSliderTips(); return; } hideSliderTips(root); if (root.dataset.sliderTipsAlways !== 'true') setSliderTipVisible(root, pointerOverSliderThumb(root, event)); delete root.dataset.sliderPointerActive; }
function handleSliderFocus(event) { const root = event.target.closest?.('[data-slider]'); if (!root || root.dataset.sliderTipsAlways === 'true') return; setSliderTipVisible(root, event.type === 'focusin'); }
function wrapUploadButtonDemo(app) {
  const section = app.querySelector('#按钮上传');
  const paragraph = section?.querySelector(':scope > p');
  const states = section?.querySelector(':scope > .upload-button-state-reference');
  if (!section || !paragraph || !states || section.querySelector(':scope > .upload-button-demo-card')) return;
  const card = document.createElement('div');
  card.className = 'upload-button-demo-card';
  paragraph.after(card);
  card.append(paragraph, states);
}
function ensureColorPickerInputFields(app) {
  app.querySelectorAll('[data-color-value], [data-color-alpha-text]').forEach(input => {
    if (input.parentElement?.classList.contains('gs-input-field')) return;
    const field = document.createElement('div');
    field.className = 'gs-input-field gs-color-picker__format-input';
    input.replaceWith(field);
    field.append(input);
  });
}
function initComponentDemos(app) { wrapUploadButtonDemo(app); app.querySelectorAll('[data-slider]').forEach(syncSlider); app.querySelectorAll('[data-slider-range]').forEach(root=>{ enhanceSliderRange(root); syncSliderRange(root); syncSliderRangeTips(root); }); app.querySelectorAll('[data-tree]').forEach(tree=>{ const current=tree.querySelector('.gs-tree__item.is-selected') || tree.querySelector('.gs-tree__item'); if(current) current.tabIndex=0; tree.querySelectorAll('.gs-tree__item[aria-checked]').forEach(item=>{ if(directTreeChildren(item).length) updateTreeParents(directTreeChildren(item)[0] || item); }); }); app.querySelectorAll('[data-checkbox-demo]').forEach(syncCheckboxDemo); ensureColorPickerInputFields(app); app.querySelectorAll('[data-color-picker]').forEach(updateColorPicker); app.querySelectorAll('.gs-input-range input').forEach(input=>input.setAttribute('data-numeric-only','')); app.querySelectorAll('.gs-dtp-popover__footer [data-dtp-action]').forEach(action=>{ action.classList.add('gs-button'); if(action.textContent.trim()==='取消') action.classList.add('gs-button--secondary'); }); app.querySelectorAll('[data-dtp-range-action]').forEach(action=>{ action.classList.add('gs-button'); if(action.textContent.trim()==='取消') action.classList.add('gs-button--secondary'); }); app.querySelectorAll('.gs-dtp-popover--calendar .gs-dtp-popover__footer').forEach(footer=>{ const today=document.createElement('button'); today.type='button'; today.className='gs-button gs-button--text-primary'; today.dataset.dtpAction='today'; today.setAttribute('aria-label','今天'); today.textContent='今天'; const actions=document.createElement('span'); actions.className='gs-dtp-calendar-footer-actions'; [...footer.querySelectorAll('[data-dtp-action]')].forEach(action=>actions.append(action)); footer.append(today,actions); }); }
function syncCheckboxDemo(group) { const master=group.querySelector('[data-checkbox-master]'); const items=[...group.querySelectorAll('[data-checkbox-item]:not(:disabled)')]; const checked=items.filter(item=>item.checked).length; master.checked=checked===items.length && checked>0; master.indeterminate=checked>0 && checked<items.length; }
function handleControlChange(event) {
  const input=event.target;
  if(!(input instanceof HTMLInputElement)) return;
  if (input.hasAttribute('data-pagination-jump')) {
    const pagination=input.closest('[data-pagination]');
    if (pagination && pagination.dataset.paginationDisabled!=='true') {
      const pageSize=Number(pagination.dataset.paginationSizeValue) || 10;
      const totalPages=Math.max(1,Math.ceil((Number(pagination.dataset.paginationTotal) || 101) / pageSize));
      pagination.dataset.paginationCurrent=String(Math.min(totalPages,Math.max(1,Number(input.value.replace(/\D/g,'')) || 1)));
      renderPagination(pagination);
    }
    return;
  }
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
function handlePaginationKeydown(event) {
  const input=event.target.closest?.('[data-pagination-jump]');
  if (!input || event.key !== 'Enter') return;
  const pagination=input.closest('[data-pagination]');
  if (!pagination || pagination.dataset.paginationDisabled === 'true') return;
  const pageSize=Number(pagination.dataset.paginationSizeValue) || 10;
  const totalPages=Math.max(1,Math.ceil((Number(pagination.dataset.paginationTotal) || 101) / pageSize));
  pagination.dataset.paginationCurrent=String(Math.min(totalPages,Math.max(1,Number(input.value.replace(/\D/g,'')) || 1)));
  renderPagination(pagination);
  event.preventDefault();
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
  if (picker.dataset.picker === 'color-format') {
    const format = picker.querySelector('[data-color-format]');
    const colorPicker = picker.closest('[data-color-picker]');
    if (format && colorPicker) {
      format.value = value;
      updateColorPicker(colorPicker, true);
    }
  }
  if (picker.dataset.picker === 'pagination-size') {
    const pagination = picker.closest('[data-pagination]');
    if (pagination && pagination.dataset.paginationDisabled !== 'true') {
      pagination.dataset.paginationSizeValue = String(Number(value) || 10);
      pagination.dataset.paginationCurrent = '1';
      renderPagination(pagination);
    }
  }
  if (picker.dataset.picker === 'calendar-year' || picker.dataset.picker === 'calendar-month') {
    const calendar = picker.closest('[data-calendar]');
    if (calendar) {
      if (picker.dataset.picker === 'calendar-year') calendar.dataset.calendarYear = String(Number(value));
      else calendar.dataset.calendarMonth = String(Number(value));
      syncCalendarControls(calendar);
      renderCalendarGrid(calendar);
    }
  }
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
function clampColorValue(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }
function hsvToRgb(h, s, v) {
  const saturation = s / 100;
  const value = v / 100;
  const chroma = value * saturation;
  const segment = h / 60;
  const x = chroma * (1 - Math.abs(segment % 2 - 1));
  const [r1, g1, b1] = segment < 1 ? [chroma, x, 0] : segment < 2 ? [x, chroma, 0] : segment < 3 ? [0, chroma, x] : segment < 4 ? [0, x, chroma] : segment < 5 ? [x, 0, chroma] : [chroma, 0, x];
  const m = value - chroma;
  return [r1, g1, b1].map(channel => Math.round((channel + m) * 255));
}
function rgbToHsv(r, g, b) {
  const red = r / 255, green = g / 255, blue = b / 255;
  const max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min;
  let hue = 0;
  if (delta) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }
  if (hue < 0) hue += 360;
  const saturation = max === 0 ? 0 : delta / max;
  return [Math.round(hue), Math.round(saturation * 100), Math.round(max * 100)];
}
function parseColorValue(value) {
  const raw = String(value || '').trim();
  const hex = raw.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    const expanded = hex[1].length === 3 ? hex[1].split('').map(char => char + char).join('') : hex[1];
    const channels = [0, 2, 4].map(index => parseInt(expanded.slice(index, index + 2), 16));
    return { rgb: channels, alpha: expanded.length >= 8 ? parseInt(expanded.slice(6, 8), 16) / 255 : 1 };
  }
  const rgb = raw.match(/^rgba?\(\s*([\d.]+)\s*[, ]\s*([\d.]+)\s*[, ]\s*([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/i);
  if (rgb) return { rgb: rgb.slice(1, 4).map(channel => clampColorValue(channel, 0, 255)), alpha: clampColorValue(rgb[4] === undefined ? 1 : rgb[4], 0, 1) };
  return null;
}
function formatColorPickerValue(root) {
  const rgb = hsvToRgb(Number(root.dataset.hue), Number(root.dataset.saturation), Number(root.dataset.lightness));
  const alpha = Number(root.dataset.alpha);
  const format = root.querySelector('[data-color-format]')?.value || 'css';
  if (format === 'hex') {
    const hex = rgb.map(channel => channel.toString(16).padStart(2, '0')).join('').toUpperCase();
    return alpha < 1 ? `#${hex}${Math.round(alpha * 255).toString(16).padStart(2, '0').toUpperCase()}` : `#${hex}`;
  }
  if (format === 'rgb') return alpha < 1 ? `rgba(${rgb.join(',')},${Number(alpha.toFixed(2))})` : `rgb(${rgb.join(',')})`;
  return `rgba(${rgb.join(',')},${Number(alpha.toFixed(2))})`;
}
function setColorPickerFromHex(root, value, announce = false) {
  const parsed = parseColorValue(value);
  if (!parsed) return false;
  const [hue, saturation, lightness] = rgbToHsv(...parsed.rgb);
  root.dataset.hue = String(hue);
  root.dataset.saturation = String(saturation);
  root.dataset.lightness = String(lightness);
  root.dataset.alpha = String(parsed.alpha);
  updateColorPicker(root, announce);
  return true;
}
function ensureGradientEditor(root) {
  const angleInput = root?.querySelector('[data-color-angle]');
  if (!angleInput || angleInput.dataset.gradientEnhanced) return;
  angleInput.dataset.gradientEnhanced = 'true';
  angleInput.hidden = true;
  const editor = document.createElement('div');
  editor.className = 'gs-color-picker__gradient-editor';
  editor.dataset.gradientEditor = '';
  editor.setAttribute('role', 'slider');
  editor.setAttribute('tabindex', '0');
  editor.setAttribute('aria-label', '渐变编辑条');
  const track = document.createElement('span');
  track.className = 'gs-color-picker__gradient-track';
  const stops = document.createElement('span');
  stops.className = 'gs-color-picker__gradient-stops';
  [0, 100].forEach((position, index) => {
    const stop = document.createElement('button');
    stop.type = 'button';
    stop.className = `gs-color-picker__gradient-stop${index === 0 ? ' is-selected' : ''}`;
    stop.dataset.gradientStop = String(position);
    stop.dataset.gradientHue = '0';
    stop.dataset.gradientSaturation = '0';
    stop.dataset.gradientLightness = '100';
    stop.dataset.gradientAlpha = '1';
    stop.style.left = `${position}%`;
    stop.setAttribute('aria-label', `渐变点 ${position}%`);
    stops.append(stop);
  });
  editor.append(track, stops);
  angleInput.parentElement.insertBefore(editor, angleInput);
}
function syncGradientStopToPicker(root, stop) {
  if (!root || !stop) return;
  root.dataset.hue = stop.dataset.gradientHue || root.dataset.hue;
  root.dataset.saturation = stop.dataset.gradientSaturation || root.dataset.saturation;
  root.dataset.lightness = stop.dataset.gradientLightness || root.dataset.lightness;
  root.dataset.alpha = stop.dataset.gradientAlpha || root.dataset.alpha;
}
function syncPickerToGradientStop(root) {
  if (root?.dataset.mode !== 'gradient') return;
  const stop = root?.querySelector('.gs-color-picker__gradient-stop.is-selected');
  if (!stop) return;
  stop.dataset.gradientHue = root.dataset.hue;
  stop.dataset.gradientSaturation = root.dataset.saturation;
  stop.dataset.gradientLightness = root.dataset.lightness;
  stop.dataset.gradientAlpha = root.dataset.alpha;
  updateGradientStopStyles(root);
}
function updateGradientStopStyles(root) {
  root?.querySelectorAll('[data-gradient-stop]').forEach(stop => {
    const rgb = hsvToRgb(Number(stop.dataset.gradientHue), Number(stop.dataset.gradientSaturation), Number(stop.dataset.gradientLightness));
    const solid = `rgb(${rgb.join(' ')})`;
    const alpha = `rgb(${rgb.join(' ')} / ${stop.dataset.gradientAlpha || 1})`;
    stop.style.background = `linear-gradient(90deg, ${solid} 0 50%, ${alpha} 50% 100%), repeating-conic-gradient(#d5d7d9 0 25%, #fff 0 50%) 50% / 6px 6px`;
  });
}
function updateGradientTrack(root) {
  const track = root?.querySelector('[data-gradient-editor] .gs-color-picker__gradient-track');
  if (!track) return;
  const stops = [...root.querySelectorAll('[data-gradient-stop]')]
    .sort((a, b) => Number(a.dataset.gradientStop) - Number(b.dataset.gradientStop))
    .map(stop => {
      const rgb = hsvToRgb(Number(stop.dataset.gradientHue), Number(stop.dataset.gradientSaturation), Number(stop.dataset.gradientLightness));
      return `rgb(${rgb.join(' ')} / ${stop.dataset.gradientAlpha || 1}) ${stop.dataset.gradientStop}%`;
    });
  track.style.background = `linear-gradient(90deg, ${stops.join(', ')}), repeating-conic-gradient(#d5d7d9 0 25%, #fff 0 50%) 50% / 6px 6px`;
}
function removeGradientStop(root, stop) {
  const stops = [...root.querySelectorAll('[data-gradient-stop]')];
  if (!stop || stops.length <= 2) return false;
  stop.remove();
  const next = root.querySelector('[data-gradient-stop]');
  next?.classList.add('is-selected');
  if (next) syncGradientStopToPicker(root, next);
  delete root.dataset.gradientDragging;
  updateColorPicker(root, true);
  const live = root.querySelector('[data-color-live]');
  if (live) live.textContent = '已删除渐变点';
  return true;
}
function updateColorPicker(root, announce = false) {
  if (!root) return;
  ensureGradientEditor(root);
  syncPickerToGradientStop(root);
  updateGradientTrack(root);
  const hue = clampColorValue(root.dataset.hue, 0, 360);
  const saturationValue = clampColorValue(root.dataset.saturation, 0, 100);
  const lightness = clampColorValue(root.dataset.lightness, 0, 100);
  const alpha = clampColorValue(root.dataset.alpha, 0, 1);
  const angle = clampColorValue(root.dataset.colorAngle || 70, 0, 360);
  root.dataset.hue = String(hue); root.dataset.saturation = String(saturationValue); root.dataset.lightness = String(lightness); root.dataset.alpha = String(alpha); root.dataset.colorAngle = String(angle);
  root.style.setProperty('--gs-cp-hue', hue);
  root.style.setProperty('--gs-cp-saturation', saturationValue);
  root.style.setProperty('--gs-cp-lightness', lightness);
  root.style.setProperty('--gs-cp-alpha', alpha);
  root.style.setProperty('--gs-cp-angle', `${angle}deg`);
  const isGradient = root.dataset.mode === 'gradient';
  root.classList.toggle('gs-color-picker--gradient', isGradient);
  const currentRgb = hsvToRgb(hue, saturationValue, lightness);
  const currentColor = `rgb(${currentRgb.join(' ')} / ${alpha})`;
  root.style.setProperty('--gs-cp-current-color', currentColor);
  const opaqueColor = `rgb(${currentRgb.join(' ')})`;
  const previewColor = `linear-gradient(90deg, ${opaqueColor} 0 50%, ${currentColor} 50% 100%), repeating-conic-gradient(#d5d7d9 0 25%, #fff 0 50%) 50% / 8px 8px`;
  const preview = root.querySelector('[data-color-preview]');
  if (preview) {
    preview.style.background = previewColor;
    preview.setAttribute('aria-label', `当前颜色 ${formatColorPickerValue(root)}`);
  }
  const angleControl = root.querySelector('.gs-color-picker__gradient-angle');
  if (angleControl) angleControl.hidden = !isGradient;
  root.style.setProperty('--gs-cp-saturation-position', `${saturationValue}%`);
  root.style.setProperty('--gs-cp-lightness-position', `${100 - lightness}%`);
  const hueInput = root.querySelector('[data-color-hue]');
  const alphaInput = root.querySelector('[data-color-alpha]');
  if (hueInput) hueInput.value = String(hue);
  if (alphaInput) alphaInput.value = String(alpha);
  const alphaText = root.querySelector('[data-color-alpha-text]');
  if (alphaText) {
    alphaText.type = 'number';
    alphaText.min = '0';
    alphaText.max = '100';
    alphaText.step = '1';
    alphaText.inputMode = 'decimal';
    if (document.activeElement !== alphaText) alphaText.value = String(Math.round(alpha * 100));
  }
  const angleInput = root.querySelector('[data-color-angle]');
  const angleText = root.querySelector('[data-color-angle-text]');
  if (angleInput) angleInput.value = String(angle);
  if (angleText && document.activeElement !== angleText) angleText.value = String(angle);
  const valueInput = root.querySelector('[data-color-value]');
  if (valueInput && document.activeElement !== valueInput) valueInput.value = formatColorPickerValue(root);
  const saturationPanel = root.querySelector('[data-color-saturation]');
  if (saturationPanel) { saturationPanel.setAttribute('aria-valuenow', String(saturationValue)); saturationPanel.setAttribute('aria-valuetext', `${saturationValue}% 饱和度，${lightness}% 明度`); }
  if (announce) { const live = root.querySelector('[data-color-live]'); if (live) live.textContent = `颜色已更新为 ${formatColorPickerValue(root)}`; }
}
function setColorPickerSaturation(root, event) {
  const panel = root?.querySelector('[data-color-saturation]');
  if (!panel) return;
  const rect = panel.getBoundingClientRect();
  const saturation = clampColorValue(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
  const lightness = clampColorValue(100 - ((event.clientY - rect.top) / rect.height) * 100, 0, 100);
  root.dataset.saturation = String(Math.round(saturation));
  root.dataset.lightness = String(Math.round(lightness));
  updateColorPicker(root, true);
}
function handleColorPickerClick(event) {
  const target = event.target.closest?.('[data-color-mode],[data-color-swatch],[data-color-action]');
  const gradientEditor = event.target.closest?.('[data-gradient-editor]');
  if (gradientEditor) {
    const root = gradientEditor.closest('[data-color-picker]');
    const stop = event.target.closest('[data-gradient-stop]');
    if (stop) {
      gradientEditor.querySelectorAll('[data-gradient-stop]').forEach(item => item.classList.toggle('is-selected', item === stop));
      if (root) { syncGradientStopToPicker(root, stop); updateColorPicker(root, true); }
      return true;
    }
    const rect = gradientEditor.querySelector('.gs-color-picker__gradient-track')?.getBoundingClientRect() || gradientEditor.getBoundingClientRect();
    const position = Math.round(Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)));
    const exists = [...gradientEditor.querySelectorAll('[data-gradient-stop]')].some(item => Math.abs(parseFloat(item.style.left) - position) < 4);
    if (!exists) {
      const newStop = document.createElement('button');
      newStop.type = 'button';
      newStop.className = 'gs-color-picker__gradient-stop is-selected';
      newStop.dataset.gradientStop = String(position);
      newStop.dataset.gradientHue = root?.dataset.hue || '210';
      newStop.dataset.gradientSaturation = root?.dataset.saturation || '100';
      newStop.dataset.gradientLightness = root?.dataset.lightness || '55';
      newStop.dataset.gradientAlpha = root?.dataset.alpha || '1';
      newStop.style.left = `${position}%`;
      newStop.setAttribute('aria-label', `渐变点 ${position}%`);
      gradientEditor.querySelectorAll('[data-gradient-stop]').forEach(item => item.classList.remove('is-selected'));
      gradientEditor.querySelector('.gs-color-picker__gradient-stops')?.append(newStop);
      if (root) { updateColorPicker(root, true); const live = root.querySelector('[data-color-live]'); if (live) live.textContent = `已添加${position}%渐变点`; }
    }
    return true;
  }
  if (!target) return false;
  const root = target.closest('[data-color-picker]');
  if (target.matches('[data-color-mode]') && root) {
    root.dataset.mode = target.dataset.colorMode;
    root.classList.toggle('gs-color-picker--gradient', target.dataset.colorMode === 'gradient');
    if (target.dataset.colorMode === 'gradient') syncGradientStopToPicker(root, root.querySelector('.gs-color-picker__gradient-stop.is-selected'));
    updateColorPicker(root, true);
    const angle = root.querySelector('.gs-color-picker__gradient-angle');
    if (angle) angle.hidden = target.dataset.colorMode !== 'gradient';
    root.querySelectorAll('[data-color-mode]').forEach(button => { const selected = button === target; button.classList.toggle('is-selected', selected); button.setAttribute('aria-selected', String(selected)); });
    const live = root.querySelector('[data-color-live]'); if (live) live.textContent = `已切换为${target.textContent.trim()}模式`;
    return true;
  }
  if (target.matches('[data-color-swatch]')) {
    const value = target.dataset.colorSwatch;
    const picker = root || document.querySelector('[data-color-picker]');
    if (picker) setColorPickerFromHex(picker, value, true);
    const referenceLive = document.querySelector('[data-color-reference-live]'); if (referenceLive) referenceLive.textContent = `已选择${target.getAttribute('aria-label')?.replace(/^选择/, '') || '颜色'}`;
    return true;
  }
  if (target.matches('[data-color-action]')) {
    if (root && target.dataset.colorAction === 'clear') {
      root.dataset.hue = '0'; root.dataset.saturation = '0'; root.dataset.lightness = '100'; root.dataset.alpha = '1';
      updateColorPicker(root, true);
      const live = root.querySelector('[data-color-live]'); if (live) live.textContent = '已清除颜色';
      return true;
    }
    if (root && target.dataset.colorAction === 'confirm') {
      root.dataset.confirmedValue = formatColorPickerValue(root);
      const live = root.querySelector('[data-color-live]'); if (live) live.textContent = `已确认颜色 ${root.dataset.confirmedValue}`;
      return true;
    }
    return false;
  }
  return false;
}
function handleColorPickerInput(event) {
  const input = event.target;
  const root = input.closest?.('[data-color-picker]');
  if (!root) return;
  if (input.matches('[data-color-hue]')) root.dataset.hue = input.value;
  else if (input.matches('[data-color-alpha]')) root.dataset.alpha = input.value;
  else if (input.matches('[data-color-alpha-text]')) root.dataset.alpha = String(clampColorValue(input.value, 0, 100) / 100);
  else if (input.matches('[data-color-angle]')) root.dataset.colorAngle = input.value;
  else if (input.matches('[data-color-angle-text]')) root.dataset.colorAngle = clampColorValue(input.value, 0, 360);
  else if (input.matches('[data-color-value]')) { if (setColorPickerFromHex(root, input.value)) updateColorPicker(root, true); return; }
  updateColorPicker(root, true);
}
function handleColorPickerChange(event) {
  const input = event.target;
  const root = input.closest?.('[data-color-picker]');
  if (!root || !input.matches('[data-color-format]')) return;
  updateColorPicker(root, true);
}
function handleColorPickerFocusOut(event) {
  const input = event.target;
  const root = input.closest?.('[data-color-picker]');
  if (!root || !input.matches('[data-color-value],[data-color-alpha-text]')) return;
  setTimeout(() => updateColorPicker(root, true), 0);
}
function handleColorPickerPointerDown(event) {
  const stop = event.target.closest?.('[data-gradient-stop]');
  if (stop) {
    const editor = stop.closest('[data-gradient-editor]');
    const root = editor?.closest('[data-color-picker]');
    if (editor && root) {
      editor.querySelectorAll('[data-gradient-stop]').forEach(item => item.classList.toggle('is-selected', item === stop));
      syncGradientStopToPicker(root, stop);
      root.dataset.gradientDragging = 'true';
      editor.setPointerCapture?.(event.pointerId);
      return;
    }
  }
  const panel = event.target.closest?.('[data-color-saturation]');
  if (!panel) return;
  const root = panel.closest('[data-color-picker]');
  if (!root) return;
  root.dataset.colorDragging = 'true';
  panel.setPointerCapture?.(event.pointerId);
  setColorPickerSaturation(root, event);
}
function handleColorPickerPointerMove(event) {
  const root = event.target.closest?.('[data-color-picker]') || document.querySelector('[data-color-picker][data-color-dragging="true"],[data-color-picker][data-gradient-dragging="true"]');
  if (root?.dataset.gradientDragging === 'true') {
    const editor = root.querySelector('[data-gradient-editor]');
    const stop = editor?.querySelector('.gs-color-picker__gradient-stop.is-selected');
    if (editor && stop) {
      const editorRect = editor.getBoundingClientRect();
      const trackRect = editor.querySelector('.gs-color-picker__gradient-track')?.getBoundingClientRect() || editorRect;
      const outsideEditor = event.clientY < editorRect.top - 12 || event.clientY > editorRect.bottom + 12;
      if (outsideEditor) {
        root.dataset.gradientDeletePending = 'true';
        stop.classList.add('is-delete-pending');
        return;
      }
      delete root.dataset.gradientDeletePending;
      stop.classList.remove('is-delete-pending');
      const position = Math.round(Math.min(100, Math.max(0, ((event.clientX - trackRect.left) / trackRect.width) * 100)));
      stop.dataset.gradientStop = String(position);
      stop.style.left = `${position}%`;
      stop.setAttribute('aria-label', `渐变点 ${position}%`);
      updateGradientTrack(root);
    }
    return;
  }
  if (root?.dataset.colorDragging === 'true') setColorPickerSaturation(root, event);
}
function handleColorPickerPointerUp(event) {
  const root = event.target.closest?.('[data-color-picker]') || document.querySelector('[data-color-picker][data-color-dragging="true"],[data-color-picker][data-gradient-dragging="true"]');
  if (root?.dataset.gradientDragging === 'true') {
    const stop = root.querySelector('.gs-color-picker__gradient-stop.is-selected');
    if (event.type === 'pointerup' && root.dataset.gradientDeletePending === 'true' && stop) removeGradientStop(root, stop);
    else if (stop) stop.classList.remove('is-delete-pending');
    delete root.dataset.gradientDeletePending;
  }
  if (root) { delete root.dataset.colorDragging; delete root.dataset.gradientDragging; }
}
function handleColorPickerKeydown(event) {
  const panel = event.target.closest?.('[data-color-saturation]');
  if (!panel) return;
  const root = panel.closest('[data-color-picker]');
  if (!root || !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const step = event.shiftKey ? 10 : 1;
  if (event.key === 'ArrowLeft') root.dataset.saturation = Number(root.dataset.saturation) - step;
  if (event.key === 'ArrowRight') root.dataset.saturation = Number(root.dataset.saturation) + step;
  if (event.key === 'ArrowUp') root.dataset.lightness = Number(root.dataset.lightness) + step;
  if (event.key === 'ArrowDown') root.dataset.lightness = Number(root.dataset.lightness) - step;
  updateColorPicker(root, true);
  event.preventDefault();
}
function handleComponentClick(event) {
  const app=document.querySelector('#app');
  if (handleDateTimeClick(event)) return;
  if (handleCalendarClick(event)) return;
  const stepButton = event.target.closest('[data-steps-item]');
  if (stepButton && app.contains(stepButton) && !stepButton.disabled) {
    const steps = stepButton.closest('[data-steps]');
    const targetIndex = Number(stepButton.dataset.stepsIndex);
    if (steps && Number.isFinite(targetIndex)) {
      steps.querySelectorAll('.gs-steps__item').forEach((item, itemIndex) => {
        const index = itemIndex + 1;
        const status = index < targetIndex ? 'completed' : index === targetIndex ? 'current' : 'pending';
        item.className = `gs-steps__item gs-steps__item--${status}`;
        item.dataset.stepsState = status;
        const marker = item.querySelector('.gs-steps__marker');
        if (marker) {
          marker.className = `gs-button gs-button--icon gs-button--text gs-steps__marker gs-steps__marker--${status}`;
          marker.innerHTML = status === 'completed' ? gsIcon('check', 'gs-steps__icon') : `<span class="gs-steps__number">${index}</span>`;
        }
        const title = item.querySelector('.gs-steps__title');
        if (title) title.textContent = index === targetIndex ? '进行中的步骤' : index < targetIndex ? '已完成步骤' : '未进行的步骤';
      });
      const live = steps.closest('.gs-steps-demo')?.querySelector('[data-steps-live]');
      if (live) live.textContent = `已切换至第 ${targetIndex} 步`;
    }
    return;
  }
  const sideNavAction = event.target.closest('[data-side-nav-action]');
  if (sideNavAction && app.contains(sideNavAction) && !sideNavAction.disabled) {
    const sideNav = sideNavAction.closest('[data-side-nav]');
    const shouldClear = sideNavAction.classList.contains('is-active');
    sideNav?.querySelectorAll('[data-side-nav-action]').forEach(action => {
      const active = !shouldClear && action === sideNavAction;
      action.classList.toggle('is-active', active);
      action.setAttribute('aria-pressed', String(active));
    });
    const label = sideNavAction.dataset.sideNavLabel || '操作';
    const hint = sideNav?.closest('.gs-side-nav-demo')?.querySelector('[data-side-nav-hint]');
    const live = sideNav?.querySelector('.gs-side-nav__live');
    if (hint) hint.textContent = shouldClear ? '已取消选择。' : `已选择${label}操作。`;
    if (live) live.textContent = shouldClear ? '已取消选择' : `已选择${label}操作`;
    return;
  }
  const breadcrumbLinkTarget=event.target.closest('[data-breadcrumb-link]');
  if (breadcrumbLinkTarget && app.contains(breadcrumbLinkTarget)) {
    const demo=breadcrumbLinkTarget.closest('[data-breadcrumb-demo]');
    const trail=breadcrumbLinkTarget.closest('[data-breadcrumb-trail]');
    const live=demo?.querySelector('[data-breadcrumb-live]');
    const nextIndex=Math.max(0, Math.min(breadcrumbItems.length - 1, Number(breadcrumbLinkTarget.dataset.breadcrumbIndex) || 0));
    if (trail) {
      trail.dataset.breadcrumbCurrent=String(nextIndex);
      trail.innerHTML=breadcrumbTrailMarkup({ withIcon: trail.dataset.breadcrumbIcon === 'true', currentIndex: nextIndex });
    }
    if (live) live.textContent=`已返回${breadcrumbLinkTarget.dataset.breadcrumbLabel}，后续路径已收起`;
    return;
  }
  const paginationButton=event.target.closest('[data-pagination-page]');
  if (paginationButton && app.contains(paginationButton) && !paginationButton.disabled) {
    const pagination=paginationButton.closest('[data-pagination]');
    if (pagination) { pagination.dataset.paginationCurrent=String(Number(paginationButton.dataset.paginationPage) || 1); renderPagination(pagination); }
    return;
  }
  const combinationOption=event.target.closest('[data-combination-option]');
  if (combinationOption && app.contains(combinationOption)) {
    const group=combinationOption.closest('[data-combination-group]');
    group?.querySelectorAll('[data-combination-option]').forEach(item=>{
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed','false');
    });
    combinationOption.classList.add('is-selected');
    combinationOption.setAttribute('aria-pressed','true');
    return;
  }
  if (handleUploadClick(event)) return;
  if (handleListClick(event)) return;
  if (handleTabsClick(event)) return;
  if (handleColorPickerClick(event)) return;
  // Picker dismissal also needs to run for clicks outside a picker. Keep the
  // single delegated listener on #app so every open popup closes consistently.
  handlePickerClick(event);
  if (event.target.closest('[data-picker-trigger],[data-picker] .gs-select-option')) return;
  const tagClose=event.target.closest('[data-tag-close]');
  if(tagClose && app.contains(tagClose)){ const item=tagClose.closest('[data-tag-item]'); const label=item?.querySelector('.gs-tag__label')?.textContent || '标签'; const live=tagClose.closest('[data-tag-demo]')?.querySelector('[data-tag-live]'); item?.remove(); if(live) live.textContent=`已移除${label}标签`; return; }
  const tagReset=event.target.closest('[data-tag-reset]');
  if(tagReset && app.contains(tagReset)){ const demo=tagReset.closest('[data-tag-demo]'); if(demo){ const fresh=document.createRange().createContextualFragment(`<div>${tagDemo('closable',true)}</div>`).firstElementChild; demo.replaceWith(fresh); fresh.querySelector('[data-tag-live]').textContent='已恢复全部标签'; } return; }
  const progressButton=event.target.closest('[data-progress-delta],[data-progress-status],[data-progress-reset]');
  if(progressButton && app.contains(progressButton)){ const progress=app.querySelector('[data-progress-live]'); if(progress){ let value=Number(progress.getAttribute('aria-valuenow')); progress.classList.remove('gs-progress--success','gs-progress--warning','gs-progress--exception'); if(progressButton.hasAttribute('data-progress-delta')) value=Math.max(0,Math.min(100,value+Number(progressButton.dataset.progressDelta))); if(progressButton.hasAttribute('data-progress-reset')) value=62; if(progressButton.dataset.progressStatus==='exception') progress.classList.add('gs-progress--exception'); else if(value===100) progress.classList.add('gs-progress--success'); progress.style.setProperty('--gs-progress-value',`${value}%`); progress.setAttribute('aria-valuenow',String(value)); const state=progress.classList.contains('gs-progress--exception')?'发生异常':value===100?'已完成':'进行中'; progress.setAttribute('aria-valuetext',`${value}%，${state}`); progress.querySelector('.gs-progress__label').textContent=`${value}% · ${state}`; } return; }
  const timelineButton=event.target.closest('[data-timeline-toggle]');
  if(timelineButton && app.contains(timelineButton)){ const details=timelineButton.closest('.gs-timeline__content').querySelector('.gs-timeline__details'); const expanded=timelineButton.getAttribute('aria-expanded')==='true'; timelineButton.setAttribute('aria-expanded',String(!expanded)); timelineButton.textContent=expanded?'查看详情':'收起详情'; details.hidden=expanded; return; }
  const row=event.target.closest('[data-tree-row]');
  if(row && app.contains(row)){ const item=row.closest('.gs-tree__item'); focusTreeItem(item); if(event.target.closest('[data-tree-toggle]') && item.hasAttribute('aria-expanded')) item.setAttribute('aria-expanded',String(item.getAttribute('aria-expanded')!=='true')); else activateTreeItem(item); }
}
let uploadPreviewReturnFocus = null;
function closeUploadPreview() {
  document.querySelector('[data-upload-preview-modal]')?.remove();
  const returnFocus = uploadPreviewReturnFocus;
  uploadPreviewReturnFocus = null;
  if (returnFocus?.isConnected) returnFocus.focus();
}
function openUploadPreview(app, source, returnFocus) {
  if (!app || !source?.src) return;
  closeUploadPreview();
  uploadPreviewReturnFocus = returnFocus;
  const modal = document.createElement('div');
  modal.className = 'gs-upload-preview-modal';
  modal.dataset.uploadPreviewModal = '';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', '图片预览');
  modal.innerHTML = `<button type="button" class="gs-upload-preview-modal__backdrop" data-upload-preview-close aria-label="关闭图片预览"></button><div class="gs-upload-preview-modal__panel"><button type="button" class="gs-button gs-button--icon gs-button--text gs-upload-preview-modal__close" data-upload-preview-close aria-label="关闭图片预览">${gsIcon('close')}</button><img class="gs-upload-preview-modal__image" src="${escapeHtml(source.src)}" alt="${escapeHtml(source.alt || '上传图片预览')}" /></div>`;
  app.append(modal);
  modal.querySelector('.gs-upload-preview-modal__close')?.focus();
}
function uploadLiveMessage(root, message) { const live = root?.querySelector('[data-upload-live],[data-upload-list-live]'); if (live) live.textContent = message; }
function getUploadMaxCount(panel) {
  const value = Number(panel?.dataset.uploadMaxCount);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 5;
}
function syncUploadListPanel(panel) {
  if (!panel) return;
  const body = panel.querySelector('[data-upload-list-body]');
  if (!body) return;
  const hasFiles = [...body.querySelectorAll('tr')].some(row => !row.querySelector('.upload-dropzone'));
  panel.classList.toggle('has-upload-files', hasFiles);
  if (!hasFiles && !body.querySelector('.upload-dropzone')) body.innerHTML = '<tr><td colspan="4"><div class="upload-dropzone"><span>点击上方“选择文件”或将文件拖拽到此区域</span></div></td></tr>';
  const submit = panel.querySelector('[data-upload-submit]');
  if (!submit) return;
  submit.disabled = !hasFiles;
  submit.classList.toggle('is-disabled', !hasFiles);
  if (hasFiles) { submit.removeAttribute('disabled'); submit.removeAttribute('aria-disabled'); }
  else { submit.setAttribute('disabled', ''); submit.setAttribute('aria-disabled', 'true'); }
}
function resetUploadImage(image) {
  if (!image) return;
  image.classList.remove('is-complete', 'is-preview', 'is-uploading');
  image.classList.add('is-empty');
  image.innerHTML = `<span class="gs-upload-image__content">${gsIcon('add', 'gs-upload-add-icon')}<span>点击上传图片</span></span><input class="upload-native-input" type="file" accept="image/*" data-upload-input aria-label="选择图片" />`;
}
function renderInputUploadProgress(field, fileName) {
  if (!field) return;
  const state = field.closest('.upload-input-state') || field.closest('.upload-state');
  const display = field.querySelector('.upload-file-input');
  const button = field.querySelector('.gs-upload-button');
  if (!display || !button || !state) return;
  if (state._uploadInputProgressTimer) clearInterval(state._uploadInputProgressTimer);
  if (state._uploadInputFinishTimer) clearTimeout(state._uploadInputFinishTimer);
  state._uploadInputProgressTimer = null;
  state._uploadInputFinishTimer = null;
  state.classList.remove('is-success', 'is-error');
  state.classList.add('is-uploading');
  field.querySelector('.upload-input-remove')?.remove();
  display.classList.remove('is-placeholder', 'is-disabled');
  let progress = 0;
  const renderProgress = () => {
    display.innerHTML = `${uploadFileNameMarkup(fileName)}<span class="upload-file-input__status"><i class="gs-upload-spinner" aria-hidden="true"></i>${progress}%</span>`;
  };
  const finish = (result = 'success') => {
    state._uploadInputProgressTimer = null;
    state._uploadInputFinishTimer = null;
    state.classList.remove('is-uploading');
    state.classList.add(`is-${result}`);
    const statusIcon = result === 'success' ? gsIcon('uploadSuccess') : gsIcon('closeCircleFilled');
    display.innerHTML = `${uploadFileNameMarkup(fileName)}<span class="upload-file-input__status is-${result}">${statusIcon}</span>`;
    button.innerHTML = `${gsIcon('upload', 'gs-upload-button__icon')}重新上传`;
    button.insertAdjacentHTML('afterend', '<button type="button" class="gs-button gs-button--text-primary upload-input-remove" data-upload-remove aria-label="删除文件">删除</button>');
  };
  renderProgress();
  state._uploadInputProgressTimer = setInterval(() => {
    progress = Math.min(100, progress + 10);
    renderProgress();
    if (progress >= 100) {
      clearInterval(state._uploadInputProgressTimer);
      state._uploadInputProgressTimer = null;
      state._uploadInputFinishTimer = setTimeout(() => finish('success'), 180);
    }
  }, 100);
}
function resetInputUploadState(state) {
  if (!state) return;
  if (state._uploadInputProgressTimer) clearInterval(state._uploadInputProgressTimer);
  if (state._uploadInputFinishTimer) clearTimeout(state._uploadInputFinishTimer);
  state._uploadInputProgressTimer = null;
  state._uploadInputFinishTimer = null;
  const field = state.querySelector('.upload-file-field');
  const display = field?.querySelector('.upload-file-input');
  const button = field?.querySelector('.gs-upload-button');
  if (display) { display.textContent = '还未选择文件'; display.classList.add('is-placeholder'); }
  if (button) button.innerHTML = `${gsIcon('upload', 'gs-upload-button__icon')}上传文件`;
  field?.querySelector('.upload-input-remove')?.remove();
  state.classList.remove('is-uploading', 'is-success', 'is-error');
}
function resetButtonUploadState(state) {
  if (!state) return;
  if (state._uploadProgressTimer) clearInterval(state._uploadProgressTimer);
  if (state._uploadProgressFinishTimer) clearTimeout(state._uploadProgressFinishTimer);
  state._uploadProgressTimer = null;
  state._uploadProgressFinishTimer = null;
  const field = state.querySelector('.upload-file-field');
  const display = field?.querySelector('.upload-file-input');
  const button = field?.querySelector('.gs-upload-button');
  const fileState = state.querySelector('.upload-file-state');
  if (display) { display.textContent = '还未选择文件'; display.classList.add('is-placeholder'); }
  if (button) button.innerHTML = `${gsIcon('upload', 'gs-upload-button__icon')}上传文件`;
  fileState?.querySelectorAll('.upload-file-state__row').forEach(row => row.remove());
  if (!state.querySelector(':scope > .upload-helper') && state.dataset.uploadHelper) {
    state.insertAdjacentHTML('beforeend', `<p class="upload-helper">${escapeHtml(state.dataset.uploadHelper)}</p>`);
  }
  const input = field?.querySelector('[data-upload-input]');
  if (input) input.value = '';
  state.classList.remove('is-uploading', 'is-success', 'is-error');
}
function handleUploadClick(event) {
  const app = document.querySelector('#app');
  initUploadListDemos(app);
  const target = event.target instanceof Element ? event.target : null;
  if (!target || !app.contains(target)) return false;
  const previewClose = target.closest('[data-upload-preview-close]');
  if (previewClose) { closeUploadPreview(); return true; }
  const trigger = target.closest('[data-upload-trigger]');
  if (trigger) {
    const panel = trigger.closest('.upload-list-panel,.upload-file-state,.upload-interactive-card');
    const input = panel?.querySelector('[data-upload-list-input],[data-upload-input]') || trigger.parentElement?.querySelector('[data-upload-input]');
    if (input instanceof HTMLInputElement && !trigger.disabled) input.click();
    return true;
  }
  const image = target.closest('[data-upload-image]');
  if (image && image.classList.contains('is-empty') && !image.classList.contains('is-disabled') && !target.closest('[data-upload-delete],[data-upload-preview]') && !(target instanceof HTMLInputElement)) {
    image.querySelector('[data-upload-input]')?.click();
    return true;
  }
  const deleteImage = target.closest('[data-upload-delete]');
  if (deleteImage) { resetUploadImage(deleteImage.closest('[data-upload-image]')); uploadLiveMessage(deleteImage.closest('[data-upload-demo]'), '已删除图片'); return true; }
  const preview = target.closest('[data-upload-preview]');
  if (preview) {
    const image = preview.closest('[data-upload-image]')?.querySelector('.gs-upload-image__preview');
    if (image) openUploadPreview(app, image, preview);
    uploadLiveMessage(preview.closest('[data-upload-demo]'), '已打开图片预览');
    return true;
  }
  const removeRow = target.closest('[data-upload-row-remove],[data-upload-remove]');
  if (removeRow) { event.preventDefault(); const inputState = removeRow.closest('.upload-input-state'); if (inputState) { resetInputUploadState(inputState); uploadLiveMessage(inputState, '已删除文件'); return true; } const buttonState = removeRow.closest('.upload-button-state-reference .upload-state'); if (buttonState) { resetButtonUploadState(buttonState); uploadLiveMessage(buttonState, '已删除文件'); return true; } const panel = removeRow.closest('.upload-list-panel'); removeRow.closest('tr,.upload-file-state__row')?.remove(); syncUploadListPanel(panel); uploadLiveMessage(panel || removeRow.closest('.upload-reference-card'), '已删除文件'); return true; }
  const cancel = target.closest('[data-upload-cancel]');
  if (cancel) { const panel = cancel.closest('.upload-list-panel'); panel?.querySelectorAll('tbody tr').forEach(row => { if (!row.querySelector('.upload-dropzone')) row.remove(); }); syncUploadListPanel(panel); uploadLiveMessage(panel, '已取消上传'); return true; }
  const submit = target.closest('[data-upload-submit]');
  if (submit && !submit.disabled) {
    const panel = submit.closest('.upload-list-panel');
    panel?.querySelectorAll('.upload-table__status').forEach(status => {
      status.outerHTML = uploadStatusMarkup('success');
    });
    submit.disabled = true;
    uploadLiveMessage(panel, '文件已上传完成');
    return true;
  }
  return false;
}
function handleUploadChange(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.matches('[data-upload-input],[data-upload-list-input]')) return;
  const files = [...(input.files || [])];
  if (!files.length) return;
  const image = input.closest('[data-upload-image]');
  if (image && files[0].type.startsWith('image/')) {
    const url = URL.createObjectURL(files[0]);
    image.classList.remove('is-empty', 'is-uploading');
    image.classList.add('is-complete', 'is-preview');
    image.innerHTML = `<img class="gs-upload-image__preview" src="${url}" alt="${escapeHtml(files[0].name)}" /><span class="gs-upload-image__overlay" data-upload-overlay><button type="button" class="gs-button gs-button--icon gs-button--text" data-upload-preview aria-label="预览图片">${gsIcon('browse')}</button><i class="gs-upload-divider" aria-hidden="true"></i><button type="button" class="gs-button gs-button--icon gs-button--text" data-upload-delete aria-label="删除图片">${gsIcon('delete')}</button></span><input class="upload-native-input" type="file" accept="image/*" data-upload-input aria-label="选择图片" />`;
    uploadLiveMessage(image.closest('[data-upload-demo]'), `已选择图片 ${files[0].name}`);
    return;
  }
  const panel = input.closest('.upload-list-panel');
  if (panel && input.matches('[data-upload-list-input]')) {
    const maxCount = getUploadMaxCount(panel);
    let additions = [];
    const body = panel.querySelector('[data-upload-list-body]');
    if (body) {
      const existingNames = new Set([...body.querySelectorAll('tr td:first-child')].map(cell => cell.textContent.trim()));
      const currentCount = body.querySelectorAll('tr').length;
      const available = Math.max(0, maxCount - (currentCount === 1 && body.querySelector('.upload-dropzone') ? 0 : currentCount));
      additions = files.filter(file => !existingNames.has(file.name)).slice(0, available);
      if (additions.length) {
        if (body.querySelector('.upload-dropzone')) body.innerHTML = '';
        body.insertAdjacentHTML('beforeend', additions.map(file => `<tr><td>${uploadFileNameMarkup(file.name)}</td><td>${Math.max(1, Math.round(file.size / 1024))}K</td><td>${uploadStatusMarkup('pending')}</td><td><a class="upload-file-action" href="#" data-upload-row-remove aria-label="删除${escapeHtml(file.name)}">删除</a></td></tr>`).join(''));
      }
    }
    syncUploadListPanel(panel);
    uploadLiveMessage(panel, additions.length < files.length ? `最多上传 ${maxCount} 个文件` : `已选择 ${files.length} 个文件`);
    input.value = '';
    return;
  }
  const field = input.closest('.upload-file-field');
  if (field && input.matches('[data-upload-input]')) {
    const display = field.querySelector('.upload-file-input');
    const buttonState = field.closest('.upload-button-state-reference');
    const state = field.closest('.upload-state');
    if (buttonState && state) {
      if (display) { display.textContent = files[0].name; display.classList.remove('is-placeholder'); }
      const helper = state.querySelector(':scope > .upload-helper');
      if (helper) { state.dataset.uploadHelper = helper.textContent; helper.remove(); }
      state.classList.add('is-uploading');
      startUploadButtonProgress(state, files[0].name);
    } else {
      renderInputUploadProgress(field, files[0].name);
    }
    uploadLiveMessage(field.closest('.upload-state'), `已选择文件 ${files[0].name}`);
  }
}
function startUploadButtonProgress(state, fileName) {
  if (!state) return;
  if (state._uploadProgressTimer) clearInterval(state._uploadProgressTimer);
  if (state._uploadProgressFinishTimer) clearTimeout(state._uploadProgressFinishTimer);
  state._uploadProgressTimer = null;
  state._uploadProgressFinishTimer = null;
  state.classList.remove('is-success');
  const fileState = state.querySelector('.upload-file-state');
  const button = state.querySelector('.gs-upload-button');
  if (!fileState || !button) return;
  let progress = 0;
  const renderProgress = () => {
    fileState.querySelectorAll('.upload-file-state__row').forEach(row => row.remove());
    const row = document.createElement('div');
    row.className = 'upload-file-state__row';
    row.innerHTML = `${uploadFileNameMarkup(fileName)}<span class="upload-file-input__status"><i class="gs-upload-spinner" aria-hidden="true"></i>${progress}%</span>`;
    fileState.append(row);
  };
  const finish = () => {
    state._uploadProgressTimer = null;
    state._uploadProgressFinishTimer = null;
    state.classList.remove('is-uploading');
    state.classList.add('is-success');
    button.innerHTML = `${gsIcon('upload', 'gs-upload-button__icon')}重新上传`;
    fileState.querySelectorAll('.upload-file-state__row').forEach(row => row.remove());
    const row = document.createElement('div');
    row.className = 'upload-file-state__row';
    row.innerHTML = `${uploadFileNameMarkup(fileName)}<button type="button" class="gs-button gs-button--icon gs-button--text upload-file-remove" data-upload-remove aria-label="删除文件">${gsIcon('closeCircleFilled', 'upload-file-remove__icon')}</button>`;
    fileState.append(row);
  };
  renderProgress();
  state._uploadProgressTimer = setInterval(() => {
    progress = Math.min(100, progress + 10);
    renderProgress();
    if (progress >= 100) {
      clearInterval(state._uploadProgressTimer);
      state._uploadProgressTimer = null;
      state._uploadProgressFinishTimer = setTimeout(finish, 180);
    }
  }, 100);
}
function handleUploadKeydown(event) {
  if (event.key === 'Escape' && document.querySelector('[data-upload-preview-modal]')) { event.preventDefault(); closeUploadPreview(); return; }
  const image = event.target.closest?.('[data-upload-image]');
  if (image && image.classList.contains('is-empty') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); image.click(); }
}
function initUploadListDemos(app) {
  app.querySelectorAll('#上传列表 .upload-list-panel.upload-single-example').forEach(panel => {
    const trigger = panel.querySelector('.upload-list-toolbar button');
    if (!trigger || panel.querySelector('[data-upload-list-input]')) return;
    trigger.setAttribute('data-upload-trigger', '');
    const input = document.createElement('input');
    input.className = 'upload-native-input';
    input.type = 'file';
    input.multiple = getUploadMaxCount(panel) > 1;
    input.accept = '*/*';
    input.setAttribute('data-upload-list-input', '');
    input.setAttribute('aria-label', '选择多个文件');
    panel.querySelector('tbody')?.setAttribute('data-upload-list-body', '');
    panel.querySelector('.upload-list-actions button:first-child')?.setAttribute('data-upload-cancel', '');
    panel.querySelector('.upload-list-actions button:last-child')?.setAttribute('data-upload-submit', '');
    syncUploadListPanel(panel);
    panel.append(input);
  });
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
function uploadPictureState({ state = 'empty', label, helper = '提示内容', interactive = false, disabled = false, showLabel = true } = {}) {
  const isComplete = state === 'complete' || state === 'preview';
  const stateLabel = label || ({ empty: '未上传', hover: '未上传悬停', uploading: '上传中', complete: '上传完成', preview: '上传悬停' }[state] || '图片上传');
  const classes = ['gs-upload-image', `is-${state}`];
  if (disabled) classes.push('is-disabled');
  const input = interactive ? '<input class="upload-native-input" type="file" accept="image/*" data-upload-input aria-label="选择图片" />' : '';
  const actions = interactive
    ? `<span class="gs-upload-image__overlay" data-upload-overlay><button type="button" class="gs-button gs-button--icon gs-button--text" data-upload-preview aria-label="预览图片">${gsIcon('browse')}</button><i class="gs-upload-divider" aria-hidden="true"></i><button type="button" class="gs-button gs-button--icon gs-button--text" data-upload-delete aria-label="删除图片">${gsIcon('delete')}</button></span>`
    : `<span class="gs-upload-image__overlay" data-upload-overlay aria-hidden="true"><span>${gsIcon('browse')}</span><i class="gs-upload-divider"></i><span>${gsIcon('delete')}</span></span>`;
  const content = isComplete
    ? `<img class="gs-upload-image__preview" src="${uploadSampleImage}" alt="已上传的图片示例" />${actions}${input}`
    : state === 'uploading'
      ? `<span class="gs-upload-image__content"><i class="gs-upload-spinner" aria-hidden="true"></i><span>上传中 40%</span></span>${input}`
      : `<span class="gs-upload-image__content">${gsIcon('add', 'gs-upload-add-icon')}<span>点击上传图片</span></span>${input}`;
  return `<div class="upload-state">${showLabel ? `<span class="upload-state__label">${stateLabel}</span>` : ''}<div class="${classes.join(' ')}"${interactive ? ' data-upload-image role="button" tabindex="0"' : ''}${disabled ? ' aria-disabled="true"' : ''}>${content}</div><p class="upload-helper${helper.includes('错误') ? ' is-error' : ''}">${helper}</p></div>`;
}

function uploadButtonState({ state = 'default', label, helper = '提示内容', interactive = false, disabled = false, showLabel = true, showFileRow = true, fileCount = 1 } = {}) {
  const isSuccess = state === 'success';
  const isError = state === 'error';
  const isUploading = state === 'uploading';
  const stateLabel = label || ({ default: '默认', uploading: '上传中', error: '上传异常', success: '上传成功' }[state] || '上传文件');
  const actionLabel = isError || isSuccess ? '重新上传' : '上传文件';
  const removeControl = interactive
    ? `<button type="button" class="gs-button gs-button--icon gs-button--text upload-file-remove" data-upload-remove aria-label="删除文件">${gsIcon('closeCircleFilled', 'upload-file-remove__icon')}</button>`
    : `<span class="gs-button gs-button--icon gs-button--text upload-file-remove" aria-hidden="true">${gsIcon('closeCircleFilled', 'upload-file-remove__icon')}</span>`;
  const labelNode = showLabel ? `<span class="upload-state__label">${stateLabel}</span>` : '';
  const fileRow = isUploading
    ? '<div class="upload-file-state__row"><span class="upload-helper">文件名.jpg</span><span class="upload-file-input__status"><i class="gs-upload-spinner" aria-hidden="true"></i>40%</span></div>'
    : isSuccess && showFileRow
      ? Array.from({ length: Math.max(1, fileCount) }, () => `<div class="upload-file-state__row"><span class="upload-helper">文件名.jpg</span>${removeControl}</div>`).join('')
      : isError && showFileRow ? `<div class="upload-file-state__row"><span class="upload-helper">文件名.jpg</span>${removeControl}</div>` : '';
  const input = interactive ? '<input class="upload-native-input" type="file" data-upload-input aria-label="选择文件" />' : '';
  const trigger = interactive ? ' data-upload-trigger' : '';
  return `<div class="upload-state">${labelNode}<div class="upload-file-state"><div class="upload-file-field"><span class="upload-file-input${state === 'default' || disabled ? ' is-placeholder' : ''}${disabled ? ' is-disabled' : ''}">${state === 'default' || disabled ? '还未选择文件' : '文件名.jpg'}${isUploading ? '<span class="upload-file-input__status"><i class="gs-upload-spinner" aria-hidden="true"></i>40%</span>' : ''}${isSuccess ? '<span class="upload-file-input__status is-success">●</span>' : ''}${isError ? '<span class="upload-file-input__status is-error">●</span>' : ''}</span><button type="button" class="gs-button gs-button--secondary gs-upload-button"${trigger}${disabled ? ' disabled' : ''}>${gsIcon('upload', 'gs-upload-button__icon')}${actionLabel}</button>${input}</div>${fileRow}</div>${helper ? `<p class="upload-helper${isError ? ' is-error' : ''}">${isError ? '错误提示语，文字过多时宽度折行' : helper}</p>` : ''}</div>`;
}

function uploadInputState({ state = 'default', label, helper = '提示内容', interactive = false, disabled = false, showLabel = true } = {}) {
  const isUploading = state === 'uploading';
  const isSuccess = state === 'success';
  const isError = state === 'error';
  const stateLabel = label || ({ default: '未上传默认', uploading: '上传中', disabled: '禁用', success: '上传成功', error: '上传失败' }[state] || '输入上传');
  const value = state === 'default' || state === 'disabled' ? '还未选择文件' : '文件名.jpg';
  const input = interactive ? '<input class="upload-native-input" type="file" data-upload-input aria-label="选择文件" />' : '';
  const status = isUploading ? '<span class="upload-file-input__status"><i class="gs-upload-spinner" aria-hidden="true"></i>40%</span>' : isSuccess ? `<span class="upload-file-input__status is-success">${gsIcon('uploadSuccess')}</span>` : isError ? `<span class="upload-file-input__status is-error">${gsIcon('closeCircleFilled')}</span>` : '';
  const trigger = interactive ? ' data-upload-trigger' : '';
  const removeAction = isSuccess || isError ? '<button type="button" class="gs-button gs-button--text-primary upload-input-remove" aria-hidden="true" tabindex="-1">删除</button>' : '';
  return `<div class="upload-state upload-input-state is-${state}">${showLabel ? `<span class="upload-state__label">${stateLabel}</span>` : ''}<div class="upload-file-field"><span class="upload-file-input${value === '还未选择文件' ? ' is-placeholder' : ''}${disabled ? ' is-disabled' : ''}">${value}${status}</span><button type="button" class="gs-button gs-button--secondary gs-upload-button"${trigger}${disabled ? ' disabled' : ''}>${gsIcon('upload', 'gs-upload-button__icon')}${isSuccess || isError ? '重新上传' : '上传文件'}</button>${removeAction}${input}</div><p class="upload-helper${isError ? ' is-error' : ''}">${isError ? '错误提示语，文字过多时宽度折行' : helper}</p></div>`;
}

function uploadStatusMarkup(state = 'pending') {
  const metadata = {
    pending: { icon: 'upload-pending.svg', label: '待上传' },
    success: { icon: 'upload-success.svg', label: '已上传' },
    error: { icon: 'upload-error.svg', label: '异常/错误' },
  }[state] || { icon: 'upload-pending.svg', label: '待上传' };
  return `<span class="upload-table__status upload-table__status--${state}"><img src="assets/icons/${metadata.icon}" alt="" aria-hidden="true">${metadata.label}</span>`;
}

function uploadTableRows() {
  return ['文件名.txt', '文件名.txt', '文件名.txt', '文件名.txt', '文件名.txt'].map((name, index) => `<tr><td>${name}</td><td>40K</td><td>${uploadStatusMarkup('pending')}</td><td><a class="upload-file-action" href="#" data-upload-row-remove aria-label="删除${name}第${index + 1}项">删除</a></td></tr>`).join('');
}

function uploadBody() {
  return `<section id="图片上传"><h2>图片上传</h2><p>适合头像、封面和地图缩略图等图片场景。主示例支持选择图片、预览和删除；旁边保留一个禁用示例。</p><div class="demo-card upload-interactive-card" data-upload-demo><div class="upload-reference-grid"><div class="upload-reference-card"><h3>交互示例</h3>${uploadPictureState({ state: 'complete', interactive: true, helper: '支持 JPG、PNG，单张不超过 10MB' })}</div><div class="upload-reference-card"><h3>禁用示例</h3>${uploadPictureState({ state: 'empty', disabled: true, helper: '当前不可上传' })}</div></div><span class="upload-a11y-status" data-upload-live role="status" aria-live="polite"></span></div><div class="upload-reference-grid upload-static-reference"><div class="upload-reference-card"><h3>状态参考</h3><div class="upload-state-list">${uploadPictureState({ state: 'empty' })}${uploadPictureState({ state: 'hover' })}${uploadPictureState({ state: 'uploading' })}</div></div><div class="upload-reference-card"><h3>完成状态</h3><div class="upload-state-list">${uploadPictureState({ state: 'complete' })}${uploadPictureState({ state: 'preview' })}</div></div></div></section><section id="按钮上传"><h2>按钮上传</h2><p>用于文件选择和轻量上传操作。上传状态应在按钮附近呈现，异常时提供明确的重新上传入口。</p><div class="demo-card upload-reference-grid"><div class="upload-reference-card"><h3>单文件</h3><div class="upload-state-list">${uploadButtonState({ state: 'default', helper: '支持常见文件格式' })}${uploadButtonState({ state: 'uploading' })}</div></div><div class="upload-reference-card"><h3>结果状态</h3><div class="upload-state-list">${uploadButtonState({ state: 'error', helper: '错误提示语，文字过多时宽度折行' })}${uploadButtonState({ state: 'success' })}</div></div><div class="upload-reference-card"><h3>禁用</h3>${uploadButtonState({ state: 'default', disabled: true, helper: '提示内容' })}</div></div></section><section id="输入上传"><h2>输入上传</h2><p>将当前文件名作为输入框内容展示，适合表单上下文；状态信息位于输入框内部右侧。</p><div class="demo-card upload-reference-grid"><div class="upload-reference-card"><h3>默认与上传中</h3><div class="upload-state-list">${uploadInputState({ state: 'default' })}${uploadInputState({ state: 'uploading' })}</div></div><div class="upload-reference-card"><h3>成功与异常</h3><div class="upload-state-list">${uploadInputState({ state: 'success' })}${uploadInputState({ state: 'error', helper: '错误提示语，文字过多时宽度折行' })}</div></div><div class="upload-reference-card"><h3>禁用</h3>${uploadInputState({ state: 'disabled', disabled: true })}</div></div></section><section id="上传列表"><h2>上传列表</h2><p>批量上传使用表格表达文件名、大小、状态和操作，支持拖拽或点击选择文件。</p><div class="upload-list-layout"><div class="demo-card upload-list-panel"><div class="upload-list-toolbar"><button type="button" class="gs-button gs-button--secondary">选择文件</button><span class="upload-helper">支持批量上传文件，文件格式不限，最多只能上传 5 份文件</span></div><table class="upload-table" aria-label="空的上传列表"><thead><tr><th>文件名</th><th>大小</th><th>状态</th><th>操作</th></tr></thead><tbody><tr><td colspan="4"><div class="upload-dropzone"><span>点击上方“选择文件”或将文件拖拽到此区域</span></div></td></tr></tbody></table><div class="upload-list-actions"><button type="button" class="gs-button gs-button--secondary">取消上传</button><button type="button" class="gs-button" disabled>点击上传</button></div></div><div class="demo-card upload-list-panel"><div class="upload-list-toolbar"><button type="button" class="gs-button gs-button--secondary">选择文件</button><span class="upload-helper">支持批量上传文件，文件格式不限，最多只能上传 5 份文件</span></div><table class="upload-table" aria-label="待上传文件列表"><thead><tr><th>文件名</th><th>大小</th><th>状态</th><th>操作</th></tr></thead><tbody>${uploadTableRows().replaceAll(' data-upload-row-remove','')}</tbody></table><div class="upload-list-actions"><button type="button" class="gs-button gs-button--secondary">取消上传</button><button type="button" class="gs-button">点击上传</button></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>按业务场景选择图片、按钮、输入框或列表式上传，不在一个控件中混合多种入口。</li><li>上传中阻止重复提交；失败时保留文件名并提供“重新上传”，成功时提供预览或删除。</li><li>提示语说明文件类型、大小和数量限制；限制校验应在选择后立即反馈。</li><li>批量上传使用表格保持列对齐，状态同时使用文字和语义色表达。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>图片选择区域提供按钮语义、可见焦点和键盘触发能力。</li><li>查看、删除、重新上传和取消上传均使用真实按钮或链接并提供可理解名称。</li><li>状态变化写入 <code>aria-live="polite"</code>，不只依赖颜色或动画。</li></ul></section><section id="API"><h2>API</h2><div class="api-table upload-api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>picture | button | input | list</span><span>上传外观，默认 button</span></div><div><code>fileList</code><span>UploadFile[]</span><span>受控文件列表</span></div><div><code>accept</code><span>string</span><span>原生文件类型筛选</span></div><div><code>multiple</code><span>boolean</span><span>是否允许选择多个文件</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>maxCount</code><span>number</span><span>最大文件数量</span></div><div><code>onChange</code><span>(info) =&gt; void</span><span>选择、进度或状态变化时触发</span></div><div><code>onPreview</code><span>(file) =&gt; void</span><span>点击图片预览时触发</span></div><div><code>onRemove</code><span>(file) =&gt; boolean | Promise&lt;boolean&gt;</span><span>删除前回调</span></div></div></section>`;
}

function uploadBodyCompact({ maxCount = 5 } = {}) {
  const safeMaxCount = Number.isFinite(Number(maxCount)) && Number(maxCount) > 0 ? Math.floor(Number(maxCount)) : 5;
  const picture = uploadPictureState({ state: 'empty', interactive: true, showLabel: false, helper: '额外提示语，文字过多时宽度折行' });
  const pictureDisabled = uploadPictureState({ state: 'empty', disabled: true, showLabel: false, helper: '当前不可上传' });
  const buttonStates = uploadButtonState({ state: 'default', helper: '额外提示语，文字过多时宽度折行', interactive: true, showLabel: false });
  const inputExample = uploadInputState({ state: 'default', interactive: true, showLabel: false });
  const emptyList = '<tr><td colspan="4"><div class="upload-dropzone"><span>点击上方“选择文件”或将文件拖拽到此区域</span></div></td></tr>';
  return `<section id="图片上传"><h2>图片上传</h2><p>适合头像、封面和地图缩略图等图片场景。这里仅展示一个完整交互示例，状态会在操作过程中反馈。</p><div class="demo-card upload-interactive-card" data-upload-demo><div class="upload-reference-grid"><div class="upload-reference-card"><h3>示例</h3>${picture}</div><div class="upload-reference-card"><h3>禁用示例</h3>${pictureDisabled}</div></div><span class="upload-a11y-status" data-upload-live role="status" aria-live="polite"></span></div></section><section id="按钮上传"><h2>按钮上传</h2><p>适合单个文件或轻量上传操作；状态信息和操作入口保持垂直排列。</p><div class="upload-button-state-reference">${buttonStates}</div></section><section id="输入上传"><h2>输入上传</h2><p>适合表单上下文，将当前文件名作为输入框内容展示；状态由真实业务反馈驱动。</p><div class="demo-card upload-single-example"><div class="upload-reference-card"><h3>示例</h3>${inputExample}</div></div></section><section id="上传列表"><h2>上传列表</h2><p>适合批量文件上传；默认展示空拖拽区，使用一张表格表达文件名、大小、状态和操作。</p><div class="demo-card upload-list-panel upload-single-example" data-upload-max-count="${safeMaxCount}"><div class="upload-list-toolbar"><button type="button" class="gs-button gs-button--secondary">选择文件</button><span class="upload-helper">支持批量上传文件，文件格式不限，最多只能上传 ${safeMaxCount} 份文件</span></div><table class="upload-table" aria-label="上传文件列表"><thead><tr><th>文件名</th><th>大小</th><th>状态</th><th>操作</th></tr></thead><tbody>${emptyList}</tbody></table><div class="upload-list-actions"><button type="button" class="gs-button gs-button--secondary">取消上传</button><button type="button" class="gs-button" disabled>点击上传</button></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>按业务场景选择图片、按钮、输入框或列表式上传，每种类型只提供一个主要示例。</li><li>上传中阻止重复提交；失败时保留文件名并提供“重新上传”，成功时提供预览或删除。</li><li>提示语说明文件类型、大小和数量限制；限制校验应在选择后立即反馈。</li><li>批量上传使用表格保持列对齐，状态同时使用文字和语义色表达。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>图片选择区域提供按钮语义、可见焦点和键盘触发能力。</li><li>查看、删除、重新上传和取消上传均使用真实按钮或链接并提供可理解名称。</li><li>状态变化写入 <code>aria-live="polite"</code>，不只依赖颜色或动画。</li></ul></section><section id="API"><h2>API</h2><div class="api-table upload-api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>picture | button | input | list</span><span>上传外观，默认 button</span></div><div><code>fileList</code><span>UploadFile[]</span><span>受控文件列表</span></div><div><code>accept</code><span>string</span><span>原生文件类型筛选</span></div><div><code>multiple</code><span>boolean</span><span>是否允许多个文件</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>maxCount</code><span>number</span><span>最大文件数量</span></div><div><code>onChange</code><span>(info) =&gt; void</span><span>选择、进度或状态变化时触发</span></div><div><code>onPreview</code><span>(file) =&gt; void</span><span>点击图片预览时触发</span></div><div><code>onRemove</code><span>(file) =&gt; boolean | Promise&lt;boolean&gt;</span><span>删除前回调</span></div></div></section>`;
}

function tabsItem(label, index, { selected = false, closable = false } = {}) {
  const close = closable ? button(gsIcon('close', 'gs-tabs__close-icon'), 'gs-button--icon gs-button--text gs-tabs__close', `data-tabs-close aria-label="关闭${escapeHtml(label)}"`) : '';
  return `<div class="gs-tabs__tab${selected ? ' is-selected' : ''}" data-tabs-item data-tabs-index="${index}"><button type="button" class="gs-tabs__trigger" data-tabs-trigger role="tab" aria-selected="${selected}" tabindex="${selected ? '0' : '-1'}"><span>${escapeHtml(label)}</span></button>${close}</div>`;
}
function tabsDemo({ id, variant = 'line', closable = false, labels = ['默认选项', '悬停选项', '选中选项', '默认选项', '默认选项'] } = {}) {
  const selectedIndex = 2;
  const items = labels.map((label, index) => tabsItem(label, index, { selected: index === selectedIndex, closable })).join('');
  const add = closable ? button(gsIcon('plus', 'gs-tabs__add-icon'), 'gs-button--icon gs-button--text gs-tabs__add', 'data-tabs-add aria-label="新增选项"') : '';
  const isVertical = variant.startsWith('vertical');
  const tabList = closable
    ? `<div class="gs-tabs__scroll" role="tablist" aria-label="可滚动选项卡">${items}</div>${add}`
    : items;
  return `<div class="gs-tabs gs-tabs--${variant}" data-tabs data-tabs-id="${id}" data-tabs-next="${labels.length + 1}"><div class="gs-tabs__bar"${closable ? '' : ` role="tablist" aria-label="${isVertical ? '垂直' : ''}选项卡"`}>${tabList}</div><div class="gs-tabs__panel" data-tabs-panel role="tabpanel">占位内容</div><span class="gs-tabs__live" data-tabs-live aria-live="polite"></span></div>`;
}
function tabsBody() {
  const verticalLabels = ['默认选项', '默认选项', '选中选项', '默认选项', '默认选项', '默认选项'];
  return `<section id="默认选项卡"><h2>默认选项卡</h2><p>默认主题以主色底部 3px 指示当前项，选项高度 48px。</p><div class="demo-card gs-tabs-demo">${tabsDemo({ id: 'tabs-line' })}</div></section><section id="卡片主题选项卡"><h2>卡片主题选项卡</h2><p>卡片主题使用中性色8背景和中性色7分隔线，当前项切换为白色背景与主色文字。</p><div class="demo-card gs-tabs-demo">${tabsDemo({ id: 'tabs-card', variant: 'card' })}</div></section><section id="增减选项卡"><h2>增减选项卡</h2><p>支持关闭已有选项和新增选项；关闭后自动选中相邻项。</p><div class="demo-card gs-tabs-demo">${tabsDemo({ id: 'tabs-editable', variant: 'editable', closable: true, labels: ['默认选项', '悬停选项', '选中选项', '默认选项'] })}</div></section><section id="垂直选项卡"><h2>垂直选项卡</h2><p>用于左侧导航与右侧内容区域联动的场景，宽度固定为 160px，提供默认线型和卡片型两种样式。</p><h3>默认线型</h3><div class="demo-card gs-tabs-demo">${tabsDemo({ id: 'tabs-vertical-line', variant: 'vertical-line', labels: verticalLabels })}</div><h3>卡片型</h3><div class="demo-card gs-tabs-demo">${tabsDemo({ id: 'tabs-vertical-card', variant: 'vertical-card', labels: verticalLabels })}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>仅用于同层级、关联内容的切换；选项过多时使用下拉、分页或侧边栏。</li><li>同一组选项默认保留一个选中项，切换后更新对应内容区域。</li><li>可关闭选项必须保留至少一个；新增入口固定在选项列末尾。</li><li>垂直选项卡适合稳定的模块导航，不用于高频临时筛选。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>选项使用 <code>role="tab"</code> 和 <code>aria-selected</code> 表达当前状态。</li><li>关闭和新增入口使用独立按钮与可理解的辅助名称。</li><li>Tab 键进入当前选项，Enter 或 Space 可完成选择。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>variant</code><span>line | card | editable | vertical-line | vertical-card</span><span>选项卡视觉类型</span></div><div><code>items</code><span>TabItem[]</span><span>选项数据</span></div><div><code>activeKey</code><span>string</span><span>当前选中项</span></div><div><code>closable</code><span>boolean</span><span>是否显示关闭入口</span></div><div><code>addable</code><span>boolean</span><span>是否显示新增入口</span></div><div><code>onChange</code><span>(key) =&gt; void</span><span>切换选项回调</span></div><div><code>onEdit</code><span>(key, action) =&gt; void</span><span>新增或关闭选项回调</span></div></div></section>`;
}
function sideNavAction([icon, shortLabel, label], { labelled = true, disabled = false } = {}) {
  return button(
    `${gsIcon(icon, 'gs-side-nav__icon')}${labelled ? `<span class="gs-side-nav__label">${shortLabel}</span>` : ''}`,
    'gs-button--icon gs-button--text gs-side-nav__action',
    `data-side-nav-action data-side-nav-label="${label}" aria-label="${label}" aria-pressed="false"${disabled ? ' disabled' : ''}`,
  );
}
function sideNavDemo({ labelled = true, rounded = false, disabled = false } = {}) {
  return `<div class="gs-side-nav${labelled ? ' gs-side-nav--labelled' : ''}${rounded ? ' gs-side-nav--rounded' : ''}" data-side-nav role="toolbar" aria-label="侧边操作条">${sideNavItems.map((item, index) => sideNavAction(item, { labelled, disabled: disabled && index === 2 })).join('')}<span class="gs-side-nav__live" aria-live="polite"></span></div>`;
}
function sideNavBody() {
  return `<section id="侧边栏"><h2>侧边栏</h2><p>提供带标题与无标题、常规圆角与胶囊圆角四种规格；带标题适合入口名称需要明确说明的场景，无标题适合图标语义清晰且空间受限的场景。</p><div class="demo-card gs-side-nav-demo"><div class="gs-side-nav-demo__canvas"><div class="gs-side-nav-demo__group"><div class="gs-side-nav-demo__variant"><h3>带标题</h3><div class="gs-side-nav-demo__variants">${sideNavDemo({ labelled: true })}${sideNavDemo({ labelled: true, rounded: true })}</div></div><div class="gs-side-nav-demo__variant"><h3>无标题</h3><div class="gs-side-nav-demo__variants">${sideNavDemo({ labelled: false })}${sideNavDemo({ labelled: false, rounded: true })}</div></div></div></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>仅承载当前页面或画布的高频辅助操作，不替代主导航。</li><li>带标题样式用于图标语义不够明确的场景；无标题样式必须提供可理解的悬停提示与辅助名称。</li><li>同一侧边栏中的操作数量建议不超过 6 个，超过时应归类或使用更多菜单。</li><li>禁用项不可响应鼠标、键盘或状态反馈。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>操作条使用 <code>role="toolbar"</code>，每个入口都是可聚焦的 Button 组件。</li><li>无标题入口通过 <code>aria-label</code> 和悬停提示提供操作名称。</li><li>选中项通过 <code>aria-pressed</code> 传达当前状态。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>items</code><span>SideNavItem[]</span><span>操作项数据</span></div><div><code>showLabel</code><span>boolean</span><span>是否显示图标下方标题</span></div><div><code>rounded</code><span>boolean</span><span>是否使用胶囊圆角容器</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用指定操作项</span></div><div><code>onChange</code><span>(item) =&gt; void</span><span>点击操作项时触发</span></div></div></section>`;
}
function stepsMarker(status, index, interactive = false) {
  const icon = status === 'completed' ? gsIcon('check', 'gs-steps__icon') : status === 'error' ? gsIcon('close', 'gs-steps__icon') : `<span class="gs-steps__number">${index}</span>`;
  const classes = `gs-steps__marker gs-steps__marker--${status}`;
  if (!interactive) return `<span class="${classes}" aria-hidden="true">${icon}</span>`;
  return button(icon, `gs-button--icon gs-button--text ${classes}`, `data-steps-item data-steps-index="${index}" aria-label="切换至第 ${index} 步"`);
}
function stepsItem(status, index, label, { interactive = false, last = false } = {}) {
  return `<li class="gs-steps__item gs-steps__item--${status}" data-steps-state="${status}">${stepsMarker(status, index, interactive)}<div class="gs-steps__content"><div class="gs-steps__title-row"><span class="gs-steps__title">${label}</span>${last ? '' : '<span class="gs-steps__connector" aria-hidden="true"></span>'}</div><span class="gs-steps__description">这里是提示文字</span></div></li>`;
}
function stepsVerticalItem(status, index, label, { last = false } = {}) {
  return `<li class="gs-steps__vertical-item gs-steps__vertical-item--${status}"><div class="gs-steps__vertical-marker">${stepsMarker(status, index)}${last ? '' : '<span class="gs-steps__vertical-connector" aria-hidden="true"></span>'}</div><div class="gs-steps__vertical-content"><span class="gs-steps__title">${label}</span><span class="gs-steps__description">这里是提示文字</span></div></li>`;
}
function stepsBody() {
  const steps = [['completed', 1, '已完成步骤'], ['current', 2, '进行中的步骤'], ['error', 3, '错误的步骤'], ['pending', 4, '未进行的步骤']];
  const horizontal = steps.map(([status, index, label], itemIndex) => stepsItem(status, index, label, { interactive: true, last: itemIndex === steps.length - 1 })).join('');
  const vertical = steps.map(([status, index, label], itemIndex) => stepsVerticalItem(status, index, label, { last: itemIndex === steps.length - 1 })).join('');
  return `<section id="步骤条"><h2>步骤条</h2><p>横向用于页面宽度充足的线性流程，纵向用于步骤说明较多或窄屏场景。点击横向步骤可切换当前进行中的节点。</p><div class="demo-card gs-steps-demo"><h3>横向步骤条</h3><ol class="gs-steps gs-steps--horizontal" data-steps aria-label="项目处理步骤">${horizontal}</ol><span class="gs-steps__live" data-steps-live role="status" aria-live="polite"></span><div class="gs-steps-demo__divider"></div><h3>纵向步骤条</h3><ol class="gs-steps gs-steps--vertical" aria-label="项目处理步骤状态参考">${vertical}</ol></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>用于有固定顺序且总阶段数量明确的流程；无序事件记录使用 Timeline。</li><li>同一流程中只保留一个进行中的步骤；错误步骤必须说明异常原因和后续操作。</li><li>标题使用简短动作或阶段名称，提示文字补充当前状态或下一步说明。</li><li>窄屏优先使用纵向排列，保持步骤与说明的阅读顺序。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>步骤使用有序列表保留流程顺序，状态同时由图标、颜色和文字表达。</li><li>可切换的步骤使用真实 Button，当前步骤通过可见标题和状态提示表达。</li><li>连接线仅作装饰，不承载单独的信息。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>items</code><span>StepItem[]</span><span>步骤标题、描述与状态数据</span></div><div><code>direction</code><span>horizontal | vertical</span><span>横向或纵向排列</span></div><div><code>status</code><span>completed | current | error | pending</span><span>步骤状态</span></div><div><code>current</code><span>number</span><span>当前进行中的步骤序号</span></div><div><code>onChange</code><span>(index) =&gt; void</span><span>点击可切换步骤时触发</span></div></div></section>`;
}
function selectTabsItem(tabs, item) {
  if (!tabs || !item) return;
  tabs.querySelectorAll('[data-tabs-item]').forEach(node => {
    const selected = node === item;
    node.classList.toggle('is-selected', selected);
    const trigger = node.querySelector('[data-tabs-trigger]');
    if (trigger) { trigger.setAttribute('aria-selected', String(selected)); trigger.tabIndex = selected ? 0 : -1; }
  });
  const label = item.querySelector('[data-tabs-trigger] span')?.textContent?.trim() || '选项';
  const panel = tabs.querySelector('[data-tabs-panel]');
  const live = tabs.querySelector('[data-tabs-live]');
  if (panel) panel.textContent = '占位内容';
  item.scrollIntoView?.({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  if (live) live.textContent = `已切换至${label}`;
}
function handleTabsClick(event) {
  const close = event.target.closest?.('[data-tabs-close]');
  const add = event.target.closest?.('[data-tabs-add]');
  const trigger = event.target.closest?.('[data-tabs-trigger]');
  if (close) {
    const tabs = close.closest('[data-tabs]');
    const item = close.closest('[data-tabs-item]');
    const items = [...tabs.querySelectorAll('[data-tabs-item]')];
    if (!tabs || !item || items.length <= 1) return true;
    const wasSelected = item.classList.contains('is-selected');
    const next = items[items.indexOf(item) + 1] || items[items.indexOf(item) - 1];
    item.remove();
    if (wasSelected && next?.isConnected) selectTabsItem(tabs, next);
    tabs.querySelector('[data-tabs-live]').textContent = '已关闭选项';
    return true;
  }
  if (add) {
    const tabs = add.closest('[data-tabs]');
    if (!tabs) return true;
    const index = Number(tabs.dataset.tabsNext || tabs.querySelectorAll('[data-tabs-item]').length + 1);
    const item = document.createRange().createContextualFragment(tabsItem(`新建选项${index}`, index, { closable: true })).firstElementChild;
    const scroll = tabs.querySelector('.gs-tabs__scroll');
    if (scroll) scroll.append(item); else add.before(item);
    tabs.dataset.tabsNext = String(index + 1);
    selectTabsItem(tabs, item);
    tabs.querySelector('[data-tabs-live]').textContent = `已新增新建选项${index}`;
    return true;
  }
  if (trigger) { selectTabsItem(trigger.closest('[data-tabs]'), trigger.closest('[data-tabs-item]')); return true; }
  return false;
}
function handleTabsWheel(event) {
  const scroller = event.target.closest?.('.gs-tabs__scroll');
  if (!scroller || !event.deltaY || event.deltaX) return;
  event.preventDefault();
  scroller.scrollLeft += event.deltaY;
}
document.addEventListener('wheel', handleTabsWheel, { passive: false });
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
  return `<section id="单选框"><h2>单选框</h2><p>从互斥选项中选择一个值，点击后展开候选浮层。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerSingleExample({ id: 'picker-single', value: '请选择' })}</div></div></section><section id="多选框"><h2>多选框</h2><p>从多个选项中选择多个值；已选项以标签展示，可继续打开浮层增删选项。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerMultiExample({ id: 'picker-multi' })}</div></div></section><section id="级联选框"><h2>级联选框</h2><p>按父子层级逐级选择；选择父级后展示对应的下一级选项。</p><div class="demo-card gs-picker-card"><div class="gs-picker-grid">${pickerCascaderExample()}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>选项较少且需要明确选择时使用 Select；互斥选项很少时可直接使用 Radio。</li><li>单选器默认显示占位提示，选择后显示已选内容；多选器保留已选标签并允许继续修改。</li><li>禁用状态不可打开浮层，禁用选项不能被选择。</li><li>级联选框只用于真实的父子层级，选项名称保持同级粒度一致。</li><li>浮层与触发器保持同一层级，选择后保留当前值。</li><li>候选项浮层默认展示 6 项；超过 6 项时可在浮层内滚动浏览，但不显示滚动条。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>触发器使用 button 与 aria-haspopup、aria-expanded、aria-controls。</li><li>候选项使用 role=option 和 aria-selected，禁用项使用原生 disabled。</li><li>多选标签的移除按钮提供独立 accessible name；选择状态不只依赖颜色。</li><li>支持 Enter/Space 打开或切换，Escape 关闭，方向键在候选项之间移动。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>options</code><span>Option[]</span><span>单选或多选候选项</span></div><div><code>mode</code><span>single | multiple</span><span>选择模式，默认 single</span></div><div><code>value</code><span>string | string[]</span><span>当前选中值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用选择器</span></div><div><code>prefix</code><span>node</span><span>可选的前置图标</span></div><div><code>cascader</code><span>boolean</span><span>是否启用级联层级选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>选项变化时触发</span></div></div></section>`;
}
function colorPickerSwatch(color, label, alpha = false) {
  return `<button type="button" class="gs-color-picker__swatch${alpha ? ' gs-color-picker__swatch--alpha' : ''}" style="--gs-swatch-color:${color}" data-color-swatch="${color}" aria-label="选择${label}"></button>`;
}
function colorPickerFormatSelect() {
  return `<div class="gs-select-wrap gs-color-picker__format-select" data-picker="color-format"><button type="button" class="gs-select" data-picker-trigger aria-haspopup="listbox" aria-expanded="false" aria-controls="color-format-popup"><span class="gs-select__value is-selected" data-color-format-label>CSS</span>${selectChevron()}</button><div id="color-format-popup" class="gs-select-popup" data-picker-popup role="listbox" hidden>${pickerOption('CSS', { value: 'css', selected: true })}${pickerOption('HEX', { value: 'hex' })}${pickerOption('RGB', { value: 'rgb' })}</div><select class="gs-color-picker__select" data-color-format aria-hidden="true" tabindex="-1"><option value="css">CSS</option><option value="hex">HEX</option><option value="rgb">RGB</option></select></div>`;
}
function colorPickerBody() {
  const recent = [['#009BFF', '蓝色'], ['#85DBBE', '半透明青色'], ['#00A870', '绿色'], ['#F8B996', '半透明橙色'], ['#DF4ED9', '紫色'], ['#E53574', '粉色']];
  const recentMarkup = recent.map(([color, label], index) => colorPickerSwatch(color, label, index === 1 || index === 3)).join('');
  const commonControls = ({modeTabs = false, gradient = false, recentMarkup = ''} = {}) => `<div class="gs-color-picker__commit-actions"><button type="button" class="gs-color-picker__commit-button gs-color-picker__commit-button--clear" data-color-action="clear" aria-label="清除颜色">×</button><button type="button" class="gs-color-picker__commit-button gs-color-picker__commit-button--confirm" data-color-action="confirm" aria-label="确定颜色">✓</button></div>${modeTabs ? `<div class="gs-color-picker__mode" role="tablist" aria-label="颜色模式"><button type="button" class="gs-color-picker__mode-button${gradient ? '' : ' is-selected'}" role="tab" aria-selected="${gradient ? 'false' : 'true'}" data-color-mode="solid">单色</button><button type="button" class="gs-color-picker__mode-button${gradient ? ' is-selected' : ''}" role="tab" aria-selected="${gradient ? 'true' : 'false'}" data-color-mode="gradient">渐变</button></div>` : ''}<div class="gs-color-picker__gradient-angle"${gradient ? '' : ' hidden'}><input class="gs-color-picker__range gs-color-picker__range--gradient" type="range" min="0" max="360" value="70" data-color-angle aria-label="渐变角度"><input class="gs-color-picker__angle-value" type="number" min="0" max="360" value="70" data-color-angle-text aria-label="渐变角度数值"></div><div class="gs-color-picker__saturation" data-color-saturation role="slider" tabindex="0" aria-label="饱和度和明度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><span class="gs-color-picker__saturation-marker" aria-hidden="true"></span></div><div class="gs-color-picker__controls"><div class="gs-color-picker__slider-stack"><input class="gs-color-picker__range gs-color-picker__range--hue" type="range" min="0" max="360" value="210" data-color-hue aria-label="色相"><input class="gs-color-picker__range gs-color-picker__range--alpha" type="range" min="0" max="1" step="0.01" value="1" data-color-alpha aria-label="透明度"></div><span class="gs-color-picker__preview" data-color-preview aria-hidden="true"></span></div><div class="gs-color-picker__format">${colorPickerFormatSelect()}<input class="gs-color-picker__text" data-color-value type="text" value="rgba(24,144,255,1)" aria-label="颜色值"><input class="gs-color-picker__alpha" data-color-alpha-text type="text" value="100" inputmode="decimal" aria-label="透明度百分比"></div>${recentMarkup ? `<div class="gs-color-picker__section"><span class="gs-color-picker__section-title">最近使用色彩</span><div class="gs-color-picker__swatches">${recentMarkup}</div></div>` : ''}<div class="gs-color-picker__live" data-color-live aria-live="polite"></div>`;
  const panel = ({label, modeTabs = false, gradient = false, withManagement = false} = {}) => `<div class="gs-color-picker-card"><span class="gs-color-picker-card__label">${label}</span><div class="gs-color-picker${gradient ? ' gs-color-picker--gradient' : ''}" data-color-picker data-mode="${gradient ? 'gradient' : 'solid'}" data-hue="210" data-saturation="100" data-lightness="55" data-alpha="1" data-color-angle="70">${commonControls({modeTabs, gradient, recentMarkup: withManagement ? recentMarkup : ''})}</div></div>`;
  return `<section id="常规单色颜色选择器"><h2>常规单色颜色选择器</h2><p>用于选择单一颜色，不包含模式切换、最近使用色或系统预设色管理。</p><div class="demo-card gs-color-picker-demo gs-color-picker-demo--single">${panel({label: '交互示例'})}</div></section><section id="单色渐变切换颜色选择器"><h2>单色 / 渐变切换的颜色选择器</h2><p>用于需要在单色与渐变之间切换的场景；以下展示同一组件的单色态与渐变态。</p><div class="demo-card gs-color-picker-demo gs-color-picker-demo--variants">${panel({label: '单色', modeTabs: true, withManagement: true})}${panel({label: '渐变', modeTabs: true, gradient: true, withManagement: true})}</div></section><section id="使用规则"><h2>使用规则</h2><ul><li>常规单色颜色选择器用于只允许单色值的属性，如纯色填充、边框和文字。</li><li>单色 / 渐变切换的颜色选择器只用于产品明确支持两种输出类型的属性。</li><li>最近使用色属于可选能力，仅在需要复用色板时开启。</li><li>透明度和渐变角度必须与颜色值一起保存，不能只保存视觉预览。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>色板使用 slider 语义并支持 Tab、方向键操作；色相、透明度和渐变角度使用原生 range。</li><li>颜色格式、颜色值、透明度和角度输入均提供可理解的辅助名称。</li><li>颜色不能单独承担业务语义；产品界面应同时提供文字、图标或其他可识别信息。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>组件</b><b>属性</b><b>说明</b></div><div><code>ColorPicker</code><span>value</span><span>单色颜色值，默认 CSS 格式</span></div><div><code>ColorPicker</code><span>alpha</span><span>透明度，范围 0–1</span></div><div><code>ColorPicker</code><span>format</span><span>css | hex | rgb</span></div><div><code>ColorPickerSwitch</code><span>mode</span><span>solid | gradient</span></div><div><code>ColorPickerSwitch</code><span>angle</span><span>渐变角度，范围 0–360</span></div><div><code>ColorPickerSwitch</code><span>recentColors</span><span>可选的最近色列表</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>颜色、透明度、模式或角度变化时触发</span></div></div></section>`;
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
function dtpDatePopup(id, selectedDate = '') { const {year,month}=calendarMonthFromValue(selectedDate); return `<div id="${id}-popup" class="gs-dtp-popover gs-dtp-popover--calendar" data-dtp-popup data-dtp-calendar-year="${year}" data-dtp-calendar-month="${month}" data-dtp-calendar-selected="${escapeHtml(selectedDate)}" role="dialog" aria-label="选择日期" hidden><div class="gs-dtp-calendar__head"><button type="button" class="gs-dtp-nav" data-dtp-nav="prev-year" aria-label="上一年">${dateNavIcon('prevYear')}</button><button type="button" class="gs-dtp-nav" data-dtp-nav="prev" aria-label="上个月">${dateNavIcon('prev')}</button><strong data-dtp-calendar-title>${year}年${month}月</strong><button type="button" class="gs-dtp-nav" data-dtp-nav="next" aria-label="下个月">${dateNavIcon('next')}</button><button type="button" class="gs-dtp-nav" data-dtp-nav="next-year" aria-label="下一年">${dateNavIcon('nextYear')}</button></div><div class="gs-dtp-weekdays">${['日','一','二','三','四','五','六'].map(x=>`<span>${x}</span>`).join('')}</div><div class="gs-dtp-calendar-grid" data-dtp-calendar-grid>${dtpCalendarCells(year,month,selectedDate)}</div><div class="gs-dtp-popover__footer"><button type="button" class="gs-dtp-action gs-dtp-action--quiet" data-dtp-action>取消</button><button type="button" class="gs-dtp-action" data-dtp-action>确定</button></div></div>`; }
function rangeDateOption(date, inMonth, start, end) {
  const value = formatCalendarDate(date);
  const selected = value === start || value === end;
  const between = Boolean(start && end && value > start && value < end);
  const classes = ['gs-dtp-range-option'];
  if (!inMonth) classes.push('is-outside');
  if (selected) classes.push('is-current');
  if (value === start) classes.push('is-range-start');
  if (value === end) classes.push('is-range-end');
  if (between) classes.push('is-range-between');
  return `<button type="button" class="${classes.join(' ')}" data-dtp-range-option data-dtp-range-value="${value}"${inMonth ? '' : ' disabled aria-disabled="true"'}>${date.getDate()}</button>`;
}
function dtpRangeCalendarPanel(year, month, start, end, index) {
  const nav = direction => `<button type="button" class="gs-dtp-nav" data-dtp-range-nav="${direction}" aria-label="${direction.includes('prev') ? '向前' : '向后'}${direction.includes('year') ? '一年' : '一个月'}">${dateNavIcon(direction === 'prev-year' ? 'prevYear' : direction === 'prev' ? 'prev' : direction === 'next-year' ? 'nextYear' : 'next')}</button>`;
  return `<section class="gs-dtp-range-panel" data-dtp-range-panel="${index}"><div class="gs-dtp-range-head">${nav('prev-year')}${nav('prev')}<strong>${year} 年 ${month} 月</strong>${nav('next')}${nav('next-year')}</div><div class="gs-dtp-range-weekdays">${['日','一','二','三','四','五','六'].map(day => `<span>${day}</span>`).join('')}</div><div class="gs-dtp-range-calendar-grid">${calendarCells(year, month, (date, inMonth) => rangeDateOption(date, inMonth, start, end))}</div></section>`;
}
function dtpDateRangePopup(id, startValue = '', endValue = '') {
  const view = calendarMonthFromValue(startValue || endValue);
  const next = new Date(view.year, view.month, 1);
  const nextYear = next.getFullYear();
  const nextMonth = next.getMonth() + 1;
  const hidden = ' hidden';
  return `<div id="${id}-range-popup" class="gs-dtp-range-popover" data-dtp-range-popup data-dtp-range-start="${escapeHtml(startValue)}" data-dtp-range-end="${escapeHtml(endValue)}" data-dtp-range-year="${view.year}" data-dtp-range-month="${view.month}" data-dtp-range-left-year="${view.year}" data-dtp-range-left-month="${view.month}" data-dtp-range-right-year="${nextYear}" data-dtp-range-right-month="${nextMonth}" role="dialog" aria-label="选择日期范围"${hidden}><div class="gs-dtp-range-panels" data-dtp-range-panels>${dtpRangeCalendarPanel(view.year, view.month, startValue, endValue, 0)}${dtpRangeCalendarPanel(nextYear, nextMonth, startValue, endValue, 1)}</div><div class="gs-dtp-popover__footer gs-dtp-range-footer"><span class="gs-dtp-range-footer-actions"><button type="button" class="gs-button gs-button--secondary" data-dtp-range-action="cancel">取消</button><button type="button" class="gs-button" data-dtp-range-action="confirm">确认</button></span></div></div>`;
}
function dtpDateRangeTrigger(id, startValue = '', endValue = '', disabled = false) {
  const start = startValue || '请选择日期';
  const end = endValue || '请选择日期';
  return `<div class="gs-dtp-range-field${disabled ? ' is-disabled' : ''}" data-dtp-range-field data-dtp-range-start="${escapeHtml(startValue)}" data-dtp-range-end="${escapeHtml(endValue)}"><button type="button" class="gs-dtp-range-trigger${disabled ? ' is-disabled' : ''}" data-dtp-range-trigger aria-haspopup="dialog" aria-expanded="false" aria-controls="${id}-range-popup"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-dtp-range-value${startValue ? '' : ' is-placeholder'}" data-dtp-range-value="start">${escapeHtml(start)}</span><span class="gs-dtp-range-separator" aria-hidden="true">—</span><span class="gs-dtp-range-value${endValue ? '' : ' is-placeholder'}" data-dtp-range-value="end">${escapeHtml(end)}</span><span class="gs-dtp-range-icon" aria-hidden="true">${gsIcon('calendar')}</span></button>${dtpDateRangePopup(id, startValue, endValue)}</div>`;
}
function dateRangePickerSection() {
  return `<section id="日期区间联动选择"><h2>日期区间联动选择</h2><p>选择日期范围，左右面板联动展示相邻月份；选择起止日期后高亮范围。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-range-demo">${dtpExample('交互示例',dtpDateRangeTrigger('dtp-date-range-single'))}${dtpExample('禁用示例',dtpDateRangeTrigger('dtp-date-range-disabled-single','2026-07-20','2026-08-29',true))}</div></div></section>`;
}
function yearGroupOptions(start, selected) { return Array.from({length:12},(_,index)=>start+index).map(year=>`<button type="button" class="gs-dtp-option${year===selected?' is-current':''}" data-dtp-option data-dtp-value="${year}">${year}</button>`).join(''); }
function renderYearGroup(popup, start) { if(!popup) return; const groupStart=Number(start)||2024; const selected=Number(popup.dataset.dtpYearSelected); const title=popup.querySelector('[data-dtp-year-title]'); const grid=popup.querySelector('[data-dtp-year-grid]'); if(title) title.textContent=`${groupStart} - ${groupStart+11}`; if(grid) grid.innerHTML=yearGroupOptions(groupStart,Number.isFinite(selected)?selected:2026); popup.dataset.dtpYearStart=String(groupStart); }
function dtpYearPopup(id) { const start=2024; return `<div id="${id}-popup" class="gs-dtp-popover gs-dtp-year-popover" data-dtp-popup data-dtp-year-start="${start}" data-dtp-year-selected="2026" role="dialog" aria-label="选择年份" hidden><div class="gs-dtp-calendar__head"><button type="button" class="gs-dtp-nav" data-dtp-nav="prev" aria-label="上一组年份">${dateNavIcon('prevYear')}</button><strong data-dtp-year-title>${start} - ${start+11}</strong><button type="button" class="gs-dtp-nav" data-dtp-nav="next" aria-label="下一组年份">${dateNavIcon('nextYear')}</button></div><div class="gs-dtp-year-grid" data-dtp-year-grid>${yearGroupOptions(start,2026)}</div><div class="gs-dtp-popover__footer"><button type="button" class="gs-dtp-action gs-dtp-action--quiet" data-dtp-action>取消</button><button type="button" class="gs-dtp-action" data-dtp-action>确定</button></div></div>`; }
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
function standaloneCalendarSelect(kind, value, label, options) {
  const popupId = `calendar-${kind}-popup`;
  return `<div class="gs-select-wrap gs-calendar__select-wrap gs-calendar__select-wrap--${kind}" data-picker="calendar-${kind}"><button type="button" class="gs-select gs-calendar__select" data-picker-trigger aria-haspopup="listbox" aria-expanded="false" aria-controls="${popupId}"><span class="gs-select__value is-selected">${escapeHtml(label)}</span>${selectChevron()}</button><div id="${popupId}" class="gs-select-popup gs-calendar__select-popup" data-picker-popup role="listbox" hidden>${options.map(option => pickerOption(option.label, { value: String(option.value), selected: String(option.value) === String(value) })).join('')}</div></div>`;
}
function calendarYearOptions(year) {
  return Array.from({ length: 11 }, (_, index) => ({ value: year - 5 + index, label: `${year - 5 + index} 年` }));
}
function calendarMonthOptions() {
  return Array.from({ length: 12 }, (_, index) => ({ value: index + 1, label: `${index + 1} 月` }));
}
function standaloneCalendarDayGrid(year, month, selectedDate = '') {
  const firstDay = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const cells = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(year, month - 1, index - firstDay + 1);
    const value = formatCalendarDate(date);
    const inMonth = date.getMonth() === month - 1;
    const events = value === '2022-08-17' ? `<span class="gs-calendar__events" aria-label="当天事件"><span class="gs-calendar__event gs-calendar__event--error"><i></i>错误事件</span><span class="gs-calendar__event gs-calendar__event--warning"><i></i>警告事件如紧急事…</span><span class="gs-calendar__event gs-calendar__event--success"><i></i>正常事件</span></span>` : '';
    return `<button type="button" class="gs-calendar__day${value === selectedDate ? ' is-selected' : ''}${inMonth ? '' : ' is-outside'}" data-calendar-day="${value}"${inMonth ? '' : ' disabled aria-disabled="true"'} aria-label="${value}"><span class="gs-calendar__day-number">${date.getDate()}</span>${events}</button>`;
  }).join('');
  return `<div class="gs-calendar__weekdays" aria-hidden="true">${['一','二','三','四','五','六','七'].map(day => `<span>${day}</span>`).join('')}</div><div class="gs-calendar__grid">${cells}</div>`;
}
function standaloneCalendarYearGrid(year, month) {
  const startYear = year - 3;
  const years = Array.from({ length: 7 }, (_, index) => startYear + index);
  return `<div class="gs-calendar__year-grid" role="grid" aria-label="选择年月">${years.map(optionYear => `<section class="gs-calendar__year-section"><p class="gs-calendar__year-heading">${optionYear}年</p><div class="gs-calendar__year-months">${calendarMonthOptions().map(option => `<button type="button" class="gs-calendar__month-option${optionYear === year && option.value === month ? ' is-selected' : ''}" data-calendar-year-month-option data-calendar-year="${optionYear}" data-calendar-month="${option.value}" aria-pressed="${optionYear === year && option.value === month}">${option.label}</button>`).join('')}</div></section>`).join('')}</div>`;
}
function standaloneCalendarPanel(year, month, selectedDate, view) {
  return view === 'year' ? standaloneCalendarYearGrid(year, month) : standaloneCalendarDayGrid(year, month, selectedDate);
}
function calendarBody() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const selectedDate = formatCalendarDate(today);
  const monthViewButton = '<button type="button" class="gs-combination__item is-selected" data-calendar-view="month" aria-pressed="true">月</button>';
  const yearViewButton = '<button type="button" class="gs-combination__item" data-calendar-view="year" aria-pressed="false">年</button>';
  const todayButton = button('今天', 'gs-calendar__today', 'data-calendar-today');
  return `<section id="基础日历"><h2>基础日历</h2><p>通过年月选择、月／年视图切换和日期格完成浏览与选择；“今天”可快速回到当前日期。</p><div class="demo-card gs-calendar-demo"><div class="gs-calendar" data-calendar data-calendar-year="${year}" data-calendar-month="${month}" data-calendar-view="month" data-calendar-selected="${selectedDate}"><div class="gs-calendar__toolbar"><div class="gs-calendar__toolbar-selects">${standaloneCalendarSelect('year', year, `${year} 年`, calendarYearOptions(year))}${standaloneCalendarSelect('month', month, `${month} 月`, calendarMonthOptions())}</div><div class="gs-combination gs-combination--filled gs-combination--interactive gs-calendar__view-switch" role="group" aria-label="日历视图">${monthViewButton}${yearViewButton}</div>${todayButton}</div><div class="gs-calendar__panel" data-calendar-panel>${standaloneCalendarPanel(year, month, selectedDate, 'month')}</div><p class="gs-calendar__live" aria-live="polite" data-calendar-live></p></div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>年月下拉复用 Select 组件；视图切换复用组合 Button 组件；“今天”复用主 Button 组件。</li><li>月视图用于浏览和选择具体日期；年视图展示当前年份及前后各 3 年。</li><li>未选中日期悬停使用中性色 8 与主色 2；选中的日期不叠加悬停反馈。</li><li>包含事件的日期在日期格中展示事件类型和摘要，超出内容使用省略号。</li></ul></section><section id="无障碍"><h2>无障碍</h2><ul><li>年月选择、视图切换和日期格均使用可聚焦按钮，并提供可读名称。</li><li>视图通过 <code>aria-pressed</code> 传达当前状态；日期变化通过实时区域提示。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>value</code><span>string</span><span>当前选中的日期，格式为 YYYY-MM-DD</span></div><div><code>view</code><span>month | year</span><span>默认展示视图</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>选择日期时触发</span></div><div><code>onViewChange</code><span>(view) =&gt; void</span><span>切换月／年视图时触发</span></div></div></section>`;
}
function syncCalendarControls(calendar) {
  if (!calendar) return;
  const year = Number(calendar.dataset.calendarYear);
  const month = Number(calendar.dataset.calendarMonth);
  const view = calendar.dataset.calendarView || 'month';
  [['year', year, `${year} 年`], ['month', month, `${month} 月`]].forEach(([kind, value, label]) => {
    const picker = calendar.querySelector(`[data-picker="calendar-${kind}"]`);
    const valueNode = picker?.querySelector('.gs-select__value');
    if (valueNode) valueNode.textContent = label;
    picker?.querySelectorAll('.gs-select-option').forEach(option => {
      const selected = option.dataset.pickerValue === String(value);
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-selected', String(selected));
    });
  });
  calendar.querySelectorAll('[data-calendar-view]').forEach(buttonNode => {
    const selected = buttonNode.dataset.calendarView === view;
    buttonNode.classList.toggle('is-selected', selected);
    buttonNode.setAttribute('aria-pressed', String(selected));
  });
}
function renderCalendarGrid(calendar) {
  if (!calendar) return;
  const panel = calendar.querySelector('[data-calendar-panel]');
  if (!panel) return;
  panel.innerHTML = standaloneCalendarPanel(Number(calendar.dataset.calendarYear), Number(calendar.dataset.calendarMonth), calendar.dataset.calendarSelected || '', calendar.dataset.calendarView || 'month');
}
function calendarLiveMessage(calendar, message) {
  const live = calendar?.querySelector('[data-calendar-live]');
  if (live) live.textContent = message;
}
function handleCalendarClick(event) {
  const pickerTarget = event.target.closest('[data-calendar] [data-picker-trigger], [data-calendar] [data-picker] .gs-select-option');
  if (pickerTarget) {
    const picker = pickerTarget.closest('[data-picker]');
    if (pickerTarget.matches('[data-picker-trigger]')) openPicker(picker);
    else selectPickerOption(picker, pickerTarget);
    return true;
  }
  const target = event.target.closest('[data-calendar-day],[data-calendar-view],[data-calendar-year-month-option],[data-calendar-today]');
  if (!target) return false;
  const calendar = target.closest('[data-calendar]');
  if (!calendar || target.disabled) return true;
  if (target.hasAttribute('data-calendar-day')) {
    calendar.dataset.calendarSelected = target.dataset.calendarDay;
    renderCalendarGrid(calendar);
    calendarLiveMessage(calendar, `已选择${target.dataset.calendarDay}`);
    return true;
  }
  if (target.hasAttribute('data-calendar-view')) {
    calendar.dataset.calendarView = target.dataset.calendarView;
    syncCalendarControls(calendar);
    renderCalendarGrid(calendar);
    calendarLiveMessage(calendar, `已切换至${target.textContent.trim()}视图`);
    return true;
  }
  if (target.hasAttribute('data-calendar-year-month-option')) {
    calendar.dataset.calendarYear = target.dataset.calendarYear;
    calendar.dataset.calendarMonth = target.dataset.calendarMonth;
    calendar.dataset.calendarView = 'month';
    syncCalendarControls(calendar);
    renderCalendarGrid(calendar);
    calendarLiveMessage(calendar, `已切换至${calendar.dataset.calendarYear}年${calendar.dataset.calendarMonth}月`);
    return true;
  }
  if (target.hasAttribute('data-calendar-today')) {
    const today = new Date();
    calendar.dataset.calendarYear = String(today.getFullYear());
    calendar.dataset.calendarMonth = String(today.getMonth() + 1);
    calendar.dataset.calendarSelected = formatCalendarDate(today);
    calendar.dataset.calendarView = 'month';
    syncCalendarControls(calendar);
    renderCalendarGrid(calendar);
    calendarLiveMessage(calendar, `已跳转并选择今天：${calendar.dataset.calendarSelected}`);
    return true;
  }
  return false;
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
function dateTimeTimeValues(part, current) {
  const max = part === 'hour' ? 24 : 60;
  const value = Math.min(max - 1, Math.max(0, Number(current) || 0));
  return Array.from({ length: 7 }, (_, index) => String((value + index - 3 + max) % max).padStart(2, '0'));
}
function dateTimeTimeWheel(part, current) {
  const max = part === 'hour' ? 24 : 60;
  const values = Array.from({ length: max }, (_, index) => String(index).padStart(2, '0'));
  const selected = String(current).padStart(2, '0');
  const cycleCount = 5;
  const middleCycle = Math.floor(cycleCount / 2);
  return `<div class="gs-dtp-datetime-time-column" data-dtp-column="${part}"><div class="gs-dtp-datetime-time-wheel" data-dtp-time-wheel data-dtp-time-initial="${selected}" data-dtp-middle-cycle="${middleCycle}" role="listbox" aria-label="${part === 'hour' ? '小时' : part === 'minute' ? '分钟' : '秒'}" tabindex="0">${Array.from({ length: cycleCount }, (_, cycle) => values.map(value => `<span class="gs-dtp-datetime-time-item${cycle === middleCycle && value === selected ? ' is-in-slot' : ''}" data-dtp-time-item data-dtp-time-cycle="${cycle}" data-dtp-value="${value}" role="option" aria-selected="${cycle === middleCycle && value === selected}">${value}</span>`).join('')).join('')}</div></div>`;
}
function dtpDateTimePopup(id, startValue = '', initialOpen = false) {
  const now = new Date();
  const date = startValue ? String(startValue).slice(0, 10) : formatCalendarDate(now);
  const [year, month, day] = date.split('-').map(Number);
  const time = normalizeTimeValue(startValue || currentTimeValue()).split(':');
  const [hours, minutes, seconds] = time;
  const safeYear = Number.isFinite(year) ? year : now.getFullYear();
  const safeMonth = Number.isFinite(month) && month > 0 && month < 13 ? month : now.getMonth() + 1;
  const safeDay = Number.isFinite(day) && day > 0 ? day : now.getDate();
  const selectedDate = `${safeYear}-${String(safeMonth).padStart(2,'0')}-${String(safeDay).padStart(2,'0')}`;
  const calendar = dtpDateTimeCalendarCells(safeYear, safeMonth, selectedDate);
  const hidden = initialOpen ? '' : ' hidden';
  return `<div id="${id}-datetime-popup" class="gs-dtp-popover gs-dtp-datetime-popover" data-dtp-datetime-popup data-dtp-calendar-year="${safeYear}" data-dtp-calendar-month="${safeMonth}" data-dtp-calendar-selected="${selectedDate}" role="dialog" aria-label="选择日期和时间"${hidden}>
    <div class="gs-dtp-datetime-panels">
      <section class="gs-dtp-datetime-date-panel" aria-label="日期选择">
        <div class="gs-dtp-datetime-date-head"><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="prev-year" aria-label="上一年">${dateNavIcon('prevYear')}</button><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="prev" aria-label="上个月">${dateNavIcon('prev')}</button><strong data-dtp-datetime-calendar-title>${safeYear} 年　${safeMonth}月</strong><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="next" aria-label="下个月">${dateNavIcon('next')}</button><button type="button" class="gs-dtp-nav" data-dtp-datetime-nav="next-year" aria-label="下一年">${dateNavIcon('nextYear')}</button></div>
        <div class="gs-dtp-datetime-date-body"><div class="gs-dtp-datetime-weekdays">${['日','一','二','三','四','五','六'].map(dayName => `<span>${dayName}</span>`).join('')}</div><div class="gs-dtp-datetime-calendar" data-dtp-datetime-calendar-grid>${calendar}</div></div>
      </section>
      <section class="gs-dtp-datetime-time-panel" aria-label="时间选择"><h3 class="gs-dtp-datetime-time-title" data-dtp-datetime-time-title>${hours} : ${minutes} : ${seconds}</h3><div class="gs-dtp-datetime-time-columns">${dateTimeTimeWheel('hour', hours)}${dateTimeTimeWheel('minute', minutes)}${dateTimeTimeWheel('second', seconds)}</div></section>
    </div>
    <div class="gs-dtp-popover__footer gs-dtp-time-footer"><button type="button" class="gs-button gs-button--text-primary" data-dtp-datetime-action="now">现在</button><button type="button" class="gs-button gs-button--secondary" data-dtp-datetime-action="cancel">取消</button><button type="button" class="gs-button" data-dtp-datetime-action="confirm">确认</button></div>
  </div>`;
}
function dtpDateTimeRange(id, startValue = '', endValue = '', disabled = false, initialOpen = false) {
  // Keep date-time ranges closed by default, even when a sample includes a value.
  const opened = false;
  const start = startValue || '请选择日期';
  const end = endValue || '请选择日期';
  return `<div class="gs-dtp-datetime-field${disabled ? ' is-disabled' : ''}" data-dtp-datetime-field data-dtp-datetime-start="${escapeHtml(startValue)}" data-dtp-datetime-active-part="start"><div class="gs-dtp-datetime-trigger${disabled ? ' is-disabled' : ''}${opened ? ' is-active' : ''}" data-dtp-datetime-trigger role="group" aria-label="日期时间范围" aria-haspopup="dialog" aria-expanded="${opened}" aria-controls="${id}-datetime-popup"${disabled ? ' aria-disabled="true"' : ''}><button type="button" class="gs-dtp-datetime-segment" data-dtp-datetime-segment="start" aria-label="选择开始日期和时间"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-dtp-datetime__value${startValue ? '' : ' is-placeholder'}" data-dtp-datetime-value="start">${escapeHtml(start)}</span></button><span class="gs-dtp-datetime__separator" aria-hidden="true">—</span><button type="button" class="gs-dtp-datetime-segment" data-dtp-datetime-segment="end" aria-label="选择结束日期和时间"${disabled ? ' disabled aria-disabled="true"' : ''}><span class="gs-dtp-datetime__value${endValue ? '' : ' is-placeholder'}" data-dtp-datetime-value="end">${escapeHtml(end)}</span></button><span class="gs-dtp-datetime__icon" aria-hidden="true">${gsIcon('calendar')}</span></div>${dtpDateTimePopup(id, startValue, opened)}</div>`;
}
function dateTimePickerBody() {
  return `<section id="时间选择"><h2>时间选择</h2><p>选择一天中的时间，支持默认、激活与禁用状态。</p><div class="demo-card gs-dtp-card gs-dtp-time-card"><div class="gs-dtp-state-list"><div class="gs-dtp-state-row" data-dtp-state="default"><span class="gs-dtp-state-label">未选择默认</span>${dtpTrigger('dtp-time-default','time')}</div><div class="gs-dtp-state-row" data-dtp-state="hover"><span class="gs-dtp-state-label">未选择悬停</span>${dtpTrigger('dtp-time-hover','time')}</div><div class="gs-dtp-state-row is-active" data-dtp-state="active"><span class="gs-dtp-state-label">激活选择框</span>${dtpTrigger('dtp-time-active','time','14:45:31',false,true)}</div><div class="gs-dtp-state-row is-disabled" data-dtp-state="disabled"><span class="gs-dtp-state-label">禁用选择</span>${dtpTrigger('dtp-time-disabled','time','14:45:31',true)}</div></div></div></section><section id="日期加时间选择"><h2>日期加时间选择</h2><p>日期面板与时间面板左右独立选择，浮窗浮在组件上方，不挤压页面布局。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-datetime-stack">${dtpExample('交互示例',dtpDateTimeRange('dtp-datetime-range','2026-05-21 14:45:31','',false,true))}${dtpExample('禁用示例',dtpDateTimeRange('dtp-datetime-range-disabled','2026-05-21 14:45:31','2026-05-21 14:45:31',true))}</div></div></section><section id="日期选择"><h2>日期选择</h2><p>选择具体日期，浮层中的日期网格与输入框保持同一交互区域。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-date','date'))}${dtpExample('禁用示例',dtpTrigger('dtp-date-disabled','date','2026-08-13',true))}</div></div></section><section id="年份选择"><h2>年份选择</h2><p>选择年份，适用于年度筛选与统计口径设置。</p><div class="demo-card gs-dtp-card"><div class="gs-dtp-grid">${dtpExample('交互示例',dtpTrigger('dtp-year','year'))}${dtpExample('禁用示例',dtpTrigger('dtp-year-disabled','year','2026',true))}</div></div></section><section id="使用规则"><h2>使用规则</h2><ul><li>时间、日期与日期时间范围使用对应类型，避免让用户手动输入格式。</li><li>激活后显示浮层，选择后回填值并关闭；点击外部区域也会关闭浮层。</li><li>禁用状态不可打开、不可选择，且不产生悬停与按下反馈。</li></ul></section><section id="API"><h2>API</h2><div class="api-table"><div><b>属性</b><b>类型</b><b>说明</b></div><div><code>type</code><span>time | date | datetime | year</span><span>选择器类型</span></div><div><code>value</code><span>string | Date</span><span>当前值</span></div><div><code>disabled</code><span>boolean</span><span>是否禁用</span></div><div><code>range</code><span>boolean</span><span>是否启用范围选择</span></div><div><code>onChange</code><span>(value) =&gt; void</span><span>值变化时触发</span></div></div></section>`;
}
function timeWheelParts(field) {
  if (field?.matches('[data-dtp-datetime-field]')) {
    const part = field.dataset.dtpDatetimeActivePart || 'start';
    return normalizeTimeValue(dateTimeValueOrFallback(field, part)).split(':');
  }
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
  const datetimePart = field?.matches('[data-dtp-datetime-field]') ? field.dataset.dtpDatetimeActivePart || 'start' : '';
  const datetimeValue = datetimePart ? dateTimePartElement(field, datetimePart) : null;
  if (index === undefined || (!value && !datetimeValue)) return;
  const parts = timeWheelParts(field);
  parts[index] = current.dataset.dtpValue;
  if (datetimeValue) {
    const currentValue = dateTimeValueOrFallback(field, datetimePart);
    const date = currentValue.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || formatCalendarDate(new Date());
    datetimeValue.textContent = `${date} ${parts.join(':')}`;
    datetimeValue.classList.remove('is-placeholder');
    const title = field.querySelector('[data-dtp-datetime-time-title]');
    if (title) title.textContent = `${parts[0]} : ${parts[1]} : ${parts[2]}`;
  } else {
    value.textContent = parts.join(':');
    value.classList.remove('is-placeholder');
  }
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
function scrollTimeWheelToValue(wheel, value, behavior = 'auto', preferMiddle = false, targetCycle = null) {
  const targets = [...wheel.querySelectorAll('[data-dtp-time-item]')].filter(item => item.dataset.dtpValue === value);
  const cycleTarget = targetCycle === null ? null : targets.find(item => item.dataset.dtpTimeCycle === String(targetCycle));
  const target = cycleTarget || timeWheelTargetForValue(wheel, value, preferMiddle);
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
function timeWheelWrapTarget(wheel, clicked) {
  if (!wheel || !clicked) return null;
  const items = [...wheel.querySelectorAll('[data-dtp-time-item]')];
  const middleCycle = wheel.dataset.dtpMiddleCycle;
  const middleItems = items.filter(item => item.dataset.dtpTimeCycle === middleCycle);
  if (!middleItems.length) return null;
  const firstValue = middleItems[0].dataset.dtpValue;
  const lastValue = middleItems[middleItems.length - 1].dataset.dtpValue;
  const current = nearestTimeWheelItem(wheel);
  if (!current) return null;
  const currentCycle = Number(current.dataset.dtpTimeCycle);
  if (!Number.isInteger(currentCycle)) return null;
  let targetCycle = null;
  if (current.dataset.dtpValue === lastValue && clicked.dataset.dtpValue === firstValue) targetCycle = currentCycle + 1;
  if (current.dataset.dtpValue === firstValue && clicked.dataset.dtpValue === lastValue) targetCycle = currentCycle - 1;
  if (targetCycle === null) return null;
  return items.find(item => item.dataset.dtpValue === clicked.dataset.dtpValue && item.dataset.dtpTimeCycle === String(targetCycle)) || null;
}
function syncTimeWheels(field, behavior = 'auto') {
  if (field?.dataset.dtpKind !== 'time' && !field?.matches('[data-dtp-datetime-field]')) return;
  timeWheelParts(field).forEach((part, index) => {
    const wheel = field.querySelectorAll('[data-dtp-time-wheel]')[index];
    if (wheel) scrollTimeWheelToValue(wheel, part, behavior);
  });
}
function handleTimeWheelScroll(event) {
  const wheel = event.target.closest?.('[data-dtp-time-wheel]');
  if (!wheel) return;
  const field = wheel.closest('[data-dtp-field],[data-dtp-datetime-field]');
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
        const cycles = [...wheel.querySelectorAll('[data-dtp-time-item]')].map(item => Number(item.dataset.dtpTimeCycle)).filter(Number.isFinite);
        const cycle = Number(latest.dataset.dtpTimeCycle);
        const atEdge = middleCycle && (cycle === Math.min(...cycles) || cycle === Math.max(...cycles));
        scrollTimeWheelToValue(wheel, latest.dataset.dtpValue, atEdge ? 'auto' : 'smooth', atEdge);
      }
    }, 140);
  });
}
function setDateTimeActivePart(field, part = 'start') {
  if (!field) return;
  field.dataset.dtpDatetimeActivePart = part;
  field.querySelectorAll('[data-dtp-datetime-segment]').forEach(segment => segment.classList.toggle('is-active', segment.dataset.dtpDatetimeSegment === part));
}
function closeDateTimePicker(field) { if(!field) return; field.querySelectorAll('[data-dtp-popup],[data-dtp-datetime-popup],[data-dtp-range-popup]').forEach(p=>p.hidden=true); field.querySelectorAll('[data-dtp-trigger],[data-dtp-datetime-trigger],[data-dtp-range-trigger]').forEach(t=>{t.setAttribute('aria-expanded','false');t.classList.remove('is-active');}); field.querySelectorAll('[data-dtp-datetime-segment]').forEach(segment=>segment.classList.remove('is-active')); field.classList.remove('is-open'); }
function closeAllDateTimePickers(except=null) { document.querySelectorAll('[data-dtp-field],[data-dtp-datetime-field],[data-dtp-range-field]').forEach(f=>{ if(f!==except) closeDateTimePicker(f); }); }
function openDateRangePicker(field) { if (!field || field.classList.contains('is-disabled')) return; closeAllDateTimePickers(field); const trigger=field.querySelector('[data-dtp-range-trigger]'); const popup=field.querySelector('[data-dtp-range-popup]'); if(!trigger||!popup) return; popup.hidden=false; trigger.setAttribute('aria-expanded','true'); trigger.classList.add('is-active'); field.classList.add('is-open'); }
function keepDateRangePickerOpen(field) {
  if (!field || field.classList.contains('is-disabled')) return;
  const trigger = field.querySelector('[data-dtp-range-trigger]');
  const popup = field.querySelector('[data-dtp-range-popup]');
  if (!trigger || !popup) return;
  popup.hidden = false;
  trigger.setAttribute('aria-expanded', 'true');
  trigger.classList.add('is-active');
  field.classList.add('is-open');
}
function dateTimePartElement(field, part) { return field?.querySelector(`[data-dtp-datetime-value="${part}"]`); }
function dateTimePartText(field, part) { return dateTimePartElement(field, part)?.textContent.trim() || ''; }
function dateTimeValueOrFallback(field, part) {
  const current = dateTimePartText(field, part);
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(current)) return current;
  const other = dateTimePartText(field, part === 'start' ? 'end' : 'start');
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(other)) return other;
  const now = new Date();
  return `${formatCalendarDate(now)} ${currentTimeValue(now)}`;
}
function updateDateTimePopupTime(popup, time) {
  const parts = normalizeTimeValue(time).split(':');
  const title = popup?.querySelector('[data-dtp-datetime-time-title]');
  if (title) title.textContent = `${parts[0]} : ${parts[1]} : ${parts[2]}`;
  const columns = popup?.querySelector('.gs-dtp-datetime-time-columns');
  if (!columns) return;
  ['hour', 'minute', 'second'].forEach((part, index) => {
    const column = columns.querySelector(`[data-dtp-datetime-column="${part}"]`);
    if (!column) return;
    column.outerHTML = dateTimeTimeWheel(part, parts[index]);
  });
}
function syncDateTimePopupToPart(field, part = 'start') {
  const popup = field?.querySelector('[data-dtp-datetime-popup]');
  if (!popup) return;
  const value = dateTimeValueOrFallback(field, part);
  const date = value.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] || formatCalendarDate(new Date());
  const time = value.match(/(\d{2}:\d{2}:\d{2})/)?.[1] || currentTimeValue();
  const [year, month] = date.split('-').map(Number);
  popup.dataset.dtpCalendarYear = String(year);
  popup.dataset.dtpCalendarMonth = String(month);
  popup.dataset.dtpCalendarSelected = date;
  setCalendarMonth(popup, 0, true);
  updateDateTimePopupTime(popup, time);
}
function openDateTimePicker(field) {
  if (!field || field.classList.contains('is-disabled')) return;
  closeAllDateTimePickers(field);
  const trigger=field.querySelector('[data-dtp-trigger],[data-dtp-datetime-trigger]');
  const popup=field.querySelector('[data-dtp-popup],[data-dtp-datetime-popup]');
  if(!trigger||!popup) return;
  if (field.matches('[data-dtp-datetime-field]')) {
    setDateTimeActivePart(field, field.dataset.dtpDatetimeActivePart || 'start');
    syncDateTimePopupToPart(field, field.dataset.dtpDatetimeActivePart || 'start');
  }
  popup.hidden=false;
  trigger.setAttribute('aria-expanded','true');
  trigger.classList.add('is-active');
  field.classList.add('is-open');
  requestAnimationFrame(() => syncTimeWheels(field));
}
function updateDateRangeField(field, start, end) {
  if (!field) return;
  field.dataset.dtpRangeStart = start || '';
  field.dataset.dtpRangeEnd = end || '';
  const popup = field.querySelector('[data-dtp-range-popup]');
  if (popup) { popup.dataset.dtpRangeStart = start || ''; popup.dataset.dtpRangeEnd = end || ''; }
  [['start', start, '请选择日期'], ['end', end, '请选择日期']].forEach(([part, value, placeholder]) => {
    const node = field.querySelector(`[data-dtp-range-value="${part}"]`);
    if (!node) return;
    node.textContent = value || placeholder;
    node.classList.toggle('is-placeholder', !value);
  });
}
function renderDateRangeCalendars(popup) {
  if (!popup) return;
  const leftYear = Number(popup.dataset.dtpRangeLeftYear || popup.dataset.dtpRangeYear);
  const leftMonth = Number(popup.dataset.dtpRangeLeftMonth || popup.dataset.dtpRangeMonth);
  const rightYear = Number(popup.dataset.dtpRangeRightYear);
  const rightMonth = Number(popup.dataset.dtpRangeRightMonth);
  const start = popup.dataset.dtpRangeStart || '';
  const end = popup.dataset.dtpRangeEnd || '';
  const right = Number.isFinite(rightYear) && Number.isFinite(rightMonth) ? { year: rightYear, month: rightMonth } : (() => { const next = new Date(leftYear, leftMonth, 1); return { year: next.getFullYear(), month: next.getMonth() + 1 }; })();
  const panels = popup.querySelector('[data-dtp-range-panels]');
  if (panels) panels.innerHTML = `${dtpRangeCalendarPanel(leftYear, leftMonth, start, end, 0)}${dtpRangeCalendarPanel(right.year, right.month, start, end, 1)}`;
}
function setDateRangeMonth(popup, delta, panelIndex = 0) {
  if (!popup) return;
  const side = panelIndex === 1 ? 'Right' : 'Left';
  const yearKey = `dtpRange${side}Year`;
  const monthKey = `dtpRange${side}Month`;
  const current = new Date(Number(popup.dataset[yearKey]), Number(popup.dataset[monthKey]) - 1 + delta, 1);
  popup.dataset[yearKey] = String(current.getFullYear());
  popup.dataset[monthKey] = String(current.getMonth() + 1);
  if (panelIndex === 0) { popup.dataset.dtpRangeYear = popup.dataset[yearKey]; popup.dataset.dtpRangeMonth = popup.dataset[monthKey]; }
  renderDateRangeCalendars(popup);
}
function handleDateTimeClick(event) {
  const rangeTrigger = event.target.closest('[data-dtp-range-trigger]');
  if (rangeTrigger) {
    if (rangeTrigger.disabled) return true;
    const field = rangeTrigger.closest('[data-dtp-range-field]');
    const popup = field?.querySelector('[data-dtp-range-popup]');
    if (popup?.hidden) openDateRangePicker(field); else closeDateTimePicker(field);
    event.preventDefault();
    return true;
  }
  const rangeOption = event.target.closest('[data-dtp-range-option]');
  if (rangeOption) {
    if (rangeOption.disabled) return true;
    const field = rangeOption.closest('[data-dtp-range-field]');
    const popup = field?.querySelector('[data-dtp-range-popup]');
    if (!field || !popup) return true;
    const value = rangeOption.dataset.dtpRangeValue;
    let start = popup.dataset.dtpRangeStart || '';
    let end = popup.dataset.dtpRangeEnd || '';
    if (!start || end) { start = value; end = ''; }
    else if (value < start) { end = start; start = value; }
    else { end = value; }
    updateDateRangeField(field, start, end);
    renderDateRangeCalendars(popup);
    keepDateRangePickerOpen(field);
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  const rangeNav = event.target.closest('[data-dtp-range-nav]');
  if (rangeNav) {
    const popup = rangeNav.closest('[data-dtp-range-popup]');
    const field = rangeNav.closest('[data-dtp-range-field]');
    const panelIndex = Number(rangeNav.closest('[data-dtp-range-panel]')?.dataset.dtpRangePanel) || 0;
    setDateRangeMonth(popup, rangeNav.dataset.dtpRangeNav === 'prev-year' ? -12 : rangeNav.dataset.dtpRangeNav === 'next-year' ? 12 : rangeNav.dataset.dtpRangeNav === 'prev' ? -1 : 1, panelIndex);
    if (field) keepDateRangePickerOpen(field);
    event.preventDefault();
    event.stopPropagation();
    return true;
  }
  const rangeAction = event.target.closest('[data-dtp-range-action]');
  if (rangeAction) {
    closeDateTimePicker(rangeAction.closest('[data-dtp-range-field]'));
    return true;
  }
  const datetimeSegment = event.target.closest('[data-dtp-datetime-segment]');
  if (datetimeSegment) {
    const field = datetimeSegment.closest('[data-dtp-datetime-field]');
    if (!field || field.classList.contains('is-disabled')) return true;
    const part = datetimeSegment.dataset.dtpDatetimeSegment;
    setDateTimeActivePart(field, part);
    const popup = field.querySelector('[data-dtp-datetime-popup]');
    if (popup?.hidden) openDateTimePicker(field); else syncDateTimePopupToPart(field, part);
    event.preventDefault();
    return true;
  }
  const datetimeTrigger = event.target.closest('[data-dtp-datetime-trigger]');
  if (datetimeTrigger) {
    const field = datetimeTrigger.closest('[data-dtp-datetime-field]');
    if (!field || field.classList.contains('is-disabled')) return true;
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
    const activePart = field?.dataset.dtpDatetimeActivePart || 'start';
    const target = dateTimePartElement(field, activePart);
    if (part === 'date') {
      const current = dateTimeValueOrFallback(field, activePart);
      const time = current.match(/\d{2}:\d{2}:\d{2}/)?.[0] || currentTimeValue();
      if (target) { target.textContent = `${datetimeOption.dataset.dtpDatetimeValue} ${time}`; target.classList.remove('is-placeholder'); }
      const popup = field?.querySelector('[data-dtp-datetime-popup]');
      if (popup) popup.dataset.dtpCalendarSelected = datetimeOption.dataset.dtpDatetimeValue;
    } else {
      const current = dateTimeValueOrFallback(field, activePart);
      const date = current.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || formatCalendarDate(new Date());
      const parts = current.match(/\d{2}:\d{2}:\d{2}/)?.[0].split(':') || currentTimeValue().split(':');
      const index = { hour: 0, minute: 1, second: 2 }[part];
      if (target && index !== undefined) { parts[index] = datetimeOption.dataset.dtpDatetimeValue; target.textContent = `${date} ${parts.join(':')}`; target.classList.remove('is-placeholder'); }
      updateDateTimePopupTime(field?.querySelector('[data-dtp-datetime-popup]'), parts.join(':'));
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
      const activePart = field?.dataset.dtpDatetimeActivePart || 'start';
      const target = dateTimePartElement(field, activePart);
      if (target) { target.textContent = `${date} ${time}`; target.classList.remove('is-placeholder'); }
      const popup = field?.querySelector('[data-dtp-datetime-popup]');
      if (popup) syncDateTimePopupToPart(field, activePart);
      return true;
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
    const field = timeItem.closest('[data-dtp-field],[data-dtp-datetime-field]');
    if (wheel && field) {
      const wrapTarget = timeWheelWrapTarget(wheel, timeItem);
      const target = wrapTarget || timeItem;
      updateTimeWheelSelection(field, wheel, target);
      scrollTimeWheelToValue(wheel, target.dataset.dtpValue, 'smooth', false, Number(target.dataset.dtpTimeCycle));
    }
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
    if (field?.dataset.dtpKind === 'date') {
      const grid = option.closest('[data-dtp-calendar-grid]');
      grid?.querySelectorAll('.is-current').forEach(item => item.classList.remove('is-current'));
      option.classList.add('is-current');
      if (value) { value.textContent = option.dataset.dtpValue || option.textContent.trim(); value.classList.remove('is-placeholder'); }
      const popup = field.querySelector('[data-dtp-popup]');
      if (popup) popup.dataset.dtpCalendarSelected = option.dataset.dtpValue || option.textContent.trim();
      return true;
    }
    if (field?.dataset.dtpKind === 'year') {
      field.querySelectorAll('[data-dtp-option].is-current').forEach(item => item.classList.remove('is-current'));
      option.classList.add('is-current');
      if (value) { value.textContent = option.dataset.dtpValue || option.textContent.trim(); value.classList.remove('is-placeholder'); }
      const popup = field.querySelector('[data-dtp-popup]');
      if (popup) popup.dataset.dtpYearSelected = option.dataset.dtpValue || option.textContent.trim();
      return true;
    }
    if (value) { value.textContent = option.dataset.dtpValue || option.textContent.trim(); value.classList.remove('is-placeholder'); }
    closeDateTimePicker(field);
    return true;
  }
  const action = event.target.closest('[data-dtp-action]');
  if (action) {
    const field = action.closest('[data-dtp-field]');
    if (action.dataset.dtpAction === 'today' && field?.dataset.dtpKind === 'date') {
      const today = formatCalendarDate(new Date());
      const value = field.querySelector('[data-dtp-value]');
      if (value) { value.textContent = today; value.classList.remove('is-placeholder'); }
      const popup = field.querySelector('[data-dtp-popup]');
      if (popup) { popup.dataset.dtpCalendarSelected = today; const [year, month] = today.split('-').map(Number); popup.dataset.dtpCalendarYear = String(year); popup.dataset.dtpCalendarMonth = String(month); setCalendarMonth(popup, 0, false); }
      return true;
    }
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
    if (popup?.dataset.dtpYearStart) {
      const currentStart = Number(popup.dataset.dtpYearStart) || 2024;
      renderYearGroup(popup, currentStart + (nav.dataset.dtpNav === 'prev' ? -12 : 12));
    } else if (popup?.dataset.dtpCalendarYear) {
      setCalendarMonth(popup, nav.dataset.dtpNav === 'prev-year' ? -12 : nav.dataset.dtpNav === 'next-year' ? 12 : nav.dataset.dtpNav === 'prev' ? -1 : 1);
    }
    event.preventDefault();
    return true;
  }
  return false;
}
function handleDateTimeOutsideClick(event) { if(!event.target.closest('[data-dtp-field],[data-dtp-datetime-field],[data-dtp-range-field]')) closeAllDateTimePickers(); }
function handleDateTimeKeydown(event) {
  const field = event.target.closest('[data-dtp-field],[data-dtp-datetime-field],[data-dtp-range-field]');
  if (!field) return;
  const wheel = event.target.closest('[data-dtp-time-wheel]');
  if (wheel && ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(event.key)) {
    const items = [...wheel.querySelectorAll('[data-dtp-time-item]')];
    const current = nearestTimeWheelItem(wheel);
    const currentIndex = Math.max(0, items.indexOf(current));
    const step = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : event.key === 'PageUp' ? -5 : event.key === 'PageDown' ? 5 : 0;
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : Math.min(items.length - 1, Math.max(0, currentIndex + step));
    const next = items[nextIndex];
    if (next) { updateTimeWheelSelection(field, wheel, next); scrollTimeWheelToValue(wheel, next.dataset.dtpValue, 'smooth', false, Number(next.dataset.dtpTimeCycle)); event.preventDefault(); }
    return;
  }
  if (event.key === 'Escape') { closeDateTimePicker(field); return; }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-dtp-option],[data-dtp-datetime-option]')) { event.preventDefault(); event.target.click(); }
}
function placeholder(label) { return { crumb: label, title: label, lead: '该组件正在按照 GeoShare Web UI 规范建设中。', toc: ['组件状态', '后续内容'], body: `<section id="组件状态"><h2>组件状态</h2><div class="component-empty"><span>✦</span><b>即将上线</b><p>完成后将提供组件用途、交互规则、状态、可运行示例与 API 文档。</p></div></section><section id="后续内容"><h2>后续内容</h2><p>如果当前项目需要此组件，请按基础规范先完成业务实现，并将通用能力回收至组件库。</p></section>` }; }
function getPage() { const hash=location.hash || '#/guide/intro'; if(pageData[hash]) return pageData[hash]; const item=navigation.flatMap(x=>x[1]).find(x=>x[1]===hash); return placeholder(item?.[0] || '页面未找到'); }
function renderNav() { document.querySelector('#side-nav').innerHTML=navigation.map(([group,items])=>`<section><p>${group}</p>${items.map(([label,href])=>`<a href="${href}" data-href="${href}">${label}</a>`).join('')}</section>`).join(''); }
function render() { const page=getPage(); const shell=document.querySelector('#article-shell').content.cloneNode(true); shell.querySelector('.breadcrumb').innerHTML=page.crumb; shell.querySelector('h1').textContent=page.title; shell.querySelector('.lead').textContent=page.lead; const articleBody=shell.querySelector('.article-body'); articleBody.innerHTML=location.hash === '#/components/date-time-picker' ? dateTimePickerBodySingle() : page.body; if (location.hash === '#/components/date-time-picker') { const dateSection=articleBody.querySelector('#日期选择'); const datetimeSection=articleBody.querySelector('#日期加时间选择'); if (dateSection && datetimeSection) datetimeSection.before(dateSection); const yearSection=articleBody.querySelector('#年份选择'); if (yearSection) yearSection.before(document.createRange().createContextualFragment(dateRangePickerSection()).firstElementChild); } const app=document.querySelector('#app'); app.replaceChildren(shell); document.querySelectorAll('[data-href]').forEach(a=>a.classList.toggle('active',a.dataset.href===(location.hash||'#/guide/intro'))); document.querySelector('#page-toc').innerHTML=`<p>本页目录</p>${page.toc.map(x=>`<a href="${location.hash || '#/guide/intro'}" data-section="${x}">${x}</a>`).join('')}`; initComponentDemos(app); app.focus({preventScroll:true}); }
function search(query) { const q=query.trim().toLowerCase(); document.querySelectorAll('#side-nav a').forEach(a=>{ a.hidden=Boolean(q && !a.textContent.toLowerCase().includes(q)); }); document.querySelectorAll('#side-nav section').forEach(section=>{ section.hidden=Boolean(q && !section.querySelector('a:not([hidden])')); }); }
function initHeaderSearch() { const field=document.querySelector('[data-header-search-field]'); const input=document.querySelector('#search-input'); const clear=document.querySelector('[data-header-search-clear]'); if (!field || !(input instanceof HTMLInputElement) || !(clear instanceof HTMLButtonElement)) return; if (!field.querySelector('.gs-search-icon--leading')) input.insertAdjacentHTML('beforebegin',gsIcon('search','gs-search-icon gs-search-icon--leading')); clear.innerHTML=gsIcon('close','gs-input-clear__icon'); const sync=()=>{ const active=document.activeElement===input || Boolean(input.value); field.classList.toggle('is-active',active); clear.hidden=!input.value; }; input.addEventListener('input',event=>{ search(event.target.value); sync(); }); input.addEventListener('focus',sync); input.addEventListener('blur',()=>setTimeout(sync)); clear.addEventListener('click',()=>{ input.value=''; search(''); input.focus(); sync(); }); sync(); }
renderNav(); render(); initHeaderSearch(); const appRoot=document.querySelector('#app'); appRoot.addEventListener('click',handleComponentClick); appRoot.addEventListener('click',handleInputClick); appRoot.addEventListener('click',handleSearchClick); appRoot.addEventListener('change',handleControlChange); appRoot.addEventListener('change',handleUploadChange); appRoot.addEventListener('change',handleColorPickerChange); appRoot.addEventListener('input',handleSliderInput); appRoot.addEventListener('input',handleSliderEditInput); appRoot.addEventListener('input',handleSliderRangeInput); appRoot.addEventListener('input',handleNumericInput); appRoot.addEventListener('input',handleInputAffordances); appRoot.addEventListener('input',handleSearchInput); appRoot.addEventListener('input',handleColorPickerInput); appRoot.addEventListener('pointerdown',handleSearchPointerDown); appRoot.addEventListener('pointerdown',handleColorPickerPointerDown); appRoot.addEventListener('pointermove',handleColorPickerPointerMove); appRoot.addEventListener('pointerup',handleSearchPointerEnd); appRoot.addEventListener('pointerup',handleColorPickerPointerUp); appRoot.addEventListener('pointercancel',handleSearchPointerEnd); appRoot.addEventListener('pointercancel',handleColorPickerPointerUp); appRoot.addEventListener('focusin',handleSearchFocus); appRoot.addEventListener('focusout',handleSearchFocus); appRoot.addEventListener('focusout',handleColorPickerFocusOut); appRoot.addEventListener('focusin',handleSliderFocus); appRoot.addEventListener('focusout',handleSliderFocus); appRoot.addEventListener('keydown',handleSearchKeydown); appRoot.addEventListener('keydown',handleInputKeydown); appRoot.addEventListener('keydown',handlePaginationKeydown); appRoot.addEventListener('keydown',handleTagKeydown); appRoot.addEventListener('keydown',handleTreeKeydown); appRoot.addEventListener('keydown',handlePickerKeydown); appRoot.addEventListener('keydown',handleColorPickerKeydown); appRoot.addEventListener('keydown',handleDateTimeKeydown); appRoot.addEventListener('keydown',handleUploadKeydown); appRoot.addEventListener('scroll',handleTimeWheelScroll,true); document.addEventListener('pointerdown',handleSliderPointerDown); document.addEventListener('pointerdown',handleSliderRangePointerDown); document.addEventListener('pointermove',handleSliderPointerMove); document.addEventListener('pointermove',handleSliderRangePointerMove); document.addEventListener('pointerup',handleSliderPointerUp); document.addEventListener('pointerup',handleSliderRangePointerEnd); document.addEventListener('pointercancel',handleSliderPointerUp); document.addEventListener('pointercancel',handleSliderRangePointerEnd); document.addEventListener('click',handlePickerOutsideClick); document.addEventListener('click',handleDateTimeOutsideClick); document.querySelector('#page-toc').addEventListener('click',handleTocClick); addEventListener('hashchange',render); addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#search-input').focus();}});
