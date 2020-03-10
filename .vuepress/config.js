const path = require('path');
// 前端
const frontendHttp = require('./config.siderbar/frontendHttp');
const frontendReact = require('./config.siderbar/frontendReact');
const frontendDva = require('./config.siderbar/frontendDva');
const frontendVue = require('./config.siderbar/frontendVue');
const frontendWebpack = require('./config.siderbar/frontendWebpack');
const frontendNpm = require('./config.siderbar/frontendNpm');
const frontendArchitect = require('./config.siderbar/frontendArchitect');
const frontendTypescript = require('./config.siderbar/frontendTypescript');
const frontendChrome = require('./config.siderbar/frontendChrome');
const frontendCodeStyle = require('./config.siderbar/frontendCodeStyle');
// 后端
const backendNodejs = require('./config.siderbar/backendNodejs');
const backendNodejswx = require('./config.siderbar/backendNodejswx');
const interview = require('./config.siderbar/interview');
// 架构
const architectDocker = require('./config.siderbar/architectDocker');
const architectGit = require('./config.siderbar/architectGit');
const architectSetting = require('./config.siderbar/architectSetting');
const architectCli = require('./config.siderbar/architectCli');
// 应用
const app = require('./config.siderbar/app');
// 观点
const view = require('./config.siderbar/view');
const note = require('./config.siderbar/note');

module.exports = {
  // 相对路径
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  base: '/',
  title: '编程之上',
  description:
    '编程之上，致力于前后端、DevOps 等文章，使各端开发者能够突破瓶颈进一步成长。同时，也记录个人生活，不负芳华。',
  dest: 'docs',
  themeConfig: {
    // logo: '/images/logo.jpeg',
    repo: 'ruizhengyun',
    // 导航栏链接
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'HTTP', link: '/frontend/http/' },
          { text: 'React', link: '/frontend/react/' },
          { text: 'Dva', link: '/frontend/dva/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'Webpack', link: '/frontend/webpack/' },
          { text: 'Npm', link: '/frontend/npm/' },
          { text: '前端架构', link: '/frontend/architect/' },
          { text: 'Typescript', link: '/frontend/typescript/' },
          { text: 'Chrome', link: '/frontend/chrome/' },
          { text: '代码规范', link: '/frontend/code-style/' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'Node.js', link: '/backend/nodejs/' },
          { text: 'Node.js 开发微信公众号', link: '/backend/nodejswx/' }
        ]
      },
      { text: '面试', link: '/interview/' },
      {
        text: '架构',
        items: [
          { text: 'Docker', link: '/architect/docker/' },
          { text: 'Git', link: '/architect/git/' },
          { text: '配置', link: '/architect/setting/' },
          { text: 'Cli', link: '/architect/cli/' }
        ]
      },
      { text: '应用', link: '/app/' },
      { text: '看法', link: '/view/' }
    ],
    // 侧边栏
    sidebar: {
      // 前端
      '/frontend/http/': frontendHttp,
      '/frontend/react/': frontendReact,
      '/frontend/dva/': frontendDva,
      '/frontend/vue/': frontendVue,
      '/frontend/webpack/': frontendWebpack,
      '/frontend/npm/': frontendNpm,
      '/frontend/architect/': frontendArchitect,
      '/frontend/typescript/': frontendTypescript,
      '/frontend/chrome/': frontendChrome,
      '/frontend/code-style/': frontendCodeStyle,
      // 后端
      '/backend/nodejs/': backendNodejs,
      '/backend/nodejswx/': backendNodejswx,
      // 面试
      '/interview/': interview,
      // 架构
      '/architect/docker/': architectDocker,
      '/architect/setting/': architectSetting,
      '/architect/git/': architectGit,
      '/architect/cli/': architectCli,
      // 应用
      '/app/': app,
      // 看法
      '/view/': view,
      // 日记
      '/note/': note
    },
    lastUpdated: 'Last Updated' // 最后更新时间
  }
};
