Router.route('/admin', {
  name: 'admin'
}, function () {
  this.render('admin');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/', {
  name: 'home',
  data: function() {
    return Posts.find();
  },
  waitOn: function () {
    return [
      Meteor.subscribe('posts', 'admin')
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
