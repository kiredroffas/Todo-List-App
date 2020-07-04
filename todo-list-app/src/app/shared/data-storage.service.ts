import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http'
import { TodoService } from './todo.service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private todoService: TodoService) {

    }

    fetchTodoList() {
        this.http
            .get<JSON>('http://localhost:3001/todoList')
            .subscribe(todoListJson => {
                const todoArray = [];

                for(let prop in todoListJson) {
                    console.log(todoListJson[prop])
                    todoArray.push(todoListJson[prop]);
                }
                this.todoService.updateTodoList(todoArray);
            });
    }

    saveTodoList() {
        
    }
}