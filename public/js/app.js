(function(){

  var app= angular.module('tabStore', []);


  //Création d'un service pour communiquer entre les controlleurs
  app.factory('Index', function(){
    var obj = {};
    obj.current = 3;
    return obj;
  });


  app.controller('tableController', ['$scope', '$http', 'Index', function($scope, $http, index){
    	//initialisation des variables
      $scope.showDetail = false; //showDetail variable boolean pour afficher ou cacher les détails d'une table
      $scope.tables= [];  //contient la liste des tables réccupérer depuis le serveur

      console.log(index.current);

      this.setId= function(a)
      {
        console.log('vas y');
        //envoi une requete au serveur pour afficher le détail d'une table lorsque aucun détail n'est affiché
        if (!$scope.showDetail) {                                     
          $http.get('/detail/'+a).success(function(d){
            $scope.table[0]=d;
          });
          $scope.showDetail = true;
        }
        //sinon on masque le détail est on affiche la liste de toutes les tables
        else {
          $scope.showDetail = false;                                  
        }
  	 };

      // Requete de réccupération de toutes les tables
    	
    	$http.get('/data').success(function(data){
    		$scope.tables = data;
    		console.log(data);
    	});
  }]);

  app.controller('lieuController', ['$scope', '$http', 'Index', function($scope, $http, index){
    //initialisation des variables
    $scope.showDetail = false; //showDetail variable boolean pour afficher ou cacher les détails d'un lieu
    $scope.tables= [];  //contient la liste des lieux réccupérer depuis le serveur

    console.log(index.current);

    this.setId= function(a)
    {
      console.log('vas y');
      //envoi une requete au serveur pour afficher le détail d'un lieu lorsque aucun détail n'est affiché
      if (!$scope.showDetail) {                                     
        $http.get('/detail/'+a).success(function(d){
          $scope.table[0]=d;
        });
        $scope.showDetail = true;
      }
      //sinon on masque le détail est on affiche la liste de toutes les lieux
      else {
        $scope.showDetail = false;                                  
      }
   };

    //sinon on masque le détail est on affiche la liste de toutes les lieu
    // Requete de réccupération de toutes les lieux
    
    $http.get('/data').success(function(data){
      $scope.tables = data;
      console.log(data);
    });
  }]);






})();