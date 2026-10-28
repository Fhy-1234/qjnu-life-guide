// .vitepress/theme/index.ts
import { h } from "vue";
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import { TkCataloguePage, TkArchivesPage, TkRiskLinkPage } from "vitepress-theme-teek";
import MyNoticeContent from "./components/MyNoticeContent.vue";
import NotFound from "./components/404.vue";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";
import CalendarCard from "./components/CalendarCard.vue";
import "./style.css";

export default {
  extends: Teek,
  enhanceApp({ app }) {
    app.component("TkCataloguePage", TkCataloguePage);
    app.component("TkArchivesPage", TkArchivesPage);
    app.component("TkRiskLinkPage", TkRiskLinkPage);
  },
  Layout() {
    return h(Teek.Layout, null, {
      "teek-notice-content": () => h(MyNoticeContent),
      // 2. 将 404 组件挂载到 not-found 插槽
      "not-found": () => h(NotFound),
      "teek-home-card-my-after": () => h(CalendarCard),
    });
  },
};