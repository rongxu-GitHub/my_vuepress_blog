module.exports = {
  title: '洞爷湖', // 标题
  keywords: '前端开发',
  description: '前端开发 lhs的个人博客web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
  repo: 'https://github.com/rongxu-GitHub', // GitHub地址
  base: '/',
  head: [
    ['link', {
      rel: 'shortcut icon',
      href: './img/favicon.ico'
    }]
  ],
  // lastUpdated: 'Last Updated',
  displayAllHeaders: true, // 显示所有页面的标题链接
  sidebarDepth: 1, // 提取页面深度
  plugins: [
    '@vuepress/back-to-top',
    ["vuepress-plugin-auto-sidebar", "boboidream/vuepress-bar"],
    '@vuepress/last-updated'
  ],  // back-to-top 插件
  lastUpdated: 'Last Updated',  // 最后更新时间
  nextLinks: true,  // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
  prevLinks: true,  // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
  smoothScroll: true, // 启用页面滚动效果
  markdown: {  // 启用代码块行号
    lineNumbers: true
  },
  themeConfig: {  // 主题配置
    logo: './img/favicon.ico',
    nav: [  // 导航栏
      {
        text: '万事屋',
        link: '/'
      },
      {
        text: '破万卷',
        items: [{
            text: '目录',
            link: '/破万卷/简介/'
          },
          {
            text: '前端知识',
            link: '/破万卷/前端知识/'
          },
          {
            text: '后端知识',
            link: '/破万卷/后端知识/'
          },
          {
            text: '计算机通识',
            link: '/破万卷/计算机通识/'
          },
          {
            text: '数据分析',
            link: '/破万卷/数据分析/'
          },
          {
            text: '踩坑记',
            link: '/破万卷/踩坑记/'
          }
        ]
      },
      {
        text: '觅知音',
        link: '/觅知音/'
      },
      {
        text: '寻伯乐',
        link: '/寻伯乐/'
      },
      {
        text: '知冷暖',
        link: '/知冷暖/'
      },
      {
        text: 'github',
        link: 'https://github.com/rongxu-GitHub'
      }
    ],
    // 自定义侧边栏
    // sidebar: {
    //   '/notebooks/frontend/': [{
    //     title: '前端知识',
    //     children: [
    //       {
    //         title: '简介',
    //         path: '/notebooks/frontend/'
    //       }
    //     ]
    //   }],

    //   '/notebooks/backend/': [{
    //     title: '后端知识',
    //     children: [
    //       {
    //         title: '简介',
    //         path: '/notebooks/backend/'
    //       }
    //     ]
    //   }],

    //   '/notebooks/computer/': [{
    //     title: '计算机通识',
    //     children: [
    //       {
    //         title: '简介',
    //         path: '/notebooks/computer/'
    //       }
    //     ]
    //   }],

    //   '/notebooks/experience/': [{
    //     title: '踩坑记',
    //     children: [
    //       {
    //         title: '简介',
    //         path: '/notebooks/computer/'
    //       }
    //     ]
    //   }],

    //   '/life/': [{
    //     title: '对酒当歌',
    //     children: [
    //       {
    //         title: '简介',
    //         path: '/notebooks/computer/'
    //       }
    //     ]
    //   }]
    // },

  }
}