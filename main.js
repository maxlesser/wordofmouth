angular.module('myApp', ['ui.bootstrap']);

function WomCon($scope, $modal) {

  $scope.events = [
    {imageLocation:'https://lh4.googleusercontent.com/-Yo0xPhkpEkw/AAAAAAAAAAI/AAAAAAAAABg/1_d4z5kPZ8c/w48-c-h48/photo.jpg', categories:['sport']},
    {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', categories:['talk', 'sport'], name:"NAME", date:"10-05-2012 11:38:46", location:"LOCATION"},
    {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', categories:['talk', 'sport']},
    {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', categories:['talk', 'sport', 'social', 'theater']},
    {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', categories:['talk', 'sport', 'social']}
    ];

  $scope.users = [
    {email:'wheels', password:'max'}
  ]

  $scope.currentUser = {};

  $scope.categoryFilter = '';

  $scope.filter = function(category) {
    $scope.categoryFilter = category;
  }

  $scope.showOverlay = function(index) {
  	$scope.events[index].overlay = "true";
  }

  $scope.hideOverlay = function(index) {
  	$scope.events[index].overlay = "false";
  }

  $scope.openEventModal = function(index) {
  	  var modalInstance = $modal.open({
  	    templateUrl: 'eventContent.html',
  	    controller: EventModalCon,
  	    resolve: {
  	      events: function () {
  	        return $scope.events;
  	      },
          index: function () {
            return index;
          }
  	    }
  	  });

      modalInstance.opened.then(function () {
        setTimeout(function() {
          document.getElementById('_name').className = '_summary'; 
          document.getElementById('_description').className = '_description'; 
          document.getElementById('_location').className = '_location'; 
          document.getElementById('_start').className = '_start'; 
          addthisevent.refresh();
        }, 1);
      });

  	  modalInstance.result.then(function () {
  	  }, function () {
  	    // $log.info('Modal dismissed at: ' + new Date());
  	  });
  	};

    $scope.openShoutModal = function(index) {
      var modalInstance = $modal.open({
        templateUrl: 'shoutContent.html',
        controller: ShoutModalCon
      });

      modalInstance.result.then(function (newEvent) {
        $scope.events.push(newEvent);
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.openCreateAccountModal = function() {
      var modalInstance = $modal.open({
        templateUrl: 'createAccount.html',
        controller: CreateAccountCon
      });

      modalInstance.result.then(function (user) {
        // this would be validated on the backend if it were a real site, not the frontend
        // password would also be hashed and then sent, and compared to a hashed pw
        user.email = user.email.toLowerCase();
        user.password = user.password.toLowerCase();
        for (var i = 0; i < $scope.users.length; i++) {
          if($scope.users[i].email == user.email)
          {
            console.log('That email is already in use!!');
            return;
          }
        };
        
        console.log('user created!');
        $scope.users.push(user);
        $scope.currentUser = user;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.openLoginModal = function() {
      var modalInstance = $modal.open({
        templateUrl: 'login.html',
        controller: LoginCon
      });

      modalInstance.result.then(function (user) {

        // this would be validated on the backend if it were a real site, not the frontend
        // password would also be hashed and then sent, and compared to a hashed pw
        user.email = user.email.toLowerCase();
        user.password = user.password.toLowerCase();
        for (var i = 0; i < $scope.users.length; i++) {
          if($scope.users[i].email == user.email && $scope.users[i].password == user.password)
          {
            console.log('you successfully logged in!');
            $scope.currentUser = user;
            return;
          }
        };

        console.log('unable to log in - please check email/password combination.');
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function LoginCon($scope, $modalInstance) {
      $scope.user = {email:'', password:''};

      $scope.ok = function () {
        $modalInstance.close($scope.user);
      };

      $scope.close = function () {
        $modalInstance.dismiss('cancel');
      };
    }

    function CreateAccountCon($scope, $modalInstance) {


      $scope.user = {email:'', password:''};

      $scope.ok = function () {
        $modalInstance.close($scope.user);
      };

      $scope.close = function () {
        $modalInstance.dismiss('cancel');
      };
    }

    function EventModalCon($scope, $modalInstance, events, index) {

      $scope.event = events[index];
      $scope.editMode = false;
      $scope.editedEvent = {};

      $scope.enterEditMode = function () {
        // $scope.editedEvent = {imageLocation:$scope.event.imageLocation, categories:$scope.event.categories};
        $scope.editedEvent = angular.copy($scope.event);
        $scope.editMode = true;
      };

      $scope.submitEdits = function() {
        $scope.event = $scope.editedEvent;
        events[index] = $scope.event;
        // console.log(events);
        // events.splice(index, 1);
        // events.splice(index, 0, $scope.editedEvents);
        // console.log(events);
        $scope.editMode = false;
      };

      $scope.cancelEdits = function() {
        $scope.editMode = false;
      };

      $scope.close = function () {
        $modalInstance.dismiss('cancel');
      };
    }

    function ShoutModalCon($scope, $modalInstance) {

      $scope.newEvent = {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', categories:{talk:'#ff9900', sport:'#FF0000'}};

      $scope.ok = function () {
        $modalInstance.close($scope.newEvent);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }
  }

// function TodoCtrl($scope) {
//   $scope.todos = [
//     {text:'learn angular', done:true},
//     {text:'build an angular app', done:false}];
 
//   $scope.addTodo = function() {

//     $scope.todos.push({text:$scope.todoText, done:false});
//     $scope.todoText = '';
//   };
 
//   $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.todos, function(todo) {
//       count += todo.done ? 0 : 1;
//     });
//     return count;
//   };
 
//   $scope.archive = function() {
//     var oldTodos = $scope.todos;
//     $scope.todos = [];
//     angular.forEach(oldTodos, function(todo) {
//       if (!todo.done) $scope.todos.push(todo);
//     });
//   };
// }


// function ModalDemoCtrl($scope, $modal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.open = function () {

//     var modalInstance = $modal.open({
//       templateUrl: 'myModalContent.html',
//       controller: ModalInstanceCtrl,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };
// };

// function ModalInstanceCtrl($scope, $modalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// };