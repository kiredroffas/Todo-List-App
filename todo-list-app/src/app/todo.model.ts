export class Todo {
    constructor(public activity: string, public subItems?:[{subActivity: string}]) {

    }
}