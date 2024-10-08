import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodosComponent} from "../../model/todos/todos.component";
import {API_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

retrieveAllTodos( username:any):Observable<TodosComponent[]>{
    return this.httpClient.get<TodosComponent[]>(`${API_URL}/jpa/users/${username}/todos`);
}

deleteByIdTodo(username:any, id:number):Observable<TodosComponent[]> {
    return this.httpClient.delete<TodosComponent[]>(`${API_URL}/jpa/users/${username}/todos/${id}`);
}

retrieveTodoById(username:string, id:number):Observable<TodosComponent[]> {
    return this.httpClient.get<TodosComponent[]>(`${API_URL}/jpa/users/${username}/todos/${id}`);
}

updateTodo(username:string, id:number , todo:any ):Observable<TodosComponent>{
    return this.httpClient.put<TodosComponent>(`${API_URL}/jpa/users/${username}/todos/${id}`, todo);
}

postTodo(username:string, todo:any  ):Observable<TodosComponent> {
    return this.httpClient.post<TodosComponent>(`${API_URL}/users/${username}/todos`, todo);
}


}
