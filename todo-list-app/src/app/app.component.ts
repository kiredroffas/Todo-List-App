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
    console.log("add button pressed with: " + value.todo);
    if(value !== "") {
      const arr = value.split("|");
      const first = arr[0];

      const subActivites: any = [];
      if(arr.length > 1) {
        for(let i=1; i < arr.length; i++) {
          subActivites.push({subActivity: arr[i]})
          
        }
        const newTD = { activity: first, subItems: subActivites }
        this.todoList.push(newTD);
      }
      else {
        const newTD = { activity: value}
        this.todoList.push(newTD);
      }
    }
    console.log(this.todoList);
  }

  deleteItem(index) {
    console.log("Deleting index " + index);
    this.todoList.splice(index, 1);
  }

  deleteNestedItem(index, subIndex) {
    console.log("Deleting nexted item: " + index, subIndex);
    this.todoList[index].subItems.splice(subIndex, 1);
  }

  todoSubmit(value) {
    console.log("enter pressed with: " + value.todo);
    if(value !== "") {
      const arr = value.todo.split("|");
      const first = arr[0];

      const subActivites: any = [];
      if(arr.length > 1) {
        for(let i=1; i < arr.length; i++) {
          subActivites.push({subActivity: arr[i]})
          
        }
        const newTD = { activity: first, subItems: subActivites }
        this.todoList.push(newTD);
      }
      else {
        const newTD = { activity: value.todo}
        this.todoList.push(newTD);
      }
    }
    console.log(this.todoList);
  }
}
