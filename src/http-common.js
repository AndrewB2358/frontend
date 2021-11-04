import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/api/v1/users",
    headers:{
        "Content-type": "application/json"
    }
});