Router.route('/admin', {
  name: 'admin',
  data: function() {
    return Posts.findOne({userId: this.userId});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('posts', Meteor.userId())
    ]
  },
  action: function () {
    if (this.ready())
      this.render('admin');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/', {
  name: 'home',
  data: function() {
    return Posts.findOne({userId: this.userId});
  },
  waitOn: function () {
    return [
      Meteor.subscribe('posts', Meteor.userId())
    ]
  },
  action: function () {
    if (this.ready())
      this.render('home');
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
