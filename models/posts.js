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
  'insert': function(userId, doc) {
		return !!userId;
	},
	'update': function(userId, doc) {
		return !!userId;
	},
	'remove': function(userId, doc) {
		return !!userId;
	}
});

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: 'Title',
		max: 50,
		autoform: {
      afFieldInput: {
        class: 'title',
				placeholder: 'Title',
				autofocus: true
      }
    }
  },
  intro: {
    type: String,
    label: 'Introduction',
    max: 200,
    autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'intro',
        placeholder: 'Introduction'
      }
    }
  },
  content: {
    type: String,
    label: 'Content',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
        class: 'markdown content',
        placeholder: 'Add some markdown... or not... :)'
      }
    }
  }
}));
