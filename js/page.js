var app = angular.module('phma', []);

app.controller('main', function ($scope) {

    $scope.currentYear = new Date();

    $scope.lang = 'en';

    $scope.ChangeLang = function (lang) {
        switch (lang) {
            case 'br':
                $scope.lang = 'pt-BR';
                $scope.site = locale.pt;
                break;
            case 'en':
                $scope.lang = 'en-US';
                $scope.site = locale.en;
                break;
        }
        $('.navbar-collapse').collapse('hide');
    }

    $scope.ChangeLang($scope.lang);

});