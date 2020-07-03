export class Todo {
    constructor(public activity: string, public completed: boolean, public subItems?:[{subActivity: string, completed: boolean}]) {

    }
}