import axios from "axios";

export class BaseUserService{

    findByEmail(email, password){
        return axios.get(`http://localhost:8080/api/users/findbyemail?email=${email}&password=${password}`)
    }

}