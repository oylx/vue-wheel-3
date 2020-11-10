import Home from "./views/home.vue";
import Doc from "./views/doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});

router.afterEach((before, to) => {
  console.log(before, to);
});
