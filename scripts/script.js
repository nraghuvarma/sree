var app = angular.module('myApp',[]);
		app.controller('myCtrl', function($scope , $location, $http){
			$scope.username="";
			$scope.password="";
		$scope.submit= function(){
                    console.log('in sub call');
		window.location.href="header.html";  
		}
		});
		