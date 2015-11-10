if (Meteor.isClient) {
    
    Template.main.helpers({
      theEnemy: function () {
          Session.set("enemy", "Istanabul");
          return Session.get("enemy");
     }
     });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
