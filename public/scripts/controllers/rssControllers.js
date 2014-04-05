/**
 * Created by Shlomi on 05/04/2014.
 */

'use strict';

var rssControllers = angular.module('rssControllers', []);

rssControllers.controller('PostListCtrl', ['$scope', 'Post',
    function($scope, Post) {
        $scope.posts = Post.query();
    }]
);
