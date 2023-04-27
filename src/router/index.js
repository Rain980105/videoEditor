import { createRouter, createWebHashHistory } from "vue-router";
import VideoEditor from "../views/VideoEditor.vue";

const routes = [
  {
    path: "/",
    name: "viedoeditor",
    component: VideoEditor
  },
  {
    path: "/test",
    name: "testview",
    // 动态按需加载组件
    component: () => import("../views/TestView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
//默认导出 router对象
export default router;
