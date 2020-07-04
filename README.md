# Todo List App
* This Angular 9 application implements a todo list that can be added to, deleted from, and edited.
    * Start the todo list application by navigating into the todo-list app folder and typing "ng serve".
* Once a task has been typed into the input bar, it can be entered into the list by clicking the + button or by simply pressing enter.
* Subtasks can be entered with single tasks by seperating input with pipes (|) in the input bar.
    * I.e. "Go to the grocery store|Get Bacon|Get eggs|Get pancakes" will create one task with three subitems.
* Once tasks in the list have been completed, they can be checked off by being clicked on, which will strikethrough and grey out the task.
* A Node.js/Express.js server is utilized to save and fetch (PUT/GET) todo list data, which is controlled by the buttons in the upper right of the app.
    * Start the Node.js server by navigating into the server folder and typing "npm start".
* Only one list can be saved to the server at a time, which is saved as a json file on the server, and will replace the current todo list when fetched.
* Server maintains the exact state of the todo list when saved, including which tasks are checked off or not.
* Both the application and the server must be running in separate terminals at the same time for everything to work properly.

# Screenshots
## Add tasks by hitting the enter button or clicking the +
![Alt text](/screenshots/1.png?raw=true "1")
![Alt text](/screenshots/2.png?raw=true "2")
![Alt text](/screenshots/3.png?raw=true "3")
## Add subitems by separating tasks/subtasks with pipes (|)
![Alt text](/screenshots/4.png?raw=true "4")
![Alt text](/screenshots/5.png?raw=true "5")
## Edit tasks by clicking the pencil icon on a task
![Alt text](/screenshots/6.png?raw=true "6")
![Alt text](/screenshots/7.png?raw=true "7")
![Alt text](/screenshots/8.png?raw=true "8")
## Click on tasks to mark them off
![Alt text](/screenshots/9.png?raw=true "9")
## Delete tasks by clicking the trashcan icon
![Alt text](/screenshots/11.png?raw=true "11")
## When 'Save Data' is clicked, the todo list is stored in a file on the server, which can be fetched later
![Alt text](/screenshots/10.png?raw=true "10")