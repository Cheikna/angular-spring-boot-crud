import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8090/api";
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
   }

   getUsers(){
     return this.http.get(this.baseUrl + "/users", {headers: this.headers});
   }

   getUser(id : number){
    return this.http.get(this.baseUrl + `/user/${id}`, {headers: this.headers});
  }

  
  deleteUser(id : number){
    return this.http.delete(this.baseUrl + `/user/${id}`, {headers: this.headers});
  }
  
  createUser(user: User){
    return this.http.post(this.baseUrl + "/user", JSON.stringify(user), {headers: this.headers});
  }

  updateUser(user: User){
    return this.http.put(this.baseUrl + "/user", JSON.stringify(user), {headers: this.headers});
  }
}
