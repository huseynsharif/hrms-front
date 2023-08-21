import axios from "axios";

export class EmployeeCvPhotoService{

    getPhotoById(id){
        return axios.get("http://localhost:8080/api/employeeCvPhoto/findbyid?id=" + id)
    }

    getPhotos(){
        return axios.get("http://localhost:8080/api/employeeCvPhoto/getall")
    }
}