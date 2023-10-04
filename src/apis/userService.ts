import request from "./request";
import {signInfo} from "../types/personalInfo.ts";

export default class userService {
	static async login(data_: {
		username: string,
		password: string
		key: string,
	}) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/api/user/login",
			data: data_
		});
	}

	static async sign(data_: signInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/api/user/reg",
			data: data_
		});
	};
}