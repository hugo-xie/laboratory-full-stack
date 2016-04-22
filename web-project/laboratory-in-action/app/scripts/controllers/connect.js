// var laboratoryHomepageApp = angular.module('laboratoryHomepageApp', []);
// laboratoryHomepageApp.controller('connectCtrl', ['$scope', function($scope){
//   //参数依次为 AppId, AppKey
//  AV.initialize('MTxKWuHPDBJmgcCPQx1YPS7J-gzGzoHsz', '3q4eoqKhp3pdM6MjoqsOSyoh');
//  var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }, {
//   success: function(object) {
//     alert('LeanCloud Rocks!');
//   }
// });
// }]);
'use strict';
// angular.module('laboratoryHomepageApp')
//   .controller('connectCtrl',["$scope", function ($scope) {
//     AV.initialize('MTxKWuHPDBJmgcCPQx1YPS7J-gzGzoHsz', '3q4eoqKhp3pdM6MjoqsOSyoh');
//     var TestObject = AV.Object.extend('TestObject');
//     var testObject = new TestObject();
//     $scope.send=function(){
//     testObject.save({
//     name: $scope.name,
//     age:$scope.age,
//     school:$scope.school,
//     comment:$scope.comment
// }, {
//   success: function(object) {
//     alert('发送成功!');
//   }
// });
// };


//   }]);

angular.module('laboratoryHomepageApp').controller('connectCtrl', 
  ['$scope', 'connectFactory',function($scope,connectFactory){
  $scope.input={};
  $scope.send=function(){
    connectFactory.introduce($scope.input,'/connect')
    .then(function(resp){
      alert("发送成功");
    },function(err){
      alert("发送失败"+err.status);
      
    });
  }
}]);