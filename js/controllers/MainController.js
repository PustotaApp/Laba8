myApp.controller("MainController", function ($scope)
{
  number = 0;
  list = new Array;
  for (var i = 0; i < AllList.gun.length; i++)
  {
    list[i] =
    {
      name: AllList.gun[i].name,
      price: AllList.gun[i].price,
      imgURL: AllList.gun[i].imgURL,
      alt: "gun",
      targetURL: String(AllList.gun[i].index)
    };

  }
  console.log(list[0].targetURL);

  $scope.next = function ()
  {
      number = (number + 1) % list.length;
      update(number);
  }

  $scope.back = function ()
  {
      number = (number - 1) < 0 ? (list.length - 1) : number - 1;
      update(number);
  }

  function update(index)
  {
    $scope.prev =
    {
      name: list[index].name,
      price: list[index].price,
      imgURL: list[index].imgURL,
      alt: list[index].alt,
      targetURL: "#!/article/" + list[index].targetURL
    };
  }

  update(0);
});
