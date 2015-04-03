Router.route('/', {
  name: 'home'
}, function () {
  this.render('home');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/admin', {
  name: 'admin'
}, function () {
  this.render('admin');
  SEO.set({ title: Meteor.App.NAME });
});
