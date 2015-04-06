Posts = new Mongo.Collection('posts');

Posts.helpers({
  username: function() {
    user = Meteor.users.findOne({_id: this.userId});
    if (user) {
      return user.username;
    }
  },
  posts: function(username) {
    return Posts.find({username: username});
  }
});

Posts.allow({
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
