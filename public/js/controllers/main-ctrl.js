angular.module('LoanCalculator').controller('MainCtrl', function($scope, bankService){
  bankService.getInterestRate().then(
    function(response){
      $scope.interest_rate = response.data.interestRate
    }
  );
  $scope.principal = '';
  $scope.monthly_payment = '';
  $scope.calculatePayment = function(){
    //Principal + Interest / 48
    var accruedInterest = parseInt($scope.principal) * parseFloat($scope.interest_rate) * 4;
    console.log(parseInt($scope.principal));
    console.log($scope.interest_rate);
    console.log($scope.interest_rate * 4);
    console.log(accruedInterest);
    $scope.monthly_payment = ((parseInt($scope.principal) + accruedInterest) / 48)
  }
})
