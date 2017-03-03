export class TodoService {
  static $inject: string[] = ['$http'];

  constructor(private $http: angular.IHttpService) { }

  getTodos() {
    return this.$http.get('/api/todos').then(response => response.data);
  }
}
