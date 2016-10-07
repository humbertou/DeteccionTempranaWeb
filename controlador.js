var app = angular.module('mainApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'login.html'
	})
	.when('/cuestionario',{
		resolve: {
			"check": function($location, $rootScope){
				if (!$rootScope.loggedIn){
					alert ("Debe iniciar sesión para ingresar a este sitio"); 
					$location.path('/');
				}
			}
		},
		templateUrl: 'cuestionario.html'
		
	})
	.when ('/preguntas',{
		templateUrl: 'preguntas.html'
	})

	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.myText = "Hola";
	$scope.submit = function(){
		
		if ($scope.username == 'admin' && $scope.password == 'a'){
			$rootScope.loggedIn = true;
			$location.path('/cuestionario');
		}
		else{ 
			//$location.path('/dashboard');
			alert ("Invalid Login Credential"); 
		}
	};
	//$scope.myText = "hola";

});

app.controller('cuestionarioCtrl', function($scope, $location, $rootScope){
	//$scope.myText = "Hola";
	$scope.submit = function(){
		
		if ($scope.nombreCuestionario != null){
			//$rootScope.loggedIn = true;
			alert ($scope.nombreCuestionario); 
			$location.path('/preguntas');
		}
		else{ 
			//$location.path('/dashboard');
			alert ("Debe llenar todos los campos."); 
		}
	};
	//$scope.myText = "hola";

});