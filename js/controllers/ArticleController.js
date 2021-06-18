myApp.controller("ArticleController", function ($scope, $routeParams)
{

  var targetID = $routeParams.id;
  $scope.data;
  if (AllList.gun.length - 1 >= targetID)
  {
    $scope.data = AllList.gun[targetID];
    document.getElementById("fromTelescop").style.display = "block"
  }
  else
  {
    $scope.data = AllList.maps[targetID - AllList.gun.length];
    document.getElementById("fromTelescop").style.display = "none"
  }
});
