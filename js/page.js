var app = angular.module('phma', []);

var url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

app.controller('main', function ($scope) {

    $scope.currentYear = new Date();

    $scope.lang = 'en-US';

    $scope.changeLang = function(lang){
        switch(lang){
            case 'br':
            $scope.lang = 'en-US';
            break;
            case 'en':
            $scope.lang = 'pt-BR';
            break;
        }
    }

});