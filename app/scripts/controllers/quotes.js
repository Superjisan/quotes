quotesApp.controller("QuotesController", ["$scope", function($scope) {
  $scope.quotes = [
    {
      author: "Jeff Chang",
      content: "Cultural change is often the dress rehearsal for political change."
    },
    {
      author: "Thomas Jefferson",
      content: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you."
    },
    {
      author: "Oprah Winfrey",
      content: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    }
  ]
}]);
