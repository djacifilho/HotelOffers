var ctrls = angular.module('appControllers', []);


ctrls
	.factory('Packages', function($resource) {
		return $resource('/api/packages/:id');
	});


ctrls
	.controller('indexController', function($scope, $http, Packages) {
		console.log('indexController')

		$scope.active = {
			index: true,
			cars: false,
			flights: false,
			hotels: false,
			packages: false
		};

		$scope.select = function(item) {
			for (var key in $scope.active) {
				$scope.active[key] = false;
			}
			$scope.active[item] = true;
		}
	});


ctrls
	.controller('packagesController', function($scope, $http, Packages) {
		console.log('PackagesController')

		Packages.query().$promise.then(function(value) {
			$scope.packages = value;
		}
		, function(error) {

		});
	});


ctrls
	.controller('packageController', function($scope, $http, $stateParams, Packages) {
		console.log('packageController')
		console.log($stateParams)

		$scope.selectedFrom = null;
		$scope.selectedDay = null;

		if ($stateParams.id !== undefined) {

			Packages
				.get({ id: $stateParams.id })
				.$promise
				.then(function(value) {
					$scope.package = value;

					//getting distinct days
					$scope.daysOptions = _.chain(value.options)
											.map(function(x) { return x.daily })
											.uniq()
											.sortBy()
											.value()

					//getting distinct
					$scope.fromOptions = _.chain(value.options)
											.flatten()
											.map(function(x) { return x.from })
											.flatten()
											.uniq()
											.sortBy()
											.value()
				}
				, function(error) {

	           });
		}

		$scope.selectFrom = function(selectedItem) {
			$scope.selectedFrom = selectedItem;
		}

		$scope.selectDay = function(selectedItem) {
			$scope.selectedDay = selectedItem;
		}

		$scope.myFilter = function(opt) {
			var result = true;
			if ($scope.selectedFrom != null) {
				result = _.contains(opt.from, $scope.selectedFrom);
			}

			if (result && $scope.selectedDay != null) {
				result = opt.daily == $scope.selectedDay;
			}
			return result;
		}
	});
