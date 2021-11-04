import http from "../http-common.js";

class userDataService{
    getAll(){
        return http.get("/user")
    }
}

export default new userDataService();