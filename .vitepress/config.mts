import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss';


const teekConfig = defineTeekConfig({
  teekHome: true,
  anchorScroll: true,
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "progress", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  sidebarTrigger: true,
  windowTransition: true,

  author: {
    name: "Fhy", // 作者名称
    link: "https://www.qjnu.edu.cn/", // 点击作者名称后跳转的链接
  },
  notice: {
    enabled: true, // 是否启用公告功能
    title: "公告", // 公告标题，支持函数式：需要和国际化搭配使用，根据不同语言环境返回不同标题
    initOpen: true,
    duration: 15000, // 弹框定时自动关闭，0 不自动消失
    mobileMinify: false, // 移动端自动最小化
    reopen: true,
    useStorage: true, // 是是否使用 localStorage 存储公告状态，如：当打开公告弹框后，下次进来则自动打开弹框
    twinkle: true, // 公告图标是否打开闪烁提示
    position: "top", // 公告弹框出现位置
    // ...
  },
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "full", // 文章封面图模式
    showCapture: false, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  vitePlugins: {
    sidebar: true,
  },
  social: [
    {
      icon: "simple-icons:qq",
      name: "编写组QQ群",
      link: "https://qm.qq.com/cgi-bin/qm/qr?k=PkQfXJs4-bcGrn9uHSYPPunwAvAj2C5t&jump_from=webapi&authKey=8HFVttCNkKAsiKR7iEC9jKHmi7NuvZD4A8qwJiNgGLmVA7lEvaywKHGT5kKUhb1N",
    },
    {
      icon: "mdi:mail",
      name: "反馈邮箱",
      link: "mailto:imfhy1234@outlook.com",
    },
  ],
  riskLink: {      
    enabled: true,
  },
  footerGroup: [
    {
      title: "友情链接",
      links: [
        { name: "学校官网", link: "https://www.qjnu.edu.cn" },
        { name: "阳光高考网", link: "https://gaokao.chsi.com.cn/sch/schoolInfoMain--schId-533.dhtml" },
        { name: "生活质量指北", link: "https://cn.colleges.chat/universities/qu-jing-shi-fan-xue-yuan/" },
        { name: "神人高校网", link: "https://srgaoxiao.com/school/%E6%9B%B2%E9%9D%96%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2" },
        { name: "曲师贴吧", link: "https://tieba.baidu.com/f?kw=%E6%9B%B2%E9%9D%96%E5%B8%88%E8%8C%83%E5%AD%A6%E9%99%A2" },
        { name: "微博超话", link: "https://weibo.com/p/1008086b72c07ba842b4a63dc5456f16afd6ab" },
      ],
    },
    {
      title: "指南",
      links: [
        { name: "开始阅读", link: "/qjnu-life-guide/updates/start" },
        { name: "共同创作", link: "/qjnu-life-guide/updates/join-us" },
        { name: "更新日志", link: "/qjnu-life-guide/updates/default" },
        { name: "归档", link: "/qjnu-life-guide/archives" },
        { name: "关于指南", link: "/qjnu-life-guide/updates/about" },
      ],
    },
  ],
  articleShare: {
    enabled: true, 
  },
  banner: {
    enabled: true,
    name: "曲靖师范学院生活指南",
    bgStyle: "fullImg", 
    imgSrc: ["https://www.qjnu.edu.cn/virtual_attach_file.vsb?afc=5nzCCZM8QkLRC8LQ4TfMlr7Uz98M49qsL7-PUNMknN7aLR70gihFp2hmCIa0LkhkUShkokh2U4LDU8-4UmGsnmL8L4NZozrkUzA2oz6knzWFM8-anNl4nNMFLznfLRW2gtXaQ4Oeo4xEqdw0qIbtpYyxLYyxLYbw62p8c&oid=2051321614&e=.jpg", "https://www.qjnu.edu.cn/virtual_attach_file.vsb?afc=5UNlCYLN-aU4GbLQmM2Lml8nzlYL7UqbnmlbMR9sMzL4MmU0gihFp2hmCIa0nSh2UYhkL1ysLNUin7L8nm-so7CaLRU8LR6RnzfVUNLDnRMFM7lanlL8M4VFMRU4LzGJqjfjo4OeosXw_1hXptQ0gY84gY84gtA8pUpcc&oid=2051321614&e=.jpg","https://www.qjnu.edu.cn/virtual_attach_file.vsb?afc=5nzrCRLz98ozA7nQmvsMmV2L8-sLz-qaLmCanRNDM4NaL4L0gihFp2hmCIa0n1hRnkhVM1y8LzL8o7CiUN-YolQRozQ2ozLaMNVfL7lZLRnFL8M2o7-DLmQFLzl8nRCigtXaQ4Oeo4xEqdw0qIbtpYyxLYyxLYbw62p8c&oid=2051321614&e=.jpg","https://zs.qjnu.edu.cn/static/images/ban01.jpg","https://www.qjnu.edu.cn/virtual_attach_file.vsb?afc=5M7CC8MmGDoR9ZMQll4o7WknRGsM77q4MlQ2LllZM7Q7o7-0gihFp2hmCIa0n1yPUSh7nkyZUzlbolCaU4TfMRQfU46VLmNsnRAfMNUPMmQFolCaUmTfMR6FLz-DnRW7gtXaQ4Oeo4xEqdw0qIbtpYyxLYyxLYbw62p8c&oid=2051321614&e=.jpg",],
    imgInterval: 5500, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: true, // body 背景图是否随机切换，为 false 时按顺序切换
    mask: true,
    maskBg: "rgba(0, 0, 0, 0.4)",
    textColor: "#ffffff",
    descStyle: "switch", 
    description: [
      "新生攻略、校园地图、生活服务",
      "一站式了解曲靖师范学院"
    ],
  },
  articleTopTip: (frontmatter, localeIndex, page) => {
    const tip: Record<string, string> = {
      type: "warning",
      text: "文章较长时间未更新，内容可能已经过时，阅读注意甄别。",
    };

    // 大于半年，添加提示
    const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
    if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip;
  },
  comment: {
    provider: "giscus",
    options: {
      repo: "Fhy-1234/qjnu-life-guide",
      repoId: "R_kgDOVaOM4A",
      category: "Show and tell",
      categoryId: "DIC_kwDOVaOM4M4DJ1sO",
    },
  },
});

const RSS: RSSOptions = {
  title: "曲靖师范学院生活指南",
  baseUrl: "https://fhy-1234.github.io/",
  copyright: "Copyright (c) 2026, CCBY-NC-SA 4.0",
};

export default defineConfig({
  extends: teekConfig,
  base: "/qjnu-life-guide/",
  title: "曲靖师范学院生活指南",
  description: "一个关于曲靖师范学院高校的生活百科。",
  lastUpdated: true,
  vite: { 
    plugins: [RssPlugin(RSS)],
  },
  themeConfig: {
    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3], 
      label: '页面导航',
    },
    editLink: {
      pattern: 'https://github.com/Fhy-1234/qjnu-life-guide/edit/main/:path',
      text: '在 GitHub 上编辑此页面', // 自定义显示文字
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', 
        timeStyle: 'short', 
      },
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/updates/start.html" },
      { text: "共同创作", link: "/updates/join-us.html" },
      { text: "整活文章", link: "/funny/start.html" },
      { text: "归档", link: "/archives" },
      { text: "关于", link: "/updates/about" },
      { text: "学校官网", link: "https://www.qjnu.edu.cn" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Fhy-1234/qjnu-life-guide" },
    ],
  },
});