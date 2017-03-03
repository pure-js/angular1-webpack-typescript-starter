import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoItem } from '../common/model/todo';

export const TodoComponent: angular.IComponentOptions  = {
  controller: TodoController,
  template: `
    <div class="todo">
      <todo-form
        todo="$ctrl.newTodo"
        on-add-todo="$ctrl.addTodo($event);">
      <todo-list
        todos="$ctrl.todos"></todo-list>
    </div>
  `
};
