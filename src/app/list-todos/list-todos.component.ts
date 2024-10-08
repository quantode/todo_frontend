import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {TodosComponent} from "../model/todos/todos.component";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {resolve} from "node:path";
import {describe} from "node:test";
import {Observable} from "rxjs";
import {Router} from "@angular/router";



// export class Todo{
//   constructor(
//     public id: number,
//     public description: string,
//     public done:boolean,
//     public targetDate: Date
//   ) {
//   }
// }


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})



export class ListTodosComponent implements OnInit{

constructor(private TodoDataService: TodoDataService, private router: Router) {
}
  // @ts-ignore
  todos : TodosComponent[] ;

// id:number = 1;
message:string='';
  welcomeMessageService :string=''


ngOnInit() {
this.refreshTodos();

}
refreshTodos(){
  this.TodoDataService.retrieveAllTodos('shreeya').subscribe({next:(res=>{console.log(res);
      this.todos=res}),
    error:(error=> console.log(error))
  })
}

  deleteTodo(id:number){

this.TodoDataService.deleteByIdTodo('shreeya', id).subscribe((res)=>{console.log(res);
this.message = `delete sucessful ${id}`;

  this.refreshTodos();
})


  }

  updateTodo(id:number){

console.log(`updating todo ${id}`);
this.router.navigate(['todo',id]);
  }

  addTodo() {
    console.log(`updating todo `);
    this.router.navigate(['todo',-1]);


  }

}
