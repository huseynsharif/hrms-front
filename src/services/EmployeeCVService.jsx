import axios from "axios";

export class EmployeeCVService{

    getEmployeeCVs(){
        return axios.get("http://localhost:8080/api/employeeCv/getall")
    }

}