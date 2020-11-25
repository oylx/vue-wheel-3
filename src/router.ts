import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./views/Markdown.vue";
import { h } from "vue";
const history = createWebHashHistory();
const x = (key) =>
  h(Markdown, {
    src: `../markdown/${key}.md`,
    key,
  });
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect:"/doc/intro" },
        { path: "intro", component: x("intro") },
        { path: "get-started", component: x("get-started") },
        { path: "install", component: x("install") },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});
