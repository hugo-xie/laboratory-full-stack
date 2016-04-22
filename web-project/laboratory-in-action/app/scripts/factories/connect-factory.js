'use strict';

angular.module('laboratoryHomepageApp')
.factory('connectFactory',function($http){
  return{
    introduce:function(data,url){
       return $http({
          method:'post',
          url:"http://localhost:3000/api"+url,
          data:data,
        });   
    }
  };
  
});