import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { TodoServices } from 'src/services/todo.service';
import { Todo } from './models/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = new FormControl("");
  description = new FormControl("");
  todos!: Todo[];

  constructor(private todoService : TodoServices){}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  onClick() {
    
  }
  onSubmit(form: NgForm) {
    const taskTitle = this.title.value;
    const taskDesc = this.description.value;
    if(taskTitle !== null && taskDesc !== null){
      this.todos.push({
        id: this.todos.length + 1,
        title:taskTitle,
        description:taskDesc,
        isDone:false
      })
      this.title = new FormControl("");
      this.description = new FormControl("");
    }
  }

}
