
var app = angular.module('baselineApp', ['ui.bootstrap']);

app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});

app.controller('NavCtrl', function($scope, $http) {
  $http.get("demo/nav.json")
  .then(function(response) {
      $scope.navigations = response.data;
  });
});



app.controller('ReqCtrl', function($scope, $http) {
  $http.get("demo/test.json")
  .then(function(response) {
      $scope.testData = response.data;
  });
});

