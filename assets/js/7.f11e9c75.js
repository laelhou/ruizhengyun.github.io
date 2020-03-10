(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(t,s,v){t.exports=v.p+"assets/img/ssh-keys.2e6d508d.png"},215:function(t,s,v){t.exports=v.p+"assets/img/ssh.t.9295eecf.png"},216:function(t,s,v){t.exports=v.p+"assets/img/repo.button.168aa743.png"},217:function(t,s,v){t.exports=v.p+"assets/img/repo.create.6a3781c9.png"},218:function(t,s,v){t.exports=v.p+"assets/img/repo.done.9b737fbc.png"},219:function(t,s,v){t.exports=v.p+"assets/img/github.tools.137243e7.png"},220:function(t,s,v){t.exports=v.p+"assets/img/github.pages.setting.dd554138.png"},221:function(t,s,v){t.exports=v.p+"assets/img/github.782b1994.png"},222:function(t,s,v){t.exports=v.p+"assets/img/github.api.79b34cd6.png"},387:function(t,s,v){"use strict";v.r(s);var _=v(28),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"github-介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#github-介绍"}},[t._v("#")]),t._v(" Github 介绍")]),t._v(" "),_("h2",{attrs:{id:"什么是-github"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-github"}},[t._v("#")]),t._v(" 什么是 Github")]),t._v(" "),_("p",[t._v("GitHub 是为开发者提供Git仓库的托管服务，一个让开发者与朋友、同事、同学及陌生人共享代码的场所。")]),t._v(" "),_("h2",{attrs:{id:"github-带来的变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#github-带来的变化"}},[t._v("#")]),t._v(" Github 带来的变化")]),t._v(" "),_("ul",[_("li",[t._v("协作形式变化\n"),_("ul",[_("li",[t._v("开发者间的化学作用PR（pull Request）")]),t._v(" "),_("li",[t._v("@用户进行评论")]),t._v(" "),_("li",[t._v("GFM（Github Flavored Markdown）语法")])])]),t._v(" "),_("li",[t._v("看到企业内部其他团队的软件\n"),_("ul",[_("li",[t._v("watch 仓库便能实时看到新功能和bug修正信息")]),t._v(" "),_("li",[t._v("可以参与，pr代码")])])]),t._v(" "),_("li",[t._v("与开源软件相同的开发模式")])]),t._v(" "),_("h2",{attrs:{id:"社会化编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#社会化编程"}},[t._v("#")]),t._v(" 社会化编程")]),t._v(" "),_("p",[t._v("Social coding，这一形式影响了全世界的程序员，试一次软件开发革命。在 Github 出现之前，软件开发只有小部分人拥有更改源代码的权利。现在，所有人都可以平等地拥有这种权利。")]),t._v(" "),_("h2",{attrs:{id:"账户创建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#账户创建"}},[t._v("#")]),t._v(" 账户创建")]),t._v(" "),_("h3",{attrs:{id:"设置-ssh-key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置-ssh-key"}},[t._v("#")]),t._v(" 设置 SSH Key")]),t._v(" "),_("p",[t._v("Github 上的仓库连接是使用 SSH 的公开密钥认证方式进行的。这也是克隆项目如果用 HTTP 没什么问题，但是用 ssh，如果你的 key 没有添加到 github 账户中就会报错。那如何生成 key 并添加到账户呢？")]),t._v(" "),_("p",[t._v("一路回车到底")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("ssh"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keygen "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t rsa "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" xxx@"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("163.")]),t._v("com\n")])])]),_("h3",{attrs:{id:"添加公钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加公钥"}},[t._v("#")]),t._v(" 添加公钥")]),t._v(" "),_("p",[t._v("1.查看公钥")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("cat "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pub\n")])])]),_("p",[t._v("2.添加到 github 账户中")]),t._v(" "),_("p",[_("img",{attrs:{src:v(214),alt:"添加到 github 账户中"}})]),t._v(" "),_("p",[t._v("3.检测是否成功")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("ssh "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" git@github"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])])]),_("p",[_("img",{attrs:{src:v(215),alt:"检测是否成功"}})]),t._v(" "),_("h2",{attrs:{id:"仓库的创建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#仓库的创建"}},[t._v("#")]),t._v(" 仓库的创建")]),t._v(" "),_("p",[t._v("1.创建")]),t._v(" "),_("p",[_("img",{attrs:{src:v(216),alt:"仓库的创建"}})]),t._v(" "),_("p",[t._v("2.表单填写")]),t._v(" "),_("p",[_("img",{attrs:{src:v(217),alt:"表单填写"}})]),t._v(" "),_("ul",[_("li",[t._v("Repository name")]),t._v(" "),_("li",[t._v("Description")]),t._v(" "),_("li",[t._v("Public/Private")]),t._v(" "),_("li",[t._v("Initialize this repository with a README（建议不勾选，手动push）")]),t._v(" "),_("li",[t._v("Add .gitignore，把不需要在 Git 仓库中管理的文件省略，比如 "),_("code",[t._v("node_modules")])]),t._v(" "),_("li",[t._v("Add a license，许可协议文件")])]),t._v(" "),_("p",[t._v("2.完成后")]),t._v(" "),_("p",[_("img",{attrs:{src:v(218),alt:"完成后"}})]),t._v(" "),_("h2",{attrs:{id:"键盘快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键盘快捷键"}},[t._v("#")]),t._v(" 键盘快捷键")]),t._v(" "),_("p",[t._v("各个页面按下 "),_("code",[t._v("shift + /")]),t._v(" 都可以打开键盘快捷键一览表。")]),t._v(" "),_("h2",{attrs:{id:"工具栏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工具栏"}},[t._v("#")]),t._v(" 工具栏")]),t._v(" "),_("p",[_("img",{attrs:{src:v(219),alt:"工具栏"}})]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("LOGO")]),t._v("，点击GitHub的LOGO就会进入控制面板。")]),t._v(" "),_("li",[_("strong",[t._v("Search（搜索）")]),t._v("，输入想找的用户或代码片段，就可以搜索到与之相关的信息")]),t._v(" "),_("li",[_("strong",[t._v("Pull requests（拉取请求）")]),t._v("，这里查看用户仓库最新的推送请求信息。")]),t._v(" "),_("li",[_("strong",[t._v("Issues（问题）")]),t._v("，查看用户最新的问题推送信息。")]),t._v(" "),_("li",[_("strong",[t._v("Marketplace（市场）")]),t._v("，提供最新的软件，是代码软件集市。")]),t._v(" "),_("li",[_("strong",[t._v("Explore（探索）")]),t._v("，从各个角度介绍GitHub上的热门软件。")]),t._v(" "),_("li",[_("strong",[t._v("+")]),t._v("，创建新的仓库、旧仓库搬家、管理发布一些没有必要保存在仓库中的代码、登录组织和项目（绑定仓库）")]),t._v(" "),_("li",[_("strong",[t._v("头像、用户")]),t._v("，查看用户资料、仓库、项目、关注仓库、Gists、帮助、设置、退出登录")])]),t._v(" "),_("h2",{attrs:{id:"控制面板"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#控制面板"}},[t._v("#")]),t._v(" 控制面板")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("News Feed - Recent activity and All activity（新闻提要）")]),t._v("，显示当前已 Follow 的用户和已 Watch 的项目的活动信息，可以在这里查看最新动向。")]),t._v(" "),_("li",[_("strong",[t._v("Your repositories")]),t._v("，按更新时间顺序显示用户的仓库。标有钥匙图案的是非公开仓库，标有类似字母Y图案的是用户Fork过的仓库。")])]),t._v(" "),_("h2",{attrs:{id:"个人信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#个人信息"}},[t._v("#")]),t._v(" 个人信息")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("访问地址")]),t._v("，"),_("code",[t._v("https://github.com/用户名")])]),t._v(" "),_("li",[_("strong",[t._v("用户信息")]),t._v("，显示注册用户的基本信息，包括姓名、所属公司、邮箱地址、已加入的 Organization 等。如果对该用户感兴趣，可以点击页面下方的Follow按钮。这样一来，这个人在 GitHub 上的活动都会显示在您的 News Feed 中。")]),t._v(" "),_("li",[_("strong",[t._v("Overview（概述）")]),t._v("，展示固定的仓库、贡献活跃度和贡献活动。")]),t._v(" "),_("li",[_("strong",[t._v("Repositories（所有仓库）")]),t._v("，显示该用户公开的仓库，仓库名称、简要说明、使用的语言、最终更新日期都会出现在列表中。星星图案旁边的数字表示给这个仓库添加 Star 的人数，旁边是 Fork 数。")]),t._v(" "),_("li",[_("strong",[t._v("Projects（所有项目）")]),t._v("，项目可以和仓库绑定，提供看板等。")]),t._v(" "),_("li",[_("strong",[t._v("Stars（所有仓库的收藏、点赞数）")])]),t._v(" "),_("li",[_("strong",[t._v("Followers（用户被关注的）")])]),t._v(" "),_("li",[_("strong",[t._v("Following（用户关注的）")])])]),t._v(" "),_("h2",{attrs:{id:"仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[t._v("#")]),t._v(" 仓库")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("地址形式")]),t._v("，"),_("code",[t._v("https://github.com/用户名/仓库名")])]),t._v(" "),_("li",[t._v("Used by/Watch/Star/Fork")]),t._v(" "),_("li",[_("strong",[t._v("Code（文件列表）")]),t._v("，仓库名下方是该仓库的简单说明和URL。\n"),_("ul",[_("li",[_("strong",[t._v("commits")]),t._v("，查看当前分支的提交历史")]),t._v(" "),_("li",[_("strong",[t._v("branches")]),t._v("，查看仓库的分支列表")]),t._v(" "),_("li",[_("strong",[t._v("packages")])]),t._v(" "),_("li",[_("strong",[t._v("releases")]),t._v("，显示仓库的标签（Tag）列表。同时可以将标签加入时的文件以归档形式（ZIP、tar.gz）下载到本地。软件在版本升级时一般都会打标签，如果需要特别版本的文件，可以从这里寻找 "),_("code",[t._v("git show tagName")]),t._v("，然后可以根据 commitId 回滚")]),t._v(" "),_("li",[_("strong",[t._v("contributors")]),t._v("，显示对该仓库进行过提交的程序员名单。如果您也对该仓库发送过Pull Request并被采纳，那么在这里就能找到自己的名字。左边的数字是程序员的人数。")]),t._v(" "),_("li",[_("strong",[t._v("MIT")]),t._v("，协议")])])]),t._v(" "),_("li",[_("strong",[t._v("Issues")]),t._v("，用于 BUG 报告、功能添加、方向性讨论等，将这些以 Issue 形式进行管理。Pull Requests 时也会创建 Issue。旁边显示的数字是当前处于 Open 状态的Issue 数。")]),t._v(" "),_("li",[_("strong",[t._v("Pull Requests")]),t._v("，在 Pull Requests 中可以列表查看并管理 Pull Request。代码的更改和讨论都可以在这里进行。旁边显示的数字表示尚未 Close 的 Pull Request 的数量。")]),t._v(" "),_("li",[_("strong",[t._v("Actions")]),t._v("，GitHub 的持续集成服务")]),t._v(" "),_("li",[_("strong",[t._v("Projects")]),t._v("，")]),t._v(" "),_("li",[_("strong",[t._v("Wiki")]),t._v("，是一种比HTML语法更简单的页面描述功能。常用语记录开发者之间共享的信息或软件文档。数字表示当前 Wiki 的页面数量。")]),t._v(" "),_("li",[_("strong",[t._v("Security")]),t._v("，")]),t._v(" "),_("li",[_("strong",[t._v("Insights")]),t._v("，洞察信息\n"),_("ul",[_("li",[_("strong",[t._v("Pulse（脉率）")]),t._v("：显示该仓库最近的活动信息。该仓库中的软件是 无人问津，还是在火热的开发之中，从这里可以一目了然。")]),t._v(" "),_("li",[_("strong",[t._v("Graphs（图表）")]),t._v("：以图表形式显示该仓库的各项指标。让用户轻松了解该仓库的活动倾向。")])])]),t._v(" "),_("li",[_("strong",[t._v("Setting")]),t._v("，更改当前仓库的设置。用户必须拥有更改设置的权限才能看到这个菜单。")])]),t._v(" "),_("h2",{attrs:{id:"文件的相关操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件的相关操作"}},[t._v("#")]),t._v(" 文件的相关操作")]),t._v(" "),_("p",[t._v("点开文件后会显示出文件的内容，同时右上角会显示用于该文件的菜单。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Edit")]),t._v("，可以对文件内容进行编辑并提交。")]),t._v(" "),_("li",[_("strong",[t._v("Raw")]),t._v("，可以直接在浏览器中显示该文件的内容。使用这个URL，就能通过HTTPS协议获取该文件。")]),t._v(" "),_("li",[_("strong",[t._v("Blame")]),t._v("，能够按行显示最新提交的信息。")]),t._v(" "),_("li",[_("strong",[t._v("History")]),t._v("，可以查看该文件的历史记录。")]),t._v(" "),_("li",[_("strong",[t._v("Delete")]),t._v("，可以删除这个文件。")])]),t._v(" "),_("p",[t._v("文件内容的左侧会显示该文件的行号。假如我们点击"),_("strong",[t._v("第 10 行的行号")]),t._v("，这一行就会被高亮标记为黄色，同时URL末尾会自动添加 "),_("code",[t._v("#L10")]),t._v("。使用这儿 URL，程序员们在交流时，就可以将讨论明确指向某一行。另外，如果将 "),_("code",[t._v("#L10")]),t._v(" 改为 "),_("code",[t._v("#L10-L20")]),t._v("（使用 "),_("code",[t._v("shift + 单击行号 20")]),t._v(" 也可以），则会标记该文件的"),_("strong",[t._v("第 10 到 20 行")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"查看差别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看差别"}},[t._v("#")]),t._v(" 查看差别")]),t._v(" "),_("p",[t._v("在GitHub上，直接修改URL就可以让用户以多种形式查看差别")]),t._v(" "),_("ul",[_("li",[t._v("查看分支间的差别，"),_("code",[t._v("https://github.com/umijs/umi/compare/master...2.5.x")]),t._v("，这样，就可以查看两个分支间的差别了。")]),t._v(" "),_("li",[t._v("查看与几天前的差别，"),_("code",[t._v("https://github.com/umijs/umi/compare/master@{90.day.ago}...master")]),t._v("，指定期间可以使用以上四个时间单位。如果差别过大则不会列出所有提交，只显示最近的比部分。\n"),_("ul",[_("li",[t._v("day")]),t._v(" "),_("li",[t._v("week")]),t._v(" "),_("li",[t._v("month")]),t._v(" "),_("li",[t._v("year")])])]),t._v(" "),_("li",[t._v("查看与指定日期之间的差别，"),_("code",[t._v("https://github.com/umijs/umi/compare/master@{2019-10-1}...master")]),t._v("，查看 master 分支2019年10月1日与现在的区别")])]),t._v(" "),_("blockquote",[_("p",[t._v("由于可以从多种角度查看差别，所以GitHub也称得上是一个优秀的源代码查看器。")])]),t._v(" "),_("h2",{attrs:{id:"issue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#issue"}},[t._v("#")]),t._v(" Issue")]),t._v(" "),_("p",[t._v("在软件开发过程中，开发者为了跟踪BUG及进行软件相关讨论，进而方便管理，创建了Issue。管理Issue的系统成为BTS（Bug Tracking System，BUG跟踪系统）。\nGitHub也为自身加入了BTS功能。在GitHub上，可以将它作为软件开发者之间的交流工具，多多加以利用。一下几种情况可以使用这个功能：")]),t._v(" "),_("ul",[_("li",[t._v("发现软件的BUG并报告")]),t._v(" "),_("li",[t._v("有事想向作者咨询、探讨")]),t._v(" "),_("li",[t._v("事先列出今后准备实施的任务")]),t._v(" "),_("li",[t._v("博客文章")])]),t._v(" "),_("p",[t._v("Issue 除 BUG 管理之外还有许多其他用途。在软件开发者的圈子中，将 Issue 用于多种用途的情况已经司空见惯。")]),t._v(" "),_("h2",{attrs:{id:"setting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#setting"}},[t._v("#")]),t._v(" Setting")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("GitHub Pages")]),t._v("，GitHub有一个名为 GitHub Pages 的仓库，用户可以利用该仓库中的资料创建 Web 页，用来发布仓库中软件的相关信息。如果已经创建国 GitHub Pages，则会显示相应 URL。")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(220),alt:"Setting"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(221),alt:"Setting2"}})]),t._v(" "),_("h2",{attrs:{id:"其他功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他功能"}},[t._v("#")]),t._v(" 其他功能")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://developer.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub API"),_("OutboundLink")],1),t._v("，比如我的博客就是用 github api 读取 github issues 列表和详情")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(222),alt:"其他功能"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);