module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '44de0eba503049aa87300a280ee6a13b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'vant 的技术博客',
  domain: 'vant.asia',
  author: 'vant & QA',

  // open graph metadata (optional)
  description: 'vant: 专注测试技术方向，个人认知体系成长',
  socialImageTitle: 'vant',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: 'G2Bent',
  // wechatPublicName: 'vant',
  // wechatPublicURL: 'https://mp.weixin.qq.com/s?__biz=MzkxMzIyOTI1Mg==&mid=2247486027&idx=1&sn=2840f0b8cfdc982b9095dd18ec9892e5',
  notionPublic: 'https://www.notion.so/vant123/Vant-44de0eba503049aa87300a280ee6a13b',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'G2Bent/awesome-nextjs-notion-blog',
  utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // set null to remove from year
  copyRightFromYear: 2019,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
  },
  showPageAsideSocials: true,
  footCounterList: [
    '6a76fdd9ec6d4ae2855aa790d620eec4',
    '651765de-6a0f-4a72-9f91-86f26381aef3'
  ]
}
