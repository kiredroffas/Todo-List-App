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
  editMode: boolean = false;
  isEditorVisible: any[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.subscription = this.todoService.todoListChanged.subscribe(
      (todoList: Todo[]) => {
        this.todoList = todoList;
        console.log("TodoList:");
        console.log(todoList);
        console.log("JSON todolist:");
        console.log(JSON.stringify({...todoList}));

        this.clearEditorVisable();
        console.log("Editor:");
        console.log(this.isEditorVisible);
      }
    )
  }

  clearEditorVisable() {
    this.isEditorVisible = [];
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].subItems) {
        const subItemArr = [];
        for (let item in this.todoList[i].subItems) {
          subItemArr.push(false);
        }
        this.isEditorVisible.push({ item: false, subItems: subItemArr });
      }
      else {
        this.isEditorVisible.push({ item: false });
      }
    }
  }

  onCompleteItem(index) {
    this.todoService.toggleCompleteItem(index);
  }

  onCompleteSubItem(index, subIndex) {
    this.todoService.toggleCompleteSubItem(index, subIndex);
  }

  onDeleteItem(index) {
    this.todoService.deleteItem(index);
  }

  onDeleteNestedItem(index, subIndex) {
    this.todoService.deleteNestedItem(index, subIndex);
  }

  toggleEditMode(i, j?) {
    this.clearEditorVisable();
    if(j || j === 0) {
      this.isEditorVisible[i].subItems[j] = true;
    }
    else {
      this.isEditorVisible[i].item = true;
    }
    this.editMode = true;
    // if(this.editMode !== true) {
    //   this.todoService.updateTodoList();
    // }
  }

  cancelEditMode() {
    this.editMode = false;
    this.todoService.updateTodoList();
  }

  onEditItem(index: number, newItemValue: string) {
    this.editMode = !this.editMode;
    this.todoService.editItem(index, newItemValue);
  }

  onEditNestedItem(index: number, subIndex: number, newSubItemValue: string) {
    this.editMode = !this.editMode;
    this.todoService.editNestedItem(index, subIndex, newSubItemValue);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
