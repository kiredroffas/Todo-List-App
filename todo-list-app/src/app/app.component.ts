import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './shared/todo.model';
import { Subscription } from 'rxjs';
import { TodoService } from './shared/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  todoList: Todo[] = [];
  subscription: Subscription;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.subscription = this.todoService.todoListChanged.subscribe(
      (todoList: Todo[]) => {
        this.todoList = todoList;
      }
    )
  }

  onAddTodo(value) {
    this.todoService.addTodo(value);
  }

  onDeleteItem(index) {
    this.todoService.deleteItem(index);
  }

  onDeleteNestedItem(index, subIndex) {
    this.todoService.deleteNestedItem(index, subIndex);
  }

  onTodoEnter(value) {
    this.todoService.todoEnter(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
