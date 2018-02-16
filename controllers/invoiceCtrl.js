
//var app = angular.module("myApp", ["ngRoute"]);

myApp.controller("invoiceCtrl", function ($scope,$http) {
	console.log("name");
    $scope.msg = "";
	
	$http({
method: 'GET',
cache: true,
url: "http://localhost:8081/invoice"
}).then(function successCallback(response) {

var resData=response.data;
console.log(resData);
console.log("data");

var resData=response.data[0];
var box=resData.Box;
$scope.labels=box.label1;
$scope.icons=box.icon;
$scope.labelI=box.label2;
$scope.labelID=box.invoiceid;
$scope.dateI=box.label3;
$scope.dateN=box.date;

var resData=response.data[1];
var boxes=resData.BoXes;
$scope.names=boxes.name1;
$scope.pongal=boxes.icon0;
$scope.gomes=boxes.icon1;





}, function errorCallback(response) {
//console.log(response);
console.log('err');

});
});