/**
 * Created by Shlomi on 05/04/2014.
 */
'use strict';

require.config({
    baseUrl: "./scripts",
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        angular: {
            exports: 'angular'
        },
        "angular-resource": {

        }
    },
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        bootstrap: "../bower_components/bootstrap/dist/js/bootstrap",
        domReady: '../bower_components/requirejs-domready/domReady',
        angular: '../bower_components/angular/angular',
        'angular-resource': "../bower_components/angular-resource/angular-resource.js"
    }
});

define(['require', 'angular'], function (require, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});