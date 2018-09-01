const app = angular.module('app', [])

app.factory('jQuery', ['$window', function ($window) {
    return $window.jQuery
}])

app.directive('bgRed', ['jQuery', function (jQuery) {
    return {
        link: function ($scope, $element, $attrs) {
            const elem = $element[0]
            jQuery(elem).css('background-color', 'red')
        }
    }
}])