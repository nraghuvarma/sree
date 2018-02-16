
//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("buttonsCtrl", function ($scope,$http) {
	console.log("name");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/buttons"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);
console.log("data");

var box1Res=resData[0];
var fnlBox1=box1Res.Box1;
$scope.box1Contents=fnlBox1.Contents;
$scope.bname=fnlBox1.label1;
$scope.bname1=fnlBox1.label2;
$scope.label=fnlBox1.label3;


}, function errorCallback(response) {
console.log('err');

});
});