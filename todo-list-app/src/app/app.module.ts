import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoService } from './shared/todo.service';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDataStorageComponent } from './todo-data-storage/todo-data-storage.component';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoEntryComponent,
    TodoListComponent,
    TodoDataStorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
