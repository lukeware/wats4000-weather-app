'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the workspaceApp
 */

angular.module('workspaceApp')
.controller('HeaderCtrl', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });