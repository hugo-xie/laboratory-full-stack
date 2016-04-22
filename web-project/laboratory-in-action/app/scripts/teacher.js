'use strict';
angular.module('laboratoryHomepageApp')
  .controller('teacherCtrl', function () {
   $('#myTabs a').click(function(e){
    e.preventDefault();
    $(this).tab('show');
   })
  });