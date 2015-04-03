Meteor.publish('posts', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  var currentUserId = this.userId;
  return Posts.find({userId: currentUserId}, options);
});

Meteor.publish('post', function(id) {
  check(id, String)
  return Posts.find(id);
});
