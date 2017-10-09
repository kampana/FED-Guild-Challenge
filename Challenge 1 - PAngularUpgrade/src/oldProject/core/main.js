'use strict';
angular.module('phonecatApp')
  .component('main', {
    template: `
    <h2>Member in JS: {{ myMember }}</h2>
    <angular-entry-point [my-input]="myMember" ></angular-entry-point>
    `,
    controller: function($scope) {
      $scope.myMember = "MyValue"
    }
  });
