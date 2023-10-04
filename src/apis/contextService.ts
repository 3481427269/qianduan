import request from "./request.ts";
import {addInfo} from "../types/personalInfo.ts";

export default class contextService {
	static async add (data_: addInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/add",
			method: "post",
			data: data_
		});
	}

	static async show (
		owner_name: string
	) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/search",
			method: "get",
			params: {
				name: owner_name
			}
		});
	}
	static async delete_ (
		owner_name: string,
		id_: number,
	) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/delete",
			method: "delete",
			params: {
				name: owner_name,
				id: id_
			}
		});
	}
	static async update_ (
		owner_name: string,
		id_: number,
		updateconext: string,
	) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/updata",
			method: "put",
			params: {
				name: owner_name,
				id: id_,
			},
			data: updateconext
		});
	}
}