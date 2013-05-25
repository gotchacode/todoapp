function TodoCtrl($scope) {
    $scope.totalTodos = 5;
    $scope.todos = [
        {text:'learn angularjs', done:false},
        {text:'Build an app', done:false}
    ];

    $scope.gettotalTodos = function() {
        return $scope.todos.length
    };
    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos , function(todo) {
            return !todo.done;
        })
    };

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = "";
    };
}
