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
  insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
		label: 'Title'
  },
  intro: {
    type: String,
    label: 'Introduction'
  },
  content: {
    type: String,
    label: 'Content'
  }
});
