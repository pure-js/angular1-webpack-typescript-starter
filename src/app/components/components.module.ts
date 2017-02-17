import angular from 'angular';
import { CalendarModule } from './calendar/calendar.module';
import { EventsModule } from './events/events.module';

export const ComponentsModule = angular
  .module('app.components', [
    CalendarModule,
    EventsModule
  ])
  .name;