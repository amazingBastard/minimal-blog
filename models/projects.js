Projects = new Mongo.Collection('projects');

Projects.helpers({
  username: function() {
    user = Meteor.users.findOne({_id: this.userId});
    if (user) {
      return user.username;
    }
  },
  projects: function(username) {
    return Projects.find({username: username});
  }
});

Projects.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, fields, modifier) {
    return true;
  },

  remove: function(userId, doc) {
    return doc.userId === userId;
  }
});
