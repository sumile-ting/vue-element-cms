import Vue from 'vue'
import VueRouter from "vue-router";
import Index from './../view/index/index';
import PublishView from './../view/publish/publish';

Vue.use(VueRouter);

// 2. 定义路由
const routes = [
    {
        path: '/',
        redirect: () => {
          let path = '/index';
          return {path: path};
        },
    }, {
        path: '/index',
        name: 'index',
        component: Index
    }, {
        path: '/publish',
        name: "publish",
        component: PublishView
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;