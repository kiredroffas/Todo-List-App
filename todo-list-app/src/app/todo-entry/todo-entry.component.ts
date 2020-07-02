import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {
  input: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onAddTodo() {
    this.todoService.addTodo(this.input);
  }

  onTodoEnter(value) {
    this.todoService.todoEnter(value);
  }
}
