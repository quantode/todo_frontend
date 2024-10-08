import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {
errorMessage='An error occured';
  constructor() {
  }
  ngOnInit() {
  }
}
