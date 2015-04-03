Meteor.publish('posts', function() {
  var currentUserId = this.userId;
  return Posts.find({userId: currentUserId});
});
