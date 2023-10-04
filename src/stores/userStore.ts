import {defineStore} from "pinia";
import {reactive} from "vue";
import {userInfo} from "../types/personalInfo.ts";

const userStore = defineStore(
	"user",
	() => {
		const userSession = reactive({
			name: "未登录",
			username: "未登录",
			sex: "未登录",
			major: "未登录",
		});

		const setUserInfo = (info: userInfo) : void => {
			userSession.name = info.name;
			userSession.username = info.username;
			userSession.sex = info.sex;
			userSession.major = info.major;
		};

		return {
			userSession,
			setUserInfo,
		};
	},
	{
		persist: true
	}
);

export default userStore;