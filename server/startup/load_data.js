function loadUser(user) {
  var userAlreadyExists = typeof Meteor.users.findOne({ username : user.username }) === 'object';

  if (!userAlreadyExists) {
    Accounts.createUser(user);
  }
}

Meteor.startup(function () {
  var users = YAML.eval(Assets.getText('users.yml'));

  for (key in users) if (users.hasOwnProperty(key)) {
    loadUser(users[key]);
  }

  if (Posts.find().count() === 0) {
    var now = Date.now(),
        admin = Meteor.users.findOne();

    Posts.insert({
      title: 'Hello World',
      intro: 'This is a software blog.',
      content: '##Let us begin!\n\nThis is only a test to verify that your app is working.',
      created: now,
      updated: now,
      author: admin.username,
      contentCall: function() {
        return this.content;
      }
    });
  }
});
