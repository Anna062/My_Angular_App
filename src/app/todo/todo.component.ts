import { Component, OnInit } from '@angular/core';
import { TodoServices } from 'src/services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];

  constructor(private todoServices: TodoServices){}

  ngOnInit(){
    this.todos = this.todoServices.todos;
  }


}
