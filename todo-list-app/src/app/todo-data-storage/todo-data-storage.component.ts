import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-todo-data-storage',
  templateUrl: './todo-data-storage.component.html',
  styleUrls: ['./todo-data-storage.component.css']
})
export class TodoDataStorageComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onFetchData() {
    this.dataStorageService.fetchTodoList();
  }

  onSaveData() {
    this.dataStorageService.saveTodoList();
  }
}
