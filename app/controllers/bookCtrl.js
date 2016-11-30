"use strict";
app.controller('bookCtrl', function($scope, books) {
  books.getBooks().success(function(data) {
    $scope.books = data.guides;
    console.log("data: ", data);
    $scope.welcome = "hello";
    console.log("$scope.books: ", $scope.books);
  });
});

app.factory('books', function($http) {
  var getBooks = function() {
    return $http.get('data/guides.json');
  };
  return {
    getBooks: getBooks
  };
});
