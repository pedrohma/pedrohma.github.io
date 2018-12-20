var app = angular.module('phma', []);

var url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

app.controller('main', function ($scope) {

    $scope.currentYear = new Date();

});