import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { Subscription } from 'rxjs';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
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

  onDeleteItem(index) {
    this.todoService.deleteItem(index);
  }

  onDeleteNestedItem(index, subIndex) {
    this.todoService.deleteNestedItem(index, subIndex);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
