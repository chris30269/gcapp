var myApp = angular.module('starter.services', []);

myApp.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

myApp.factory("Events", function(){
    var events = [
      {
        id: 0,
        type: "volunteer",
        points: 10,
        call: 1466699003,
        performance: 1466699203,
        release: 1466699403,
        public: true,
        address: "30 North Ave. Atlanta, GA 30332",
        location: "Tech Tower",
        uniform: "jeans",
        desc: "This is going to be a really fun gig for Buzz. Sing a couple songs and then leave.",
        title: "Buzz's Birthday"
      },
      {
        id: 1,
        type: "tutti",
        points: 30,
        call: 1466799003,
        performance: 1466799203,
        release: 1466799603,
        public: false,
        address: "30 North Ave. Atlanta, GA 30332",
        location: "Tech Tower",
        uniform: "slacks",
        desc: "This is going to be a really fun gig for Bud. Sing a couple songs and then leave.",
        title: "Bud's Going Away Party"
      },
      {
        id: 2,
        type: "rehearsal",
        points: 10,
        call: 1467699503,
        performance: 1467699603,
        release: 1467699903,
        public: false,
        address: "30 North Ave. Atlanta, GA 30332",
        location: "CoC 016",
        uniform: "casual",
        desc: "Business as ususal",
        title: "Rehearsal 4/20"
      }
    ];

    return {
      all: function(){
        return events;
      },
      get: function(eventId) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(eventId)) {
            return events[i];
          }
        }
        return null;
      }
    };
});

myApp.factory("Home", function(){
  var stats = {
    required: 5,
    total: 3,
    score: 85
  };

  var announcements = [
      {
        id: 0,
        from: "VP",
        text: "Y'all are losers for not signing up for the hospital gig. It was supposed to be the first time we sang All You Need Is Love. And now I'm sad and the only way to console me is to come to the ig tomorrow and give me a cookie."
      },
      {
        id: 1,
        from: "T",
        text: "DUUUUUESSSSSS!!!! Pay them. Kthxbai."
      }
    ];
  return {
    allStats: function(){
      return stats;
    },
    allAnnouncements: function(){
      return announcements;
    }
  };
});
