angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ExercisesCtrl', function($scope) {
  $scope.exerciseList = {exercises:[
    { name: 'Bicep curl'},
    { name: 'Squat'},
  ]};
})

.controller('ExerciseCtrl', function($scope, $stateParams, $ionicPopover) {
	
	var $exerciseName = $stateParams.exerciseName;
	$scope.exerciseName = $exerciseName;
	
	var trainings = [
	                 {
	                 	id:1, 
	                 	exerciseName:$exerciseName, 
	                 	date: new Date('Feb 8 2015 09:54:36'),
	                 	sets:[{reps:10, weight:50}, {reps:5, weight:60}]
	                 },
	                 {
	                 	id:2, 
	                 	exerciseName:$exerciseName, 
	                 	date: new Date('Feb 10 2015 09:54:36'),
	                 	sets:[{reps:3, weight:55}]
	                 },   
	                 {
	                 	id:3, 
	                 	exerciseName:$exerciseName, 
	                 	date: new Date('Feb 19 2015 09:54:36'),
	                 	sets:[{reps:5, weight:78}, {reps:2, weight:60}, {reps:25, weight:6}, {reps:5, weight:78}, {reps:2, weight:60}]
	                 }
	];
	$scope.trainings = trainings;

	$ionicPopover.fromTemplateUrl('my-popover.html', {scope: $scope,})
		.then(function(popover) {
			$scope.popover = popover;
		});
	  
	
	$scope.newTraining = {date:new Date(), group:'legs', sets:[]};
	$scope.trainings[$scope.trainings.length] = $scope.newTraining;
	
	$scope.addSet = function() {
		var $new = $scope.newTraining;
		$new.sets[$new.sets.length] = $scope.newSet;
		$scope.closePopover();
		
	};
	$scope.openPopover = function($event) {
		$scope.newSet = {};
		$scope.popover.show($event);
	};
	
	$scope.closePopover = function() {
		$scope.popover.hide();
	};
		  //Cleanup the popover when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.popover.remove();
	});
});
