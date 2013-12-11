angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'omr.angularFileDnD']);

function WomCon($scope, $modal) {

  $scope.events = [
            {imageLocation:'http://www.jaapsch.net/puzzles/images/square1.jpg', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date(), endDate:new Date(), endTime:new Date(), location:"LOCATION", owner:'wheels'},

            {imageLocation:'http://www.jaapsch.net/puzzles/images/square1.jpg', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date(), endDate:new Date(), endTime:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://www.jaapsch.net/puzzles/images/square1.jpg', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date("December 14, 2013 13:14:00"), time:new Date(), endDate:new Date(), endTime:new Date(), location:"LOCATION", owner:'wheels'},



            {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://icons.iconarchive.com/icons/pixelresort/itunes-10/256/Square-Double-Rainbow-icon.png', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://foto.hrsstatic.com/fotos/3/3/256/256/80/FFFFFF/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F0%2F6%2F5%2F6%2F%2Fteaser_065618.jpg/blao3QhP0r7vcnbA8Z7aUw%3D%3D/1020,678/6/Doubletree_STES_by_Hilton_Times_Square-New_York_City-Aussenansicht-2-65618.jpg', description:'this is a test event! it is being used for test purposes.', categories:['sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://fc02.deviantart.net/fs70/f/2013/008/4/d/square_icon___gta_iv_by_jmastexgp-d5q7lpo.png', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://wordsbecomesuperflous.files.wordpress.com/2013/11/g-square.jpg?w=256', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://foto.hrsstatic.com/fotos/0/3/256/256/80/FFFFFF/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F0%2F2%2F4%2F3%2F024337%2F024337_v_3147357.jpg/F4oDewDKfpxTTgnBVXIw%2BA%3D%3D/3024,1705/6/Carlton_Square_Hotel-Haarlem-Terrasse-1-24337.jpg', description:'this is a test event! it is being used for test purposes.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            {imageLocation:'http://b.vimeocdn.com/ps/292/228/2922284_300.jpg', description:'this is a test event! it is being used for test purposes.', categories:['arts', 'causes'], name:"Acorns, Yo!", date:new Date(), time:new Date(), location:"LOCATION", owner:'wheels'},
            ];
  $scope.users = [
            {email:'wheels', password:'max'}
          ];
  $scope.categoryColors = {arts:"#AEA2FA", causes:"#85C9E4", social:"#9E4746", sports:"#B4D967", talks:"#F7A359"};
  $scope.currentUser = {email:'', password:''};

  $scope.searchFilter = [];
  $scope.date = 'date';


  $scope.myFilter = function(event) {
      return function(event) {
        if ($scope.searchFilter.length == 0)
          return true;
        for (i = 0; i < event.categories.length; ++i) {
          if ($scope.searchFilter.indexOf(event.categories[i]) >= 0)
            return true;
            
        };
        return false;
      } 
  }

  $scope.toggleFilter = function(category) {
    if ($scope.searchFilter.indexOf(category) < 0)
      $scope.searchFilter.push(category);
    else
      $scope.searchFilter.splice($scope.searchFilter.indexOf(category), 1);
  }

  $scope.todayFilter = function(event) {
    return function(event) {
      var start = new Date();
      var end = new Date();
      end.setDate(end.getDate()+1);

      if(event.date.getTime() >= start.getTime() && event.date.getTime() < end.getTime())
        return true;
      else
        return false;
    }
  }
  $scope.tomorrowFilter = function(event) {
    return function(event) {
      var start = new Date();
      start.setDate(start.getDate()+1);
      var end = new Date();
      end.setDate(end.getDate()+2);

      if(event.date.getTime() >= start.getTime() && event.date.getTime() < end.getTime())
        return true;
      else
        return false;
    }
  }
  $scope.LaterFilter = function(event) {
    return function(event) {
      var start = new Date();
      start.setDate(start.getDate()+2);

      if(event.date.getTime() >= start.getTime())
        return true;
      else
        return false;
    }
  }

  $scope.logout = function() {
    $scope.currentUser = {email:'', password:''};
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
      windowClass: 'viewEventModal',
	    controller: EventModalCon,
	    resolve: {
        user: function() {
          return $scope.currentUser;
        },
        event: function () {
          return event;
        },
        colors: function () {
          return $scope.categoryColors;
        }
	    }
	  });

    modalInstance.opened.then(function () {
      setTimeout(function() {
        document.getElementById('_name').className = '_summary'; 
        document.getElementById('_description').className = '_description'; 
        document.getElementById('_location').className = '_location'; 
        document.getElementById('_start').className = '_start'; 
        document.getElementById('_end').className = '_end'; 
        addthisevent.refresh();
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
      windowClass: 'shoutModal',
      controller: ShoutModalCon
    });

    modalInstance.opened.then(function () {
      setTimeout(function() {
        document.getElementsByClassName('btn pull-right')[0].className = 'pull-right glyphicon glyphicon-chevron-right'; 
        document.getElementsByClassName('btn pull-left')[0].className = 'pull-left glyphicon glyphicon-chevron-left';
        document.getElementsByClassName('btn pull-right')[0].className = 'pull-right glyphicon glyphicon-chevron-right'; 
        document.getElementsByClassName('btn pull-left')[0].className = 'pull-left glyphicon glyphicon-chevron-left';

        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
      }, 1);
    });

    modalInstance.result.then(function (newEvent) {
      newEvent.owner = $scope.currentUser.email;
      $scope.events.push(newEvent);
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openCreateAccountModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'createAccount.html',
      windowClass: 'newAccountModal',
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
          alert("This email is already in use! Try again.");
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
      windowClass: 'loginModal',
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

      alert("Error validating email/password combination.");
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };
}



function EventModalCon($scope, $modalInstance, user, event, colors) {

  $scope.currentUser = user;
  $scope.categoryColors = colors;
  $scope.event = event;
  $scope.editMode = false;
  $scope.editedEvent = {};
  $scope.tooManyCategories = false;
  $scope.tooFewCategories = true;

  $scope.enterEditMode = function () {
    $scope.editedEvent = angular.copy($scope.event);
    $scope.editMode = true;
    setTimeout(function() {
        document.getElementsByClassName('btn pull-right')[0].className = 'pull-right glyphicon glyphicon-chevron-right'; 
        document.getElementsByClassName('btn pull-left')[0].className = 'pull-left glyphicon glyphicon-chevron-left';
        document.getElementsByClassName('btn pull-right')[0].className = 'pull-right glyphicon glyphicon-chevron-right'; 
        document.getElementsByClassName('btn pull-left')[0].className = 'pull-left glyphicon glyphicon-chevron-left';

        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-up')[0].className = 'glyphicon glyphicon-chevron-up'; 
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
        document.getElementsByClassName('icon-chevron-down')[0].className = 'glyphicon glyphicon-chevron-down';
      }, 1);
  };

  $scope.submitEdits = function() {
    angular.copy($scope.editedEvent, $scope.event);
    $scope.event.date.setHours($scope.event.time.getHours());
    $scope.event.date.setMinutes($scope.event.time.getMinutes());
    $scope.editMode = false;

    setTimeout(function() {
        document.getElementById('_name').className = '_summary'; 
        document.getElementById('_description').className = '_description'; 
        document.getElementById('_location').className = '_location'; 
        document.getElementById('_start').className = '_start'; 
        document.getElementById('_end').className = '_end'; 
        addthisevent.refresh();
      }, 1);
  };

  $scope.toggle = function(category) {
    if ($scope.editedEvent.categories.indexOf(category) < 0)
      $scope.editedEvent.categories.push(category);
    else
      $scope.editedEvent.categories.splice($scope.editedEvent.categories.indexOf(category), 1);
    $scope.tooManyCategories = $scope.editedEvent.categories.length >2;
    $scope.tooFewCategories = $scope.editedEvent.categories.length == 0;
  }

  $scope.clearImage = function () {
    $scope.editedEvent.imageLocation = null;
  }

  $scope.cancelEdits = function() {
    $scope.editMode = false;
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function LoginCon($scope, $modalInstance) {
  $scope.user = {email:'', password:''};
  $scope.emailAction = '@brown.edu';

  $scope.ok = function () {
    $modalInstance.close($scope.user);
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function CreateAccountCon($scope, $modalInstance) {
  $scope.user = {email:'', password:''};
  $scope.emailAction = '@brown.edu';

  $scope.ok = function () {
    $modalInstance.close($scope.user);
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function ShoutModalCon($scope, $modalInstance) {

  $scope.editedEvent = {};
  $scope.editedEvent.categories = [];
  $scope.tooManyCategories = false;
  $scope.tooFewCategories = true;

  $scope.submit = function () {
    $modalInstance.close($scope.editedEvent);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.toggle = function(category) {
    if ($scope.editedEvent.categories.indexOf(category) < 0)
      $scope.editedEvent.categories.push(category);
    else
      $scope.editedEvent.categories.splice($scope.editedEvent.categories.indexOf(category), 1);
    $scope.tooManyCategories = $scope.editedEvent.categories.length >2;
    $scope.tooFewCategories = $scope.editedEvent.categories.length == 0;
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