import { h } from "vue";
import {createRouter , createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Add from "../pages/Add.vue";
import Show from "../pages/Show.vue";
import logina from "../pages/logina.vue";
// 分析原因：因为在main.ts中，注册router总比pinia先，所以不能使用到store/index.js文件中createPinia方法，只能在router文件中再createPinia一次，才能使用到pinia。
import Sign from "../pages/Sign.vue";
import Administrator from "../pages/Administrator.vue";
import community from"../pages/Community.vue"
import { ElNotification } from "element-plus";

const routes = [
	{
		path: "/" ,
		redirect: "/Login"
	},
	{
		path: "/Login" ,
		name: "Login" ,
		component: Login
	},
	{
		path: "/Sign" ,
		name: "Sign" ,
		component: Sign
	},
	{
		path: "/Add" ,
		name: "Add" ,
		component: Add
	},
	{
		path: "/Show" ,
		name: "Show" ,
		component: Show
	},
	{
		path: "/logina",
		name: "logina",
		component: logina
	},
	{
		path: "/administrator",
		name: "administrator",
		component: Administrator
	},
	{
		path:"/community",
		name:"community",
		component:community
	}
];

const router = createRouter (
	{
		history: createWebHistory() ,
		routes: routes
	}
);

// router.beforeEach((to, _, next) => {
// 	if (localStorage.getItem("login") === "false") {
// 		if (to.path === "/Login") {
// 			next();
// 		}else if (to.path === "/Sign"){
// 			next();
// 		}else if (to.path === "/logina"){
// 			next();
// 		}
// 		else {
// 			ElNotification({
// 				title: "失败",
// 				message: h("i", { style: "color: teal" }, "请您先登录！"),
// 			});
// 			next("/Login");
// 		}
// 	}
// 	else {
// 		next();
// 	}
// });


export default router;