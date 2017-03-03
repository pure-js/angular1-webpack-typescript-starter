import { EventEmitter } from '../common/event-emitter';
import { Event } from '../common/event';

export class TodoFormController {
  static $inject = ['EventEmitter'];

  constructor(private eventEmitter: EventEmitter) {}
  $onChanges(changes) {
    if (changes.todo) {
      this.todo = Object.assign({}, this.todo);
    }
  }
  onSubmit() {
    if (!this.todo.title) return;
    // with EventEmitter wrapper
    this.onAddTodo(
      eventEmitter({
        todo: this.todo
      });
    );
    // without EventEmitter wrapper
    this.onAddTodo(new Event({
        todo: this.todo
      }));
  }
}
