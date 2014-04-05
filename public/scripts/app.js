/**
 * Created by Shlomi on 05/04/2014.
 */

'use strict';

var rssSpiderApp = angular.module('rssSpiderApp', [
    'ngRoute',
    'rssControllers',
    'rssService'
]);

rssSpiderApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/posts', {
                templateUrl: 'partials/post-list.html',
                controller: 'PostListCtrl'
            }).
            otherwise({
                redirectTo: '/posts'
            });
    }]
);
