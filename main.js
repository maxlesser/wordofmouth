angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'omr.angularFileDnD'])
  .service('myService', function () {
      return {
        globalCategoryColors : {talk:"#5cb85c", sports:"#5bc0de", social:"#f0ad4e", theater:"#428bca", music:"#d9534f"},
        globalUsers : [
            {email:'wheels', password:'max'}
          ],
        globalEvents : [
            {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', description:'this is a test event! it is being used for test purposes.', categories:['talk', 'sports'], name:"1", date:new Date(), time:'', location:"LOCATION", ownerEmail:'wheels'},
            ],
        globalCurrentUser: {email:'', password:''} ,

        setGlobalCurrentUser : function(user)
        {
          globalCurrentUser.email = user.email;
          globalCurrentUser.password = user.password;
        }
      }
    });

function WomCon($scope, $modal, myService) {


  $scope.theaterFilter = '';
  $scope.talkFilter = '';
  $scope.socialFilter = '';
  $scope.musicFilter = '';
  $scope.sportsFilter = '';

  $scope.events = myService.globalEvents;
  $scope.users = myService.globalUsers;
  $scope.categoryColors = myService.globalCategoryColors;
  $scope.currentUser = myService.globalCurrentUser;
  
  $scope.categoryFilter = '';

  $scope.searchFilter = '';
  $scope.date = 'date';

  $scope.changeCategoryFilter = function(category) {
    $scope.categoryFilter = category;
  }

  $scope.showOverlay = function(event) {
  	event.overlay = "true";
  }

  $scope.hideOverlay = function(event) {
  	event.overlay = "false";
  }

  $scope.openEventModal = function(event) {

	  var modalInstance = $modal.open({
	    templateUrl: 'eventContent.html',
	    controller: EventModalCon,
	    resolve: {
        user: function() {
          return $scope.currentUser;
        },
        event: function () {
          return event;
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

        document.getElementsByClassName('btn pull-right')[0].className = 'pull-right glyphicon glyphicon-chevron-right'; 
        document.getElementsByClassName('btn pull-left')[0].className = 'pull-left glyphicon glyphicon-chevron-left';

        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
      }, 1);
    });

	  modalInstance.result.then(function () {
	  }, function () {
	    // $log.info('Modal dismissed at: ' + new Date());
	  });
	};

  $scope.openShoutModal = function(event) {
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
          $scope.currentUser = user;
          return;
        }
      }

      console.log("error validating");
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };
}



function EventModalCon($scope, $modalInstance, myService, user, event) {

  $scope.currentUser = user;
  $scope.categoryColors = myService.globalCategoryColors;
  $scope.event = event;
  $scope.editMode = false;
  $scope.editedEvent = {};

  $scope.enterEditMode = function () {
    $scope.editedEvent = angular.copy($scope.event);
    $scope.editMode = true;
  };

  $scope.submitEdits = function() {
    angular.copy($scope.editedEvent, $scope.event);
    $scope.event.date.setHours($scope.event.time.getHours());
    $scope.event.date.setMinutes($scope.event.time.getMinutes());
    $scope.editMode = false;
  };

  $scope.cancelEdits = function() {
    $scope.editMode = false;
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function LoginCon($scope, $modalInstance, myService) {
  $scope.user = {email:'', password:''};

  $scope.ok = function () {
    $modalInstance.close($scope.user);
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function CreateAccountCon($scope, $modalInstance, myService) {

  $scope.ok = function () {
    $modalInstance.close($scope.user);
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function ShoutModalCon($scope, $modalInstance, myService) {

  $scope.newEvent = {categories:{talk:'#ff9900', sport:'#FF0000'}};
  $scope.image = null;
  $scope.imageFileName = "";

  $scope.ok = function () {
    $modalInstance.close($scope.newEvent);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
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