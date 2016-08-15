'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.forecast
 * @description
 * # forecast
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=b5c0a9aa91f3a1dea273bd33ce2af12a', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });