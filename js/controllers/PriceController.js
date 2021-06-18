myApp.controller("PriceController", function ($scope)
{
  $scope.guns = AllList.gun;
  for (var i = 0; i < $scope.guns.length; i++) $scope.guns[i].targetURL = "#!/article/" + $scope.guns[i].index;
});
