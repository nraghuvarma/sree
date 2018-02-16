
//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("galleryCtrl", function ($scope,$http) {
	console.log("name");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/gallery"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);
console.log("==");

var imageRes=resData[5];
var fnlImage=imageRes.image;
$scope.data=resData;


}, function errorCallback(response) {
console.log('err');
});
});