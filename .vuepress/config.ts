import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { navbarConfig } from "./navbar";
import { sidebarConfig } from "./sidebar";

export default defineUserConfig({
  title: "Jankin\'s Blog",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "XieZhongCai",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: sidebarConfig,
    navbar:navbarConfig,
    /**
     * algolia 搜索功能
     */
    algolia: {
      appId: 'xxx',
      apiKey: 'xxx',
      indexName: 'xxx',
      inputSelector: '### REPLACE ME ####',
      algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
      debug: false // Set debug to true if you want to inspect the dropdown
    },
    /*主题色选择器*/
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },

    /* 参考：https://valine.js.org/quickstart.html*/
    commentConfig: {
      type: 'valine',
      options: {
        appId: '...', // your appId
        appKey: '...', // your appKey
        hideComments: true, // 全局隐藏评论，默认 false
      },
    }

    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
