export class TodoController {
  static $inject: string[] = ['TodoService'];
  todos: TodoItem[];

  constructor(private todoService: TodoService) { }

  $onInit() {
    this.newTodo = new TodoItem('', false);
    this.todos = [];
    this.todoService.getTodos().then(response => this.todos = response);
  }
  addTodo({ todo }) {
    if (!todo) return;
    this.todos.unshift(todo);
    this.newTodo = new TodoItem('', false);
  }
}
