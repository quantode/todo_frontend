import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TodosComponent} from "../model/todos/todos.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  id:number=0;


  todo : TodosComponent | undefined;
  constructor(private TodoDataService:TodoDataService, private route:ActivatedRoute, private router: Router) {
  }

 ngOnInit() {
   this.id = this.route.snapshot.params['id'];
   this.todo = new TodosComponent()

   if (this.id != -1) {
     this.TodoDataService.retrieveTodoById('shreeya', this.id).subscribe({
       next: (res) => {
         console.log(res);
// @ts-ignore
         this.todo = res;
         console.log(' this is response of this.todo', this.todo);

       }
     })

   }

 }



 saveTodo(){
if(this.id==-1){
  this.TodoDataService.postTodo('shreeya',this.todo).subscribe({next:(res)=>{console.log('response',res);

  this.router.navigate(['todolist']);

  }})
}

else{
  this.TodoDataService.updateTodo('shreeya', this.id,this.todo )
    .subscribe({next:(res)=>{console.log('response',res);
        this.router.navigate(['todolist']);
      },

      error:(error=> console.log('error updating todo',error))
    })

}


    }




}
