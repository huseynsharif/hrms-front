import axios from "axios";

export class EmployerService{

    add(employer){
        return axios.post("http://localhost:8080/api/employers/add", employer)
     
    }

}   