'use strict';

/**
 * @ngdoc function
 * @name trainingSeedApp.controller:SearchsimpleCtrl
 * @description
 * # SearchsimpleCtrl
 * Controller of the trainingSeedApp
 */
angular.module('trainingSeedApp')
  .controller('SearchsimpleCtrl', function ($scope,$http) {

  	$scope.origin='slc';
    $scope.destination='den';
    $scope.beginDate='2016-09-01T03:35:21.258Z';
    $scope.endDate='2016-09-05T03:35:21.258Z';
    $scope.type='ADT';
    $scope.count=1;
    $scope.currencyCode='USD';
  

    var data = $.param({
            	origin: $scope.origin,
                destination: $scope.destination,
                beginDate:$scope.beginDate,
                endDate:$scope.endDate,
                passengers:[
                {
                	type:$scope.type,
                	discountCode:$scope.discountCode,
                	count:$scope.count
                }
                ],
                promotionCode:$scope.promotionCode,
                currencyCode:$scope.currencyCode,
                loyaltyFilter:$scope.loyaltyFilter
            });



    var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };


	$http.post('http://demo.navitaire.com/dotrez/api/nsk/availability/search/simple', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            }) 

            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });



  });
