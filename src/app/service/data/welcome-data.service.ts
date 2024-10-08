import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';




export class HelloWorldObject{
  public message: string='';
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }
// private baseURL ="http://localhost:8080/hello-world-bean";
  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldObject>("http://localhost:8080/hello-world-bean");

  }
executeHelloWorldServiceWithPathVariable(name: any) {
  // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   });

    return this.httpClient.get<HelloWorldObject>(`http://localhost:8080/hello-world/${name}`,
      // {headers}

    );
}

// createBasicAuthenticationHttpHeader(){
//   let username = 'root'
//   let password = 'shreeya'
//   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//
//
//   return basicAuthHeaderString;
// }

}

