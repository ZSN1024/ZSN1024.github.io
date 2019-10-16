module.exports = {
  title: '个人主页',
  description: '郑少农的博客',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博文',
        items: [
          { text: 'Android', link: '/blog/android/' },
          { text: 'ios', link: '/blog/ios/' },
          { text: 'Web', link: '/blog/web/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/ZSN1024/zsn1024.github.io' },
    ],
    sidebar: {
      '/android/': [
        "android1",
      ],
      "/ios/":[
        "ios1",
      ],
      "/web/":[
        "web1",
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    serviceWorker: true
  }
}
