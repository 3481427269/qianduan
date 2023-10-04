import request from "./request";
export default class AdministratorService{
    static async show_all(){
        return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/add",
			method: "get",
		});
    }

    static async delete_plus(
        name: string,
        id: string,
    ){
        return request({
			"headers": {
				"Content-Type": "application/json",
			},
			url:"/api/student/wall-artical/add",
			method: "delete",
            params:{
                name_ : name,
                id_ :id
            }
		});
    }
}
