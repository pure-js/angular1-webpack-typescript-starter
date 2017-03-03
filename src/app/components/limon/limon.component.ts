import { TodoFormController } from './todo-form.controller';

export const TodoFormComponent: angular.IComponentOptions = {
  bindings: {
    todo: '<',
    onAddTodo: '&'
  },
  controller: TodoFormController,
  template: `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.title">
      <button type="submit">Submit</button>
    </form>
  `
};
