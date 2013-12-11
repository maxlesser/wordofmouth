angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'omr.angularFileDnD']);

function WomCon($scope, $modal) {

  $scope.events = [
            {imageLocation:'http://flyingmeat.s3.amazonaws.com/acorn4/images/Acorn256.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['causes'], name:"Save the Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/ZJ9qNxs.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/N8JNniO.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['talks', 'causes'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/A54mwfY.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['causes'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/22K9F6y.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/Qdx8YSb.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['social', 'causes'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/60Kz3Tm.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/QdxNrZI.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['talks', 'sports'], name:"Acorns, Yo!", date:new Date("December 11, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/volJFDS.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['talks'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/HrpACZ6.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts', 'causes'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/qp48NYM.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/EuBP9dE.png', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts', 'sports'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/LSQ0aHl.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts', 'talks'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/EGbvxwF.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['social'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/byBqlnE.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/cfIYPcl.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['causes', 'social'], name:"Acorns, Yo!", date:new Date("December 12, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/46DJshb.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['talks', 'causes'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/v4UfNWy.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports', 'social'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/v9VGNKQ.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['arts'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/o0hxSfP.png', description:'This is a real young picture of Alec Meade. You\'re welcome, Alec.', categories:['talks', 'causes'], name:"Alec, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/bz3ewDQ.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports', 'arts'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/PyAxrdH.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports', 'social'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/1eLr6KD.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['causes'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/ywL6JNW.gif', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['social', 'sports'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/A9G1fxw.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['talks'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/wDKmYWu.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/cEVu4FD.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['causes', 'social'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/vvMVJKs.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['sports'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            {imageLocation:'http://i.imgur.com/RxPLymQ.jpg', description:'This is an event! Too lazy to create real descriptions for each of them, so, here you go.', categories:['social'], name:"Acorns, Yo!", date:new Date("December 15, 2013 13:14:00"), time:new Date("December 11, 2013 13:14:00"), endDate:new Date(),  endTime:new Date("December 11, 2013 13:14:00"), location:"CIT 416", owner:'max_lesser'},
            ];
  $scope.users = [
            {email:'max_lesser', password:'max'}
          ];
  $scope.categoryColors = {arts:"#AEA2FA", causes:"#85C9E4", social:"#EB6967", sports:"#B4D967", talks:"#F7A359"};
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

      var realDate = event.date;
      realDate.setHours(event.time.getHours());
      realDate.setMinutes(event.time.getMinutes());

      if(realDate.getTime() >= start.getTime() && realDate.getTime() < end.getTime())
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

      var realDate = event.date;
      realDate.setHours(event.time.getHours());
      realDate.setMinutes(event.time.getMinutes());

      if(realDate.getTime() >= start.getTime() && realDate.getTime() < end.getTime())
        return true;
      else
        return false;
    }
  }
  $scope.laterFilter = function(event) {
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
      controller: CreateAccountCon,
      resolve: {
        users: function() {
          return $scope.users;
        }
      }
    });

    modalInstance.result.then(function (user) {
      // this would be validated on the backend if it were a real site, not the frontend
      // password would also be hashed and then sent, and compared to a hashed pw
      
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
      controller: LoginCon,
      resolve: {
        users: function() {
          return $scope.users;
        }
      }
    });

    modalInstance.result.then(function (user) {
      $scope.currentUser = user;
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

function LoginCon($scope, $modalInstance, users) {
  $scope.users = users;
  $scope.user = {email:'', password:''};
  $scope.emailAction = '@brown.edu';
  $scope.invalidLogin = false;

  $scope.ok = function () {
    // this would be validated on the backend if it were a real site, not the frontend
      // password would also be hashed and then sent, and compared to a hashed pw
      $scope.user.email = $scope.user.email.toLowerCase();
      $scope.user.password = $scope.user.password.toLowerCase();
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].email == $scope.user.email && $scope.users[i].password == $scope.user.password)
        {
          $modalInstance.close($scope.user);
          return;
        }
      }
    $scope.invalidLogin = true;
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function CreateAccountCon($scope, $modalInstance, users) {
  $scope.users = users;
  $scope.user = {email:'', password:''};
  $scope.emailAction = '@brown.edu';
  $scope.invalidEmail = false;

  $scope.ok = function () {
    $scope.user.email = $scope.user.email.toLowerCase();
      $scope.user.password = $scope.user.password.toLowerCase();
      for (var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].email == $scope.user.email)
        {
          $scope.invalidEmail = true;
          return;
        }
      };
    $modalInstance.close($scope.user);
  };

  $scope.close = function () {
    $modalInstance.dismiss('cancel');
  };
}

function ShoutModalCon($scope, $modalInstance) {

  $scope.editedEvent = {imageLocation:'', description:'', categories:[], name:"", date:new Date(), time:new Date(), endDate:new Date(), endTime:new Date(), location:"", owner:''};
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