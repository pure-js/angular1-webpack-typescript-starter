import angular from 'angular';
import { TodoComponent } from './todo.component';


export const TodoModule = angular
  .module('todo', [])
  .component('todo', TodoComponent)
  .name;
