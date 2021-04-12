module.exports = {
  title: '@songjp/dry',
  description: 'Just playing around',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Github', link: 'https://google.com' },
    ],
    sidebar: {
      '/guide/': [
        '',
      ],
      '/api/': [
          'queue',
          'stack',
          'day',
      ],
      '/changelog/': ['']
    }
  }
}