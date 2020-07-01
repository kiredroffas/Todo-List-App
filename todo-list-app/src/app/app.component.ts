import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Todo[] = [];

  addTodo(value) {
    if(value !== "") {
      this.todoList.push(value);
    }
    console.log(this.todoList);
  }

  deleteItem(index) {
    console.log("Deleting index " + index);
    this.todoList.splice(index, 1);
  }

  todoSubmit(value: any) {
    console.log("enter pressed with: " + value.todo);
    if(value !== "") {
      this.todoList.push(value.todo);
    }
  }
}
