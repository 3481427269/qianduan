import request from"./request";
export default class CommunityService{
    static async refer(
        name: string,
        id: string,
    ){
        return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"https://mock.apifox.cn/m1/3329798-0-default/api/student/wall-artical",
			method: "get",
            params:{
                name_ : name,
                id_ :id
            }
		});
    }
}