import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoListChanged = new Subject<Todo[]>();

  private todoList: Todo[] = [];
  
  addTodo(value) {
    console.log("add button pressed with: " + value);
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
        const newTD = { activity: value }
        this.todoList.push(newTD);
      }
    }
    console.log(this.todoList);
    this.todoListChanged.next(this.todoList.slice());
  }

  todoEnter(value) {
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
        const newTD = { activity: value.todo }
        this.todoList.push(newTD);
      }
    }
    console.log(this.todoList);
    this.todoListChanged.next(this.todoList.slice());
  }

  editItem(index, newItemValue) {
    console.log("Editing index: " + index + " with " + newItemValue);
    this.todoList[index].activity = newItemValue;
    this.todoListChanged.next(this.todoList.slice());
  }

  editNestedItem(index, subIndex, newSubItemValue) {
    console.log("Editing nested item w/ index: " + index, subIndex + " with " + newSubItemValue);
    this.todoList[index].subItems[subIndex].subActivity = newSubItemValue;
    this.todoListChanged.next(this.todoList.slice());
  }

  deleteItem(index) {
    console.log("Deleting index " + index);
    this.todoList.splice(index, 1);
    this.todoListChanged.next(this.todoList.slice());
  }

  deleteNestedItem(index, subIndex) {
    console.log("Deleting nexted item: " + index, subIndex);
    this.todoList[index].subItems.splice(subIndex, 1);
    this.todoListChanged.next(this.todoList.slice());
  }

  
}
