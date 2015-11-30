angular.module('LoanCalculator').service('bankService', function($http, $q){

  this.getInterestRate = function(){
    return $http({
      method: 'GET',
      url: '/interest_rate'
    })
  }
})
