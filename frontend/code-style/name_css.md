# CSS命名
确保文件命名总是以字母开头而不是数字，且字母一律小写，用半角的连词线 ( - ) 分隔且不带其他标点符号

```
my-address.c[le|sa]ss
```

# ClassName命名
ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，用半角的连词线 ( - ) 分隔且不带其他标点符号

### Name 项目名或公司名
name 为 tf、ant、jd、bd、ali


### General 通常
- Button 按钮 `name-btn[-defined]`
- Icon 图标 `name-icon[-defined]`


### Layout 布局
- Layout 布局 `name-layout[-defined]`
- Grid 栅格 `name-row`、`name-col-defined`


### Navigation 导航
- Affix  `name-affix`
- Breadcrumb 面包屑 `name-breadcrumb[-defined]`
- Dropdown 下拉菜单 `name-dropdown[-defined]`
- Menu 导航菜单 `name-menu[-defined]`
- Pagination 分页 `name-pagination[-defined]`
- Steps 步骤条 `name-steps[-defined]`


### Data Entry 数据录入
- AutoComplete 自动完成 `name-auto-complete[-defined]`
- Cascader 级联选择 `name-cascader-picker[-defined]`
- Checkbox 多选框 `name-checkbox[-defined]`
- DatePicker 日期选择框 `name-calendar-date[-defined]`
- Form 表单 `name-form[-defined]`
- Input 输入框 `name-input[-defined]`
- InputNumber 数字输入框 `name-input-number[-defined]`
- Mention 提及 `name-mention[-defined]`
- Rate 评分 `name-rate[-defined]`
- Radio 单选框 `name-radio[-defined]`
- Select 选择器 `name-select[-defined]`
- Slider 滑动输入条 `name-slider[-defined]`
- Switch 开关 `name-switch[-defined]`
- TreeSelect 树选择 `name-select-tree[-defined]`
- TimePicker 时间选择框 `name-time-picker[-defined]`
- Transfer 穿梭框 `name-transfer[-defined]`
- Upload 上传 `name-upload[-defined]`

### Data Display 数据显示
- Avatar 头像 `name-avatar[-defined]`
- Badge 徽标数 `name-badge[-defined]`
- Calendar 日历 `name-calendar[-defined]`
- Card 卡片 `name-card[-defined]`
- Carousel 走马灯 `name-carousel[-defined]`time
- Collapse 折叠面板 `name-carousel[-defined]`
- List 列表 `name-list[-defined]`
- Popover 气泡卡片 `name-popover[-defined]`
- Tooltip 文字提示 `name-tooltip[-defined]`
- Table 表格 `name-table[-defined]`
- Tabs 标签页 `name-tabs[-defined]`
- Tag 标签 `name-tag[-defined]`
- Timeline 时间轴 `name-timeline[-defined]`
- Tree 树形控件 `name-tree[-defined]`


### Feedback 反馈
- Alert 警告 `name-alert[-defined]`
- Modal 对话框 `name-modal[-defined]`
- Message 全局提示 `name-message[-defined]`
- Notification 通知提醒框 `name-notification[-defined]`
- Progress 进度条 `name-progress[-defined]`
- Popconfirm 气泡确认框 `name-popover[-defined]`
- Spin 加载中 `name-spin[-defined]`


### Other 其他
- Anchor 锚点 `name-anchor[-defined]`
- BackTop 回到顶部 `name-back-top[-defined]`
- Divider 分割线 `name-divider[-defined]`
- LocaleProvider 国际化


# ClassName defined 组合

```
@{组件}-{属性}-{场景}-{功能、动作}-{状态}-{大小}-{前后缀}
```

## 关键字
- with 带有属性
- only 只有一个
- not-a/not 非
- has 含有
- is 是否


### 属性 
- count/total 数量
- brand 通用品牌色
- background 背景色
- border-color 边框色
- color 色彩。优先使用上面三种。
- border-width 边框大小
- font-size 文字大小
- radius 圆角大小
- height 容器高度
- vertical 垂直间距
- horizontal 水平间距
- dashed/ghost 虚线


### 场景位置
- text 文本
- title/subTitle 标题/子标题
- summary 摘要
- subscribe 订阅
- description 描述
- details 细节
- placeholder 占位符
- display/inline  展示/内联
- icontext 图标文字
- link 链接
- body 页面
- header 头部
- footer 底部
- sider 侧边
- menu 菜单
- extra 扩展
- group 分组
- label/tag 标签
- content 内容
- panel 面板
- overlay 浮层
- mask 遮罩
- shadow 阴影
- clear 情况
- wrapper/wrap/box 布局
- inner/outer 内部/外部
- item 模块
- top/right/bottom/left 位置
- nested 嵌套的
- dot/split 点/分割线
- video 视频
- thumbnail缩略图
- sort 排序
- rcommd/promotion 推荐/促销
- gallery 画廊
- feature 专题
- copyright 版权
- comment 评论
- bar 栏目
- arrow 箭头
- category 分类
- chart 图表


### 状态
- status 状态
- primary 主要
- success 成功
- warning 警告
- info 信息
- important 重要、强调
- error 错误
- danger 危险
- base、default 基本、默认
- disabled 失效
- fade/hidden 显示、隐藏
- show/hide 显示、隐藏
- active 当前
- fullscreen 全屏
- focused 聚焦
- loading 加载
- preview 预览


### 功能、动作
- tap 按下
- search 搜索
- editor 编辑
- open/close 打开/关闭
- entry/leave 进入/离开
- notice 通知
- handle 手柄
- save 保存


### 尺寸
- xl 超大
- lg 大
- md 中
- sm 小
- xs 超小


### 前后缀
- -suffix 后缀
- -prefix 前缀
