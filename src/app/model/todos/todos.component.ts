import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{


  public id :number =0;
  public description:String='';
  public done:boolean = false;
  public targetDate :Date = new Date();
  ngOnInit() {
  }


}
