

angular.module('myApp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/")

    console.log('configurando rotas')

    // Now set up the states
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "partials/indexPartial.html"
        })
        .state('cars', {
          url: "/cars",
          templateUrl: "partials/carsPartial.html"
        })
        .state('flights', {
          url: "/flights",
          templateUrl: "partials/flightsPartial.html"
        })
        .state('hotels', {
          url: "/hotels",
          templateUrl: "partials/hotelsPartial.html"
        })
        .state('packages', {
            url: "/packages",
            templateUrl: "partials/packagesPartial.html"
        })
        .state('packagesdetails', {
            url: "/packages/{id}",
            params: { "id": null },
            templateUrl: "partials/packagePartial.html"
        })

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // })

});
