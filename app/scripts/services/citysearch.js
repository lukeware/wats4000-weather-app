'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.citysearch
 * @description
 * # citysearch
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=b5c0a9aa91f3a1dea273bd33ce2af12a', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
