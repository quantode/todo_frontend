import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {API_URL} from "../app.constants";
export const AUTHENTICATED_USER = 'authenticateUser'
export const TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(private httpClient: HttpClient) {
  }

ExecuteJWTAuthentication (username: string, password: string) {
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//
//
// let headers = new HttpHeaders({
//   Authorization: basicAuthHeaderString
// })


return this.httpClient.post<any>(`${API_URL}/authenticate`,{username, password}).pipe(
  map(

    res=>{
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      sessionStorage.setItem(TOKEN, `Bearer ${res.token}`);
      return res;
    }
  )
);


}

getAuthenticateUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
}


  getAuthenticateToken(){
    if(this.getAuthenticateUser()) {
      return sessionStorage.getItem(TOKEN);
    }
return null;

}



  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

}
export class AuthenticationBean{
  constructor(public message:string){

  }


}
