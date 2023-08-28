import axios from "axios";

export class EmployeeService{

    add(employee){
        return axios.post("http://localhost:8080/api/employees/add", employee)
     
    }

}   