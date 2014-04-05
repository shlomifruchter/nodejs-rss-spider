/**
 * Created by Shlomi on 05/04/2014.
 */

'use strict';

var rssService = angular.module('rssService', ['ngResource']);

rssService.factory('Post', ['$resource',
    function($resource){
        return $resource('posts', {}, {
            query: {method:'GET', isArray:true}
        });
    }]
);
